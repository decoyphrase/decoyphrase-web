/**
 * External Links
 * All external URLs and social media links
 */

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/decoyphrase',
  youtube: 'https://youtube.com/@decoyphrase',
  discord: 'https://discord.gg/q9cYTxtagJ',
  github: 'https://github.com/decoyphrase',
} as const;

export const DOCUMENTATION_LINKS = {
  docs: '/docs',
  userGuide: '/docs/user-guide',
  faq: '/docs/faq',
  brandKit: '/docs/brand-kit',
} as const;

export const DOWNLOAD_LINKS = {
  windows: '#', // TODO: Add actual download URL
  macos: '#',
  linux: '#',
  android: '#',
} as const;

export const PARTNER_LINKS = {
  arweave: 'https://arweave.org',
  ao: 'https://ao.arweave.dev',
  arIo: 'https://ar.io',
} as const;

/**
 * Navigation menu structure matching PRD spec
 */
export const NAV_MENU = [
  {
    label: 'About Us',
    children: [
      { label: 'User Guide', href: DOCUMENTATION_LINKS.userGuide },
      { label: 'FAQ', href: DOCUMENTATION_LINKS.faq },
      { label: 'Brand Kit', href: DOCUMENTATION_LINKS.brandKit },
      { label: 'Live Metrics', href: '/metrics' },
      { label: '$DECOY', href: '#' },
    ],
  },
  {
    label: 'Products',
    children: [
      {
        label: 'Decoy Generator',
        children: [
          { label: 'Android', href: DOWNLOAD_LINKS.android, external: true },
          { label: 'Windows', href: DOWNLOAD_LINKS.windows, external: true },
          { label: 'macOS', href: DOWNLOAD_LINKS.macos, external: true },
          { label: 'Linux', href: DOWNLOAD_LINKS.linux, external: true },
        ],
      },
      { label: 'Permanent Storage', href: '#' },
    ],
  },
  {
    label: 'Donate',
    href: '/donate',
  },
  {
    label: 'Docs',
    href: DOCUMENTATION_LINKS.docs,
  },
  {
    label: 'Connect',
    children: [
      { label: 'X / Twitter', href: SOCIAL_LINKS.twitter, external: true },
      { label: 'YouTube', href: SOCIAL_LINKS.youtube, external: true },
      { label: 'Discord', href: SOCIAL_LINKS.discord, external: true },
      { label: 'GitHub', href: SOCIAL_LINKS.github, external: true },
      { label: 'Feedback & Issues', href: '/feedback' },
    ],
  },
] as const;
