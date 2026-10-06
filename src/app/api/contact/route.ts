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
      message: data.details,
      clientIp,
    });

    if (spamResult.isSpam) {
      return NextResponse.json(
        { error: spamResult.reason || 'Spam or automated bot submission blocked' },
        { status: 400 }
      );
    }

    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `VT-CNT-${new Date().getFullYear()}-${randomNum}`;
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
      service: data.service || 'Direct Inquiry',
      vehicle: data.vehicle,
      pickup: data.origin,
      dropoff: data.destination,
      name: data.name,
      company: data.company,
      phone: data.phone,
      email: data.email,
      urgency: data.urgency || 'Standard Inquiry',
      notes: data.details,
      timestamp,
    };

    // Send email to info@vtlogistic.in
    const emailResult = await sendDispatchEmail(payload);
    const mailtoUrl = generateMailtoUrl(payload);

    const waText = encodeURIComponent(
      `*VT LOGISTIC SERVICES - CONTACT INQUIRY*\n\n` +
      `*Reference:* ${referenceId}\n` +
      `*Name:* ${data.name}\n` +
      `*Company:* ${data.company || 'N/A'}\n` +
      `*Phone:* +91 ${data.phone}\n` +
      `*Email:* ${data.email || 'N/A'}\n` +
      `*Service:* ${data.service}\n` +
      `*Corridor:* ${data.origin || 'N/A'} → ${data.destination || 'N/A'}\n` +
      `${data.details ? `*Notes:* ${data.details}\n` : ''}\n` +
      `_Status: Transmitted to info@vtlogistic.in & Jhajjar Desk_`
    );
    const whatsAppUrl = `https://wa.me/${OFFICIAL_WHATSAPP}?text=${waText}`;

    return NextResponse.json({
      success: true,
      referenceId,
      timestamp,
      officialEmail: OFFICIAL_EMAIL,
      emailDelivery: emailResult.message,
      mailtoUrl,
      whatsAppUrl,
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
