/**
 * Footer Data
 * Centralized footer links and content configuration
 */

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: 'twitter' | 'youtube' | 'discord' | 'github' | 'forum';
  href: string;
  label: string;
}

/**
 * Footer link columns
 */
export const footerColumns: FooterColumn[] = [
  {
    title: 'Decoy Phrase',
    links: [
      { label: 'Docs', href: 'https://decoy-phrase.gitbook.io/documentation-decoy-phrase/' },
      {
        label: 'User Guide',
        href: 'https://decoy-phrase.gitbook.io/documentation-decoy-phrase/user-guide',
      },
      { label: 'Donate', href: '/donate' },
      { label: 'FAQ', href: 'https://decoy-phrase.gitbook.io/documentation-decoy-phrase/faq' },
      { label: 'Live Metrics', href: '/metrics' },
    ],
  },
  {
    title: 'Core Components',
    links: [
      {
        label: 'Decoy Generator',
        href: 'https://decoy-phrase.gitbook.io/documentation-decoy-phrase/products-and-features/decoy-phrase-generator',
      },
      {
        label: 'Permanent Storage',
        href: 'https://decoy-phrase.gitbook.io/documentation-decoy-phrase/products-and-features/permanent-storage',
      },
      {
        label: 'Permanent Web',
        href: 'https://decoy-phrase.gitbook.io/documentation-decoy-phrase/products-and-features/permanent-web',
      },
    ],
  },
  {
    title: 'Download Generator',
    links: [
      { label: 'Android', href: '/download' },
      { label: 'Windows', href: '/download' },
      { label: 'macOS', href: '/download' },
      { label: 'Linux', href: '/download' },
    ],
  },
];

/**
 * Social media links
 */
export const socialLinks: SocialLink[] = [
  { platform: 'twitter', href: 'https://twitter.com/decoyphrase', label: 'Follow us on X' },
  { platform: 'youtube', href: 'https://youtube.com/@decoyphrase', label: 'Watch on YouTube' },
  { platform: 'discord', href: 'https://discord.gg/eQRBtGz5mA', label: 'Join Discord' },
  { platform: 'github', href: 'https://github.com/decoyphrase', label: 'View on GitHub' },
  { platform: 'forum', href: '#', label: 'Community Forum' },
];

/**
 * Footer bottom links
 */
export const legalLinks: FooterLink[] = [
  {
    label: 'Privacy Policies',
    href: 'https://decoy-phrase.gitbook.io/documentation-decoy-phrase/legal/privacy-policy',
  },
  {
    label: 'Terms of Service',
    href: 'https://decoy-phrase.gitbook.io/documentation-decoy-phrase/legal/terms-of-service',
  },
];

/**
 * Brand mission statement
 */
export const missionStatement = {
  text: 'Decoy Phrase is a non-profit initiative removing third parties from seed phrase protection. Donations support permanent storage and development, keeping the system free and inheritable.',
  ctaText: 'To support Decoy Phrase, you can contribute through donations.',
  ctaHref: '/donate',
};
