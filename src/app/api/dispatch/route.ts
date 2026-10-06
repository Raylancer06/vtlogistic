import { NextResponse } from 'next/server';
import { sendDispatchEmail, generateMailtoUrl, OFFICIAL_EMAIL, OFFICIAL_WHATSAPP } from '@/lib/email';
import { checkSpam } from '@/lib/antispam';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Extract client IP address for sliding-window rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : (realIp || '127.0.0.1');

    // Run multi-layered anti-spam check (honeypot, timing, phone dummy check, keyword/link filters, rate limit)
    const spamResult = checkSpam({
      honeypot: data.website || data.honeypot,
      renderedAt: data.renderedAt,
      name: data.name,
      phone: data.phone,
      email: data.email,
      company: data.company,
      notes: [data.notes, data.details, data.pickup, data.dropoff].filter(Boolean).join(' '),
      clientIp,
    });

    if (spamResult.isSpam) {
      return NextResponse.json(
        { error: spamResult.reason || 'Spam or automated bot submission blocked' },
        { status: 400 }
      );
    }

    // Generate a unique tracking manifest ID
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `VT-${new Date().getFullYear()}-${randomNum}`;
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const payload = {
      referenceId,
      service: data.service || 'Logistics Inquiry',
      vehicle: data.vehicle,
      pickup: data.pickup,
      dropoff: data.dropoff,
      name: data.name,
      company: data.company,
      phone: data.phone,
      email: data.email,
      urgency: data.urgency,
      notes: data.notes || data.details,
      timestamp,
    };

    // Attempt email delivery to official inbox info@vtlogistic.in
    const emailResult = await sendDispatchEmail(payload);

    // Generate direct mailto link for client-side transmission
    const mailtoUrl = generateMailtoUrl(payload);

    // Generate WhatsApp transmission link
    const waText = encodeURIComponent(
      `*VT LOGISTIC SERVICES - DISPATCH MANIFEST*\n\n` +
      `*Reference ID:* ${referenceId}\n` +
      `*Category:* ${payload.service}\n` +
      `${payload.vehicle ? `*Vehicle:* ${payload.vehicle}\n` : ''}` +
      `${payload.pickup ? `*Origin:* ${payload.pickup}\n` : ''}` +
      `${payload.dropoff ? `*Destination:* ${payload.dropoff}\n` : ''}` +
      `*Client:* ${payload.name || 'Enterprise Client'}${payload.company ? ` (${payload.company})` : ''}\n` +
      `*Phone:* +91 ${payload.phone}\n` +
      `${payload.email ? `*Email:* ${payload.email}\n` : ''}` +
      `${payload.urgency ? `*Urgency:* ${payload.urgency}\n` : ''}` +
      `${payload.notes ? `*Notes:* ${payload.notes}\n` : ''}\n` +
      `_Status: Transmitted to Jhajjar Central Operations Desk_`
    );
    const whatsAppUrl = `https://wa.me/${OFFICIAL_WHATSAPP}?text=${waText}`;

    // Response with tracking payload
    return NextResponse.json({
      success: true,
      referenceId,
      timestamp,
      officialEmail: OFFICIAL_EMAIL,
      dispatchedTo: 'Jhajjar Central Control Tower (Haryana)',
      emailDelivery: emailResult.message,
      mailtoUrl,
      whatsAppUrl,
      data: payload,
    });
  } catch (error) {
    console.error('Dispatch API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process dispatch request' },
      { status: 500 }
    );
  }
}
