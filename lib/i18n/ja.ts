import { Translations } from './types';

export const jaTranslations: Translations = {
  nav: {
    about: '私たちについて',
    userGuide: 'ユーザーガイド',
    faq: 'よくある質問',
    brandKit: 'ブランドキット',
    liveMetrics: 'ライブメトリクス',
    decoyToken: '$DECOY',
    products: '製品',
    decoyGenerator: 'デコイ生成ツール',
    permanentStorage: '永久ストレージ',
    permanentWeb: '永久ウェブ',
    donate: '寄付',
    docs: 'ドキュメント',
    connect: '接続',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: 'フィードバック',
  },
  header: {
    login: 'ログイン',
    menu: 'メニュー',
    language: '言語',
  },
  footer: {
    columns: {
      decoyPhrase: 'Decoy Phrase',
      coreComponents: '主要コンポーネント',
      downloadGenerator: 'ジェネレーターをダウンロード',
    },
    links: {
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      forum: 'コミュニティフォーラム',
    },
    mission: {
      text: 'Decoy Phraseは、シードフレーズ保護から第三者を排除する非営利の取り組みです。寄付によって恒久的なストレージと開発が支えられ、システムを無料で継承可能な状態に保ちます。',
      ctaText: 'Decoy Phraseをサポートするために、寄付を行うことができます。',
    },
  },
  hero: {
    titlePart1: 'あなたのシードフレーズを保護し、',
    titlePart2: '永続的に保存するための',
    titleHighlight: '無料で安全な方法',
    subtitle: '保存されるシードなし。紛失防止。破壊不可能。第三者なし。',
  },
  heroActions: {
    getStarted: '今すぐ始める',
    watchTutorials: 'チュートリアルを見る',
    generator: 'Decoy Phraseジェネレーター',
    storage: '恒久ストレージ',
  },
  features: {
    title: 'Decoy Phrase',
    titleHighlight: 'の機能',
    subtitle: '秘密を永続的に保護するための完全なシステム。',
    cards: {
      generator: {
        title: 'Decoy Phraseジェネレーター',
        description:
          '実際のシードフレーズを、ありふれた安全なテキストに変換します — 完全にオフラインで行われます。同じツールを使用してマッピングファイルを作成し、両方のファイルがあれば元の秘密を復元できます。',
      },
      storage: {
        title: '恒久ストレージ',
        description:
          'デコイテキストとマッピングファイルを、クラウドプロバイダー、管理者、またはサブスクリプションに依存することなく、恒久ストレージに安全に保管します。',
      },
      web: {
        title: 'パーマネントウェブ',
        description:
          'データが変更、検閲、または削除されることのないパーマネントウェブ上に構築されており、永遠に存続するように作られています。',
      },
    },
  },
  howItWorks: {
    title: 'Decoy Phraseの仕組み',
    subtitle: 'シンプルなステップ。強力な保護。保存ゼロ。',
    steps: {
      '1': {
        title: 'シードフレーズを変換',
        description:
          'シードフレーズをデコイテキストに変換します。Decoy Phraseジェネレーターを使用して完全にオフラインで処理され、サーバー、クラウド、データ収集は一切ありません。',
      },
      '2': {
        title: '2つの独立したファイルを取得',
        description:
          '普通に見え、有用な情報を含まないデコイテキストと、元の秘密を復元するための唯一の鍵となるマッピングファイルを取得します。両方がなければ復元は不可能です。',
      },
      '3': {
        title: '別々に保管',
        description:
          'デコイテキストとマッピングファイルを別々に保管します。異なる場所にローカルに、またはマルチパスワード保管庫を使用して恒久ストレージに保管します。',
      },
      '4': {
        title: '必要な場合のみ復元',
        description:
          '復元が必要な場合は、Decoy Phraseジェネレーターで両方のファイルを使用して、元のシードフレーズを復元します。',
      },
    },
  },
  prosCons: {
    title: 'バックアップの長所と短所',
    subtitle: '完璧なバックアップは存在しません — 異なるリスクがあるだけです。',
    methods: {
      paper: {
        name: '紙',
        criteria: {
          free: 'コスト不要',
          easyAccess: '物理的なアクセスが必要',
          highSecurity: '盗難、撮影、コピーが容易',
          highPrivacy: '完全にオフラインで保管',
          lossProof: '紛失や誤廃棄の可能性',
          destructionProof: '火災、水害、経年劣化に弱い',
        },
      },
      metal: {
        name: '金属',
        criteria: {
          free: 'プレートの購入が必要',
          easyAccess: '物理的なアクセスと回収が必要',
          highSecurity: '発見した人は誰でも使用可能',
          highPrivacy: '第三者なしでオフライン保管',
          lossProof: '紛失や盗難の可能性は残る',
          destructionProof: '火災や水害に強い',
        },
      },
      'local-storage': {
        name: 'ローカルストレージ',
        criteria: {
          free: '既存のハードウェアを使用',
          easyAccess: 'デバイス、ポート、互換性が必要',
          highSecurity: 'マルウェアや盗難に対して脆弱',
          highPrivacy: '第三者なしでローカルに保管',
          lossProof: '紛失、損傷、破損しやすい',
          destructionProof: 'ハードウェア障害の影響を受けやすい',
        },
      },
      cloud: {
        name: 'クラウドストレージ',
        criteria: {
          free: 'サブスクリプションまたは有料スペースが必要',
          easyAccess: 'ログインすればどこからでもアクセス可能',
          highSecurity: 'ハッキングやアカウント盗難の標的',
          highPrivacy: 'サードパーティプロバイダーによって管理',
          lossProof: 'バックアップにより紛失リスクを軽減',
          destructionProof: 'アカウントが削除または凍結される可能性',
        },
      },
      encrypted: {
        name: '暗号化ファイル',
        criteria: {
          free: '無料ツールで作成可能',
          easyAccess: 'パスワードと正しいソフトウェアが必要',
          highSecurity: 'パスワードが漏洩しない限り強力',
          highPrivacy: 'プライバシーは保存場所に依存',
          lossProof: 'パスワードの紛失は完全な喪失を意味する',
          destructionProof: 'ファイルの破損や削除は致命的',
        },
      },
      shamir: {
        name: 'シャミア分散',
        criteria: {
          free: '専用ツールやウォレットが必要',
          easyAccess: 'しきい値数のパーツを集める必要がある',
          highSecurity: '個々のパーツは暗号的に無意味',
          highPrivacy: '誰も完全なシードを持っていない',
          lossProof: '一部のシェアの紛失を許容',
          destructionProof: '多くのシェアを失うと復元不可能',
        },
      },
      custodian: {
        name: 'カストディアン',
        criteria: {
          free: 'サービスは通常有料',
          easyAccess: 'アカウントアクセスによる簡単な復元',
          highSecurity: '第三者への完全な依存',
          highPrivacy: 'カストディアンは可視性と管理権を持つ',
          lossProof: '資金が凍結または没収される可能性',
          destructionProof: '企業の倒産は完全な喪失の脅威',
        },
      },
      splitting: {
        name: 'シード分割',
        criteria: {
          free: 'コスト不要',
          easyAccess: 'すべてのパーツを集める必要がある',
          highSecurity: '部分的なデータでも情報を漏らす',
          highPrivacy: '通常は平文で保存される',
          lossProof: '1つのパーツを失うと復元不可能',
          destructionProof: '物理的な損傷は復元に影響する',
        },
      },
      lawyer: {
        name: '弁護士 / 公証人',
        criteria: {
          free: '継続的な費用が必要',
          easyAccess: 'アクセスは法的手続きに依存',
          highSecurity: '人的要因とリスクが関与',
          highPrivacy: '弁護士がシードにアクセスする可能性',
          lossProof: '間違いや紛争の影響を受けやすい',
          destructionProof: '文書が紛失または破棄される可能性',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: '無料かつ非営利のシステム',
          easyAccess: '恒久ストレージを通じていつでも復元可能',
          highSecurity: '実際のシードは直接保存されない',
          highPrivacy: 'デコイテキスト自体には意味がない',
          lossProof: '1つのパーツだけでは役に立たない',
          destructionProof: '恒久ストレージに保存可能',
        },
      },
    },
    criteriaLabels: {
      free: '無料',
      easyAccess: '簡単なアクセス',
      highSecurity: '高いセキュリティ',
      highPrivacy: 'プライバシー',
      lossProof: '紛失防止',
      destructionProof: '破壊防止',
    },
  },
  securityDemo: {
    title: '分割によるセキュリティ',
    subtitle: 'マッピングファイルなし — 復元なし。デコイテキストなし — アクセスなし。',
    annotations: {
      decoy: '元のデータの隠された表現として機能するデコイテキストが必要です。',
      mapping: 'データを復元するための変換ルールを含むマッピングファイルが必要です。',
      result: '生成されたシードフレーズがここに表示されます',
      clickToGenerate: 'ここをクリックしてシードフレーズを生成',
    },
    buttons: {
      simulateDecoy: 'クリックしてデコイテキストをシミュレート',
      placeDecoy: '✓ デコイテキスト配置済み',
      simulateMapping: 'クリックしてマップロードをシミュレート',
      uploadMapping: 'マップを更新',
      mappingLoaded: 'マップロード済み',
      updateMapping: '新しいマップファイルを更新',
      generate: '結果を生成',
      decrypting: '復号化中...',
    },
    labels: {
      decoyText: 'デコイテキスト',
      asciiText: 'ASCIIテキスト',
      resultPlaceholder: '結果はここに表示されます...',
    },
  },
  faq: {
    title: 'よくある質問',
    subtitle: 'Decoy Phraseについて、よくある質問にお答えします。',
    chatAi: 'Decoy PhraseについてAIに質問！',
    categories: {
      general: '一般',
      products: '製品',
      security: 'セキュリティとプライバシー',
    },
    items: {
      'gen-1': {
        question: 'Decoy Phraseとは何ですか？',
        answer:
          'Decoy Phraseは、元のデータを保存することなく、シードフレーズや機密テキストを保護およびバックアップするための「オフラインファースト」の方法です。\n\n秘密を一見無害で平凡なテキストに変換し、プライベートなマッピングファイルと変換されたテキストを組み合わせることによってのみ、復元が可能になります。\n\n長期的な耐久性のために、デコイファイルとマッピングファイルは、Arweaveブロックチェーンに直接接続されたDecoy Phrase Permanent Storage（永久ストレージ）を介して永遠に保存でき、紛失、変更、削除されないことが保証されます。',
      },
      'gen-2': {
        question: 'Decoy Phraseは無料ですか？',
        answer:
          'はい。Decoy Phraseは完全に無料で使用でき、非営利のイニシアチブとして運営されています。デコイテキストの生成、マッピングファイルの作成、オフラインでの復元など、すべての主要機能は無料で利用できます。\n\nDecoy Phrase Permanent Storageについては、寄付によってストレージがサポートされています。これらの寄付は、時間の経過とともにArweaveブロックチェーン上の永久ストレージ容量を拡大するための資金として使用されます。すでにブロックチェーンに保存されているファイルは、サービスの将来の状態に関係なく、永遠にアクセス可能なままになります。',
      },
      'gen-3': {
        question: 'Decoy Phraseで「永久」とはどういう意味ですか？',
        answer:
          'Decoy Phraseにおける「永久」という概念は、Arweave上に構築されたPermanent Web（永久ウェブ）とPermanent Storage（永久ストレージ）によって実現されるウェブサイト、ドメイン、および保存データに適用されます。',
      },
      'gen-4': {
        question: 'Decoy Phraseは私のデータを保存しますか？',
        answer:
          'いいえ。Decoy Phraseは、シードフレーズや元の機密データを保存することは一切ありません。デコイテキストとマッピングファイルの作成プロセスは、Decoy Phrase Generatorを使用して完全にオフラインで実行されます。その結果、秘密がサーバーに保存されるリスクはありません。\n\nファイルがPermanent Storageに保存される際、パスワード、ファイルの内容、ファイル名を含むすべてのデータは、Arweaveブロックチェーンに送信される前にクライアント側で暗号化されます。',
      },
      'gen-5': {
        question:
          'マッピングファイルとそれに対応するデコイテキストの両方を紛失した場合はどうなりますか？',
        answer:
          'マッピングファイルとそれに対応するデコイテキストの両方を紛失した場合、元のデータは永久に復元できなくなります。Decoy Phraseは意図的にリセット、バックアップ、または回復メカニズムなしで設計されており、元の秘密を保存しないため、両方のコンポーネントがないと技術的に復元不可能です。\n\nこれがDecoy PhraseがPermanent Storageを提供する理由です。デコイとマッピングファイルを削除、変更、またはひそかに紛失することのない不変の長期ストレージに保持できるようにすることで、偶発的な紛失のリスクを軽減します。同時に、すべてのファイルがクライアント側で暗号化され、完全な制御がユーザーに残るゼロ知識（zero-knowledge）および非管理者型（non-custodial）の設計を維持します。',
      },
      'gen-6': {
        question: 'Decoy Phraseを使用するにはオンラインである必要がありますか？',
        answer:
          '状況によります。\n\nDecoy Phrase Generatorは完全にオフラインで動作します。デコイテキストの生成、マッピングファイルの作成、データの復元など、すべての主要なプロセスは、インターネット接続なしで完全にデバイス上で実行されます。\n\nただし、Permanent Storageは、ゼロ知識アーキテクチャを使用して暗号化されたファイルをArweaveブロックチェーンに保存するために、オンライン接続が必要です。',
      },
      'gen-7': {
        question: '第三者の助けを借りずにシードフレーズや機密データを復元できますか？',
        answer:
          'はい。Decoy Phraseは、仲介者なしで完全に自律的に使用できるように設計されています。デコイテキストと対応するマッピングファイルを使用して、システムはDecoy Phrase Generatorを介してデバイス上で直接、完全にオフラインで元のデータを復元します。第三者は一切関与しません。',
      },
      'gen-8': {
        question: 'デコイテキストを他の人と共有しても安全ですか？',
        answer:
          'はい、安全です。\n\nデコイテキストは平凡に見えるように設計されており、それ自体には使用可能な機密情報は含まれていません。対応するマッピングファイルがないと、元のデータを復元するために使用することはできません。同様に、対応するデコイテキストのないマッピングファイルも使用できません。したがって、デコイテキストのみを共有しても秘密は漏洩しません。',
      },
      'gen-9': {
        question: 'Decoy Phraseはパスワードマネージャーとどう違うのですか？',
        answer:
          'Decoy Phraseはオンラインパスワードマネージャーではありません。\n\nシードフレーズ、パスワード、またはその他の機密データの変換は、Decoy Phrase Generatorを介して完全にオフラインで実行されます。\n\nPermanent Storageは、マルチパスワード管理機能を使用して、デコイテキストとマッピングファイルを異なるストレージスペースに分けて保存するためだけに使用されます。\n\nPermanent Storageに保存されたファイルはすべてクライアント側で暗号化されます。万が一漏洩しても、復号化キーはユーザーのみが保持しているため、データは他の人には使用できません。\n\n暗号化されたパスワードをサーバーやクラウドに保存するパスワードマネージャーとは異なり、Decoy Phraseは機密データをいつ、どこで保存および復元するかについて、ユーザーに完全な制御権を与えます。',
      },
      'prod-1': {
        question: 'Decoy Phrase Generatorとは何ですか？その構成要素は？',
        answer:
          'Decoy Phrase Generatorは、Mapping Maker（マッピングメーカー）とText Generator（テキストジェネレーター）を組み合わせた、Decoy Phraseエコシステムの中核ツールです。\n\nMapping Makerは、シードフレーズや機密データを平凡なデコイテキストに変換し、復元キーとして機能するマッピングファイルを作成します。一方、Text Generatorはこのマッピングファイルを使用して、デコイテキストから元のデータを復元します。\n\nすべてのプロセスは、機密データがいかなるサーバーにも送信されないように、インターネット接続なしでユーザーのデバイス上で完全に実行されます。',
      },
      'prod-2': {
        question: 'マッピングファイルとは何ですか？なぜ別々に保存する必要があるのですか？',
        answer:
          'マッピングファイルは、技術情報を含み、デコイテキストから元のデータを復元するための唯一のキーとして機能する特別なファイル（.json）です。\n\n直接的な機密データは含まれておらず、対応するデコイテキストなしでは意味をなしません。したがって、マッピングファイルはデコイテキストとは別に保存する必要があります。この分離により、単一のファイルが秘密を漏らすのを防ぎます。両方の正しい組み合わせなしでは復元は不可能です。つまり、どの単一のコンポーネントにも、それ自体で悪用できる機密情報は含まれていません。',
      },
      'prod-3': {
        question: 'Permanent Storageはどのように機能しますか？サポートされているファイル形式は？',
        answer:
          'Permanent Storageは、デコイテキストとマッピングファイルを永続的かつ不変の方法で保存するArweaveベースのストレージレイヤーです。\n\n従来のサーバーに依存することなく、長期的なテキストバックアップのための「一度書けば永遠に読める」ストレージとして設計されています。\n\nPermanent Storageは、.txt、.md、.jsonなどのテキストベースのファイルのみをサポートしています。画像、動画、音声ファイルなどの他の形式はサポートされていません。\n\nすべてのアップロードは、Shared Master Wallet（共有マスターウォレット）を使用して単一のアカウントで管理されるため、ユーザーはブロックチェーンウォレットを作成または管理したり、ブロックチェーンの仕組みを理解したりする必要はありません。ブロックチェーンの複雑さは、シンプルなユーザーインターフェースの背後に隠されています。',
      },
      'prod-4': {
        question:
          'マルチパスワード保管庫（Multi-Password Vaults）とは何ですか？どのように使用されますか？',
        answer:
          'マルチパスワード保管庫は、単一のアカウントに複数の隔離されたストレージ保管庫を持たせ、それぞれを異なるパスワードで保護できるPermanent Storageの機能です。たとえば、ユーザーはデコイテキストを保管庫Aに保存し、マッピングファイルを保管庫Bに保存して、それぞれに別のパスワードを使用できます。\n\n各保管庫は論理的に隔離されているため、1つの保管庫へのアクセス権があっても他の保管庫へのアクセス権は付与されません。その結果、パスワードが侵害されても1つの保管庫のみが露出し、他の機密ファイルは安全に保たれます。',
      },
      'prod-5': {
        question: 'Decoy Phrase Generatorは異なるデバイスで使用できますか？',
        answer:
          'はい。Decoy Phrase Generatorは複数のプラットフォームで利用できます。主要なデスクトップオペレーティングシステム（Windows、macOS、Linux）およびAndroidデバイスで実行できます。\n\nすべての操作はローカルデバイス上でオフラインで実行されるため、Decoy Phraseはインターネットアクセスのない環境や、「エアギャップ（air-gapped）」コンピュータなどの高セキュリティシステムでも使用できます。',
      },
      'prod-6': {
        question:
          'これらの機能を使用するために、ユーザーはブロックチェーンを理解する必要がありますか？',
        answer:
          'いいえ。Decoy Phraseは永久ストレージのために舞台裏でブロックチェーン技術（Arweave）を使用していますが、インターフェースはユーザーがブロックチェーンに関する複雑さを扱う必要がないように設計されています。\n\nユーザーは、Shared Master Walletを使用してテキストとパスワードを管理することに集中するだけです。独自のブロックチェーンウォレットを作成、保持、または管理する必要はありません。その結果、Decoy Phraseのすべての機能は、ブロックチェーン技術に関する事前の知識なしで使用できます。',
      },
      'sec-1': {
        question: 'システムはユーザーデータをどのように保護しますか？',
        answer:
          'Decoy Phraseは、「オフラインファースト」およびゼロ知識の原則を適用します。これは、機密データのすべての変換および暗号化操作が、インターネット接続やサーバーを必要とせずに、ユーザーのデバイス上で完全に実行されることを意味します。\n\nデータはPermanent Storageに保存される前にクライアント側で処理および暗号化（AES-256-GCMなどを使用）されるため、パブリックストレージにはユーザーのキーなしでは読み取れない暗号化されたデータのみが含まれます。\n\nさらに、どのサーバーもシードフレーズや元の機密データを保存しないため、攻撃の価値ある標的となる中央集権的な保管庫が存在しません。このアプローチにより、第三者への依存がなくなり、セキュリティが信頼ベースの保護から、外部アクセスを設計上不可能にする技術的アーキテクチャへと移行します。',
      },
      'sec-2': {
        question: 'Decoy PhraseはPermanent Storage内の私のファイルを削除できますか？',
        answer:
          'いいえ。Decoy Phraseは、一度Permanent Storageに保存されたファイルを削除することはできません。Permanent Storageは、データが設計上不変であるArweaveブロックチェーン上に構築されています。ファイルがアップロードされると、Decoy Phraseや他の誰も、削除、変更、または消去することはできません。',
      },
      'sec-3': {
        question: 'システムは機密データが保存されないことをどのように保証しますか？',
        answer:
          'Decoy Phraseは、「変換と分離」の原則を使用します。元のデータはオフラインで、ランダムに見え、隠された意味を持たない平凡なデコイテキストに変換されます。生成されたマッピングファイルには技術的な復元情報が含まれていますが、元の機密データは含まれていません。\n\nこれら2つのコンポーネントは別々に保存する必要があります（たとえば、異なる場所に、または異なるパスワードで保護して）。その結果、どの単一のコンポーネントも元の秘密を含んでいません。マッピングファイルがなければデコイテキストは役に立たず、デコイテキストがなければマッピングファイルは無意味です。\n\nこの方法は、元の機密データがアプリケーションやサーバーに直接保存されることがないことを保証します。',
      },
      'sec-4': {
        question: 'システムはPermanent Storageについて何を知っていて、何を知らないのですか？',
        answer:
          'Decoy Phraseはゼロ知識システムであるため、システムはユーザーデータの内容を一切知りません。\n\nすべてのデータはアップロード前にユーザーのローカルブラウザで完全に暗号化されるため、シードフレーズ、パスワード、または元のファイルの内容を見ることはできません。\n\nシステムに表示される唯一の情報は、ユーザー名（パブリック識別子として使用）や保存されたファイル数などの機密性のない一般的なメタデータです。\n\nデコイテキストとマッピングファイルの関係もシステムには知られていません。要するに、ユーザーのコンテンツと秘密は決して公開されず、暗号化されたデータと限られた一般的なメタデータのみが存在します。',
      },
      'sec-5': {
        question:
          'Decoy Phraseのセキュリティアプローチは、従来のシステム（パスワードマネージャーなど）とどう違うのですか？',
        answer:
          '• 元のデータの保存：従来のパスワードマネージャーは、ユーザーの秘密（パスワード、シードなど）を暗号化された保管庫内に保存します。Decoy Phraseは元のデータを一切保存しません。\n\n• アーキテクチャ：パスワードマネージャーは通常、同期のためにサーバーまたはクラウドインフラストラクチャに依存しています。Decoy Phraseはオフラインファーストであり、バックエンドがなく、第三者に依存しません。\n\n• セキュリティモデル：パスワードマネージャーでは、セキュリティは保管庫の暗号化とマスターパスワードに依存します。保管庫またはマスターパスワードが侵害されると、すべてのデータが漏洩する可能性があります。Decoy Phraseにはそのような保管庫はありません。単一のファイル（デコイテキストまたはマッピングファイル）が漏洩しても、各コンポーネント単体では価値がないため、元のデータを復元するには不十分です。\n\n• 単一障害点：パスワードマネージャーの保管庫は価値の高い標的です。Decoy Phraseには秘密を含む単一のオブジェクトはありません。2つのコンポーネント（デコイテキストとマッピングファイル）が一緒に侵害されない限り、攻撃の主要な障害点はありません。',
      },
      'sec-6': {
        question: 'デコイファイルやマッピングファイルが他人の手に渡った場合はどうなりますか？',
        answer:
          '• デコイテキストのみが漏洩した場合、秘密は漏洩しません。デコイテキストは機密性のない平凡なデータであり、マッピングファイルなしでは使用できません。\n\n• マッピングファイルのみが漏洩した場合、元のデータは安全なままです。マッピングファイルには技術的な文字パターンのみが含まれており、機密コンテンツはなく、対応するデコイテキストなしでは役に立ちません。\n\n• 元のデータは、両方のコンポーネントが一緒に漏洩した場合にのみ復元可能です。この場合、攻撃者が必要な両方のコンポーネントを持っているため、セキュリティは完全に破られます。',
      },
      'sec-7': {
        question: 'ファイルを分離しない場合のリスクは何ですか？',
        answer:
          '主なリスクは、デコイテキストとマッピングファイルが別々に保存されていない場合（たとえば、同じ場所に、または同じパスワードで保護されている場合）に発生します。\n\nこれが発生すると、両方のコンポーネントにアクセスできる人は誰でも元のデータを直接復元できます。言い換えれば、システムは2つのコンポーネントが誤って一緒に配置された場合にのみ失敗します。\n\nしたがって、厳格な分離が不可欠です。デコイテキストとマッピングファイルを異なる場所に保存するか、異なるパスワードで保護してください。適切に分離されていれば、そのような失敗の可能性は極めて低くなります。',
      },
    },
  },
  donate: {
    title: 'Decoy Phraseをサポート',
    description:
      'Decoy Phraseは無料で使用でき、非営利の取り組みとして構築されています。ペイウォールや必須のサブスクリプションはありません。寄付は任意であり、透明性があります。',
    link: 'プロジェクトのライブメトリクスと公開データはこちらでご覧ください！',
    cards: {
      storage: {
        title: 'ストレージ基金',
        description:
          'この寄付は直接ストレージウォレットに送られ、自動的にストレージ基金に追加されます。これにより、恒久的なストレージが確保され、利用可能な容量が増加します。',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">取引所からARを送信</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>ARトークンを購入</li>
      <li>送信(Send)または出金(Withdraw)セクションへ移動</li>
      <li>オンチェーン出金(On-Chain Withdraw)を選択</li>
      <li>AR (Arweave)を選択</li>
      <li>Decoy Phraseウォレットアドレスを貼り付け</li>
      <li>Arweaveネットワークを選択</li>
      <li>金額を入力</li>
      <li>出金を確認</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">AR送金には通常1〜5分かかります。</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Wander WalletからARを送信</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Wander Walletを作成</li>
      <li>利用可能な方法でARトークンを購入</li>
      <li>送信(Send)をクリック</li>
      <li>Decoy Phraseウォレットアドレスを貼り付け</li>
      <li>金額を入力</li>
      <li>トランザクションを確認</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: 'チーム基金',
        description:
          'この寄付は、開発、マーケティング、コミュニティの取り組みを含む、Decoy Phraseチームとエコシステムをサポートします。資金は必要に応じてストレージに向けられることもあります。',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">取引所からステーブルコインを送信</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>USDT、USDC、またはその他のサポートされているステーブルコインを購入</li>
      <li>送信(Send)または出金(Withdraw)セクションへ移動</li>
      <li>オンチェーン出金(On-Chain Withdraw)を選択</li>
      <li>送信したいステーブルコインを選択</li>
      <li>Decoy Phraseウォレットアドレスを貼り付け（選択したネットワークと一致することを確認）</li>
      <li>ウォレットアドレスと一致するネットワークを選択</li>
      <li>金額を入力</li>
      <li>出金を確認</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">DEXからステーブルコインを送信</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>ステーブルコインまたは選択したネットワークのネイティブトークンを購入</li>
      <li>送信(Send)または出金(Withdraw)セクションへ移動</li>
      <li>送信したいネットワークまたはコインを選択</li>
      <li>トークンとネットワークに応じたDecoy Phraseウォレットアドレスを貼り付け</li>
      <li>金額を入力</li>
      <li>トランザクションを確認</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: 'ストレージ計算機',
    info: {
      p1: '12単語のシードのマッピングファイルの平均サイズは約50KBです。アップロードには現在<strong class="text-foreground">Turbo (ar.io提供)</strong>を使用しており、最大105KBまでのファイルを無料でアップロードできます。バックアップとしてArweave手数料の直接支払いも可能です。',
      p2: '恒久ストレージに保存されたすべてのデータは、容量が使い果たされ、それ以上の寄付がなくても永久に利用可能なままです。追加の容量は、将来のユーザーとDecoy Phraseの世代をサポートするためのものです。',
    },
    labels: {
      donationAmount: '寄付金額',
      arweaveEquivalent: 'Arweave相当額',
      winstonAmount: 'Winston額',
      capacityIncrease: 'この寄付による容量増加',
      files: 'ファイル',
      calculate: '計算する',
      currentBalance: '現在の残高',
      howToDonate: '寄付方法は？',
      copied: 'コピーしました！',
      addressCopied: 'アドレスをコピーしました！',
      copyAddress: 'ウォレットアドレスをコピー',
      selectNetwork: 'ネットワークを選択',
      walletAddress: 'ウォレットアドレス',
    },
  },
  metrics: {
    title: 'Decoy Phraseライブメトリクス',
    labels: {
      totalUsers: '総ユーザー数',
      totalFilesStored: '総保存ファイル数',
      totalFilesLocked: '総ロックファイル数',
      totalDonations: '総寄付額',
      remainingCapacity: '残りのファイル容量',
      downloadTotal: 'ジェネレーター総ダウンロード数',
    },
    status: {
      live: 'ライブ',
      reconnecting: '再接続中...',
      disconnected: '切断',
    },
    filters: {
      day: '日',
      month: '月',
      quarter: '四半期',
      year: '年',
      all: 'すべて',
    },
  },
  download: {
    title: 'いつでもシードフレーズを変換・復元。',
    subtitle:
      'シードフレーズをカスタマイズ可能なデコイテキストに変換し、プライベートマッピングファイルを使用していつでも元の情報を復元できます。すべて完全にオフラインで動作し、シードフレーズが保存、アップロード、送信されることはありません。',
    cta: {
      about: 'Decoyジェネレーターについて',
      tutorials: 'チュートリアルを見る',
    },
  },
  feedback: {
    title: 'フィードバックとサポート',
    description:
      'Decoy Generatorを改善するために、提案を共有したり問題を報告したりしてください。シードフレーズや機密データは送信しないでください。',
    discord: {
      text: '<span class="font-bold text-[#5865F2]">Discord</span>に参加して、コミュニティからのアップデートと解決策を入手してください。',
      linkText: '参加する！',
    },
    forms: {
      feedback: {
        title: 'フィードバック',
        name: '名前',
        subject: '件名',
        description: '説明',
        email: 'メールアドレス',
        submit: '送信',
        submitting: '送信中...',
        success: 'フィードバックを送信しました！Discordでアップデートを確認してください。',
        error: '送信に失敗しました。もう一度お試しください。',
        required: '必須',
        invalidEmail: '無効なメールアドレス',
        minChar: '10文字以上である必要があります',
      },
      support: {
        title: 'サポート',
        category: 'カテゴリ',
        appVersion: 'アプリバージョン',
        reference: '参照リンク（任意）',
        referenceHelper:
          'スクリーンショットや動画をGoogleドライブなどのクラウドにアップロードし、アクセス権を「リンクを知っている全員」に設定して、リンクをここに貼り付けてください。',
        required: '必須',
        invalidEmail: '無効なメールアドレス',
        minChar: '10文字以上である必要があります',
      },
    },
  },
};
