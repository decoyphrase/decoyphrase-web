/**
 * Feedback Service (Client-side)
 * Submits feedback directly to Google Forms.
 * Note: Discord notifications are disabled in static mode to avoid exposing webhook secrets.
 */

const FEEDBACK_FORM_ID = '1sv2dScfztSYywqA2uCDFX-XWmIeMGFKljco7LbMU9gI';
const FEEDBACK_FORM_URL = `https://docs.google.com/forms/d/${FEEDBACK_FORM_ID}/formResponse`;

const SUPPORT_FORM_URL = `https://docs.google.com/forms/d/e/1FAIpQLSfU5CtCzQSuFUch7DaxPP476BinHbGqrZ_bhHC2_tecbFQX-A/formResponse`;

const FEEDBACK_ENTRIES = {
  name: 'entry.672920759',
  subject: 'entry.1672729114',
  description: 'entry.593227457',
  email: 'entry.1593783117',
};

const SUPPORT_ENTRIES = {
  name: 'entry.672920759',
  category: 'entry.1234713877',
  subject: 'entry.301294197',
  appVersion: 'entry.2059021503',
  description: 'entry.1532335717',
  referenceLink: 'entry.370915179',
  email: 'entry.752906228',
};

import { DiscordSubmissionData } from '@/types/discord';

export async function submitFeedback(type: 'feedback' | 'support', data: DiscordSubmissionData) {
  const formData = new URLSearchParams();
  let targetUrl = '';

  if (type === 'feedback') {
    targetUrl = FEEDBACK_FORM_URL;
    formData.append(FEEDBACK_ENTRIES.name, data.name);
    formData.append(FEEDBACK_ENTRIES.email, data.email);
    formData.append(FEEDBACK_ENTRIES.subject, data.subject);
    formData.append(FEEDBACK_ENTRIES.description, data.description);
  } else {
    targetUrl = SUPPORT_FORM_URL;
    formData.append(SUPPORT_ENTRIES.name, data.name);
    formData.append(SUPPORT_ENTRIES.email, data.email);
    if (data.category) formData.append(SUPPORT_ENTRIES.category, data.category);
    formData.append(SUPPORT_ENTRIES.subject, data.subject);
    formData.append(SUPPORT_ENTRIES.description, data.description);
    if (data.appVersion) formData.append(SUPPORT_ENTRIES.appVersion, data.appVersion);
    if (data.referenceLink) formData.append(SUPPORT_ENTRIES.referenceLink, data.referenceLink);
  }

  // Submit to Google Forms (No-CORS mode as Google doesn't return CORS headers)
  // This might result in an opaque response but the data is still sent.
  return fetch(targetUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  });
}
