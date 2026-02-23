/**
 * Site Configuration
 * Static site metadata and configuration
 */

export const siteConfig = {
  name: 'Decoy Phrase',
  description:
    'A free, permanent, and secure way to protect and backup your seed phrase. No seeds stored. Loss-proof. Indestructible. No third parties.',
  url: process.env['NEXT_PUBLIC_APP_URL'] ?? 'https://decoyphrase.com',

  // SEO
  keywords: [
    'seed phrase backup',
    'crypto security',
    'arweave storage',
    'decoy phrase',
    'non-custodial',
    'permanent storage',
    'seed phrase protection',
  ],

  // Open Graph
  ogImage: '/images/og-image.png',

  // Social links
  links: {
    twitter: 'https://twitter.com/decoyphrase',
    github: 'https://github.com/decoyphrase',
    discord: 'https://discord.gg/q9cYTxtagJ',
  },

  // Creator/Author
  creator: 'Decoy Phrase Team',
} as const;

/**
 * Navigation configuration
 */
export const navConfig = {
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Donate', href: '/donate' },
    { title: 'Download', href: '/download' },
    { title: 'Metrics', href: '/metrics' },
    { title: 'Feedback', href: '/feedback' },
  ],
} as const;
