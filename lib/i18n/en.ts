import { Translations } from './types';

export const enTranslations: Translations = {
  nav: {
    about: 'About us',
    userGuide: 'User Guide',
    faq: 'FAQ',
    brandKit: 'Brand Kit',
    liveMetrics: 'Live Metrics',
    decoyToken: '$DECOY',
    products: 'Products',
    decoyGenerator: 'Decoy Generator',
    permanentStorage: 'Permanent Storage',
    permanentWeb: 'Permanent Web',
    donate: 'Donate',
    docs: 'Docs',
    connect: 'Connect',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: 'Feedback',
  },
  header: {
    login: 'Login',
    menu: 'Menu',
    language: 'Language',
  },
  footer: {
    columns: {
      decoyPhrase: 'Decoy Phrase',
      coreComponents: 'Core Components',
      downloadGenerator: 'Download Generator',
    },
    links: {
      privacy: 'Privacy Policies',
      terms: 'Terms of Service',
      forum: 'Community Forum',
    },
    mission: {
      text: 'Decoy Phrase is a non-profit initiative removing third parties from seed phrase protection. Donations support permanent storage and development, keeping the system free and inheritable.',
      ctaText: 'To support Decoy Phrase, you can contribute through donations.',
    },
  },
  hero: {
    titlePart1: 'A free, permanent, and secure way to',
    titlePart2: 'protect, and backup your',
    titleHighlight: 'seed phrase',
    subtitle: 'No seeds stored. Loss-proof. Indestructible. No third parties.',
  },
  heroActions: {
    getStarted: 'Get Started Now',
    watchTutorials: 'Watch Tutorials',
    generator: 'Decoy Phrase Generator',
    storage: 'Permanent Storage',
  },
  features: {
    title: 'What Decoy Phrase',
    titleHighlight: 'Delivers',
    subtitle: 'A Complete System for Permanent Secret Protection.',
    cards: {
      generator: {
        title: 'Decoy Phrase Generator',
        description:
          'Transforms your real seed phrase into ordinary, harmless text—fully offline. The same tool is used to create mapping files and recover the original secret when both are provided.',
      },
      storage: {
        title: 'Permanent Storage',
        description:
          'Securely store decoy text and mapping files on permanent storage without relying on cloud providers, custodians, or subscriptions.',
      },
      web: {
        title: 'Permanent Web',
        description:
          'Built on the permanent web, where data cannot be altered, censored, or deleted—designed to last forever.',
      },
    },
  },
  howItWorks: {
    title: 'How Decoy Phrase Works',
    subtitle: 'Simple steps. Strong security. Zero custody.',
    steps: {
      '1': {
        title: 'Transform Your Seed Phrase',
        description:
          'Transform your seed phrase into a decoy text. Processed entirely offline with decoy phrase generator, with no servers, no cloud, and no data collection.',
      },
      '2': {
        title: 'Receive Two Independent Files',
        description:
          'You receive a Decoy Text that looks normal and contains no usable information, and a Mapping File that serves as the only key to recover the original secret—without both, recovery is impossible.',
      },
      '3': {
        title: 'Store Them Separately',
        description:
          'Store the decoy text and mapping file separately. Locally in different locations or in permanent storage using Multi-Password Vaults.',
      },
      '4': {
        title: 'Recover Only When It Matters',
        description:
          'When recovery is needed, use both files in the Decoy Phrase Generator to restore your original seed phrase.',
      },
    },
  },
  prosCons: {
    title: 'Pros and Cons of Seed Phrase Backup',
    subtitle: 'There is no perfect seed phrase backup—only different risks.',
    methods: {
      paper: {
        name: 'Paper Backup',
        criteria: {
          free: 'No cost required',
          easyAccess: 'Requires physical access',
          highSecurity: 'Easily stolen, photographed, or copied',
          highPrivacy: 'Stored completely offline',
          lossProof: 'Can be misplaced or accidentally discarded',
          destructionProof: 'Vulnerable to fire, water, and aging',
        },
      },
      metal: {
        name: 'Metal Backup',
        criteria: {
          free: 'Requires purchase of metal plates',
          easyAccess: 'Requires physical access and retrieval',
          highSecurity: 'Anyone finding it can use it directly',
          highPrivacy: 'Stored offline with no third parties',
          lossProof: 'Can still be lost or stolen',
          destructionProof: 'Resistant to fire and water',
        },
      },
      'local-storage': {
        name: 'Local Storage',
        criteria: {
          free: 'Uses existing hardware',
          easyAccess: 'Requires device, port, and compatibility',
          highSecurity: 'Vulnerable to malware or theft',
          highPrivacy: 'Stored locally without third parties',
          lossProof: 'Easily lost, damaged, or corrupted',
          destructionProof: 'Susceptible to hardware failure',
        },
      },
      cloud: {
        name: 'Cloud Storage',
        criteria: {
          free: 'Requires subscription or paid storage',
          easyAccess: 'Accessible from anywhere with login',
          highSecurity: 'Targeted by hacks and account takeovers',
          highPrivacy: 'Controlled by third-party providers',
          lossProof: 'Redundant backups reduce loss risk',
          destructionProof: 'Accounts can be deleted or frozen',
        },
      },
      encrypted: {
        name: 'Encrypted Digital File',
        criteria: {
          free: 'Can be created using free tools',
          easyAccess: 'Requires password and correct software',
          highSecurity: 'Strong only if password is never exposed',
          highPrivacy: 'Privacy depends on storage location',
          lossProof: 'Password loss means permanent loss',
          destructionProof: 'File corruption or deletion is fatal',
        },
      },
      shamir: {
        name: "Shamir's Secret Sharing",
        criteria: {
          free: 'Requires specialized tools or compatible wallets',
          easyAccess: 'Requires collecting threshold shares',
          highSecurity: 'Single shares are cryptographically useless',
          highPrivacy: 'No party holds the full seed phrase',
          lossProof: 'Tolerates limited share loss',
          destructionProof: 'Multiple share loss breaks recovery',
        },
      },
      custodian: {
        name: 'Custodian',
        criteria: {
          free: 'Custody services usually charge fees',
          easyAccess: 'Easy recovery via account access',
          highSecurity: 'Users depend entirely on third party',
          highPrivacy: 'Custodian has visibility and control',
          lossProof: 'Funds can be frozen or confiscated',
          destructionProof: 'Company failure risks total loss',
        },
      },
      splitting: {
        name: 'Seed Splitting',
        criteria: {
          free: 'No cost required',
          easyAccess: 'Requires collecting all pieces',
          highSecurity: 'Partial pieces still reveal information',
          highPrivacy: 'Usually stored in plain form',
          lossProof: 'Losing one piece breaks recovery',
          destructionProof: 'Physical damage affects recovery',
        },
      },
      lawyer: {
        name: 'Lawyer',
        criteria: {
          free: 'Requires ongoing legal fees',
          easyAccess: 'Access depends on legal procedures',
          highSecurity: 'Human trust and legal risk involved',
          highPrivacy: 'Lawyer can access the raw seed',
          lossProof: 'Subject to human error or disputes',
          destructionProof: 'Documents can be lost or destroyed',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: 'Free and non-profit system',
          easyAccess: 'Recoverable anytime via permanent storage and downloadable apps',
          highSecurity: 'Real seed is never stored directly',
          highPrivacy: 'Decoy text is meaningless on its own',
          lossProof: 'One part alone is useless to attackers',
          destructionProof: 'Can be backed up on permanent storage',
        },
      },
    },
    criteriaLabels: {
      free: 'Free',
      easyAccess: 'Easy Access',
      highSecurity: 'High Security',
      highPrivacy: 'High Privacy',
      lossProof: 'Loss-proof',
      destructionProof: 'Destruction-proof',
    },
  },
  securityDemo: {
    title: 'Security Through Separation',
    subtitle: 'No mapping file, no recovery. No decoy text, no access.',
    annotations: {
      decoy:
        'You must have a decoy text, which acts as the obfuscated representation of your original sensitive data.',
      mapping:
        'You must have the mapping file, which contains the transformation rules required to reconstruct the original data from the decoy text',
      result: 'Your generated seed phrase will appear here',
      clickToGenerate: 'Click here to generate a seed phrase',
    },
    buttons: {
      simulateDecoy: 'Click to simulate placing decoy text',
      placeDecoy: '✓ Decoy text placed',
      simulateMapping: 'Click to simulate uploading the mapping file',
      uploadMapping: 'Update Mapping',
      mappingLoaded: 'Mapping Loaded',
      updateMapping: 'Update new mapping file',
      generate: 'Generate Result',
      decrypting: 'Decrypting...',
    },
    labels: {
      decoyText: 'Decoy text',
      asciiText: 'ASCII text',
      resultPlaceholder: 'Result will appear here...',
    },
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle:
      "These are some questions you might have about Decoy Phrase. Didn't find the answer you were looking for?",
    chatAi: 'Chat to AI about Decoy Phrase!',
    categories: {
      general: 'General',
      products: 'Products',
      security: 'Security & Privacy',
    },
    items: {
      'gen-1': {
        question: 'What Is Decoy Phrase?',
        answer:
          'Decoy Phrase is an offline-first method for protecting and backing up seed phrases and sensitive text — without ever storing the original data.\n\nIt transforms secrets into harmless, ordinary-looking text, with recovery possible only by combining the private mapping file and the transformed text.\n\nFor long-term durability, decoy files and mapping files can be stored permanently via Decoy Phrase Permanent Storage, directly connected to the Arweave blockchain—ensuring they cannot be lost, altered, or deleted.',
      },
      'gen-2': {
        question: 'Is Decoy Phrase free?',
        answer:
          'Yes. Decoy Phrase is completely free to use and operates as a non-profit initiative. All core features—including decoy text generation, mapping file creation, and offline recovery—are available at no cost.\n\nFor Decoy Phrase Permanent Storage, storage is supported through donations. These donations are used to fund the expansion of permanent storage capacity on the Arweave blockchain over time. Any files already stored on the blockchain will remain accessible forever, regardless of the future state of the service.',
      },
      'gen-3': {
        question: 'What is permanent in Decoy Phrase?',
        answer:
          'In Decoy Phrase, the concept of permanence applies to the website, domain, and stored data, —enabled by the Permanent Web and Permanent Storage built on Arweave.',
      },
      'gen-4': {
        question: 'Does Decoy Phrase store my data?',
        answer:
          'No. Decoy Phrase never stores your seed phrase or original sensitive data. The process of generating decoy text and mapping files runs fully offline using the Decoy Phrase Generator. As a result, there is no risk of your secrets being stored on any server.\n\nWhen files are stored in Permanent Storage, all data is encrypted on the client side before being sent to the Arweave blockchain—including passwords, file contents, and file titles.',
      },
      'gen-5': {
        question: 'What happens if I lose both my mapping file and its related decoy text?',
        answer:
          'If you lose both the mapping file and the corresponding decoy text, your original data becomes permanently unrecoverable. Decoy Phrase is intentionally designed without any reset, backup, or recovery mechanism and never stores your original secrets, making recovery technically impossible without both components.\n\nThis is why Decoy Phrase provides Permanent Storage: to reduce the risk of accidental loss by allowing decoy and mapping files to be stored in immutable, long-term storage that cannot be deleted, altered, or silently lost, while still preserving a zero-knowledge, non-custodial design—where all files are encrypted client-side and full control remains with the user.',
      },
      'gen-6': {
        question: 'Do I need to be online to use Decoy Phrase?',
        answer:
          'It depends.\n\nThe Decoy Phrase Generator works fully offline. All core processes—decoy text creation, mapping file generation, and data recovery—run entirely on your device without any internet connection.\n\nHowever, Permanent Storage requires an online connection, as it stores encrypted files on the Arweave blockchain using a zero-knowledge architecture.',
      },
      'gen-7': {
        question: 'Can I recover my seed phrase or sensitive data without third-party assistance?',
        answer:
          'Yes. Decoy Phrase is designed for full self-sovereign use, without intermediaries. By using your decoy text and its related mapping file, the system restores your original data directly on your device, fully offline through the Decoy Phrase Generator—without involving any third party.',
      },
      'gen-8': {
        question: 'Is it safe to share Decoy Text with others?',
        answer:
          'Yes, it is safe.\n\nDecoy Text is designed to look ordinary and contains no usable sensitive information on its own. Without the corresponding mapping file, it cannot be used to recover the original data. Likewise, a mapping file without its related decoy text is also unusable. Therefore, sharing Decoy Text alone does not expose your secret.',
      },
      'gen-9': {
        question: 'How is Decoy Phrase different from a password manager?',
        answer:
          'Decoy Phrase is not an online password manager.\n\nThe transformation of seed phrases, passwords, or other sensitive data is performed fully offline through the Decoy Phrase Generator.\n\nPermanent Storage is used only to store decoy text and mapping files, separated into different storage spaces using the multi-password management feature.\n\nAll files stored in Permanent Storage are encrypted client-side. Even if they are exposed, the decryption keys are held only by the user, making the data unusable to anyone else.\n\nUnlike password managers that store encrypted passwords on servers or in the cloud, Decoy Phrase gives you full control over how and where your sensitive data is stored and recovered.',
      },
      'prod-1': {
        question: 'What is the Decoy Phrase Generator and what are its components?',
        answer:
          "The Decoy Phrase Generator is the core tool in the Decoy Phrase system, combining the Mapping Maker and the Text Generator.\n\nThe Mapping Maker transforms seed phrases or sensitive data into ordinary decoy text and generates a mapping file that serves as the recovery key, while the Text Generator uses that mapping file to restore the original data from the decoy text.\n\nAll processes run entirely on the user's device without an internet connection, ensuring that no sensitive data is ever sent to any server.",
      },
      'prod-2': {
        question: 'What is a Mapping File and why must it be stored separately?',
        answer:
          'A Mapping File is a private (.json) file containing technical information and serves as the only key to recover the original data from the decoy text.\n\nIt does not contain sensitive data directly and is meaningless without its related decoy text. For this reason, the Mapping File must be stored separately from the decoy text. This separation prevents any single file from revealing secrets. Without the correct combination of both, recovery is impossible—meaning no single component contains exploitable sensitive information on its own.',
      },
      'prod-3': {
        question: 'How does Permanent Storage work and what file formats are supported?',
        answer:
          'Permanent Storage is an Arweave-based storage layer that stores decoy text and mapping files permanently and immutably.\n\nIt is designed as write-once, read-forever storage for long-term text backups without relying on traditional servers.\n\nPermanent Storage supports text-based files only, such as .txt, .md, and .json. Other formats like images, videos, or audio files are not supported.\n\nAll uploads are managed through a single account using a Shared Master Wallet, so users do not need to create or manage a blockchain wallet or understand blockchain mechanics. The blockchain complexity is hidden behind a simple user interface.',
      },
      'prod-4': {
        question: 'What are Multi-Password Vaults and how are they used?',
        answer:
          'Multi-Password Vaults are a feature of Permanent Storage that allow a single account to contain multiple isolated storage vaults, each protected by a different password. For example, a user can store decoy text in Vault A and mapping files in Vault B, using separate passwords for each.\n\nEach vault is logically isolated, meaning access to one vault does not grant access to others. As a result, compromising one password exposes only one vault, keeping other sensitive files secure.',
      },
      'prod-5': {
        question: 'Can Decoy Phrase Generator be used on different devices?',
        answer:
          'Yes. The Decoy Phrase Generator is available across platforms. It can run on major desktop operating systems (Windows, macOS, Linux) as well as on Android devices.\n\nBecause all processes run offline on the local device, Decoy Phrase can also be used in environments without internet access or on high-security systems such as air-gapped computers.',
      },
      'prod-6': {
        question: 'Do users need to understand blockchain to use these features?',
        answer:
          'No. Although Decoy Phrase uses blockchain technology (Arweave) behind the scenes for permanent storage, the interface is designed so users do not need to deal with any blockchain-related complexity.\n\nBy using a Shared Master Wallet, users only need to focus on managing their text and passwords—they do not need to create, store, or manage their own blockchain wallets. As a result, all Decoy Phrase features can be used without any prior knowledge of blockchain technology.',
      },
      'sec-1': {
        question: 'How does the system protect user data?',
        answer:
          "Decoy Phrase applies offline-first and zero-knowledge principles, meaning that all sensitive data transformation and encryption are performed entirely on the user's device—without requiring an internet connection or any server.\n\nData is processed and encrypted on the client side (for example, using AES-256-GCM) before being stored in Permanent Storage, so public storage only ever contains encrypted data that cannot be read without the user's keys.\n\nIn addition, no seed phrases or original sensitive data are ever stored on any server, meaning there is no central vault that could become a high-value attack target. This approach removes reliance on third parties and shifts security from trust-based protection to a technical architecture that makes external access impossible by design.",
      },
      'sec-2': {
        question: 'Can Decoy Phrase delete my files in Permanent Storage?',
        answer:
          'No. Decoy Phrase cannot delete your files once they are stored in Permanent Storage. Permanent Storage is built on the Arweave blockchain, where data is immutable by design. Once a file is uploaded, it cannot be removed, modified, or erased by Decoy Phrase—or by anyone else.',
      },
      'sec-3': {
        question: 'How does the system ensure that no sensitive data is stored?',
        answer:
          'Decoy Phrase uses a "transform and separate" principle. Original data is converted offline into ordinary decoy text that appears random and contains no secret meaning. The generated mapping file contains technical recovery information but does not include the original sensitive data.\n\nThese two components must be stored separately (for example, in different locations or protected by different passwords). As a result, no single component ever contains the original secret. Without the mapping file, the decoy text is useless—and without the decoy text, the mapping file is meaningless.\n\nThis method ensures that original sensitive data is never directly stored in the application or on any server.',
      },
      'sec-4': {
        question: 'What does the system know and not know in Permanent Storage?',
        answer:
          "Decoy Phrase is zero-knowledge, meaning the system never knows the contents of user data.\n\nIt cannot see seed phrases, passwords, or original file contents because all data is fully encrypted in the user's local browser before upload.\n\nThe only information visible to the system is non- sensitive public metadata, such as a username(used as a public identifier) and the number of stored files.\n\nThe relationship between decoy text and its mapping file is also unknown to the system.In short, user content and secrets are never exposed—only encrypted data and limited public metadata exist.",
      },
      'sec-5': {
        question:
          "How does Decoy Phrase's security approach differ from traditional systems (such as password managers)?",
        answer:
          "• Original data storage: Traditional password managers store user secrets (passwords, seeds, etc.) inside an encrypted vault. Decoy Phrase never stores original data at all.\n\n• Architecture: Password managers typically rely on servers or cloud infrastructure for synchronization. Decoy Phrase is offline-first, with no backend and no third-party dependency.\n\n• Security model: In password managers, security depends on vault encryption and a master password—if the vault or master password is compromised, all data may be exposed. Decoy Phrase has no such vault. Leaking a single file (either decoy text or mapping file) is not sufficient to recover the original data, because each component has no value on its own.\n\n• Single point of failure: A password manager's vault is a high-value target. Decoy Phrase has no single object that contains secrets; until both components (decoy text and mapping file) are compromised together, there is no primary point of failure to attack.",
      },
      'sec-6': {
        question: "What happens if a decoy file or mapping file falls into someone else's hands?",
        answer:
          '• If only the decoy text is exposed, no secret is revealed. The decoy text is ordinary data with no sensitive meaning and cannot be used without the mapping file.\n\n• If only the mapping file is exposed, the original data remains safe. The mapping file contains only technical character patterns, not secret content, and is useless without its related decoy text.\n\n• Only if both are exposed together can the original data be recovered. In that case, security fully collapses because the attacker has both required components.',
      },
      'sec-7': {
        question: 'What is the risk of failing to separate files?',
        answer:
          'The primary risk occurs if the decoy text and mapping file are not stored separately (for example, in the same location or protected by the same password).\n\nIf this happens, anyone who gains access to both components can directly recover the original data. In other words, the system fails only when the two components are unintentionally brought together.\n\nFor this reason, strict separation is essential: store decoy text and mapping files in different locations or protect them with different passwords. When properly separated, such failure is extremely unlikely.',
      },
    },
  },
  donate: {
    title: 'Support Decoy Phrase',
    description:
      'Decoy Phrase is free to use and built as a non-profit initiative. There is no paywall and no required subscription. Donations are optional and transparent.',
    link: 'See live project metrics and public data here!',
    cards: {
      storage: {
        title: 'Storage Fund',
        description:
          'This donation goes directly to the storage wallet and is automatically added to the storage endowment, sustainably funding permanent storage and increasing available capacity.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Send AR from an exchange</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Buy AR token</li>
      <li>Go to Send or Withdraw</li>
      <li>Select On-Chain Withdraw</li>
      <li>Select AR (Arweave)</li>
      <li>Paste Decoy Phrase’s Wallet address</li>
      <li>Choose Arweave network</li>
      <li>Enter amount</li>
      <li>Confirm withdrawal</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">AR transfers usually take 1–5 minutes.</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Send AR from Wander Wallet</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Create Wander Wallet</li>
      <li>Buy AR token via available payment method</li>
      <li>Click Send</li>
      <li>Paste Decoy Phrase’s Wallet address</li>
      <li>Enter amount</li>
      <li>Confirm transaction</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: 'Team Fund',
        description:
          'This donation supports the Decoy Phrase team and ecosystem, including development, marketing, and community initiatives. Funds may also be allocated to storage when required.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Send stable coin from an exchange</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Buy USDT, USDC, or another supported stablecoin</li>
      <li>Go to Send or Withdraw</li>
      <li>Select On-Chain Withdrawal</li>
      <li>Choose the stablecoin you want to send</li>
      <li>Paste Decoy Phrase’s wallet address (make sure it matches the selected network)</li>
      <li>Select the network that matches the wallet address</li>
      <li>Enter the amount</li>
      <li>Confirm the withdrawal</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">Send stable coin from DEX</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Buy a stablecoin or the native token of the selected network</li>
      <li>Go to Send or Withdraw</li>
      <li>Select network or Select coin you want to send</li>
      <li>Paste Decoy Phrase’s Wallet address based on token and wallet networks</li>
      <li>Enter amount</li>
      <li>Confirm transaction</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: 'Storage Calculator', // Simplified
    info: {
      p1: 'The average file size for a 12-word seed phrase mapping file is ~50 KiB. Uploads currently use <strong class="text-foreground">Turbo (powered by ar.io)</strong>, allowing files under 105 KiB to be uploaded for free, with direct Arweave fee calculations recommended as a fallback if Turbo becomes unavailable.',
      p2: 'All data stored on permanent storage remains accessible forever, even if capacity is reached and no future donations are made, while additional capacity is meant to support future users and generations of Decoy Phrase.',
    },
    labels: {
      donationAmount: 'Donation Amount',
      arweaveEquivalent: 'Arweave Equivalent',
      winstonAmount: 'Winston Amount',
      capacityIncrease: 'This donation increases the permanent storage capacity by',
      files: 'Files',
      calculate: 'Calculate',
      currentBalance: 'Current Balance',
      howToDonate: 'How to Donate?',
      copied: 'Copied!',
      addressCopied: 'Address copied!',
      copyAddress: 'Copy wallet address',
      selectNetwork: 'Select network',
      walletAddress: 'Wallet address',
    },
  },
  metrics: {
    title: 'Decoy Phrase Live Metrics',
    labels: {
      totalUsers: 'Total Users',
      totalFilesStored: 'Total Files Stored',
      totalFilesLocked: 'Total Files Locked',
      totalDonations: 'Total Donations',
      remainingCapacity: 'Remaining File Capacity',
      downloadTotal: 'Total Decoy Phrase Generator Downloaded',
    },
    status: {
      live: 'Live',
      reconnecting: 'Reconnecting...',
      disconnected: 'Disconnected',
    },
    filters: {
      day: 'D',
      month: 'M',
      quarter: 'Q',
      year: 'Y',
      all: 'All',
    },
  },
  download: {
    title: 'Transform and recover your original seed phrase anytime.',
    subtitle:
      'Transform your seed phrase into customizable decoy text and recover the original anytime using your private mapping file. Everything runs fully offline—no seed phrases are stored, uploaded, or shared.',
    cta: {
      about: 'About Decoy Generator',
      tutorials: 'Watch Tutorials',
    },
  },
  feedback: {
    title: 'Feedback & Support',
    description:
      'Share your suggestions or report issues to help us improve Decoy Generator. Please do not submit seed phrases or sensitive data.',
    discord: {
      text: 'Join our <span class="font-bold text-[#5865F2]">Discord</span> to follow feedback updates and community-provided solutions.',
      linkText: 'Join now!',
    },
    forms: {
      feedback: {
        title: 'Feedback',
        name: 'Name',
        subject: 'Subject',
        description: 'Description',
        email: 'Email',
        submit: 'Submit',
        submitting: 'Submitting...',
        success: 'Feedback sent! Check Discord for updates.',
        error: 'Failed to send. Please try again.',
        required: 'Required',
        invalidEmail: 'Invalid email address',
        minChar: 'Must be at least 10 characters',
      },
      support: {
        title: 'Support',
        category: 'Category',
        appVersion: 'App Version',
        reference: 'Reference Link (Optional)',
        referenceHelper:
          "Upload screenshots or videos to Google Drive or another cloud service, set the link to 'Anyone with the link can view', then paste the link here.",
        required: 'Required',
        invalidEmail: 'Invalid email address',
        minChar: 'Must be at least 10 characters',
      },
    },
  },
} as const;
