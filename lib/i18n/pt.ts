import { Translations } from './types';

export const ptTranslations: Translations = {
  nav: {
    about: 'Sobre nós',
    userGuide: 'Guia do Usuário',
    faq: 'FAQ',
    brandKit: 'Kit de Marca',
    liveMetrics: 'Métricas ao Vivo',
    decoyToken: '$DECOY',
    products: 'Produtos',
    decoyGenerator: 'Gerador de Iscas',
    permanentStorage: 'Armazenamento Permanente',
    permanentWeb: 'Web Permanente',
    donate: 'Doar',
    docs: 'Documentação',
    connect: 'Conectar',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: 'Feedback',
  },
  header: {
    login: 'Entrar',
    menu: 'Menu',
    language: 'Idioma',
  },
  footer: {
    columns: {
      decoyPhrase: 'Decoy Phrase',
      coreComponents: 'Componentes Principais',
      downloadGenerator: 'Baixar Gerador',
    },
    links: {
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      forum: 'Fórum da Comunidade',
    },
    mission: {
      text: 'Nossa missão é proteger a privacidade digital e garantir o armazenamento imutável. As doações financiam o armazenamento permanente e o desenvolvimento, mantendo o sistema gratuito e herdável.',
      ctaText: 'Para apoiar a Decoy Phrase, você pode contribuir com doações.',
    },
  },
  hero: {
    titlePart1: 'Proteja sua',
    titlePart2: 'pegada digital',
    titleHighlight: 'para sempre',
    subtitle:
      'Use armazenamento descentralizado e tecnologia avançada de iscas para proteger seus dados.',
  },
  heroActions: {
    getStarted: 'Começar',
    watchTutorials: 'Ver tutoriais',
    generator: 'Gerador',
    storage: 'Armazenamento',
  },
  features: {
    title: 'Nossos principais',
    titleHighlight: 'recursos',
    subtitle: 'Explore as ferramentas para proteger seus dados e identidade.',
    cards: {
      generator: {
        title: 'Gerador de Iscas',
        description: 'Crie arquivos falsos realistas para confundir invasores.',
      },
      storage: {
        title: 'Armazenamento Permanente',
        description: 'Armazene seus dados para sempre na blockchain Arweave.',
      },
      web: {
        title: 'Web Permanente',
        description: 'Implante sites descentralizados impossíveis de censurar.',
      },
    },
  },
  howItWorks: {
    title: 'Como funciona o Decoy Phrase',
    subtitle: 'Passos simples. Segurança forte. Zero custódia.',
    steps: {
      '1': {
        title: 'Transforme sua Frase Semente',
        description:
          'Transforme sua frase semente em um texto isca. Processado totalmente offline com o gerador Decoy Phrase, sem servidores, sem nuvem e sem coleta de dados.',
      },
      '2': {
        title: 'Receba Dois Arquivos Independentes',
        description:
          'Você recebe um Texto Isca que parece normal e não contém informações utilizáveis, e um Arquivo de Mapeamento que serve como a única chave para recuperar o segredo original — sem ambos, a recuperação é impossível.',
      },
      '3': {
        title: 'Armazene-os Separadamente',
        description:
          'Armazene o texto isca e o arquivo de mapeamento separadamente. Localmente em locais diferentes ou em armazenamento permanente usando Cofres Multi-Senhas.',
      },
      '4': {
        title: 'Recupere Apenas Quando Importar',
        description:
          'Quando a recuperação for necessária, use ambos os arquivos no Gerador Decoy Phrase para restaurar sua frase semente original.',
      },
    },
  },
  prosCons: {
    title: 'Prós e Contras do Backup de Frase Semente',
    subtitle: 'Não existe backup de frase semente perfeito — apenas riscos diferentes.',
    methods: {
      paper: {
        name: 'Backup em Papel',
        criteria: {
          free: 'Sem custo',
          easyAccess: 'Requer acesso físico',
          highSecurity: 'Facilmente roubado, fotografado ou copiado',
          highPrivacy: 'Armazenado totalmente offline',
          lossProof: 'Pode ser perdido ou descartado acidentalmente',
          destructionProof: 'Vulnerável a fogo, água e envelhecimento',
        },
      },
      metal: {
        name: 'Backup em Metal',
        criteria: {
          free: 'Requer compra de placas de metal',
          easyAccess: 'Requer acesso físico e recuperação',
          highSecurity: 'Qualquer um que encontre pode usar diretamente',
          highPrivacy: 'Armazenado offline sem terceiros',
          lossProof: 'Ainda pode ser perdido ou roubado',
          destructionProof: 'Resistente a fogo e água',
        },
      },
      'local-storage': {
        name: 'Armazenamento Local',
        criteria: {
          free: 'Usa hardware existente',
          easyAccess: 'Requer dispositivo, porta e compatibilidade',
          highSecurity: 'Vulnerável a malware ou roubo',
          highPrivacy: 'Armazenado localmente sem terceiros',
          lossProof: 'Facilmente perdido, danificado ou corrompido',
          destructionProof: 'Suscetível a falhas de hardware',
        },
      },
      cloud: {
        name: 'Armazenamento em Nuvem',
        criteria: {
          free: 'Requer assinatura ou armazenamento pago',
          easyAccess: 'Acessível de qualquer lugar com login',
          highSecurity: 'Alvo de hacks e roubos de conta',
          highPrivacy: 'Controlado por provedores terceirizados',
          lossProof: 'Backups redundantes reduzem o risco de perda',
          destructionProof: 'Contas podem ser excluídas ou congeladas',
        },
      },
      encrypted: {
        name: 'Arquivo Digital Criptografado',
        criteria: {
          free: 'Pode ser criado usando ferramentas gratuitas',
          easyAccess: 'Requer senha e software correto',
          highSecurity: 'Forte apenas se a senha nunca for exposta',
          highPrivacy: 'A privacidade depende do local de armazenamento',
          lossProof: 'A perda de senha significa perda permanente',
          destructionProof: 'A corrupção ou exclusão do arquivo é fatal',
        },
      },
      shamir: {
        name: 'Compartilhamento de Segredo de Shamir',
        criteria: {
          free: 'Requer ferramentas especializadas ou carteiras compatíveis',
          easyAccess: 'Requer coleta de partes do limite',
          highSecurity: 'Partes individuais são criptograficamente inúteis',
          highPrivacy: 'Nenhuma parte detém a frase semente completa',
          lossProof: 'Tolera a perda limitada de partes',
          destructionProof: 'A perda de muitas partes quebra a recuperação',
        },
      },
      custodian: {
        name: 'Custodiante',
        criteria: {
          free: 'Serviços de custódia geralmente cobram taxas',
          easyAccess: 'Fácil recuperação através de acesso à conta',
          highSecurity: 'Usuários dependem totalmente de terceiros',
          highPrivacy: 'O custodiante tem visibilidade e controle',
          lossProof: 'Fundos podem ser congelados ou confiscados',
          destructionProof: 'Falência da empresa arrisca perda total',
        },
      },
      splitting: {
        name: 'Divisão de Semente',
        criteria: {
          free: 'Sem custo',
          easyAccess: 'Requer coleta de todas as peças',
          highSecurity: 'Peças parciais ainda revelam informações',
          highPrivacy: 'Geralmente armazenado em texto simples',
          lossProof: 'Perder uma peça quebra a recuperação',
          destructionProof: 'Danos físicos afetam a recuperação',
        },
      },
      lawyer: {
        name: 'Advogado',
        criteria: {
          free: 'Requer honorários advocatícios contínuos',
          easyAccess: 'O acesso depende de procedimentos legais',
          highSecurity: 'Confiança humana e risco legal envolvidos',
          highPrivacy: 'O advogado pode acessar a semente bruta',
          lossProof: 'Sujeito a erro humano ou disputas',
          destructionProof: 'Documentos podem ser perdidos ou destruídos',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: 'Sistema gratuito e sem fins lucrativos',
          easyAccess:
            'Recuperável a qualquer momento via armazenamento permanente e aplicativos para download',
          highSecurity: 'A semente real nunca é armazenada diretamente',
          highPrivacy: 'O texto isca não tem sentido por si só',
          lossProof: 'Uma parte sozinha é inútil para atacantes',
          destructionProof: 'Pode ser feito backup em armazenamento permanente',
        },
      },
    },
    criteriaLabels: {
      free: 'Grátis',
      easyAccess: 'Fácil Acesso',
      highSecurity: 'Alta Segurança',
      highPrivacy: 'Alta Privacidade',
      lossProof: 'Prova de Perda',
      destructionProof: 'Prova de Destruição',
    },
  },
  securityDemo: {
    title: 'Segurança através da separação',
    subtitle: 'Sem arquivo de mapeamento, sem recuperação. Sem texto isca, sem acesso.',
    annotations: {
      decoy:
        'Você deve ter um texto isca, que age como a representação ofuscada de seus dados sensíveis originais.',
      mapping:
        'Você deve ter o arquivo de mapeamento, que contém as regras de transformação necessárias para reconstruir os dados originais a partir do texto isca.',
      result: 'Sua frase semente gerada aparecerá aqui',
      clickToGenerate: 'Clique aqui para gerar a frase semente',
    },
    buttons: {
      simulateDecoy: 'Clique para simular a colocação de texto isca',
      placeDecoy: '✓ Texto isca colocado',
      simulateMapping: 'Clique para simular o upload do arquivo de mapeamento',
      uploadMapping: 'Atualizar Mapeamento',
      mappingLoaded: 'Mapeamento Carregado',
      updateMapping: 'Atualizar novo arquivo de mapeamento',
      generate: 'Gerar Resultado',
      decrypting: 'Descriptografando...',
    },
    labels: {
      decoyText: 'Texto isca',
      asciiText: 'Texto ASCII',
      resultPlaceholder: 'O resultado aparecerá aqui...',
    },
  },
  faq: {
    title: 'Perguntas Frequentes',
    subtitle:
      'Aqui estão algumas perguntas que você pode ter sobre o Decoy Phrase. Não encontrou a resposta que procurava?',
    chatAi: 'Converse com a IA sobre o Decoy Phrase!',
    categories: {
      general: 'Geral',
      products: 'Produtos',
      security: 'Segurança e Privacidade',
    },
    items: {
      'gen-1': {
        question: 'O que é o Decoy Phrase?',
        answer:
          'O Decoy Phrase é um método "offline-first" para proteger e fazer backup de frases-semente e textos sensíveis — sem nunca armazenar os dados originais.\n\nEle transforma segredos em texto inócuo e de aparência comum, com a recuperação sendo possível apenas combinando o arquivo de mapeamento privado e o texto transformado.\n\nPara durabilidade a longo prazo, arquivos isca e arquivos de mapeamento podem ser armazenados permanentemente através do Armazenamento Permanente Decoy Phrase, conectado diretamente à blockchain Arweave — garantindo que não possam ser perdidos, alterados ou excluídos.',
      },
      'gen-2': {
        question: 'O Decoy Phrase é gratuito?',
        answer:
          'Sim. O Decoy Phrase é totalmente gratuito e opera como uma iniciativa sem fins lucrativos. Todos os recursos principais — incluindo geração de texto isca, criação de arquivos de mapeamento e recuperação offline — estão disponíveis sem custo.\n\nPara o Armazenamento Permanente Decoy Phrase, o armazenamento é apoiado por doações. Essas doações são usadas para financiar a expansão da capacidade de armazenamento permanente na blockchain Arweave ao longo do tempo. Quaisquer arquivos já armazenados na blockchain permanecerão acessíveis para sempre, independentemente do estado futuro do serviço.',
      },
      'gen-3': {
        question: 'O que é permanente no Decoy Phrase?',
        answer:
          'No Decoy Phrase, o conceito de permanência aplica-se ao site, ao domínio e aos dados armazenados, habilitado pela Web Permanente e Armazenamento Permanente construídos sobre a Arweave.',
      },
      'gen-4': {
        question: 'O Decoy Phrase armazena meus dados?',
        answer:
          'Não. O Decoy Phrase nunca armazena sua frase-semente ou dados sensíveis originais. O processo de gerar texto isca e arquivos de mapeamento é executado totalmente offline usando o Gerador Decoy Phrase. Como resultado, não há risco de seus segredos serem armazenados em qualquer servidor.\n\nQuando os arquivos são armazenados no Armazenamento Permanente, todos os dados são criptografados no lado do cliente antes de serem enviados para a blockchain Arweave — incluindo senhas, conteúdo de arquivos e títulos de arquivos.',
      },
      'gen-5': {
        question:
          'O que acontece se eu perder tanto meu arquivo de mapeamento quanto seu texto isca relacionado?',
        answer:
          'Se você perder tanto o arquivo de mapeamento quanto o texto isca correspondente, seus dados originais tornam-se permanentemente irrecuperáveis. O Decoy Phrase é intencionalmente projetado sem nenhum mecanismo de redefinição, backup ou recuperação e nunca armazena seus segredos originais, tornando a recuperação tecnicamente impossível sem ambos os componentes.\n\nÉ por isso que o Decoy Phrase oferece Armazenamento Permanente: para reduzir o risco de perda acidental permitindo que arquivos isca e de mapeamento sejam armazenados em um armazenamento imutável de longo prazo que não pode ser excluído, alterado ou perdido silenciosamente, mantendo um design de conhecimento zero e não custodial — onde todos os arquivos são criptografados no lado do cliente e o controle total permanece com o usuário.',
      },
      'gen-6': {
        question: 'Preciso estar online para usar o Decoy Phrase?',
        answer:
          'Depende.\n\nO Gerador Decoy Phrase funciona totalmente offline. Todos os processos principais — criação de texto isca, geração de arquivos de mapeamento e recuperação de dados — são executados inteiramente no seu dispositivo sem qualquer conexão com a internet.\n\nNo entanto, o Armazenamento Permanente requer uma conexão online, pois armazena arquivos criptografados na blockchain Arweave usando uma arquitetura de conhecimento zero.',
      },
      'gen-7': {
        question:
          'Posso recuperar minha frase-semente ou dados sensíveis sem assistência de terceiros?',
        answer:
          'Sim. O Decoy Phrase é projetado para uso totalmente autossoberano, sem intermediários. Usando seu texto isca e seu arquivo de mapeamento relacionado, o sistema restaura seus dados originais diretamente no seu dispositivo, totalmente offline através do Gerador Decoy Phrase — sem envolver terceiros.',
      },
      'gen-8': {
        question: 'É seguro compartilhar o Texto Isca com outras pessoas?',
        answer:
          'Sim, é seguro.\n\nO Texto Isca é projetado para parecer comum e não contém informações sensibilias utilizáveis por si só. Sem o arquivo de mapeamento correspondente, ele não pode ser usado para recuperar os dados originais. Da mesma forma, um arquivo de mapeamento sem seu texto isca relacionado também é inutilizável. Portanto, compartilhar apenas o Texto Isca não expõe seu segredo.',
      },
      'gen-9': {
        question: 'Como o Decoy Phrase difere de um gerenciador de senhas?',
        answer:
          'O Decoy Phrase não é um gerenciador de senhas online.\n\nA transformação de frases-semente, senhas ou outros dados sensíveis é realizada totalmente offline através do Gerador Decoy Phrase.\n\nO Armazenamento Permanente é usado apenas para armazenar texto isca e arquivos de mapeamento, separados em diferentes espaços de armazenamento usando o recurso de gerenciamento de múltiplas senhas.\n\nTodos os arquivos armazenados no Armazenamento Permanente são criptografados no lado do cliente. Mesmo que sejam expostos, as chaves de descriptografia são mantidas apenas pelo usuário, tornando os dados inutilizáveis para qualquer outra pessoa.\n\nAo contrário dos gerenciadores de senhas que armazenam senhas criptografadas em servidores ou na nuvem, o Decoy Phrase oferece controle total sobre como e onde seus dados sensíveis são armazenados e recuperados.',
      },
      'prod-1': {
        question: 'O que é o Gerador Decoy Phrase e quais são seus componentes?',
        answer:
          'O Gerador Decoy Phrase é a ferramenta central no sistema Decoy Phrase, combinando o Criador de Mapeamento e o Gerador de Texto.\n\nO Criador de Mapeamento transforma frases-semente ou dados sensíveis em texto isca comum e gera um arquivo de mapeamento que serve como chave de recuperação, enquanto o Gerador de Texto usa esse arquivo de mapeamento para restaurar os dados originais a partir do texto isca.\n\nTodos os processos são executados inteiramente no dispositivo do usuário sem conexão com a internet, garantindo que nenhum dado sensível seja enviado a qualquer servidor.',
      },
      'prod-2': {
        question:
          'O que é um Arquivo de Mapeamento e por que ele deve ser armazenado separadamente?',
        answer:
          'Um Arquivo de Mapeamento é um arquivo privado (.json) contendo informações técnicas e serve como a única chave para recuperar os dados originais a partir do texto isca.\n\nEle não contém dados sensíveis diretamente e não tem significado sem seu texto isca relacionado. Por esse motivo, o Arquivo de Mapeamento deve ser armazenado separadamente do texto isca. Essa separação impede que um único arquivo revele segredos. Sem a combinação correta de ambos, a recuperação é impossível — o que significa que nenhum componente individual contém informações sensíveis exploráveis por si só.',
      },
      'prod-3': {
        question:
          'Como funciona o Armazenamento Permanente e quais formatos de arquivo são suportados?',
        answer:
          'O Armazenamento Permanente é uma camada de armazenamento baseada na Arweave que armazena texto isca e arquivos de mapeamento de forma permanente e imutável.\n\nÉ projetado como armazenamento "grave uma vez, leia para sempre" para backups de texto de longo prazo sem depender de servidores tradicionais.\n\nO Armazenamento Permanente suporta apenas arquivos baseados em texto, como .txt, .md e .json. Outros formatos como imagens, vídeos ou arquivos de áudio não são suportados.\n\nTodos os uploads são gerenciados através de uma única conta usando uma Carteira Mestra Compartilhada, para que os usuários não precisem criar ou gerenciar uma carteira blockchain nem entender a mecânica da blockchain. A complexidade da blockchain é ocultada por trás de uma interface de usuário simples.',
      },
      'prod-4': {
        question: 'O que são Cofres Multi-Senhas e como são usados?',
        answer:
          'Cofres Multi-Senhas são um recurso do Armazenamento Permanente que permite que uma única conta contenha vários cofres de armazenamento isolados, cada um protegido por uma senha diferente. Por exemplo, um usuário pode armazenar texto isca no Cofre A e arquivos de mapeamento no Cofre B, usando senhas separadas para cada um.\n\nCada cofre é logicamente isolado, o que significa que o acesso a um cofre não concede acesso a outros. Como resultado, comprometer uma senha expõe apenas um cofre, mantendo outros arquivos sensíveis seguros.',
      },
      'prod-5': {
        question: 'O Gerador Decoy Phrase pode ser usado em diferentes dispositivos?',
        answer:
          'Sim. O Gerador Decoy Phrase está disponível em várias plataformas. Ele pode ser executado nos principais sistemas operacionais de desktop (Windows, macOS, Linux) e em dispositivos Android.\n\nComo todos os processos são executados offline no dispositivo local, o Decoy Phrase também pode ser usado em ambientes sem acesso à internet ou em sistemas de alta segurança, como computadores "air-gapped".',
      },
      'prod-6': {
        question: 'Os usuários precisam entender blockchain para usar esses recursos?',
        answer:
          'Não. Embora o Decoy Phrase use tecnologia blockchain (Arweave) nos bastidores para armazenamento permanente, a interface é projetada para que os usuários não precisem lidar com nenhuma complexidade relacionada à blockchain.\n\nAo usar uma Carteira Mestra Compartilhada, os usuários só precisam se concentrar em gerenciar seus textos e senhas; eles não precisam criar, armazenar ou gerenciar suas próprias carteiras blockchain. Como resultado, todos os recursos do Decoy Phrase podem ser usados sem qualquer conhecimento prévio de tecnologia blockchain.',
      },
      'sec-1': {
        question: 'Como o sistema protege os dados do usuário?',
        answer:
          'O Decoy Phrase aplica princípios de "offline-first" e conhecimento zero, o que significa que toda a transformação e criptografia de dados sensíveis são realizadas inteiramente no dispositivo do usuário, sem exigir conexão com a internet ou qualquer servidor.\n\nOs dados são processados e criptografados no lado do cliente (por exemplo, usando AES-256-GCM) antes de serem armazenados no Armazenamento Permanente, portanto, o armazenamento público contém apenas dados criptografados que não podem ser lidos sem as chaves do usuário.\n\nAlém disso, nenhuma frase-semente ou dados sensíveis originais são armazenados em qualquer servidor, o que significa que não há nenhum cofre central que possa se tornar um alvo de ataque de alto valor. Essa abordagem elimina a dependência de terceiros e muda a segurança de uma proteção baseada em confiança para uma arquitetura técnica que torna o acesso externo impossível por design.',
      },
      'sec-2': {
        question: 'O Decoy Phrase pode excluir meus arquivos no Armazenamento Permanente?',
        answer:
          'Não. O Decoy Phrase não pode excluir seus arquivos uma vez que eles estejam armazenados no Armazenamento Permanente. O Armazenamento Permanente é construído na blockchain Arweave, onde os dados são imutáveis por design. Uma vez que um arquivo é carregado, ele não pode ser removido, modificado ou apagado pelo Decoy Phrase — ou por qualquer outra pessoa.',
      },
      'sec-3': {
        question: 'Como o sistema garante que nenhum dado sensível seja armazenado?',
        answer:
          'O Decoy Phrase usa um princípio de "transformar e separar". Os dados originais são convertidos offline em texto isca comum que parece aleatório e não contém significado secreto. O arquivo de mapeamento gerado contém informações técnicas de recuperação, mas não inclui os dados sensíveis originais.\n\nEsses dois componentes devem ser armazenados separadamente (por exemplo, em locais diferentes ou protegidos por senhas diferentes). Como resultado, nenhum componente individual contém jamais o segredo original. Sem o arquivo de mapeamento, o texto isca é inútil; e sem o texto isca, o arquivo de mapeamento não tem sentido.\n\nEste método garante que os dados sensíveis originais nunca sejam armazenados diretamente no aplicativo ou em qualquer servidor.',
      },
      'sec-4': {
        question: 'O que o sistema sabe e o que não sabe no Armazenamento Permanente?',
        answer:
          'O Decoy Phrase é de conhecimento zero, o que significa que o sistema nunca conhece o conteúdo dos dados do usuário.\n\nEle não pode ver frases-semente, senhas ou conteúdo original de arquivos porque todos os dados são totalmente criptografados no navegador local do usuário antes do upload.\n\nA única informação visível para o sistema são metadados públicos não sensíveis, como um nome de usuário (usado como identificador público) e o número de arquivos armazenados.\n\nA relação entre o texto isca e seu arquivo de mapeamento também é desconhecida para o sistema. Em resumo, o conteúdo do usuário e os segredos nunca são expostos; apenas dados criptografados e metadados públicos limitados existem.',
      },
      'sec-5': {
        question:
          'Como a abordagem de segurança do Decoy Phrase difere dos sistemas tradicionais (como gerenciadores de senhas)?',
        answer:
          '• Armazenamento de dados originais: Os gerenciadores de senhas tradicionais armazenam segredos do usuário (senhas, sementes, etc.) dentro de um cofre criptografado. O Decoy Phrase nunca armazena dados originais.\n\n• Arquitetura: Os gerenciadores de senhas geralmente dependem de servidores ou infraestrutura em nuvem para sincronização. O Decoy Phrase é offline-first, sem backend e sem dependência de terceiros.\n\n• Modelo de segurança: Em gerenciadores de senhas, a segurança depende da criptografia do cofre e de uma senha mestra — se o cofre ou a senha mestra forem comprometidos, todos os dados podem ser expostos. O Decoy Phrase não tem tal cofre. O vazamento de um único arquivo (seja texto isca ou arquivo de mapeamento) não é suficiente para recuperar os dados originais, porque cada componente não tem valor por si só.\n\n• Ponto único de falha: O cofre de um gerenciador de senhas é um alvo de alto valor. O Decoy Phrase não tem um objeto único que contenha segredos; até que ambos os componentes (texto isca e arquivo de mapeamento) sejam comprometidos juntos, não há um ponto de falha principal para atacar.',
      },
      'sec-6': {
        question:
          'O que acontece se um arquivo isca ou um arquivo de mapeamento cair nas mãos de outra pessoa?',
        answer:
          '• Se apenas o texto isca for exposto, nenhum segredo será revelado. O texto isca são dados comuns sem significado sensibile e não podem ser usados sem o arquivo de mapeamento.\n\n• Se apenas o arquivo de mapeamento for exposto, os dados originais permanecem seguros. O arquivo de mapeamento contém apenas padrões técnicos de caracteres, sem conteúdo secreto, e é inútil sem o seu texto isca relacionado.\n\n• Apenas se ambos forem expostos juntos os dados originais poderão ser recuperados. Nesse caso, a segurança entra em colapso total porque o invasor possui ambos os componentes necessários.',
      },
      'sec-7': {
        question: 'Qual é o risco de não separar os arquivos?',
        answer:
          'O principal risco ocorre se o texto isca e o arquivo de mapeamento não forem armazenados separadamente (por exemplo, no mesmo local ou protegidos pela mesma senha).\n\nSe isso acontecer, qualquer pessoa que obtenha acesso a ambos os componentes pode recuperar diretamente os dados originais. Em outras palavras, o sistema falha apenas quando os dois componentes são reunidos involuntariamente.\n\nPor isso, a separação rigorosa é essencial: armazene texto isca e arquivos de mapeamento em locais diferentes ou proteja-os com senhas diferentes. Quando separados adequadamente, tal falha é extremamente improvável.',
      },
    },
  },
  donate: {
    title: 'Apoie o Decoy Phrase',
    description:
      'Decoy Phrase é gratuito e construído como uma iniciativa sem fins lucrativos. Não há acesso pago nem assinatura necessária. As doações são opcionais e transparentes.',
    link: 'Veja métricas do projeto ao vivo e dados públicos aqui!',
    cards: {
      storage: {
        title: 'Fundo de Armazenamento',
        description:
          'Esta doação vai diretamente para a carteira de armazenamento e é adicionada automaticamente ao fundo de dotação de armazenamento, financiando de forma sustentável o armazenamento permanente e aumentando a capacidade disponível.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Envie AR de uma exchange</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Compre token AR</li>
      <li>Vá para Enviar ou Sacar</li>
      <li>Selecione Saque On-Chain</li>
      <li>Selecione AR (Arweave)</li>
      <li>Cole o endereço da carteira do Decoy Phrase</li>
      <li>Escolha a rede Arweave</li>
      <li>Insira o valor</li>
      <li>Confirme o saque</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">Transferências AR geralmente levam de 1 a 5 minutos.</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Envie AR da Wander Wallet</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Crie uma Wander Wallet</li>
      <li>Compre token AR através do método de pagamento disponível</li>
      <li>Clique em Enviar</li>
      <li>Cole o endereço da carteira do Decoy Phrase</li>
      <li>Insira o valor</li>
      <li>Confirme a transação</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: 'Fundo da Equipe',
        description:
          'Esta doação apoia a equipe e o ecossistema Decoy Phrase, incluindo desenvolvimento, marketing e iniciativas comunitárias. Os fundos também podem ser alocados para armazenamento quando necessário.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Envie Stablecoin de uma exchange</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Compre USDT, USDC ou outra stablecoin suportada</li>
      <li>Vá para Enviar ou Sacar</li>
      <li>Selecione Saque On-Chain</li>
      <li>Escolha a stablecoin que você deseja enviar</li>
      <li>Cole o endereço da carteira do Decoy Phrase (verifique se corresponde à rede selecionada)</li>
      <li>Selecione a rede que corresponde ao endereço da carteira</li>
      <li>Insira o valor</li>
      <li>Confirme o saque</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">Envie Stablecoin de DEX</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Compre uma stablecoin ou o token nativo da rede selecionada</li>
      <li>Vá para Enviar ou Sacar</li>
      <li>Selecione a rede ou selecione a moeda que deseja enviar</li>
      <li>Cole o endereço da carteira do Decoy Phrase com base no token e redes de carteira</li>
      <li>Insira o valor</li>
      <li>Confirme a transação</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: 'Calculadora de Armazenamento',
    info: {
      p1: 'O tamanho médio do arquivo para um arquivo de mapeamento de frase semente de 12 palavras é ~50 KiB. Os uploads atualmente usam <strong class="text-foreground">Turbo (powered by ar.io)</strong>, permitindo que arquivos abaixo de 105 KiB sejam carregados gratuitamente, com cálculos de taxas diretas da Arweave recomendados como fallback se o Turbo não estiver disponível.',
      p2: 'Todos os dados armazenados no armazenamento permanente permanecem acessíveis para sempre, mesmo que a capacidade seja atingida e nenhuma doação futura seja feita, enquanto a capacidade adicional destina-se a apoiar futuros usuários e gerações do Decoy Phrase.',
    },
    labels: {
      donationAmount: 'Valor da Doação',
      arweaveEquivalent: 'Equivalente Arweave',
      winstonAmount: 'Valor em Winston',
      capacityIncrease: 'Esta doação aumenta a capacidade de armazenamento permanente em',
      files: 'Arquivos',
      calculate: 'Calcular',
      currentBalance: 'Saldo Atual',
      howToDonate: 'Como Doar?',
      copied: 'Copiado!',
      addressCopied: 'Endereço copiado!',
      copyAddress: 'Copiar endereço da carteira',
      selectNetwork: 'Selecionar rede',
      walletAddress: 'Endereço da carteira',
    },
  },
  metrics: {
    title: 'Métricas ao Vivo do Decoy Phrase',
    labels: {
      totalUsers: 'Total de Usuários',
      totalFilesStored: 'Total de Arquivos Armazenados',
      totalFilesLocked: 'Total de Arquivos Bloqueados',
      totalDonations: 'Total de Doações',
      remainingCapacity: 'Capacidade de Arquivo Restante',
      downloadTotal: 'Total de Downloads do Gerador Decoy Phrase',
    },
    status: {
      live: 'Ao Vivo',
      reconnecting: 'Reconectando...',
      disconnected: 'Desconectado',
    },
    filters: {
      day: 'D',
      month: 'M',
      quarter: 'T',
      year: 'A',
      all: 'Tudo',
    },
  },
  download: {
    title: 'Transforme e recupere sua frase semente original a qualquer momento.',
    subtitle:
      'Transforme sua frase semente em texto isca personalizável e recupere o original a qualquer momento usando seu arquivo de mapeamento privado. Tudo funciona completamente offline – nenhuma frase semente armazenada, carregada ou compartilhada.',
    cta: {
      about: 'Sobre o Gerador Decoy',
      tutorials: 'Assistir Tutoriais',
    },
  },
  feedback: {
    title: 'Feedback e Suporte',
    description:
      'Compartilhe suas sugestões ou relate problemas para nos ajudar a melhorar o Decoy Generator. Por favor, não envie frases semente ou dados sensíveis.',
    discord: {
      text: 'Junte-se ao nosso <span class="font-bold text-[#5865F2]">Discord</span> para acompanhar atualizações de feedback e soluções da comunidade.',
      linkText: 'Junte-se agora!',
    },
    forms: {
      feedback: {
        title: 'Feedback',
        name: 'Nome',
        subject: 'Assunto',
        description: 'Descrição',
        email: 'E-mail',
        submit: 'Enviar',
        submitting: 'Enviando...',
        success: 'Feedback enviado! Verifique o Discord para atualizações.',
        error: 'Envio falhou. Por favor, tente novamente.',
        required: 'Obrigatório',
        invalidEmail: 'Endereço de e-mail inválido',
        minChar: 'Deve ter pelo menos 10 caracteres',
      },
      support: {
        title: 'Suporte',
        category: 'Categoria',
        appVersion: 'Versão do Aplicativo',
        reference: 'Link de Referência (Opcional)',
        referenceHelper:
          "Faça upload de capturas de tela ou vídeos no Google Drive ou outro serviço de nuvem, defina o link como 'Qualquer pessoa com o link pode visualizar' e cole o link aqui.",
        required: 'Obrigatório',
        invalidEmail: 'Endereço de e-mail inválido',
        minChar: 'Deve ter pelo menos 10 caracteres',
      },
    },
  },
};
