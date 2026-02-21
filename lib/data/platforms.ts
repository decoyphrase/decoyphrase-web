/**
 * Platform Download Data
 * Configuration for download page platform cards
 */

export interface PlatformInfo {
  id: string;
  name: string;
  category: 'Desktop' | 'Mobile';
  description: string;
  downloadUrl: string;
  icon: 'apple' | 'windows' | 'linux' | 'android';
  version?: string;
  fileSize?: string;
}

export const platforms: PlatformInfo[] = [
  {
    id: 'macos',
    name: 'MacOS',
    category: 'Desktop',
    description: 'Transform and recover your original seed phrase anytime.',
    downloadUrl:
      'https://github.com/decoyphrase/decoyphrase-app/releases/download/v2.0.8/decoyphrase-app-v2.0.8-macos.zip',
    icon: 'apple',
    version: '2.0.8',
  },
  {
    id: 'windows',
    name: 'Windows',
    category: 'Desktop',
    description: 'Transform and recover your original seed phrase anytime.',
    downloadUrl:
      'https://github.com/decoyphrase/decoyphrase-app/releases/download/v2.0.8/decoyphrase-app-v2.0.8-windows.zip',
    icon: 'windows',
    version: '2.0.8',
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'Desktop',
    description: 'Transform and recover your original seed phrase anytime.',
    downloadUrl:
      'https://github.com/decoyphrase/decoyphrase-app/releases/download/v2.0.8/decoyphrase-app-v2.0.8-.linux.zip',
    icon: 'linux',
    version: '2.0.8',
  },
  {
    id: 'android',
    name: 'Android',
    category: 'Mobile',
    description: 'Transform and recover your original seed phrase anytime.',
    downloadUrl:
      'https://github.com/decoyphrase/decoyphrase-app/releases/download/v2.0.8/decoyphrase-app-v2.0.8-android.zip',
    icon: 'android',
    version: '2.0.8',
  },
];
