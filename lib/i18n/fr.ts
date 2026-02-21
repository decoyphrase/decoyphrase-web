import { Translations } from './types';

export const frTranslations: Translations = {
  nav: {
    about: 'À propos',
    userGuide: 'Guide utilisateur',
    faq: 'FAQ',
    brandKit: 'Kit de marque',
    liveMetrics: 'Métriques en direct',
    decoyToken: '$DECOY',
    products: 'Produits',
    decoyGenerator: 'Générateur de leurres',
    permanentStorage: 'Stockage permanent',
    permanentWeb: 'Web permanent',
    donate: 'Faire un don',
    docs: 'Docs',
    connect: 'Connecter',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: 'Retours',
  },
  header: {
    login: 'Connexion',
    menu: 'Menu',
    language: 'Langue',
  },
  footer: {
    columns: {
      decoyPhrase: 'Decoy Phrase',
      coreComponents: 'Composants principaux',
      downloadGenerator: 'Télécharger le générateur',
    },
    links: {
      privacy: 'Politique de confidentialité',
      terms: "Conditions d'utilisation",
      forum: 'Forum de communauté',
    },
    mission: {
      text: "Notre mission est de protéger la confidentialité numérique et d'assurer un stockage immuable. Les dons soutiennent le stockage permanent et le développement, gardant le système gratuit et héritable.",
      ctaText: 'Pour soutenir Decoy Phrase, vous pouvez contribuer par des dons.',
    },
  },
  hero: {
    titlePart1: 'Protégez votre',
    titlePart2: 'empreinte numérique',
    titleHighlight: 'pour toujours',
    subtitle:
      'Utilisez le stockage décentralisé et une technologie de leurre avancée pour sécuriser vos données.',
  },
  heroActions: {
    getStarted: 'Commencer',
    watchTutorials: 'Voir les tutoriels',
    generator: 'Générateur',
    storage: 'Stockage',
  },
  features: {
    title: 'Nos fonctionnalités',
    titleHighlight: 'clés',
    subtitle: 'Découvrez les outils pour protéger vos données et votre identité.',
    cards: {
      generator: {
        title: 'Générateur de leurres',
        description: 'Créez des faux fichiers réalistes pour dérouter les intrus.',
      },
      storage: {
        title: 'Stockage permanent',
        description: 'Stockez vos données pour toujours sur la blockchain Arweave.',
      },
      web: {
        title: 'Web permanent',
        description: 'Déployez des sites décentralisés impossibles à censurer.',
      },
    },
  },
  howItWorks: {
    title: 'Comment fonctionne Decoy Phrase',
    subtitle: 'Étapes simples. Sécurité forte. Zéro garde.',
    steps: {
      '1': {
        title: 'Transformez votre phrase mnémonique',
        description:
          'Transformez votre phrase mnémonique en un texte leurre. Traité entièrement hors ligne avec le générateur de phrases leurres, sans serveurs, sans cloud et sans collecte de données.',
      },
      '2': {
        title: 'Recevez deux fichiers indépendants',
        description:
          "Vous recevez un Texte Leurre qui semble normal et ne contient aucune information utilisable, et un Fichier de Mappage qui sert de clé unique pour récupérer le secret d'origine — sans les deux, la récupération est impossible.",
      },
      '3': {
        title: 'Stockez-les séparément',
        description:
          'Stockez le texte leurre et le fichier de mappage séparément. Localement dans des endroits différents ou dans un stockage permanent en utilisant des Coffres Multi-Mots de passe.',
      },
      '4': {
        title: 'Récupérez uniquement lorsque cela compte',
        description:
          "Lorsque la récupération est nécessaire, utilisez les deux fichiers dans le Générateur Decoy Phrase pour restaurer votre phrase mnémonique d'origine.",
      },
    },
  },
  prosCons: {
    title: 'Avantages et inconvénients de la sauvegarde de phrase mnémonique',
    subtitle:
      "Il n'existe pas de sauvegarde parfaite de phrase mnémonique — seulement des risques différents.",
    methods: {
      paper: {
        name: 'Sauvegarde papier',
        criteria: {
          free: 'Aucun coût requis',
          easyAccess: 'Nécessite un accès physique',
          highSecurity: 'Facilement volé, photographié ou copié',
          highPrivacy: 'Stocké entièrement hors ligne',
          lossProof: 'Peut être égaré ou jeté accidentellement',
          destructionProof: "Vulnérable au feu, à l'eau et au vieillissement",
        },
      },
      metal: {
        name: 'Sauvegarde métal',
        criteria: {
          free: "Nécessite l'achat de plaques métalliques",
          easyAccess: 'Nécessite un accès physique et une récupération',
          highSecurity: "Toute personne le trouvant peut l'utiliser directement",
          highPrivacy: 'Stocké hors ligne sans tiers',
          lossProof: 'Peut encore être perdu ou volé',
          destructionProof: "Résistant au feu et à l'eau",
        },
      },
      'local-storage': {
        name: 'Stockage local',
        criteria: {
          free: 'Utilise le matériel existant',
          easyAccess: 'Nécessite un appareil, un port et une compatibilité',
          highSecurity: 'Vulnérable aux logiciels malveillants ou au vol',
          highPrivacy: 'Stocké localement sans tiers',
          lossProof: 'Facilement perdu, endommagé ou corrompu',
          destructionProof: 'Sensible aux pannes matérielles',
        },
      },
      cloud: {
        name: 'Stockage cloud',
        criteria: {
          free: 'Nécessite un abonnement ou un stockage payant',
          easyAccess: "Accessible de n'importe où avec une connexion",
          highSecurity: 'Cible de piratages et de vols de comptes',
          highPrivacy: 'Contrôlé par des fournisseurs tiers',
          lossProof: 'Les sauvegardes redondantes réduisent le risque de perte',
          destructionProof: 'Les comptes peuvent être supprimés ou gelés',
        },
      },
      encrypted: {
        name: 'Fichier numérique chiffré',
        criteria: {
          free: "Peut être créé à l'aide d'outils gratuits",
          easyAccess: 'Nécessite un mot de passe et le bon logiciel',
          highSecurity: "Fort seulement si le mot de passe n'est jamais exposé",
          highPrivacy: "La confidentialité dépend de l'emplacement de stockage",
          lossProof: 'La perte de mot de passe signifie une perte permanente',
          destructionProof: 'La corruption ou la suppression de fichier est fatale',
        },
      },
      shamir: {
        name: "Shamir's Secret Sharing",
        criteria: {
          free: 'Nécessite des outils spécialisés ou des portefeuilles compatibles',
          easyAccess: 'Nécessite la collecte de parts de seuil',
          highSecurity: 'Les parts individuelles sont cryptographiquement inutiles',
          highPrivacy: 'Aucune partie ne détient la phrase mnémonique complète',
          lossProof: 'Tolère une perte limitée de parts',
          destructionProof: 'La perte de plusieurs parts brise la récupération',
        },
      },
      custodian: {
        name: 'Dépositaire',
        criteria: {
          free: 'Les services de garde facturent généralement des frais',
          easyAccess: "Récupération facile via l'accès au compte",
          highSecurity: "Les utilisateurs dépendent entièrement d'un tiers",
          highPrivacy: 'Le dépositaire a la visibilité et le contrôle',
          lossProof: 'Les fonds peuvent être gelés ou confisqués',
          destructionProof: "La faillite de l'entreprise risque une perte totale",
        },
      },
      splitting: {
        name: 'Division de la graine',
        criteria: {
          free: 'Aucun coût requis',
          easyAccess: 'Nécessite la collecte de toutes les pièces',
          highSecurity: 'Les pièces partielles révèlent encore des informations',
          highPrivacy: 'Généralement stocké sous forme simple',
          lossProof: 'Perdre une pièce brise la récupération',
          destructionProof: 'Les dommages physiques affectent la récupération',
        },
      },
      lawyer: {
        name: 'Avocat',
        criteria: {
          free: 'Nécessite des frais juridiques continus',
          easyAccess: "L'accès dépend des procédures légales",
          highSecurity: 'Confiance humaine et risque juridique impliqués',
          highPrivacy: "L'avocat peut accéder à la graine brute",
          lossProof: "Sujet à l'erreur humaine ou aux litiges",
          destructionProof: 'Les documents peuvent être perdus ou détruits',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: 'Système gratuit et à but non lucratif',
          easyAccess:
            'Récupérable à tout moment via un stockage permanent et des applications téléchargeables',
          highSecurity: "La graine réelle n'est jamais stockée directement",
          highPrivacy: "Le texte leurre n'a aucun sens par lui-même",
          lossProof: 'Une partie seule est inutile pour les attaquants',
          destructionProof: 'Peut être sauvegardé sur un stockage permanent',
        },
      },
    },
    criteriaLabels: {
      free: 'Gratuit',
      easyAccess: 'Accès facile',
      highSecurity: 'Haute sécurité',
      highPrivacy: 'Haute confidentialité',
      lossProof: "À l'épreuve des pertes",
      destructionProof: "À l'épreuve de la destruction",
    },
  },
  securityDemo: {
    title: 'Sécurité à travers la séparation',
    subtitle: "Pas de fichier de mappage, pas de récupération. Pas de texte leurre, pas d'accès.",
    annotations: {
      decoy:
        'Vous devez avoir un texte leurre, qui agit comme la représentation obfusquée de vos données sensibles originales.',
      mapping:
        'Vous devez avoir le fichier de mappage, qui contient les règles de transformation nécessaires pour reconstruire les données originales à partir du texte leurre',
      result: 'Votre phrase mnémonique générée apparaîtra ici',
      clickToGenerate: 'Cliquez ici pour générer la phrase mnémonique',
    },
    buttons: {
      simulateDecoy: 'Cliquez pour simuler le placement du texte leurre',
      placeDecoy: '✓ Texte leurre placé',
      simulateMapping: 'Cliquez pour simuler le téléversement du fichier de mappage',
      uploadMapping: 'Mettre à jour le mappage',
      mappingLoaded: 'Mappage chargé',
      updateMapping: 'Mettre à jour le nouveau fichier de mappage',
      generate: 'Générer le résultat',
      decrypting: 'Déchiffrement...',
    },
    labels: {
      decoyText: 'Texte leurre',
      asciiText: 'Texte ASCII',
      resultPlaceholder: 'Le résultat apparaîtra ici...',
    },
  },
  faq: {
    title: 'Foire aux questions',
    subtitle:
      "Voici quelques questions que vous pourriez avoir sur Decoy Phrase. Vous n'avez pas trouvé la réponse que vous cherchiez ?",
    chatAi: "Discutez avec l'IA de Decoy Phrase !",
    categories: {
      general: 'Général',
      products: 'Produits',
      security: 'Sécurité et confidentialité',
    },
    items: {
      'gen-1': {
        question: "Qu'est-ce que Decoy Phrase ?",
        answer:
          "Decoy Phrase est une méthode \"offline-first\" pour protéger et sauvegarder des phrases mnémoniques et des textes sensibles — sans jamais stocker les données originales.\n\nElle transforme les secrets en texte anodin d'apparence ordinaire, la récupération n'étant possible qu'en combinant le fichier de mappage privé et le texte transformé.\n\nPour une durabilité à long terme, les fichiers leurres et les fichiers de mappage peuvent être stockés de manière permanente via le Stockage Permanent Decoy Phrase, directement connecté à la blockchain Arweave — garantissant qu'ils ne peuvent être perdus, modifiés ou supprimés.",
      },
      'gen-2': {
        question: 'Decoy Phrase est-il gratuit ?',
        answer:
          "Oui. Decoy Phrase est entièrement gratuit et fonctionne comme une initiative à but non lucratif. Toutes les fonctionnalités principales — y compris la génération de textes leurres, la création de fichiers de mappage et la récupération hors ligne — sont disponibles gratuitement.\n\nPour le Stockage Permanent Decoy Phrase, le stockage est soutenu par des dons. Ces dons servent à financer l'expansion de la capacité de stockage permanent sur la blockchain Arweave au fil du temps. Tous les fichiers déjà stockés sur la blockchain resteront accessibles pour toujours, quel que soit l'état futur du service.",
      },
      'gen-3': {
        question: "Qu'est-ce qui est permanent dans Decoy Phrase ?",
        answer:
          "Dans Decoy Phrase, le concept de permanence s'applique au site web, au domaine et aux données stockées — rendu possible par le Web Permanent et le Stockage Permanent construits sur Arweave.",
      },
      'gen-4': {
        question: 'Decoy Phrase stocke-t-il mes données ?',
        answer:
          "Non. Decoy Phrase ne stocke jamais votre phrase mnémonique ni vos données sensibles originales. Le processus de génération de texte leurre et de fichiers de mappage s'exécute entièrement hors ligne à l'aide du Générateur Decoy Phrase. Par conséquent, il n'y a aucun risque que vos secrets soient stockés sur un serveur.\n\nLorsque les fichiers sont stockés dans le Stockage Permanent, toutes les données sont chiffrées côté client avant d'être envoyées à la blockchain Arweave — y compris les mots de passe, le contenu des fichiers et les titres des fichiers.",
      },
      'gen-5': {
        question:
          'Que se passe-t-il si je perds à la fois mon fichier de mappage et son texte leurre associé ?',
        answer:
          "Si vous perdez à la fois le fichier de mappage et le texte leurre correspondant, vos données originales deviennent définitivement irrécupérables. Decoy Phrase est intentionnellement conçu sans aucun mécanisme de réinitialisation, de sauvegarde ou de récupération et ne stocke jamais vos secrets originaux, rendant la récupération techniquement impossible sans les deux composants.\n\nC'est pourquoi Decoy Phrase propose le Stockage Permanent : pour réduire le risque de perte accidentelle en permettant aux fichiers leurres et de mappage d'être stockés dans un stockage immuable à long terme qui ne peut être supprimé, modifié ou perdu silencieusement, tout en préservant une conception à connaissance nulle et non dépositaire — où tous les fichiers sont chiffrés côté client et le contrôle total reste à l'utilisateur.",
      },
      'gen-6': {
        question: 'Dois-je être en ligne pour utiliser Decoy Phrase ?',
        answer:
          "Cela dépend.\n\nLe Générateur Decoy Phrase fonctionne entièrement hors ligne. Tous les processus principaux — création de texte leurre, génération de fichiers de mappage et récupération de données — s'exécutent entièrement sur votre appareil sans aucune connexion internet.\n\nCependant, le Stockage Permanent nécessite une connexion en ligne, car il stocke des fichiers chiffrés sur la blockchain Arweave en utilisant une architecture à connaissance nulle.",
      },
      'gen-7': {
        question:
          "Puis-je récupérer ma phrase mnémonique ou mes données sensibles sans l'aide d'un tiers ?",
        answer:
          'Oui. Decoy Phrase est conçu pour une utilisation totalement souveraine, sans intermédiaires. En utilisant votre texte leurre et son fichier de mappage associé, le système restaure vos données originales directement sur votre appareil, entièrement hors ligne via le Générateur Decoy Phrase — sans impliquer aucun tiers.',
      },
      'gen-8': {
        question: "Est-il sûr de partager le Texte Leurre avec d'autres ?",
        answer:
          "Oui, c'est sûr.\n\nLe Texte Leurre est conçu pour avoir l'air ordinaire et ne contient aucune information sensible exploitable en soi. Sans le fichier de mappage correspondant, il ne peut pas être utilisé pour récupérer les données originales. De même, un fichier de mappage sans son texte leurre associé est également inutilisable. Par conséquent, partager le Texte Leurre seul n'expose pas votre secret.",
      },
      'gen-9': {
        question: "En quoi Decoy Phrase diffère-t-il d'un gestionnaire de mots de passe ?",
        answer:
          "Decoy Phrase n'est pas un gestionnaire de mots de passe en ligne.\n\nLa transformation de phrases mnémoniques, mots de passe ou autres données sensibles est effectuée entièrement hors ligne via le Générateur Decoy Phrase.\n\nLe Stockage Permanent est utilisé uniquement pour stocker des textes leurres et des fichiers de mappage, séparés dans des espaces de stockage différents à l'aide de la fonctionnalité de gestion multi-mots de passe.\n\nTous les fichiers stockés dans le Stockage Permanent sont chiffrés côté client. Même s'ils sont exposés, les clés de déchiffrement ne sont détenues que par l'utilisateur, rendant les données inutilisables pour quiconque d'autre.\n\nContrairement aux gestionnaires de mots de passe qui stockent des mots de passe chiffrés sur des serveurs ou dans le cloud, Decoy Phrase vous donne un contrôle total sur la manière et l'endroit où vos données sensibles sont stockées et récupérées.",
      },
      'prod-1': {
        question: "Qu'est-ce que le Générateur Decoy Phrase et quels sont ses composants ?",
        answer:
          "Le Générateur Decoy Phrase est l'outil central du système Decoy Phrase, combinant le Créateur de Mappage et le Générateur de Texte.\n\nLe Créateur de Mappage transforme des phrases mnémoniques ou des données sensibles en texte leurre ordinaire et génère un fichier de mappage qui sert de clé de récupération, tandis que le Générateur de Texte utilise ce fichier de mappage pour restaurer les données originales à partir du texte leurre.\n\nTous les processus s'exécutent entièrement sur l'appareil de l'utilisateur sans connexion internet, garantissant qu'aucune donnée sensible n'est jamais envoyée à un serveur.",
      },
      'prod-2': {
        question: "Qu'est-ce qu'un Fichier de Mappage et pourquoi doit-il être stocké séparément ?",
        answer:
          "Un Fichier de Mappage est un fichier privé (.json) contenant des informations techniques et servant de clé unique pour récupérer les données originales à partir du texte leurre.\n\nIl ne contient pas directement de données sensibles et n'a aucun sens sans son texte leurre associé. C'est pourquoi le Fichier de Mappage doit être stocké séparément du texte leurre. Cette séparation empêche un seul fichier de révéler des secrets. Sans la bonne combinaison des deux, la récupération est impossible — ce qui signifie qu'aucun composant individuel ne contient d'informations sensibles exploitables par lui-même.",
      },
      'prod-3': {
        question:
          'Comment fonctionne le Stockage Permanent et quels formats de fichiers sont pris en charge ?',
        answer:
          "Le Stockage Permanent est une couche de stockage basée sur Arweave qui stocke des textes leurres et des fichiers de mappage de manière permanente et immuable.\n\nIl est conçu comme un stockage à écriture unique et lecture éternelle pour des sauvegardes textuelles à long terme sans dépendre de serveurs traditionnels.\n\nLe Stockage Permanent ne prend en charge que les fichiers textuels, tels que .txt, .md et .json. Les autres formats comme les images, vidéos ou fichiers audio ne sont pas pris en charge.\n\nTous les téléversements sont gérés via un compte unique utilisant un Portefeuille Maître Partagé, de sorte que les utilisateurs n'ont pas besoin de créer ou de gérer un portefeuille blockchain ni de comprendre la mécanique de la blockchain. La complexité de la blockchain est masquée derrière une interface utilisateur simple.",
      },
      'prod-4': {
        question: 'Que sont les Coffres Multi-Mots de passe et comment sont-ils utilisés ?',
        answer:
          "Les Coffres Multi-Mots de passe sont une fonctionnalité du Stockage Permanent qui permet à un compte unique de contenir plusieurs coffres de stockage isolés, chacun protégé par un mot de passe différent. Par exemple, un utilisateur peut stocker du texte leurre dans le Coffre A et des fichiers de mappage dans le Coffre B, en utilisant des mots de passe distincts pour chacun.\n\nChaque coffre est logiquement isolé, ce qui signifie que l'accès à un coffre ne donne pas accès aux autres. Par conséquent, compromettre un mot de passe n'expose qu'un seul coffre, gardant les autres fichiers sensibles en sécurité.",
      },
      'prod-5': {
        question: 'Le Générateur Decoy Phrase peut-il être utilisé sur différents appareils ?',
        answer:
          "Oui. Le Générateur Decoy Phrase est disponible sur plusieurs plateformes. Il peut fonctionner sur les principaux systèmes d'exploitation de bureau (Windows, macOS, Linux) ainsi que sur les appareils Android.\n\nComme tous les processus s'exécutent hors ligne sur l'appareil local, Decoy Phrase peut également être utilisé dans des environnements sans accès internet ou sur des systèmes de haute sécurité tels que des ordinateurs \"air-gapped\".",
      },
      'prod-6': {
        question:
          'Les utilisateurs doivent-ils comprendre la blockchain pour utiliser ces fonctionnalités ?',
        answer:
          "Non. Bien que Decoy Phrase utilise la technologie blockchain (Arweave) en coulisses pour le stockage permanent, l'interface est conçue pour que les utilisateurs n'aient pas à gérer de complexité liée à la blockchain.\n\nEn utilisant un Portefeuille Maître Partagé, les utilisateurs n'ont qu'à se concentrer sur la gestion de leurs textes et mots de passe — ils n'ont pas besoin de créer, stocker ou gérer leurs propres portefeuilles blockchain. Par conséquent, toutes les fonctionnalités de Decoy Phrase peuvent être utilisées sans aucune connaissance préalable de la technologie blockchain.",
      },
      'sec-1': {
        question: 'Comment le système protège-t-il les données des utilisateurs ?',
        answer:
          "Decoy Phrase applique des principes \"offline-first\" et de connaissance nulle, ce qui signifie que toute la transformation et le chiffrement des données sensibles sont effectués entièrement sur l'appareil de l'utilisateur — sans nécessiter de connexion internet ni de serveur.\n\nLes données sont traitées et chiffrées côté client (par exemple, en utilisant AES-256-GCM) avant d'être stockées dans le Stockage Permanent, de sorte que le stockage public ne contient que des données chiffrées qui ne peuvent être lues sans les clés de l'utilisateur.\n\nDe plus, aucune phrase mnémonique ni donnée sensible originale n'est jamais stockée sur un serveur, ce qui signifie qu'il n'y a pas de coffre central qui pourrait devenir une cible d'attaque de grande valeur. Cette approche élimine la dépendance aux tiers et fait passer la sécurité d'une protection basée sur la confiance à une architecture technique rendant l'accès externe impossible par conception.",
      },
      'sec-2': {
        question: 'Decoy Phrase peut-il supprimer mes fichiers dans le Stockage Permanent ?',
        answer:
          "Non. Decoy Phrase ne peut pas supprimer vos fichiers une fois qu'ils sont stockés dans le Stockage Permanent. Le Stockage Permanent est construit sur la blockchain Arweave, où les données sont immuables par conception. Une fois qu'un fichier est téléversé, il ne peut être retiré, modifié ou effacé par Decoy Phrase — ni par personne d'autre.",
      },
      'sec-3': {
        question: "Comment le système garantit-il qu'aucune donnée sensible n'est stockée ?",
        answer:
          "Decoy Phrase utilise un principe de \"transformer et séparer\". Les données originales sont converties hors ligne en texte leurre ordinaire qui semble aléatoire et ne contient aucune signification secrète. Le fichier de mappage généré contient des informations techniques de récupération mais n'inclut pas les données sensibles originales.\n\nCes deux composants doivent être stockés séparément (par exemple, dans des emplacements différents ou protégés par des mots de passe différents). Par conséquent, aucun composant individuel ne contient jamais le secret original. Sans le fichier de mappage, le texte leurre est inutile — et sans le texte leurre, le fichier de mappage n'a aucun sens.\n\nCette méthode garantit que les données sensibles originales ne sont jamais stockées directement dans l'application ou sur un serveur.",
      },
      'sec-4': {
        question: 'Que sait et ne sait pas le système dans le Stockage Permanent ?',
        answer:
          "Decoy Phrase est à connaissance nulle, ce qui signifie que le système ne connaît jamais le contenu des données utilisateur.\n\nIl ne peut pas voir les phrases mnémoniques, les mots de passe ou le contenu des fichiers originaux car toutes les données sont entièrement chiffrées dans le navigateur local de l'utilisateur avant le téléversement.\n\nLa seule information visible pour le système sont des métadonnées publiques non sensibles, telles qu'un nom d'utilisateur (utilisé comme identifiant public) et le nombre de fichiers stockés.\n\nLa relation entre le texte leurre et son fichier de mappage est également inconnue du système. En bref, le contenu de l'utilisateur et les secrets ne sont jamais exposés — seules des données chiffrées et des métadonnées publiques limitées existent.",
      },
      'sec-5': {
        question:
          "En quoi l'approche de sécurité de Decoy Phrase diffère-t-elle des systèmes traditionnels (comme les gestionnaires de mots de passe) ?",
        answer:
          "• Stockage des données originales : Les gestionnaires de mots de passe traditionnels stockent les secrets des utilisateurs (mots de passe, seeds, etc.) dans un coffre chiffré. Decoy Phrase ne stocke jamais de données originales du tout.\n\n• Architecture : Les gestionnaires de mots de passe dépendent généralement de serveurs ou d'une infrastructure cloud pour la synchronisation. Decoy Phrase est offline-first, sans backend et sans dépendance tierce.\n\n• Modèle de sécurité : Dans les gestionnaires de mots de passe, la sécurité dépend du chiffrement du coffre et d'un mot de passe maître — si le coffre ou le mot de passe maître est compromis, toutes les données peuvent être exposées. Decoy Phrase n'a pas de tel coffre. La fuite d'un seul fichier (soit le texte leurre, soit le fichier de mappage) ne suffit pas à récupérer les données originales, car chaque composant n'a aucune valeur par lui-même.\n\n• Point de défaillance unique : Le coffre d'un gestionnaire de mots de passe est une cible de grande valeur. Decoy Phrase n'a pas d'objet unique contenant des secrets ; tant que les deux composants (texte leurre et fichier de mappage) ne sont pas compromis ensemble, il n'y a pas de point de défaillance principal à attaquer.",
      },
      'sec-6': {
        question:
          "Que se passe-t-il si un fichier leurre ou un fichier de mappage tombe entre les mains de quelqu'un d'autre ?",
        answer:
          "• Si seul le texte leurre est exposé, aucun secret n'est révélé. Le texte leurre est une donnée ordinaire sans signification sensible et ne peut être utilisé sans le fichier de mappage.\n\n• Si seul le fichier de mappage est exposé, les données originales restent sécurisées. Le fichier de mappage contient uniquement des motifs de caractères techniques, pas de contenu secret, et est inutile sans son texte leurre associé.\n\n• Ce n'est que si les deux sont exposés ensemble que les données originales peuvent être récupérées. Dans ce cas, la sécurité s'effondre complètement car l'attaquant possède les deux composants requis.",
      },
      'sec-7': {
        question: 'Quel est le risque de ne pas séparer les fichiers ?',
        answer:
          "Le risque principal survient si le texte leurre et le fichier de mappage ne sont pas stockés séparément (par exemple, au même endroit ou protégés par le même mot de passe).\n\nSi cela se produit, quiconque obtient l'accès aux deux composants peut récupérer directement les données originales. En d'autres termes, le système n'échoue que lorsque les deux composants sont réunis involontairement.\n\nC'est pourquoi une séparation stricte est essentielle : stockez le texte leurre et les fichiers de mappage à différents endroits ou protégez-les avec des mots de passe différents. Lorsqu'ils sont correctement séparés, une telle défaillance est extrêmement improbable.",
      },
    },
  },
  donate: {
    title: 'Soutenez Decoy Phrase',
    description:
      "Decoy Phrase est gratuit à utiliser et construit comme une initiative à but non lucratif. Il n'y a pas de mur payant et aucun abonnement requis. Les dons sont facultatifs et transparents.",
    link: 'Voir les métriques du projet en direct et les données publiques ici !',
    cards: {
      storage: {
        title: 'Fonds de Stockage',
        description:
          'Ce don va directement au portefeuille de stockage et est automatiquement ajouté au fonds de dotation de stockage, finançant durablement le stockage permanent et augmentant la capacité disponible.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Envoyer AR depuis un échange</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Acheter le jeton AR</li>
      <li>Aller à Envoyer ou Retirer</li>
      <li>Sélectionner Retrait On-Chain</li>
      <li>Sélectionner AR (Arweave)</li>
      <li>Coller l'adresse du portefeuille Decoy Phrase</li>
      <li>Choisir le réseau Arweave</li>
      <li>Entrer le montant</li>
      <li>Confirmer le retrait</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">Les transferts AR prennent généralement 1 à 5 minutes.</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Envoyer AR depuis Wander Wallet</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Créer un portefeuille Wander</li>
      <li>Acheter le jeton AR via le mode de paiement disponible</li>
      <li>Cliquer sur Envoyer</li>
      <li>Coller l'adresse du portefeuille Decoy Phrase</li>
      <li>Entrer le montant</li>
      <li>Confirmer la transaction</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: "Fonds de l'Équipe",
        description:
          "Ce don soutient l'équipe et l'écosystème Decoy Phrase, y compris le développement, le marketing et les initiatives communautaires. Les fonds peuvent également être alloués au stockage si nécessaire.",
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Envoyer un Stablecoin depuis un échange</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Acheter USDT, USDC ou autre stablecoin pris en charge</li>
      <li>Aller à Envoyer ou Retirer</li>
      <li>Sélectionner Retrait On-Chain</li>
      <li>Choisir le stablecoin que vous souhaitez envoyer</li>
      <li>Coller l'adresse du portefeuille Decoy Phrase (assurez-vous qu'elle correspond au réseau sélectionné)</li>
      <li>Sélectionner le réseau correspondant à l'adresse du portefeuille</li>
      <li>Entrer le montant</li>
      <li>Confirmer le retrait</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">Envoyer un Stablecoin depuis un DEX</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Acheter un stablecoin ou le jeton natif du réseau sélectionné</li>
      <li>Aller à Envoyer ou Retirer</li>
      <li>Sélectionner le réseau ou sélectionner la pièce que vous souhaitez envoyer</li>
      <li>Coller l'adresse du portefeuille Decoy Phrase en fonction du jeton et des réseaux de portefeuille</li>
      <li>Entrer le montant</li>
      <li>Confirmer la transaction</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: 'Calculatrice de Stockage',
    info: {
      p1: 'La taille moyenne de fichier pour un fichier de mappage de phrase mnémonique de 12 mots est de ~50 Tio. Les téléversements utilisent actuellement <strong class="text-foreground">Turbo (propulsé par ar.io)</strong>, permettant aux fichiers de moins de 105 Tio d\'être téléversés gratuitement, avec les calculs de frais directs Arweave recommandés comme solution de secours si Turbo devient indisponible.',
      p2: "Toutes les données stockées sur un stockage permanent restent accessibles pour toujours, même si la capacité est atteinte et qu'aucun don futur n'est effectué, tandis que la capacité supplémentaire est destinée à soutenir les futurs utilisateurs et générations de Decoy Phrase.",
    },
    labels: {
      donationAmount: 'Montant du don',
      arweaveEquivalent: 'Équivalent Arweave',
      winstonAmount: 'Montant en Winston',
      capacityIncrease: 'Ce don augmente la capacité de stockage permanent de',
      files: 'Fichiers',
      calculate: 'Calculer',
      currentBalance: 'Solde Actuel',
      howToDonate: 'Comment donner ?',
      copied: 'Copié !',
      addressCopied: 'Adresse copiée !',
      copyAddress: "Copier l'adresse du portefeuille",
      selectNetwork: 'Sélectionner le réseau',
      walletAddress: 'Adresse du portefeuille',
    },
  },
  metrics: {
    title: 'Métriques en Direct Decoy Phrase',
    labels: {
      totalUsers: 'Utilisateurs Totaux',
      totalFilesStored: 'Total Fichiers Stockés',
      totalFilesLocked: 'Total Fichiers Verrouillés',
      totalDonations: 'Dons Totaux',
      remainingCapacity: 'Capacité de Fichiers Restante',
      downloadTotal: 'Total Téléchargements du Générateur Decoy Phrase',
    },
    status: {
      live: 'En Direct',
      reconnecting: 'Reconnexion...',
      disconnected: 'Déconnecté',
    },
    filters: {
      day: 'J',
      month: 'M',
      quarter: 'T',
      year: 'A',
      all: 'Tout',
    },
  },
  download: {
    title: 'Transformez et récupérez votre phrase mnémonique originale à tout moment.',
    subtitle:
      "Transformez votre phrase mnémonique en texte leurre personnalisable et récupérez l'original à tout moment en utilisant votre fichier de mappage privé. Tout fonctionne entièrement hors ligne — aucune phrase mnémonique n'est stockée, téléversée ou partagée.",
    cta: {
      about: 'À propos du Générateur Decoy',
      tutorials: 'Voir les Tutoriels',
    },
  },
  feedback: {
    title: 'Retours et Support',
    description:
      'Partagez vos suggestions ou signalez des problèmes pour nous aider à améliorer le Générateur Decoy. Veuillez ne pas soumettre de phrases mnémoniques ou de données sensibles.',
    discord: {
      text: 'Rejoignez notre <span class="font-bold text-[#5865F2]">Discord</span> pour suivre les mises à jour des retours et les solutions de la communauté.',
      linkText: 'Rejoindre maintenant !',
    },
    forms: {
      feedback: {
        title: 'Retours',
        name: 'Nom',
        subject: 'Sujet',
        description: 'Description',
        email: 'Email',
        submit: 'Envoyer',
        submitting: 'Envoi...',
        success: 'Retours envoyés ! Vérifiez Discord pour les mises à jour.',
        error: "Échec de l'envoi. Veuillez réessayer.",
        required: 'Requis',
        invalidEmail: 'Adresse email invalide',
        minChar: 'Doit contenir au moins 10 caractères',
      },
      support: {
        title: 'Support',
        category: 'Catégorie',
        appVersion: "Version de l'App",
        reference: 'Lien de Référence (Optionnel)',
        referenceHelper:
          "Téléversez des captures d'écran ou des vidéos sur Google Drive ou un autre service cloud, réglez le lien sur 'Toute personne disposant du lien peut voir', puis collez le lien ici.",
        required: 'Requis',
        invalidEmail: 'Adresse email invalide',
        minChar: 'Doit contenir au moins 10 caractères',
      },
    },
  },
};
