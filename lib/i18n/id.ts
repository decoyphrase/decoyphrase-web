import { Translations } from './types';

export const idTranslations: Translations = {
  nav: {
    about: 'Tentang Kami',
    userGuide: 'Panduan Pengguna',
    faq: 'FAQ',
    brandKit: 'Brand Kit',
    liveMetrics: 'Metrik Langsung',
    decoyToken: '$DECOY',
    products: 'Produk',
    decoyGenerator: 'Pembuat Decoy',
    permanentStorage: 'Penyimpanan Permanen',
    permanentWeb: 'Web Permanen',
    donate: 'Donasi',
    docs: 'Dokumentasi',
    connect: 'Hubungkan',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: 'Umpan Balik',
  },
  header: {
    login: 'Masuk',
    menu: 'Menu',
    language: 'Bahasa',
  },
  footer: {
    columns: {
      decoyPhrase: 'Decoy Phrase',
      coreComponents: 'Komponen Utama',
      downloadGenerator: 'Unduh Generator',
    },
    links: {
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat Ketentuan',
      forum: 'Forum Komunitas',
    },
    mission: {
      text: 'Decoy Phrase adalah inisiatif nirlaba yang menghapus pihak ketiga dari perlindungan seed phrase. Donasi mendukung penyimpanan permanen dan pengembangan, menjaga sistem tetap gratis dan dapat diwariskan.',
      ctaText: 'Untuk mendukung Decoy Phrase, Anda bisa berkontribusi melalui donasi.',
    },
  },
  hero: {
    titlePart1: 'Cara gratis, permanen, dan aman untuk',
    titlePart2: 'melindungi, dan mencadangkan',
    titleHighlight: 'seed phrase Anda',
    subtitle:
      'Tidak ada seed yang disimpan. Tahan hilang. Tidak dapat dihancurkan. Tanpa pihak ketiga.',
  },
  heroActions: {
    getStarted: 'Mulai Sekarang',
    watchTutorials: 'Tonton Tutorial',
    generator: 'Decoy Phrase Generator',
    storage: 'Penyimpanan Permanen',
  },
  features: {
    title: 'Apa yang Decoy Phrase',
    titleHighlight: 'Tawarkan',
    subtitle: 'Sistem Lengkap untuk Perlindungan Rahasia Permanen.',
    cards: {
      generator: {
        title: 'Decoy Phrase Generator',
        description:
          'Mengubah seed phrase asli Anda menjadi teks biasa yang tidak berbahaya—sepenuhnya offline. Alat yang sama digunakan untuk membuat file mapping dan memulihkan rahasia asli ketika keduanya tersedia.',
      },
      storage: {
        title: 'Penyimpanan Permanen',
        description:
          'Simpan teks decoy dan file mapping dengan aman di penyimpanan permanen tanpa bergantung pada penyedia cloud, kustodian, atau langganan.',
      },
      web: {
        title: 'Web Permanen',
        description:
          'Dibangun di web permanen, di mana data tidak dapat diubah, disensor, atau dihapus—dirancang untuk bertahan selamanya.',
      },
    },
  },
  howItWorks: {
    title: 'Cara Kerja Decoy Phrase',
    subtitle: 'Langkah sederhana. Keamanan kuat. Nol kustodi.',
    steps: {
      '1': {
        title: 'Ubah Seed Phrase Anda',
        description:
          'Ubah seed phrase Anda menjadi teks decoy. Diproses sepenuhnya offline dengan decoy phrase generator, tanpa server, tanpa cloud, dan tanpa pengumpulan data.',
      },
      '2': {
        title: 'Terima Dua File Terpisah',
        description:
          'Anda menerima Teks Decoy yang terlihat normal dan tidak berisi informasi yang dapat digunakan, serta File Mapping yang berfungsi sebagai satu-satunya kunci untuk memulihkan rahasia asli—tanpa keduanya, pemulihan tidak mungkin dilakukan.',
      },
      '3': {
        title: 'Simpan Secara Terpisah',
        description:
          'Simpan teks decoy dan file mapping secara terpisah. Secara lokal di lokasi berbeda atau di penyimpanan permanen menggunakan Brankas Multi-Sandi.',
      },
      '4': {
        title: 'Pulihkan Hanya Saat Diperlukan',
        description:
          'Ketika pemulihan diperlukan, gunakan kedua file di Decoy Phrase Generator untuk mengembalikan seed phrase asli Anda.',
      },
    },
  },
  prosCons: {
    title: 'Kelebihan dan Kekurangan Pencadangan Seed Phrase',
    subtitle: 'Tidak ada pencadangan seed phrase yang sempurna—hanya risiko yang berbeda.',
    methods: {
      paper: {
        name: 'Kertas',
        criteria: {
          free: 'Tidak ada biaya',
          easyAccess: 'Memerlukan akses fisik',
          highSecurity: 'Mudah dicuri, difoto, atau disalin',
          highPrivacy: 'Disimpan sepenuhnya offline',
          lossProof: 'Bisa salah taruh atau terbuang tidak sengaja',
          destructionProof: 'Rentan terhadap api, air, dan penuaan',
        },
      },
      metal: {
        name: 'Logam',
        criteria: {
          free: 'Memerlukan pembelian pelat logam',
          easyAccess: 'Memerlukan akses fisik dan pengambilan',
          highSecurity: 'Siapapun yang menemukannya bisa langsung menggunakannya',
          highPrivacy: 'Disimpan offline tanpa pihak ketiga',
          lossProof: 'Masih bisa hilang atau dicuri',
          destructionProof: 'Tahan terhadap api dan air',
        },
      },
      'local-storage': {
        name: 'Penyimpanan Lokal',
        criteria: {
          free: 'Menggunakan perangkat keras yang ada',
          easyAccess: 'Memerlukan perangkat, port, dan kompatibilitas',
          highSecurity: 'Rentan terhadap malware atau pencurian',
          highPrivacy: 'Disimpan lokal tanpa pihak ketiga',
          lossProof: 'Mudah hilang, rusak, atau korup',
          destructionProof: 'Rentan terhadap kerusakan perangkat keras',
        },
      },
      cloud: {
        name: 'Penyimpanan Cloud',
        criteria: {
          free: 'Memerlukan langganan atau penyimpanan berbayar',
          easyAccess: 'Dapat diakses dari mana saja dengan login',
          highSecurity: 'Target peretasan dan pengambilalihan akun',
          highPrivacy: 'Dikelola oleh penyedia pihak ketiga',
          lossProof: 'Pencadangan redundan mengurangi risiko kehilangan',
          destructionProof: 'Akun bisa dihapus atau dibekukan',
        },
      },
      encrypted: {
        name: 'File Terenkripsi',
        criteria: {
          free: 'Bisa dibuat menggunakan alat gratis',
          easyAccess: 'Memerlukan kata sandi dan perangkat lunak yang tepat',
          highSecurity: 'Kuat hanya jika kata sandi tidak pernah terekspos',
          highPrivacy: 'Privasi tergantung pada lokasi penyimpanan',
          lossProof: 'Kehilangan kata sandi berarti kehilangan permanen',
          destructionProof: 'Korupsi atau penghapusan file berakibat fatal',
        },
      },
      shamir: {
        name: "Shamir's Secret Sharing",
        criteria: {
          free: 'Memerlukan alat khusus atau dompet yang kompatibel',
          easyAccess: 'Memerlukan pengumpulan bagian ambang batas',
          highSecurity: 'Bagian tunggal tidak berguna secara kriptografi',
          highPrivacy: 'Tidak ada pihak yang memegang seed phrase penuh',
          lossProof: 'Mentolerir kehilangan bagian terbatas',
          destructionProof: 'Kehilangan banyak bagian memutus pemulihan',
        },
      },
      custodian: {
        name: 'Kustodian',
        criteria: {
          free: 'Layanan kustodi biasanya mengenakan biaya',
          easyAccess: 'Pemulihan mudah melalui akses akun',
          highSecurity: 'Pengguna bergantung sepenuhnya pada pihak ketiga',
          highPrivacy: 'Kustodian memiliki visibilitas dan kendali',
          lossProof: 'Dana bisa dibekukan atau disita',
          destructionProof: 'Kegagalan perusahaan berisiko kehilangan total',
        },
      },
      splitting: {
        name: 'Pemisahan Seed',
        criteria: {
          free: 'Tidak ada biaya',
          easyAccess: 'Memerlukan pengumpulan semua bagian',
          highSecurity: 'Bagian parsial masih mengungkapkan informasi',
          highPrivacy: 'Biasanya disimpan dalam bentuk polos',
          lossProof: 'Kehilangan satu bagian memutus pemulihan',
          destructionProof: 'Kerusakan fisik mempengaruhi pemulihan',
        },
      },
      lawyer: {
        name: 'Pengacara / Notaris',
        criteria: {
          free: 'Memerlukan biaya hukum berkelanjutan',
          easyAccess: 'Akses tergantung pada prosedur hukum',
          highSecurity: 'Melibatkan kepercayaan manusia dan risiko hukum',
          highPrivacy: 'Pengacara bisa mengakses seed mentah',
          lossProof: 'Tunduk pada kesalahan manusia atau perselisihan',
          destructionProof: 'Dokumen bisa hilang atau hancur',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: 'Sistem gratis dan nirlaba',
          easyAccess: 'Dapat dipulihkan kapan saja melalui penyimpanan permanen',
          highSecurity: 'Seed asli tidak pernah disimpan secara langsung',
          highPrivacy: 'Teks decoy tidak berarti dengan sendirinya',
          lossProof: 'Satu bagian saja tidak berguna bagi penyerang',
          destructionProof: 'Dapat dicadangkan di penyimpanan permanen',
        },
      },
    },
    criteriaLabels: {
      free: 'Gratis',
      easyAccess: 'Akses Mudah',
      highSecurity: 'Keamanan Tinggi',
      highPrivacy: 'Privasi',
      lossProof: 'Tahan Hilang',
      destructionProof: 'Tahan Rusak',
    },
  },
  securityDemo: {
    title: 'Keamanan Melalui Pemisahan',
    subtitle: 'Tanpa file mapping, tak ada pemulihan. Tanpa teks decoy, tak ada akses.',
    annotations: {
      decoy:
        'Anda harus memiliki teks decoy, yang bertindak sebagai representasi tersamar dari data sensitif asli Anda.',
      mapping:
        'Anda harus memiliki file mapping, yang berisi aturan transformasi yang diperlukan untuk merekonstruksi data asli dari teks decoy',
      result: 'Seed phrase yang dihasilkan akan muncul di sini',
      clickToGenerate: 'Klik di sini untuk menghasilkan seed phrase',
    },
    buttons: {
      simulateDecoy: 'Klik untuk simulasi teks decoy',
      placeDecoy: '✓ Teks decoy ditempatkan',
      simulateMapping: 'Klik untuk simulasi peta',
      uploadMapping: 'Perbarui Peta',
      mappingLoaded: 'Peta Dimuat',
      updateMapping: 'Perbarui file peta baru',
      generate: 'Hasilkan Hasil',
      decrypting: 'Mendekripsi...',
    },
    labels: {
      decoyText: 'Teks Decoy',
      asciiText: 'Teks ASCII',
      resultPlaceholder: 'Hasil akan muncul di sini...',
    },
  },
  faq: {
    title: 'Pertanyaan yang Sering Diajukan',
    subtitle:
      'Ini adalah beberapa pertanyaan yang mungkin Anda miliki tentang Decoy Phrase. Tidak menemukan jawaban yang Anda cari?',
    chatAi: 'Ngobrol dengan AI tentang Decoy Phrase!',
    categories: {
      general: 'Umum',
      products: 'Produk',
      security: 'Keamanan & Privasi',
    },
    items: {
      'gen-1': {
        question: 'Apa Itu Decoy Phrase?',
        answer:
          'Decoy Phrase adalah metode offline-first untuk melindungi dan mencadangkan seed phrase serta teks sensitif — tanpa pernah menyimpan data aslinya.\n\nIa mengubah rahasia menjadi teks biasa yang tidak berbahaya, dengan pemulihan hanya dimungkinkan dengan menggabungkan file mapping pribadi dan teks yang diubah.\n\nUntuk ketahanan jangka panjang, file decoy dan file mapping dapat disimpan secara permanen melalui Penyimpanan Permanen Decoy Phrase, yang terhubung langsung ke blockchain Arweave—memastikan file tersebut tidak dapat hilang, diubah, atau dihapus.',
      },
      'gen-2': {
        question: 'Apakah Decoy Phrase gratis?',
        answer:
          'Ya. Decoy Phrase sepenuhnya gratis untuk digunakan dan beroperasi sebagai inisiatif nirlaba. Semua fitur inti—termasuk pembuatan teks decoy, pembuatan file mapping, dan pemulihan offline—tersedia tanpa biaya.\n\nUntuk Penyimpanan Permanen Decoy Phrase, penyimpanan didukung melalui donasi. Donasi ini digunakan untuk mendanai perluasan kapasitas penyimpanan permanen di blockchain Arweave dari waktu ke waktu. Setiap file yang sudah disimpan di blockchain akan tetap dapat diakses selamanya, terlepas dari keadaan layanan di masa depan.',
      },
      'gen-3': {
        question: 'Apa yang permanen di Decoy Phrase?',
        answer:
          'Di Decoy Phrase, konsep permanensi berlaku untuk situs web, domain, dan data yang disimpan, —dimungkinkan oleh Web Permanen dan Penyimpanan Permanen yang dibangun di atas Arweave.',
      },
      'gen-4': {
        question: 'Apakah Decoy Phrase menyimpan data saya?',
        answer:
          'Tidak. Decoy Phrase tidak pernah menyimpan seed phrase atau data sensitif asli Anda. Proses pembuatan teks decoy dan file mapping berjalan sepenuhnya offline menggunakan Decoy Phrase Generator. Akibatnya, tidak ada risiko rahasia Anda disimpan di server mana pun.\n\nKetika file disimpan di Penyimpanan Permanen, semua data dienkripsi di sisi klien sebelum dikirim ke blockchain Arweave—termasuk kata sandi, konten file, dan judul file.',
      },
      'gen-5': {
        question: 'Apa yang terjadi jika saya kehilangan file mapping dan teks decoy terkait?',
        answer:
          'Jika Anda kehilangan file mapping dan teks decoy yang sesuai, data asli Anda menjadi tidak dapat dipulihkan secara permanen. Decoy Phrase sengaja dirancang tanpa mekanisme reset, pencadangan, atau pemulihan dan tidak pernah menyimpan rahasia asli Anda, membuat pemulihan secara teknis tidak mungkin tanpa kedua komponen tersebut.\n\nInilah sebabnya mengapa Decoy Phrase menyediakan Penyimpanan Permanen: untuk mengurangi risiko kehilangan yang tidak disengaja dengan memungkinkan file decoy dan mapping disimpan dalam penyimpanan jangka panjang yang tidak dapat diubah, dihapus, atau hilang secara diam-diam, sambil tetap menjaga desain zero-knowledge, non-kustodial—di mana semua file dienkripsi di sisi klien dan kendali penuh tetap ada pada pengguna.',
      },
      'gen-6': {
        question: 'Apakah saya perlu online untuk menggunakan Decoy Phrase?',
        answer:
          'Tergantung.\n\nDecoy Phrase Generator bekerja sepenuhnya offline. Semua proses inti—pembuatan teks decoy, pembuatan file mapping, dan pemulihan data—berjalan sepenuhnya di perangkat Anda tanpa koneksi internet.\n\nNamun, Penyimpanan Permanen memerlukan koneksi online, karena menyimpan file terenkripsi di blockchain Arweave menggunakan arsitektur zero-knowledge.',
      },
      'gen-7': {
        question:
          'Bisakah saya memulihkan seed phrase atau data sensitif saya tanpa bantuan pihak ketiga?',
        answer:
          'Ya. Decoy Phrase dirancang untuk penggunaan berdaulat penuh, tanpa perantara. Dengan menggunakan teks decoy Anda dan file mapping terkaitnya, sistem memulihkan data asli Anda langsung di perangkat Anda, sepenuhnya offline melalui Decoy Phrase Generator—tanpa melibatkan pihak ketiga mana pun.',
      },
      'gen-8': {
        question: 'Apakah aman membagikan Teks Decoy dengan orang lain?',
        answer:
          'Ya, aman.\n\nTeks Decoy dirancang agar telihat biasa dan tidak mengandung informasi sensitif yang dapat digunakan dengan sendirinya. Tanpa file mapping yang sesuai, ia tidak dapat digunakan untuk memulihkan data asli. Demikian pula, file mapping tanpa teks decoy terkait juga tidak dapat digunakan. Oleh karena itu, membagikan Teks Decoy saja tidak mengekspos rahasia Anda.',
      },
      'gen-9': {
        question: 'Bagaimana Decoy Phrase berbeda dari manajer kata sandi?',
        answer:
          'Decoy Phrase bukan manajer kata sandi online.\n\nTransformasi seed phrase, kata sandi, atau data sensitif lainnya dilakukan sepenuhnya offline melalui Decoy Phrase Generator.\n\nPenyimpanan Permanen hanya digunakan untuk menyimpan teks decoy dan file mapping, dipisahkan ke dalam ruang penyimpanan berbeda menggunakan fitur manajemen multi-sandi.\n\nSemua file yang disimpan di Penyimpanan Permanen dienkripsi di sisi klien. Bahkan jika terekspos, kunci dekripsi hanya dipegang oleh pengguna, membuat data tidak dapat digunakan oleh orang lain.\n\nTidak seperti manajer kata sandi yang menyimpan kata sandi terenkripsi di server atau cloud, Decoy Phrase memberi Anda kendali penuh atas bagaimana dan di mana data sensitif Anda disimpan dan dipulihkan.',
      },
      'prod-1': {
        question: 'Apa itu Decoy Phrase Generator dan apa komponennya?',
        answer:
          'Decoy Phrase Generator adalah alat inti dalam sistem Decoy Phrase, menggabungkan Mapping Maker dan Text Generator.\n\nMapping Maker mengubah seed phrase atau data sensitif menjadi teks decoy biasa dan menghasilkan file mapping yang berfungsi sebagai kunci pemulihan, sementara Text Generator menggunakan file mapping tersebut untuk memulihkan data asli dari teks decoy.\n\nSemua proses berjalan sepenuhnya di perangkat pengguna tanpa koneksi internet, memastikan bahwa tidak ada data sensitif yang pernah dikirim ke server mana pun.',
      },
      'prod-2': {
        question: 'Apa itu File Mapping dan mengapa harus disimpan terpisah?',
        answer:
          'File Mapping adalah file pribadi (.json) yang berisi informasi teknis dan berfungsi sebagai satu-satunya kunci untuk memulihkan data asli dari teks decoy.\n\nIa tidak mengandung data sensitif secara langsung dan tidak berarti tanpa teks decoy terkait. Karena alasan ini, File Mapping harus disimpan terpisah dari teks decoy. Pemisahan ini mencegah satu file pun mengungkapkan rahasia. Tanpa kombinasi yang benar dari keduanya, pemulihan tidak mungkin dilakukan—artinya tidak ada komponen tunggal yang berisi informasi sensitif yang dapat dieksploitasi dengan sendirinya.',
      },
      'prod-3': {
        question: 'Bagaimana Penyimpanan Permanen bekerja dan format file apa yang didukung?',
        answer:
          'Penyimpanan Permanen adalah lapisan penyimpanan berbasis Arweave yang menyimpan teks decoy dan file mapping secara permanen dan tidak dapat diubah.\n\nIa dirancang sebagai penyimpanan sekali tulis, baca selamanya untuk pencadangan teks jangka panjang tanpa bergantung pada server tradisional.\n\nPenyimpanan Permanen hanya mendukung file berbasis teks, seperti .txt, .md, dan .json. Format lain seperti gambar, video, atau file audio tidak didukung.\n\nSemua unggahan dikelola melalui satu akun menggunakan Shared Master Wallet, sehingga pengguna tidak perlu membuat atau mengelola dompet blockchain atau memahami mekanika blockchain. Kompleksitas blockchain disembunyikan di balik antarmuka pengguna yang sederhana.',
      },
      'prod-4': {
        question: 'Apa itu Brankas Multi-Sandi dan bagaimana cara menggunakannya?',
        answer:
          'Brankas Multi-Sandi adalah fitur Penyimpanan Permanen yang memungkinkan satu akun berisi beberapa brankas penyimpanan terisolasi, masing-masing dilindungi oleh kata sandi yang berbeda. Misalnya, pengguna dapat menyimpan teks decoy di Brankas A dan file mapping di Brankas B, menggunakan kata sandi terpisah untuk masing-masing.\n\nSetiap brankas terisolasi secara logis, artinya akses ke satu brankas tidak memberikan akses ke brankas lain. Akibatnya, mengkompromikan satu kata sandi hanya mengekspos satu brankas, menjaga file sensitif lainnya tetap aman.',
      },
      'prod-5': {
        question: 'Bisakah Decoy Phrase Generator digunakan di perangkat yang berbeda?',
        answer:
          'Ya. Decoy Phrase Generator tersedia di berbagai platform. Ia dapat berjalan di sistem operasi desktop utama (Windows, macOS, Linux) serta di perangkat Android.\n\nKarena semua proses berjalan offline di perangkat lokal, Decoy Phrase juga dapat digunakan di lingkungan tanpa akses internet atau di sistem keamanan tinggi seperti komputer air-gapped.',
      },
      'prod-6': {
        question: 'Apakah pengguna perlu memahami blockchain untuk menggunakan fitur ini?',
        answer:
          'Tidak. Meskipun Decoy Phrase menggunakan teknologi blockchain (Arweave) di belakang layar untuk penyimpanan permanen, antarmuka dirancang agar pengguna tidak perlu berurusan dengan kompleksitas terkait blockchain.\n\nDengan menggunakan Shared Master Wallet, pengguna hanya perlu fokus mengelola teks dan kata sandi mereka—mereka tidak perlu membuat, menyimpan, atau mengelola dompet blockchain mereka sendiri. Akibatnya, semua fitur Decoy Phrase dapat digunakan tanpa pengetahuan sebelumnya tentang teknologi blockchain.',
      },
      'sec-1': {
        question: 'Bagaimana sistem melindungi data pengguna?',
        answer:
          'Decoy Phrase menerapkan prinsip offline-first dan zero-knowledge, yang berarti bahwa semua transformasi dan enkripsi data sensitif dilakukan sepenuhnya di perangkat pengguna—tanpa memerlukan koneksi internet atau server mana pun.\n\nData diproses dan dienkripsi di sisi klien (misalnya, menggunakan AES-256-GCM) sebelum disimpan di Penyimpanan Permanen, sehingga penyimpanan publik hanya berisi data terenkripsi yang tidak dapat dibaca tanpa kunci pengguna.\n\nSelain itu, tidak ada seed phrase atau data sensitif asli yang pernah disimpan di server mana pun, yang berarti tidak ada brankas pusat yang bisa menjadi target serangan bernilai tinggi. Pendekatan ini menghilangkan ketergantungan pada pihak ketiga dan mengalihkan keamanan dari perlindungan berbasis kepercayaan ke arsitektur teknis yang membuat akses eksternal tidak mungkin secara desain.',
      },
      'sec-2': {
        question: 'Bisakah Decoy Phrase menghapus file saya di Penyimpanan Permanen?',
        answer:
          'Tidak. Decoy Phrase tidak dapat menghapus file Anda setelah disimpan di Penyimpanan Permanen. Penyimpanan Permanen dibangun di atas blockchain Arweave, di mana data tidak dapat diubah secara desain. Setelah file diunggah, ia tidak dapat dihapus, dimodifikasi, atau dihapus oleh Decoy Phrase—atau oleh siapa pun.',
      },
      'sec-3': {
        question: 'Bagaimana sistem memastikan bahwa tidak ada data sensitif yang disimpan?',
        answer:
          'Decoy Phrase menggunakan prinsip "ubah dan pisahkan". Data asli diubah secara offline menjadi teks decoy biasa yang tampak acak dan tidak mengandung arti rahasia. File mapping yang dihasilkan berisi informasi pemulihan teknis tetapi tidak menyertakan data sensitif asli.\n\nKedua komponen ini harus disimpan terpisah (misalnya, di lokasi berbeda atau dilindungi oleh kata sandi berbeda). Akibatnya, tidak ada komponen tunggal yang pernah berisi rahasia asli. Tanpa file mapping, teks decoy tidak berguna—dan tanpa teks decoy, file mapping tidak berarti.\n\nMetode ini memastikan bahwa data sensitif asli tidak pernah disimpan secara langsung di aplikasi atau di server mana pun.',
      },
      'sec-4': {
        question: 'Apa yang diketahui dan tidak diketahui sistem di Penyimpanan Permanen?',
        answer:
          'Decoy Phrase bersifat zero-knowledge, artinya sistem tidak pernah mengetahui isi data pengguna.\n\nIa tidak dapat melihat seed phrase, kata sandi, atau konten file asli karena semua data dienkripsi sepenuhnya di browser lokal pengguna sebelum diunggah.\n\nSatu-satunya informasi yang terlihat oleh sistem adalah metadata publik non-sensitif, seperti nama pengguna (digunakan sebagai pengenal publik) dan jumlah file yang disimpan.\n\nHubungan antara teks decoy dan file mappingnya juga tidak diketahui oleh sistem. Singkatnya, konten pengguna dan rahasia tidak pernah terekspos—hanya data terenkripsi dan metadata publik terbatas yang ada.',
      },
      'sec-5': {
        question:
          'Bagaimana pendekatan keamanan Decoy Phrase berbeda dari sistem tradisional (seperti manajer kata sandi)?',
        answer:
          '• Penyimpanan data asli: Manajer kata sandi tradisional menyimpan rahasia pengguna (kata sandi, seed, dll.) di dalam brankas terenkripsi. Decoy Phrase tidak pernah menyimpan data asli sama sekali.\n\n• Arsitektur: Manajer kata sandi biasanya bergantung pada server atau infrastruktur cloud untuk sinkronisasi. Decoy Phrase bersifat offline-first, tanpa backend dan tanpa ketergantungan pihak ketiga.\n\n• Model keamanan: Dalam manajer kata sandi, keamanan bergantung pada enkripsi brankas dan kata sandi utama—jika brankas atau kata sandi utama dikompromikan, semua data dapat terekspos. Decoy Phrase tidak memiliki brankas seperti itu. Membocorkan satu file (baik teks decoy atau file mapping) tidak cukup untuk memulihkan data asli, karena setiap komponen tidak memiliki nilai dengan sendirinya.\n\n• Titik kegagalan tunggal: Brankas manajer kata sandi adalah target bernilai tinggi. Decoy Phrase tidak memiliki objek tunggal yang berisi rahasia; sampai kedua komponen (teks decoy dan file mapping) dikompromikan bersama-sama, tidak ada titik kegagalan utama untuk diserang.',
      },
      'sec-6': {
        question: 'Apa yang terjadi jika file decoy atau file mapping jatuh ke tangan orang lain?',
        answer:
          '• Jika hanya teks decoy yang terekspos, tidak ada rahasia yang terungkap. Teks decoy adalah data biasa tanpa arti sensitif dan tidak dapat digunakan tanpa file mapping.\n\n• Jika hanya file mapping yang terekspos, data asli tetap aman. File mapping hanya berisi pola karakter teknis, bukan konten rahasia, dan tidak berguna tanpa teks decoy terkait.\n\n• Hanya jika keduanya terekspos bersama-sama data asli dapat dipulihkan. Dalam hal itu, keamanan runtuh sepenuhnya karena penyerang memiliki kedua komponen yang diperlukan.',
      },
      'sec-7': {
        question: 'Apa risiko gagal memisahkan file?',
        answer:
          'Risiko utama terjadi jika teks decoy dan file mapping tidak disimpan secara terpisah (misalnya, di lokasi yang sama atau dilindungi oleh kata sandi yang sama).\n\nJika ini terjadi, siapa pun yang mendapatkan akses ke kedua komponen dapat langsung memulihkan data asli. Dengan kata lain, sistem hanya gagal ketika kedua komponen disatukan secara tidak sengaja.\n\nOleh karena itu, pemisahan yang ketat sangat penting: simpan teks decoy dan file mapping di lokasi berbeda atau lindungi dengan kata sandi berbeda. Ketika dipisahkan dengan benar, kegagalan seperti itu sangat tidak mungkin terjadi.',
      },
    },
  },
  donate: {
    title: 'Dukung Decoy Phrase',
    description:
      'Decoy Phrase gratis untuk digunakan dan dibangun sebagai inisiatif nirlaba. Tidak ada paywall dan tidak ada langganan yang diperlukan. Donasi bersifat sukarela dan transparan.',
    link: 'Lihat metrik proyek langsung dan data publik di sini!',
    cards: {
      storage: {
        title: 'Dana Penyimpanan',
        description:
          'Donasi ini langsung masuk ke dompet penyimpanan dan secara otomatis ditambahkan ke dana abadi penyimpanan, mendanai penyimpanan permanen secara berkelanjutan dan meningkatkan kapasitas yang tersedia.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Kirim AR dari Exchange</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Beli dan tahan token AR</li>
      <li>Buka bagian kirim (Send) atau tarik (Withdraw)</li>
      <li>Pilih penarikan on-chain (On-Chain Withdraw)</li>
      <li>Pilih AR (Arweave)</li>
      <li>Tempel alamat dompet Decoy Phrase</li>
      <li>Pilih jaringan Arweave</li>
      <li>Masukkan jumlah</li>
      <li>Konfirmasi penarikan</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">Transfer AR biasanya memakan waktu 1–5 menit.</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Kirim AR dari Wander Wallet</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Buat Wander Wallet</li>
      <li>Beli token AR dengan metode yang tersedia</li>
      <li>Tekan kirim (Send)</li>
      <li>Tempel alamat dompet Decoy Phrase</li>
      <li>Masukkan jumlah</li>
      <li>Konfirmasi transaksi</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: 'Dana Tim',
        description:
          'Donasi ini mendukung tim dan ekosistem Decoy Phrase, termasuk pengembangan, pemasaran, dan inisiatif komunitas. Dana juga dapat dialokasikan ke penyimpanan jika diperlukan.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Kirim Stablecoin dari Exchange</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Beli USDT, USDC, atau stablecoin lain yang didukung</li>
      <li>Buka bagian kirim (Send) atau tarik (Withdraw)</li>
      <li>Pilih penarikan on-chain (On-Chain Withdraw)</li>
      <li>Pilih stablecoin yang ingin Anda kirim</li>
      <li>Tempel alamat dompet Decoy Phrase (pastikan sesuai dengan jaringan yang dipilih)</li>
      <li>Pilih jaringan yang sesuai dengan alamat dompet</li>
      <li>Masukkan jumlah</li>
      <li>Konfirmasi penarikan</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">Kirim Stablecoin dari DEX</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Beli stablecoin atau token asli dari jaringan pilihan</li>
      <li>Buka bagian kirim (Send) atau tarik (Withdraw)</li>
      <li>Pilih jaringan atau koin yang ingin dikirim</li>
      <li>Tempel alamat dompet Decoy Phrase yang sesuai untuk token dan jaringan tersebut</li>
      <li>Masukkan jumlah</li>
      <li>Konfirmasi transaksi</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: 'Kalkulator Penyimpanan',
    info: {
      p1: 'Ukuran file rata-rata untuk file mapping seed phrase 12 kata adalah ~50KB. Unggahan saat ini menggunakan <strong class="text-foreground">Turbo (didukung oleh ar.io)</strong>, memungkinkan file di bawah 105KB diunggah secara gratis, dengan perhitungan biaya Arweave langsung disarankan sebagai cadangan jika Turbo tidak tersedia.',
      p2: 'Semua data yang disimpan di penyimpanan permanen tetap dapat diakses selamanya, bahkan jika kapasitas tercapai dan tidak ada donasi masa depan yang dilakukan, sementara kapasitas tambahan dimaksudkan untuk mendukung pengguna masa depan dan generasi Decoy Phrase.',
    },
    labels: {
      donationAmount: 'Jumlah Donasi',
      arweaveEquivalent: 'Ekuivalen Arweave',
      winstonAmount: 'Jumlah Winston',
      capacityIncrease: 'Donasi ini meningkatkan kapasitas sebesar',
      files: 'File',
      calculate: 'Hitung',
      currentBalance: 'Saldo Saat Ini',
      howToDonate: 'Cara Berdonasi?',
      copied: 'Disalin!',
      addressCopied: 'Alamat disalin!',
      copyAddress: 'Salin alamat dompet',
      selectNetwork: 'Pilih jaringan',
      walletAddress: 'Alamat dompet',
    },
  },
  metrics: {
    title: 'Metrik Langsung Decoy Phrase',
    labels: {
      totalUsers: 'Total Pengguna',
      totalFilesStored: 'Total File Disimpan',
      totalFilesLocked: 'Total File Terkunci',
      totalDonations: 'Total Donasi',
      remainingCapacity: 'Sisa Kapasitas File',
      downloadTotal: 'Total Unduhan Generator',
    },
    status: {
      live: 'Online',
      reconnecting: 'Menghubungkan kembali...',
      disconnected: 'Terputus',
    },
    filters: {
      day: 'H',
      month: 'B',
      quarter: 'K',
      year: 'T',
      all: 'Semua',
    },
  },
  download: {
    title: 'Ubah dan pulihkan seed phrase asli Anda kapan saja.',
    subtitle:
      'Ubah seed phrase Anda menjadi teks decoy yang dapat disesuaikan dan pulihkan aslinya kapan saja menggunakan file mapping pribadi Anda. Semuanya berjalan sepenuhnya offline—tidak ada seed phrase yang disimpan, diunggah, atau dibagikan.',
    cta: {
      about: 'Tentang Generator Decoy',
      tutorials: 'Lihat Tutorial',
    },
  },
  feedback: {
    title: 'Umpan Balik & Dukungan',
    description:
      'Bagikan saran Anda atau laporkan masalah untuk membantu kami meningkatkan Generator Decoy. Harap jangan kirimkan seed phrase atau data sensitif.',
    discord: {
      text: 'Bergabunglah dengan <span class="font-bold text-[#5865F2]">Discord</span> kami untuk pembaruan dan solusi dari komunitas.',
      linkText: 'Gabung sekarang!',
    },
    forms: {
      feedback: {
        title: 'Umpan Balik',
        name: 'Nama',
        subject: 'Subjek',
        description: 'Deskripsi',
        email: 'Email',
        submit: 'Kirim',
        submitting: 'Mengirim...',
        success: 'Umpan balik terkirim! Cek Discord untuk pembaruan.',
        error: 'Gagal mengirim. Silakan coba lagi.',
        required: 'Wajib diisi',
        invalidEmail: 'Alamat email tidak valid',
        minChar: 'Minimal 10 karakter',
      },
      support: {
        title: 'Dukungan',
        category: 'Kategori',
        appVersion: 'Versi Aplikasi',
        reference: 'Tautan Referensi (Opsional)',
        referenceHelper:
          "Unggah tangkapan layar atau video ke Google Drive atau layanan cloud lain, atur akses ke 'Siapa saja yang memiliki tautan', lalu tempel tautan di sini.",
        required: 'Wajib diisi',
        invalidEmail: 'Alamat email tidak valid',
        minChar: 'Minimal 10 karakter',
      },
    },
  },
};
