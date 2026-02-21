/**
 * Pros and Cons Comparison Data
 * Data structure for seed phrase backup method comparison
 */

export type CriteriaStatus = 'pro' | 'con';

export interface CriteriaValue {
  status: CriteriaStatus;
  text: string;
}

export interface BackupMethod {
  id: string;
  name: string;
  isHighlighted?: boolean;
  criteria: {
    free: CriteriaValue;
    easyAccess: CriteriaValue;
    highSecurity: CriteriaValue;
    highPrivacy: CriteriaValue;
    lossProof: CriteriaValue;
    destructionProof: CriteriaValue;
  };
}

export const criteriaLabels = {
  free: 'Free',
  easyAccess: 'Easy Access',
  highSecurity: 'High Security',
  highPrivacy: 'High Privacy',
  lossProof: 'Loss-proof',
  destructionProof: 'Destruction-proof',
} as const;

export const backupMethods: BackupMethod[] = [
  {
    id: 'paper',
    name: 'Paper Backup',
    criteria: {
      free: { status: 'pro', text: 'No cost required' },
      easyAccess: { status: 'con', text: 'Requires physical access' },
      highSecurity: { status: 'con', text: 'Easily stolen, photographed, or copied' },
      highPrivacy: { status: 'pro', text: 'Stored completely offline' },
      lossProof: { status: 'con', text: 'Can be misplaced or accidentally discarded' },
      destructionProof: { status: 'con', text: 'Vulnerable to fire, water, and aging' },
    },
  },
  {
    id: 'metal',
    name: 'Metal Backup',
    criteria: {
      free: { status: 'con', text: 'Requires purchase of metal plates' },
      easyAccess: { status: 'con', text: 'Requires physical access and retrieval' },
      highSecurity: { status: 'con', text: 'Anyone finding it can use it directly' },
      highPrivacy: { status: 'pro', text: 'Stored offline with no third parties' },
      lossProof: { status: 'con', text: 'Can still be lost or stolen' },
      destructionProof: { status: 'pro', text: 'Resistant to fire and water' },
    },
  },
  {
    id: 'local-storage',
    name: 'Local Storage',
    criteria: {
      free: { status: 'pro', text: 'Uses existing hardware' },
      easyAccess: { status: 'con', text: 'Requires device, port, and compatibility' },
      highSecurity: { status: 'con', text: 'Vulnerable to malware or theft' },
      highPrivacy: { status: 'pro', text: 'Stored locally without third parties' },
      lossProof: { status: 'con', text: 'Easily lost, damaged, or corrupted' },
      destructionProof: { status: 'con', text: 'Susceptible to hardware failure' },
    },
  },
  {
    id: 'cloud',
    name: 'Cloud Storage',
    criteria: {
      free: { status: 'con', text: 'Requires subscription or paid storage' },
      easyAccess: { status: 'pro', text: 'Accessible from anywhere with login' },
      highSecurity: { status: 'con', text: 'Targeted by hacks and account takeovers' },
      highPrivacy: { status: 'con', text: 'Controlled by third-party providers' },
      lossProof: { status: 'pro', text: 'Redundant backups reduce loss risk' },
      destructionProof: { status: 'con', text: 'Accounts can be deleted or frozen' },
    },
  },
  {
    id: 'encrypted',
    name: 'Encrypted Digital File',
    criteria: {
      free: { status: 'pro', text: 'Can be created using free tools' },
      easyAccess: { status: 'con', text: 'Requires password and correct software' },
      highSecurity: { status: 'con', text: 'Strong only if password is never exposed' },
      highPrivacy: { status: 'con', text: 'Privacy depends on storage location' },
      lossProof: { status: 'con', text: 'Password loss means permanent loss' },
      destructionProof: { status: 'con', text: 'File corruption or deletion is fatal' },
    },
  },
  {
    id: 'shamir',
    name: "Shamir's Secret Sharing",
    criteria: {
      free: { status: 'con', text: 'Requires specialized tools or compatible wallets' },
      easyAccess: { status: 'con', text: 'Requires collecting threshold shares' },
      highSecurity: { status: 'pro', text: 'Single shares are cryptographically useless' },
      highPrivacy: { status: 'pro', text: 'No party holds the full seed phrase' },
      lossProof: { status: 'pro', text: 'Tolerates limited share loss' },
      destructionProof: { status: 'con', text: 'Multiple share loss breaks recovery' },
    },
  },
  {
    id: 'custodian',
    name: 'Custodian',
    criteria: {
      free: { status: 'con', text: 'Custody services usually charge fees' },
      easyAccess: { status: 'pro', text: 'Easy recovery via account access' },
      highSecurity: { status: 'con', text: 'Users depend entirely on third party' },
      highPrivacy: { status: 'con', text: 'Custodian has visibility and control' },
      lossProof: { status: 'con', text: 'Funds can be frozen or confiscated' },
      destructionProof: { status: 'con', text: 'Company failure risks total loss' },
    },
  },
  {
    id: 'splitting',
    name: 'Seed Splitting',
    criteria: {
      free: { status: 'pro', text: 'No cost required' },
      easyAccess: { status: 'con', text: 'Requires collecting all pieces' },
      highSecurity: { status: 'con', text: 'Partial pieces still reveal information' },
      highPrivacy: { status: 'con', text: 'Usually stored in plain form' },
      lossProof: { status: 'con', text: 'Losing one piece breaks recovery' },
      destructionProof: { status: 'con', text: 'Physical damage affects recovery' },
    },
  },
  {
    id: 'lawyer',
    name: 'Lawyer',
    criteria: {
      free: { status: 'con', text: 'Requires ongoing legal fees' },
      easyAccess: { status: 'con', text: 'Access depends on legal procedures' },
      highSecurity: { status: 'con', text: 'Human trust and legal risk involved' },
      highPrivacy: { status: 'con', text: 'Lawyer can access the raw seed' },
      lossProof: { status: 'con', text: 'Subject to human error or disputes' },
      destructionProof: { status: 'con', text: 'Documents can be lost or destroyed' },
    },
  },
  {
    id: 'decoy-phrase',
    name: 'Decoy Phrase',
    isHighlighted: true,
    criteria: {
      free: { status: 'pro', text: 'Free and non-profit system' },
      easyAccess: {
        status: 'pro',
        text: 'Recoverable anytime via permanent storage and downloadable apps',
      },
      highSecurity: { status: 'pro', text: 'Real seed is never stored directly' },
      highPrivacy: { status: 'pro', text: 'Decoy text is meaningless on its own' },
      lossProof: { status: 'pro', text: 'One part alone is useless to attackers' },
      destructionProof: { status: 'pro', text: 'Can be backed up on permanent storage' },
    },
  },
];
