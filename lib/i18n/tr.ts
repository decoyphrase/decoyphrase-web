import { Translations } from './types';

export const trTranslations: Translations = {
  nav: {
    about: 'Hakkımızda',
    userGuide: 'Kullanıcı Rehberi',
    faq: 'SSS',
    brandKit: 'Marka Kiti',
    liveMetrics: 'Canlı Metrikler',
    decoyToken: '$DECOY',
    products: 'Ürünler',
    decoyGenerator: 'Yem Oluşturucu',
    permanentStorage: 'Kalıcı Depolama',
    permanentWeb: 'Kalıcı Web',
    donate: 'Bağış Yap',
    docs: 'Dokümanlar',
    connect: 'Bağlan',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: 'Geri Bildirim',
  },
  header: {
    login: 'Giriş Yap',
    menu: 'Menü',
    language: 'Dil',
  },
  footer: {
    columns: {
      decoyPhrase: 'Yem İfadesi',
      coreComponents: 'Temel Bileşenler',
      downloadGenerator: 'Oluşturucuyu İndir',
    },
    links: {
      privacy: 'Gizlilik Politikası',
      terms: 'Hizmet Koşulları',
      forum: 'Forum',
    },
    mission: {
      text: 'Misyonumuz dijital gizliliği korumak ve değişmez depolamayı sağlamaktır.',
      ctaText: 'Devrime Katıl',
    },
  },
  hero: {
    titlePart1: 'Dijital ayak izinizi',
    titlePart2: 'sonsuza dek',
    titleHighlight: 'koruyun',
    subtitle:
      'Verilerinizi güvence altına almak için merkeziyetsiz depolama ve gelişmiş yem teknolojisini kullanın.',
  },
  heroActions: {
    getStarted: 'Başla',
    watchTutorials: 'Eğitimleri İzle',
    generator: 'Oluşturucu',
    storage: 'Depolama',
  },
  features: {
    title: 'Temel',
    titleHighlight: 'Özelliklerimiz',
    subtitle: 'Verilerinizi ve kimliğinizi korumak için araçları keşfedin.',
    cards: {
      generator: {
        title: 'Yem Oluşturucu',
        description:
          'Davetsiz misafirlerin kafasını karıştırmak için gerçekçi sahte dosyalar oluşturun.',
      },
      storage: {
        title: 'Kalıcı Depolama',
        description: 'Verilerinizi Arweave blok zincirinde sonsuza dek saklayın.',
      },
      web: {
        title: 'Kalıcı Web',
        description: 'Sansürlenemeyen merkeziyetsiz web siteleri dağıtın.',
      },
    },
  },
  howItWorks: {
    title: 'Decoy Phrase Nasıl Çalışır',
    subtitle: 'Basit adımlar. Güçlü güvenlik. Sıfır emanet.',
    steps: {
      '1': {
        title: 'Tohum İfadenizi Dönüştürün',
        description:
          'Tohum ifadenizi bir yem metnine dönüştürün. Tamamen çevrimdışı olarak Decoy Phrase oluşturucu ile işlenir, sunucu yok, bulut yok ve veri toplama yok.',
      },
      '2': {
        title: 'İki Bağımsız Dosya Alın',
        description:
          'Normal görünen ve kullanılabilir bilgi içermeyen bir Yem Metni ve orijinal sırrı kurtarmak için tek anahtar görevi gören bir Haritalama Dosyası alırsınız — ikisi olmadan kurtarma imkansızdır.',
      },
      '3': {
        title: 'Onları Ayrı Saklayın',
        description:
          'Yem metni ve haritalama dosyasını ayrı saklayın. Yerel olarak farklı konumlarda veya Çoklu Parola Kasaları kullanarak kalıcı depolamada.',
      },
      '4': {
        title: 'Yalnızca Önemli Olduğunda Kurtarın',
        description:
          "Kurtarma gerektiğinde, orijinal tohum ifadenizi geri yüklemek için Decoy Phrase Oluşturucu'da her iki dosyayı da kullanın.",
      },
    },
  },
  prosCons: {
    title: 'Tohum İfadesi Yedeklemenin Artıları ve Eksileri',
    subtitle: 'Mükemmel tohum ifadesi yedeği yoktur — sadece farklı riskler vardır.',
    methods: {
      paper: {
        name: 'Kağıt Yedekleme',
        criteria: {
          free: 'Maliyet yok',
          easyAccess: 'Fiziksel erişim gerektirir',
          highSecurity: 'Kolayca çalınabilir, fotoğrafı çekilebilir veya kopyalanabilir',
          highPrivacy: 'Tamamen çevrimdışı saklanır',
          lossProof: 'Kaybolabilir veya yanlışlıkla atılabilir',
          destructionProof: 'Ateşe, suya ve eskimeye karşı savunmasız',
        },
      },
      metal: {
        name: 'Metal Yedekleme',
        criteria: {
          free: 'Metal plaka satın almayı gerektirir',
          easyAccess: 'Fiziksel erişim ve kurtarma gerektirir',
          highSecurity: 'Bulan herkes doğrudan kullanabilir',
          highPrivacy: 'Üçüncü taraf olmadan çevrimdışı saklanır',
          lossProof: 'Yine de kaybolabilir veya çalınabilir',
          destructionProof: 'Ateşe ve suya dayanıklı',
        },
      },
      'local-storage': {
        name: 'Yerel Depolama',
        criteria: {
          free: 'Mevcut donanımı kullanır',
          easyAccess: 'Cihaz, bağlantı noktası ve uyumluluk gerektirir',
          highSecurity: 'Kötü amaçlı yazılımlara veya hırsızlığa karşı savunmasız',
          highPrivacy: 'Üçüncü taraf olmadan yerel olarak saklanır',
          lossProof: 'Kolayca kaybolur, hasar görür veya bozulur',
          destructionProof: 'Donanım arızalarına karşı hassas',
        },
      },
      cloud: {
        name: 'Bulut Depolama',
        criteria: {
          free: 'Abonelik veya ücretli depolama gerektirir',
          easyAccess: 'Giriş yapılarak her yerden erişilebilir',
          highSecurity: 'Bilgisayar korsanlığı ve hesap hırsızlığı hedefi',
          highPrivacy: 'Üçüncü taraf sağlayıcılar tarafından kontrol edilir',
          lossProof: 'Yedekli yedeklemeler kayıp riskini azaltır',
          destructionProof: 'Hesaplar silinebilir veya dondurulabilir',
        },
      },
      encrypted: {
        name: 'Şifreli Dijital Dosya',
        criteria: {
          free: 'Ücretsiz araçlar kullanılarak oluşturulabilir',
          easyAccess: 'Parola ve doğru yazılım gerektirir',
          highSecurity: 'Yalnızca parola asla ifşa edilmezse güçlüdür',
          highPrivacy: 'Gizlilik depolama konumuna bağlıdır',
          lossProof: 'Parola kaybı kalıcı kayıp anlamına gelir',
          destructionProof: 'Dosya bozulması veya silinmesi ölümcüldür',
        },
      },
      shamir: {
        name: "Shamir'in Sır Paylaşımı",
        criteria: {
          free: 'Özel araçlar veya uyumlu cüzdanlar gerektirir',
          easyAccess: 'Eşik paylarının toplanmasını gerektirir',
          highSecurity: 'Bireysel paylar kriptografik olarak işe yaramaz',
          highPrivacy: 'Hiçbir taraf tam tohum ifadesini tutmaz',
          lossProof: 'Sınırlı pay kaybını tolere eder',
          destructionProof: 'Çok fazla payın kaybı kurtarmayı bozar',
        },
      },
      custodian: {
        name: 'Emanetçi',
        criteria: {
          free: 'Emanet hizmetleri genellikle ücret alır',
          easyAccess: 'Hesap erişimi yoluyla kolay kurtarma',
          highSecurity: 'Kullanıcılar tamamen üçüncü taraflara bağımlıdır',
          highPrivacy: 'Emanetçi görünürlüğe ve kontrole sahiptir',
          lossProof: 'Fonlar dondurulabilir veya el konulabilir',
          destructionProof: 'Şirket iflası toplam kayıp riski taşır',
        },
      },
      splitting: {
        name: 'Tohum Bölme',
        criteria: {
          free: 'Maliyet yok',
          easyAccess: 'Tüm parçaların toplanmasını gerektirir',
          highSecurity: 'Kısmi parçalar yine de bilgi sızdırır',
          highPrivacy: 'Genellikle düz metin olarak saklanır',
          lossProof: 'Bir parçayı kaybetmek kurtarmayı bozar',
          destructionProof: 'Fiziksel hasar kurtarmayı etkiler',
        },
      },
      lawyer: {
        name: 'Avukat',
        criteria: {
          free: 'Devam eden yasal ücretler gerektirir',
          easyAccess: 'Erişim yasal prosedürlere bağlıdır',
          highSecurity: 'İnsan güveni ve yasal risk içerir',
          highPrivacy: 'Avukat ham tohuma erişebilir',
          lossProof: 'İnsan hatasına veya anlaşmazlıklara tabidir',
          destructionProof: 'Belgeler kaybolabilir veya imha edilebilir',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: 'Ücretsiz ve kar amacı gütmeyen sistem',
          easyAccess:
            'Kalıcı depolama ve indirilebilir uygulamalar aracılığıyla her zaman kurtarılabilir',
          highSecurity: 'Gerçek tohum asla doğrudan saklanmaz',
          highPrivacy: 'Yem metni kendi başına anlamsızdır',
          lossProof: 'Tek bir parça saldırganlar için işe yaramaz',
          destructionProof: 'Kalıcı depolamada yedeklenebilir',
        },
      },
    },
    criteriaLabels: {
      free: 'Ücretsiz',
      easyAccess: 'Kolay Erişim',
      highSecurity: 'Yüksek Güvenlik',
      highPrivacy: 'Yüksek Gizlilik',
      lossProof: 'Kayıp Korumalı',
      destructionProof: 'İmha Korumalı',
    },
  },
  securityDemo: {
    title: 'Ayrım Yoluyla Güvenlik',
    subtitle: 'Haritalama dosyası yoksa kurtarma yok. Yem metni yoksa erişim yok.',
    annotations: {
      decoy:
        'Orijinal hassas verilerinizin gizlenmiş hali olarak işlev gören bir yem metnine sahip olmalısınız.',
      mapping:
        'Yem metinden orijinal verileri yeniden oluşturmak için gereken dönüşüm kurallarını içeren haritalama dosyasına sahip olmalısınız.',
      result: 'Oluşturulan tohum ifadeniz burada görünecek',
      clickToGenerate: 'Tohum ifadesi oluşturmak için tıklayın',
    },
    buttons: {
      simulateDecoy: 'Yem metni yerleştirmeyi simüle etmek için tıklayın',
      placeDecoy: '✓ Yem metni yerleştirildi',
      simulateMapping: 'Haritalama dosyası yüklemeyi simüle etmek için tıklayın',
      uploadMapping: 'Haritalamayı Güncelle',
      mappingLoaded: 'Haritalama Yüklendi',
      updateMapping: 'Yeni haritalama dosyasını güncelle',
      generate: 'Sonuç Oluştur',
      decrypting: 'Şifre çözülüyor...',
    },
    labels: {
      decoyText: 'Yem metni',
      asciiText: 'ASCII metni',
      resultPlaceholder: 'Sonuç burada görünecek...',
    },
  },
  faq: {
    title: 'Sıkça Sorulan Sorular',
    subtitle:
      'Decoy Phrase hakkında aklınıza takılabilecek bazı sorular. Aradığınız cevabı bulamadınız mı?',
    chatAi: "Decoy Phrase hakkında AI'ya Sor!",
    categories: {
      general: 'Genel',
      products: 'Ürünler',
      security: 'Güvenlik ve Gizlilik',
    },
    items: {
      'gen-1': {
        question: 'Decoy Phrase Nedir?',
        answer:
          'Decoy Phrase, tohum ifadeleri (seed phrases) ve hassas metinleri — orijinal verileri asla saklamadan — korumak ve yedeklemek için "çevrimdışı öncelikli" bir yöntemdir.\n\nSırları, zararsız görünen, sıradan metne dönüştürür; kurtarma işlemi yalnızca özel bir haritalama dosyası ve dönüştürülmüş metnin birleştirilmesiyle mümkündür.\n\nUzun vadeli dayanıklılık için, yem dosyalar ve haritalama dosyaları, doğrudan Arweave blok zincirine bağlı Decoy Phrase Kalıcı Depolama (Permanent Storage) aracılığıyla sonsuza kadar saklanabilir — kaybolmamalarını, değiştirilmemelerini veya silinmemelerini garanti eder.',
      },
      'gen-2': {
        question: 'Decoy Phrase Ücretsiz mi?',
        answer:
          'Evet. Decoy Phrase tamamen ücretsizdir ve kar amacı gütmeyen bir girişim olarak faaliyet göstermektedir. Yem metin oluşturma, haritalama dosyası oluşturma ve çevrimdışı kurtarma dahil tüm temel özellikler ücretsizdir.\n\nDecoy Phrase Kalıcı Depolama için depolama alanı bağışlarla desteklenmektedir. Bu bağışlar, Arweave blok zincirindeki kalıcı depolama kapasitesinin zaman içinde genişletilmesini finanse etmek için kullanılır. Blok zincirinde halihazırda depolanmış olan tüm dosyalar, hizmetin gelecekteki durumundan bağımsız olarak sonsuza kadar erişilebilir kalacaktır.',
      },
      'gen-3': {
        question: "Decoy Phrase'de Kalıcı Olan Nedir?",
        answer:
          "Decoy Phrase'de kalıcılık kavramı, Arweave üzerine inşa edilen Kalıcı Web (Permanent Web) ve Kalıcı Depolama (Permanent Storage) tarafından sağlanan web sitesi, alan adı ve saklanan veriler için geçerlidir.",
      },
      'gen-4': {
        question: 'Decoy Phrase Verilerimi Saklıyor mu?',
        answer:
          "Hayır. Decoy Phrase, tohum ifadenizi veya orijinal hassas verilerinizi asla saklamaz. Yem metin ve haritalama dosyası oluşturma süreci, Decoy Phrase Oluşturucu kullanılarak tamamen çevrimdışı çalıştırılır. Sonuç olarak, sırlarınızın herhangi bir sunucuda depolanması riski yoktur.\n\nDosyalar Kalıcı Depolama'da saklandığında, parolalar, dosya içeriği ve dosya adları dahil olmak üzere tüm veriler Arweave blok zincirine gönderilmeden önce istemci tarafında şifrelenir.",
      },
      'gen-5': {
        question: 'Hem Haritalama Dosyasını Hem de İlgili Yem Metni Kaybedersem Ne Olur?',
        answer:
          "Hem haritalama dosyasını hem de karşılık gelen yem metni kaybederseniz, orijinal verileriniz kalıcı olarak kurtarılamaz hale gelir. Decoy Phrase, kasıtlı olarak herhangi bir sıfırlama, yedekleme veya kurtarma mekanizması olmadan tasarlanmıştır ve orijinal sırlarınızı asla saklamaz, bu da her iki bileşen olmadan kurtarmayı teknik olarak imkansız hale getirir.\n\nDecoy Phrase'in Kalıcı Depolama sunmasının nedeni budur: Yem ve haritalama dosyalarının silinemeyen, değiştirilemeyen veya sessizce kaybolmayan değişmez uzun vadeli depolamada saklanmasına izin vererek kaza sonucu kayıp riskini azaltmak, aynı zamanda tüm dosyaların istemci tarafında şifrelendiği ve tam kontrolün kullanıcıda kaldığı sıfır bilgi (zero-knowledge) ve velayetsiz (non-custodial) tasarımı korumaktır.",
      },
      'gen-6': {
        question: "Decoy Phrase'i Kullanmak İçin Çevrimiçi Olmam Gerekiyor mu?",
        answer:
          'Duruma göre değişir.\n\nDecoy Phrase Oluşturucu tamamen çevrimdışı çalışır. Tüm ana süreçler — yem metin oluşturma, haritalama dosyası oluşturma ve veri kurtarma — herhangi bir internet bağlantısı olmadan tamamen cihazınızda yürütülür.\n\nAncak, Kalıcı Depolama, şifrelenmiş dosyaları sıfır bilgi mimarisi kullanarak Arweave blok zincirinde sakladığı için çevrimiçi bağlantı gerektirir.',
      },
      'gen-7': {
        question:
          'Tohum İfademi veya Hassas Verilerimi Üçüncü Bir Tarafın Yardımı Olmadan Kurtarabilir miyim?',
        answer:
          'Evet. Decoy Phrase, aracılar olmadan tamamen özerk kullanım için tasarlanmıştır. Yem metniniz ve ilgili haritalama dosyanızı kullanarak sistem, orijinal verilerinizi doğrudan cihazınızda, Decoy Phrase Oluşturucu aracılığıyla tamamen çevrimdışı olarak kurtarır — hiçbir üçüncü taraf dahil olmaz.',
      },
      'gen-8': {
        question: 'Yem Metni Başkalarıyla Paylaşmak Güvenli mi?',
        answer:
          'Evet, güvenlidir.\n\nYem metin, sıradan görünecek şekilde tasarlanmıştır ve tek başına kullanılabilir bir hassas bilgi içermez. İlgili haritalama dosyası olmadan orijinal verileri kurtarmak için kullanılamaz. Benzer şekilde, ilgili yem metni olmayan bir haritalama dosyası da kullanılamaz. Bu nedenle, yalnızca yem metni paylaşmak sırrınızı ifşa etmez.',
      },
      'gen-9': {
        question: 'Decoy Phrase, Parola Yöneticisinden Nasıl Farklıdır?',
        answer:
          "Decoy Phrase çevrimiçi bir parola yöneticisi değildir.\n\nTohum ifadeleri, parolalar veya diğer hassas verilerin dönüştürülmesi, Decoy Phrase Oluşturucu aracılığıyla tamamen çevrimdışı gerçekleştirilir.\n\nKalıcı Depolama, yalnızca çoklu parola yönetimi özelliği kullanılarak farklı depolama alanlarına ayrılmış yem metin ve haritalama dosyalarını saklamak için kullanılır.\n\nKalıcı Depolama'da saklanan tüm dosyalar istemci tarafında şifrelenir. İfşa olsalar bile, şifre çözme anahtarları yalnızca kullanıcı tarafından tutulur ve verileri başkaları için kullanılamaz hale getirir.\n\nŞifrelenmiş parolaları sunucularda veya bulutta saklayan parola yöneticilerinin aksine, Decoy Phrase, hassas verilerinizin nasıl ve nerede saklanacağı ve kurtarılacağı konusunda size tam kontrol sağlar.",
      },
      'prod-1': {
        question: 'Decoy Phrase Oluşturucu Nedir ve Bileşenleri Nelerdir?',
        answer:
          "Decoy Phrase Oluşturucu, Haritalama Yapıcı (Mapping Maker) ve Metin Oluşturucu'yu (Text Generator) birleştiren Decoy Phrase sistemindeki merkezi bir araçtır.\n\nHaritalama Yapıcı, tohum ifadeleri veya hassas verileri sıradan yem metne dönüştürür ve kurtarma anahtarı görevi gören bir haritalama dosyası oluştururken, Metin Oluşturucu, orijinal verileri yem metinden kurtarmak için bu haritalama dosyasını kullanır.\n\nTüm süreçler, hiçbir hassas verinin herhangi bir sunucuya gönderilmemesini sağlamak için internet bağlantısı olmadan tamamen kullanıcının cihazında çalıştırılır.",
      },
      'prod-2': {
        question: 'Haritalama Dosyası Nedir ve Neden Ayrı Saklanmalıdır?',
        answer:
          'Haritalama Dosyası, teknik bilgiler içeren ve orijinal verileri yem metinden kurtarmak için tek anahtar görevi gören özel bir dosyadır (.json).\n\nDoğrudan hassas veri içermez ve ilgili yem metni olmadan bir anlam ifade etmez. Bu nedenle, haritalama dosyası yem metinden ayrı saklanmalıdır. Bu ayrım, tek bir dosyanın sırrı ifşa etmesini önler. Her ikisinin doğru kombinasyonu olmadan kurtarma imkansızdır — yani hiçbir tekil bileşen kendi başına istismar edilebilecek hassas bilgiler içermez.',
      },
      'prod-3': {
        question: 'Kalıcı Depolama Nasıl Çalışır ve Hangi Dosya Formatları Desteklenir?',
        answer:
          'Kalıcı Depolama, yem metin ve haritalama dosyalarını kalıcı ve değişmez bir şekilde saklayan Arweave tabanlı bir depolama katmanıdır.\n\nGeleneksel sunuculara bağlı kalmadan uzun vadeli metin yedeklemeleri için "bir kez yaz, sonsuza kadar oku" depolaması olarak tasarlanmıştır.\n\nKalıcı Depolama yalnızca .txt, .md ve .json gibi metin tabanlı dosyaları destekler. Resimler, videolar veya ses dosyaları gibi diğer formatlar desteklenmez.\n\nTüm yüklemeler Paylaşılan Ana Cüzdan (Shared Master Wallet) kullanılarak tek bir hesap üzerinden yönetilir, bu nedenle kullanıcıların bir blok zinciri cüzdanı oluşturmasına veya yönetmesine ya da blok zinciri mekaniğini anlamasına gerek yoktur. Blok zinciri karmaşıklığı basit bir kullanıcı arayüzünün arkasına gizlenmiştir.',
      },
      'prod-4': {
        question: 'Çoklu Parola Kasaları (Multi-Password Vaults) Nedir ve Nasıl Kullanılır?',
        answer:
          "Çoklu Parola Kasaları, tek bir hesabın her biri farklı bir parolayla korunan birden fazla izole edilmiş depolama kasası içermesine izin veren bir Kalıcı Depolama özelliğidir. Örneğin, bir kullanıcı Yem Metni Kasa A'da ve Haritalama Dosyasını Kasa B'de her biri için ayrı parolalar kullanarak saklayabilir.\n\nHer kasa mantıksal olarak yalıtılmıştır, yani bir kasaya erişim diğerlerine erişim izni vermez. Sonuç olarak, bir parolanın ele geçirilmesi yalnızca bir kasayı ifşa eder ve diğer hassas dosyaları güvende tutar.",
      },
      'prod-5': {
        question: 'Decoy Phrase Oluşturucu Farklı Cihazlarda Kullanılabilir mi?',
        answer:
          'Evet. Decoy Phrase Oluşturucu birden fazla platformda mevcuttur. Başlıca masaüstü işletim sistemlerinde (Windows, macOS, Linux) ve Android cihazlarda çalışabilir.\n\nTüm işlemler yerel cihazda çevrimdışı yürütüldüğünden, Decoy Phrase internet erişimi olmayan ortamlarda veya "hava boşluklu" (air-gapped) bilgisayarlar gibi yüksek güvenlikli sistemlerde de kullanılabilir.',
      },
      'prod-6': {
        question:
          'Kullanıcıların Bu Özellikleri Kullanmak İçin Blok Zincirini Anlaması Gerekiyor mu?',
        answer:
          "Hayır. Decoy Phrase, kalıcı depolama için perde arkasında blok zinciri teknolojisini (Arweave) kullansa da, arayüz kullanıcıların blok zinciriyle ilgili herhangi bir karmaşıklıkla uğraşmasına gerek kalmayacak şekilde tasarlanmıştır.\n\nKullanıcılar, Paylaşılan Ana Cüzdanı kullanarak sadece metinlerini ve parolalarını yönetmeye odaklanırlar; kendi blok zinciri cüzdanlarını oluşturmaları, saklamaları veya yönetmeleri gerekmez. Sonuç olarak, Decoy Phrase'in tüm özellikleri, blok zinciri teknolojisi hakkında önceden herhangi bir bilgiye gerek kalmadan kullanılabilir.",
      },
      'sec-1': {
        question: 'Sistem Kullanıcı Verilerini Nasıl Korur?',
        answer:
          'Decoy Phrase, "çevrimdışı öncelikli" ve sıfır bilgi ilkelerini uygular; bu, hassas verilerin tüm dönüştürme ve şifreleme işlemlerinin internet bağlantısı veya herhangi bir sunucuya gerek kalmadan tamamen kullanıcının cihazında gerçekleştirildiği anlamına gelir.\n\nVeriler, Kalıcı Depolama\'da saklanmadan önce istemci tarafında işlenir ve şifrelenir (örneğin, AES-256-GCM kullanılarak), bu nedenle genel depolama yalnızca kullanıcının anahtarları olmadan okunamayan şifrelenmiş verileri içerir.\n\nEk olarak, hiçbir sunucuda tohum ifadesi veya orijinal hassas veri saklanmaz, bu da saldırılar için yüksek değerli bir hedef olabilecek merkezi bir kasanın olmadığı anlamına gelir. Bu yaklaşım, üçüncü taraflara olan bağımlılığı ortadan kaldırır ve güvenliği, güvene dayalı korumadan dış erişimi tasarım gereği imkansız kılan teknik bir mimariye kaydırır.',
      },
      'sec-2': {
        question: 'Decoy Phrase Kalıcı Depolamadaki Dosyalarımı Silebilir mi?',
        answer:
          "Hayır. Decoy Phrase, Kalıcı Depolama'da saklandıktan sonra dosyalarınızı silemez. Kalıcı Depolama, verilerin tasarım gereği değiştirilemez olduğu Arweave blok zinciri üzerine kurulmuştur. Bir dosya yüklendiğinde, Decoy Phrase — veya başka herhangi biri — tarafından kaldırılamaz, değiştirilemez veya silinemez.",
      },
      'sec-3': {
        question: 'Sistem Hassas Verilerin Saklanmadığını Nasıl Garanti Eder?',
        answer:
          'Decoy Phrase, "dönüştür ve ayır" ilkesini kullanır. Orijinal veriler çevrimdışı olarak rastgele görünen ve hiçbir gizli anlam içermeyen sıradan yem metne dönüştürülür. Oluşturulan haritalama dosyası teknik kurtarma bilgilerini içerir ancak orijinal hassas verileri içermez.\n\nBu iki bileşen ayrı ayrı saklanmalıdır (örneğin, farklı yerlerde veya farklı parolalarla korunarak). Sonuç olarak, hiçbir tekil bileşen orijinal sırrı içermez. Haritalama dosyası olmadan yem metin işe yaramaz; ve yem metin olmadan haritalama dosyası anlamsızdır.\n\nBu yöntem, orijinal hassas verilerin asla doğrudan uygulamada veya herhangi bir sunucuda saklanmamasını sağlar.',
      },
      'sec-4': {
        question: 'Sistem Kalıcı Depolamada Neyi Bilir ve Neyi Bilmez?',
        answer:
          'Decoy Phrase sıfır bilgidir, yani sistem kullanıcı verilerinin içeriğini asla bilmez.\n\nTohum ifadelerini, parolaları veya orijinal dosya içeriğini göremez çünkü tüm veriler yüklenmeden önce kullanıcının yerel tarayıcısında tamamen şifrelenir.\n\nSisteme görünen tek bilgi, kullanıcı adı (genel tanımlayıcı olarak kullanılır) ve saklanan dosya sayısı gibi hassas olmayan genel meta verilerdir.\n\nYem metin ile haritalama dosyası arasındaki ilişki de sistem tarafından bilinmez. Kısacası, kullanıcı içeriği ve sırları asla ifşa edilmez; yalnızca şifrelenmiş veriler ve sınırlı genel meta veriler mevcuttur.',
      },
      'sec-5': {
        question:
          "Decoy Phrase'in Güvenlik Yaklaşımı Geleneksel Sistemlerden (Parola Yöneticileri Gibi) Nasıl Farklıdır?",
        answer:
          "• Orijinal Veri Depolama: Geleneksel parola yöneticileri, kullanıcı sırlarını (parolalar, tohumlar vb.) şifrelenmiş bir kasa içinde saklar. Decoy Phrase orijinal verileri hiç saklamaz.\n\n• Mimari: Parola yöneticileri genellikle senkronizasyon için sunuculara veya bulut altyapısına güvenir. Decoy Phrase çevrimdışı önceliklidir, arka ucu yoktur ve üçüncü taraflara bağımlı değildir.\n\n• Güvenlik Modeli: Parola yöneticilerinde güvenlik, kasa şifrelemesine ve ana parolaya bağlıdır; kasa veya ana parola ele geçirilirse tüm veriler ifşa olabilir. Decoy Phrase'in böyle bir kasası yoktur. Tek bir dosyanın (ister yem metin ister haritalama dosyası) sızdırılması, orijinal verileri kurtarmak için yeterli değildir çünkü her bileşenin tek başına bir değeri yoktur.\n\n• Tek Arıza Noktası: Parola yöneticisi kasası yüksek değerli bir hedeftir. Decoy Phrase'in sırları içeren tek bir nesnesi yoktur; her iki bileşen (yem metin ve haritalama dosyası) birlikte ele geçirilmediği sürece, saldırılacak ana bir arıza noktası yoktur.",
      },
      'sec-6': {
        question: 'Yem Dosyası veya Haritalama Dosyası Başkasının Eline Geçerse Ne Olur?',
        answer:
          '• Yalnızca yem metin ifşa edilirse, hiçbir sır açığa çıkmaz. Yem metin, hassas bir anlamı olmayan sıradan verilerdir ve haritalama dosyası olmadan kullanılamaz.\n\n• Yalnızca haritalama dosyası ifşa edilirse, orijinal veriler güvende kalır. Haritalama dosyası yalnızca teknik karakter desenleri içerir, gizli içerik barındırmaz ve ilgili yem metni olmadan işe yaramaz.\n\n• Orijinal veriler, ancak her iki bileşen birlikte ifşa edilirse kurtarılabilir. Bu durumda, saldırgan gerekli her iki bileşene de sahip olduğu için güvenlik tamamen çöker.',
      },
      'sec-7': {
        question: 'Dosyaları Ayırmamanın Riski Nedir?',
        answer:
          'Ana risk, yem metin ve haritalama dosyası ayrı saklanmadığında (örneğin, aynı yerde veya aynı parolayla korunarak) ortaya çıkar.\n\nBu gerçekleşirse, her iki bileşene de erişimi olan herkes orijinal verileri doğrudan kurtarabilir. Başka bir deyişle, sistem yalnızca iki bileşen yanlışlıkla bir araya getirildiğinde başarısız olur.\n\nBu nedenle sıkı ayırma esastır: yem metni ve haritalama dosyalarını farklı yerlerde saklayın veya farklı parolalarla koruyun. Uygun şekilde ayrıldığında, böyle bir başarısızlık son derece düşük ihtimaldir.',
      },
    },
  },
  donate: {
    title: "Decoy Phrase'i Destekleyin",
    description:
      'Decoy Phrase kullanımı ücretsizdir ve kar amacı gütmeyen bir girişim olarak oluşturulmuştur. Ödeme duvarı veya zorunlu abonelik yoktur. Bağışlar isteğe bağlı ve şeffaftır.',
    link: 'Canlı proje metriklerini ve halka açık verileri burada görün!',
    cards: {
      storage: {
        title: 'Depolama Fonu',
        description:
          'Bu bağış doğrudan depolama cüzdanına gider ve otomatik olarak depolama vakfına eklenerek kalıcı depolamayı sürdürülebilir bir şekilde finanse eder ve mevcut kapasiteyi artırır.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Borsadan AR gönder</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>AR token satın al</li>
      <li>Gönder veya Çek bölümüne git</li>
      <li>On-Chain Çekimi seç</li>
      <li>AR (Arweave) seç</li>
      <li>Decoy Phrase Cüzdan adresini yapıştır</li>
      <li>Arweave ağını seç</li>
      <li>Miktarı gir</li>
      <li>Çekimi onayla</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">AR transferleri genellikle 1–5 dakika sürer.</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Wander Wallet'tan AR gönder</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Wander Wallet oluştur</li>
      <li>Mevcut ödeme yöntemiyle AR token satın al</li>
      <li>Gönder'e tıkla</li>
      <li>Decoy Phrase Cüzdan adresini yapıştır</li>
      <li>Miktarı gir</li>
      <li>İşlemi onayla</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: 'Ekip Fonu',
        description:
          'Bu bağış, geliştirme, pazarlama ve topluluk girişimleri dahil olmak üzere Decoy Phrase ekibini ve ekosistemini destekler. Fonlar gerektiğinde depolamaya da tahsis edilebilir.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Borsadan stablecoin gönder</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>USDT, USDC veya desteklenen başka bir stablecoin satın al</li>
      <li>Gönder veya Çek bölümüne git</li>
      <li>On-Chain Çekimi seç</li>
      <li>Göndermek istediğin stablecoin'i seç</li>
      <li>Decoy Phrase cüzdan adresini yapıştır (seçilen ağ ile eşleştiğinden emin ol)</li>
      <li>Cüzdan adresiyle eşleşen ağı seç</li>
      <li>Miktarı gir</li>
      <li>Çekimi onayla</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">DEX'ten stablecoin gönder</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Bir stablecoin veya seçilen ağın yerel tokenını satın al</li>
      <li>Gönder veya Çek bölümüne git</li>
      <li>Ağı seç veya göndermek istediğin coini seç</li>
      <li>Token ve cüzdan ağlarına göre Decoy Phrase cüzdan adresini yapıştır</li>
      <li>Miktarı gir</li>
      <li>İşlemi onayla</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: 'Depolama Hesaplayıcısı',
    info: {
      p1: '12 kelimelik bir tohum ifadesi haritalama dosyası için ortalama dosya boyutu ~50 KiB\'dir. Yüklemeler şu anda <strong class="text-foreground">Turbo (ar.io tarafından sağlanmaktadır)</strong> kullanmaktadır ve 105 KiB altındaki dosyaların ücretsiz yüklenmesine izin vermektedir, Turbo kullanılamaz hale gelirse doğrudan Arweave ücreti hesaplamaları yedek olarak önerilir.',
      p2: 'Kalıcı depolamada saklanan tüm veriler, kapasiteye ulaşılsa ve gelecekte bağış yapılmasa bile sonsuza kadar erişilebilir kalırken, ek kapasite gelecekteki Decoy Phrase kullanıcılarını ve nesillerini desteklemeyi amaçlamaktadır.',
    },
    labels: {
      donationAmount: 'Bağış Miktarı',
      arweaveEquivalent: 'Arweave Eşdeğeri',
      winstonAmount: 'Winston Miktarı',
      capacityIncrease: 'Bu bağış kalıcı depolama kapasitesini şu kadar artırır:',
      files: 'Dosyalar',
      calculate: 'Hesapla',
      currentBalance: 'Güncel Bakiye',
      howToDonate: 'Nasıl Bağış Yapılır?',
      copied: 'Kopyalandı!',
      addressCopied: 'Adres kopyalandı!',
      copyAddress: 'Cüzdan adresini kopyala',
      selectNetwork: 'Ağ seç',
      walletAddress: 'Cüzdan adresi',
    },
  },
  metrics: {
    title: 'Canlı Decoy Phrase İstatistikleri',
    labels: {
      totalUsers: 'Toplam Kullanıcılar',
      totalFilesStored: 'Toplam Saklanan Dosyalar',
      totalFilesLocked: 'Toplam Kilitli Dosyalar',
      totalDonations: 'Toplam Bağışlar',
      remainingCapacity: 'Kalan Dosya Kapasitesi',
      downloadTotal: 'Toplam Decoy Phrase Oluşturucu İndirmeleri',
    },
    status: {
      live: 'Canlı',
      reconnecting: 'Yeniden bağlanıyor...',
      disconnected: 'Bağlantı kesildi',
    },
    filters: {
      day: 'G',
      month: 'A',
      quarter: 'Ç',
      year: 'Y',
      all: 'Tümü',
    },
  },
  download: {
    title: 'Orijinal tohum ifadenizi istediğiniz zaman dönüştürün ve kurtarın.',
    subtitle:
      'Tohum ifadenizi özelleştirilebilir bir yem metnine dönüştürün ve özel haritalama dosyanızı kullanarak orijinalini istediğiniz zaman kurtarın. Her şey tamamen çevrimdışı çalışır – hiçbir tohum ifadesi saklanmaz, yüklenmez veya paylaşılmaz.',
    cta: {
      about: 'Decoy Oluşturucu Hakkında',
      tutorials: 'Eğitimleri İzle',
    },
  },
  feedback: {
    title: 'Geri Bildirim ve Destek',
    description:
      'Decoy Oluşturucuyu geliştirmemize yardımcı olmak için önerilerinizi paylaşın veya sorunları bildirin. Lütfen tohum ifadeleri veya hassas veriler göndermeyin.',
    discord: {
      text: 'Geri bildirim güncellemelerini ve topluluk çözümlerini takip etmek için <span class="font-bold text-[#5865F2]">Discordumuza</span> katılın.',
      linkText: 'Şimdi Katıl!',
    },
    forms: {
      feedback: {
        title: 'Geri Bildirim',
        name: 'İsim',
        subject: 'Konu',
        description: 'Açıklama',
        email: 'E-posta',
        submit: 'Gönder',
        submitting: 'Gönderiliyor...',
        success: "Geri bildirim gönderildi! Güncellemeler için Discord'u kontrol edin.",
        error: 'Gönderilemedi. Lütfen tekrar deneyin.',
        required: 'Gerekli',
        invalidEmail: 'Geçersiz e-posta adresi',
        minChar: 'En az 10 karakter olmalı',
      },
      support: {
        title: 'Destek',
        category: 'Kategori',
        appVersion: 'Uygulama Sürümü',
        reference: 'Referans Bağlantısı (İsteğe Bağlı)',
        referenceHelper:
          "Ekran görüntülerini veya videoları Google Drive'a veya başka bir bulut hizmetine yükleyin, bağlantıyı 'bağlantıya sahip olan herkes görüntüleyebilir' olarak ayarlayın ve bağlantıyı buraya yapıştırın.",
        required: 'Gerekli',
        invalidEmail: 'Geçersiz e-posta adresi',
        minChar: 'En az 10 karakter olmalı',
      },
    },
  },
};
