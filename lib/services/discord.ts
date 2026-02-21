import { DiscordWebhookPayload, DiscordField, DiscordSubmissionData } from '@/types/discord';

/**
 * Colors for Discord Embeds
 */
const COLORS = {
  FEEDBACK: 0x333333, // Dark Grey/Black for generic feedback
  SUPPORT: 0x5865f2, // Blurple for support tickets
};

/**
 * Service to send notifications to Discord via Webhook
 */
export async function sendDiscordNotification(
  data: DiscordSubmissionData,
  type: 'feedback' | 'support',
  ticketId: string
): Promise<boolean> {
  const webhookUrl =
    process.env.DISCORD_WEBHOOK_URL ||
    'https://discord.com/api/webhooks/1468542610485411946/eBlUQqTCGw-1iuC-QjzNslYt4dwSKSaKqHn-F5Ay31BjONgFBiq7jOZOEKMk-Em6HLbS';

  // Silently skip if no webhook is configured (Graceful Degradation)
  if (!webhookUrl) {
    console.warn('DISCORD_WEBHOOK_URL is not set. Skipping notification.');
    return false;
  }

  try {
    const isSupport = type === 'support';
    const timestamp = new Date().toISOString();

    // 1. Construct Fields
    const fields: DiscordField[] = [
      { name: 'Ticket ID', value: `\`${ticketId}\``, inline: true },
      { name: 'Type', value: isSupport ? 'Support Request' : 'General Feedback', inline: true },
    ];

    // Add specific fields based on data
    if (data.name) fields.push({ name: 'User', value: data.name, inline: true });

    // Support specific fields
    if (isSupport) {
      if (data.category) fields.push({ name: 'Category', value: data.category, inline: true });
      if (data.appVersion)
        fields.push({ name: 'App Version', value: `\`${data.appVersion}\``, inline: true });
      if (data.referenceLink)
        fields.push({ name: 'Reference', value: data.referenceLink, inline: false });
    }

    // Add Subject & Description
    if (data.subject) fields.push({ name: 'Subject', value: `**${data.subject}**`, inline: false });
    if (data.description)
      fields.push({ name: 'Description', value: data.description, inline: false });

    // 2. Construct Payload
    const payload: DiscordWebhookPayload = {
      username: 'DecoyPhrase Feedback Bot',
      avatar_url: 'https://decoyphrase.com/icon.png', // Optional: Replace with actual asset URL if available
      embeds: [
        {
          title: isSupport ? 'New Support Ticket' : 'New Feedback Received',
          color: isSupport ? COLORS.SUPPORT : COLORS.FEEDBACK,
          timestamp: timestamp,
          fields: fields,
          footer: {
            text: 'DecoyPhrase Web System',
          },
        },
      ],
    };

    // 3. Send Request using native fetch (Edge Compatible)
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Discord Webhook Failed: ${response.status} ${response.statusText}`);
      return false;
    }

    return true;
  } catch (error) {
    // Catch network errors or timeouts without crashing the main flow
    console.error('Discord Notification Error:', error);
    return false;
  }
}
