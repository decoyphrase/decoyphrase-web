import { Translations } from './types';

export const itTranslations: Translations = {
  nav: {
    about: 'Chi siamo',
    userGuide: 'Guida utente',
    faq: 'FAQ',
    brandKit: 'Brand Kit',
    liveMetrics: 'Metriche live',
    decoyToken: '$DECOY',
    products: 'Prodotti',
    decoyGenerator: 'Generatore esche',
    permanentStorage: 'Archiviazione permanente',
    permanentWeb: 'Web permanente',
    donate: 'Dona',
    docs: 'Documentazione',
    connect: 'Connetti',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: 'Feedback',
  },
  header: {
    login: 'Accedi',
    menu: 'Menu',
    language: 'Lingua',
  },
  footer: {
    columns: {
      decoyPhrase: 'Decoy Phrase',
      coreComponents: 'Componenti Principali',
      downloadGenerator: 'Scarica Generatore',
    },
    links: {
      privacy: 'Informativa sulla Privacy',
      terms: 'Termini di Servizio',
      forum: 'Forum della Comunità',
    },
    mission: {
      text: 'La nostra missione è proteggere la privacy digitale e garantire uno storage immutabile. Le donazioni supportano lo storage permanente e lo sviluppo, mantenendo il sistema gratuito ed ereditabile.',
      ctaText: 'Per supportare Decoy Phrase, puoi contribuire tramite donazioni.',
    },
  },
  hero: {
    titlePart1: 'Proteggi la tua',
    titlePart2: 'impronta digitale',
    titleHighlight: 'per sempre',
    subtitle:
      "Usa l'archiviazione decentralizzata e la tecnologia avanzata delle esche per proteggere i tuoi dati.",
  },
  heroActions: {
    getStarted: 'Inizia',
    watchTutorials: 'Guarda tutorial',
    generator: 'Generatore',
    storage: 'Archiviazione',
  },
  features: {
    title: 'Le nostre',
    titleHighlight: 'funzionalità',
    subtitle: 'Esplora gli strumenti per proteggere i tuoi dati e la tua identità.',
    cards: {
      generator: {
        title: 'Generatore esche',
        description: 'Crea file falsi realistici per confondere gli intrusi.',
      },
      storage: {
        title: 'Archiviazione permanente',
        description: 'Archivia i tuoi dati per sempre sulla blockchain Arweave.',
      },
      web: {
        title: 'Web permanente',
        description: 'Pubblica siti web decentralizzati impossibili da censurare.',
      },
    },
  },
  howItWorks: {
    title: 'Come funziona Decoy Phrase',
    subtitle: 'Passaggi semplici. Sicurezza forte. Zero custodia.',
    steps: {
      '1': {
        title: 'Trasforma la tua frase seed',
        description:
          'Trasforma la tua frase seed in un testo esca. Elaborato interamente offline con il generatore di frasi esca, senza server, senza cloud e senza raccolta dati.',
      },
      '2': {
        title: 'Ricevi due file indipendenti',
        description:
          'Ricevi un Testo Esca che sembra normale e non contiene informazioni utilizzabili, e un File di Mappatura che serve come unica chiave per recuperare il segreto originale — senza entrambi, il recupero è impossibile.',
      },
      '3': {
        title: 'Archiviali separatamente',
        description:
          'Archivia il testo esca e il file di mappatura separatamente. Localmente in posizioni diverse o in storage permanente utilizzando Caveau Multi-Password.',
      },
      '4': {
        title: 'Recupera solo quando serve',
        description:
          'Quando è necessario il recupero, usa entrambi i file nel Generatore Decoy Phrase per ripristinare la tua frase seed originale.',
      },
    },
  },
  prosCons: {
    title: 'Pro e contro del backup della frase seed',
    subtitle: 'Non esiste il backup perfetto della frase seed — solo rischi diversi.',
    methods: {
      paper: {
        name: 'Backup cartaceo',
        criteria: {
          free: 'Nessun costo richiesto',
          easyAccess: 'Richiede accesso fisico',
          highSecurity: 'Facilmente rubato, fotografato o copiato',
          highPrivacy: 'Archiviato completamente offline',
          lossProof: 'Può essere smarrito o accidentalmente gettato',
          destructionProof: 'Vulnerabile a fuoco, acqua e invecchiamento',
        },
      },
      metal: {
        name: 'Backup metallico',
        criteria: {
          free: "Richiede l'acquisto di piastre metalliche",
          easyAccess: 'Richiede accesso fisico e recupero',
          highSecurity: 'Chiunque lo trovi può usarlo direttamente',
          highPrivacy: 'Archiviato offline senza terze parti',
          lossProof: 'Può ancora essere perso o rubato',
          destructionProof: 'Resistente a fuoco e acqua',
        },
      },
      'local-storage': {
        name: 'Storage locale',
        criteria: {
          free: 'Usa hardware esistente',
          easyAccess: 'Richiede dispositivo, porta e compatibilità',
          highSecurity: 'Vulnerabile a malware o furto',
          highPrivacy: 'Archiviato localmente senza terze parti',
          lossProof: 'Facilmente perso, danneggiato o corrotto',
          destructionProof: 'Suscettibile a guasti hardware',
        },
      },
      cloud: {
        name: 'Storage cloud',
        criteria: {
          free: 'Richiede abbonamento o storage a pagamento',
          easyAccess: 'Accessibile ovunque con login',
          highSecurity: 'Bersaglio di hack e furti di account',
          highPrivacy: 'Controllato da fornitori terzi',
          lossProof: 'I backup ridondanti riducono il rischio di perdita',
          destructionProof: 'Gli account possono essere eliminati o congelati',
        },
      },
      encrypted: {
        name: 'File digitale crittografato',
        criteria: {
          free: 'Puo essere creato usando strumenti gratuiti',
          easyAccess: 'Richiede password e software corretto',
          highSecurity: 'Forte solo se la password non viene mai esposta',
          highPrivacy: 'La privacy dipende dalla posizione di storage',
          lossProof: 'La perdita della password significa perdita permanente',
          destructionProof: 'La corruzione o eliminazione del file è fatale',
        },
      },
      shamir: {
        name: "Shamir's Secret Sharing",
        criteria: {
          free: 'Richiede strumenti specializzati o wallet compatibili',
          easyAccess: 'Richiede la raccolta di quote soglia',
          highSecurity: 'Le singole quote sono crittograficamente inutili',
          highPrivacy: "Nessuna parte detiene l'intera frase seed",
          lossProof: 'Tollera la perdita limitata di quote',
          destructionProof: 'La perdita di più quote rompe il recupero',
        },
      },
      custodian: {
        name: 'Custode',
        criteria: {
          free: 'I servizi di custodia spesso addebitano commissioni',
          easyAccess: "Facile recupero tramite accesso all'account",
          highSecurity: 'Gli utenti dipendono completamente da una terza parte',
          highPrivacy: 'Il custode ha visibilità e controllo',
          lossProof: 'I fondi possono essere congelati o confiscati',
          destructionProof: "Il fallimento dell'azienda rischia la perdita totale",
        },
      },
      splitting: {
        name: 'Divisione del seed',
        criteria: {
          free: 'Nessun costo richiesto',
          easyAccess: 'Richiede la raccolta di tutti i pezzi',
          highSecurity: 'I pezzi parziali rivelano ancora informazioni',
          highPrivacy: 'Per lo più archiviato in forma semplice',
          lossProof: 'Perdere un pezzo rompe il recupero',
          destructionProof: 'Il danno fisico influisce sul recupero',
        },
      },
      lawyer: {
        name: 'Avvocato',
        criteria: {
          free: 'Richiede spese legali continue',
          easyAccess: "L'accesso dipende dalle procedure legali",
          highSecurity: 'Fiducia umana e rischio legale coinvolti',
          highPrivacy: "L'avvocato può accedere al seed grezzo",
          lossProof: 'Soggetto a errore umano o controversie',
          destructionProof: 'I documenti possono essere persi o distrutti',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: 'Sistema gratuito e non-profit',
          easyAccess:
            'Recuperabile in qualsiasi momento tramite storage permanente e app scaricabili',
          highSecurity: 'Il vero seed non viene mai archiviato direttamente',
          highPrivacy: 'Il testo esca non ha senso da solo',
          lossProof: 'Una parte da sola è inutile per gli attaccanti',
          destructionProof: 'Può essere salvato su storage permanente',
        },
      },
    },
    criteriaLabels: {
      free: 'Gratuito',
      easyAccess: 'Accesso Facile',
      highSecurity: 'Alta Sicurezza',
      highPrivacy: 'Alta Privacy',
      lossProof: 'A Prova di Perdita',
      destructionProof: 'A Prova di Distruzione',
    },
  },
  securityDemo: {
    title: 'Sicurezza tramite separazione',
    subtitle: 'Nessun file di mappatura, nessun recupero. Nessun testo esca, nessun accesso.',
    annotations: {
      decoy:
        'Devi avere un testo esca, che funge da rappresentazione offuscata dei tuoi dati sensibili originali.',
      mapping:
        'Devi avere il file di mappatura, che contiene le regole di trasformazione necessarie per ricostruire i dati originali dal testo esca',
      result: 'La tua frase seed generata apparirà qui',
      clickToGenerate: 'Clicca qui per generare la frase seed',
    },
    buttons: {
      simulateDecoy: "Clicca per simulare il posizionamento dell'esca",
      placeDecoy: '✓ Testo esca posizionato',
      simulateMapping: 'Clicca per simulare il caricamento della mappa',
      uploadMapping: 'Aggiorna Mappa',
      mappingLoaded: 'Mappa Caricata',
      updateMapping: 'Aggiorna nuovo file mappa',
      generate: 'Genera Risultato',
      decrypting: 'Decrittazione...',
    },
    labels: {
      decoyText: 'Testo esca',
      asciiText: 'Testo ASCII',
      resultPlaceholder: 'Il risultato apparirà qui...',
    },
  },
  faq: {
    title: 'Domande frequenti',
    subtitle:
      'Ecco alcune domande che potresti avere su Decoy Phrase. Non hai trovato la risposta che cercavi?',
    chatAi: "Chatta con l'IA su Decoy Phrase!",
    categories: {
      general: 'Generale',
      products: 'Prodotti',
      security: 'Sicurezza e Privacy',
    },
    items: {
      'gen-1': {
        question: "Cos'è Decoy Phrase?",
        answer:
          "Decoy Phrase è un metodo offline-first per proteggere ed effettuare il backup di seed phrase e testi sensibili, senza mai archiviare i dati originali.\n\nTrasforma i segreti in testo innocuo e dall'aspetto comune, con il recupero possibile solo combinando il file di mappatura privato e il testo trasformato.\n\nPer una durata a lungo termine, i file esca e i file di mappatura possono essere archiviati in modo permanente tramite Decoy Phrase Permanent Storage, collegato direttamente alla blockchain Arweave, garantendo che non possano essere persi, alterati o eliminati.",
      },
      'gen-2': {
        question: 'Decoy Phrase è gratuito?',
        answer:
          "Sì. Decoy Phrase è completamente gratuito e opera come iniziativa no-profit. Tutte le funzionalità principali, tra cui la generazione di testo esca, la creazione di file di mappatura e il recupero offline, sono disponibili senza costi.\n\nPer Decoy Phrase Permanent Storage, l'archiviazione è supportata da donazioni. Queste donazioni vengono utilizzate per finanziare l'espansione della capacità di archiviazione permanente sulla blockchain Arweave nel tempo. Tutti i file già archiviati sulla blockchain rimarranno accessibili per sempre, indipendentemente dallo stato futuro del servizio.",
      },
      'gen-3': {
        question: "Cos'è permanente in Decoy Phrase?",
        answer:
          'In Decoy Phrase, il concetto di permanenza si applica al sito web, al dominio e ai dati archiviati, abilitato dal Web Permanente e dallo Storage Permanente costruiti su Arweave.',
      },
      'gen-4': {
        question: 'Decoy Phrase archivia i miei dati?',
        answer:
          'No. Decoy Phrase non archivia mai la tua seed phrase o i tuoi dati sensibili originali. Il processo di generazione del testo esca e dei file di mappatura viene eseguito completamente offline utilizzando il Generatore Decoy Phrase. Di conseguenza, non vi è alcun rischio che i tuoi segreti vengano archiviati su alcun server.\n\nQuando i file vengono archiviati nel Permanent Storage, tutti i dati vengono crittografati lato client prima di essere inviati alla blockchain Arweave, incluse password, contenuti dei file e titoli dei file.',
      },
      'gen-5': {
        question: 'Cosa succede se perdo sia il mio file di mappatura che il relativo testo esca?',
        answer:
          "Se perdi sia il file di mappatura che il testo esca corrispondente, i tuoi dati originali diventano permanentemente irrecuperabili. Decoy Phrase è intenzionalmente progettato senza alcun meccanismo di ripristino, backup o recupero e non archivia mai i tuoi segreti originali, rendendo il recupero tecnicamente impossibile senza entrambi i componenti.\n\nEcco perché Decoy Phrase offre il Permanent Storage: per ridurre il rischio di perdita accidentale consentendo ai file esca e di mappatura di essere archiviati in uno storage immutabile a lungo termine che non può essere eliminato, alterato o perso silenziosamente, pur mantenendo un design a conoscenza zero e non detentivo, in cui tutti i file sono crittografati lato client e il controllo completo rimane all'utente.",
      },
      'gen-6': {
        question: 'Devo essere online per usare Decoy Phrase?',
        answer:
          "Dipende.\n\nIl Generatore Decoy Phrase funziona completamente offline. Tutti i processi principali (creazione del testo esca, generazione del file di mappatura e recupero dei dati) vengono eseguiti interamente sul tuo dispositivo senza alcuna connessione Internet.\n\nTuttavia, il Permanent Storage richiede una connessione online, poiché archivia file crittografati sulla blockchain Arweave utilizzando un'architettura a conoscenza zero.",
      },
      'gen-7': {
        question:
          'Posso recuperare la mia seed phrase o i dati sensibili senza assistenza di terze parti?',
        answer:
          'Sì. Decoy Phrase è progettato per un uso completamente autonomo, senza intermediari. Utilizzando il tuo testo esca e il relativo file di mappatura, il sistema ripristina i tuoi dati originali direttamente sul tuo dispositivo, completamente offline tramite il Generatore Decoy Phrase, senza coinvolgere alcuna terza parte.',
      },
      'gen-8': {
        question: 'È sicuro condividere il Testo Esca con altri?',
        answer:
          'Sì, è sicuro.\n\nIl Testo Esca è progettato per sembrare ordinario e non contiene informazioni sensibili utilizzabili da solo. Senza il file di mappatura corrispondente, non può essere utilizzato per recuperare i dati originali. Allo stesso modo, un file di mappatura senza il relativo testo esca è inutilizzabile. Pertanto, condividere il solo Testo Esca non espone il tuo segreto.',
      },
      'gen-9': {
        question: 'In che modo Decoy Phrase è diverso da un gestore di password?',
        answer:
          "Decoy Phrase non è un gestore di password online.\n\nLa trasformazione di seed phrase, password o altri dati sensibili viene eseguita completamente offline tramite il Generatore Decoy Phrase.\n\nIl Permanent Storage viene utilizzato solo per archiviare testo esca e file di mappatura, separati in diversi spazi di archiviazione utilizzando la funzionalità di gestione multi-password.\n\nTutti i file archiviati nel Permanent Storage sono crittografati lato client. Anche se vengono esposti, le chiavi di decrittazione sono detenute solo dall'utente, rendendo i dati inutilizzabili per chiunque altro.\n\nA differenza dei gestori di password che archiviano password crittografate su server o nel cloud, Decoy Phrase ti dà il controllo completo su how e dove i tuoi dati sensibili vengono archiviati e recuperati.",
      },
      'prod-1': {
        question: "Cos'è il Generatore Decoy Phrase e quali sono i suoi componenti?",
        answer:
          "Il Generatore Decoy Phrase è lo strumento principale nel sistema Decoy Phrase, che combina il Mapping Maker e il Text Generator.\n\nIl Mapping Maker trasforma seed phrase o dati sensibili in testo esca ordinario e genera un file di mappatura che funge da chiave di recupero, mentre il Text Generator utilizza quel file di mappatura per ripristinare i dati originali dal testo esca.\n\nTutti i processi vengono eseguiti interamente sul dispositivo dell'utente senza connessione Internet, garantendo che nessun dato sensibile venga mai inviato a nessun server.",
      },
      'prod-2': {
        question: "Cos'è un File di Mappatura e perché deve essere archiviato separatamente?",
        answer:
          'Un File di Mappatura è un file privato (.json) contenente informazioni tecniche e funge da unica chiave per recuperare i dati originali dal testo esca.\n\nNon contiene dati sensibili direttamente ed è privo di significato senza il relativo testo esca. Per questo motivo, il File di Mappatura deve essere archiviato separatamente dal testo esca. Questa separazione impedisce che un singolo file riveli segreti. Senza la corretta combinazione di entrambi, il recupero è impossibile, il che significa che nessun singolo componente contiene informazioni sensibili sfruttabili da solo.',
      },
      'prod-3': {
        question: 'Come funziona il Permanent Storage e quali formati di file sono supportati?',
        answer:
          'Il Permanent Storage è un livello di archiviazione basato su Arweave che archivia testo esca e file di mappatura in modo permanente e immutabile.\n\nÈ progettato come archiviazione "scrivi una volta, leggi per sempre" per backup di testo a lungo termine senza dipendere dai server tradizionali.\n\nIl Permanent Storage supporta solo file basati su testo, come .txt, .md e .json. Altri formati come immagini, video o file audio non sono supportati.\n\nTutti i caricamenti sono gestiti tramite un unico account utilizzando un Shared Master Wallet, quindi gli utenti non devono creare o gestire un portafoglio blockchain o comprendere le meccaniche della blockchain. La complessità della blockchain è nascosta dietro una semplice interfaccia utente.',
      },
      'prod-4': {
        question: 'Cosa sono i Vault Multi-Password e come vengono utilizzati?',
        answer:
          "I Vault Multi-Password sono una funzionalità del Permanent Storage che consente a un singolo account di contenere più vault di archiviazione isolati, ciascuno protetto da una password diversa. Ad esempio, un utente può archiviare testo esca nel Vault A e file di mappatura nel Vault B, utilizzando password separate per ciascuno.\n\nOgni vault è isolato logicamente, il che significa che l'accesso a un vault non garantisce l'accesso agli altri. Di conseguenza, compromettere una password espone solo un vault, mantenendo al sicuro altri file sensibili.",
      },
      'prod-5': {
        question: 'Il Generatore Decoy Phrase può essere utilizzato su dispositivi diversi?',
        answer:
          'Sì. Il Generatore Decoy Phrase è disponibile su più piattaforme. Può essere eseguito sui principali sistemi operativi desktop (Windows, macOS, Linux) e sui dispositivi Android.\n\nPoiché tutti i processi vengono eseguiti offline sul dispositivo locale, Decoy Phrase può essere utilizzato anche in ambienti senza accesso a Internet o su sistemi ad alta sicurezza come computer air-gapped.',
      },
      'prod-6': {
        question: 'Gli utenti devono comprendere la blockchain per utilizzare queste funzionalità?',
        answer:
          "No. Sebbene Decoy Phrase utilizzi la tecnologia blockchain (Arweave) dietro le quinte per l'archiviazione permanente, l'interfaccia è progettata in modo che gli utenti non debbano affrontare alcuna complessità legata alla blockchain.\n\nUtilizzando un Shared Master Wallet, gli utenti devono solo concentrarsi sulla gestione dei propri testi e password; non devono creare, archiviare o gestire i propri portafogli blockchain. Di conseguenza, tutte le funzionalità di Decoy Phrase possono essere utilizzate senza alcuna conoscenza precedente della tecnologia blockchain.",
      },
      'sec-1': {
        question: 'Come protegge il sistema i dati degli utenti?',
        answer:
          "Decoy Phrase applica principi offline-first e a conoscenza zero, il che significa che tutte le trasformazioni e la crittografia dei dati sensibili vengono eseguite interamente sul dispositivo dell'utente, senza richiedere una connessione Internet o alcun server.\n\nI dati vengono elaborati e crittografati lato client (ad esempio, utilizzando AES-256-GCM) prima di essere archiviati nel Permanent Storage, quindi l'archiviazione pubblica contiene solo dati crittografati che non possono essere letti senza le chiavi dell'utente.\n\nInoltre, nessuna seed phrase o dato sensibile originale viene mai archiviato su alcun server, il che significa che non esiste un vault centrale che potrebbe diventare un obiettivo di attacco di alto valore. Questo approccio elimina la dipendenza da terze parti e sposta la sicurezza da una protezione basata sulla fiducia a un'architettura tecnica che rende impossibile l'accesso esterno per progettazione.",
      },
      'sec-2': {
        question: 'Decoy Phrase può eliminare i miei file nel Permanent Storage?',
        answer:
          'No. Decoy Phrase non può eliminare i tuoi file una volta archiviati nel Permanent Storage. Il Permanent Storage è costruito sulla blockchain Arweave, dove i dati sono immutabili per progettazione. Una volta caricato un file, non può essere rimosso, modificato o cancellato da Decoy Phrase, né da nessun altro.',
      },
      'sec-3': {
        question: 'Come garantisce il sistema che non vengano archiviati dati sensibili?',
        answer:
          'Decoy Phrase utilizza un principio di "trasforma e separa". I dati originali vengono convertiti offline in testo esca ordinario che appare casuale e non contiene alcun significato segreto. Il file di mappatura generato contiene informazioni tecniche di recupero ma non include i dati sensibili originali.\n\nQuesti due componenti devono essere archiviati separatamente (ad esempio, in posizioni diverse o protetti da password diverse). Di conseguenza, nessun singolo componente contiene mai il segreto originale. Senza il file di mappatura, il testo esca è inutile e senza il testo esca, il file di mappatura è privo di significato.\n\nQuesto metodo garantisce che i dati sensibili originali non vengano mai archiviati direttamente nell\'applicazione o su alcun server.',
      },
      'sec-4': {
        question: 'Cosa sa e cosa non sa il sistema nel Permanent Storage?',
        answer:
          "Decoy Phrase è a conoscenza zero, il che significa che il sistema non conosce mai il contenuto dei dati dell'utente.\n\nNon può vedere seed phrase, password o contenuti originali dei file perché tutti i dati sono completamente crittografati nel browser locale dell'utente prima del caricamento.\n\nL'unica informazione visibile al sistema sono i metadati pubblici non sensibili, come un nome utente (usato come identificatore pubblico) e il numero di file archiviati.\n\nAnche la relazione tra il testo esca e il suo file di mappatura è sconosciuta al sistema. In breve, i contenuti e i segreti dell'utente non vengono mai esposti: esistono solo dati crittografati e metadati pubblici limitati.",
      },
      'sec-5': {
        question:
          "In che modo l'approccio alla sicurezza di Decoy Phrase differisce dai sistemi tradizionali (come i gestori di password)?",
        answer:
          "• Archiviazione dati originali: I gestori di password tradizionali archiviano i segreti dell'utente (password, seed, ecc.) all'interno di un vault crittografato. Decoy Phrase non archivia mai i dati originali.\n\n• Architettura: I gestori di password in genere si affidano a server o infrastrutture cloud per la sincronizzazione. Decoy Phrase è offline-first, senza backend e senza dipendenze da terze parti.\n\n• Modello di sicurezza: Nei gestori di password, la sicurezza dipende dalla crittografia del vault e da una master password; se il vault o la master password vengono compromessi, tutti i dati possono essere esposti. Decoy Phrase non ha tale vault. La fuga di un singolo file (testo esca o file di mappatura) non è sufficiente per recuperare i dati originali, perché ogni componente non ha valore da solo.\n\n• Singolo punto di errore: Il vault di un gestore di password è un obiettivo di alto valore. Decoy Phrase non ha un singolo oggetto che contiene segreti; finché entrambi i componenti (testo esca e file di mappatura) non vengono compromessi insieme, non c'è un punto di errore principale da attaccare.",
      },
      'sec-6': {
        question:
          'Cosa succede se un file esca o un file di mappatura cade nelle mani di qualcun altro?',
        answer:
          "• Se viene esposto solo il testo esca, non viene rivelato alcun segreto. Il testo esca è costituito da dati ordinari senza significato sensibile e non può essere utilizzato senza il file di mappatura.\n\n• Se viene esposto solo il file di mappatura, i dati originali rimangono al sicuro. Il file di mappatura contiene solo modelli di caratteri tecnici, nessun contenuto segreto, ed è inutile senza il relativo testo esca.\n\n• Solo se entrambi vengono esposti insieme è possibile recuperare i dati originali. In tal caso, la sicurezza crolla completamente perché l'attaccante possiede entrambi i componenti richiesti.",
      },
      'sec-7': {
        question: 'Qual è il rischio di non separare i file?',
        answer:
          "Il rischio principale si verifica se il testo esca e il file di mappatura non vengono archiviati separatamente (ad esempio, nella stessa posizione o protetti dalla stessa password).\n\nSe ciò accade, chiunque ottenga l'accesso a entrambi i componenti può recuperare direttamente i dati originali. In altre parole, il sistema fallisce solo quando i due componenti vengono riuniti involontariamente.\n\nPer questo motivo, è essenziale una rigorosa separazione: archivia testo esca e file di mappatura in posizioni diverse o proteggili con password diverse. Se separati correttamente, tale errore è estremamente improbabile.",
      },
    },
  },
  donate: {
    title: 'Supporta Decoy Phrase',
    description:
      "Decoy Phrase è gratuito e costruito come iniziativa non-profit. Non c'è paywall e nessun abbonamento richiesto. Le donazioni sono facoltative e trasparenti.",
    link: 'Vedi le metriche del progetto in tempo reale e i dati pubblici qui!',
    cards: {
      storage: {
        title: 'Fondo Storage',
        description:
          'Questa donazione va direttamente al wallet di storage e viene aggiunta automaticamente al fondo di dotazione dello storage, finanziando in modo sostenibile lo storage permanente e aumentando la capacità disponibile.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Invia AR da un exchange</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Compra token AR</li>
      <li>Vai a Invia o Preleva</li>
      <li>Seleziona Prelievo On-Chain</li>
      <li>Seleziona AR (Arweave)</li>
      <li>Incolla l'indirizzo del wallet di Decoy Phrase</li>
      <li>Scegli la rete Arweave</li>
      <li>Inserisci l'importo</li>
      <li>Conferma il prelievo</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">I trasferimenti AR richiedono solitamente 1–5 minuti.</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Invia AR da Wander Wallet</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Crea Wander Wallet</li>
      <li>Compra token AR tramite il metodo di pagamento disponibile</li>
      <li>Clicca Invia</li>
      <li>Incolla l'indirizzo del wallet di Decoy Phrase</li>
      <li>Inserisci l'importo</li>
      <li>Conferma la transazione</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: 'Fondo Team',
        description:
          "Questa donazione supporta il team e l'ecosistema di Decoy Phrase, incluso sviluppo, marketing e iniziative della comunità. I fondi possono anche essere allocati allo storage quando necessario.",
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Invia Stablecoin da un exchange</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Compra USDT, USDC o un'altra stablecoin supportata</li>
      <li>Vai a Invia o Preleva</li>
      <li>Seleziona Prelievo On-Chain</li>
      <li>Scegli la stablecoin che vuoi inviare</li>
      <li>Incolla l'indirizzo del wallet di Decoy Phrase (assicurati che corrisponda alla rete selezionata)</li>
      <li>Seleziona la rete che corrisponde all'indirizzo del wallet</li>
      <li>Inserisci l'importo</li>
      <li>Conferma il prelievo</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">Invia Stablecoin da DEX</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Compra una stablecoin o il token nativo della rete selezionata</li>
      <li>Vai a Invia o Preleva</li>
      <li>Seleziona rete o Seleziona moneta che vuoi inviare</li>
      <li>Incolla l'indirizzo del wallet di Decoy Phrase basato su token e reti wallet</li>
      <li>Inserisci l'importo</li>
      <li>Conferma transazione</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: 'Calcolatore Storage',
    info: {
      p1: 'La dimensione media del file per un file di mappatura della frase seed di 12 parole è ~50 KiB. I caricamenti utilizzano attualmente <strong class="text-foreground">Turbo (powered by ar.io)</strong>, consentendo di caricare gratuitamente file inferiori a 105 KiB, con calcoli delle tariffe dirette Arweave raccomandati come fallback se Turbo non è disponibile.',
      p2: 'Tutti i dati archiviati su storage permanente rimangono accessibili per sempre, anche se la capacità viene raggiunta e non vengono fatte future donazioni, mentre la capacità aggiuntiva è destinata a supportare i futuri utenti e generazioni di Decoy Phrase.',
    },
    labels: {
      donationAmount: 'Importo Donazione',
      arweaveEquivalent: 'Equivalente Arweave',
      winstonAmount: 'Importo Winston',
      capacityIncrease: 'Questa donazione aumenta la capacità di storage permanente di',
      files: 'File',
      calculate: 'Calcola',
      currentBalance: 'Saldo Attuale',
      howToDonate: 'Come Donare?',
      copied: 'Copiato!',
      addressCopied: 'Indirizzo copiato!',
      copyAddress: 'Copia indirizzo wallet',
      selectNetwork: 'Seleziona rete',
      walletAddress: 'Indirizzo wallet',
    },
  },
  metrics: {
    title: 'Metriche Live di Decoy Phrase',
    labels: {
      totalUsers: 'Utenti Totali',
      totalFilesStored: 'Totale File Archiviati',
      totalFilesLocked: 'Totale File Bloccati',
      totalDonations: 'Donazioni Totali',
      remainingCapacity: 'Capacità File Rimanente',
      downloadTotal: 'Totale Download Generatore Decoy Phrase',
    },
    status: {
      live: 'Live',
      reconnecting: 'Riconnessione...',
      disconnected: 'Disconnesso',
    },
    filters: {
      day: 'G',
      month: 'M',
      quarter: 'T',
      year: 'A',
      all: 'Tutto',
    },
  },
  download: {
    title: 'Trasforma e recupera la tua frase seed originale in qualsiasi momento.',
    subtitle:
      "Trasforma la tua frase seed in testo esca personalizzabile e recupera l'originale in qualsiasi momento usando il tuo file di mappatura privato. Tutto funziona completamente offline: nessuna frase seed memorizzata, caricata o condivisa.",
    cta: {
      about: 'Info su Generatore Decoy',
      tutorials: 'Guarda Tutorial',
    },
  },
  feedback: {
    title: 'Feedback e Supporto',
    description:
      'Condividi i tuoi suggerimenti o segnala problemi per aiutarci a migliorare Decoy Generator. Per favore, non inviare frasi seed o dati sensibili.',
    discord: {
      text: 'Unisciti al nostro <span class="font-bold text-[#5865F2]">Discord</span> per seguire gli aggiornamenti sui feedback e le soluzioni della comunità.',
      linkText: 'Unisciti ora!',
    },
    forms: {
      feedback: {
        title: 'Feedback',
        name: 'Nome',
        subject: 'Oggetto',
        description: 'Descrizione',
        email: 'Email',
        submit: 'Invia',
        submitting: 'Invio...',
        success: 'Feedback inviato! Controlla Discord per aggiornamenti.',
        error: 'Invio fallito. Riprova.',
        required: 'Richiesto',
        invalidEmail: 'Indirizzo email non valido',
        minChar: 'Deve essere di almeno 10 caratteri',
      },
      support: {
        title: 'Supporto',
        category: 'Categoria',
        appVersion: 'Versione App',
        reference: 'Link di Riferimento (Opzionale)',
        referenceHelper:
          "Carica screenshot o video su Google Drive o altro servizio cloud, imposta il link su 'Chiunque abbia il link può visualizzare', poi incolla il link qui.",
        required: 'Richiesto',
        invalidEmail: 'Indirizzo email non valido',
        minChar: 'Deve essere di almeno 10 caratteri',
      },
    },
  },
};
