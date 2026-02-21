export type Language =
  | 'EN' // English (Inggris)
  | 'ZH' // Mandarin/Tionghoa
  | 'RU' // Rusia
  | 'ES' // Spanyol
  | 'FR' // Prancis
  | 'ID' // Bahasa Indonesia
  | 'PT' // Portugis
  | 'VI' // Vietnam
  | 'DE' // Jerman
  | 'TR' // Turki
  | 'KO' // Korea
  | 'UK' // Ukraina
  | 'AR' // Arab
  | 'IT' // Italia
  | 'PL' // Polandia
  | 'JA' // Jepang
  | 'NL' // Belanda
  | 'EL' // Yunani
  | 'FI' // Finlandia
  | 'HI'; // Hindi

export type Translations = {
  nav: {
    about: string;
    userGuide: string;
    faq: string;
    brandKit: string;
    liveMetrics: string;
    decoyToken: string;
    products: string;
    decoyGenerator: string;
    permanentStorage: string;
    permanentWeb: string;
    donate: string;
    docs: string;
    connect: string;
    twitter: string;
    youtube: string;
    discord: string;
    github: string;
    feedback: string;
  };
  header: {
    login: string;
    menu: string;
    language: string;
  };
  footer: {
    columns: {
      decoyPhrase: string;
      coreComponents: string;
      downloadGenerator: string;
    };
    links: {
      privacy: string;
      terms: string;
      forum: string;
    };
    mission: {
      text: string;
      ctaText: string;
    };
  };
  hero: {
    titlePart1: string;
    titlePart2: string;
    titleHighlight: string;
    subtitle: string;
  };
  heroActions: {
    getStarted: string;
    watchTutorials: string;
    generator: string;
    storage: string;
  };
  features: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    cards: {
      generator: { title: string; description: string };
      storage: { title: string; description: string };
      web: { title: string; description: string };
    };
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: Record<string, { title: string; description: string }>;
  };
  prosCons: {
    title: string;
    subtitle: string;
    methods: Record<string, { name: string; criteria: Record<string, string> }>;
    criteriaLabels: Record<string, string>;
  };
  securityDemo: {
    title: string;
    subtitle: string;
    annotations: {
      decoy: string;
      mapping: string;
      result: string;
      clickToGenerate: string;
    };
    buttons: {
      placeDecoy: string;
      uploadMapping: string;
      generate: string;
      decrypting: string;
      simulateDecoy: string;
      simulateMapping: string;
      mappingLoaded: string;
      updateMapping: string;
    };
    labels: {
      decoyText: string;
      asciiText: string;
      resultPlaceholder: string;
    };
  };
  faq: {
    title: string;
    subtitle: string;
    chatAi: string;
    categories: Record<string, string>;
    items: Record<string, { question: string; answer: string }>;
  };
  donate: {
    title: string;
    description: string;
    link: string;
    cards: {
      storage: { title: string; description: string; howTo: string };
      team: { title: string; description: string; howTo: string };
    };
    calculator: string;
    info: {
      p1: string;
      p2: string;
    };
    labels: {
      donationAmount: string;
      arweaveEquivalent: string;
      winstonAmount: string;
      capacityIncrease: string;
      files: string;
      calculate: string;
      currentBalance: string;
      howToDonate: string;
      copied: string;
      addressCopied: string;
      copyAddress: string;
      selectNetwork: string;
      walletAddress: string;
    };
  };
  metrics: {
    title: string;
    labels: {
      totalUsers: string;
      totalFilesStored: string;
      totalFilesLocked: string;
      totalDonations: string;
      remainingCapacity: string;
      downloadTotal: string;
    };
    status: {
      live: string;
      reconnecting: string;
      disconnected: string;
    };
    filters: {
      day: string;
      month: string;
      quarter: string;
      year: string;
      all: string;
    };
  };
  download: {
    title: string;
    subtitle: string;
    cta: {
      about: string;
      tutorials: string;
    };
  };
  feedback: {
    title: string;
    description: string;
    discord: {
      text: string;
      linkText: string;
    };
    forms: {
      feedback: {
        title: string;
        name: string;
        subject: string;
        description: string;
        email: string;
        submit: string;
        submitting: string;
        success: string;
        error: string;
        required: string;
        invalidEmail: string;
        minChar: string;
      };
      support: {
        title: string;
        category: string;
        appVersion: string;
        reference: string;
        referenceHelper: string;
        required: string;
        invalidEmail: string;
        minChar: string;
      };
    };
  };
};

export type NavKey = keyof Translations['nav'];
export type HeaderKey = keyof Translations['header'];
