/**
 * Navigation Data
 * Centralized navigation menu configuration for Header component
 */

import { type NavKey } from '@/lib/i18n/translations';

export interface NavItem {
  label: NavKey;
  href?: string;
  external?: boolean;
  children?: ReadonlyArray<NavItem>;
}

export interface NavAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'ghost';
}

/**
 * Main navigation menu items
 */
export const mainNavItems: ReadonlyArray<NavItem> = [
  {
    label: 'about',
    children: [
      {
        label: 'userGuide',
        href: 'https://decoy-phrase.gitbook.io/documentation-decoy-phrase/user-guide',
        external: true,
      },
      {
        label: 'faq',
        href: 'https://decoy-phrase.gitbook.io/documentation-decoy-phrase/faq',
        external: true,
      },
      { label: 'liveMetrics', href: '/metrics' },
    ],
  },
  {
    label: 'products',
    children: [
      { label: 'decoyGenerator', href: '/download' },
      { label: 'permanentStorage', href: 'https://decoyphrasestorage.arweave.net/' },
      {
        label: 'permanentWeb',
        href: 'https://decoy-phrase.gitbook.io/documentation-decoy-phrase/products-and-features/permanent-web',
      },
    ],
  },
  {
    label: 'donate',
    href: '/donate',
  },
  {
    label: 'docs',
    href: 'https://decoy-phrase.gitbook.io/documentation-decoy-phrase/',
    external: true,
  },
  {
    label: 'connect',
    children: [
      { label: 'twitter', href: 'https://twitter.com/decoyphrase', external: true },
      { label: 'youtube', href: 'https://youtube.com/@decoyphrase', external: true },
      { label: 'discord', href: 'https://discord.gg/q9cYTxtagJ', external: true },
      { label: 'github', href: 'https://github.com/decoyphrase', external: true },
      { label: 'feedback', href: '/feedback' },
    ],
  },
];

/**
 * Available languages
 */

export const languages = [
  { code: 'EN', label: 'English' },
  { code: 'ZH', label: '汉语' }, // Mandarin
  { code: 'RU', label: 'Русский' }, // Russian
  { code: 'ES', label: 'Español' }, // Spanish
  { code: 'FR', label: 'Français' }, // French
  { code: 'ID', label: 'Bahasa Indonesia' }, // Indonesia
  { code: 'PT', label: 'Português' }, // Portuguese
  { code: 'VI', label: 'Tiếng Việt' }, // Vietnamese
  { code: 'DE', label: 'Deutsch' }, // German
  { code: 'TR', label: 'Türkçe' }, // Turkish
  { code: 'KO', label: '한국어' }, // Korean
  { code: 'UK', label: 'Українська' }, // Ukrainian
  { code: 'AR', label: 'العربية' }, // Arabic
  { code: 'IT', label: 'Italiano' }, // Italian
  { code: 'PL', label: 'Polski' }, // Polish
  { code: 'JA', label: '日本語' }, // Japanese
  { code: 'NL', label: 'Nederlands' }, // Dutch
  { code: 'EL', label: 'Ελληνικά' }, // Greek
  { code: 'FI', label: 'Suomi' }, // Finnish
  { code: 'HI', label: 'हिन्दी' }, // Hindi
] as const;

export type LanguageCode = (typeof languages)[number]['code'];
