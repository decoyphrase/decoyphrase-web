/**
 * Discord API Type Definitions
 * Based on Discord API v10
 */

export interface DiscordFooter {
  text: string;
  icon_url?: string;
}

export interface DiscordImage {
  url: string;
  height?: number;
  width?: number;
}

export interface DiscordThumbnail {
  url: string;
  height?: number;
  width?: number;
}

export interface DiscordAuthor {
  name: string;
  url?: string;
  icon_url?: string;
}

export interface DiscordField {
  name: string;
  value: string;
  inline?: boolean;
}

export interface DiscordEmbed {
  title?: string;
  type?: 'rich' | 'image' | 'video' | 'gifv' | 'article' | 'link';
  description?: string;
  url?: string;
  timestamp?: string; // ISO8601
  color?: number; // Integer representation of hex color
  footer?: DiscordFooter;
  image?: DiscordImage;
  thumbnail?: DiscordThumbnail;
  video?: DiscordImage;
  provider?: { name?: string; url?: string };
  author?: DiscordAuthor;
  fields?: DiscordField[];
}

export interface DiscordWebhookPayload {
  content?: string;
  username?: string;
  avatar_url?: string;
  tts?: boolean;
  embeds?: DiscordEmbed[];
}

/**
 * Data shape representing the submission data passed to the notification service.
 * Represents the union of fields available in Feedback and Support forms.
 */
export interface DiscordSubmissionData {
  name: string;
  email: string;
  subject: string;
  description: string;
  // Support specific optional fields
  category?: string | undefined;
  appVersion?: string | undefined;
  referenceLink?: string | undefined;
}
