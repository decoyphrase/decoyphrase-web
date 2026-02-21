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

/**
 * Available platforms for download
 */
export const platforms: PlatformInfo[] = [
  {
    id: 'macos',
    name: 'MacOS',
    category: 'Desktop',
    description: 'Transform and recover your original seed phrase anytime.',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1xmWgNoYhGFadbraC8Gu1ZdlHLaT3lUf7',
    icon: 'apple',
    version: '1.0.18',
  },
  {
    id: 'windows',
    name: 'Windows',
    category: 'Desktop',
    description: 'Transform and recover your original seed phrase anytime.',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1cNfAgorptgj_q6O-OXzaoDtPKOEY84cp',
    icon: 'windows',
    version: '1.0.18',
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'Desktop',
    description: 'Transform and recover your original seed phrase anytime.',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1D_S_BqIwCMU-WB997CvIWh3Cw9vAFT86',
    icon: 'linux',
    version: '1.0.18',
  },
  {
    id: 'android',
    name: 'Android',
    category: 'Mobile',
    description: 'Transform and recover your original seed phrase anytime.',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1xlD4jRF0BeB3vfBEU1ob3ngviDxKekTc',
    icon: 'android',
    version: '1.0.18',
  },
];
