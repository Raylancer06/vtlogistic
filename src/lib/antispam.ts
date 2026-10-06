/**
 * Advanced Anti-Spam Protection Suite for VT Logistics
 * 
 * Protects all enquiry forms (Contact page, Quote section, Dispatch modal):
 * 1. Honeypot Trap Field (invisible to users, filled only by bots)
 * 2. Time-Elapsed Verification (blocks automated headless scripts < 1.5s)
 * 3. Phone Number Strict Verification (blocks dummy/repeating numbers & invalid formats)
 * 4. Link & Spam Keyword Heuristics (blocks URL injections, crypto, casino, SEO spam)
 * 5. IP Sliding Window Rate Limiting (prevents rapid automated inbox flooding)
 */

interface AntiSpamInput {
  honeypot?: string;
  renderedAt?: number | string;
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  message?: string;
  notes?: string;
  clientIp?: string;
}

export interface AntiSpamResult {
  isSpam: boolean;
  reason?: string;
}

// In-memory rate limiting map: ip -> timestamps[]
const ipSubmissionTracker = new Map<string, number[]>();

export function checkSpam(input: AntiSpamInput): AntiSpamResult {
  // 1. Honeypot trap check: Real users never see or fill this field
  if (input.honeypot && input.honeypot.trim().length > 0) {
    return { isSpam: true, reason: 'Automated submission detected (honeypot trap)' };
  }

  // 2. Submission speed check: Real users take at least 1.5 seconds to fill form
  if (input.renderedAt) {
    const renderedTime = typeof input.renderedAt === 'string' ? parseInt(input.renderedAt, 10) : input.renderedAt;
    if (!isNaN(renderedTime) && renderedTime > 0) {
      const elapsed = Date.now() - renderedTime;
      if (elapsed < 1500) {
        return { isSpam: true, reason: 'Submission completed too fast (< 1.5s script)' };
      }
    }
  }

  // 3. Phone number validation
  if (input.phone) {
    const cleanPhone = input.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      return { isSpam: true, reason: 'Please provide a valid 10-digit mobile number' };
    }

    // Block common repeating/dummy numbers
    const dummyPatterns = [
      '0000000000',
      '1111111111',
      '2222222222',
      '3333333333',
      '4444444444',
      '5555555555',
      '6666666666',
      '7777777777',
      '8888888888',
      '9999999999',
      '1234567890',
      '0123456789',
      '9876543210',
    ];
    if (dummyPatterns.some((pattern) => cleanPhone.includes(pattern))) {
      return { isSpam: true, reason: 'Invalid or dummy test phone number detected' };
    }

    // Standard 10-digit mobile check (last 10 digits should start with 6, 7, 8, or 9 for Indian mobile networks)
    const last10 = cleanPhone.slice(-10);
    if (!/^[6-9]\d{9}$/.test(last10)) {
      return { isSpam: true, reason: 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9' };
    }
  }

  // 4. Link & phishing content scan
  const allText = [
    input.name || '',
    input.company || '',
    input.message || '',
    input.notes || '',
  ].join(' ').toLowerCase();

  // Block links / URLs in inquiry fields
  const urlPattern = /(https?:\/\/|www\.|\.ru\/|\.xyz\/|\.top\/|<a\s|\[url=)/i;
  if (urlPattern.test(allText)) {
    return { isSpam: true, reason: 'Promotional links and URLs are not permitted in enquiry fields' };
  }

  // Block common global spambot keyword patterns
  const spamKeywords = [
    'viagra', 'cialis', 'crypto', 'bitcoin', 'ethereum', 'forex', 'casino', 'poker',
    'slot machine', 'free traffic', 'rank your site', 'backlink', 'porn', 'xxx',
    't.me/', 'telegram.me', 'loan approval', 'get rich', 'escort service',
  ];
  for (const kw of spamKeywords) {
    if (allText.includes(kw)) {
      return { isSpam: true, reason: 'Enquiry contains disallowed promotional terms' };
    }
  }

  // 5. Sliding-window IP rate limit (max 6 requests per 10 minutes)
  if (input.clientIp && input.clientIp !== '127.0.0.1' && input.clientIp !== '::1') {
    const now = Date.now();
    const windowMs = 10 * 60 * 1000;
    const timestamps = (ipSubmissionTracker.get(input.clientIp) || []).filter((t) => now - t < windowMs);

    if (timestamps.length >= 6) {
      return { isSpam: true, reason: 'Submission frequency limit reached. Please wait a few minutes before submitting again.' };
    }
    timestamps.push(now);
    ipSubmissionTracker.set(input.clientIp, timestamps);
  }

  return { isSpam: false };
}
