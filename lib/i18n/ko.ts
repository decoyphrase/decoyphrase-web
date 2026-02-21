import { Translations } from './types';

export const koTranslations: Translations = {
  nav: {
    about: '소개',
    userGuide: '사용자 가이드',
    faq: '자주 묻는 질문',
    brandKit: '브랜드 키트',
    liveMetrics: '실시간 지표',
    decoyToken: '$DECOY',
    products: '제품',
    decoyGenerator: '디코이 생성기',
    permanentStorage: '영구 저장소',
    permanentWeb: '영구 웹',
    donate: '후원하기',
    docs: '문서',
    connect: '연결',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: '피드백',
  },
  header: {
    login: '로그인',
    menu: '메뉴',
    language: '언어',
  },
  footer: {
    columns: {
      decoyPhrase: '디코이 문구',
      coreComponents: '핵심 구성 요소',
      downloadGenerator: '생성기 다운로드',
    },
    links: {
      privacy: '개인정보 처리방침',
      terms: '이용 약관',
      forum: '포럼',
    },
    mission: {
      text: '우리의 사명은 디지털 개인정보를 보호하고 불변의 저장소를 보장하는 것입니다.',
      ctaText: '혁명에 동참하세요',
    },
  },
  hero: {
    titlePart1: '당신의',
    titlePart2: '디지털 발자국을',
    titleHighlight: '영원히 보호하세요',
    subtitle: '분산 저장소와 고급 디코이 기술을 사용하여 데이터를 보호하세요.',
  },
  heroActions: {
    getStarted: '시작하기',
    watchTutorials: '튜토리얼 보기',
    generator: '생성기',
    storage: '저장소',
  },
  features: {
    title: '우리의 핵심',
    titleHighlight: '기능',
    subtitle: '데이터와 신원을 보호하기 위한 도구를 살펴보세요.',
    cards: {
      generator: {
        title: '디코이 생성기',
        description: '침입자를 혼란스럽게 하기 위해 현실적인 가짜 파일을 생성합니다.',
      },
      storage: {
        title: '영구 저장소',
        description: 'Arweave 블록체인에 데이터를 영구적으로 저장합니다.',
      },
      web: {
        title: '영구 웹',
        description: '검열되거나 제거될 수 없는 분산 웹사이트를 배포합니다.',
      },
    },
  },
  howItWorks: {
    title: 'Decoy Phrase 작동 방식',
    subtitle: '간단한 단계. 강력한 보안. 제로 수탁.',
    steps: {
      '1': {
        title: '시드 문구 변환',
        description:
          '시드 문구를 디코이 텍스트로 변환합니다. Decoy Phrase 생성기를 사용하여 서버, 클라우드, 데이터 수집 없이 완전히 오프라인으로 처리됩니다.',
      },
      '2': {
        title: '두 개의 독립적인 파일 받기',
        description:
          '평범해 보이고 사용 가능한 정보가 없는 디코이 텍스트와, 원본 비밀을 복구하기 위한 유일한 키 역할을 하는 매핑 파일을 받습니다. 두 가지 없이는 복구가 불가능합니다.',
      },
      '3': {
        title: '별도로 보관',
        description:
          '디코이 텍스트와 매핑 파일을 별도로 보관하십시오. 로컬의 다른 위치에 두거나 다중 비밀번호 금고를 사용하여 영구 저장소에 보관하십시오.',
      },
      '4': {
        title: '중요한 경우에만 복구',
        description:
          '복구가 필요한 경우, Decoy Phrase 생성기에서 두 파일을 모두 사용하여 원본 시드 문구를 복원하십시오.',
      },
    },
  },
  prosCons: {
    title: '시드 문구 백업의 장단점',
    subtitle: '완벽한 시드 문구 백업은 없습니다 — 서로 다른 위험만 있을 뿐입니다.',
    methods: {
      paper: {
        name: '종이 백업',
        criteria: {
          free: '비용 불필요',
          easyAccess: '물리적 접근 필요',
          highSecurity: '도난, 촬영 또는 복사가 쉬움',
          highPrivacy: '완전히 오프라인으로 보관',
          lossProof: '분실하거나 실수로 버릴 수 있음',
          destructionProof: '화재, 수해 및 노후화에 취약',
        },
      },
      metal: {
        name: '금속 백업',
        criteria: {
          free: '금속 플레이트 구매 필요',
          easyAccess: '물리적 접근 및 회수 필요',
          highSecurity: '발견한 사람은 누구나 직접 사용 가능',
          highPrivacy: '제3자 없이 오프라인 보관',
          lossProof: '여전히 분실하거나 도난당할 수 있음',
          destructionProof: '화재 및 수해에 강함',
        },
      },
      'local-storage': {
        name: '로컬 저장소',
        criteria: {
          free: '기존 하드웨어 사용',
          easyAccess: '기기, 포트 및 호환성 필요',
          highSecurity: '멀웨어 또는 도난에 취약',
          highPrivacy: '제3자 없이 로컬에 보관',
          lossProof: '쉽게 분실, 손상 또는 파손됨',
          destructionProof: '하드웨어 고장에 취약',
        },
      },
      cloud: {
        name: '클라우드 저장소',
        criteria: {
          free: '구독 또는 유료 저장 공간 필요',
          easyAccess: '로그인하여 어디서나 접근 가능',
          highSecurity: '해킹 및 계정 도용의 표적',
          highPrivacy: '제3자 제공업체가 제어',
          lossProof: '중복 백업으로 분실 위험 감소',
          destructionProof: '계정이 삭제되거나 동결될 수 있음',
        },
      },
      encrypted: {
        name: '암호화된 디지털 파일',
        criteria: {
          free: '무료 도구로 생성 가능',
          easyAccess: '비밀번호와 올바른 소프트웨어 필요',
          highSecurity: '비밀번호가 절대 노출되지 않는 경우에만 강력함',
          highPrivacy: '개인정보 보호는 저장 위치에 따라 다름',
          lossProof: '비밀번호 분실은 영구적인 손실을 의미',
          destructionProof: '파일 손상 또는 삭제는 치명적',
        },
      },
      shamir: {
        name: '샤미르의 비밀 공유',
        criteria: {
          free: '전용 도구 또는 호환 지갑 필요',
          easyAccess: '임계값 공유를 수집해야 함',
          highSecurity: '개별 공유는 암호화적으로 쓸모 없음',
          highPrivacy: '아무도 전체 시드 문구를 보유하지 않음',
          lossProof: '제한적인 공유 분실 허용',
          destructionProof: '너무 많은 공유를 잃으면 복구 불가',
        },
      },
      custodian: {
        name: '수탁자',
        criteria: {
          free: '수탁 서비스는 일반적으로 요금을 부과',
          easyAccess: '계정 접근을 통한 쉬운 복구',
          highSecurity: '사용자는 전적으로 제3자에 의존',
          highPrivacy: '수탁자가 가시성과 제어권을 가짐',
          lossProof: '자금이 동결되거나 압수될 수 있음',
          destructionProof: '회사 파산은 전체 손실 위험',
        },
      },
      splitting: {
        name: '시드 분할',
        criteria: {
          free: '비용 불필요',
          easyAccess: '모든 조각을 수집해야 함',
          highSecurity: '부분적인 조각도 정보를 유출함',
          highPrivacy: '일반적으로 평문으로 저장됨',
          lossProof: '한 조각을 잃으면 복구 불가',
          destructionProof: '물리적 손상은 복구에 영향을 미침',
        },
      },
      lawyer: {
        name: '변호사',
        criteria: {
          free: '지속적인 법적 비용 필요',
          easyAccess: '접근은 법적 절차에 따라 달라짐',
          highSecurity: '인간의 신뢰와 법적 위험 포함',
          highPrivacy: '변호사가 원본 시드에 접근할 수 있음',
          lossProof: '인적 오류 또는 분쟁의 대상',
          destructionProof: '서류가 분실되거나 파기될 수 있음',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: '무료 및 비영리 시스템',
          easyAccess: '영구 저장소 및 다운로드 가능한 앱을 통해 언제든지 복구 가능',
          highSecurity: '실제 시드는 절대 직접 저장되지 않음',
          highPrivacy: '디코이 텍스트 자체는 의미가 없음',
          lossProof: '단일 조각은 공격자에게 쓸모 없음',
          destructionProof: '영구 저장소에 백업 가능',
        },
      },
    },
    criteriaLabels: {
      free: '무료',
      easyAccess: '쉬운 접근',
      highSecurity: '높은 보안',
      highPrivacy: '높은 프라이버시',
      lossProof: '분실 방지',
      destructionProof: '파괴 방지',
    },
  },
  securityDemo: {
    title: '분리를 통한 보안',
    subtitle: '매핑 파일 없음 - 복구 불가. 디코이 텍스트 없음 - 접근 불가.',
    annotations: {
      decoy: '원본 민감 데이터의 난독화된 표현 역할을 하는 디코이 텍스트가 있어야 합니다.',
      mapping:
        '디코이 텍스트에서 원본 데이터를 재구성하는 데 필요한 변환 규칙이 포함된 매핑 파일이 있어야 합니다.',
      result: '생성된 시드 문구가 여기에 표시됩니다',
      clickToGenerate: '시드 문구를 생성하려면 클릭하세요',
    },
    buttons: {
      simulateDecoy: '디코이 텍스트 배치 시뮬레이션 클릭',
      placeDecoy: '✓ 디코이 텍스트 배치됨',
      simulateMapping: '매핑 파일 업로드 시뮬레이션 클릭',
      uploadMapping: '매핑 업데이트',
      mappingLoaded: '매핑 로드됨',
      updateMapping: '새 매핑 파일 업데이트',
      generate: '결과 생성',
      decrypting: '복호화 중...',
    },
    labels: {
      decoyText: '디코이 텍스트',
      asciiText: 'ASCII 텍스트',
      resultPlaceholder: '결과가 여기에 표시됩니다...',
    },
  },
  faq: {
    title: '자주 묻는 질문',
    subtitle: 'Decoy Phrase에 대해 궁금한 점이 있으신가요? 여기서 답을 찾아보세요.',
    chatAi: 'Decoy Phrase에 대해 AI에게 물어보세요!',
    categories: {
      general: '일반',
      products: '제품',
      security: '보안 및 개인정보 보호',
    },
    items: {
      'gen-1': {
        question: 'Decoy Phrase란 무엇인가요?',
        answer:
          'Decoy Phrase는 원본 데이터를 저장하지 않고 시드 문구와 민감한 텍스트를 보호하고 백업하는 "오프라인 우선" 방식입니다.\n\n비밀을 무해해 보이는 평범한 텍스트로 변환하며, 복구는 개인 매핑 파일과 변환된 텍스트를 결합해야만 가능합니다.\n\n장기적인 내구성을 위해, 디코이 파일과 매핑 파일은 Arweave 블록체인에 직접 연결된 Decoy Phrase 영구 저장소(Permanent Storage)를 통해 영원히 저장될 수 있어 분실, 변경 또는 삭제되지 않음이 보장됩니다.',
      },
      'gen-2': {
        question: 'Decoy Phrase는 무료인가요?',
        answer:
          '네. Decoy Phrase는 완전히 무료로 사용할 수 있으며 비영리 이니셔티브로 운영됩니다. 디코이 텍스트 생성, 매핑 파일 생성 및 오프라인 복구를 포함한 모든 핵심 기능은 비용 없이 제공됩니다.\n\nDecoy Phrase 영구 저장소의 경우, 저장소는 기부를 통해 지원됩니다. 이러한 기부금은 시간이 지남에 따라 Arweave 블록체인의 영구 저장 용량을 확장하는 데 사용됩니다. 블록체인에 이미 저장된 모든 파일은 서비스의 미래 상태와 관계없이 영원히 액세스 가능한 상태로 유지됩니다.',
      },
      'gen-3': {
        question: 'Decoy Phrase에서 영구적인 것은 무엇인가요?',
        answer:
          'Decoy Phrase에서 영구(Permanent)라는 개념은 Arweave를 기반으로 구축된 영구 웹(Permanent Web)과 영구 저장소(Permanent Storage)에 의해 활성화되는 웹사이트, 도메인 및 저장된 데이터에 적용됩니다.',
      },
      'gen-4': {
        question: 'Decoy Phrase가 내 데이터를 저장하나요?',
        answer:
          '아니요. Decoy Phrase는 시드 문구 또는 원본 민감 데이터를 절대 저장하지 않습니다. 디코이 텍스트 및 매핑 파일 생성 프로세스는 Decoy Phrase 생성기를 사용하여 완전히 오프라인으로 실행됩니다. 결과적으로 비밀이 서버에 저장될 위험이 없습니다.\n\n파일이 영구 저장소에 저장될 때, 비밀번호, 파일 내용 및 파일 이름을 포함한 모든 데이터는 Arweave 블록체인으로 전송되기 전에 클라이언트 측에서 암호화됩니다.',
      },
      'gen-5': {
        question: '매핑 파일과 해당 디코이 텍스트를 모두 분실하면 어떻게 되나요?',
        answer:
          '매핑 파일과 해당 디코이 텍스트를 모두 분실하면 원본 데이터를 영구적으로 복구할 수 없게 됩니다. Decoy Phrase는 의도적으로 재설정, 백업 또는 복구 메커니즘이 없도록 설계되었으며 원본 비밀을 절대 저장하지 않으므로 두 구성 요소 없이는 기술적으로 복구가 불가능합니다.\n\n이것이 Decoy Phrase가 영구 저장소를 제공하는 이유입니다: 디코이 및 매핑 파일을 삭제, 변경 또는 조용히 손실될 수 없는 불변의 장기 저장소에 보관하여 우발적인 손실 위험을 줄이는 동시에, 모든 파일이 클라이언트 측에서 암호화되고 완전한 제어권이 사용자에게 유지되는 제로 지식(zero-knowledge) 및 비수탁(non-custodial) 설계를 유지합니다.',
      },
      'gen-6': {
        question: 'Decoy Phrase를 사용하려면 온라인 상태여야 하나요?',
        answer:
          '상황에 따라 다릅니다.\n\nDecoy Phrase 생성기는 완전히 오프라인으로 작동합니다. 디코이 텍스트 생성, 매핑 파일 생성 및 데이터 복구와 같은 모든 주요 프로세스는 인터넷 연결 없이 전적으로 기기에서 실행됩니다.\n\n그러나 영구 저장소는 제로 지식 아키텍처를 사용하여 암호화된 파일을 Arweave 블록체인에 저장하기 위해 온라인 연결이 필요합니다.',
      },
      'gen-7': {
        question: '제3자의 도움 없이 시드 문구 또는 민감한 데이터를 복구할 수 있나요?',
        answer:
          '네. Decoy Phrase는 중개자 없이 완전히 자율적으로 사용할 수 있도록 설계되었습니다. 디코이 텍스트와 해당 매핑 파일을 사용하면, 시스템은 Decoy Phrase 생성기를 통해 기기에서 직접 오프라인으로 원본 데이터를 복구합니다. 제3자는 전혀 관여하지 않습니다.',
      },
      'gen-8': {
        question: '디코이 텍스트를 다른 사람과 공유해도 안전한가요?',
        answer:
          '네, 안전합니다.\n\n디코이 텍스트는 평범해 보이도록 설계되었으며 그 자체로는 사용할 수 있는 민감한 정보를 포함하지 않습니다. 해당 매핑 파일 없이는 원본 데이터를 복구하는 데 사용할 수 없습니다. 마찬가지로, 해당 디코이 텍스트가 없는 매핑 파일도 사용할 수 없습니다. 따라서 디코이 텍스트만 공유하는 것은 비밀을 노출시키지 않습니다.',
      },
      'gen-9': {
        question: 'Decoy Phrase는 비밀번호 관리자와 어떻게 다른가요?',
        answer:
          'Decoy Phrase는 온라인 비밀번호 관리자가 아닙니다.\n\n시드 문구, 비밀번호 또는 기타 민감한 데이터의 변환은 Decoy Phrase 생성기를 통해 완전히 오프라인으로 수행됩니다.\n\n영구 저장소는 다중 비밀번호 관리 기능을 사용하여 서로 다른 저장소 공간으로 분리된 디코이 텍스트 및 매핑 파일을 저장하는 데에만 사용됩니다.\n\n영구 저장소에 저장된 모든 파일은 클라이언트 측에서 암호화됩니다. 노출되더라도 복호화 키는 사용자만 보유하므로 데이터는 다른 사람이 사용할 수 없습니다.\n\n암호화된 비밀번호를 서버나 클라우드에 저장하는 비밀번호 관리자와 달리, Decoy Phrase는 민감한 데이터가 저장되고 복구되는 방법과 위치에 대한 완전한 제어권을 사용자에게 부여합니다.',
      },
      'prod-1': {
        question: 'Decoy Phrase 생성기란 무엇이며 구성 요소는 무엇인가요?',
        answer:
          'Decoy Phrase 생성기는 매핑 메이커(Mapping Maker)와 텍스트 생성기(Text Generator)를 결합한 Decoy Phrase 시스템의 핵심 도구입니다.\n\n매핑 메이커는 시드 문구 또는 민감한 데이터를 평범한 디코이 텍스트로 변환하고 복구 키 역할을 하는 매핑 파일을 생성하는 반면, 텍스트 생성기는 이 매핑 파일을 사용하여 디코이 텍스트에서 원본 데이터를 복구합니다.\n\n민감한 데이터가 서버로 전송되지 않도록 모든 프로세스는 인터넷 연결 없이 사용자 기기에서 완전히 실행됩니다.',
      },
      'prod-2': {
        question: '매핑 파일이란 무엇이며 왜 별도로 저장해야 하나요?',
        answer:
          '매핑 파일은 기술 정보를 포함하고 디코이 텍스트에서 원본 데이터를 복구하기 위한 유일한 키 역할을 하는 특수 파일(.json)입니다.\n\n직접적인 민감한 데이터를 포함하지 않으며 해당 디코이 텍스트 없이는 의미가 없습니다. 따라서 매핑 파일은 디코이 텍스트와 별도로 저장해야 합니다. 이러한 분리는 단일 파일이 비밀을 노출하는 것을 방지합니다. 두 가지의 올바른 조합 없이는 복구가 불가능합니다. 즉, 어떤 단일 구성 요소도 그 자체로 악용될 수 있는 민감한 정보를 포함하지 않습니다.',
      },
      'prod-3': {
        question: '영구 저장소는 어떻게 작동하며 어떤 파일 형식이 지원되나요?',
        answer:
          '영구 저장소는 디코이 텍스트와 매핑 파일을 영구적이고 불변의 방식으로 저장하는 Arweave 기반 저장소 계층입니다.\n\n기존 서버에 의존하지 않고 장기 텍스트 백업을 위한 "한 번 쓰고 영원히 읽는" 저장소로 설계되었습니다.\n\n영구 저장소는 .txt, .md, .json과 같은 텍스트 기반 파일만 지원합니다. 이미지, 비디오 또는 오디오 파일과 같은 다른 형식은 지원되지 않습니다.\n\n모든 업로드는 공유 마스터 지갑(Shared Master Wallet)을 사용하여 단일 계정을 통해 관리되므로 사용자가 블록체인 지갑을 생성하거나 관리하거나 블록체인 메커니즘을 이해할 필요가 없습니다. 블록체인의 복잡성은 간단한 사용자 인터페이스 뒤에 숨겨져 있습니다.',
      },
      'prod-4': {
        question: '다중 비밀번호 금고(Multi-Password Vaults)란 무엇이며 어떻게 사용되나요?',
        answer:
          '다중 비밀번호 금고는 단일 계정이 각각 다른 비밀번호로 보호되는 여러 격리된 저장소 금고를 포함할 수 있도록 하는 영구 저장소 기능입니다. 예를 들어, 사용자는 디코이 텍스트를 금고 A에 저장하고 매핑 파일을 금고 B에 저장할 수 있으며, 각각 별도의 비밀번호를 사용할 수 있습니다.\n\n각 금고는 논리적으로 격리되어 있어 하나의 금고에 액세스해도 다른 금고에 대한 액세스 권한이 부여되지 않습니다. 결과적으로 비밀번호 침해는 하나의 금고만 노출시키고 다른 민감한 파일은 안전하게 유지합니다.',
      },
      'prod-5': {
        question: 'Decoy Phrase 생성기를 다른 기기에서 사용할 수 있나요?',
        answer:
          '네. Decoy Phrase 생성기는 여러 플랫폼에서 사용할 수 있습니다. 주요 데스크톱 운영 체제(Windows, macOS, Linux) 및 Android 기기에서 실행할 수 있습니다.\n\n모든 작업이 로컬 기기에서 오프라인으로 실행되므로 Decoy Phrase는 인터넷 액세스가 없는 환경이나 "에어 갭(air-gapped)" 컴퓨터와 같은 보안이 강화된 시스템에서도 사용할 수 있습니다.',
      },
      'prod-6': {
        question: '이 기능을 사용하기 위해 사용자가 블록체인을 이해해야 하나요?',
        answer:
          '아니요. Decoy Phrase는 영구 저장소를 위해 백그라운드에서 블록체인 기술(Arweave)을 사용하지만, 인터페이스는 사용자가 블록체인과 관련된 복잡성을 처리할 필요가 없도록 설계되었습니다.\n\n사용자는 공유 마스터 지갑을 사용하여 텍스트와 비밀번호 관리에만 집중하면 됩니다. 자신의 블록체인 지갑을 생성, 보관 또는 관리할 필요가 없습니다. 결과적으로 Decoy Phrase의 모든 기능은 블록체인 기술에 대한 사전 지식 없이도 사용할 수 있습니다.',
      },
      'sec-1': {
        question: '시스템은 사용자 데이터를 어떻게 보호하나요?',
        answer:
          'Decoy Phrase는 "오프라인 우선" 및 제로 지식 원칙을 적용합니다. 이는 민감한 데이터의 모든 변환 및 암호화 작업이 인터넷 연결이나 서버 없이 사용자 기기에서 완전히 수행됨을 의미합니다.\n\n데이터는 영구 저장소에 저장되기 전에 클라이언트 측에서 처리되고 암호화(예: AES-256-GCM 사용)되므로 공용 저장소에는 사용자 키 없이는 읽을 수 없는 암호화된 데이터만 포함됩니다.\n\n또한 어떤 서버에도 시드 문구 또는 원본 민감 데이터가 저장되지 않으므로 공격의 고가치 목표가 될 수 있는 중앙 집중식 금고가 없습니다. 이 접근 방식은 제3자에 대한 의존성을 제거하고 보안을 신뢰 기반 보호에서 외부 액세스를 설계상 불가능하게 만드는 기술적 아키텍처로 전환합니다.',
      },
      'sec-2': {
        question: 'Decoy Phrase가 영구 저장소의 내 파일을 삭제할 수 있나요?',
        answer:
          '아니요. Decoy Phrase는 일단 영구 저장소에 저장된 파일을 삭제할 수 없습니다. 영구 저장소는 설계상 데이터가 불변인 Arweave 블록체인을 기반으로 구축되었습니다. 파일이 업로드되면 Decoy Phrase 또는 다른 누구도 제거, 변경 또는 삭제할 수 없습니다.',
      },
      'sec-3': {
        question: '시스템은 민감한 데이터가 저장되지 않음을 어떻게 보장하나요?',
        answer:
          'Decoy Phrase는 "변환 및 분리" 원칙을 사용합니다. 원본 데이터는 오프라인에서 무작위로 보이고 숨겨진 의미가 없는 평범한 디코이 텍스트로 변환됩니다. 생성된 매핑 파일에는 기술적 복구 정보가 포함되지만 원본 민감 데이터는 포함되지 않습니다.\n\n이 두 구성 요소는 별도로 저장해야 합니다(예: 서로 다른 위치 또는 서로 다른 비밀번호로 보호). 결과적으로 어떤 단일 구성 요소도 원본 비밀을 포함하지 않습니다. 매핑 파일이 없으면 디코이 텍스트는 쓸모가 없고, 디코이 텍스트가 없으면 매핑 파일은 의미가 없습니다.\n\n이 방법은 원본 민감 데이터가 애플리케이션이나 서버에 직접 저장되지 않도록 보장합니다.',
      },
      'sec-4': {
        question: '시스템은 영구 저장소에 대해 무엇을 알고 무엇을 모르나요?',
        answer:
          'Decoy Phrase는 제로 지식이므로 시스템은 사용자 데이터의 내용을 절대 알지 못합니다.\n\n모든 데이터는 업로드되기 전에 사용자의 로컬 브라우저에서 완전히 암호화되므로 시드 문구, 비밀번호 또는 원본 파일 내용을 볼 수 없습니다.\n\n시스템에 표시되는 유일한 정보는 사용자 이름(공용 식별자로 사용됨) 및 저장된 파일 수와 같은 민감하지 않은 일반 메타데이터입니다.\n\n디코이 텍스트와 매핑 파일 간의 관계도 시스템에 알려지지 않습니다. 요약하자면, 사용자 콘텐츠와 비밀은 절대 노출되지 않으며 암호화된 데이터와 제한된 일반 메타데이터만 존재합니다.',
      },
      'sec-5': {
        question:
          'Decoy Phrase의 보안 접근 방식은 기존 시스템(비밀번호 관리자 등)과 어떻게 다른가요?',
        answer:
          '• 원본 데이터 저장: 기존 비밀번호 관리자는 사용자 비밀(비밀번호, 시드 등)을 암호화된 금고 내에 저장합니다. Decoy Phrase는 원본 데이터를 전혀 저장하지 않습니다.\n\n• 아키텍처: 비밀번호 관리자는 일반적으로 동기화를 위해 서버나 클라우드 인프라에 의존합니다. Decoy Phrase는 오프라인 우선이며 백엔드가 없고 제3자에 의존하지 않습니다.\n\n• 보안 모델: 비밀번호 관리자에서 보안은 금고 암호화 및 마스터 비밀번호에 의존합니다. 금고나 마스터 비밀번호가 침해되면 모든 데이터가 노출될 수 있습니다. Decoy Phrase에는 이러한 금고가 없습니다. 단일 파일(디코이 텍스트 또는 매핑 파일)이 유출되더라도 각 구성 요소는 그 자체로 가치가 없으므로 원본 데이터를 복구하기에 충분하지 않습니다.\n\n• 단일 실패 지점: 비밀번호 관리자 금고는 고가치 목표입니다. Decoy Phrase에는 비밀을 포함하는 단일 객체가 없습니다. 두 구성 요소(디코이 텍스트 및 매핑 파일)가 함께 침해되지 않는 한 공격할 주요 실패 지점이 없습니다.',
      },
      'sec-6': {
        question: '디코이 파일이나 매핑 파일이 다른 사람의 손에 들어가면 어떻게 되나요?',
        answer:
          '• 디코이 텍스트만 노출되면 비밀은 노출되지 않습니다. 디코이 텍스트는 민감한 의미가 없는 평범한 데이터이며 매핑 파일 없이는 사용할 수 없습니다.\n\n• 매핑 파일만 노출되면 원본 데이터는 안전하게 유지됩니다. 매핑 파일에는 기술적 문자 패턴만 포함되어 있으며 기밀 콘텐츠가 없으며 해당 디코이 텍스트 없이는 쓸모가 없습니다.\n\n• 원본 데이터는 두 구성 요소가 함께 노출되는 경우에만 복구할 수 있습니다. 이 경우 공격자가 필요한 두 구성 요소를 모두 가지고 있으므로 보안이 완전히 무너집니다.',
      },
      'sec-7': {
        question: '파일을 분리하지 않을 경우의 위험은 무엇인가요?',
        answer:
          '주요 위험은 디코이 텍스트와 매핑 파일이 별도로 저장되지 않을 때(예: 같은 위치 또는 같은 비밀번호로 보호) 발생합니다.\n\n이 경우 두 구성 요소에 액세스할 수 있는 사람은 누구나 원본 데이터를 직접 복구할 수 있습니다. 다시 말해, 시스템은 두 구성 요소가 실수로 함께 배치될 때만 실패합니다.\n\n따라서 엄격한 분리가 필수적입니다. 디코이 텍스트와 매핑 파일을 다른 위치에 저장하거나 다른 비밀번호로 보호하세요. 적절히 분리되면 그러한 실패 가능성은 극히 낮습니다.',
      },
    },
  },
  donate: {
    title: 'Decoy Phrase 후원하기',
    description:
      'Decoy Phrase는 무료로 사용할 수 있으며 비영리 이니셔티브로 구축되었습니다. 페이월이나 필수 구독이 없습니다. 후원은 선택 사항이며 투명합니다.',
    link: '여기에서 실시간 프로젝트 지표 및 공개 데이터를 확인하세요!',
    cards: {
      storage: {
        title: '저장소 기금',
        description:
          '이 후원금은 저장소 지갑으로 직접 전달되며 자동으로 저장소 기금에 추가되어 영구 저장소를 지속 가능하게 자금 지원하고 사용 가능한 용량을 늘립니다.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">거래소에서 AR 보내기</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>AR 토큰 구매</li>
      <li>보내기(Send) 또는 출금(Withdraw)으로 이동</li>
      <li>온체인 출금(On-Chain Withdraw) 선택</li>
      <li>AR (Arweave) 선택</li>
      <li>Decoy Phrase 지갑 주소 붙여넣기</li>
      <li>Arweave 네트워크 선택</li>
      <li>금액 입력</li>
      <li>출금 확인</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">AR 전송은 보통 1–5분 소요됩니다.</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Wander Wallet에서 AR 보내기</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Wander Wallet 생성</li>
      <li>가능한 결제 수단으로 AR 토큰 구매</li>
      <li>보내기(Send) 클릭</li>
      <li>Decoy Phrase 지갑 주소 붙여넣기</li>
      <li>금액 입력</li>
      <li>거래 확인</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: '팀 기금',
        description:
          '이 후원금은 개발, 마케팅 및 커뮤니티 이니셔티브를 포함한 Decoy Phrase 팀과 생태계를 지원합니다. 자금은 필요 시 저장소로 할당될 수도 있습니다.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">거래소에서 스테이블코인 보내기</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>USDT, USDC 또는 지원되는 다른 스테이블코인 구매</li>
      <li>보내기(Send) 또는 출금(Withdraw)으로 이동</li>
      <li>온체인 출금(On-Chain Withdraw) 선택</li>
      <li>보내고 싶은 스테이블코인 선택</li>
      <li>Decoy Phrase 지갑 주소 붙여넣기 (선택한 네트워크와 일치하는지 확인)</li>
      <li>지갑 주소와 일치하는 네트워크 선택</li>
      <li>금액 입력</li>
      <li>출금 확인</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">DEX에서 스테이블코인 보내기</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>스테이블코인 또는 선택한 네트워크의 네이티브 토큰 구매</li>
      <li>보내기(Send) 또는 출금(Withdraw)으로 이동</li>
      <li>네트워크 선택 또는 보내고 싶은 코인 선택</li>
      <li>토큰 및 지갑 네트워크에 따라 Decoy Phrase 지갑 주소 붙여넣기</li>
      <li>금액 입력</li>
      <li>거래 확인</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: '저장소 계산기',
    info: {
      p1: '12단어 시드 문구 매핑 파일의 평균 파일 크기는 약 50 KiB입니다. 업로드는 현재 <strong class="text-foreground">Turbo (ar.io 제공)</strong>를 사용하여 105 KiB 미만의 파일을 무료로 업로드할 수 있으며, Turbo를 사용할 수 없는 경우 직접 Arweave 수수료 계산이 예비로 권장됩니다.',
      p2: '용량에 도달하고 향후 기부가 없더라도 영구 저장소에 저장된 모든 데이터는 영원히 액세스할 수 있으며, 추가 용량은 미래의 Decoy Phrase 사용자 및 세대를 지원하기 위한 것입니다.',
    },
    labels: {
      donationAmount: '후원 금액',
      arweaveEquivalent: 'Arweave 등가',
      winstonAmount: 'Winston 금액',
      capacityIncrease: '이 후원은 영구 저장소 용량을 다음만큼 증가시킵니다:',
      files: '파일',
      calculate: '계산하기',
      currentBalance: '현재 잔액',
      howToDonate: '후원 방법?',
      copied: '복사됨!',
      addressCopied: '주소가 복사되었습니다!',
      copyAddress: '지갑 주소 복사',
      selectNetwork: '네트워크 선택',
      walletAddress: '지갑 주소',
    },
  },
  metrics: {
    title: '실시간 Decoy Phrase 통계',
    labels: {
      totalUsers: '총 사용자',
      totalFilesStored: '총 저장된 파일',
      totalFilesLocked: '총 잠긴 파일',
      totalDonations: '총 후원금',
      remainingCapacity: '남은 파일 용량',
      downloadTotal: 'Decoy Phrase 생성기 총 다운로드',
    },
    status: {
      live: '라이브',
      reconnecting: '재연결 중...',
      disconnected: '연결 끊김',
    },
    filters: {
      day: '일',
      month: '월',
      quarter: '분기',
      year: '년',
      all: '전체',
    },
  },
  download: {
    title: '언제든지 원본 시드 문구를 변환하고 복구하세요.',
    subtitle:
      '시드 문구를 사용자 지정 가능한 디코이 텍스트로 변환하고 개인 매핑 파일을 사용하여 언제든지 원본을 복구할 수 있습니다. 완전히 오프라인으로 작동하며, 시드 문구는 저장, 업로드 또는 공유되지 않습니다.',
    cta: {
      about: 'Decoy 생성기 정보',
      tutorials: '튜토리얼 보기',
    },
  },
  feedback: {
    title: '피드백 및 지원',
    description:
      'Decoy 생성기를 개선하는 데 도움이 되도록 제안을 공유하거나 문제를 보고하세요. 시드 문구 또는 민감한 데이터는 보내지 마십시오.',
    discord: {
      text: '<span class="font-bold text-[#5865F2]">Discord</span>에 참여하여 피드백 업데이트와 커뮤니티 솔루션을 확인하세요.',
      linkText: '지금 참여하기!',
    },
    forms: {
      feedback: {
        title: '피드백',
        name: '이름',
        subject: '주제',
        description: '설명',
        email: '이메일',
        submit: '제출',
        submitting: '제출 중...',
        success: '피드백이 전송되었습니다! 업데이트는 Discord를 확인하세요.',
        error: '전송에 실패했습니다. 다시 시도하십시오.',
        required: '필수',
        invalidEmail: '유효하지 않은 이메일 주소',
        minChar: '최소 10자 이상이어야 합니다',
      },
      support: {
        title: '지원',
        category: '카테고리',
        appVersion: '앱 버전',
        reference: '참조 링크 (선택 사항)',
        referenceHelper:
          "스크린샷이나 동영상을 Google Drive 또는 다른 클라우드 서비스에 업로드하고 링크를 '링크가 있는 모든 사용자가 볼 수 있음'으로 설정한 다음 링크를 여기에 붙여넣으세요.",
        required: '필수',
        invalidEmail: '유효하지 않은 이메일 주소',
        minChar: '최소 10자 이상이어야 합니다',
      },
    },
  },
};
