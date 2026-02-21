import { Translations } from './types';

export const fiTranslations: Translations = {
  nav: {
    about: 'Meistä',
    userGuide: 'Käyttöopas',
    faq: 'UKK',
    brandKit: 'Brändipaketti',
    liveMetrics: 'Live-tilastot',
    decoyToken: '$DECOY',
    products: 'Tuotteet',
    decoyGenerator: 'Hämäysgeneraattori',
    permanentStorage: 'Pysyvä tallennus',
    permanentWeb: 'Pysyvä verkko',
    donate: 'Lahjoita',
    docs: 'Dokumentaatio',
    connect: 'Yhdistä',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: 'Palaute',
  },
  header: {
    login: 'Kirjaudu',
    menu: 'Valikko',
    language: 'Kieli',
  },
  footer: {
    columns: {
      decoyPhrase: 'Hämäysfraasi',
      coreComponents: 'Ydinkomponentit',
      downloadGenerator: 'Lataa generaattori',
    },
    links: {
      privacy: 'Tietosuojakäytäntö',
      terms: 'Käyttöehdot',
      forum: 'Foorumi',
    },
    mission: {
      text: 'Tehtävämme on suojata digitaalista yksityisyyttä ja varmistaa muuttumaton tallennus.',
      ctaText: 'Liity vallankumoukseen',
    },
  },
  hero: {
    titlePart1: 'Suojaa',
    titlePart2: 'digitaalinen jalanjälkesi',
    titleHighlight: 'ikuisesti',
    subtitle:
      'Käytä hajautettua tallennusta ja edistynyttä hämäysteknologiaa tietojesi suojaamiseen.',
  },
  heroActions: {
    getStarted: 'Aloita',
    watchTutorials: 'Katso oppaat',
    generator: 'Generaattori',
    storage: 'Tallennus',
  },
  features: {
    title: 'Tärkeimmät',
    titleHighlight: 'ominaisuudet',
    subtitle: 'Tutustu työkaluihin tietojesi ja henkilöllisyytesi suojaamiseksi.',
    cards: {
      generator: {
        title: 'Hämäysgeneraattori',
        description: 'Luo realistisia valedostoja tunkeilijoiden hämäämiseksi.',
      },
      storage: {
        title: 'Pysyvä tallennus',
        description: 'Tallenna tietosi ikuisesti Arweave-lohkoketjuun.',
      },
      web: {
        title: 'Pysyvä verkko',
        description: 'Julkaise hajautettuja verkkosivustoja, joita ei voi sensuroida.',
      },
    },
  },
  howItWorks: {
    title: 'Kuinka Decoy Phrase toimii',
    subtitle: 'Yksinkertaiset vaiheet. Vahva turvallisuus. Ei hallussapitoa.',
    steps: {
      '1': {
        title: 'Muunna siemenlauseesi',
        description:
          'Muunna siemenlauseesi hämäystekstiksi. Käsitelty kokonaan offline-tilassa Decoy Phrase -generaattorilla, ei palvelimia, ei pilveä eikä tietojen keräämistä.',
      },
      '2': {
        title: 'Vastaanota kaksi itsenäistä tiedostoa',
        description:
          'Saat Hämäystekstin, joka näyttää normaalilta eikä sisällä hyödyllistä tietoa, ja Kartoitustiedoston, joka toimii ainoana avaimena alkuperäisen salaisuuden palauttamiseen — ilman molempia palautus on mahdotonta.',
      },
      '3': {
        title: 'Säilytä ne erillään',
        description:
          'Säilytä hämäysteksti ja kartoitustiedosto erillään. Paikallisesti eri paikoissa tai pysyvässä tallennuksessa käyttämällä Monisalasanaholveja.',
      },
      '4': {
        title: 'Palauta vain, kun sillä on merkitystä',
        description:
          'Kun palautus on tarpeen, käytä molempia tiedostoja Decoy Phrase -generaattorissa alkuperäisen siemenlausekesi palauttamiseksi.',
      },
    },
  },
  prosCons: {
    title: 'Siemenlauseen varmuuskopioinnin edut ja haitat',
    subtitle:
      'Ei ole olemassa täydellistä siemenlauseen varmuuskopiota — on vain erilaisia riskejä.',
    methods: {
      paper: {
        name: 'Paperivarmuuskopio',
        criteria: {
          free: 'Ei kustannuksia',
          easyAccess: 'Vaatii fyysisen pääsyn',
          highSecurity: 'Helppo varastaa, valokuvata tai kopioida',
          highPrivacy: 'Tallennettu täysin offline-tilaan',
          lossProof: 'Voi kadota tai tulla heitetyksi pois vahingossa',
          destructionProof: 'Haavoittuva tulelle, vedelle ja vanhenemiselle',
        },
      },
      metal: {
        name: 'Metallivarmuuskopio',
        criteria: {
          free: 'Vaatii metallilevyjen ostamisen',
          easyAccess: 'Vaatii fyysisen pääsyn ja palautuksen',
          highSecurity: 'Kuka tahansa löytäjä voi käyttää suoraan',
          highPrivacy: 'Tallennettu offline-tilaan ilman kolmansia osapuolia',
          lossProof: 'Voi silti kadota tai tulla varastetuksi',
          destructionProof: 'Kestää tulta ja vettä',
        },
      },
      'local-storage': {
        name: 'Paikallinen tallennus',
        criteria: {
          free: 'Käyttää olemassa olevaa laitteistoa',
          easyAccess: 'Vaatii laitteen, portin ja yhteensopivuuden',
          highSecurity: 'Haavoittuva haittaohjelmille tai varkauksille',
          highPrivacy: 'Tallennettu paikallisesti ilman kolmansia osapuolia',
          lossProof: 'Helppo kadottaa, vahingoittaa tai korruptoida',
          destructionProof: 'Altis laitteistovioille',
        },
      },
      cloud: {
        name: 'Pilvitallennus',
        criteria: {
          free: 'Vaatii tilauksen tai maksullisen tallennustilan',
          easyAccess: 'Käytettävissä missä tahansa kirjautumalla',
          highSecurity: 'Hakkeroinnin ja tilivarkauksien kohde',
          highPrivacy: 'Kolmansien osapuolten hallinnassa',
          lossProof: 'Datan kahdennus vähentää menetysriskiä',
          destructionProof: 'Tilit voidaan poistaa tai jäädyttää',
        },
      },
      encrypted: {
        name: 'Salattu digitaalinen tiedosto',
        criteria: {
          free: 'Voidaan luoda ilmaisilla työkaluilla',
          easyAccess: 'Vaatii salasanan ja oikean ohjelmiston',
          highSecurity: 'Vahva vain, jos salasana ei koskaan paljastu',
          highPrivacy: 'Yksityisyys riippuu tallennuspaikasta',
          lossProof: 'Salasanan menetys tarkoittaa pysyvää menetystä',
          destructionProof: 'Tiedoston korruptoituminen tai poistaminen on kohtalokasta',
        },
      },
      shamir: {
        name: "Shamir's Secret Sharing",
        criteria: {
          free: 'Vaatii erikoistyökaluja tai yhteensopivia lompakoita',
          easyAccess: 'Vaatii kynnysosuuksien keräämistä',
          highSecurity: 'Yksittäiset osuudet ovat kryptografisesti hyödyttömiä',
          highPrivacy: 'Kenenkään hallussa ei ole koko siemenlausetta',
          lossProof: 'Sietää rajoitettua osuuksien menetystä',
          destructionProof: 'Liian monen osuuden menetys estää palautuksen',
        },
      },
      custodian: {
        name: 'Säilyttäjä',
        criteria: {
          free: 'Säilytyspalvelut perivät yleensä maksuja',
          easyAccess: 'Helppo palautus tilin kautta',
          highSecurity: 'Käyttäjät täysin riippuvaisia kolmansista osapuolista',
          highPrivacy: 'Säilyttäjällä on näkyvyys ja hallinta',
          lossProof: 'Varat voidaan jäädyttää tai takavarikoida',
          destructionProof: 'Yrityksen konkurssi uhkaa totaalista menetystä',
        },
      },
      splitting: {
        name: 'Siemenen jakaminen',
        criteria: {
          free: 'Ei kustannuksia',
          easyAccess: 'Vaatii kaikkien osien keräämistä',
          highSecurity: 'Osittaiset palaset paljastavat silti tietoa',
          highPrivacy: 'Yleensä tallennettu selväkielisenä',
          lossProof: 'Yhden osan menetys estää palautuksen',
          destructionProof: 'Fyysiset vauriot vaikuttavat palautukseen',
        },
      },
      lawyer: {
        name: 'Lakimies',
        criteria: {
          free: 'Vaatii jatkuvia lakikuluja',
          easyAccess: 'Pääsy riippuu juridisista menettelyistä',
          highSecurity: 'Sisältää inhimillisen luottamuksen ja juridisen riskin',
          highPrivacy: 'Lakimies voi päästä käsiksi raakaan siemeneen',
          lossProof: 'Altis inhimillisille virheille tai kiistoille',
          destructionProof: 'Asiakirjat voivat kadota tai tuhoutua',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: 'Ilmainen ja voittoa tavoittelematon järjestelmä',
          easyAccess:
            'Palautettavissa milloin tahansa pysyvän tallennuksen ja ladattavien sovellusten kautta',
          highSecurity: 'Aitoa siementä ei koskaan tallenneta suoraan',
          highPrivacy: 'Hämäysteksti on itsessään merkityksetön',
          lossProof: 'Yksi osa yksinään on hyödytön hyökkääjille',
          destructionProof: 'Voidaan varmuuskopioida pysyvään tallennukseen',
        },
      },
    },
    criteriaLabels: {
      free: 'Ilmainen',
      easyAccess: 'Helppo Pääsy',
      highSecurity: 'Korkea Turvallisuus',
      highPrivacy: 'Korkea Yksityisyys',
      lossProof: 'Menetyksen Kestävä',
      destructionProof: 'Tuhoutumisen Kestävä',
    },
  },
  securityDemo: {
    title: 'Turvallisuus erottelun kautta',
    subtitle: 'Ei kartoitustiedostoa, ei palautusta. Ei hämäystekstiä, ei pääsyä.',
    annotations: {
      decoy:
        'Sinulla on oltava hämäysteksti, joka toimii alkuperäisten arkaluontoisten tietojesi hämärrettynä esityksenä.',
      mapping:
        'Sinulla on oltava kartoitustiedosto, joka sisältää muuntosäännöt, joita tarvitaan alkuperäisten tietojen rekonstruoimiseen hämäystekstistä.',
      result: 'Luotu siemenlauseesi näkyy tässä',
      clickToGenerate: 'Klikkaa tästä luodaksesi siemenlauseen',
    },
    buttons: {
      simulateDecoy: 'Klikkaa simuloidaksesi hämäystekstin asettamista',
      placeDecoy: '✓ Hämäysteksti asetettu',
      simulateMapping: 'Klikkaa simuloidaksesi kartoitustiedoston lataamista',
      uploadMapping: 'Päivitä Kartoitus',
      mappingLoaded: 'Kartoitus Ladattu',
      updateMapping: 'Päivitä uusi kartoitustiedosto',
      generate: 'Luo Tulos',
      decrypting: 'Puretaan salausta...',
    },
    labels: {
      decoyText: 'Hämäysteksti',
      asciiText: 'ASCII-teksti',
      resultPlaceholder: 'Tulos näkyy tässä...',
    },
  },
  faq: {
    title: 'Usein kysytyt',
    subtitle: 'kysymykset',
    chatAi: 'Kysy AI:lta',
    categories: {
      general: 'Yleinen',
      technical: 'Tekninen',
      billing: 'Laskutus',
    },
    items: {
      'gen-1': {
        question: 'Mikä on Decoy Phrase?',
        answer:
          'Decoy Phrase on "offline-first" -menetelmä siemenlauseiden (seed phrases) ja arkaluontoisten tekstien suojaamiseen ja varmuuskopiointiin – tallentamatta koskaan alkuperäisiä tietoja.\n\nSe muuntaa salaisuudet tavallisen näköiseksi, harmittomaksi tekstiksi, josta palautus on mahdollista vain yhdistämällä yksityinen kartoitustiedosto ja muunnettu teksti.\n\nPitkäaikaista kestävyyttä varten hämäystiedostot ja kartoitustiedostot voidaan tallentaa pysyvästi Decoy Phrase Permanent Storage -palveluun, joka on yhdistetty suoraan Arweave-lohkoketjuun – varmistaen, ettei niitä voi kadottaa, muuttaa tai poistaa.',
      },
      'gen-2': {
        question: 'Onko Decoy Phrase ilmainen?',
        answer:
          'Kyllä. Decoy Phrase on täysin ilmainen ja toimii voittoa tavoittelemattomana aloitteena. Kaikki päätoiminnot – mukaan lukien hämäystekstin luominen, kartoitustiedostojen tekeminen ja offline-palautus – ovat käytettävissä maksutta.\n\nDecoy Phrase Permanent Storage -palvelussa tallennus tuetaan lahjoituksilla. Näitä lahjoituksia käytetään rahoittamaan pysyvän tallennuskapasiteetin laajentamista Arweave-lohkoketjussa ajan myötä. Kaikki jo lohkoketjuun tallennetut tiedostot pysyvät saatavilla ikuisesti, riippumatta palvelun tulevasta tilasta.',
      },
      'gen-3': {
        question: 'Mikä on pysyvää Decoy Phrasessa?',
        answer:
          'Decoy Phrasessa pysyvyyden käsite koskee verkkosivustoa, verkkotunnusta ja tallennettuja tietoja, jotka mahdollistetaan Arweaven päälle rakennetulla Pysyvällä Verkolla (Permanent Web) ja Pysyvällä Tallennuksella (Permanent Storage).',
      },
      'gen-4': {
        question: 'Tallentaako Decoy Phrase tietojani?',
        answer:
          'Ei. Decoy Phrase ei koskaan tallenna siemenlausettasi tai alkuperäisiä arkaluontoisia tietojasi. Hämäystekstin ja kartoitustiedostojen luontiprosessi suoritetaan kokonaan offline-tilassa Decoy Phrase Generatorin avulla. Tämän seurauksena ei ole riskiä, että salaisuutesi tallennettaisiin millekään palvelimelle.\n\nKun tiedostoja tallennetaan Pysyvään Tallennukseen, kaikki tiedot salataan asiakaspuolella ennen lähetystä Arweave-lohkoketjuun – mukaan lukien salasanat, tiedostojen sisältö ja tiedostojen nimet.',
      },
      'gen-5': {
        question:
          'Mitä tapahtuu, jos menetän sekä kartoitustiedostoni että siihen liittyvän hämäystekstin?',
        answer:
          'Jos menetät sekä kartoitustiedoston että vastaavan hämäystekstin, alkuperäiset tietosi tulevat pysyvästi palauttamattomiksi. Decoy Phrase on tarkoituksella suunniteltu ilman mitään nollaus-, varmuuskopiointi- tai palautusmekanismia eikä se koskaan tallenna alkuperäisiä salaisuuksiasi, mikä tekee palautuksesta teknisesti mahdotonta ilman molempia komponentteja.\n\nTämän vuoksi Decoy Phrase tarjoaa Pysyvän Tallennuksen: vähentämään tahattoman menetyksen riskiä mahdollistamalla hämäys- ja kartoitustiedostojen tallentamisen muuttumattomaan pitkäaikaiseen tallennukseen, jota ei voi poistaa, muuttaa tai hiljaisesti kadottaa, säilyttäen samalla "nollatieto"- ja ei-säilyttävän (non-custodial) suunnittelun – jossa kaikki tiedostot salataan asiakaspuolella ja täysi hallinta pysyy käyttäjällä.',
      },
      'gen-6': {
        question: 'Täytyykö minun olla verkossa käyttääkseni Decoy Phrasea?',
        answer:
          'Riippuu.\n\nDecoy Phrase Generator toimii täysin offline-tilassa. Kaikki pääprosessit – hämäystekstin luominen, kartoitustiedoston generointi ja tietojen palautus – suoritetaan kokonaan laitteellasi ilman internetyhteyttä.\n\nPysyvä Tallennus vaatii kuitenkin verkkoyhteyden, koska se tallentaa salattuja tiedostoja Arweave-lohkoketjuun käyttäen nollatieto-arkkitehtuuria.',
      },
      'gen-7': {
        question:
          'Voinko palauttaa siemenlauseeni tai arkaluontoiset tiedot ilman kolmannen osapuolen apua?',
        answer:
          'Kyllä. Decoy Phrase on suunniteltu täysin itsenäiseen käyttöön, ilman välikäsiä. Käyttämällä hämäystekstiäsi ja siihen liittyvää kartoitustiedostoa, järjestelmä palauttaa alkuperäiset tietosi suoraan laitteellesi, täysin offline-tilassa Decoy Phrase Generatorin kautta – ilman minkään kolmannen osapuolen osallistumista.',
      },
      'gen-8': {
        question: 'Onko Hämäystekstin jakaminen muiden kanssa turvallista?',
        answer:
          'Kyllä, se on turvallista.\n\nHämäysteksti on suunniteltu näyttämään tavalliselta eikä se sisällä itsessään mitään käyttökelpoista arkaluontoista tietoa. Ilman vastaavaa kartoitustiedostoa sitä ei voi käyttää alkuperäisten tietojen palauttamiseen. Samoin kartoitustiedosto ilman siihen liittyvää hämäystekstiä on myös käyttökelvoton. Siksi pelkän Hämäystekstin jakaminen ei paljasta salaisuuttasi.',
      },
      'gen-9': {
        question: 'Miten Decoy Phrase eroaa salasananhallintaohjelmasta?',
        answer:
          'Decoy Phrase ei ole online-salasananhallintaohjelma.\n\nSiemenlauseiden, salasanojen tai muiden arkaluontoisten tietojen muuntaminen tapahtuu täysin offline-tilassa Decoy Phrase Generatorin kautta.\n\nPysyvää Tallennusta käytetään vain hämäystekstien ja kartoitustiedostojen tallentamiseen, eroteltuna eri tallennustiloihin käyttämällä monisalasanahallintaa.\n\nKaikki Pysyvään Tallennukseen tallennetut tiedostot salataan asiakaspuolella. Vaikka ne paljastuisivat, salauksen purkuavaimet ovat vain käyttäjällä, mikä tekee tiedoista käyttökelvottomia kenellekään muulle.\n\nToisin kuin salasananhallintaohjelmat, jotka tallentavat salattuja salasanoja palvelimille tai pilveen, Decoy Phrase antaa sinulle täyden hallinnan siitä, miten ja missä arkaluontoiset tietosi tallennetaan ja palautetaan.',
      },
      'prod-1': {
        question: 'Mikä on Decoy Phrase Generator ja mitkä ovat sen komponentit?',
        answer:
          'Decoy Phrase Generator on keskeinen työkalu Decoy Phrase -järjestelmässä, yhdistäen Kartoituksen Luojan (Mapping Maker) ja Tekstigeneraattorin (Text Generator).\n\nKartoituksen Luoja muuntaa siemenlauseet tai arkaluontoiset tiedot tavalliseksi hämäystekstiksi ja luo kartoitustiedoston, joka toimii palautusavaimena, kun taas Tekstigeneraattori käyttää kyseistä kartoitustiedostoa alkuperäisten tietojen palauttamiseen hämäystekstistä.\n\nKaikki prosessit suoritetaan kokonaan käyttäjän laitteella ilman internetyhteyttä, varmistaen ettei arkaluontoisia tietoja koskaan lähetetä millekään palvelimelle.',
      },
      'prod-2': {
        question: 'Mikä on Kartoitustiedosto ja miksi se pitää tallentaa erikseen?',
        answer:
          'Kartoitustiedosto on yksityinen tiedosto (.json), joka sisältää teknistä tietoa ja toimii ainoana avaimena alkuperäisten tietojen palauttamiseen hämäystekstistä.\n\nSe ei sisällä suoraan arkaluontoisia tietoja eikä sillä ole merkitystä ilman siihen liittyvää hämäystekstiä. Tästä syystä Kartoitustiedosto on tallennettava erillään hämäystekstistä. Tämä erottelu estää yhtä tiedostoa paljastamasta salaisuuksia. Ilman molempien oikeaa yhdistelmää palautus on mahdotonta – mikä tarkoittaa, ettei yksittäinen komponentti sisällä hyödynnettävissä olevaa arkaluontoista tietoa itsessään.',
      },
      'prod-3': {
        question: 'Miten Pysyvä Tallennus toimii ja mitä tiedostomuotoja tuetaan?',
        answer:
          'Pysyvä Tallennus on Arweaveen perustuva tallennuskerros, joka tallentaa hämäystekstejä ja kartoitustiedostoja pysyvästi ja muuttumattomasti.\n\nSe on suunniteltu "kirjoita kerran, lue ikuisesti" -tallennukseksi pitkäaikaisille tekstivarmuuskopioille ilman riippuvuutta perinteisistä palvelimista.\n\nPysyvä Tallennus tukee vain tekstipohjaisia tiedostoja, kuten .txt, .md ja .json. Muita muotoja, kuten kuvia, videoita tai äänitiedostoja, ei tueta.\n\nKaikkia latauksia hallitaan yhden tilin kautta käyttäen Jaettua Päälompakkoa (Shared Master Wallet), joten käyttäjien ei tarvitse luoda tai hallita lohkoketjulompakkoa eikä ymmärtää lohkoketjun mekaniikkaa. Lohkoketjun monimutkaisuus on piilotettu yksinkertaisen käyttöliittymän taakse.',
      },
      'prod-4': {
        question: 'Mitä ovat Monisalasanaholvit (Multi-Password Vaults) ja miten niitä käytetään?',
        answer:
          'Monisalasanaholvit ovat Pysyvän Tallennuksen ominaisuus, joka mahdollistaa yhden tilin sisältävän useita eristettyjä tallennusholveja, joista jokainen on suojattu eri salasanalla. Esimerkiksi käyttäjä voi tallentaa hämäystekstiä Holviin A ja kartoitustiedostoja Holviin B, käyttäen erillisiä salasanoja kummallekin.\n\nJokainen holvi on loogisesti eristetty, mikä tarkoittaa, että pääsy yhteen holviin ei anna pääsyä muihin. Tämän seurauksena yhden salasanan vaarantuminen paljastaa vain yhden holvin, pitäen muut arkaluontoiset tiedostot turvassa.',
      },
      'prod-5': {
        question: 'Voiko Decoy Phrase Generatoria käyttää eri laitteilla?',
        answer:
          'Kyllä. Decoy Phrase Generator on saatavilla useille alustoille. Se toimii tärkeimmillä työpöytäkäyttöjärjestelmillä (Windows, macOS, Linux) sekä Android-laitteilla.\n\nKoska kaikki prosessit suoritetaan offline-tilassa paikallisella laitteella, Decoy Phrasea voidaan käyttää myös ympäristöissä, joissa ei ole internetyhteyttä, tai korkean turvallisuuden järjestelmissä, kuten "air-gapped" -tietokoneissa.',
      },
      'prod-6': {
        question: 'Täytyykö käyttäjien ymmärtää lohkoketjua käyttääkseen näitä ominaisuuksia?',
        answer:
          'Ei. Vaikka Decoy Phrase käyttää lohkoketjuteknologiaa (Arweave) kulissien takana pysyvään tallennukseen, käyttöliittymä on suunniteltu siten, ettei käyttäjien tarvitse käsitellä mitään lohkoketjuun liittyvää monimutkaisuutta.\n\nKäyttämällä Jaettua Päälompakkoa käyttäjien tarvitsee keskittyä vain tekstiensä ja salasanojensa hallintaan; heidän ei tarvitse luoda, tallentaa tai hallita omia lohkoketjulompakoitaan. Tämän seurauksena kaikkia Decoy Phrasen ominaisuuksia voidaan käyttää ilman aiempaa tietoa lohkoketjuteknologiasta.',
      },
      'sec-1': {
        question: 'Miten järjestelmä suojaa käyttäjän tietoja?',
        answer:
          'Decoy Phrase soveltaa "offline-first" ja "nollatieto" -periaatteita, mikä tarkoittaa, että kaikki arkaluontoisten tietojen muuntaminen ja salaus suoritetaan kokonaan käyttäjän laitteella – vaatimatta internetyhteyttä tai mitään palvelinta.\n\nTiedot käsitellään ja salataan asiakaspuolella (esimerkiksi käyttämällä AES-256-GCM) ennen tallentamista Pysyvään Tallennukseen, joten julkinen tallennus sisältää vain salattua dataa, jota ei voi lukea ilman käyttäjän avaimia.\n\nLisäksi siemenlauseita tai alkuperäisiä arkaluontoisia tietoja ei koskaan tallenneta millekään palvelimelle, mikä tarkoittaa, ettei ole olemassa keskitettyä holvia, josta voisi tulla arvokas hyökkäyskohde. Tämä lähestymistapa poistaa riippuvuuden kolmansista osapuolista ja siirtää turvallisuuden luottamukseen perustuvasta suojauksesta tekniseen arkkitehtuuriin, joka tekee ulkopuolisen pääsyn mahdottomaksi suunnittelultaan.',
      },
      'sec-2': {
        question: 'Voiko Decoy Phrase poistaa tiedostoni Pysyvästä Tallennuksesta?',
        answer:
          'Ei. Decoy Phrase ei voi poistaa tiedostojasi, kun ne on tallennettu Pysyvään Tallennukseen. Pysyvä Tallennus on rakennettu Arweave-lohkoketjuun, jossa data on muuttumatonta suunnittelultaan. Kun tiedosto on ladattu, sitä ei voi poistaa, muokata tai pyyhkiä Decoy Phrasen – eikä kenenkään muunkaan – toimesta.',
      },
      'sec-3': {
        question: 'Miten järjestelmä varmistaa, ettei arkaluontoisia tietoja tallenneta?',
        answer:
          'Decoy Phrase käyttää "muunna ja erota" -periaatetta. Alkuperäiset tiedot muunnetaan offline-tilassa tavalliseksi hämäystekstiksi, joka näyttää satunnaiselta eikä sisällä salaista merkitystä. Luotu kartoitustiedosto sisältää teknistä palautustietoa, mutta ei sisällä alkuperäisiä arkaluontoisia tietoja.\n\nNämä kaksi komponenttia on tallennettava erikseen (esimerkiksi eri paikkoihin tai suojattava eri salasanoilla). Tämän seurauksena yksittäinen komponentti ei koskaan sisällä alkuperäistä salaisuutta. Ilman kartoitustiedostoa hämäysteksti on hyödytön; ja ilman hämäystekstiä kartoitustiedosto on merkityksetön.\n\nTämä menetelmä varmistaa, että alkuperäisiä arkaluontoisia tietoja ei koskaan tallenneta suoraan sovellukseen tai millekään palvelimelle.',
      },
      'sec-4': {
        question: 'Mitä järjestelmä tietää ja mitä ei tiedä Pysyvässä Tallennuksessa?',
        answer:
          'Decoy Phrase on nollatieto-järjestelmä, mikä tarkoittaa, että järjestelmä ei koskaan tiedä käyttäjän tietojen sisältöä.\n\nSe ei voi nähdä siemenlauseita, salasanoja tai alkuperäisten tiedostojen sisältöä, koska kaikki data salataan täysin käyttäjän paikallisessa selaimessa ennen latausta.\n\nAinoa järjestelmälle näkyvä tieto on ei-arkaluontoiset julkiset metatiedot, kuten käyttäjänimi (käytetään julkisena tunnisteena) ja tallennettujen tiedostojen määrä.\n\nMyös hämäystekstin ja sen kartoitustiedoston välinen suhde on järjestelmälle tuntematon. Lyhyesti sanottuna käyttäjän sisältö ja salaisuudet eivät koskaan paljastu; olemassa on vain salattua dataa ja rajoitettuja julkisia metatietoja.',
      },
      'sec-5': {
        question:
          'Miten Decoy Phrasen turvallisuuslähestymistapa eroaa perinteisistä järjestelmistä (kuten salasananhallintaohjelmista)?',
        answer:
          '• Alkuperäisten tietojen tallennus: Perinteiset salasananhallintaohjelmat tallentavat käyttäjän salaisuudet (salasanat, siemenet jne.) salattuun holviin. Decoy Phrase ei koskaan tallenna alkuperäisiä tietoja lainkaan.\n\n• Arkkitehtuuri: Salasananhallintaohjelmat luottavat tyypillisesti palvelimiin tai pilvi-infrastruktuuriin synkronoinnissa. Decoy Phrase on offline-first, ilman taustajärjestelmää ja ilman kolmannen osapuolen riippuvuutta.\n\n• Turvallisuusmalli: Salasananhallintaohjelmissa turvallisuus riippuu holvin salauksesta ja pääsalasanasta; jos holvi tai pääsalasana vaarantuu, kaikki tiedot voivat paljastua. Decoy Phrasella ei ole tällaista holvia. Yhden tiedoston vuotaminen (joko hämäysteksti tai kartoitustiedosto) ei riitä alkuperäisten tietojen palauttamiseen, koska yksittäisellä komponentilla ei ole arvoa itsessään.\n\n• Yksi haavoittuvuuspiste: Salasananhallintaohjelman holvi on arvokas kohde. Decoy Phrasella ei ole yhtä objektia, joka sisältää salaisuudet; ennen kuin molemmat komponentit (hämäysteksti ja kartoitustiedosto) vaarantuvat yhdessä, ei ole olemassa pääasiallista haavoittuvuuspistettä, johon hyökätä.',
      },
      'sec-6': {
        question:
          'Mitä tapahtuu, jos hämäystiedosto tai kartoitustiedosto joutuu jonkun muun käsiin?',
        answer:
          '• Jos vain hämäysteksti paljastuu, mitään salaisuutta ei paljasteta. Hämäysteksti on tavallista dataa ilman arkaluontoista merkitystä, eikä sitä voi käyttää ilman kartoitustiedostoa.\n\n• Jos vain kartoitustiedosto paljastuu, alkuperäiset tiedot pysyvät turvassa. Kartoitustiedosto sisältää vain teknisiä merkkikuvioita, ei salaista sisältöä, ja on hyödytön ilman siihen liittyvää hämäystekstiä.\n\n• Vain jos molemmat paljastuvat yhdessä, alkuperäiset tiedot voidaan palauttaa. Siinä tapauksessa turvallisuus romahtaa täysin, koska hyökkääjällä on molemmat tarvittavat komponentit.',
      },
      'sec-7': {
        question: 'Mikä on riski tiedostojen erottamatta jättämisessä?',
        answer:
          'Pääriski syntyy, jos hämäystekstiä ja kartoitustiedostoa ei tallenneta erikseen (esimerkiksi samaan paikkaan tai suojattuna samalla salasanalla).\n\nJos näin tapahtuu, kuka tahansa, joka saa pääsyn molempiin komponentteihin, voi palauttaa suoraan alkuperäiset tiedot. Toisin sanoen järjestelmä epäonnistuu vain, kun kaksi komponenttia tuodaan tahattomasti yhteen.\n\nTästä syystä tiukka erottelu on välttämätöntä: tallenna hämäysteksti ja kartoitustiedostot eri paikkoihin tai suojaa ne eri salasanoilla. Kun ne on erotettu asianmukaisesti, tällainen epäonnistuminen on erittäin epätodennäköistä.',
      },
    },
  },
  donate: {
    title: 'Tue Decoy Phrasea',
    description:
      'Decoy Phrase on vapaasti käytettävissä ja rakennettu voittoa tavoittelemattomana aloitteena. Ei maksumuuria eikä vaadittua tilausta. Lahjoitukset ovat vapaaehtoisia ja läpinäkyviä.',
    link: 'Katso live-projektin mittarit ja julkiset tiedot tästä!',
    cards: {
      storage: {
        title: 'Tallennusrahasto',
        description:
          'Tämä lahjoitus menee suoraan tallennuslompakkoon ja lisätään automaattisesti tallennusrahastoon, rahoittaen kestävästi pysyvää tallennusta ja lisäten käytettävissä olevaa kapasiteettia.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Lähetä AR pörssistä</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Osta AR-token</li>
      <li>Mene Lähetä tai Nosta -osioon</li>
      <li>Valitse On-Chain Nosto</li>
      <li>Valitse AR (Arweave)</li>
      <li>Liitä Decoy Phrasen lompakon osoite</li>
      <li>Valitse Arweave-verkko</li>
      <li>Syötä summa</li>
      <li>Vahvista nosto</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">AR-siirrot kestävät yleensä 1–5 minuuttia.</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Lähetä AR Wander Walletista</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Luo Wander Wallet</li>
      <li>Osta AR-token saatavilla olevalla maksutavalla</li>
      <li>Klikkaa Lähetä</li>
      <li>Liitä Decoy Phrasen lompakon osoite</li>
      <li>Syötä summa</li>
      <li>Vahvista tapahtuma</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: 'Tiimirahasto',
        description:
          'Tämä lahjoitus tukee Decoy Phrase -tiimiä ja ekosysteemiä, mukaan lukien kehitys, markkinointi ja yhteisöaloitteet. Varoja voidaan myös kohdistaa tallennukseen tarvittaessa.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Lähetä vakaavaluuttaa pörssistä</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Osta USDT, USDC tai muu tuettu vakaavaluutta</li>
      <li>Mene Lähetä tai Nosta -osioon</li>
      <li>Valitse On-Chain Nosto</li>
      <li>Valitse vakaavaluutta, jonka haluat lähettää</li>
      <li>Liitä Decoy Phrasen lompakon osoite (varmista, että se vastaa valittua verkkoa)</li>
      <li>Valitse verkko, joka vastaa lompakon osoitetta</li>
      <li>Syötä summa</li>
      <li>Vahvista nosto</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">Lähetä vakaavaluuttaa DEXistä</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Osta vakaavaluutta tai valitun verkon natiivitoken</li>
      <li>Mene Lähetä tai Nosta -osioon</li>
      <li>Valitse verkko tai valitse kolikko, jonka haluat lähettää</li>
      <li>Liitä Decoy Phrasen lompakon osoite tokenin ja lompakon verkkojen perusteella</li>
      <li>Syötä summa</li>
      <li>Vahvista tapahtuma</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: 'Tallennuslaskin',
    info: {
      p1: 'Keskimääräinen tiedostokoko 12-sanaiselle siemenlauseen kartoitustiedostolle on ~50 KiB. Lataukset käyttävät tällä hetkellä <strong class="text-foreground">Turbo (powered by ar.io)</strong>, mikä mahdollistaa alle 105 KiB tiedostojen lataamisen ilmaiseksi, suorien Arweave-maksujen laskemista suositellaan varavaihtoehtona, jos Turbo ei ole saatavilla.',
      p2: 'Kaikki pysyvään tallennukseen tallennettu data pysyy käytettävissä ikuisesti, vaikka kapasiteetti saavutettaisiin eikä tulevia lahjoituksia tehtäisi, kun taas lisäkapasiteetti on tarkoitettu tukemaan tulevia käyttäjiä ja Decoy Phrasen sukupolvia.',
    },
    labels: {
      donationAmount: 'Lahjoitussumma',
      arweaveEquivalent: 'Arweave-vastaavuus',
      winstonAmount: 'Winston-määrä',
      capacityIncrease: 'Tämä lahjoitus lisää pysyvää tallennuskapasiteettia',
      files: 'Tiedostot',
      calculate: 'Laske',
      currentBalance: 'Nykyinen Saldo',
      howToDonate: 'Kuinka Lahjoittaa?',
      copied: 'Kopioitu!',
      addressCopied: 'Osoite kopioitu!',
      copyAddress: 'Kopioi lompakon osoite',
      selectNetwork: 'Valitse verkko',
      walletAddress: 'Lompakon osoite',
    },
  },
  metrics: {
    title: 'Live Decoy Phrase -tilastot',
    labels: {
      totalUsers: 'Käyttäjiä Yhteensä',
      totalFilesStored: 'Tiedostoja Tallennettu Yhteensä',
      totalFilesLocked: 'Tiedostoja Lukittu Yhteensä',
      totalDonations: 'Lahjoituksia Yhteensä',
      remainingCapacity: 'Jäljellä Oleva Tiedostokapasiteetti',
      downloadTotal: 'Decoy Phrase Generator Latauksia Yhteensä',
    },
    status: {
      live: 'Live',
      reconnecting: 'Yhdistetään uudelleen...',
      disconnected: 'Yhteys katkaistu',
    },
    filters: {
      day: 'P',
      month: 'K',
      quarter: 'N',
      year: 'V',
      all: 'Kaikki',
    },
  },
  download: {
    title: 'Muunna ja palauta alkuperäinen siemenlauseesi milloin tahansa.',
    subtitle:
      'Muunna siemenlauseesi mukautettavaksi hämäystekstiksi ja palauta alkuperäinen milloin tahansa käyttämällä yksityistä kartoitustiedostoasi. Kaikki toimii täysin offline-tilassa – siemenlausetta ei tallenneta, ladata tai jaeta.',
    cta: {
      about: 'Tietoja Decoy Generatorista',
      tutorials: 'Katso Oppaat',
    },
  },
  feedback: {
    title: 'Palaute ja Tuki',
    description:
      'Jaa ehdotuksesi tai ilmoita ongelmista auttaaksesi meitä parantamaan Decoy Generatoria. Älä lähetä siemenlauseita tai arkaluontoisia tietoja.',
    discord: {
      text: 'Liity <span class="font-bold text-[#5865F2]">Discordiimme</span> seurataksesi palautepäivityksiä ja yhteisön ratkaisuja.',
      linkText: 'Liity nyt!',
    },
    forms: {
      feedback: {
        title: 'Palaute',
        name: 'Nimi',
        subject: 'Aihe',
        description: 'Kuvaus',
        email: 'Sähköposti',
        submit: 'Lähetä',
        submitting: 'Lähetetään...',
        success: 'Palaute lähetetty! Tarkista Discord päivityksiä varten.',
        error: 'Lähetys epäonnistui. Yritä uudelleen.',
        required: 'Pakollinen',
        invalidEmail: 'Virheellinen sähköpostiosoite',
        minChar: 'Täytyy olla vähintään 10 merkkiä',
      },
      support: {
        title: 'Tuki',
        category: 'Kategoria',
        appVersion: 'Sovellusversio',
        reference: 'Viitelinkki (Valinnainen)',
        referenceHelper:
          "Lataa kuvakaappaukset tai videot Google Driveen tai muuhun pilvipalveluun, aseta linkki tilaan 'Kuka tahansa linkin saanut voi katsella' ja liitä linkki tähän.",
        required: 'Pakollinen',
        invalidEmail: 'Virheellinen sähköpostiosoite',
        minChar: 'Täytyy olla vähintään 10 merkkiä',
      },
    },
  },
};
