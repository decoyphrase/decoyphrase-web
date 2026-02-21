import { Translations } from './types';

export const zhTranslations: Translations = {
  nav: {
    about: '关于我们',
    userGuide: '用户指南',
    faq: '常见问题',
    brandKit: '品牌套件',
    liveMetrics: '实时指标',
    decoyToken: '$DECOY',
    products: '产品',
    decoyGenerator: '诱饵生成器',
    permanentStorage: '永久存储',
    permanentWeb: '永久网络',
    donate: '捐赠',
    docs: '文档',
    connect: '连接',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: '反馈',
  },
  header: {
    login: '登录',
    menu: '菜单',
    language: '语言',
  },
  footer: {
    columns: {
      decoyPhrase: '诱饵短语',
      coreComponents: '核心组件',
      downloadGenerator: '下载生成器',
    },
    links: {
      privacy: '隐私政策',
      terms: '服务条款',
      forum: '论坛',
    },
    mission: {
      text: '我们的使命是保护数字隐私并确保存储不可变。',
      ctaText: '加入革命',
    },
  },
  hero: {
    titlePart1: '保护您的',
    titlePart2: '数字足迹',
    titleHighlight: '永久地',
    subtitle: '利用去中心化存储和先进的诱饵技术保护您的数据。',
  },
  heroActions: {
    getStarted: '开始使用',
    watchTutorials: '观看教程',
    generator: '生成器',
    storage: '存储',
  },
  features: {
    title: '我们的核心',
    titleHighlight: '功能',
    subtitle: '探索保护您数据和身份的工具。',
    cards: {
      generator: { title: '诱饵生成器', description: '创建逼真的诱饵文件以混淆潜在的入侵者。' },
      storage: { title: '永久存储', description: '将您的数据永久存储在 Arweave 区块链上。' },
      web: { title: '永久网络', description: '部署无法被审查或移除的去中心化网站。' },
    },
  },
  howItWorks: {
    title: 'Decoy Phrase 如何工作',
    subtitle: '简单的步骤。强大的安全性。零托管。',
    steps: {
      '1': {
        title: '转换您的助记词',
        description:
          '将您的助记词转换为诱饵文本。使用 Decoy Phrase 生成器完全离线处理，无服务器，无云端，无数据收集。',
      },
      '2': {
        title: '接收两个独立文件',
        description:
          '您会收到一份看起来普通且不包含可用信息的诱饵文本，以及一份作为恢复原始秘密的唯一密钥的映射文件——没有这两者，恢复是不可能的。',
      },
      '3': {
        title: '分开存储它们',
        description:
          '将诱饵文本和映射文件分开存储。可以将它们存储在本地的不同位置，或使用多密码保险库存储在永久存储中。',
      },
      '4': {
        title: '仅在重要时恢复',
        description: '当需要恢复时，在 Decoy Phrase 生成器中使用这两个文件来恢复您的原始助记词。',
      },
    },
  },
  prosCons: {
    title: '助记词备份的优缺点',
    subtitle: '没有完美的助记词备份——只有不同的风险。',
    methods: {
      paper: {
        name: '纸质备份',
        criteria: {
          free: '无需成本',
          easyAccess: '需要物理访问',
          highSecurity: '容易被盗、拍照或复制',
          highPrivacy: '完全离线存储',
          lossProof: '可能会丢失或被意外丢弃',
          destructionProof: '容易受到火灾、水灾和老化的影响',
        },
      },
      metal: {
        name: '金属备份',
        criteria: {
          free: '需要购买金属板',
          easyAccess: '需要物理访问和取回',
          highSecurity: '任何找到它的人都可以直接使用',
          highPrivacy: '没有第三方参与的离线存储',
          lossProof: '仍然可能丢失或被盗',
          destructionProof: '防火防水',
        },
      },
      'local-storage': {
        name: '本地存储',
        criteria: {
          free: '使用现有硬件',
          easyAccess: '需要设备、端口和兼容性',
          highSecurity: '容易受到恶意软件或盗窃的攻击',
          highPrivacy: '没有第三方参与的本地存储',
          lossProof: '容易丢失、损坏或损坏',
          destructionProof: '容易受到硬件故障的影响',
        },
      },
      cloud: {
        name: '云存储',
        criteria: {
          free: '需要订阅或付费存储空间',
          easyAccess: '登录后随处可访问',
          highSecurity: '黑客攻击和账户盗窃的目标',
          highPrivacy: '由第三方提供商控制',
          lossProof: '冗余副本降低了丢失风险',
          destructionProof: '账户可能会被删除或冻结',
        },
      },
      encrypted: {
        name: '加密数字文件',
        criteria: {
          free: '可以使用免费工具创建',
          easyAccess: '需要密码和正确的软件',
          highSecurity: '只有在密码从未泄露的情况下才强大',
          highPrivacy: '隐私取决于存储位置',
          lossProof: '丢失密码意味着永久丢失',
          destructionProof: '文件损坏或删除是致命的',
        },
      },
      shamir: {
        name: "Shamir's Secret Sharing",
        criteria: {
          free: '需要专门的工具或兼容的钱包',
          easyAccess: '需要收集门限份额',
          highSecurity: '单个份额在加密上是无用的',
          highPrivacy: '没有任何一方持有完整的助记词',
          lossProof: '容忍有限的份额丢失',
          destructionProof: '丢失过多份额会破坏恢复',
        },
      },
      custodian: {
        name: '托管人',
        criteria: {
          free: '托管服务通常收费',
          easyAccess: '通过账户访问轻松恢复',
          highSecurity: '用户完全依赖第三方',
          highPrivacy: '托管人拥有可见性和控制权',
          lossProof: '资金可能会被冻结或没收',
          destructionProof: '公司破产可能导致全部损失',
        },
      },
      splitting: {
        name: '助记词分割',
        criteria: {
          free: '无需成本',
          easyAccess: '需要收集所有部分',
          highSecurity: '部分片段仍然会泄露信息',
          highPrivacy: '通常以明文形式存储',
          lossProof: '丢失一部分会破坏恢复',
          destructionProof: '物理损坏会影响恢复',
        },
      },
      lawyer: {
        name: '律师',
        criteria: {
          free: '需要持续的法律费用',
          easyAccess: '访问取决于法律程序',
          highSecurity: '涉及人为信任和法律风险',
          highPrivacy: '律师可能会访问原始助记词',
          lossProof: '容易受到人为错误或纠纷的影响',
          destructionProof: '文件可能会丢失或销毁',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: '免费的非营利系统',
          easyAccess: '通过永久存储和可下载的应用程序随时可恢复',
          highSecurity: '真正的助记词从未直接存储',
          highPrivacy: '诱饵文本本身没有意义',
          lossProof: '单个部分本身对攻击者毫无用处',
          destructionProof: '可以在永久存储中备份',
        },
      },
    },
    criteriaLabels: {
      free: '免费',
      easyAccess: '易于访问',
      highSecurity: '高安全性',
      highPrivacy: '高隐私性',
      lossProof: '防丢失',
      destructionProof: '防破坏',
    },
  },
  securityDemo: {
    title: '通过分离实现安全',
    subtitle: '没有映射文件，无法恢复。没有诱饵文本，无法访问。',
    annotations: {
      decoy: '您必须拥有诱饵文本，它充当您原始敏感数据的混淆表示。',
      mapping: '您必须拥有映射文件，其中包含从诱饵文本重建原始数据所需的转换规则。',
      result: '您生成的助记词将显示在这里',
      clickToGenerate: '点击此处生成助记词',
    },
    buttons: {
      simulateDecoy: '点击模拟放置诱饵文本',
      placeDecoy: '✓ 诱饵文本已放置',
      simulateMapping: '点击模拟上传映射文件',
      uploadMapping: '更新映射',
      mappingLoaded: '映射已加载',
      updateMapping: '更新新的映射文件',
      generate: '生成结果',
      decrypting: '解密中...',
    },
    labels: {
      decoyText: '诱饵文本',
      asciiText: 'ASCII 文本',
      resultPlaceholder: '结果将显示在这里...',
    },
  },
  faq: {
    title: '常见问题',
    subtitle: '以下是关于 Decoy Phrase 的一些常见问题。没有找到您需要的答案？',
    chatAi: '向 AI 咨询关于 Decoy Phrase 的问题！',
    categories: {
      general: '常规',
      products: '产品',
      security: '安全与隐私',
    },
    items: {
      'gen-1': {
        question: '什么是 Decoy Phrase？',
        answer:
          'Decoy Phrase 是一种“离线优先”的方法，用于保护和备份助记词及敏感文本——无需存储原始数据。\n\n它将秘密转换为看似普通、无害的文本，只有结合私有的映射文件和转换后的文本才能恢复。\n\n为了实现长期持久性，诱饵文件和映射文件可以通过连接到 Arweave 区块链的 Decoy Phrase 永久存储进行永久保存——确保它们不会丢失、篡改或删除。',
      },
      'gen-2': {
        question: 'Decoy Phrase 是免费的吗？',
        answer:
          '是的。Decoy Phrase 完全免费，并作为非营利性计划运营。所有核心功能——包括生成诱饵文本、创建映射文件和离线恢复——均可免费使用。\n\n对于 Decoy Phrase 永久存储，存储由捐赠支持。这些捐赠用于资助 Arweave 区块链上永久存储容量的扩展。无论服务的未来状态如何，已存储在区块链上的任何文件都将永远可访问。',
      },
      'gen-3': {
        question: 'Decoy Phrase 中的“永久”是什么意思？',
        answer:
          '在 Decoy Phrase 中，永久的概念适用于网站、域名和存储的数据，这由构建在 Arweave 之上的永久网络和永久存储实现。',
      },
      'gen-4': {
        question: 'Decoy Phrase 会存储我的数据吗？',
        answer:
          '不会。Decoy Phrase 绝不会存储您的助记词或原始敏感数据。生成诱饵文本和映射文件的过程完全使用 Decoy Phrase 生成器离线运行。因此，不存在您的秘密被存储在任何服务器上的风险。\n\n当文件存储在永久存储中时，所有数据在发送到 Arweave 区块链之前都会在客户端进行加密——包括密码、文件内容和文件名。',
      },
      'gen-5': {
        question: '如果我同时丢失了映射文件和相关的诱饵文本会发生什么？',
        answer:
          '如果您丢失了映射文件和相应的诱饵文本，您的原始数据将永久无法恢复。Decoy Phrase 故意设计为没有任何重置、备份或恢复机制，并且从不存储您的原始秘密，使得在没有这两个组件的情况下恢复在技术上是不可能的。\n\n这就是 Decoy Phrase 提供永久存储的原因：通过允许将诱饵和映射文件存储在不可变的长期存储中来降低意外丢失的风险，该存储无法被删除、更改或悄悄丢失，同时保持零知识和非托管设计——所有文件都在客户端加密，完全控制权保留在用户手中。',
      },
      'gen-6': {
        question: '我需要联网才能使用 Decoy Phrase 吗？',
        answer:
          '视情况而定。\n\nDecoy Phrase 生成器完全离线工作。所有主要流程——诱饵文本创建、映射文件生成和数据恢复——完全在您的设备上执行，无需任何互联网连接。\n\n但是，永久存储需要在线连接，因为它使用零知识架构将加密文件存储在 Arweave 区块链上。',
      },
      'gen-7': {
        question: '我可以在没有第三方协助的情况下恢复助记词或敏感数据吗？',
        answer:
          '可以。Decoy Phrase 专为完全自主使用而设计，无需中介。使用您的诱饵文本和相关的映射文件，系统将通过 Decoy Phrase 生成器直接在您的设备上完全离线地恢复您的原始数据——无需任何第三方参与。',
      },
      'gen-8': {
        question: '与他人分享诱饵文本安全吗？',
        answer:
          '是的，它是安全的。\n\n诱饵文本旨在看起来很普通，本身不包含任何可用的敏感信息。没有相应的映射文件，它无法用于恢复原始数据。同样，没有相关诱饵文本的映射文件也是不可用的。因此，仅分享诱饵文本不会暴露您的秘密。',
      },
      'gen-9': {
        question: 'Decoy Phrase 与密码管理器有何不同？',
        answer:
          'Decoy Phrase 不是在线密码管理器。\n\n助记词、密码或其他敏感数据的转换通过 Decoy Phrase 生成器完全离线执行。\n\n永久存储仅用于存储诱饵文本和映射文件，使用多密码管理功能将它们分隔在不同的存储空间中。\n\n存储在永久存储中的所有文件都在客户端加密。即使它们被暴露，解密密钥仅由用户持有，使得数据对其他任何人都是不可用的。\n\n与将加密密码存储在服务器或云端的密码管理器不同，Decoy Phrase 让您完全控制敏感数据的存储和恢复方式及位置。',
      },
      'prod-1': {
        question: '什么是 Decoy Phrase 生成器及其组件？',
        answer:
          'Decoy Phrase 生成器是 Decoy Phrase 系统中的核心工具，结合了映射制作器（Mapping Maker）和文本生成器（Text Generator）。\n\n映射制作器将助记词或敏感数据转换为普通的诱饵文本，并生成用作恢复密钥的映射文件，而文本生成器使用该映射文件从诱饵文本中恢复原始数据。\n\n所有过程完全在用户设备上离线运行，确保没有任何敏感数据发送到任何服务器。',
      },
      'prod-2': {
        question: '什么是映射文件，为什么要单独存储它？',
        answer:
          '映射文件是一个私有文件（.json），包含技术信息，并作为从诱饵文本中恢复原始数据的唯一密钥。\n\n它不直接包含敏感数据，如果没有相关的诱饵文本，它就没有意义。因此，映射文件必须与诱饵文本分开存储。这种分离防止单个文件泄露秘密。没有两者的正确组合，恢复是不可能的——这意味着没有任何单个组件包含本身可利用的敏感信息。',
      },
      'prod-3': {
        question: '永久存储是如何工作的，支持哪些文件格式？',
        answer:
          '永久存储是基于 Arweave 的存储层，用于永久且不可变地存储诱饵文本和映射文件。\n\n它被设计为用于长期文本备份的“一次写入，永久读取”存储，不依赖于传统服务器。\n\n永久存储仅支持基于文本的文件，如 .txt、.md 和 .json。不支持图像、视频或音频文件等其他格式。\n\n所有上传都通过使用共享主钱包的单个帐户进行管理，因此用户无需创建或管理区块链钱包，也无需了解区块链机制。区块链的复杂性隐藏在简单的用户界面背后。',
      },
      'prod-4': {
        question: '什么是多密码保险库，如何使用它们？',
        answer:
          '多密码保险库是永久存储的一项功能，允许单个帐户包含多个隔离的存储保险库，每个保险库由不同的密码保护。例如，用户可以将诱饵文本存储在保险库 A 中，将映射文件存储在保险库 B 中，分别为每个保险库使用单独的密码。\n\n每个保险库在逻辑上是隔离的，这意味着访问一个保险库不会授予对其他保险库的访问权限。因此，密码泄露仅会暴露一个保险库，从而确保其他敏感文件的安全。',
      },
      'prod-5': {
        question: 'Decoy Phrase 生成器可以在不同的设备上使用吗？',
        answer:
          '可以。Decoy Phrase 生成器可在多个平台上使用。它可以在主要的桌面操作系统（Windows、macOS、Linux）和 Android 设备上运行。\n\n由于所有过程都在本地设备上离线执行，Decoy Phrase 也可以在没有互联网访问的环境或高安全性系统（如“气隙”计算机）中使用。',
      },
      'prod-6': {
        question: '用户需要了解区块链才能使用这些功能吗？',
        answer:
          '不需要。虽然 Decoy Phrase 在后台使用区块链技术（Arweave）进行永久存储，但界面的设计使用户无需处理任何与区块链相关的复杂性。\n\n通过使用共享主钱包，用户只需专注于管理他们的文本和密码；他们不需要创建、存储或管理自己的区块链钱包。因此，无需具备区块链技术的先验知识即可使用 Decoy Phrase 的所有功能。',
      },
      'sec-1': {
        question: '系统如何保护用户数据？',
        answer:
          'Decoy Phrase 采用“离线优先”和零知识原则，这意味着所有敏感数据的转换和加密完全在用户设备上执行——无需互联网连接或任何服务器。\n\n数据在存储到永久存储之前在客户端进行处理和加密（例如，使用 AES-256-GCM），因此公共存储仅包含没有用户密钥无法读取的加密数据。\n\n此外，任何服务器上都不会存储任何助记词或原始敏感数据，这意味着不存在可能成为高价值攻击目标的中央保险库。这种方法消除了对第三方的依赖，并将安全性从基于信任的保护转变为在设计上使外部访问变得不可能的技术架构。',
      },
      'sec-2': {
        question: 'Decoy Phrase 可以删除我在永久存储中的文件吗？',
        answer:
          '不能。一旦文件存储在永久存储中，Decoy Phrase 就无法删除您的文件。永久存储建立在 Arweave 区块链上，数据在设计上是不可变的。一旦文件上传，Decoy Phrase 或其他任何人都无法将其移除、修改或擦除。',
      },
      'sec-3': {
        question: '系统如何确保不存储敏感数据？',
        answer:
          'Decoy Phrase 使用“转换和分离”原则。原始数据离线转换为看起来随机且没有任何秘密含义的普通诱饵文本。生成的映射文件包含技术恢复信息，但不包括原始敏感数据。\n\n这两个组件必须分开存储（例如，在不同位置或受不同密码保护）。因此，没有任何单个组件包含原始秘密。没有映射文件，诱饵文本是无用的；没有诱饵文本，映射文件也是无意义的。\n\n这种方法确保原始敏感数据永远不会直接存储在应用程序或任何服务器上。',
      },
      'sec-4': {
        question: '系统在永久存储中知道什么，不知道什么？',
        answer:
          'Decoy Phrase 是零知识的，这意味着系统永远不知道用户数据的内容。\n\n它无法看到助记词、密码或原始文件内容，因为所有数据在上传之前都在用户的本地浏览器中完全加密。\n\n系统唯一可见的信息是非敏感的公共元数据，例如用户名（用作公共标识符）和存储的文件数量。\n\n系统也不知道诱饵文本与其映射文件之间的关系。简而言之，用户内容和秘密永远不会暴露；只存在加密数据和有限的公共元数据。',
      },
      'sec-5': {
        question: 'Decoy Phrase 的安全方法与传统系统（如密码管理器）有何不同？',
        answer:
          '• 原始数据存储：传统密码管理器将用户秘密（密码、种子等）存储在加密保险库中。Decoy Phrase 根本不存储原始数据。\n\n• 架构：密码管理器通常依赖服务器或云基础设施进行同步。Decoy Phrase 是离线优先的，没有后端，也不依赖第三方。\n\n• 安全模型：在密码管理器中，安全性取决于保险库加密和主密码——如果保险库或主密码被破坏，所有数据都可能暴露。Decoy Phrase 没有这样的保险库。单个文件（诱饵文本或映射文件）的泄露不足以恢复原始数据，因为每个组件本身都没有价值。\n\n• 单点故障：密码管理器的保险库是高价值目标。Decoy Phrase 没有包含秘密的单一对象；除非两个组件（诱饵文本和映射文件）一起被破坏，否则不存在可攻击的主要故障点。',
      },
      'sec-6': {
        question: '如果诱饵文件或映射文件落入他人之手会发生什么？',
        answer:
          '• 如果仅暴露诱饵文本，不会泄露任何秘密。诱饵文本是没有敏感含义的普通数据，没有映射文件无法使用。\n\n• 如果仅暴露映射文件，原始数据仍然安全。映射文件仅包含技术字符模式，没有秘密内容，没有相关的诱饵文本是无用的。\n\n• 只有当两者一起暴露时，原始数据才能恢复。在这种情况下，安全性完全崩溃，因为攻击者拥有全部两个必要的组件。',
      },
      'sec-7': {
        question: '不分离文件的风险是什么？',
        answer:
          '主要风险发生在诱饵文本和映射文件未分开存储时（例如，在同一位置或受相同密码保护）。\n\n如果发生这种情况，任何获得两个组件访问权限的人都可以直接恢复原始数据。换句话说，只有当两个组件在无意中结合在一起时，系统才会失效。\n\n这就是为什么严格分离是必不可少的：将诱饵文本和映射文件存储在不同位置或使用不同密码保护它们。当适当地分离时，这种失效极不可能发生。',
      },
    },
  },
  donate: {
    title: '支持 Decoy Phrase',
    description:
      'Decoy Phrase 免费使用，并作为非营利计划构建。没有付费墙，也没有强制订阅。捐赠是自愿且透明的。',
    link: '在此查看实时项目指标和公开数据！',
    cards: {
      storage: {
        title: '存储基金',
        description:
          '此捐赠直接进入存储钱包，并自动添加到存储捐赠基金中，可持续资助永久存储并增加可用容量。',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">从交易所发送 AR</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>购买 AR 代币</li>
      <li>进入发送或提现</li>
      <li>选择链上提现</li>
      <li>选择 AR (Arweave)</li>
      <li>粘贴 Decoy Phrase 的钱包地址</li>
      <li>选择 Arweave 网络</li>
      <li>输入金额</li>
      <li>确认提现</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">AR 转账通常需要 1–5 分钟。</p>
  </li>
  <li>
    <span class="font-bold block mb-1">从 Wander Wallet 发送 AR</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>创建 Wander Wallet</li>
      <li>通过可用支付方式购买 AR 代币</li>
      <li>点击发送</li>
      <li>粘贴 Decoy Phrase 的钱包地址</li>
      <li>输入金额</li>
      <li>确认交易</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: '团队基金',
        description:
          '此捐赠支持 Decoy Phrase 团队和生态系统，包括开发、营销和社区计划。资金也可能在需要时分配给存储。',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">从交易所发送稳定币</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>购买 USDT、USDC 或其他受支持的稳定币</li>
      <li>进入发送或提现</li>
      <li>选择链上提现</li>
      <li>选择您想发送的稳定币</li>
      <li>粘贴 Decoy Phrase 的钱包地址（确保与所选网络匹配）</li>
      <li>选择与钱包地址匹配的网络</li>
      <li>输入金额</li>
      <li>确认提现</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">从 DEX 发送稳定币</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>购买稳定币或所选网络的原生代币</li>
      <li>进入发送或提现</li>
      <li>选择网络或选择您想发送的代币</li>
      <li>根据代币和钱包网络粘贴 Decoy Phrase 的钱包地址</li>
      <li>输入金额</li>
      <li>确认交易</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: '存储计算器',
    info: {
      p1: '12 词助记词映射文件的平均文件大小约为 50 KiB。上传目前使用 <strong class="text-foreground">Turbo (由 ar.io 提供支持)</strong>，允许免费上传 105 KiB 以下的文件，如果 Turbo 不可用，建议使用直接 Arweave 费用计算作为备用。',
      p2: '即使达到容量且没有未来的捐赠，存储在永久存储中的所有数据仍将永远可访问，而额外的容量旨在支持未来的 Decoy Phrase 用户和后代。',
    },
    labels: {
      donationAmount: '捐赠金额',
      arweaveEquivalent: 'Arweave 等值',
      winstonAmount: 'Winston 数量',
      capacityIncrease: '此捐赠将永久存储容量增加',
      files: '文件',
      calculate: '计算',
      currentBalance: '当前余额',
      howToDonate: '如何捐赠？',
      copied: '已复制！',
      addressCopied: '地址已复制！',
      copyAddress: '复制钱包地址',
      selectNetwork: '选择网络',
      walletAddress: '钱包地址',
    },
  },
  metrics: {
    title: 'Decoy Phrase 实时统计',
    labels: {
      totalUsers: '总用户数',
      totalFilesStored: '存储的文件总数',
      totalFilesLocked: '锁定的文件总数',
      totalDonations: '总捐赠',
      remainingCapacity: '剩余文件容量',
      downloadTotal: 'Decoy Phrase 生成器总下载量',
    },
    status: {
      live: '在线',
      reconnecting: '正在重新连接...',
      disconnected: '已断开连接',
    },
    filters: {
      day: '天',
      month: '月',
      quarter: '季',
      year: '年',
      all: '全部',
    },
  },
  download: {
    title: '随时转换并恢复您的原始助记词。',
    subtitle:
      '将您的助记词转换为可定制的诱饵文本，并随时使用您的私有映射文件恢复原始助记词。一切完全离线运行——没有助记词被存储、上传或共享。',
    cta: {
      about: '关于 Decoy 生成器',
      tutorials: '观看教程',
    },
  },
  feedback: {
    title: '反馈与支持',
    description: '分享您的建议或报告问题，以帮助我们改进 Decoy 生成器。请勿发送助记词或敏感数据。',
    discord: {
      text: '加入我们的 <span class="font-bold text-[#5865F2]">Discord</span> 以关注反馈更新和社区解决方案。',
      linkText: '立即加入！',
    },
    forms: {
      feedback: {
        title: '反馈',
        name: '姓名',
        subject: '主题',
        description: '描述',
        email: '电子邮件',
        submit: '提交',
        submitting: '提交中...',
        success: '反馈已发送！请查看 Discord 获取更新。',
        error: '发送失败。请重试。',
        required: '必填',
        invalidEmail: '无效的电子邮件地址',
        minChar: '必须至少包含 10 个字符',
      },
      support: {
        title: '支持',
        category: '类别',
        appVersion: '应用版本',
        reference: '参考链接（可选）',
        referenceHelper:
          '将截图或视频上传到 Google Drive 或其他云服务，将链接设置为“任何拥有链接的人都可以查看”，并将链接粘贴在此处。',
        required: '必填',
        invalidEmail: '无效的电子邮件地址',
        minChar: '必须至少包含 10 个字符',
      },
    },
  },
};
