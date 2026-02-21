import { Translations } from './types';

export const plTranslations: Translations = {
  nav: {
    about: 'O nas',
    userGuide: 'Podręcznik użytkownika',
    faq: 'FAQ',
    brandKit: 'Zestaw marki',
    liveMetrics: 'Statystyki na żywo',
    decoyToken: '$DECOY',
    products: 'Produkty',
    decoyGenerator: 'Generator przynęt',
    permanentStorage: 'Trwałe przechowywanie',
    permanentWeb: 'Trwała sieć',
    donate: 'Przekaż darowiznę',
    docs: 'Dokumentacja',
    connect: 'Połącz',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: 'Opinie',
  },
  header: {
    login: 'Zaloguj się',
    menu: 'Menu',
    language: 'Język',
  },
  footer: {
    columns: {
      decoyPhrase: 'Fraza przynęty',
      coreComponents: 'Główne komponenty',
      downloadGenerator: 'Pobierz generator',
    },
    links: {
      privacy: 'Polityka prywatności',
      terms: 'Warunki korzystania',
      forum: 'Forum',
    },
    mission: {
      text: 'Naszą misją jest ochrona prywatności cyfrowej i zapewnienie niezmiennego przechowywania danych.',
      ctaText: 'Dołącz do rewolucji',
    },
  },
  hero: {
    titlePart1: 'Chroń swój',
    titlePart2: 'cyfrowy ślad',
    titleHighlight: 'na zawsze',
    subtitle:
      'Wykorzystaj zdecentralizowane przechowywanie i zaawansowaną technologię przynęt, aby zabezpieczyć swoje dane.',
  },
  heroActions: {
    getStarted: 'Rozpocznij',
    watchTutorials: 'Obejrzyj samouczki',
    generator: 'Generator',
    storage: 'Przechowywanie',
  },
  features: {
    title: 'Nasze kluczowe',
    titleHighlight: 'funkcje',
    subtitle: 'Odkryj narzędzia do ochrony Twoich danych i tożsamości.',
    cards: {
      generator: {
        title: 'Generator przynęt',
        description: 'Twórz realistyczne fałszywe pliki, aby zmylić intruzów.',
      },
      storage: {
        title: 'Trwałe przechowywanie',
        description: 'Przechowuj swoje dane na zawsze w blockchainie Arweave.',
      },
      web: {
        title: 'Trwała sieć',
        description: 'Wdrażaj zdecentralizowane strony internetowe, których nie można ocenzurować.',
      },
    },
  },
  howItWorks: {
    title: 'Jak działa Decoy Phrase',
    subtitle: 'Proste kroki. Silne zabezpieczenia. Zero powiernictwa.',
    steps: {
      '1': {
        title: 'Przekształć swoją Frazę Seed',
        description:
          'Przekształć swoją frazę seed w tekst przynęty. Przetwarzane całkowicie offline za pomocą generatora Decoy Phrase, bez serwerów, bez chmury i bez gromadzenia danych.',
      },
      '2': {
        title: 'Otrzymaj dwa niezależne pliki',
        description:
          'Otrzymujesz Tekst Przynęty, który wygląda normalnie i nie zawiera żadnych użytecznych informacji, oraz Plik Mapowania, który służy jako jedyny klucz do odzyskania oryginalnego sekretu — bez obu odzyskanie jest niemożliwe.',
      },
      '3': {
        title: 'Przechowuj je oddzielnie',
        description:
          'Przechowuj tekst przynęty i plik mapowania oddzielnie. Lokalnie w różnych miejscach lub w trwałym magazynie za pomocą Skarbców z Wieloma Hasłami.',
      },
      '4': {
        title: 'Odzyskaj tylko wtedy, gdy to ważne',
        description:
          'Gdy odzyskanie jest konieczne, użyj obu plików w Generatorze Decoy Phrase, aby przywrócić oryginalną frazę seed.',
      },
    },
  },
  prosCons: {
    title: 'Zalety i wady kopii zapasowej Frazy Seed',
    subtitle: 'Nie ma idealnej kopii zapasowej frazy seed — są tylko różne ryzyka.',
    methods: {
      paper: {
        name: 'Kopia Papierowa',
        criteria: {
          free: 'Brak kosztów',
          easyAccess: 'Wymaga fizycznego dostępu',
          highSecurity: 'Łatwo skradzione, sfotografowane lub skopiowane',
          highPrivacy: 'Przechowywane całkowicie offline',
          lossProof: 'Może zostać zgubione lub przypadkowo wyrzucone',
          destructionProof: 'Podatne na ogień, wodę i starzenie',
        },
      },
      metal: {
        name: 'Kopia Metalowa',
        criteria: {
          free: 'Wymaga zakupu metalowych płyt',
          easyAccess: 'Wymaga fizycznego dostępu i odzyskania',
          highSecurity: 'Każdy, kto znajdzie, może użyć bezpośrednio',
          highPrivacy: 'Przechowywane offline bez stron trzecich',
          lossProof: 'Nadal może zostać zgubione lub skradzione',
          destructionProof: 'Odporne na ogień i wodę',
        },
      },
      'local-storage': {
        name: 'Pamięć Lokalna',
        criteria: {
          free: 'Wykorzystuje istniejący sprzęt',
          easyAccess: 'Wymaga urządzenia, portu i kompatybilności',
          highSecurity: 'Podatne na złośliwe oprogramowanie lub kradzież',
          highPrivacy: 'Przechowywane lokalnie bez stron trzecich',
          lossProof: 'Łatwo zgubione, uszkodzone lub zepsute',
          destructionProof: 'Podatne na awarie sprzętowe',
        },
      },
      cloud: {
        name: 'Chmura Przechowawcza',
        criteria: {
          free: 'Wymaga subskrypcji lub płatnego miejsca',
          easyAccess: 'Dostępne wszędzie po zalogowaniu',
          highSecurity: 'Cel ataków hakerskich i kradzieży kont',
          highPrivacy: 'Kontrolowane przez dostawców zewnętrznych',
          lossProof: 'Redundantne kopie zmniejszają ryzyko utraty',
          destructionProof: 'Konta mogą zostać usunięte lub zamrożone',
        },
      },
      encrypted: {
        name: 'Zaszyfrowany Plik Cyfrowy',
        criteria: {
          free: 'Można utworzyć za pomocą darmowych narzędzi',
          easyAccess: 'Wymaga hasła i odpowiedniego oprogramowania',
          highSecurity: 'Silne tylko wtedy, gdy hasło nigdy nie zostanie ujawnione',
          highPrivacy: 'Prywatność zależy od lokalizacji przechowywania',
          lossProof: 'Utrata hasła oznacza trwałą utratę',
          destructionProof: 'Uszkodzenie lub usunięcie pliku jest fatalne',
        },
      },
      shamir: {
        name: "Shamir's Secret Sharing",
        criteria: {
          free: 'Wymaga specjalistycznych narzędzi lub kompatybilnych portfeli',
          easyAccess: 'Wymaga zebrania udziałów progowych',
          highSecurity: 'Pojedyncze udziały są kryptograficznie bezużyteczne',
          highPrivacy: 'Żadna strona nie posiada pełnej frazy seed',
          lossProof: 'Toleruje ograniczoną utratę udziałów',
          destructionProof: 'Utrata zbyt wielu udziałów uniemożliwia odzyskanie',
        },
      },
      custodian: {
        name: 'Powiernik',
        criteria: {
          free: 'Usługi powiernicze zwykle pobierają opłaty',
          easyAccess: 'Łatwe odzyskiwanie przez dostęp do konta',
          highSecurity: 'Użytkownicy w pełni polegają na stronach trzecich',
          highPrivacy: 'Powiernik ma wgląd i kontrolę',
          lossProof: 'Środki mogą zostać zamrożone lub skonfiskowane',
          destructionProof: 'Bankructwo firmy grozi całkowitą stratą',
        },
      },
      splitting: {
        name: 'Dzielenie Frazy Seed',
        criteria: {
          free: 'Brak kosztów',
          easyAccess: 'Wymaga zebrania wszystkich części',
          highSecurity: 'Częściowe fragmenty nadal ujawniają informacje',
          highPrivacy: 'Zwykle przechowywane jawnym tekstem',
          lossProof: 'Utrata jednej części uniemożliwia odzyskanie',
          destructionProof: 'Uszkodzenia fizyczne wpływają na odzyskanie',
        },
      },
      lawyer: {
        name: 'Prawnik',
        criteria: {
          free: 'Wymaga bieżących opłat prawnych',
          easyAccess: 'Dostęp zależy od procedur prawnych',
          highSecurity: 'Wymaga zaufania do człowieka i niesie ryzyko prawne',
          highPrivacy: 'Prawnik może mieć dostęp do surowej frazy seed',
          lossProof: 'Podatne na błąd ludzki lub spory',
          destructionProof: 'Dokumenty mogą zostać zgubione lub zniszczone',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: 'Darmowy system non-profit',
          easyAccess:
            'Możliwe do odzyskania w dowolnym momencie dzięki trwałemu przechowywaniu i aplikacjom',
          highSecurity: 'Prawdziwa fraza seed nigdy nie jest przechowywana bezpośrednio',
          highPrivacy: 'Tekst przynęty sam w sobie jest bez znaczenia',
          lossProof: 'Jedna część sama w sobie jest bezużyteczna dla atakujących',
          destructionProof: 'Można wykonać kopię zapasową w trwałym magazynie',
        },
      },
    },
    criteriaLabels: {
      free: 'Darmowe',
      easyAccess: 'Łatwy Dostęp',
      highSecurity: 'Wysokie Bezpieczeństwo',
      highPrivacy: 'Wysoka Prywatność',
      lossProof: 'Odporność na Utratę',
      destructionProof: 'Odporność na Zniszczenie',
    },
  },
  securityDemo: {
    title: 'Bezpieczeństwo poprzez separację',
    subtitle: 'Brak pliku mapowania, brak odzyskiwania. Brak tekstu przynęty, brak dostępu.',
    annotations: {
      decoy:
        'Musisz mieć tekst przynęty, który działa jako zaciemniona reprezentacja twoich oryginalnych wrażliwych danych.',
      mapping:
        'Musisz mieć plik mapowania, który zawiera reguły transformacji wymagane do zrekonstruowania oryginalnych danych z tekstu przynęty.',
      result: 'Twoja wygenerowana fraza seed pojawi się tutaj',
      clickToGenerate: 'Kliknij tutaj, aby wygenerować frazę seed',
    },
    buttons: {
      simulateDecoy: 'Kliknij, aby symulować umieszczenie tekstu przynęty',
      placeDecoy: '✓ Tekst przynęty umieszczony',
      simulateMapping: 'Kliknij, aby symulować przesłanie pliku mapowania',
      uploadMapping: 'Aktualizuj Mapowanie',
      mappingLoaded: 'Mapowanie Załadowane',
      updateMapping: 'Aktualizuj nowy plik mapowania',
      generate: 'Generuj Wynik',
      decrypting: 'Odszyfrowywanie...',
    },
    labels: {
      decoyText: 'Tekst przynęty',
      asciiText: 'Tekst ASCII',
      resultPlaceholder: 'Wynik pojawi się tutaj...',
    },
  },
  faq: {
    title: 'Często zadawane pytania',
    subtitle:
      'Oto kilka pytań, które możesz mieć na temat Decoy Phrase. Nie znalazłeś odpowiedzi, której szukałeś?',
    chatAi: 'Porozmawiaj z AI o Decoy Phrase!',
    categories: {
      general: 'Ogólne',
      products: 'Produkty',
      security: 'Bezpieczeństwo i Prywatność',
    },
    items: {
      'gen-1': {
        question: 'Czym jest Decoy Phrase?',
        answer:
          'Decoy Phrase to metoda "offline-first" do ochrony i tworzenia kopii zapasowych fraz seed i wrażliwych tekstów — bez konieczności przechowywania oryginalnych danych.\n\nPrzekształca ona sekrety w niewinnie wyglądający, zwykły tekst, a odzyskanie danych jest możliwe tylko poprzez połączenie prywatnego pliku mapowania i przekształconego tekstu.\n\nAby zapewnić długoterminową trwałość, pliki przynęty i pliki mapowania mogą być przechowywane na stałe za pośrednictwem Decoy Phrase Permanent Storage, połączonego bezpośrednio z blockchainem Arweave — gwarantując, że nie mogą zostać zgubione, zmienione ani usunięte.',
      },
      'gen-2': {
        question: 'Czy Decoy Phrase jest darmowy?',
        answer:
          'Tak. Decoy Phrase jest całkowicie darmowy i działa jako inicjatywa non-profit. Wszystkie główne funkcje — w tym generowanie tekstu przynęty, tworzenie plików mapowania i odzyskiwanie offline — są dostępne bezpłatnie.\n\nW przypadku Decoy Phrase Permanent Storage, przechowywanie jest wspierane przez darowizny. Darowizny te są wykorzystywane do finansowania rozbudowy pojemności stałego przechowywania na blockchainie Arweave w czasie. Wszelkie pliki już zapisane w blockchainie pozostaną dostępne na zawsze, niezależnie od przyszłego stanu usługi.',
      },
      'gen-3': {
        question: 'Co jest trwałe w Decoy Phrase?',
        answer:
          'W Decoy Phrase koncepcja trwałości dotyczy strony internetowej, domeny i przechowywanych danych, możliwa dzięki Permanent Web (Trwałej Sieci) i Permanent Storage (Trwałemu Przechowywaniu) zbudowanym na Arweave.',
      },
      'gen-4': {
        question: 'Czy Decoy Phrase przechowuje moje dane?',
        answer:
          'Nie. Decoy Phrase nigdy nie przechowuje Twojej frazy seed ani oryginalnych wrażliwych danych. Proces generowania tekstu przynęty i plików mapowania odbywa się całkowicie offline przy użyciu Generatora Decoy Phrase. W rezultacie nie ma ryzyka, że Twoje sekrety zostaną zapisane na jakimkolwiek serwerze.\n\nPodczas zapisywania plików w Permanent Storage, wszystkie dane są szyfrowane po stronie klienta przed wysłaniem do blockchaina Arweave — w tym hasła, zawartość plików i tytuły plików.',
      },
      'gen-5': {
        question:
          'Co się stanie, jeśli zgubię zarówno mój plik mapowania, jak i powiązany z nim tekst przynęty?',
        answer:
          'Jeśli zgubisz zarówno plik mapowania, jak i odpowiadający mu tekst przynęty, Twoje oryginalne dane stają się trwale nie do odzyskania. Decoy Phrase jest celowo zaprojektowany bez mechanizmu resetowania, tworzenia kopii zapasowych ani odzyskiwania i nigdy nie przechowuje Twoich oryginalnych sekretów, co sprawia, że odzyskanie danych jest technicznie niemożliwe bez obu komponentów.\n\nDlatego Decoy Phrase oferuje Permanent Storage: aby zmniejszyć ryzyko przypadkowej utraty, umożliwiając przechowywanie plików przynęty i mapowania w niezmiennym magazynie długoterminowym, którego nie można usunąć, zmienić ani cicho zgubić, zachowując jednocześnie model "zero-knowledge" i non-custodial — gdzie wszystkie pliki są szyfrowane po stronie klienta, a pełna kontrola pozostaje w rękach użytkownika.',
      },
      'gen-6': {
        question: 'Czy muszę być online, aby korzystać z Decoy Phrase?',
        answer:
          'To zależy.\n\nGenerator Decoy Phrase działa całkowicie offline. Wszystkie główne procesy — tworzenie tekstu przynęty, generowanie pliku mapowania i odzyskiwanie danych — odbywają się w całości na Twoim urządzeniu bez połączenia z internetem.\n\nJednak Permanent Storage wymaga połączenia online, ponieważ przechowuje zaszyfrowane pliki w blockchainie Arweave przy użyciu architektury "zero-knowledge".',
      },
      'gen-7': {
        question: 'Czy mogę odzyskać moją frazę seed lub wrażliwe dane bez pomocy osób trzecich?',
        answer:
          'Tak. Decoy Phrase został zaprojektowany do w pełni samodzielnego użytku, bez pośredników. Używając tekstu przynęty i powiązanego z nim pliku mapowania, system przywraca Twoje oryginalne dane bezpośrednio na Twoim urządzeniu, całkowicie offline za pomocą Generatora Decoy Phrase — bez udziału jakiejkolwiek strony trzeciej.',
      },
      'gen-8': {
        question: 'Czy udostępnianie Tekstu Przynęty innym jest bezpieczne?',
        answer:
          'Tak, jest bezpieczne.\n\nTekst Przynęty jest zaprojektowany tak, aby wyglądał zwyczajnie i nie zawierał żadnych użytecznych wrażliwych informacji sam w sobie. Bez odpowiadającego mu pliku mapowania nie można go użyć do odzyskania oryginalnych danych. Podobnie, plik mapowania bez powiązanego z nim tekstu przynęty jest również bezużyteczny. Dlatego udostępnienie samego Tekstu Przynęty nie ujawnia Twojego sekretu.',
      },
      'gen-9': {
        question: 'Czym Decoy Phrase różni się od menedżera haseł?',
        answer:
          'Decoy Phrase nie jest internetowym menedżerem haseł.\n\nPrzekształcanie fraz seed, haseł i innych wrażliwych danych odbywa się całkowicie offline za pomocą Generatora Decoy Phrase.\n\nPermanent Storage jest używany wyłącznie do przechowywania tekstu przynęty i plików mapowania, oddzielonych w różnych przestrzeniach dyskowych za pomocą funkcji zarządzania wieloma hasłami.\n\nWszystkie pliki przechowywane w Permanent Storage są szyfrowane po stronie klienta. Nawet jeśli zostaną ujawnione, klucze deszyfrujące są w posiadaniu tylko użytkownika, co sprawia, że dane są bezużyteczne dla kogokolwiek innego.\n\nW przeciwieństwie do menedżerów haseł, które przechowują zaszyfrowane hasła na serwerach lub w chmurze, Decoy Phrase daje Ci pełną kontrolę nad tym, jak i gdzie Twoje wrażliwe dane są przechowywane i odzyskiwane.',
      },
      'prod-1': {
        question: 'Czym jest Generator Decoy Phrase i jakie są jego komponenty?',
        answer:
          'Generator Decoy Phrase to centralne narzędzie w systemie Decoy Phrase, łączące Twórcę Mapowania (Mapping Maker) i Generator Tekstu (Text Generator).\n\nTwórca Mapowania przekształca frazy seed lub wrażliwe dane w zwykły tekst przynęty i generuje plik mapowania, który służy jako klucz odzyskiwania, podczas gdy Generator Tekstu wykorzystuje ten plik mapowania do przywrócenia oryginalnych danych z tekstu przynęty.\n\nWszystkie procesy odbywają się w całości na urządzeniu użytkownika bez połączenia z internetem, co gwarantuje, że żadne wrażliwe dane nigdy nie są wysyłane na żaden serwer.',
      },
      'prod-2': {
        question: 'Czym jest Plik Mapowania i dlaczego musi być przechowywany oddzielnie?',
        answer:
          'Plik Mapowania to prywatny plik (.json) zawierający informacje techniczne i służący jako jedyny klucz do odzyskania oryginalnych danych z tekstu przynęty.\n\nNie zawiera on bezpośrednio wrażliwych danych i jest bez znaczenia bez powiązanego z nim tekstu przynęty. Z tego powodu Plik Mapowania musi być przechowywany oddzielnie od tekstu przynęty. Ta separacja zapobiega ujawnieniu sekretów przez pojedynczy plik. Bez prawidłowej kombinacji obu elementów odzyskanie danych jest niemożliwe — co oznacza, że żaden pojedynczy komponent nie zawiera informacji wrażliwych, które można by wykorzystać samodzielnie.',
      },
      'prod-3': {
        question: 'Jak działa Permanent Storage i jakie formaty plików są obsługiwane?',
        answer:
          'Permanent Storage to warstwa przechowywania oparta na Arweave, która przechowuje tekst przynęty i pliki mapowania w sposób trwały i niezmienny.\n\nJest zaprojektowany jako magazyn "zapisz raz, czytaj zawsze" dla długoterminowych kopii zapasowych tekstu bez polegania na tradycyjnych serwerach.\n\nPermanent Storage obsługuje tylko pliki tekstowe, takie jak .txt, .md i .json. Inne formaty, takie jak obrazy, filmy czy pliki audio, nie są obsługiwane.\n\nWszystkie przesyłane pliki są zarządzane za pomocą jednego konta przy użyciu Wspólnego Portfela Głównego (Shared Master Wallet), dzięki czemu użytkownicy nie muszą tworzyć ani zarządzać własnym portfelem blockchain ani rozumieć mechaniki blockchaina. Złożoność technologii blockchain jest ukryta za prostym interfejsem użytkownika.',
      },
      'prod-4': {
        question: 'Czym są Skarbce z Wieloma Hasłami (Multi-Password Vaults) i jak się ich używa?',
        answer:
          'Skarbce z Wieloma Hasłami to funkcja Permanent Storage, która pozwala jednemu kontu zawierać wiele izolowanych skarbców przechowywania, z których każdy jest chroniony innym hasłem. Na przykład użytkownik może przechowywać tekst przynęty w Skarbcu A, a pliki mapowania w Skarbcu B, używając oddzielnych haseł dla każdego z nich.\n\nKażdy skarbiec jest logicznie odizolowany, co oznacza, że dostęp do jednego skarbca nie daje dostępu do pozostałych. W rezultacie naruszenie jednego hasła ujawnia tylko jeden skarbiec, zachowując bezpieczeństwo innych wrażliwych plików.',
      },
      'prod-5': {
        question: 'Czy Generator Decoy Phrase może być używany na różnych urządzeniach?',
        answer:
          'Tak. Generator Decoy Phrase jest dostępny na wielu platformach. Można go uruchomić na głównych systemach operacyjnych komputerów stacjonarnych (Windows, macOS, Linux) oraz na urządzeniach z Androidem.\n\nPonieważ wszystkie procesy są wykonywane offline na urządzeniu lokalnym, Decoy Phrase może być również używany w środowiskach bez dostępu do internetu lub w systemach o wysokim poziomie bezpieczeństwa, takich jak komputery typu "air-gapped".',
      },
      'prod-6': {
        question: 'Czy użytkownicy muszą rozumieć blockchain, aby korzystać z tych funkcji?',
        answer:
          'Nie. Chociaż Decoy Phrase wykorzystuje technologię blockchain (Arweave) w tle do trwałego przechowywania, interfejs jest zaprojektowany tak, aby użytkownicy nie musieli zajmować się żadną złożonością związaną z blockchainem.\n\nKorzystając ze Wspólnego Portfela Głównego, użytkownicy muszą jedynie skupić się na zarządzaniu swoimi tekstami i hasłami; nie muszą tworzyć, przechowywać ani zarządzać własnymi portfelami blockchain. W rezultacie wszystkie funkcje Decoy Phrase mogą być używane bez wcześniejszej wiedzy o technologii blockchain.',
      },
      'sec-1': {
        question: 'W jaki sposób system chroni dane użytkownika?',
        answer:
          'Decoy Phrase stosuje zasady "offline-first" i "zero-knowledge", co oznacza, że całe przekształcanie i szyfrowanie wrażliwych danych odbywa się w całości na urządzeniu użytkownika — bez konieczności połączenia z internetem ani jakiegokolwiek serwera.\n\nDane są przetwarzane i szyfrowane po stronie klienta (na przykład przy użyciu AES-256-GCM) przed zapisaniem w Permanent Storage, więc publiczny magazyn zawiera tylko zaszyfrowane dane, których nie można odczytać bez kluczy użytkownika.\n\nPonadto żadne frazy seed ani oryginalne wrażliwe dane nie są nigdy przechowywane na żadnym serwerze, co oznacza, że nie ma centralnego skarbca, który mógłby stać się celem ataku o wysokiej wartości. Takie podejście eliminuje zależność od stron trzecich i przenosi bezpieczeństwo z ochrony opartej na zaufaniu na architekturę techniczną, która uniemożliwia dostęp z zewnątrz z założenia.',
      },
      'sec-2': {
        question: 'Czy Decoy Phrase może usunąć moje pliki z Permanent Storage?',
        answer:
          'Nie. Decoy Phrase nie może usunąć Twoich plików po ich zapisaniu w Permanent Storage. Permanent Storage jest zbudowany na blockchainie Arweave, gdzie dane są niezmienne z założenia. Po przesłaniu pliku nie może on zostać usunięty, zmodyfikowany ani wymazany przez Decoy Phrase — ani przez nikogo innego.',
      },
      'sec-3': {
        question: 'W jaki sposób system zapewnia, że żadne wrażliwe dane nie są przechowywane?',
        answer:
          'Decoy Phrase stosuje zasadę "przekształć i rozdziel". Oryginalne dane są konwertowane offline na zwykły tekst przynęty, który wygląda losowo i nie ma żadnego ukrytego znaczenia. Wygenerowany plik mapowania zawiera techniczne informacje odzyskiwania, ale nie zawiera oryginalnych wrażliwych danych.\n\nTe dwa komponenty muszą być przechowywane oddzielnie (na przykład w różnych lokalizacjach lub chronione różnymi hasłami). W rezultacie żaden pojedynczy komponent nigdy nie zawiera oryginalnego sekretu. Bez pliku mapowania tekst przynęty jest bezużyteczny; a bez tekstu przynęty plik mapowania jest bez znaczenia.\n\nTa metoda gwarantuje, że oryginalne wrażliwe dane nigdy nie są przechowywane bezpośrednio w aplikacji ani na żadnym serwerze.',
      },
      'sec-4': {
        question: 'Co system wie, a czego nie wie w Permanent Storage?',
        answer:
          'Decoy Phrase działa w modelu "zero-knowledge", co oznacza, że system nigdy nie zna treści danych użytkownika.\n\nNie może zobaczyć fraz seed, haseł ani oryginalnej zawartości plików, ponieważ wszystkie dane są w pełni zaszyfrowane w lokalnej przeglądarce użytkownika przed przesłaniem.\n\nJedynymi informacjami widocznymi dla systemu są niewrażliwe metadane publiczne, takie jak nazwa użytkownika (używana jako identyfikator publiczny) i liczba przechowywanych plików.\n\nRelacja między tekstem przynęty a jego plikiem mapowania jest również nieznana dla systemu. Krótko mówiąc, treści i sekrety użytkownika nigdy nie są ujawniane; istnieją tylko zaszyfrowane dane i ograniczone metadane publiczne.',
      },
      'sec-5': {
        question:
          'Czym podejście do bezpieczeństwa Decoy Phrase różni się od tradycyjnych systemów (takich jak menedżery haseł)?',
        answer:
          '• Przechowywanie oryginalnych danych: Tradycyjne menedżery haseł przechowują sekrety użytkownika (hasła, seed, itp.) w zaszyfrowanym skarbcu. Decoy Phrase nigdy nie przechowuje oryginalnych danych w ogóle.\n\n• Architektura: Menedżery haseł zazwyczaj polegają na serwerach lub infrastrukturze chmurowej do synchronizacji. Decoy Phrase jest offline-first, bez backendu i bez zależności od stron trzecich.\n\n• Model bezpieczeństwa: W menedżerach haseł bezpieczeństwo zależy od szyfrowania skarbca i hasła głównego; jeśli skarbiec lub hasło główne zostaną przejęte, wszystkie dane mogą zostać ujawnione. Decoy Phrase nie ma takiego skarbca. Wyciek pojedynczego pliku (tekstu przynęty lub pliku mapowania) nie wystarczy do odzyskania oryginalnych danych, ponieważ każdy komponent nie ma wartości sam w sobie.\n\n• Pojedynczy punkt awarii: Skarbiec menedżera haseł jest celem o wysokiej wartości. Decoy Phrase nie ma pojedynczego obiektu zawierającego sekrety; dopóki oba komponenty (tekst przynęty i plik mapowania) nie zostaną przejęte razem, nie ma głównego punktu awarii do ataku.',
      },
      'sec-6': {
        question:
          'Co się stanie, jeśli plik przynęty lub plik mapowania wpadnie w ręce innej osoby?',
        answer:
          '• Jeśli ujawniony zostanie tylko tekst przynęty, żaden sekret nie zostanie ujawniony. Tekst przynęty to zwykłe dane bez wrażliwego znaczenia i nie mogą być użyte bez pliku mapowania.\n\n• Jeśli ujawniony zostanie tylko plik mapowania, oryginalne dane pozostają bezpieczne. Plik mapowania zawiera tylko techniczne wzorce znaków, bez tajnej treści, i jest bezużyteczny bez powiązanego z nim tekstu przynęty.\n\n• Tylko jeśli oba zostaną ujawnione razem, oryginalne dane mogą zostać odzyskane. W takim przypadku bezpieczeństwo całkowicie upada, ponieważ atakujący posiada oba wymagane komponenty.',
      },
      'sec-7': {
        question: 'Jakie jest ryzyko braku rozdzielenia plików?',
        answer:
          'Główne ryzyko występuje, gdy tekst przynęty i plik mapowania nie są przechowywane oddzielnie (na przykład w tej samej lokalizacji lub chronione tym samym hasłem).\n\nJeśli tak się stanie, każdy, kto uzyska dostęp do obu komponentów, może bezpośrednio odzyskać oryginalne dane. Innymi słowy, system zawodzi tylko wtedy, gdy dwa komponenty zostaną nieumyślnie połączone.\n\nDlatego ścisła separacja jest niezbędna: przechowuj tekst przynęty i pliki mapowania w różnych lokalizacjach lub chroń je różnymi hasłami. Gdy są one odpowiednio rozdzielone, taka awaria jest niezwykle mało prawdopodobna.',
      },
    },
  },
  donate: {
    title: 'Wesprzyj Decoy Phrase',
    description:
      'Decoy Phrase jest darmowy w użyciu i zbudowany jako inicjatywa non-profit. Nie ma paywalla i wymaganej subskrypcji. Darowizny są dobrowolne i przejrzyste.',
    link: 'Zobacz metryki projektu na żywo i dane publiczne tutaj!',
    cards: {
      storage: {
        title: 'Fundusz Przechowywania',
        description:
          'Ta darowizna trafia bezpośrednio do portfela przechowywania i jest automatycznie dodawana do funduszu żelaznego przechowywania, trwale finansując trwałe przechowywanie i zwiększając dostępną pojemność.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Wyślij AR z giełdy</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Kup token AR</li>
      <li>Przejdź do Wyślij lub Wypłać</li>
      <li>Wybierz Wypłatę On-Chain</li>
      <li>Wybierz AR (Arweave)</li>
      <li>Wklej adres portfela Decoy Phrase</li>
      <li>Wybierz sieć Arweave</li>
      <li>Wprowadź kwotę</li>
      <li>Potwierdź wypłatę</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">Transfery AR zwykle trwają 1–5 minut.</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Wyślij AR z portfela Wander</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Utwórz portfel Wander</li>
      <li>Kup token AR za pomocą dostępnej metody płatności</li>
      <li>Kliknij Wyślij</li>
      <li>Wklej adres portfela Decoy Phrase</li>
      <li>Wprowadź kwotę</li>
      <li>Potwierdź transakcję</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: 'Fundusz Zespołu',
        description:
          'Ta darowizna wspiera zespół Decoy Phrase i ekosystem, w tym rozwój, marketing i inicjatywy społeczne. Fundusze mogą być również przeznaczane na przechowywanie w razie potrzeby.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Wyślij stablecoin z giełdy</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Kup USDT, USDC lub inny obsługiwany stablecoin</li>
      <li>Przejdź do Wyślij lub Wypłać</li>
      <li>Wybierz Wypłatę On-Chain</li>
      <li>Wybierz stablecoin, który chcesz wysłać</li>
      <li>Wklej adres portfela Decoy Phrase (upewnij się, że pasuje do wybranej sieci)</li>
      <li>Wybierz sieć pasującą do adresu portfela</li>
      <li>Wprowadź kwotę</li>
      <li>Potwierdź wypłatę</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">Wyślij stablecoin z DEX</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Kup stablecoin lub natywny token wybranej sieci</li>
      <li>Przejdź do Wyślij lub Wypłać</li>
      <li>Wybierz sieć lub wybierz monetę, którą chcesz wysłać</li>
      <li>Wklej adres portfela Decoy Phrase na podstawie tokena i sieci portfela</li>
      <li>Wprowadź kwotę</li>
      <li>Potwierdź transakcję</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: 'Kalkulator Przechowywania',
    info: {
      p1: 'Średni rozmiar pliku mapowania dla 12-słownej frazy seed wynosi ~50 KiB. Przesyłanie obecnie wykorzystuje <strong class="text-foreground">Turbo (obsługiwane przez ar.io)</strong>, umożliwiając bezpłatne przesyłanie plików poniżej 105 KiB, z bezpośrednimi obliczeniami opłat Arweave zalecanymi jako zabezpieczenie, jeśli Turbo stanie się niedostępne.',
      p2: 'Wszystkie dane przechowywane w trwałym magazynie pozostają dostępne na zawsze, nawet jeśli pojemność zostanie osiągnięta i nie zostaną dokonane żadne przyszłe darowizny, podczas gdy dodatkowa pojemność ma na celu wspieranie przyszłych użytkowników i pokoleń Decoy Phrase.',
    },
    labels: {
      donationAmount: 'Kwota Darowizny',
      arweaveEquivalent: 'Ekwiwalent Arweave',
      winstonAmount: 'Kwota w Winston',
      capacityIncrease: 'Ta darowizna zwiększa trwałą pojemność przechowywania o',
      files: 'Pliki',
      calculate: 'Oblicz',
      currentBalance: 'Obecne Saldo',
      howToDonate: 'Jak Przekazać Darowiznę?',
      copied: 'Skopiowano!',
      addressCopied: 'Adres skopiowany!',
      copyAddress: 'Kopiuj adres portfela',
      selectNetwork: 'Wybierz sieć',
      walletAddress: 'Adres portfela',
    },
  },
  metrics: {
    title: 'Statystyki Decoy Phrase na żywo',
    labels: {
      totalUsers: 'Łącznie Użytkowników',
      totalFilesStored: 'Łącznie Przechowywanych Plików',
      totalFilesLocked: 'Łącznie Zablokowanych Plików',
      totalDonations: 'Łącznie Darowizn',
      remainingCapacity: 'Pozostała Pojemność Plików',
      downloadTotal: 'Łącznie Pobrań Generatora Decoy Phrase',
    },
    status: {
      live: 'Na Żywo',
      reconnecting: 'Ponowne łączenie...',
      disconnected: 'Rozłączono',
    },
    filters: {
      day: 'D',
      month: 'M',
      quarter: 'K',
      year: 'R',
      all: 'Wszystko',
    },
  },
  download: {
    title: 'Przekształć i odzyskaj swoją oryginalną frazę seed w dowolnym momencie.',
    subtitle:
      'Przekształć swoją frazę seed w konfigurowalny tekst przynęty i odzyskaj oryginał w dowolnym momencie za pomocą prywatnego pliku mapowania. Wszystko działa całkowicie offline – żadna fraza seed nie jest przechowywana, przesyłana ani udostępniana.',
    cta: {
      about: 'O Generatorze Decoy',
      tutorials: 'Obejrzyj Samouczki',
    },
  },
  feedback: {
    title: 'Opinie i Wsparcie',
    description:
      'Podziel się swoimi sugestiami lub zgłoś problemy, aby pomóc nam ulepszyć Generator Decoy. Prosimy nie wysyłać fraz seed ani wrażliwych danych.',
    discord: {
      text: 'Dołącz do naszego <span class="font-bold text-[#5865F2]">Discorda</span>, aby śledzić aktualizacje opinii i rozwiązania społeczności.',
      linkText: 'Dołącz teraz!',
    },
    forms: {
      feedback: {
        title: 'Opinie',
        name: 'Imię',
        subject: 'Temat',
        description: 'Opis',
        email: 'E-mail',
        submit: 'Wyślij',
        submitting: 'Wysyłanie...',
        success: 'Opinia wysłana! Sprawdź Discorda w poszukiwaniu aktualizacji.',
        error: 'Wysyłanie nie powiodło się. Spróbuj ponownie.',
        required: 'Wymagane',
        invalidEmail: 'Nieprawidłowy adres e-mail',
        minChar: 'Musi mieć co najmniej 10 znaków',
      },
      support: {
        title: 'Wsparcie',
        category: 'Kategoria',
        appVersion: 'Wersja Aplikacji',
        reference: 'Link Referencyjny (Opcjonalne)',
        referenceHelper:
          "Prześlij zrzuty ekranu lub filmy na Google Drive lub inną usługę w chmurze, ustaw link jako 'Każdy, kto ma link, może wyświetlić' i wklej link tutaj.",
        required: 'Wymagane',
        invalidEmail: 'Nieprawidłowy adres e-mail',
        minChar: 'Musi mieć co najmniej 10 znaków',
      },
    },
  },
};
