import { Translations } from './types';

export const nlTranslations: Translations = {
  nav: {
    about: 'Over ons',
    userGuide: 'Gebruikershandleiding',
    faq: 'Veelgestelde vragen',
    brandKit: 'Huisstijl',
    liveMetrics: 'Live statistieken',
    decoyToken: '$DECOY',
    products: 'Producten',
    decoyGenerator: 'Afleidingsgenerator',
    permanentStorage: 'Permanente opslag',
    permanentWeb: 'Permanent web',
    donate: 'Doneren',
    docs: 'Documentatie',
    connect: 'Verbinden',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: 'Feedback',
  },
  header: {
    login: 'Inloggen',
    menu: 'Menu',
    language: 'Taal',
  },
  footer: {
    columns: {
      decoyPhrase: 'Afleidingszin',
      coreComponents: 'Kerncomponenten',
      downloadGenerator: 'Generator downloaden',
    },
    links: {
      privacy: 'Privacybeleid',
      terms: 'Servicevoorwaarden',
      forum: 'Forum',
    },
    mission: {
      text: 'Onze missie is om digitale privacy te beschermen en onveranderlijke opslag te garanderen.',
      ctaText: 'Doe mee met de revolutie',
    },
  },
  hero: {
    titlePart1: 'Bescherm je',
    titlePart2: 'digitale voetafdruk',
    titleHighlight: 'voor altijd',
    subtitle:
      'Gebruik gedecentraliseerde opslag en geavanceerde afleidingstechnologie om je gegevens te beveiligen.',
  },
  heroActions: {
    getStarted: 'Aan de slag',
    watchTutorials: 'Bekijk tutorials',
    generator: 'Generator',
    storage: 'Opslag',
  },
  features: {
    title: 'Onze belangrijkste',
    titleHighlight: 'functies',
    subtitle: 'Ontdek de tools om je gegevens en identiteit te beschermen.',
    cards: {
      generator: {
        title: 'Afleidingsgenerator',
        description: 'Maak realistische nepopbestanden om indringers te verwarren.',
      },
      storage: {
        title: 'Permanente opslag',
        description: 'Sla je gegevens voor altijd op de Arweave blockchain op.',
      },
      web: {
        title: 'Permanent web',
        description:
          'Implementeer gedecentraliseerde websites die niet kunnen worden gecensureerd.',
      },
    },
  },
  howItWorks: {
    title: 'Hoe Decoy Phrase werkt',
    subtitle: 'Eenvoudige stappen. Sterke beveiliging. Geen beheer.',
    steps: {
      '1': {
        title: 'Transformeer je Seed Phrase',
        description:
          'Transformeer je seed phrase in een afleidingstekst. Volledig offline verwerkt met de Decoy Phrase generator, geen servers, geen cloud en geen gegevensverzameling.',
      },
      '2': {
        title: 'Ontvang twee onafhankelijke bestanden',
        description:
          'Je ontvangt een Afleidingstekst die er normaal uitziet en geen bruikbare informatie bevat, en een Mapping-bestand dat dient als de enige sleutel om het originele geheim te herstellen — zonder beide is herstel onmogelijk.',
      },
      '3': {
        title: 'Sla ze apart op',
        description:
          'Sla de afleidingstekst en het mapping-bestand apart op. Lokaal op verschillende locaties of in permanente opslag met behulp van Multi-Wachtwoord Kluizen.',
      },
      '4': {
        title: 'Herstel alleen wanneer het telt',
        description:
          'Wanneer herstel nodig is, gebruik beide bestanden in de Decoy Phrase Generator om je originele seed phrase te herstellen.',
      },
    },
  },
  prosCons: {
    title: 'Voor- en nadelen van Seed Phrase Back-up',
    subtitle: "Er bestaat geen perfecte seed phrase back-up — alleen verschillende risico's.",
    methods: {
      paper: {
        name: 'Papieren back-up',
        criteria: {
          free: 'Geen kosten',
          easyAccess: 'Vereist fysieke toegang',
          highSecurity: 'Gemakkelijk gestolen, gefotografeerd of gekopieerd',
          highPrivacy: 'Volledig offline opgeslagen',
          lossProof: 'Kan verloren gaan of per ongeluk worden weggegooid',
          destructionProof: 'Kwetsbaar voor brand, water en veroudering',
        },
      },
      metal: {
        name: 'Metalen back-up',
        criteria: {
          free: 'Vereist aankoop van metalen platen',
          easyAccess: 'Vereist fysieke toegang en herstel',
          highSecurity: 'Iedereen die het vindt kan het direct gebruiken',
          highPrivacy: 'Offline opgeslagen zonder derde partijen',
          lossProof: 'Kan nog steeds verloren of gestolen worden',
          destructionProof: 'Bestand tegen vuur en water',
        },
      },
      'local-storage': {
        name: 'Lokale opslag',
        criteria: {
          free: 'Gebruikt bestaande hardware',
          easyAccess: 'Vereist apparaat, poort en compatibiliteit',
          highSecurity: 'Kwetsbaar voor malware of diefstal',
          highPrivacy: 'Lokaal opgeslagen zonder derde partijen',
          lossProof: 'Gemakkelijk verloren, beschadigd of corrupt',
          destructionProof: 'Gevoelig voor hardwarestoringen',
        },
      },
      cloud: {
        name: 'Cloudopslag',
        criteria: {
          free: 'Vereist abonnement of betaalde opslag',
          easyAccess: 'Overal toegankelijk met login',
          highSecurity: 'Doelwit van hacks en accountdiefstal',
          highPrivacy: 'Beheerd door derde partijen',
          lossProof: 'Redundante back-ups verminderen risico op verlies',
          destructionProof: 'Accounts kunnen worden verwijderd of bevroren',
        },
      },
      encrypted: {
        name: 'Versleuteld digitaal bestand',
        criteria: {
          free: 'Kan worden gemaakt met gratis tools',
          easyAccess: 'Vereist wachtwoord en juiste software',
          highSecurity: 'Alleen sterk als het wachtwoord nooit wordt blootgesteld',
          highPrivacy: 'Privacy hangt af van opslaglocatie',
          lossProof: 'Verlies van wachtwoord betekent permanent verlies',
          destructionProof: 'Corruptie of verwijdering van bestand is fataal',
        },
      },
      shamir: {
        name: "Shamir's Secret Sharing",
        criteria: {
          free: 'Vereist gespecialiseerde tools of compatibele wallets',
          easyAccess: 'Vereist verzamelen van drempelaandelen',
          highSecurity: 'Individuele aandelen zijn cryptografisch nutteloos',
          highPrivacy: 'Geen enkele partij heeft de volledige seed phrase',
          lossProof: 'Tolerant voor beperkt verlies van aandelen',
          destructionProof: 'Verlies van te veel aandelen breekt herstel',
        },
      },
      custodian: {
        name: 'Bewaarder',
        criteria: {
          free: 'Bewaardiensten rekenen meestal kosten',
          easyAccess: 'Gemakkelijk herstel via accounttoegang',
          highSecurity: 'Gebruikers zijn volledig afhankelijk van derden',
          highPrivacy: 'Bewaarder heeft inzicht en controle',
          lossProof: 'Fondsen kunnen worden bevroren of in beslag genomen',
          destructionProof: 'Faillissement van bedrijf riskeert totaal verlies',
        },
      },
      splitting: {
        name: 'Seed splitsen',
        criteria: {
          free: 'Geen kosten',
          easyAccess: 'Vereist verzamelen van alle stukken',
          highSecurity: 'Gedeeltelijke stukken onthullen nog steeds informatie',
          highPrivacy: 'Meestal opgeslagen in platte tekst',
          lossProof: 'Verlies van één stuk breekt herstel',
          destructionProof: 'Fysieke schade beïnvloedt herstel',
        },
      },
      lawyer: {
        name: 'Advocaat',
        criteria: {
          free: 'Vereist doorlopende juridische kosten',
          easyAccess: 'Toegang hangt af van juridische procedures',
          highSecurity: 'Menselijk vertrouwen en juridisch risico betrokken',
          highPrivacy: 'Advocaat kan toegang krijgen tot de ruwe seed',
          lossProof: 'Onderhevig aan menselijke fouten of geschillen',
          destructionProof: 'Documenten kunnen verloren gaan of vernietigd worden',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: 'Gratis en non-profit systeem',
          easyAccess: 'Op elk moment herstelbaar via permanente opslag en downloadbare apps',
          highSecurity: 'De echte seed wordt nooit direct opgeslagen',
          highPrivacy: 'De afleidingstekst is op zichzelf betekenisloos',
          lossProof: 'Eén deel alleen is nutteloos voor aanvallers',
          destructionProof: 'Kan worden geback-upt op permanente opslag',
        },
      },
    },
    criteriaLabels: {
      free: 'Gratis',
      easyAccess: 'Gemakkelijke Toegang',
      highSecurity: 'Hoge Beveiliging',
      highPrivacy: 'Hoge Privacy',
      lossProof: 'Verliesbestendig',
      destructionProof: 'Vernietigingsbestendig',
    },
  },
  securityDemo: {
    title: 'Beveiliging door scheiding',
    subtitle: 'Geen mapping-bestand, geen herstel. Geen afleidingstekst, geen toegang.',
    annotations: {
      decoy:
        'Je moet een afleidingstekst hebben, die dient als de verhulde weergave van je originele gevoelige gegevens.',
      mapping:
        'Je moet het mapping-bestand hebben, dat de transformatieregels bevat die nodig zijn om de originele gegevens uit de afleidingstekst te reconstrueren.',
      result: 'Je gegenereerde seed phrase verschijnt hier',
      clickToGenerate: 'Klik hier om seed phrase te genereren',
    },
    buttons: {
      simulateDecoy: 'Klik om het plaatsen van afleidingstekst te simuleren',
      placeDecoy: '✓ Afleidingstekst geplaatst',
      simulateMapping: 'Klik om het uploaden van het mapping-bestand te simuleren',
      uploadMapping: 'Kaart Bijwerken',
      mappingLoaded: 'Kaart Geladen',
      updateMapping: 'Bijwerken nieuw mapping-bestand',
      generate: 'Genereer Resultaat',
      decrypting: 'Ontsleutelen...',
    },
    labels: {
      decoyText: 'Afleidingstekst',
      asciiText: 'ASCII-tekst',
      resultPlaceholder: 'Resultaat verschijnt hier...',
    },
  },
  faq: {
    title: 'Veelgestelde vragen',
    subtitle:
      'Dit zijn enkele vragen die u mogelijk heeft over Decoy Phrase. Heeft u het antwoord niet gevonden dat u zocht?',
    chatAi: 'Chat met AI over Decoy Phrase!',
    categories: {
      general: 'Algemeen',
      products: 'Producten',
      security: 'Veiligheid & Privacy',
    },
    items: {
      'gen-1': {
        question: 'Wat is Decoy Phrase?',
        answer:
          'Decoy Phrase is een offline-eerst methode voor het beschermen en back-uppen van seed phrases en gevoelige tekst — zonder ooit de originele gegevens op te slaan.\n\nHet transformeert geheimen in onschuldige, gewoon uitziende tekst, waarbij herstel alleen mogelijk is door het privé-mappingbestand en de getransformeerde tekst te combineren.\n\nVoor langdurige duurzaamheid kunnen decoy-bestanden en mapping-bestanden permanent worden opgeslagen via Decoy Phrase Permanent Storage, direct verbonden met de Arweave-blockchain — zodat ze niet verloren kunnen gaan, gewijzigd of verwijderd kunnen worden.',
      },
      'gen-2': {
        question: 'Is Decoy Phrase gratis?',
        answer:
          'Ja. Decoy Phrase is volledig gratis te gebruiken en werkt als een non-profit initiatief. Alle kernfuncties — inclusief het genereren van decoy-tekst, het maken van mapping-bestanden en offline herstel — zijn kosteloos beschikbaar.\n\nVoor Decoy Phrase Permanent Storage wordt opslag ondersteund door donaties. Deze donaties worden gebruikt om de uitbreiding van permanente opslagcapaciteit op de Arweave-blockchain in de loop van de tijd te financieren. Alle bestanden die al op de blockchain zijn opgeslagen, blijven voor altijd toegankelijk, ongeacht de toekomstige status van de dienst.',
      },
      'gen-3': {
        question: 'Wat is permanent in Decoy Phrase?',
        answer:
          'In Decoy Phrase is het concept van permanentie van toepassing op de website, het domein en de opgeslagen gegevens — mogelijk gemaakt door het Permanent Web en Permanent Storage gebouwd op Arweave.',
      },
      'gen-4': {
        question: 'Slaat Decoy Phrase mijn gegevens op?',
        answer:
          'Nee. Decoy Phrase slaat nooit uw seed phrase of originele gevoelige gegevens op. Het proces van het genereren van decoy-tekst en mapping-bestanden verloopt volledig offline met behulp van de Decoy Phrase Generator. Hierdoor is er geen risico dat uw geheimen op enige server worden opgeslagen.\n\nWanneer bestanden worden opgeslagen in Permanent Storage, worden alle gegevens aan de clientzijde versleuteld voordat ze naar de Arweave-blockchain worden verzonden — inclusief wachtwoorden, bestandsinhoud en bestandstitels.',
      },
      'gen-5': {
        question:
          'Wat gebeurt er als ik zowel mijn mapping-bestand als de bijbehorende decoy-tekst verlies?',
        answer:
          'Als u zowel het mapping-bestand als de bijbehorende decoy-tekst verliest, worden uw originele gegevens permanent onherstelbaar. Decoy Phrase is opzettelijk ontworpen zonder enig reset-, back-up- of herstelmechanisme en slaat nooit uw originele geheimen op, waardoor herstel technisch onmogelijk is zonder beide componenten.\n\nDaarom biedt Decoy Phrase Permanent Storage: om het risico op onbedoeld verlies te verkleinen door decoy- en mapping-bestanden op te slaan in onveranderlijke, langdurige opslag die niet kan worden verwijderd, gewijzigd of stilzwijgend verloren kan gaan, terwijl een zero-knowledge, niet-custodiale opzet behouden blijft — waarbij alle bestanden client-side worden versleuteld en de volledige controle bij de gebruiker blijft.',
      },
      'gen-6': {
        question: 'Moet ik online zijn om Decoy Phrase te gebruiken?',
        answer:
          'Dat hangt ervan af.\n\nDe Decoy Phrase Generator werkt volledig offline. Alle kernprocessen — het maken van decoy-tekst, genereren van mapping-bestanden en gegevensherstel — draaien volledig op uw apparaat zonder internetverbinding.\n\nEchter, Permanent Storage vereist een online verbinding, aangezien het versleutelde bestanden opslaat op de Arweave-blockchain met behulp van een zero-knowledge architectuur.',
      },
      'gen-7': {
        question:
          'Kan ik mijn seed phrase of gevoelige gegevens herstellen zonder hulp van derden?',
        answer:
          'Ja. Decoy Phrase is ontworpen voor volledig zelf-soeverein gebruik, zonder tussenpersonen. Door uw decoy-tekst en het bijbehorende mapping-bestand te gebruiken, herstelt het systeem uw originele gegevens direct op uw apparaat, volledig offline via de Decoy Phrase Generator — zonder betrokkenheid van enige derde partij.',
      },
      'gen-8': {
        question: 'Is het veilig om Decoy Text met anderen te delen?',
        answer:
          'Ja, dat is veilig.\n\nDecoy Text is ontworpen om er gewoon uit te zien en bevat op zichzelf geen bruikbare gevoelige informatie. Zonder het bijbehorende mapping-bestand kan het niet worden gebruikt om de originele gegevens te herstellen. Evenzo is een mapping-bestand zonder de bijbehorende decoy-tekst ook onbruikbaar. Daarom stelt het delen van Decoy Text alleen uw geheim niet bloot.',
      },
      'gen-9': {
        question: 'Hoe verschilt Decoy Phrase van een wachtwoordbeheerder?',
        answer:
          'Decoy Phrase is geen online wachtwoordbeheerder.\n\nDe transformatie van seed phrases, wachtwoorden of andere gevoelige gegevens wordt volledig offline uitgevoerd via de Decoy Phrase Generator.\n\nPermanent Storage wordt alleen gebruikt om decoy-tekst en mapping-bestanden op te slaan, gescheiden in verschillende opslagruimtes met behulp van de multi-wachtwoordbeheerfunctie.\n\nAlle bestanden die in Permanent Storage worden opgeslagen, worden client-side versleuteld. Zelfs als ze worden blootgesteld, worden de decryptiesleutels alleen door de gebruiker bewaard, waardoor de gegevens onbruikbaar zijn voor iemand anders.\n\nIn tegenstelling tot wachtwoordbeheerders die versleutelde wachtwoorden op servers of in de cloud opslaan, geeft Decoy Phrase u volledige controle over hoe en waar uw gevoelige gegevens worden opgeslagen en hersteld.',
      },
      'prod-1': {
        question: 'Wat is de Decoy Phrase Generator en wat zijn de componenten?',
        answer:
          'De Decoy Phrase Generator is de kerntool in het Decoy Phrase-systeem, die de Mapping Maker en de Text Generator combineert.\n\nDe Mapping Maker transformeert seed phrases of gevoelige gegevens in gewone decoy-tekst en genereert een mapping-bestand dat dient als herstelsleutel, terwijl de Text Generator dat mapping-bestand gebruikt om de originele gegevens uit de decoy-tekst te herstellen.\n\nAlle processen draaien volledig op het apparaat van de gebruiker zonder internetverbinding, waardoor wordt gegarandeerd dat er nooit gevoelige gegevens naar een server worden verzonden.',
      },
      'prod-2': {
        question: 'Wat is een Mapping File en waarom moet het apart worden opgeslagen?',
        answer:
          'Een Mapping File is een privé (.json) bestand dat technische informatie bevat en dient als de enige sleutel om de originele gegevens uit de decoy-tekst te herstellen.\n\nHet bevat geen directe gevoelige gegevens en is betekenisloos zonder de bijbehorende decoy-tekst. Om deze reden moet het Mapping File apart van de decoy-tekst worden opgeslagen. Deze scheiding voorkomt dat een enkel bestand geheimen onthult. Zonder de juiste combinatie van beide is herstel onmogelijk — wat betekent dat geen enkel component op zichzelf exploiteerbare gevoelige informatie bevat.',
      },
      'prod-3': {
        question: 'Hoe werkt Permanent Storage en welke bestandsformaten worden ondersteund?',
        answer:
          "Permanent Storage is een op Arweave gebaseerde opslaglaag die decoy-tekst en mapping-bestanden permanent en onveranderlijk opslaat.\n\nHet is ontworpen als write-once, read-forever opslag voor langdurige tekstback-ups zonder afhankelijk te zijn van traditionele servers.\n\nPermanent Storage ondersteunt alleen tekstgebaseerde bestanden, zoals .txt, .md en .json. Andere formaten zoals afbeeldingen, video's of audiobestanden worden niet ondersteund.\n\nAlle uploads worden beheerd via één account met behulp van een Shared Master Wallet, zodat gebruikers geen blockchain-wallet hoeven aan te maken of te beheren of blockchain-mechanica hoeven te begrijpen. De blockchain-complexiteit is verborgen achter een eenvoudige gebruikersinterface.",
      },
      'prod-4': {
        question: 'Wat zijn Multi-Password Vaults en hoe worden ze gebruikt?',
        answer:
          'Multi-Password Vaults zijn een functie van Permanent Storage waarmee één account meerdere geïsoleerde opslagkluizen kan bevatten, elk beschermd door een ander wachtwoord. Een gebruiker kan bijvoorbeeld decoy-tekst in Kluis A en mapping-bestanden in Kluis B opslaan, met aparte wachtwoorden voor elk.\n\nElke kluis is logisch geïsoleerd, wat betekent dat toegang tot één kluis geen toegang geeft tot andere. Als gevolg hiervan stelt het compromitteren van één wachtwoord slechts één kluis bloot, waardoor andere gevoelige bestanden veilig blijven.',
      },
      'prod-5': {
        question: 'Kan de Decoy Phrase Generator op verschillende apparaten worden gebruikt?',
        answer:
          'Ja. De Decoy Phrase Generator is beschikbaar op verschillende platforms. Het kan draaien op de belangrijkste desktopbesturingssystemen (Windows, macOS, Linux) en op Android-apparaten.\n\nOmdat alle processen offline op het lokale apparaat draaien, kan Decoy Phrase ook worden gebruikt in omgevingen zonder internettoegang of op hoogbeveiligde systemen zoals air-gapped computers.',
      },
      'prod-6': {
        question: 'Moeten gebruikers blockchain begrijpen om deze functies te gebruiken?',
        answer:
          'Nee. Hoewel Decoy Phrase achter de schermen blockchain-technologie (Arweave) gebruikt voor permanente opslag, is de interface zo ontworpen dat gebruikers niet te maken hebben met enige blockchain-gerelateerde complexiteit.\n\nDoor gebruik te maken van een Shared Master Wallet hoeven gebruikers zich alleen te concentreren op het beheren van hun tekst en wachtwoorden — ze hoeven geen eigen blockchain-wallets aan te maken, op te slaan of te beheren. Als gevolg hiervan kunnen alle functies van Decoy Phrase worden gebruikt zonder enige voorkennis van blockchain-technologie.',
      },
      'sec-1': {
        question: 'Hoe beschermt het systeem gebruikersgegevens?',
        answer:
          'Decoy Phrase past offline-eerst en zero-knowledge principes toe, wat betekent dat alle transformatie en versleuteling van gevoelige gegevens volledig op het apparaat van de gebruiker worden uitgevoerd — zonder dat er een internetverbinding of server nodig is.\n\nGegevens worden verwerkt en versleuteld aan de clientzijde (bijvoorbeeld met AES-256-GCM) voordat ze in Permanent Storage worden opgeslagen, dus openbare opslag bevat alleen versleutelde gegevens die niet kunnen worden gelezen zonder de sleutels van de gebruiker.\n\nBovendien worden er nooit seed phrases of originele gevoelige gegevens op een server opgeslagen, wat betekent dat er geen centrale kluis is die een doelwit van hoge waarde voor aanvallen kan worden. Deze aanpak elimineert de afhankelijkheid van derden en verschuift de beveiliging van op vertrouwen gebaseerde bescherming naar een technische architectuur die externe toegang per ontwerp onmogelijk maakt.',
      },
      'sec-2': {
        question: 'Kan Decoy Phrase mijn bestanden in Permanent Storage verwijderen?',
        answer:
          'Nee. Decoy Phrase kan uw bestanden niet verwijderen zodra ze in Permanent Storage zijn opgeslagen. Permanent Storage is gebouwd op de Arweave-blockchain, waar gegevens per ontwerp onveranderlijk zijn. Zodra een bestand is geüpload, kan het niet worden verwijderd, gewijzigd of gewist door Decoy Phrase — of door iemand anders.',
      },
      'sec-3': {
        question: 'Hoe zorgt het systeem ervoor dat er geen gevoelige gegevens worden opgeslagen?',
        answer:
          'Decoy Phrase gebruikt een "transformeer en scheid"-principe. Originele gegevens worden offline omgezet in gewone decoy-tekst die willekeurig lijkt en geen geheime betekenis bevat. Het gegenereerde mapping-bestand bevat technische herstelinformatie maar bevat niet de originele gevoelige gegevens.\n\nDeze twee componenten moeten apart worden opgeslagen (bijvoorbeeld op verschillende locaties of beschermd door verschillende wachtwoorden). Als gevolg hiervan bevat geen enkel component ooit het originele geheim. Zonder het mapping-bestand is de decoy-tekst nutteloos — en zonder de decoy-tekst is het mapping-bestand betekenisloos.\n\nDeze methode zorgt ervoor dat originele gevoelige gegevens nooit direct in de applicatie of op enige server worden opgeslagen.',
      },
      'sec-4': {
        question: 'Wat weet en niet weet het systeem in Permanent Storage?',
        answer:
          'Decoy Phrase is zero-knowledge, wat betekent dat het systeem nooit de inhoud van gebruikersgegevens kent.\n\nHet kan geen seed phrases, wachtwoorden of originele bestandsinhoud zien omdat alle gegevens volledig worden versleuteld in de lokale browser van de gebruiker vóór het uploaden.\n\nDe enige informatie die zichtbaar is voor het systeem is niet-gevoelige openbare metadata, zoals een gebruikersnaam (gebruikt als openbare identificatie) en het aantal opgeslagen bestanden.\n\nDe relatie tussen decoy-tekst en het mapping-bestand is ook onbekend voor het systeem. Kortom, gebruikersinhoud en geheimen worden nooit blootgesteld — er bestaan alleen versleutelde gegevens en beperkte openbare metadata.',
      },
      'sec-5': {
        question:
          'Hoe verschilt de beveiligingsaanpak van Decoy Phrase van traditionele systemen (zoals wachtwoordbeheerders)?',
        answer:
          '• Opslag van originele gegevens: Traditionele wachtwoordbeheerders slaan gebruikersgeheimen (wachtwoorden, seeds, etc.) op in een versleutelde kluis. Decoy Phrase slaat nooit originele gegevens op.\n\n• Architectuur: Wachtwoordbeheerders vertrouwen meestal op servers of cloudinfrastructuur voor synchronisatie. Decoy Phrase is offline-eerst, zonder backend en zonder afhankelijkheid van derden.\n\n• Beveiligingsmodel: Bij wachtwoordbeheerders hangt de veiligheid af van kluisversleuteling en een hoofdwachtwoord — als de kluis of het hoofdwachtwoord wordt gecompromitteerd, kunnen alle gegevens worden blootgesteld. Decoy Phrase heeft geen dergelijke kluis. Het lekken van een enkel bestand (ofwel decoy-tekst of mapping-bestand) is niet voldoende om de originele gegevens te herstellen, omdat elk component op zichzelf geen waarde heeft.\n\n• Single point of failure: De kluis van een wachtwoordbeheerder is een doelwit van hoge waarde. Decoy Phrase heeft geen enkel object dat geheimen bevat; totdat beide componenten (decoy-tekst en mapping-bestand) samen worden gecompromitteerd, is er geen primair punt van falen om aan te vallen.',
      },
      'sec-6': {
        question:
          'Wat gebeurt er als een decoy-bestand of mapping-bestand in handen van iemand anders valt?',
        answer:
          '• Als alleen de decoy-tekst wordt blootgesteld, wordt er geen geheim onthuld. De decoy-tekst is gewone data zonder gevoelige betekenis en kan niet worden gebruikt zonder het mapping-bestand.\n\n• Als alleen het mapping-bestand wordt blootgesteld, blijven de originele gegevens veilig. Het mapping-bestand bevat alleen technische karakterpatronen, geen geheime inhoud, en is nutteloos zonder de bijbehorende decoy-tekst.\n\n• Alleen als beide samen worden blootgesteld, kunnen de originele gegevens worden hersteld. In dat geval stort de beveiliging volledig in omdat de aanvaller beide benodigde componenten heeft.',
      },
      'sec-7': {
        question: 'Wat is het risico als bestanden niet worden gescheiden?',
        answer:
          'Het grootste risico ontstaat als de decoy-tekst en het mapping-bestand niet apart worden opgeslagen (bijvoorbeeld op dezelfde locatie of beschermd door hetzelfde wachtwoord).\n\nAls dit gebeurt, kan iedereen die toegang krijgt tot beide componenten direct de originele gegevens herstellen. Met andere woorden, het systeem faalt alleen wanneer de twee componenten onbedoeld worden samengebracht.\n\nDaarom is strikte scheiding essentieel: sla decoy-tekst en mapping-bestanden op verschillende locaties op of bescherm ze met verschillende wachtwoorden. Wanneer ze correct worden gescheiden, is zon falen uiterst onwaarschijnlijk.',
      },
    },
  },
  donate: {
    title: 'Steun Decoy Phrase',
    description:
      'Decoy Phrase is gratis te gebruiken en gebouwd als een non-profit initiatief. Er is geen betaalmuur en geen verplicht abonnement. Donaties zijn optioneel en transparant.',
    link: 'Bekijk live projectstatistieken en openbare gegevens hier!',
    cards: {
      storage: {
        title: 'Opslagfonds',
        description:
          'Deze donatie gaat rechtstreeks naar de opslagwallet en wordt automatisch toegevoegd aan het opslagfonds, waarmee permanent opslag duurzaam wordt gefinancierd en de beschikbare capaciteit toeneemt.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Stuur AR vanaf een exchange</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Koop AR-token</li>
      <li>Ga naar Verzenden of Opnemen</li>
      <li>Selecteer On-Chain Opname</li>
      <li>Selecteer AR (Arweave)</li>
      <li>Plak het Wallet-adres van Decoy Phrase</li>
      <li>Kies Arweave-netwerk</li>
      <li>Voer bedrag in</li>
      <li>Bevestig opname</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">AR-overdrachten duren meestal 1–5 minuten.</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Stuur AR vanaf Wander Wallet</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Maak Wander Wallet aan</li>
      <li>Koop AR-token via beschikbare betaalmethode</li>
      <li>Klik op Verzenden</li>
      <li>Plak het Wallet-adres van Decoy Phrase</li>
      <li>Voer bedrag in</li>
      <li>Bevestig transactie</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: 'Teamfonds',
        description:
          'Deze donatie ondersteunt het Decoy Phrase-team en ecosysteem, inclusief ontwikkeling, marketing en gemeenschapsinitiatieven. Fondsen kunnen ook aan opslag worden toegewezen wanneer dat nodig is.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Stuur stablecoin vanaf een exchange</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Koop USDT, USDC of een andere ondersteunde stablecoin</li>
      <li>Ga naar Verzenden of Opnemen</li>
      <li>Selecteer On-Chain Opname</li>
      <li>Kies de stablecoin die je wilt verzenden</li>
      <li>Plak het Wallet-adres van Decoy Phrase (zorg dat het overeenkomt met het geselecteerde netwerk)</li>
      <li>Selecteer het netwerk dat overeenkomt met het wallet-adres</li>
      <li>Voer het bedrag in</li>
      <li>Bevestig de opname</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">Stuur stablecoin vanaf DEX</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Koop een stablecoin of de native token van het geselecteerde netwerk</li>
      <li>Ga naar Verzenden of Opnemen</li>
      <li>Selecteer netwerk of Selecteer munt die je wilt verzenden</li>
      <li>Plak het Wallet-adres van Decoy Phrase op basis van token en wallet-netwerken</li>
      <li>Voer bedrag in</li>
      <li>Bevestig transactie</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: 'Opslagcalculator',
    info: {
      p1: 'De gemiddelde bestandsgrootte voor een mapping-bestand van een 12-woord seed phrase is ~50 KiB. Uploads gebruiken momenteel <strong class="text-foreground">Turbo (aangedreven door ar.io)</strong>, waardoor bestanden onder 105 KiB gratis geüpload kunnen worden, met directe Arweave-kostenberekeningen aanbevolen als back-up als Turbo niet beschikbaar is.',
      p2: 'Alle gegevens die in permanente opslag worden opgeslagen, blijven voor altijd toegankelijk, zelfs als de capaciteit is bereikt en er geen toekomstige donaties worden gedaan, terwijl extra capaciteit bedoeld is om toekomstige gebruikers en generaties van Decoy Phrase te ondersteunen.',
    },
    labels: {
      donationAmount: 'Donatiebedrag',
      arweaveEquivalent: 'Arweave Equivalent',
      winstonAmount: 'Winston Bedrag',
      capacityIncrease: 'Deze donatie verhoogt de permanente opslagcapaciteit met',
      files: 'Bestanden',
      calculate: 'Berekenen',
      currentBalance: 'Huidig Saldo',
      howToDonate: 'Hoe doneren?',
      copied: 'Gekopieerd!',
      addressCopied: 'Adres gekopieerd!',
      copyAddress: 'Kopieer wallet-adres',
      selectNetwork: 'Selecteer netwerk',
      walletAddress: 'Wallet-adres',
    },
  },
  metrics: {
    title: 'Live Decoy Phrase Statistieken',
    labels: {
      totalUsers: 'Totaal Gebruikers',
      totalFilesStored: 'Totaal Opgeslagen Bestanden',
      totalFilesLocked: 'Totaal Vergrendelde Bestanden',
      totalDonations: 'Totaal Donaties',
      remainingCapacity: 'Resterende Bestandscapaciteit',
      downloadTotal: 'Totaal Downloads Decoy Phrase Generator',
    },
    status: {
      live: 'Live',
      reconnecting: 'Opnieuw verbinden...',
      disconnected: 'Verbinding verbroken',
    },
    filters: {
      day: 'D',
      month: 'M',
      quarter: 'K',
      year: 'J',
      all: 'Alles',
    },
  },
  download: {
    title: 'Transformeer en herstel je originele seed phrase op elk moment.',
    subtitle:
      'Transformeer je seed phrase in aanpasbare afleidingstekst en herstel het origineel op elk moment met je privé-mapping-bestand. Alles werkt volledig offline – geen seed phrase opgeslagen, geüpload of gedeeld.',
    cta: {
      about: 'Over Decoy Generator',
      tutorials: 'Bekijk Tutorials',
    },
  },
  feedback: {
    title: 'Feedback & Ondersteuning',
    description:
      'Deel uw suggesties of meld problemen om ons te helpen de Decoy Generator te verbeteren. Stuur aub geen seed phrases of gevoelige gegevens.',
    discord: {
      text: 'Word lid van onze <span class="font-bold text-[#5865F2]">Discord</span> om feedback-updates en community-oplossingen te volgen.',
      linkText: 'Word nu lid!',
    },
    forms: {
      feedback: {
        title: 'Feedback',
        name: 'Naam',
        subject: 'Onderwerp',
        description: 'Beschrijving',
        email: 'E-mail',
        submit: 'Verzenden',
        submitting: 'Verzenden...',
        success: 'Feedback verzonden! Check Discord voor updates.',
        error: 'Verzenden mislukt. Probeer het opnieuw.',
        required: 'Verplicht',
        invalidEmail: 'Ongeldig e-mailadres',
        minChar: 'Moet minstens 10 tekens bevatten',
      },
      support: {
        title: 'Ondersteuning',
        category: 'Categorie',
        appVersion: 'App Versie',
        reference: 'Referentielink (Optioneel)',
        referenceHelper:
          "Upload screenshots of video's naar Google Drive of een andere cloudservice, stel de link in op 'Iedereen met de link kan bekijken' en plak de link hier.",
        required: 'Verplicht',
        invalidEmail: 'Ongeldig e-mailadres',
        minChar: 'Moet minstens 10 tekens bevatten',
      },
    },
  },
};
