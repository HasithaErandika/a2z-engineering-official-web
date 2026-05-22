import { site } from '../data/site';
import { inquiryTypeMap } from '../data/inquiryTypes';
import type { PreferredContactMethod } from '../data/inquiryTypes';

export interface ContactFormPayload {
  inquiryId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization?: string;
  sector?: string;
  location: string;
  message: string;
  contactMethod: PreferredContactMethod;
  contactMethodOther?: string;
}

function buildEmailBody(data: ContactFormPayload): string {
  const inquiry = inquiryTypeMap[data.inquiryId];
  const replyLabels: Record<PreferredContactMethod, string> = {
    email: 'Email',
    whatsapp: 'WhatsApp',
    phone: 'Phone call',
    other: data.contactMethodOther?.trim() || 'Other',
  };

  return [
    `Inquiry type: ${inquiry?.label ?? data.inquiryId}`,
    `Preferred reply via: ${replyLabels[data.contactMethod]}`,
    data.contactMethod === 'other' && data.contactMethodOther
      ? `Other channel: ${data.contactMethodOther}`
      : null,
    '',
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    data.organization ? `Organization: ${data.organization}` : null,
    data.sector ? `Sector: ${data.sector}` : null,
    `Location: ${data.location}`,
    '',
    'Message:',
    data.message,
  ]
    .filter(Boolean)
    .join('\n');
}

/** Sends inquiry to info@ and indika@ via FormSubmit (AJAX). */
export async function submitInquiry(data: ContactFormPayload): Promise<void> {
  const inquiry = inquiryTypeMap[data.inquiryId];
  const subject = `A2Z Engineering — ${inquiry?.shortLabel ?? 'Inquiry'} from ${data.firstName} ${data.lastName}`;

  const payload = {
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
    _cc: site.emailCc,
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    phone: data.phone,
    organization: data.organization || '—',
    inquiry_type: inquiry?.label ?? data.inquiryId,
    reply_via: data.contactMethod,
    reply_other: data.contactMethodOther || '—',
    sector: data.sector || '—',
    location: data.location,
    message: data.message,
    _text: buildEmailBody(data),
  };

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Unable to send inquiry. Please email us directly.');
  }

  const result = (await response.json()) as { success?: string | boolean };
  if (String(result.success) !== 'true') {
    throw new Error('Unable to send inquiry. Please email us directly.');
  }
}

/** Fallback opens the user mail client with both recipients. */
export function mailtoInquiryFallback(data: ContactFormPayload): void {
  const inquiry = inquiryTypeMap[data.inquiryId];
  const subject = encodeURIComponent(
    `A2Z Inquiry — ${inquiry?.shortLabel ?? 'General'} — ${data.firstName} ${data.lastName}`
  );
  const body = encodeURIComponent(buildEmailBody(data));
  const to = site.inquiryRecipients.join(',');
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}
