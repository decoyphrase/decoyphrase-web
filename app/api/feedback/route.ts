/**
 * Feedback API Route
 * Proxies feedback submissions to Google Forms
 *
 * @route POST /api/feedback
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { z } from 'zod';
import { sendDiscordNotification } from '@/lib/services/discord';

export const runtime = 'edge';

const FEEDBACK_FORM_ID = '1sv2dScfztSYywqA2uCDFX-XWmIeMGFKljco7LbMU9gI';
const FEEDBACK_FORM_URL = `https://docs.google.com/forms/d/${FEEDBACK_FORM_ID}/formResponse`;

// Support Form (Note the /e/ path in the ID provided by user)
// https://docs.google.com/forms/d/e/1FAIpQLSfU5CtCzQSuFUch7DaxPP476BinHbGqrZ_bhHC2_tecbFQX-A/formResponse
const SUPPORT_FORM_URL = `https://docs.google.com/forms/d/e/1FAIpQLSfU5CtCzQSuFUch7DaxPP476BinHbGqrZ_bhHC2_tecbFQX-A/formResponse`;

// Schema specific to Generic Feedback
const feedbackSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  description: z.string().min(1),
});

// Schema specific to Support Ticket
const supportSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  appVersion: z.string().optional(),
  referenceLink: z.string().optional(),
});

// Discriminator Schema
const requestSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('feedback'), data: feedbackSchema }),
  z.object({ type: z.literal('support'), data: supportSchema }),
]);

// Entry IDs
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Default to 'feedback' if type is missing (backward compatibility)
    const payload = body.type ? body : { type: 'feedback', data: body };

    // Validate entire payload
    const validation = requestSchema.safeParse(payload);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { type, data } = validation.data;
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
      formData.append(SUPPORT_ENTRIES.category, data.category);
      formData.append(SUPPORT_ENTRIES.subject, data.subject);
      formData.append(SUPPORT_ENTRIES.description, data.description);
      if (data.appVersion) formData.append(SUPPORT_ENTRIES.appVersion, data.appVersion);
      if (data.referenceLink) formData.append(SUPPORT_ENTRIES.referenceLink, data.referenceLink);
    }

    // Submit to Google Forms
    const googleResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!googleResponse.ok) {
      console.error(`Google Form submission failed: ${googleResponse.status}`);
      throw new Error('Upstream submission failed');
    }

    // Generate ticket ID
    const ticketId = `TKT-${Date.now().toString(36).toUpperCase()}`;

    // Submit to Discord (Fire and Await - Graceful)
    // We await it because on Edge, background tasks need specific handling (waitUntil).
    // Since we want to be simple and robust, we await it but don't fail if it errors (service handles catch).
    await sendDiscordNotification(data, type, ticketId);

    return NextResponse.json({
      success: true,
      message: `${type === 'feedback' ? 'Feedback' : 'Support ticket'} submitted successfully`,
      ticketId, // Return ticket ID to user
    });
  } catch (error) {
    console.error('Feedback API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
