import { Translations } from './types';

export const esTranslations: Translations = {
  nav: {
    about: 'Sobre nosotros',
    userGuide: 'Guía de usuario',
    faq: 'FAQ',
    brandKit: 'Kit de marca',
    liveMetrics: 'Métricas en vivo',
    decoyToken: '$DECOY',
    products: 'Productos',
    decoyGenerator: 'Generador de señuelos',
    permanentStorage: 'Almacenamiento permanente',
    permanentWeb: 'Web permanente',
    donate: 'Donar',
    docs: 'Documentación',
    connect: 'Conectar',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: 'Comentarios',
  },
  header: {
    login: 'Iniciar sesión',
    menu: 'Menú',
    language: 'Idioma',
  },
  footer: {
    columns: {
      decoyPhrase: 'Decoy Phrase',
      coreComponents: 'Componentes principales',
      downloadGenerator: 'Descargar generador',
    },
    links: {
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio',
      forum: 'Foro de comunidad',
    },
    mission: {
      text: 'Nuestra misión es proteger la privacidad digital y garantizar un almacenamiento inmutable. Las donaciones apoyan el almacenamiento permanente y el desarrollo, manteniendo el sistema libre y heredable.',
      ctaText: 'Para apoyar a Decoy Phrase, puedes contribuir a través de donaciones.',
    },
  },
  hero: {
    titlePart1: 'Protege tu',
    titlePart2: 'huella digital',
    titleHighlight: 'para siempre',
    subtitle:
      'Utiliza almacenamiento descentralizado y tecnología avanzada de señuelos para asegurar tus datos.',
  },
  heroActions: {
    getStarted: 'Empezar',
    watchTutorials: 'Ver tutoriales',
    generator: 'Generador',
    storage: 'Almacenamiento',
  },
  features: {
    title: 'Nuestras características',
    titleHighlight: 'principales',
    subtitle: 'Explora las herramientas para proteger tus datos e identidad.',
    cards: {
      generator: {
        title: 'Generador de señuelos',
        description: 'Crea archivos falsos realistas para confundir a intrusos.',
      },
      storage: {
        title: 'Almacenamiento permanente',
        description: 'Almacena tus datos para siempre en la blockchain Arweave.',
      },
      web: {
        title: 'Web permanente',
        description: 'Despliega sitios web descentralizados imposibles de censurar.',
      },
    },
  },
  howItWorks: {
    title: 'Cómo funciona Decoy Phrase',
    subtitle: 'Pasos simples. Seguridad fuerte. Cero custodia.',
    steps: {
      '1': {
        title: 'Transforma tu frase semilla',
        description:
          'Transforma tu frase semilla en un texto señuelo. Procesado completamente offline con el generador de frases señuelo, sin servidores, sin nube y sin recolección de datos.',
      },
      '2': {
        title: 'Recibe dos archivos independientes',
        description:
          'Recibes un Texto Señuelo que parece normal y no contiene información utilizable, y un Archivo de Mapeo que sirve como la única clave para recuperar el secreto original; sin ambos, la recuperación es imposible.',
      },
      '3': {
        title: 'Almacénalos por separado',
        description:
          'Almacena el texto señuelo y el archivo de mapeo por separado. Localmente en diferentes ubicaciones o en almacenamiento permanente usando Bóvedas Multi-Contraseña.',
      },
      '4': {
        title: 'Recupera solo cuando importe',
        description:
          'Cuando sea necesaria la recuperación, usa ambos archivos en el Generador Decoy Phrase para restaurar tu frase semilla original.',
      },
    },
  },
  prosCons: {
    title: 'Pros y contras del respaldo de frases semilla',
    subtitle: 'No existe el respaldo de frases semilla perfecto, solo diferentes riesgos.',
    methods: {
      paper: {
        name: 'Respaldo en papel',
        criteria: {
          free: 'Sin costo',
          easyAccess: 'Requiere acceso físico',
          highSecurity: 'Fácilmente robado, fotografiado o copiado',
          highPrivacy: 'Almacenado completamente offline',
          lossProof: 'Puede perderse o desecharse accidentalmente',
          destructionProof: 'Vulnerable al fuego, agua y envejecimiento',
        },
      },
      metal: {
        name: 'Respaldo en metal',
        criteria: {
          free: 'Requiere compra de placas de metal',
          easyAccess: 'Requiere acceso físico y recuperación',
          highSecurity: 'Cualquiera que lo encuentre puede usarlo directamente',
          highPrivacy: 'Almacenado offline sin terceros',
          lossProof: 'Aún puede perderse o ser robado',
          destructionProof: 'Resistente al fuego y al agua',
        },
      },
      'local-storage': {
        name: 'Almacenamiento local',
        criteria: {
          free: 'Usa hardware existente',
          easyAccess: 'Requiere dispositivo, puerto y compatibilidad',
          highSecurity: 'Vulnerable a malware o robo',
          highPrivacy: 'Almacenado localmente sin terceros',
          lossProof: 'Fácilmente perdido, dañado o corrupto',
          destructionProof: 'Susceptible a fallos de hardware',
        },
      },
      cloud: {
        name: 'Almacenamiento en la nube',
        criteria: {
          free: 'Requiere suscripción o almacenamiento de pago',
          easyAccess: 'Accesible desde cualquier lugar con inicio de sesión',
          highSecurity: 'Objetivo de hackeos y robos de cuentas',
          highPrivacy: 'Controlado por proveedores externos',
          lossProof: 'Los respaldos redundantes reducen el riesgo de pérdida',
          destructionProof: 'Las cuentas pueden eliminarse o congelarse',
        },
      },
      encrypted: {
        name: 'Archivo digital cifrado',
        criteria: {
          free: 'Puede crearse usando herramientas gratuitas',
          easyAccess: 'Requiere contraseña y software correcto',
          highSecurity: 'Fuerte solo si la contraseña nunca se expone',
          highPrivacy: 'La privacidad depende de la ubicación de almacenamiento',
          lossProof: 'La pérdida de contraseña significa pérdida permanente',
          destructionProof: 'La corrupción o eliminación del archivo es fatal',
        },
      },
      shamir: {
        name: "Shamir's Secret Sharing",
        criteria: {
          free: 'Requiere herramientas especializadas o billeteras compatibles',
          easyAccess: 'Requiere recolectar partes del umbral',
          highSecurity: 'Las partes individuales son criptográficamente inútiles',
          highPrivacy: 'Ninguna parte tiene la frase semilla completa',
          lossProof: 'Tolera la pérdida limitada de partes',
          destructionProof: 'La pérdida de múltiples partes rompe la recuperación',
        },
      },
      custodian: {
        name: 'Custodio',
        criteria: {
          free: 'Los servicios de custodia suelen cobrar tarifas',
          easyAccess: 'Fácil recuperación mediante acceso a la cuenta',
          highSecurity: 'Los usuarios dependen completamente de un tercero',
          highPrivacy: 'El custodio tiene visibilidad y control',
          lossProof: 'Los fondos pueden congelarse o confiscarse',
          destructionProof: 'El fracaso de la empresa arriesga la pérdida total',
        },
      },
      splitting: {
        name: 'División de semilla',
        criteria: {
          free: 'Sin costo',
          easyAccess: 'Requiere recolectar todas las piezas',
          highSecurity: 'Las piezas parciales aún revelan información',
          highPrivacy: 'Generalmente almacenado en forma simple',
          lossProof: 'Perder una pieza rompe la recuperación',
          destructionProof: 'El daño físico afecta la recuperación',
        },
      },
      lawyer: {
        name: 'Abogado',
        criteria: {
          free: 'Requiere honorarios legales continuos',
          easyAccess: 'El acceso depende de procedimientos legales',
          highSecurity: 'Confianza humana y riesgo legal involucrados',
          highPrivacy: 'El abogado puede acceder a la semilla sin procesar',
          lossProof: 'Sujeto a error humano o disputas',
          destructionProof: 'Los documentos pueden perderse o destruirse',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: 'Sistema gratuito y sin fines de lucro',
          easyAccess:
            'Recuperable en cualquier momento a través de almacenamiento permanente y aplicaciones descargables',
          highSecurity: 'La semilla real nunca se almacena directamente',
          highPrivacy: 'El texto señuelo no tiene sentido por sí solo',
          lossProof: 'Una parte por sí sola es inútil para los atacantes',
          destructionProof: 'Puede respaldarse en almacenamiento permanente',
        },
      },
    },
    criteriaLabels: {
      free: 'Gratis',
      easyAccess: 'Acceso fácil',
      highSecurity: 'Alta seguridad',
      highPrivacy: 'Alta privacidad',
      lossProof: 'A prueba de pérdidas',
      destructionProof: 'A prueba de destrucción',
    },
  },
  securityDemo: {
    title: 'Seguridad a través de la separación',
    subtitle: 'Sin archivo de mapeo, no hay recuperación. Sin texto señuelo, no hay acceso.',
    annotations: {
      decoy:
        'Debes tener un texto señuelo, que actúa como la representación ofuscada de tus datos sensibles originales.',
      mapping:
        'Debes tener el archivo de mapeo, que contiene las reglas de transformación necesarias para reconstruir los datos originales del texto señuelo',
      result: 'Tu frase semilla generada aparecerá aquí',
      clickToGenerate: 'Haz clic aquí para generar la frase semilla',
    },
    buttons: {
      simulateDecoy: 'Clic para simular poner señuelo',
      placeDecoy: '✓ Texto señuelo colocado',
      simulateMapping: 'Clic para simular subir mapa',
      uploadMapping: 'Actualizar Mapa',
      mappingLoaded: 'Mapa Cargado',
      updateMapping: 'Actualizar nuevo archivo de mapa',
      generate: 'Generar Resultado',
      decrypting: 'Descifrando...',
    },
    labels: {
      decoyText: 'Texto señuelo',
      asciiText: 'Texto ASCII',
      resultPlaceholder: 'El resultado aparecerá aquí...',
    },
  },
  faq: {
    title: 'Preguntas frecuentes',
    subtitle:
      'Estas son algunas preguntas que podrías tener sobre Decoy Phrase. ¿No encontraste la respuesta que buscabas?',
    chatAi: '¡Chatea con la IA sobre Decoy Phrase!',
    categories: {
      general: 'General',
      products: 'Productos',
      security: 'Seguridad y Privacidad',
    },
    items: {
      'gen-1': {
        question: '¿Qué es Decoy Phrase?',
        answer:
          'Decoy Phrase es un método "offline-first" para proteger y respaldar frases semilla y textos sensibles, sin almacenar jamás los datos originales.\n\nTransforma secretos en texto inocuo de apariencia común, donde la recuperación solo es posible combinando el archivo de mapeo privado y el texto transformado.\n\nPara una durabilidad a largo plazo, los archivos señuelo y los archivos de mapeo pueden almacenarse permanentemente a través de Decoy Phrase Permanent Storage, conectado directamente a la blockchain Arweave, asegurando que no puedan perderse, alterarse ni eliminarse.',
      },
      'gen-2': {
        question: '¿Es Decoy Phrase gratuito?',
        answer:
          'Sí. Decoy Phrase es completamente gratuito y opera como una iniciativa sin fines de lucro. Todas las funciones principales —incluyendo la generación de texto señuelo, creación de archivos de mapeo y recuperación offline— están disponibles sin costo.\n\nPara Decoy Phrase Permanent Storage, el almacenamiento se apoya mediante donaciones. Estas donaciones se utilizan para financiar la expansión de la capacidad de almacenamiento permanente en la blockchain Arweave a lo largo del tiempo. Cualquier archivo ya almacenado en la blockchain permanecerá accesible para siempre, independientemente del estado futuro del servicio.',
      },
      'gen-3': {
        question: '¿Qué es permanente en Decoy Phrase?',
        answer:
          'En Decoy Phrase, el concepto de permanencia se aplica al sitio web, el dominio y los datos almacenados, habilitado por la Web Permanente y el Almacenamiento Permanente construidos sobre Arweave.',
      },
      'gen-4': {
        question: '¿Decoy Phrase almacena mis datos?',
        answer:
          'No. Decoy Phrase nunca almacena tu frase semilla ni tus datos sensibles originales. El proceso de generar texto señuelo y archivos de mapeo se ejecuta completamente offline usando el Generador Decoy Phrase. Como resultado, no hay riesgo de que tus secretos se almacenen en ningún servidor.\n\nCuando los archivos se almacenan en Almacenamiento Permanente, todos los datos se cifran en el lado del cliente antes de enviarse a la blockchain Arweave, incluyendo contraseñas, contenido de archivos y títulos de archivos.',
      },
      'gen-5': {
        question:
          '¿Qué pasa si pierdo tanto mi archivo de mapeo como su texto señuelo relacionado?',
        answer:
          'Si pierdes tanto el archivo de mapeo como el texto señuelo correspondiente, tus datos originales se vuelven permanentemente irrecuperables. Decoy Phrase está diseñado intencionalmente sin ningún mecanismo de reinicio, respaldo o recuperación y nunca almacena tus secretos originales, haciendo que la recuperación sea técnicamente imposible sin ambos componentes.\n\nEs por esto que Decoy Phrase ofrece Almacenamiento Permanente: para reducir el riesgo de pérdida accidental permitiendo que los archivos señuelo y de mapeo se almacenen en un almacenamiento inmutable a largo plazo que no puede eliminarse, alterarse ni perderse silenciosamente, manteniendo un diseño de conocimiento cero y sin custodia, donde todos los archivos se cifran en el lado del cliente y el control total permanece con el usuario.',
      },
      'gen-6': {
        question: '¿Necesito estar conectado para usar Decoy Phrase?',
        answer:
          'Depende.\n\nEl Generador Decoy Phrase funciona completamente offline. Todos los procesos principales —creación de texto señuelo, generación de archivos de mapeo y recuperación de datos— se ejecutan enteramente en tu dispositivo sin conexión a internet.\n\nSin embargo, el Almacenamiento Permanente requiere una conexión online, ya que almacena archivos cifrados en la blockchain Arweave utilizando una arquitectura de conocimiento cero.',
      },
      'gen-7': {
        question: '¿Puedo recuperar mi frase semilla o datos sensibles sin ayuda de terceros?',
        answer:
          'Sí. Decoy Phrase está diseñado para un uso totalmente autosoberano, sin intermediarios. Al usar tu texto señuelo y su archivo de mapeo relacionado, el sistema restaura tus datos originales directamente en tu dispositivo, completamente offline a través del Generador Decoy Phrase, sin involucrar a ningún tercero.',
      },
      'gen-8': {
        question: '¿Es seguro compartir el Texto Señuelo con otros?',
        answer:
          'Sí, es seguro.\n\nEl Texto Señuelo está diseñado para parecer ordinario y no contiene información sensible utilizable por sí solo. Sin el archivo de mapeo correspondiente, no puede usarse para recuperar los datos originales. Del mismo modo, un archivo de mapeo sin su texto señuelo relacionado también es inutilizable. Por lo tanto, compartir solo el Texto Señuelo no expone tu secreto.',
      },
      'gen-9': {
        question: '¿En qué se diferencia Decoy Phrase de un gestor de contraseñas?',
        answer:
          'Decoy Phrase no es un gestor de contraseñas online.\n\nLa transformación de frases semilla, contraseñas u otros datos sensibles se realiza completamente offline a través del Generador Decoy Phrase.\n\nEl Almacenamiento Permanente se usa solo para almacenar texto señuelo y archivos de mapeo, separados en diferentes espacios de almacenamiento utilizando la función de gestión multi-contraseña.\n\nTodos los archivos almacenados en Almacenamiento Permanente se cifran en el lado del cliente. Incluso si se exponen, las claves de descifrado solo las tiene el usuario, haciendo que los datos sean inutilizables para cualquier otra persona.\n\nA diferencia de los gestores de contraseñas que almacenan contraseñas cifradas en servidores o en la nube, Decoy Phrase te da control total sobre cómo y dónde se almacenan y recuperan tus datos sensibles.',
      },
      'prod-1': {
        question: '¿Qué es el Generador Decoy Phrase y cuáles son sus componentes?',
        answer:
          'El Generador Decoy Phrase es la herramienta central en el sistema Decoy Phrase, combinando el Creador de Mapeo y el Generador de Texto.\n\nEl Creador de Mapeo transforma frases semilla o datos sensibles en texto señuelo ordinario y genera un archivo de mapeo que sirve como clave de recuperación, mientras que el Generador de Texto usa ese archivo de mapeo para restaurar los datos originales del texto señuelo.\n\nTodos los procesos se ejecutan enteramente en el dispositivo del usuario sin conexión a internet, asegurando que nunca se envíen datos sensibles a ningún servidor.',
      },
      'prod-2': {
        question: '¿Qué es un Archivo de Mapeo y por qué debe almacenarse por separado?',
        answer:
          'Un Archivo de Mapeo es un archivo privado (.json) que contiene información técnica y sirve como la única clave para recuperar los datos originales del texto señuelo.\n\nNo contiene datos sensibles directamente y no tiene sentido sin su texto señuelo relacionado. Por esta razón, el Archivo de Mapeo debe almacenarse por separado del texto señuelo. Esta separación evita que un solo archivo revele secretos. Sin la combinación correcta de ambos, la recuperación es imposible, lo que significa que ningún componente individual contiene información sensible explotable por sí solo.',
      },
      'prod-3': {
        question:
          '¿Cómo funciona el Almacenamiento Permanente y qué formatos de archivo son compatibles?',
        answer:
          'El Almacenamiento Permanente es una capa de almacenamiento basada en Arweave que guarda texto señuelo y archivos de mapeo de forma permanente e inmutable.\n\nEstá diseñado como almacenamiento de "escribir una vez, leer para siempre" para respaldos de texto a largo plazo sin depender de servidores tradicionales.\n\nEl Almacenamiento Permanente admite solo archivos basados en texto, como .txt, .md y .json. Otros formatos como imágenes, videos o archivos de audio no son compatibles.\n\nTodas las subidas se gestionan a través de una sola cuenta usando una Billetera Maestra Compartida, por lo que los usuarios no necesitan crear ni gestionar una billetera blockchain ni entender la mecánica de la blockchain. La complejidad de la blockchain se oculta tras una interfaz de usuario simple.',
      },
      'prod-4': {
        question: '¿Qué son las Bóvedas Multi-Contraseña y cómo se usan?',
        answer:
          'Las Bóvedas Multi-Contraseña son una característica del Almacenamiento Permanente que permite que una sola cuenta contenga múltiples bóvedas de almacenamiento aisladas, cada una protegida por una contraseña diferente. Por ejemplo, un usuario puede almacenar texto señuelo en la Bóveda A y archivos de mapeo en la Bóveda B, usando contraseñas separadas para cada una.\n\nCada bóveda está lógicamente aislada, lo que significa que el acceso a una bóveda no otorga acceso a otras. Como resultado, comprometer una contraseña solo expone una bóveda, manteniendo seguros otros archivos sensibles.',
      },
      'prod-5': {
        question: '¿Se puede usar el Generador Decoy Phrase en diferentes dispositivos?',
        answer:
          'Sí. El Generador Decoy Phrase está disponible en varias plataformas. Puede ejecutarse en los principales sistemas operativos de escritorio (Windows, macOS, Linux) así como en dispositivos Android.\n\nDebido a que todos los procesos se ejecutan offline en el dispositivo local, Decoy Phrase también puede usarse en entornos sin acceso a internet o en sistemas de alta seguridad como computadoras "air-gapped".',
      },
      'prod-6': {
        question: '¿Necesitan los usuarios entender blockchain para usar estas funciones?',
        answer:
          'No. Aunque Decoy Phrase usa tecnología blockchain (Arweave) tras bambalinas para el almacenamiento permanente, la interfaz está diseñada para que los usuarios no necesiten lidiar con ninguna complejidad relacionada con la blockchain.\n\nAl usar una Billetera Maestra Compartida, los usuarios solo necesitan enfocarse en gestionar sus textos y contraseñas; no necesitan crear, almacenar ni gestionar sus propias billeteras blockchain. Como resultado, todas las funciones de Decoy Phrase pueden usarse sin ningún conocimiento previo de tecnología blockchain.',
      },
      'sec-1': {
        question: '¿Cómo protege el sistema los datos del usuario?',
        answer:
          'Decoy Phrase aplica principios de "offline-first" y conocimiento cero, lo que significa que toda la transformación y el cifrado de datos sensibles se realizan enteramente en el dispositivo del usuario, sin requerir conexión a internet ni ningún servidor.\n\nLos datos se procesan y cifran en el lado del cliente (por ejemplo, usando AES-256-GCM) antes de almacenarse en el Almacenamiento Permanente, por lo que el almacenamiento público solo contiene datos cifrados que no pueden leerse sin las claves del usuario.\n\nAdemás, nunca se almacenan frases semilla ni datos sensibles originales en ningún servidor, lo que significa que no hay una bóveda central que pueda convertirse en un objetivo de ataque de alto valor. Este enfoque elimina la dependencia de terceros y cambia la seguridad de una protección basada en la confianza a una arquitectura técnica que hace imposible el acceso externo por diseño.',
      },
      'sec-2': {
        question: '¿Puede Decoy Phrase eliminar mis archivos en el Almacenamiento Permanente?',
        answer:
          'No. Decoy Phrase no puede eliminar tus archivos una vez que están almacenados en el Almacenamiento Permanente. El Almacenamiento Permanente está construido sobre la blockchain Arweave, donde los datos son inmutables por diseño. Una vez que se sube un archivo, no puede ser eliminado, modificado ni borrado por Decoy Phrase, ni por nadie más.',
      },
      'sec-3': {
        question: '¿Cómo asegura el sistema que no se almacenen datos sensibles?',
        answer:
          'Decoy Phrase utiliza un principio de "transformar y separar". Los datos originales se convierten offline en texto señuelo ordinario que parece aleatorio y no contiene significado secreto. El archivo de mapeo generado contiene información técnica de recuperación pero no incluye los datos sensibles originales.\n\nEstos dos componentes deben almacenarse por separado (por ejemplo, en ubicaciones diferentes o protegidos por contraseñas diferentes). Como resultado, ningún componente individual contiene jamás el secreto original. Sin el archivo de mapeo, el texto señuelo es inútil; y sin el texto señuelo, el archivo de mapeo no tiene sentido.\n\nEste método asegura que los datos sensibles originales nunca se almacenen directamente en la aplicación ni en ningún servidor.',
      },
      'sec-4': {
        question: '¿Qué sabe y qué no sabe el sistema en el Almacenamiento Permanente?',
        answer:
          'Decoy Phrase es de conocimiento cero, lo que significa que el sistema nunca conoce el contenido de los datos del usuario.\n\nNo puede ver frases semilla, contraseñas ni contenidos de archivos originales porque todos los datos se cifran completamente en el navegador local del usuario antes de subirse.\n\nLa única información visible para el sistema son metadatos públicos no sensibles, como un nombre de usuario (usado como identificador público) y el número de archivos almacenados.\n\nLa relación entre el texto señuelo y su archivo de mapeo también es desconocida para el sistema. En resumen, el contenido del usuario y los secretos nunca se exponen; solo existen datos cifrados y metadatos públicos limitados.',
      },
      'sec-5': {
        question:
          '¿Cómo difiere el enfoque de seguridad de Decoy Phrase de los sistemas tradicionales (como gestores de contraseñas)?',
        answer:
          '• Almacenamiento de datos originales: Los gestores de contraseñas tradicionales almacenan secretos de usuario (contraseñas, semillas, etc.) dentro de una bóveda cifrada. Decoy Phrase nunca almacena datos originales en absoluto.\n\n• Arquitectura: Los gestores de contraseñas suelen depender de servidores o infraestructura en la nube para la sincronización. Decoy Phrase es offline-first, sin backend y sin dependencia de terceros.\n\n• Modelo de seguridad: En los gestores de contraseñas, la seguridad depende del cifrado de la bóveda y una contraseña maestra; si la bóveda o la contraseña maestra se ven comprometidas, todos los datos pueden quedar expuestos. Decoy Phrase no tiene tal bóveda. Filtrar un solo archivo (ya sea texto señuelo o archivo de mapeo) no es suficiente para recuperar los datos originales, porque cada componente no tiene valor por sí mismo.\n\n• Punto único de falla: La bóveda de un gestor de contraseñas es un objetivo de alto valor. Decoy Phrase no tiene un objeto único que contenga secretos; hasta que ambos componentes (texto señuelo y archivo de mapeo) se comprometan juntos, no hay un punto de falla principal para atacar.',
      },
      'sec-6': {
        question:
          '¿Qué sucede si un archivo señuelo o un archivo de mapeo cae en manos de otra persona?',
        answer:
          '• Si solo se expone el texto señuelo, no se revela ningún secreto. El texto señuelo son datos ordinarios sin significado sensible y no pueden usarse sin el archivo de mapeo.\n\n• Si solo se expone el archivo de mapeo, los datos originales permanecen seguros. El archivo de mapeo contiene solo patrones técnicos de caracteres, no contenido secreto, y es inútil sin su texto señuelo relacionado.\n\n• Solo si ambos se exponen juntos pueden recuperarse los datos originales. En ese caso, la seguridad colapsa completamente porque el atacante tiene ambos componentes requeridos.',
      },
      'sec-7': {
        question: '¿Cuál es el riesgo de no separar los archivos?',
        answer:
          'El riesgo principal ocurre si el texto señuelo y el archivo de mapeo no se almacenan por separado (por ejemplo, en la misma ubicación o protegidos por la misma contraseña).\n\nSi esto sucede, cualquiera que obtenga acceso a ambos componentes puede recuperar directamente los datos originales. En otras palabras, el sistema falla solo cuando los dos componentes se juntan involuntariamente.\n\nPor esta razón, la separación estricta es esencial: almacena texto señuelo y archivos de mapeo en diferentes ubicaciones o protégelos con contraseñas diferentes. Cuando se separan adecuadamente, tal falla es extremadamente improbable.',
      },
    },
  },
  donate: {
    title: 'Apoya a Decoy Phrase',
    description:
      'Decoy Phrase es gratuito y se construye como una iniciativa sin fines de lucro. No hay muro de pago y no se requiere suscripción. Las donaciones son voluntarias y transparentes.',
    link: '¡Consulta las métricas del proyecto en vivo y los datos públicos aquí!',
    cards: {
      storage: {
        title: 'Fondo de Almacenamiento',
        description:
          'Esta donación va directamente a la billetera de almacenamiento y se agrega automáticamente al fondo de dotación de almacenamiento, financiando de manera sostenible el almacenamiento permanente y aumentando la capacidad disponible.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Enviar AR desde un intercambio</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Comprar token AR</li>
      <li>Ir a Enviar o Retirar</li>
      <li>Seleccionar Retiro On-Chain</li>
      <li>Seleccionar AR (Arweave)</li>
      <li>Pegar la dirección de la billetera de Decoy Phrase</li>
      <li>Elegir la red Arweave</li>
      <li>Ingresar la cantidad</li>
      <li>Confirmar retiro</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">Las transferencias de AR suelen tardar entre 1 y 5 minutos.</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Enviar AR desde Wander Wallet</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Crear Wander Wallet</li>
      <li>Comprar token AR a través del método de pago disponible</li>
      <li>Hacer clic en Enviar</li>
      <li>Pegar la dirección de la billetera de Decoy Phrase</li>
      <li>Ingresar la cantidad</li>
      <li>Confirmar transacción</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: 'Fondo del Equipo',
        description:
          'Esta donación apoya al equipo y al ecosistema de Decoy Phrase, incluyendo el desarrollo, el marketing y las iniciativas comunitarias. Los fondos también pueden asignarse al almacenamiento cuando sea necesario.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Enviar criptomoneda estable desde un intercambio</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Comprar USDT, USDC u otro stablecoin compatible</li>
      <li>Ir a Enviar o Retirar</li>
      <li>Seleccionar Retiro On-Chain</li>
      <li>Elegir la stablecoin que deseas enviar</li>
      <li>Pegar la dirección de la billetera de Decoy Phrase (asegúrate de que coincida con la red seleccionada)</li>
      <li>Seleccionar la red que coincida con la dirección de la billetera</li>
      <li>Ingresar la cantidad</li>
      <li>Confirmar el retiro</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">Enviar criptomoneda estable desde DEX</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Comprar una stablecoin o el token nativo de la red seleccionada</li>
      <li>Ir a Enviar o Retirar</li>
      <li>Seleccionar red o Seleccionar moneda que deseas enviar</li>
      <li>Pegar la dirección de la billetera de Decoy Phrase basada en las redes del token y la billetera</li>
      <li>Ingresar la cantidad</li>
      <li>Confirmar transacción</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: 'Calculadora de Almacenamiento',
    info: {
      p1: 'El tamaño promedio de archivo para un archivo de mapeo de frase semilla de 12 palabras es ~50 KiB. Las cargas utilizan actualmente <strong class="text-foreground">Turbo (impulsado por ar.io)</strong>, permitiendo cargar archivos de menos de 105 KiB de forma gratuita, con cálculos de tarifas directas de Arweave recomendados como respaldo si Turbo no está disponible.',
      p2: 'Todos los datos almacenados en el almacenamiento permanente permanecen accesibles para siempre, incluso si se alcanza la capacidad y no se realizan donaciones futuras, mientras que la capacidad adicional está destinada a apoyar a futuros usuarios y generaciones de Decoy Phrase.',
    },
    labels: {
      donationAmount: 'Monto de Donación',
      arweaveEquivalent: 'Equivalente en Arweave',
      winstonAmount: 'Monto en Winston',
      capacityIncrease: 'Esta donación aumenta la capacidad de almacenamiento permanente en',
      files: 'Archivos',
      calculate: 'Calcular',
      currentBalance: 'Saldo Actual',
      howToDonate: '¿Cómo Donar?',
      copied: '¡Copiado!',
      addressCopied: '¡Dirección copiada!',
      copyAddress: 'Copiar dirección de billetera',
      selectNetwork: 'Seleccionar red',
      walletAddress: 'Dirección de billetera',
    },
  },
  metrics: {
    title: 'Métricas en Vivo de Decoy Phrase',
    labels: {
      totalUsers: 'Total de Usuarios',
      totalFilesStored: 'Total de Archivos Almacenados',
      totalFilesLocked: 'Total de Archivos Bloqueados',
      totalDonations: 'Donaciones Totales',
      remainingCapacity: 'Capacidad de Archivos Restante',
      downloadTotal: 'Total de Descargas del Generador Decoy Phrase',
    },
    status: {
      live: 'En Vivo',
      reconnecting: 'Reconectando...',
      disconnected: 'Desconectado',
    },
    filters: {
      day: 'D',
      month: 'M',
      quarter: 'T',
      year: 'A',
      all: 'Todo',
    },
  },
  download: {
    title: 'Transforma y recupera tu frase semilla original en cualquier momento.',
    subtitle:
      'Transforma tu frase semilla en texto señuelo personalizable y recupera el original en cualquier momento usando tu archivo de mapeo privado. Todo funciona completamente offline: no se almacenan, cargan ni comparten frases semilla.',
    cta: {
      about: 'Sobre Generador Decoy',
      tutorials: 'Ver Tutoriales',
    },
  },
  feedback: {
    title: 'Comentarios y Soporte',
    description:
      'Comparte tus sugerencias o reporta problemas para ayudarnos a mejorar Decoy Generator. Por favor, no envíes frases semilla ni datos sensibles.',
    discord: {
      text: 'Únete a nuestro <span class="font-bold text-[#5865F2]">Discord</span> para seguir actualizaciones de comentarios y soluciones de la comunidad.',
      linkText: '¡Únete ahora!',
    },
    forms: {
      feedback: {
        title: 'Comentarios',
        name: 'Nombre',
        subject: 'Asunto',
        description: 'Descripción',
        email: 'Correo electrónico',
        submit: 'Enviar',
        submitting: 'Enviando...',
        success: '¡Comentarios enviados! Revisa Discord para actualizaciones.',
        error: 'Falló el envío. Por favor intenta de nuevo.',
        required: 'Requerido',
        invalidEmail: 'Dirección de correo inválida',
        minChar: 'Debe tener al menos 10 caracteres',
      },
      support: {
        title: 'Soporte',
        category: 'Categoría',
        appVersion: 'Versión de la App',
        reference: 'Enlace de Referencia (Opcional)',
        referenceHelper:
          "Sube capturas de pantalla o videos a Google Drive u otro servicio en la nube, configura el enlace para que 'Cualquiera con el enlace pueda ver', luego pega el enlace aquí.",
        required: 'Requerido',
        invalidEmail: 'Dirección de correo inválida',
        minChar: 'Debe tener al menos 10 caracteres',
      },
    },
  },
};
