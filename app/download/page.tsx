import type { Metadata } from 'next';
import { DownloadPageContent } from '@/components/features/download/DownloadPageContent';

export const metadata: Metadata = {
  title: 'Download | Decoy Phrase',
  description:
    'Transform and recover your original seed phrase anytime. Download the Decoy Generator for MacOS, Windows, Linux, or Android.',
  keywords: ['download', 'decoy generator', 'seed phrase', 'macos', 'windows', 'linux', 'android'],
};

export default function DownloadPage() {
  return <DownloadPageContent />;
}
