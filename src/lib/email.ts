import nodemailer from 'nodemailer';

export const OFFICIAL_EMAIL = 'info@vtlogistic.in';
export const OFFICIAL_PHONE = '+91 9053529200';
export const OFFICIAL_WHATSAPP = '919053529200';

interface DispatchEmailPayload {
  referenceId: string;
  service: string;
  vehicle?: string;
  pickup?: string;
  dropoff?: string;
  name?: string;
  company?: string;
  phone: string;
  email?: string;
  urgency?: string;
  notes?: string;
  timestamp: string;
}

export async function sendDispatchEmail(payload: DispatchEmailPayload): Promise<{ success: boolean; message: string }> {
  // If SMTP environment variables are configured, send real email via nodemailer
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || `VT Logistics Dispatch <${OFFICIAL_EMAIL}>`;

  const emailSubject = `[VT Dispatch Manifest - ${payload.referenceId}] ${payload.service} from ${payload.name || payload.company || 'Client'}`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .header { background: #060B14; color: #ffffff; padding: 28px 24px; text-align: left; }
        .badge { display: inline-block; background: #FF7A00; color: #ffffff; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
        .title { font-size: 22px; font-weight: 800; margin: 0 0 4px 0; color: #ffffff; }
        .subtitle { font-size: 13px; color: #94a3b8; margin: 0; }
        .body { padding: 28px 24px; }
        .ref-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px 18px; margin-bottom: 24px; display: flex; justify-content: space-between; }
        .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .table td { padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
        .label { color: #64748b; font-weight: 600; width: 38%; }
        .val { color: #0f172a; font-weight: 700; }
        .notes-box { background: #fffbeb; border: 1px solid #fef3c7; border-radius: 12px; padding: 16px; margin-top: 16px; font-size: 13px; color: #92400e; }
        .footer { background: #f1f5f9; padding: 20px 24px; font-size: 12px; color: #64748b; text-align: center; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <div class="badge">DISPATCH MANIFEST</div>
          <h1 class="title">VT Logistic Services</h1>
          <p class="subtitle">Operational Central Dispatch Desk — Jhajjar, Haryana (124103)</p>
        </div>
        <div class="body">
          <div class="ref-box">
            <div>
              <span style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700;">Reference ID</span><br/>
              <strong style="font-size: 18px; color: #FF7A00; font-family: monospace;">${payload.referenceId}</strong>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700;">Timestamp</span><br/>
              <strong style="font-size: 13px; color: #334155;">${payload.timestamp}</strong>
            </div>
          </div>

          <table class="table">
            <tr><td class="label">Requirement Category</td><td class="val">${payload.service}</td></tr>
            ${payload.vehicle ? `<tr><td class="label">Vehicle Classification</td><td class="val">${payload.vehicle}</td></tr>` : ''}
            ${payload.pickup ? `<tr><td class="label">Origin Corridor</td><td class="val">${payload.pickup}</td></tr>` : ''}
            ${payload.dropoff ? `<tr><td class="label">Destination Corridor</td><td class="val">${payload.dropoff}</td></tr>` : ''}
            <tr><td class="label">Client Name</td><td class="val">${payload.name || 'Not Provided'}</td></tr>
            ${payload.company ? `<tr><td class="label">Company / Organization</td><td class="val">${payload.company}</td></tr>` : ''}
            <tr><td class="label">Contact Phone</td><td class="val"><a href="tel:${payload.phone}" style="color: #FF7A00; text-decoration: none;">+91 ${payload.phone}</a></td></tr>
            ${payload.email ? `<tr><td class="label">Client Email</td><td class="val"><a href="mailto:${payload.email}">${payload.email}</a></td></tr>` : ''}
            ${payload.urgency ? `<tr><td class="label">Deployment Urgency</td><td class="val" style="color: #ea580c;">${payload.urgency}</td></tr>` : ''}
          </table>

          ${payload.notes ? `
            <div class="notes-box">
              <strong>Additional Notes / Specifications:</strong><br/>
              ${payload.notes}
            </div>
          ` : ''}
        </div>
        <div class="footer">
          Received via VT Logistic Services Portal • Delivered to ${OFFICIAL_EMAIL} • Hotline: ${OFFICIAL_PHONE}
        </div>
      </div>
    </body>
    </html>
  `;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: smtpFrom,
        to: OFFICIAL_EMAIL,
        replyTo: payload.email || undefined,
        subject: emailSubject,
        html: htmlContent,
      });

      return { success: true, message: 'Email sent successfully via SMTP' };
    } catch (err: any) {
      console.error('SMTP Delivery Error:', err);
      return { success: false, message: `SMTP Error: ${err.message}` };
    }
  } else {
    // Development or unconfigured SMTP: log structured email payload
    console.log(`[DISPATCH EMAIL TO ${OFFICIAL_EMAIL}]:`, {
      to: OFFICIAL_EMAIL,
      subject: emailSubject,
      payload,
    });
    return { success: true, message: 'Logged email payload (configure SMTP to send live)' };
  }
}

/**
 * Generates a pre-filled mailto: URL for client-side direct email transmission
 */
export function generateMailtoUrl(payload: DispatchEmailPayload): string {
  const subject = encodeURIComponent(`[VT Dispatch Manifest - ${payload.referenceId}] ${payload.service} Inquiry`);
  const bodyText = encodeURIComponent(
`VT LOGISTIC SERVICES - DISPATCH INQUIRY

Manifest Reference: ${payload.referenceId}
Category: ${payload.service}
${payload.vehicle ? `Vehicle: ${payload.vehicle}\n` : ''}${payload.pickup ? `Origin: ${payload.pickup}\n` : ''}${payload.dropoff ? `Destination: ${payload.dropoff}\n` : ''}Client Name: ${payload.name || 'Enterprise Client'}
${payload.company ? `Company: ${payload.company}\n` : ''}Phone: +91 ${payload.phone}
${payload.email ? `Email: ${payload.email}\n` : ''}${payload.urgency ? `Urgency: ${payload.urgency}\n` : ''}${payload.notes ? `\nNotes: ${payload.notes}\n` : ''}
Logged At: ${payload.timestamp}
Target Operations Desk: ${OFFICIAL_EMAIL}
Headquarters Hotline: ${OFFICIAL_PHONE}
Jhajjar, Haryana – 124103, India`
  );

  return `mailto:${OFFICIAL_EMAIL}?subject=${subject}&body=${bodyText}`;
}
