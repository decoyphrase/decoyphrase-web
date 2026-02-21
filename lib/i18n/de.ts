import { Translations } from './types';

export const deTranslations: Translations = {
  nav: {
    about: 'Über uns',
    userGuide: 'Benutzerhandbuch',
    faq: 'FAQ',
    brandKit: 'Marken-Kit',
    liveMetrics: 'Live-Metriken',
    decoyToken: '$DECOY',
    products: 'Produkte',
    decoyGenerator: 'Täuschungsgenerator',
    permanentStorage: 'Permanenter Speicher',
    permanentWeb: 'Permanentes Web',
    donate: 'Spenden',
    docs: 'Doku',
    connect: 'Verbinden',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: 'Feedback',
  },
  header: {
    login: 'Anmelden',
    menu: 'Menü',
    language: 'Sprache',
  },
  footer: {
    columns: {
      decoyPhrase: 'Decoy Phrase',
      coreComponents: 'Kernkomponenten',
      downloadGenerator: 'Generator herunterladen',
    },
    links: {
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
      forum: 'Community-Forum',
    },
    mission: {
      text: 'Unsere Mission ist es, die digitale Privatsphäre zu schützen und unveränderlichen Speicher zu gewährleisten. Spenden unterstützen den dauerhaften Speicher und die Entwicklung und halten das System kostenlos und vererbbar.',
      ctaText: 'Um Decoy Phrase zu unterstützen, können Sie spenden.',
    },
  },
  hero: {
    titlePart1: 'Schützen Sie Ihren',
    titlePart2: 'digitalen Fußabdruck',
    titleHighlight: 'für immer',
    subtitle:
      'Nutzen Sie dezentralen Speicher und fortschrittliche Täuschungstechnologie, um Ihre Daten zu sichern.',
  },
  heroActions: {
    getStarted: 'Loslegen',
    watchTutorials: 'Tutorials ansehen',
    generator: 'Generator',
    storage: 'Speicher',
  },
  features: {
    title: 'Unsere wichtigsten',
    titleHighlight: 'Funktionen',
    subtitle: 'Entdecken Sie die Tools zum Schutz Ihrer Daten und Identität.',
    cards: {
      generator: {
        title: 'Täuschungsgenerator',
        description:
          'Erstellen Sie realistische gefälschte Dateien, um Eindringlinge zu verwirren.',
      },
      storage: {
        title: 'Permanenter Speicher',
        description: 'Speichern Sie Ihre Daten für immer auf der Arweave-Blockchain.',
      },
      web: {
        title: 'Permanentes Web',
        description: 'Stellen Sie dezentrale Websites bereit, die nicht zensiert werden können.',
      },
    },
  },
  howItWorks: {
    title: 'Wie Decoy Phrase funktioniert',
    subtitle: 'Einfache Schritte. Starke Sicherheit. Keine Verwahrung.',
    steps: {
      '1': {
        title: 'Transformieren Sie Ihre Seed Phrase',
        description:
          'Verwandeln Sie Ihre Seed Phrase in einen Täuschungstext. Komplett offline verarbeitet mit dem Decoy Phrase Generator, ohne Server, ohne Cloud und ohne Datenerfassung.',
      },
      '2': {
        title: 'Erhalten Sie zwei unabhängige Dateien',
        description:
          'Sie erhalten einen Täuschungstext, der normal aussieht und keine verwertbaren Informationen enthält, sowie eine Mapping-Datei, die als einziger Schlüssel zur Wiederherstellung des ursprünglichen Geheimnisses dient – ohne beide ist eine Wiederherstellung unmöglich.',
      },
      '3': {
        title: 'Lagern Sie sie getrennt',
        description:
          'Speichern Sie den Täuschungstext und die Mapping-Datei getrennt voneinander. Lokal an verschiedenen Orten oder in dauerhaftem Speicher unter Verwendung von Multi-Passwort-Tresoren.',
      },
      '4': {
        title: 'Wiederherstellung nur, wenn es darauf ankommt',
        description:
          'Wenn eine Wiederherstellung erforderlich ist, verwenden Sie beide Dateien im Decoy Phrase Generator, um Ihre ursprüngliche Seed Phrase wiederherzustellen.',
      },
    },
  },
  prosCons: {
    title: 'Vor- und Nachteile der Seed Phrase Sicherung',
    subtitle: 'Es gibt keine perfekte Seed Phrase Sicherung – nur unterschiedliche Risiken.',
    methods: {
      paper: {
        name: 'Papier-Backup',
        criteria: {
          free: 'Keine Kosten erforderlich',
          easyAccess: 'Erfordert physischen Zugang',
          highSecurity: 'Leicht zu stehlen, zu fotografieren oder zu kopieren',
          highPrivacy: 'Vollständig offline gespeichert',
          lossProof: 'Kann verlegt oder versehentlich weggeworfen werden',
          destructionProof: 'Anfällig für Feuer, Wasser und Alterung',
        },
      },
      metal: {
        name: 'Metall-Backup',
        criteria: {
          free: 'Erfordert den Kauf von Metallplatten',
          easyAccess: 'Erfordert physischen Zugang und Bergung',
          highSecurity: 'Jeder, der es findet, kann es direkt verwenden',
          highPrivacy: 'Offline ohne Dritte gespeichert',
          lossProof: 'Kann trotzdem verloren gehen oder gestohlen werden',
          destructionProof: 'Resistent gegen Feuer und Wasser',
        },
      },
      'local-storage': {
        name: 'Lokaler Speicher',
        criteria: {
          free: 'Nutzt vorhandene Hardware',
          easyAccess: 'Erfordert Gerät, Anschluss und Kompatibilität',
          highSecurity: 'Anfällig für Malware oder Diebstahl',
          highPrivacy: 'Lokal ohne Dritte gespeichert',
          lossProof: 'Leicht verloren, beschädigt oder korrumpiert',
          destructionProof: 'Anfällig für Hardwareausfälle',
        },
      },
      cloud: {
        name: 'Cloud-Speicher',
        criteria: {
          free: 'Erfordert Abonnement oder bezahlten Speicher',
          easyAccess: 'Von überall mit Login zugänglich',
          highSecurity: 'Ziel für Hacks und Kontodiebstahl',
          highPrivacy: 'Kontrolliert von Drittanbietern',
          lossProof: 'Redundante Backups reduzieren das Verlustrisiko',
          destructionProof: 'Konten können gelöscht oder eingefroren werden',
        },
      },
      encrypted: {
        name: 'Verschlüsselte digitale Datei',
        criteria: {
          free: 'Kann mit kostenlosen Tools erstellt werden',
          easyAccess: 'Erfordert Passwort und korrekte Software',
          highSecurity: 'Nur stark, wenn das Passwort niemals enthüllt wird',
          highPrivacy: 'Privatsphäre hängt vom Speicherort ab',
          lossProof: 'Passwortverlust bedeutet dauerhaften Verlust',
          destructionProof: 'Dateikorruption oder -löschung ist fatal',
        },
      },
      shamir: {
        name: "Shamir's Secret Sharing",
        criteria: {
          free: 'Erfordert spezialisierte Tools oder kompatible Wallets',
          easyAccess: 'Erfordert das Sammeln von Schwellenwert-Teilen',
          highSecurity: 'Einzelne Teile sind kryptographisch nutzlos',
          highPrivacy: 'Keine Partei hält die vollständige Seed Phrase',
          lossProof: 'Toleriert begrenzten Verlust von Teilen',
          destructionProof: 'Verlust mehrerer Teile bricht die Wiederherstellung',
        },
      },
      custodian: {
        name: 'Verwahrer',
        criteria: {
          free: 'Verwahrungsdienste erheben oft Gebühren',
          easyAccess: 'Einfache Wiederherstellung über Kontozugriff',
          highSecurity: 'Nutzer sind vollständig von Dritten abhängig',
          highPrivacy: 'Verwahrer hat Einsicht und Kontrolle',
          lossProof: 'Guthaben kann eingefroren oder beschlagnahmt werden',
          destructionProof: 'Unternehmensinsolvenz riskiert Totalverlust',
        },
      },
      splitting: {
        name: 'Seed Splitting',
        criteria: {
          free: 'Keine Kosten erforderlich',
          easyAccess: 'Erfordert das Sammeln aller Teile',
          highSecurity: 'Teilstücke enthüllen immer noch Informationen',
          highPrivacy: 'Meist unverschlüsselt gespeichert',
          lossProof: 'Verlust eines Teils bricht die Wiederherstellung',
          destructionProof: 'Physischer Schaden beeinträchtigt die Wiederherstellung',
        },
      },
      lawyer: {
        name: 'Anwalt',
        criteria: {
          free: 'Erfordert laufende Anwaltskosten',
          easyAccess: 'Zugang hängt von rechtlichen Verfahren ab',
          highSecurity: 'Menschliches Vertrauen und rechtliches Risiko involviert',
          highPrivacy: 'Anwalt kann auf rohen Seed zugreifen',
          lossProof: 'Vorbehaltlich menschlicher Fehler oder Streitigkeiten',
          destructionProof: 'Dokumente können verloren gehen oder zerstört werden',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: 'Kostenloses und gemeinnütziges System',
          easyAccess:
            'Jederzeit wiederherstellbar durch permanenten Speicher und herunterladbare Apps',
          highSecurity: 'Echter Seed wird niemals direkt gespeichert',
          highPrivacy: 'Täuschungstext ergibt alleine keinen Sinn',
          lossProof: 'Ein Teil allein ist für Angreifer nutzlos',
          destructionProof: 'Kann auf dauerhaftem Speicher gesichert werden',
        },
      },
    },
    criteriaLabels: {
      free: 'Kostenlos',
      easyAccess: 'Einfacher Zugang',
      highSecurity: 'Hohe Sicherheit',
      highPrivacy: 'Hohe Privatsphäre',
      lossProof: 'Verlustsicher',
      destructionProof: 'Zerstörungssicher',
    },
  },
  securityDemo: {
    title: 'Sicherheit durch Trennung',
    subtitle: 'Keine Mapping-Datei, keine Wiederherstellung. Kein Täuschungstext, kein Zugriff.',
    annotations: {
      decoy:
        'Sie müssen einen Täuschungstext haben, der als verschleierte Darstellung Ihrer ursprünglichen sensiblen Daten dient.',
      mapping:
        'Sie müssen die Mapping-Datei haben, die die Transformationsregeln enthält, die erforderlich sind, um die ursprünglichen Daten aus dem Täuschungstext zu rekonstruieren',
      result: 'Ihre generierte Seed Phrase wird hier erscheinen',
      clickToGenerate: 'Klicken Sie hier, um die Seed Phrase zu generieren',
    },
    buttons: {
      simulateDecoy: 'Klicken, um Täuschungstext zu simulieren',
      placeDecoy: '✓ Täuschungstext platziert',
      simulateMapping: 'Klicken, um Upload der Mapping-Datei zu simulieren',
      uploadMapping: 'Mapping Aktualisieren',
      mappingLoaded: 'Mapping Geladen',
      updateMapping: 'Neue Mapping-Datei aktualisieren',
      generate: 'Ergebnis Generieren',
      decrypting: 'Entschlüsseln...',
    },
    labels: {
      decoyText: 'Täuschungstext',
      asciiText: 'ASCII-Text',
      resultPlaceholder: 'Ergebnis wird hier erscheinen...',
    },
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle:
      'Hier sind einige Fragen, die Sie vielleicht zu Decoy Phrase haben. Haben Sie die Antwort nicht gefunden, nach der Sie gesucht haben?',
    chatAi: 'Chatten Sie mit der KI über Decoy Phrase!',
    categories: {
      general: 'Allgemein',
      products: 'Produkte',
      security: 'Sicherheit & Datenschutz',
    },
    items: {
      'gen-1': {
        question: 'Was ist Decoy Phrase?',
        answer:
          'Decoy Phrase ist eine Offline-First-Methode zum Schutz und zur Sicherung von Seed-Phrasen und sensiblen Texten – ohne jemals die Originaldaten zu speichern.\n\nEs verwandelt Geheimnisse in harmlosen, gewöhnlich aussehenden Text, wobei die Wiederherstellung nur durch die Kombination der privaten Zuordnungsdatei und des transformierten Textes möglich ist.\n\nFür langfristige Beständigkeit können Täuschungsdateien und Zuordnungsdateien dauerhaft über Decoy Phrase Permanent Storage gespeichert werden, der direkt mit der Arweave-Blockchain verbunden ist – so wird sichergestellt, dass sie nicht verloren gehen, verändert oder gelöscht werden können.',
      },
      'gen-2': {
        question: 'Ist Decoy Phrase kostenlos?',
        answer:
          'Ja. Decoy Phrase ist völlig kostenlos und arbeitet als gemeinnützige Initiative. Alle Kernfunktionen – einschließlich der Erstellung von Täuschungstexten, der Erstellung von Zuordnungsdateien und der Offline-Wiederherstellung – sind kostenlos verfügbar.\n\nFür Decoy Phrase Permanent Storage wird der Speicher durch Spenden unterstützt. Diese Spenden werden verwendet, um die Erweiterung der permanenten Speicherkapazität auf der Arweave-Blockchain im Laufe der Zeit zu finanzieren. Alle Dateien, die bereits auf der Blockchain gespeichert sind, bleiben für immer zugänglich, unabhängig vom zukünftigen Status des Dienstes.',
      },
      'gen-3': {
        question: 'Was ist permanent in Decoy Phrase?',
        answer:
          'In Decoy Phrase bezieht sich das Konzept der Dauerhaftigkeit auf die Website, die Domain und die gespeicherten Daten – ermöglicht durch das Permanent Web und Permanent Storage, die auf Arweave aufbauen.',
      },
      'gen-4': {
        question: 'Speichert Decoy Phrase meine Daten?',
        answer:
          'Nein. Decoy Phrase speichert niemals Ihre Seed-Phrase oder originalen sensiblen Daten. Der Prozess der Generierung von Täuschungstexten und Zuordnungsdateien läuft vollständig offline mit dem Decoy Phrase Generator. Daher besteht kein Risiko, dass Ihre Geheimnisse auf irgendeinem Server gespeichert werden.\n\nWenn Dateien im Permanent Storage gespeichert werden, werden alle Daten auf der Client-Seite verschlüsselt, bevor sie an die Arweave-Blockchain gesendet werden – einschließlich Passwörter, Dateiinhalte und Dateititel.',
      },
      'gen-5': {
        question:
          'Was passiert, wenn ich sowohl meine Zuordnungsdatei als auch den zugehörigen Täuschungstext verliere?',
        answer:
          'Wenn Sie sowohl die Zuordnungsdatei als auch den entsprechenden Täuschungstext verlieren, sind Ihre Originaldaten dauerhaft unwiederbringlich. Decoy Phrase ist absichtlich ohne Reset-, Backup- oder Wiederherstellungsmechanismus konzipiert und speichert niemals Ihre ursprünglichen Geheimnisse, was eine Wiederherstellung ohne beide Komponenten technisch unmöglich macht.\n\nAus diesem Grund bietet Decoy Phrase Permanent Storage an: um das Risiko eines versehentlichen Verlusts zu verringern, indem Täuschungs- und Zuordnungsdateien in einem unveränderlichen Langzeitspeicher gespeichert werden, der nicht gelöscht, verändert oder stillschweigend verloren gehen kann, während ein Zero-Knowledge-, Non-Custodial-Design beibehalten wird – bei dem alle Dateien clientseitig verschlüsselt sind und die volle Kontrolle beim Benutzer bleibt.',
      },
      'gen-6': {
        question: 'Muss ich online sein, um Decoy Phrase zu nutzen?',
        answer:
          'Das hängt davon ab.\n\nDer Decoy Phrase Generator arbeitet vollständig offline. Alle Kernprozesse – Erstellung von Täuschungstexten, Generierung von Zuordnungsdateien und Datenwiederherstellung – laufen vollständig auf Ihrem Gerät ohne Internetverbindung.\n\nPermanent Storage erfordert jedoch eine Online-Verbindung, da verschlüsselte Dateien mithilfe einer Zero-Knowledge-Architektur auf der Arweave-Blockchain gespeichert werden.',
      },
      'gen-7': {
        question:
          'Kann ich meine Seed-Phrase oder sensiblen Daten ohne Hilfe Dritter wiederherstellen?',
        answer:
          'Ja. Decoy Phrase ist für die vollständige souveräne Nutzung ohne Zwischenhändler konzipiert. Durch die Verwendung Ihres Täuschungstextes und der zugehörigen Zuordnungsdatei stellt das System Ihre Originaldaten direkt auf Ihrem Gerät wieder her, vollständig offline über den Decoy Phrase Generator – ohne Beteiligung Dritter.',
      },
      'gen-8': {
        question: 'Ist es sicher, Täuschungstext mit anderen zu teilen?',
        answer:
          'Ja, es ist sicher.\n\nTäuschungstext ist so konzipiert, dass er gewöhnlich aussieht und für sich genommen keine nutzbaren sensiblen Informationen enthält. Ohne die entsprechende Zuordnungsdatei kann er nicht verwendet werden, um die Originaldaten wiederherzustellen. Ebenso ist eine Zuordnungsdatei ohne ihren zugehörigen Täuschungstext unbrauchbar. Daher enthüllt das Teilen von Täuschungstext allein Ihr Geheimnis nicht.',
      },
      'gen-9': {
        question: 'Wie unterscheidet sich Decoy Phrase von einem Passwort-Manager?',
        answer:
          'Decoy Phrase ist kein Online-Passwort-Manager.\n\nDie Transformation von Seed-Phrasen, Passwörtern oder anderen sensiblen Daten erfolgt vollständig offline über den Decoy Phrase Generator.\n\nPermanent Storage wird nur verwendet, um Täuschungstexte und Zuordnungsdateien zu speichern, die mithilfe der Multi-Passwort-Verwaltungsfunktion in verschiedene Speicherbereiche getrennt sind.\n\nAlle im Permanent Storage gespeicherten Dateien werden clientseitig verschlüsselt. Selbst wenn sie offengelegt werden, werden die Entschlüsselungsschlüssel nur vom Benutzer gehalten, wodurch die Daten für andere unbrauchbar werden.\n\nIm Gegensatz zu Passwort-Managern, die verschlüsselte Passwörter auf Servern oder in der Cloud speichern, gibt Ihnen Decoy Phrase die volle Kontrolle darüber, wie und wo Ihre sensiblen Daten gespeichert und wiederhergestellt werden.',
      },
      'prod-1': {
        question: 'Was ist der Decoy Phrase Generator und was sind seine Komponenten?',
        answer:
          'Der Decoy Phrase Generator ist das Kernwerkzeug im Decoy Phrase-System, das den Mapping Maker und den Text Generator kombiniert.\n\nDer Mapping Maker transformiert Seed-Phrasen oder sensible Daten in gewöhnlichen Täuschungstext und generiert eine Zuordnungsdatei, die als Wiederherstellungsschlüssel dient, während der Text Generator diese Zuordnungsdatei verwendet, um die Originaldaten aus dem Täuschungstext wiederherzustellen.\n\nAlle Prozesse laufen vollständig auf dem Gerät des Benutzers ohne Internetverbindung, wodurch sichergestellt wird, dass niemals sensible Daten an einen Server gesendet werden.',
      },
      'prod-2': {
        question: 'Was ist eine Zuordnungsdatei und warum muss sie separat gespeichert werden?',
        answer:
          'Eine Zuordnungsdatei ist eine private (.json) Datei, die technische Informationen enthält und als einziger Schlüssel zur Wiederherstellung der Originaldaten aus dem Täuschungstext dient.\n\nSie enthält keine direkten sensiblen Daten und ist ohne den zugehörigen Täuschungstext bedeutungslos. Aus diesem Grund muss die Zuordnungsdatei getrennt vom Täuschungstext gespeichert werden. Diese Trennung verhindert, dass eine einzelne Datei Geheimnisse preisgibt. Ohne die richtige Kombination beider ist eine Wiederherstellung unmöglich – was bedeutet, dass keine einzelne Komponente für sich genommen ausnutzbare sensible Informationen enthält.',
      },
      'prod-3': {
        question: 'Wie funktioniert Permanent Storage und welche Dateiformate werden unterstützt?',
        answer:
          'Permanent Storage ist eine auf Arweave basierende Speicherschicht, die Täuschungstexte und Zuordnungsdateien dauerhaft und unveränderlich speichert.\n\nEs ist als Write-Once-, Read-Forever-Speicher für langfristige Text-Backups konzipiert, ohne auf traditionelle Server angewiesen zu sein.\n\nPermanent Storage unterstützt nur textbasierte Dateien wie .txt, .md und .json. Andere Formate wie Bilder, Videos oder Audiodateien werden nicht unterstützt.\n\nAlle Uploads werden über ein einziges Konto mit einer Shared Master Wallet verwaltet, sodass Benutzer keine Blockchain-Wallet erstellen oder verwalten oder Blockchain-Mechaniken verstehen müssen. Die Blockchain-Komplexität ist hinter einer einfachen Benutzeroberfläche verborgen.',
      },
      'prod-4': {
        question: 'Was sind Multi-Passwort-Tresore und wie werden sie verwendet?',
        answer:
          'Multi-Passwort-Tresore sind eine Funktion von Permanent Storage, die es einem einzelnen Konto ermöglicht, mehrere isolierte Speichertresore zu enthalten, die jeweils durch ein anderes Passwort geschützt sind. Beispielsweise kann ein Benutzer Täuschungstexte in Tresor A und Zuordnungsdateien in Tresor B speichern, wobei für jeden separate Passwörter verwendet werden.\n\nJeder Tresor ist logisch isoliert, was bedeutet, dass der Zugang zu einem Tresor keinen Zugang zu anderen gewährt. Infolgedessen macht die Kompromittierung eines Passworts nur einen Tresor zugänglich und hält andere sensible Dateien sicher.',
      },
      'prod-5': {
        question: 'Kann der Decoy Phrase Generator auf verschiedenen Geräten verwendet werden?',
        answer:
          'Ja. Der Decoy Phrase Generator ist plattformübergreifend verfügbar. Er kann auf den wichtigsten Desktop-Betriebssystemen (Windows, macOS, Linux) sowie auf Android-Geräten ausgeführt werden.\n\nDa alle Prozesse offline auf dem lokalen Gerät laufen, kann Decoy Phrase auch in Umgebungen ohne Internetzugang oder auf Hochsicherheitssystemen wie Air-Gapped-Computern verwendet werden.',
      },
      'prod-6': {
        question: 'Müssen Benutzer Blockchain verstehen, um diese Funktionen zu nutzen?',
        answer:
          'Nein. Obwohl Decoy Phrase im Hintergrund Blockchain-Technologie (Arweave) für die permanente Speicherung verwendet, ist die Benutzeroberfläche so konzipiert, dass Benutzer sich nicht mit komplexen Blockchain-Themen befassen müssen.\n\nDurch die Verwendung einer Shared Master Wallet müssen sich Benutzer nur auf die Verwaltung ihrer Texte und Passwörter konzentrieren – sie müssen keine eigenen Blockchain-Wallets erstellen, speichern oder verwalten. Infolgedessen können alle Funktionen von Decoy Phrase ohne Vorkenntnisse der Blockchain-Technologie genutzt werden.',
      },
      'sec-1': {
        question: 'Wie schützt das System Benutzerdaten?',
        answer:
          'Decoy Phrase wendet Offline-First- und Zero-Knowledge-Prinzipien an, was bedeutet, dass alle Transformationen und Verschlüsselungen sensibler Daten vollständig auf dem Gerät des Benutzers durchgeführt werden – ohne eine Internetverbindung oder einen Server zu benötigen.\n\nDaten werden clientseitig verarbeitet und verschlüsselt (z. B. mit AES-256-GCM), bevor sie im Permanent Storage gespeichert werden, sodass der öffentliche Speicher nur verschlüsselte Daten enthält, die ohne die Schlüssel des Benutzers nicht gelesen werden können.\n\nDarüber hinaus werden niemals Seed-Phrasen oder originale sensible Daten auf einem Server gespeichert, was bedeutet, dass es keinen zentralen Tresor gibt, der ein hochwertiges Angriffsziel werden könnte. Dieser Ansatz eliminiert die Abhängigkeit von Dritten und verlagert die Sicherheit von vertrauensbasiertem Schutz auf eine technische Architektur, die externen Zugriff per Design unmöglich macht.',
      },
      'sec-2': {
        question: 'Kann Decoy Phrase meine Dateien im Permanent Storage löschen?',
        answer:
          'Nein. Decoy Phrase kann Ihre Dateien nicht löschen, sobald sie im Permanent Storage gespeichert sind. Permanent Storage baut auf der Arweave-Blockchain auf, wo Daten per Design unveränderlich sind. Sobald eine Datei hochgeladen ist, kann sie nicht von Decoy Phrase – oder von sonst jemandem – entfernt, geändert oder gelöscht werden.',
      },
      'sec-3': {
        question: 'Wie stellt das System sicher, dass keine sensiblen Daten gespeichert werden?',
        answer:
          'Decoy Phrase verwendet ein "Transformieren und Trennen"-Prinzip. Originaldaten werden offline in gewöhnlichen Täuschungstext umgewandelt, der zufällig erscheint und keine geheime Bedeutung enthält. Die generierte Zuordnungsdatei enthält technische Wiederherstellungsinformationen, aber nicht die originalen sensiblen Daten.\n\nDiese beiden Komponenten müssen getrennt gespeichert werden (z. B. an verschiedenen Orten oder durch unterschiedliche Passwörter geschützt). Infolgedessen enthält keine einzelne Komponente jemals das ursprüngliche Geheimnis. Ohne die Zuordnungsdatei ist der Täuschungstext nutzlos – und ohne den Täuschungstext ist die Zuordnungsdatei bedeutungslos.\n\nDiese Methode stellt sicher, dass originale sensible Daten niemals direkt in der Anwendung oder auf einem Server gespeichert werden.',
      },
      'sec-4': {
        question: 'Was weiß und weiß das System nicht im Permanent Storage?',
        answer:
          'Decoy Phrase ist Zero-Knowledge, was bedeutet, dass das System niemals den Inhalt von Benutzerdaten kennt.\n\nEs kann keine Seed-Phrasen, Passwörter oder originalen Dateiinhalte sehen, da alle Daten vor dem Hochladen im lokalen Browser des Benutzers vollständig verschlüsselt werden.\n\nDie einzigen für das System sichtbaren Informationen sind nicht sensible öffentliche Metadaten, wie z. B. ein Benutzername (der als öffentliche Kennung verwendet wird) und die Anzahl der gespeicherten Dateien.\n\nDie Beziehung zwischen Täuschungstext und seiner Zuordnungsdatei ist dem System ebenfalls unbekannt. Kurz gesagt, Benutzerinhalte und Geheimnisse werden niemals offengelegt – es existieren nur verschlüsselte Daten und begrenzte öffentliche Metadaten.',
      },
      'sec-5': {
        question:
          'Wie unterscheidet sich der Sicherheitsansatz von Decoy Phrase von herkömmlichen Systemen (wie Passwort-Managern)?',
        answer:
          '• Speicherung von Originaldaten: Herkömmliche Passwort-Manager speichern Benutzergeheimnisse (Passwörter, Seeds usw.) in einem verschlüsselten Tresor. Decoy Phrase speichert niemals Originaldaten.\n\n• Architektur: Passwort-Manager verlassen sich in der Regel auf Server oder Cloud-Infrastruktur für die Synchronisierung. Decoy Phrase ist Offline-First, ohne Backend und ohne Abhängigkeit von Dritten.\n\n• Sicherheitsmodell: Bei Passwort-Managern hängt die Sicherheit von der Tresorverschlüsselung und einem Master-Passwort ab – wenn der Tresor oder das Master-Passwort kompromittiert wird, können alle Daten offengelegt werden. Decoy Phrase hat keinen solchen Tresor. Das Leaken einer einzelnen Datei (entweder Täuschungstext oder Zuordnungsdatei) reicht nicht aus, um die Originaldaten wiederherzustellen, da jede Komponente für sich genommen keinen Wert hat.\n\n• Single Point of Failure: Der Tresor eines Passwort-Managers ist ein hochwertiges Ziel. Decoy Phrase hat kein einzelnes Objekt, das Geheimnisse enthält; bis beide Komponenten (Täuschungstext und Zuordnungsdatei) zusammen kompromittiert werden, gibt es keinen primären Angriffspunkt.',
      },
      'sec-6': {
        question:
          'Was passiert, wenn eine Täuschungsdatei oder Zuordnungsdatei in die Hände anderer fällt?',
        answer:
          '• Wenn nur der Täuschungstext offengelegt wird, wird kein Geheimnis preisgegeben. Der Täuschungstext sind gewöhnliche Daten ohne sensible Bedeutung und können ohne die Zuordnungsdatei nicht verwendet werden.\n\n• Wenn nur die Zuordnungsdatei offengelegt wird, bleiben die Originaldaten sicher. Die Zuordnungsdatei enthält nur technische Zeichenmuster, keinen geheimen Inhalt, und ist ohne den zugehörigen Täuschungstext nutzlos.\n\n• Nur wenn beide zusammen offengelegt werden, können die Originaldaten wiederhergestellt werden. In diesem Fall bricht die Sicherheit vollständig zusammen, da der Angreifer beide erforderlichen Komponenten hat.',
      },
      'sec-7': {
        question: 'Was ist das Risiko, Dateien nicht zu trennen?',
        answer:
          'Das Hauptrisiko entsteht, wenn der Täuschungstext und die Zuordnungsdatei nicht getrennt gespeichert werden (z. B. am selben Ort oder durch dasselbe Passwort geschützt).\n\nWenn dies geschieht, kann jeder, der Zugriff auf beide Komponenten erhält, die Originaldaten direkt wiederherstellen. Mit anderen Worten, das System versagt nur, wenn die beiden Komponenten unbeabsichtigt zusammengebracht werden.\n\nDaher ist eine strikte Trennung unerlässlich: Speichern Sie Täuschungstexte und Zuordnungsdateien an verschiedenen Orten oder schützen Sie sie mit unterschiedlichen Passwörtern. Bei ordnungsgemäßer Trennung ist ein solches Versagen äußerst unwahrscheinlich.',
      },
    },
  },
  donate: {
    title: 'Unterstützen Sie Decoy Phrase',
    description:
      'Decoy Phrase ist kostenlos nutzbar und als gemeinnützige Initiative aufgebaut. Es gibt keine Paywall und kein erforderliches Abonnement. Spenden sind optional und transparent.',
    link: 'Sehen Sie sich hier Live-Projektmetriken und öffentliche Daten an!',
    cards: {
      storage: {
        title: 'Speicher-Fonds',
        description:
          'Diese Spende geht direkt an das Speicher-Wallet und wird automatisch dem Speicher-Stiftungsfonds hinzugefügt, wodurch dauerhafter Speicher nachhaltig finanziert und die verfügbare Kapazität erhöht wird.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Senden Sie AR von einer Börse</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>AR-Token kaufen</li>
      <li>Gehen Sie zu Senden oder Abheben</li>
      <li>Wählen Sie On-Chain-Abhebung</li>
      <li>Wählen Sie AR (Arweave)</li>
      <li>Fügen Sie die Wallet-Adresse von Decoy Phrase ein</li>
      <li>Wählen Sie das Arweave-Netzwerk</li>
      <li>Geben Sie den Betrag ein</li>
      <li>Bestätigen Sie die Abhebung</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">AR-Überweisungen dauern in der Regel 1–5 Minuten.</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Senden Sie AR von Wander Wallet</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Erstellen Sie eine Wander Wallet</li>
      <li>Kaufen Sie AR-Token über die verfügbare Zahlungsmethode</li>
      <li>Klicken Sie auf Senden</li>
      <li>Fügen Sie die Wallet-Adresse von Decoy Phrase ein</li>
      <li>Geben Sie den Betrag ein</li>
      <li>Bestätigen Sie die Transaktion</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: 'Team-Fonds',
        description:
          'Diese Spende unterstützt das Decoy Phrase Team und das Ökosystem, einschließlich Entwicklung, Marketing und Community-Initiativen. Mittel können bei Bedarf auch dem Speicher zugewiesen werden.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Senden Sie Stablecoin von einer Börse</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Kaufen Sie USDT, USDC oder eine andere unterstützte Stablecoin</li>
      <li>Gehen Sie zu Senden oder Abheben</li>
      <li>Wählen Sie On-Chain-Abhebung</li>
      <li>Wählen Sie die Stablecoin, die Sie senden möchten</li>
      <li>Fügen Sie die Wallet-Adresse von Decoy Phrase ein (stellen Sie sicher, dass sie mit dem ausgewählten Netzwerk übereinstimmt)</li>
      <li>Wählen Sie das Netzwerk, das mit der Wallet-Adresse übereinstimmt</li>
      <li>Geben Sie den Betrag ein</li>
      <li>Bestätigen Sie die Abhebung</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">Senden Sie Stablecoin von DEX</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Kaufen Sie eine Stablecoin oder den nativen Token des ausgewählten Netzwerks</li>
      <li>Gehen Sie zu Senden oder Abheben</li>
      <li>Wählen Sie Netzwerk oder wählen Sie die Münze, die Sie senden möchten</li>
      <li>Fügen Sie die Wallet-Adresse von Decoy Phrase basierend auf Token- und Wallet-Netzwerken ein</li>
      <li>Geben Sie den Betrag ein</li>
      <li>Bestätigen Sie die Transaktion</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: 'Speicher-Rechner',
    info: {
      p1: 'Die durchschnittliche Dateigröße für eine 12-Wort See Phrase Mapping-Datei beträgt ~50 KiB. Uploads verwenden derzeit <strong class="text-foreground">Turbo (powered by ar.io)</strong>, wodurch Dateien unter 105 KiB kostenlos hochgeladen werden können, wobei direkte Arweave-Gebührenberechnungen als Fallback empfohlen werden, falls Turbo nicht verfügbar ist.',
      p2: 'Alle auf dauerhaftem Speicher gespeicherten Daten bleiben für immer zugänglich, auch wenn die Kapazität erreicht ist und keine zukünftigen Spenden getätigt werden, während zusätzliche Kapazität dazu gedacht ist, zukünftige Nutzer und Generationen von Decoy Phrase zu unterstützen.',
    },
    labels: {
      donationAmount: 'Spendenbetrag',
      arweaveEquivalent: 'Arweave-Äquivalent',
      winstonAmount: 'Winston-Betrag',
      capacityIncrease: 'Diese Spende erhöht die permanente Speicherkapazität um',
      files: 'Dateien',
      calculate: 'Berechnen',
      currentBalance: 'Aktuelles Guthaben',
      howToDonate: 'Wie spende ich?',
      copied: 'Kopiert!',
      addressCopied: 'Adresse kopiert!',
      copyAddress: 'Wallet-Adresse kopieren',
      selectNetwork: 'Netzwerk auswählen',
      walletAddress: 'Wallet-Adresse',
    },
  },
  metrics: {
    title: 'Live Decoy Phrase Metriken',
    labels: {
      totalUsers: 'Gesamtnutzer',
      totalFilesStored: 'Gesamte gespeicherte Dateien',
      totalFilesLocked: 'Gesamte gesperrte Dateien',
      totalDonations: 'Gesamtspenden',
      remainingCapacity: 'Verbleibende Dateikapazität',
      downloadTotal: 'Gesamtdownloads des Decoy Phrase Generators',
    },
    status: {
      live: 'Live',
      reconnecting: 'Verbindung wird wiederhergestellt...',
      disconnected: 'Getrennt',
    },
    filters: {
      day: 'T',
      month: 'M',
      quarter: 'Q',
      year: 'J',
      all: 'Alle',
    },
  },
  download: {
    title: 'Transformieren und stellen Sie Ihre ursprüngliche Seed Phrase jederzeit wieder her.',
    subtitle:
      'Wandeln Sie Ihre Seed Phrase in anpassbaren Täuschungstext um und stellen Sie das Original jederzeit mit Ihrer privaten Mapping-Datei wieder her. Alles funktioniert komplett offline – keine Seed Phrases gespeichert, hochgeladen oder geteilt.',
    cta: {
      about: 'Über Decoy Generator',
      tutorials: 'Tutorials Ansehen',
    },
  },
  feedback: {
    title: 'Feedback und Support',
    description:
      'Teilen Sie Ihre Vorschläge oder melden Sie Probleme, um uns zu helfen, den Decoy Generator zu verbessern. Bitte senden Sie keine Seed Phrases oder sensiblen Daten.',
    discord: {
      text: 'Treten Sie unserem <span class="font-bold text-[#5865F2]">Discord</span> bei, um Feedback-Updates und Community-Lösungen zu verfolgen.',
      linkText: 'Jetzt beitreten!',
    },
    forms: {
      feedback: {
        title: 'Feedback',
        name: 'Name',
        subject: 'Betreff',
        description: 'Beschreibung',
        email: 'E-Mail',
        submit: 'Senden',
        submitting: 'Wird gesendet...',
        success: 'Feedback gesendet! Prüfen Sie Discord für Updates.',
        error: 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.',
        required: 'Erforderlich',
        invalidEmail: 'Ungültige E-Mail-Adresse',
        minChar: 'Muss mindestens 10 Zeichen lang sein',
      },
      support: {
        title: 'Support',
        category: 'Kategorie',
        appVersion: 'App-Version',
        reference: 'Referenzlink (Optional)',
        referenceHelper:
          "Laden Sie Screenshots oder Videos auf Google Drive oder einen anderen Cloud-Dienst hoch, setzen Sie den Link auf 'Jeder mit dem Link kann ansehen', und fügen Sie den Link dann hier ein.",
        required: 'Erforderlich',
        invalidEmail: 'Ungültige E-Mail-Adresse',
        minChar: 'Muss mindestens 10 Zeichen lang sein',
      },
    },
  },
};
