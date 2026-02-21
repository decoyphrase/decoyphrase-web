import { Translations } from './types';

export const viTranslations: Translations = {
  nav: {
    about: 'Về chúng tôi',
    userGuide: 'Hướng dẫn sử dụng',
    faq: 'Câu hỏi thường gặp',
    brandKit: 'Bộ nhận diện thương hiệu',
    liveMetrics: 'Số liệu trực tiếp',
    decoyToken: '$DECOY',
    products: 'Sản phẩm',
    decoyGenerator: 'Trình tạo mồi nhử',
    permanentStorage: 'Lưu trữ vĩnh viễn',
    permanentWeb: 'Web vĩnh viễn',
    donate: 'Ủng hộ',
    docs: 'Tài liệu',
    connect: 'Kết nối',
    twitter: 'X / Twitter',
    youtube: 'YouTube',
    discord: 'Discord',
    github: 'GitHub',
    feedback: 'Phản hồi',
  },
  header: {
    login: 'Đăng nhập',
    menu: 'Menu',
    language: 'Ngôn ngữ',
  },
  footer: {
    columns: {
      decoyPhrase: 'Cụm từ mồi nhử',
      coreComponents: 'Thành phần cốt lõi',
      downloadGenerator: 'Tải trình tạo',
    },
    links: {
      privacy: 'Chính sách bảo mật',
      terms: 'Điều khoản dịch vụ',
      forum: 'Diễn đàn',
    },
    mission: {
      text: 'Sứ mệnh của chúng tôi là bảo vệ quyền riêng tư kỹ thuật số và đảm bảo lưu trữ bất biến.',
      ctaText: 'Tham gia cuộc cách mạng',
    },
  },
  hero: {
    titlePart1: 'Bảo vệ',
    titlePart2: 'dấu chân kỹ thuật số',
    titleHighlight: 'mãi mãi',
    subtitle:
      'Sử dụng lưu trữ phi tập trung và công nghệ mồi nhử tiên tiến để bảo vệ dữ liệu của bạn.',
  },
  heroActions: {
    getStarted: 'Bắt đầu',
    watchTutorials: 'Xem hướng dẫn',
    generator: 'Trình tạo',
    storage: 'Lưu trữ',
  },
  features: {
    title: 'Các tính năng',
    titleHighlight: 'chính',
    subtitle: 'Khám phá các công cụ để bảo vệ dữ liệu và danh tính của bạn.',
    cards: {
      generator: {
        title: 'Trình tạo mồi nhử',
        description: 'Tạo các tệp giả thực tế để đánh lừa kẻ xâm nhập.',
      },
      storage: {
        title: 'Lưu trữ vĩnh viễn',
        description: 'Lưu trữ dữ liệu của bạn mãi mãi trên blockchain Arweave.',
      },
      web: {
        title: 'Web vĩnh viễn',
        description: 'Triển khai các trang web phi tập trung không thể bị kiểm duyệt.',
      },
    },
  },
  howItWorks: {
    title: 'Cách Decoy Phrase Hoạt Động',
    subtitle: 'Các bước đơn giản. Bảo mật mạnh mẽ. Không lưu ký.',
    steps: {
      '1': {
        title: 'Chuyển đổi Cụm từ hạt giống',
        description:
          'Chuyển đổi cụm từ hạt giống của bạn thành văn bản mồi nhử. Được xử lý hoàn toàn ngoại tuyến bằng trình tạo cụm từ mồi nhử, không có máy chủ, không có đám mây và không thu thập dữ liệu.',
      },
      '2': {
        title: 'Nhận hai tệp độc lập',
        description:
          'Bạn nhận được một Văn bản Mồi nhử trông bình thường và không chứa thông tin hữu ích nào, và một Tệp Ánh xạ đóng vai trò là khóa duy nhất để khôi phục bí mật ban đầu — nếu không có cả hai, việc khôi phục là không thể.',
      },
      '3': {
        title: 'Lưu trữ chúng riêng biệt',
        description:
          'Lưu trữ văn bản mồi nhử và tệp ánh xạ riêng biệt. Cục bộ ở các vị trí khác nhau hoặc trong bộ lưu trữ vĩnh viễn sử dụng Kho chứa Đa Mật khẩu.',
      },
      '4': {
        title: 'Chỉ khôi phục khi cần thiết',
        description:
          'Khi cần khôi phục, hãy sử dụng cả hai tệp trong Trình tạo Decoy Phrase để khôi phục cụm từ hạt giống ban đầu của bạn.',
      },
    },
  },
  prosCons: {
    title: 'Ưu và Nhược điểm của Sao lưu',
    subtitle: 'Không có bản sao lưu hoàn hảo — chỉ có những rủi ro khác nhau.',
    methods: {
      paper: {
        name: 'Giấy',
        criteria: {
          free: 'Không tốn phí',
          easyAccess: 'Yêu cầu quyền truy cập vật lý',
          highSecurity: 'Dễ bị mất cắp, chụp ảnh hoặc sao chép',
          highPrivacy: 'Được lưu trữ hoàn toàn ngoại tuyến',
          lossProof: 'Dễ bị mất hoặc vô tình vứt bỏ',
          destructionProof: 'Dễ bị hỏng do lửa, nước và lão hóa',
        },
      },
      metal: {
        name: 'Kim loại',
        criteria: {
          free: 'Yêu cầu mua tấm kim loại',
          easyAccess: 'Yêu cầu quyền truy cập vật lý và phục hồi',
          highSecurity: 'Bất cứ ai tìm thấy đều có thể sử dụng',
          highPrivacy: 'Lưu trữ ngoại tuyến không có bên thứ ba',
          lossProof: 'Vẫn có thể bị mất hoặc bị đánh cắp',
          destructionProof: 'Thân thiện với lửa và nước',
        },
      },
      'local-storage': {
        name: 'Lưu trữ Cục bộ',
        criteria: {
          free: 'Sử dụng phần cứng hiện có',
          easyAccess: 'Yêu cầu thiết bị, cổng và khả năng tương thích',
          highSecurity: 'Dễ bị phần mềm độc hại hoặc trộm cắp',
          highPrivacy: 'Lưu trữ cục bộ không có bên thứ ba',
          lossProof: 'Dễ bị mất, hư hỏng hoặc hỏng hóc',
          destructionProof: 'Dễ bị hỏng hóc phần cứng',
        },
      },
      cloud: {
        name: 'Lưu trữ Đám mây',
        criteria: {
          free: 'Yêu cầu đăng ký hoặc dung lượng trả phí',
          easyAccess: 'Truy cập từ mọi nơi khi đăng nhập',
          highSecurity: 'Mục tiêu của hack và trộm cắp tài khoản',
          highPrivacy: 'Được kiểm soát bởi nhà cung cấp bên thứ ba',
          lossProof: 'Giảm nguy cơ mất mát thông qua các bản sao lưu',
          destructionProof: 'Tài khoản có thể bị xóa hoặc đóng băng',
        },
      },
      encrypted: {
        name: 'Tệp Kỹ thuật số Mã hóa',
        criteria: {
          free: 'Có thể tạo bằng các công cụ miễn phí',
          easyAccess: 'Yêu cầu mật khẩu và phần mềm chính xác',
          highSecurity: 'Chỉ mạnh nếu mật khẩu không bao giờ bị lộ',
          highPrivacy: 'Quyền riêng tư phụ thuộc vào vị trí lưu trữ',
          lossProof: 'Mất mật khẩu có nghĩa là mất hoàn toàn',
          destructionProof: 'Hỏng hoặc xóa tệp là thảm họa',
        },
      },
      shamir: {
        name: 'Chia sẻ Bí mật Shamir',
        criteria: {
          free: 'Yêu cầu các công cụ hoặc ví chuyên dụng',
          easyAccess: 'Phải thu thập số lượng phần chia sẻ ngưỡng',
          highSecurity: 'Các phần riêng lẻ vô dụng về mặt mật mã',
          highPrivacy: 'Không ai giữ toàn bộ hạt giống',
          lossProof: 'Cho phép mất một số phần chia sẻ',
          destructionProof: 'Mất quá nhiều phần sẽ không thể khôi phục',
        },
      },
      custodian: {
        name: 'Người giám sát',
        criteria: {
          free: 'Dịch vụ thường tính phí',
          easyAccess: 'Dễ dàng khôi phục thông qua quyền truy cập tài khoản',
          highSecurity: 'Phụ thuộc hoàn toàn vào bên thứ ba',
          highPrivacy: 'Người giám sát có khả năng hiển thị và kiểm soát',
          lossProof: 'Tiền có thể bị đóng băng hoặc tịch thu',
          destructionProof: 'Phá sản công ty là mối đe dọa mất trắng',
        },
      },
      splitting: {
        name: 'Chia tách Hạt giống',
        criteria: {
          free: 'Không tốn phí',
          easyAccess: 'Phải thu thập tất cả các phần',
          highSecurity: 'Ngay cả các phần một phần cũng rò rỉ thông tin',
          highPrivacy: 'Thường được lưu trữ ở dạng văn bản thuần túy',
          lossProof: 'Mất một phần có nghĩa là không thể khôi phục',
          destructionProof: 'Thiệt hại vật lý ảnh hưởng đến khả năng khôi phục',
        },
      },
      lawyer: {
        name: 'Luật sư / Công chứng viên',
        criteria: {
          free: 'Yêu cầu chi phí pháp lý liên tục',
          easyAccess: 'Truy cập phụ thuộc vào quy trình pháp lý',
          highSecurity: 'Liên quan đến yếu tố con người và rủi ro',
          highPrivacy: 'Luật sư có quyền truy cập vào hạt giống gốc',
          lossProof: 'Dễ bị lỗi hoặc tranh chấp của con người',
          destructionProof: 'Tài liệu có thể bị mất hoặc bị phá hủy',
        },
      },
      'decoy-phrase': {
        name: 'Decoy Phrase',
        criteria: {
          free: 'Hệ thống miễn phí và phi lợi nhuận',
          easyAccess: 'Có thể phục hồi bất cứ lúc nào thông qua lưu trữ vĩnh viễn',
          highSecurity: 'Hạt giống thực không bao giờ được lưu trữ trực tiếp',
          highPrivacy: 'Văn bản mồi nhử không có ý nghĩa',
          lossProof: 'Một phần duy nhất là vô dụng đối với kẻ tấn công',
          destructionProof: 'Có thể được sao lưu vào lưu trữ vĩnh viễn',
        },
      },
    },
    criteriaLabels: {
      free: 'Miễn phí',
      easyAccess: 'Dễ dàng truy cập',
      highSecurity: 'Bảo mật cao',
      highPrivacy: 'Quyền riêng tư',
      lossProof: 'Chống mất mát',
      destructionProof: 'Chống phá hủy',
    },
  },
  securityDemo: {
    title: 'Bảo mật thông qua Phân tách',
    subtitle:
      'Không có tệp ánh xạ, không có khôi phục. Không có văn bản mồi nhử, không có quyền truy cập.',
    annotations: {
      decoy:
        'Bạn phải có một văn bản mồi nhử, đóng vai trò là đại diện bị làm mờ của dữ liệu nhạy cảm ban đầu của bạn.',
      mapping:
        'Bạn phải có tệp ánh xạ, chứa các quy tắc chuyển đổi cần thiết để tái tạo lại dữ liệu gốc từ văn bản mồi nhử',
      result: 'Cụm từ hạt giống đã tạo của bạn sẽ xuất hiện ở đây',
      clickToGenerate: 'Nhấp vào đây để tạo cụm từ hạt giống',
    },
    buttons: {
      simulateDecoy: 'Nhấp để mô phỏng đặt văn bản mồi nhử',
      placeDecoy: '✓ Đã đặt văn bản mồi nhử',
      simulateMapping: 'Nhấp để mô phỏng tải lên tệp ánh xạ',
      uploadMapping: 'Cập nhật Ánh xạ',
      mappingLoaded: 'Đã tải Ánh xạ',
      updateMapping: 'Cập nhật tệp ánh xạ mới',
      generate: 'Tạo Kết quả',
      decrypting: 'Đang giải mã...',
    },
    labels: {
      decoyText: 'Văn bản mồi nhử',
      asciiText: 'Văn bản ASCII',
      resultPlaceholder: 'Kết quả sẽ xuất hiện ở đây...',
    },
  },
  faq: {
    title: 'Câu hỏi thường gặp',
    subtitle:
      'Dưới đây là một số câu hỏi bạn có thể có về Decoy Phrase. Không tìm thấy câu trả lời bạn đang tìm kiếm?',
    chatAi: 'Trò chuyện với AI về Decoy Phrase!',
    categories: {
      general: 'Chung',
      products: 'Sản phẩm',
      security: 'Bảo mật và Quyền riêng tư',
    },
    items: {
      'gen-1': {
        question: 'Decoy Phrase là gì?',
        answer:
          'Decoy Phrase là một phương pháp "offline-first" để bảo vệ và sao lưu các cụm từ hạt giống (seed phrases) và văn bản nhạy cảm — mà không bao giờ lưu trữ dữ liệu gốc.\n\nNó chuyển đổi các bí mật thành văn bản trông có vẻ bình thường, vô hại, với việc khôi phục chỉ có thể thực hiện được bằng cách kết hợp tệp ánh xạ riêng tư và văn bản đã chuyển đổi.\n\nĐể có độ bền lâu dài, các tệp mồi nhử và tệp ánh xạ có thể được lưu trữ vĩnh viễn thông qua Lưu Trữ Vĩnh Viễn Decoy Phrase, được kết nối trực tiếp với blockchain Arweave — đảm bảo chúng không thể bị mất, thay đổi hoặc xóa.',
      },
      'gen-2': {
        question: 'Decoy Phrase có miễn phí không?',
        answer:
          'Có. Decoy Phrase hoàn toàn miễn phí và hoạt động như một sáng kiến phi lợi nhuận. Tất cả các tính năng cốt lõi — bao gồm tạo văn bản mồi nhử, tạo tệp ánh xạ và khôi phục ngoại tuyến — đều có sẵn miễn phí.\n\nĐối với Lưu Trữ Vĩnh Viễn Decoy Phrase, việc lưu trữ được hỗ trợ bởi các khoản đóng góp. Những khoản đóng góp này được sử dụng để tài trợ cho việc mở rộng dung lượng lưu trữ vĩnh viễn trên blockchain Arweave theo thời gian. Mọi tệp đã được lưu trữ trên blockchain sẽ vẫn có thể truy cập mãi mãi, bất kể trạng thái tương lai của dịch vụ.',
      },
      'gen-3': {
        question: 'Điều gì là vĩnh viễn trong Decoy Phrase?',
        answer:
          'Trong Decoy Phrase, khái niệm vĩnh viễn áp dụng cho trang web, tên miền và dữ liệu được lưu trữ, được kích hoạt bởi Web Vĩnh Viễn và Lưu Trữ Vĩnh Viễn được xây dựng trên Arweave.',
      },
      'gen-4': {
        question: 'Decoy Phrase có lưu trữ dữ liệu của tôi không?',
        answer:
          'Không. Decoy Phrase không bao giờ lưu trữ cụm từ hạt giống hoặc dữ liệu nhạy cảm gốc của bạn. Quá trình tạo văn bản mồi nhử và tệp ánh xạ được chạy hoàn toàn ngoại tuyến bằng Trình tạo Decoy Phrase. Do đó, không có rủi ro bí mật của bạn bị lưu trữ trên bất kỳ máy chủ nào.\n\nKhi các tệp được lưu trữ trong Lưu Trữ Vĩnh Viễn, tất cả dữ liệu được mã hóa phía máy khách trước khi được gửi đến blockchain Arweave — bao gồm mật khẩu, nội dung tệp và tên tệp.',
      },
      'gen-5': {
        question: 'Điều gì xảy ra nếu tôi mất cả tệp ánh xạ và văn bản mồi nhử liên quan?',
        answer:
          'Nếu bạn mất cả tệp ánh xạ và văn bản mồi nhử tương ứng, dữ liệu gốc của bạn sẽ vĩnh viễn không thể khôi phục được. Decoy Phrase được thiết kế có chủ ý mà không có bất kỳ cơ chế đặt lại, sao lưu hoặc khôi phục nào và không bao giờ lưu trữ bí mật gốc của bạn, khiến việc khôi phục về mặt kỹ thuật là không thể nếu không có cả hai thành phần.\n\nĐây là lý do tại sao Decoy Phrase cung cấp Lưu Trữ Vĩnh Viễn: để giảm nguy cơ mất mát do tai nạn bằng cách cho phép lưu trữ các tệp mồi nhử và ánh xạ trong bộ lưu trữ dài hạn bất biến không thể bị xóa, thay đổi hoặc mất âm thầm, trong khi vẫn duy trì thiết kế không kiến thức (zero-knowledge) và không lưu ký (non-custodial) — nơi tất cả các tệp đều được mã hóa phía máy khách và quyền kiểm soát hoàn toàn thuộc về người dùng.',
      },
      'gen-6': {
        question: 'Tôi có cần trực tuyến để sử dụng Decoy Phrase không?',
        answer:
          'Còn tùy.\n\nTrình tạo Decoy Phrase hoạt động hoàn toàn ngoại tuyến. Tất cả các quy trình chính — tạo văn bản mồi nhử, tạo tệp ánh xạ và khôi phục dữ liệu — được thực thi hoàn toàn trên thiết bị của bạn mà không cần bất kỳ kết nối internet nào.\n\nTuy nhiên, Lưu Trữ Vĩnh Viễn yêu cầu kết nối trực tuyến vì nó lưu trữ các tệp được mã hóa trên blockchain Arweave bằng kiến trúc không kiến thức.',
      },
      'gen-7': {
        question:
          'Tôi có thể khôi phục cụm từ hạt giống hoặc dữ liệu nhạy cảm mà không cần sự hỗ trợ của bên thứ ba không?',
        answer:
          'Có. Decoy Phrase được thiết kế để sử dụng hoàn toàn tự chủ, không có trung gian. Sử dụng văn bản mồi nhử và tệp ánh xạ liên quan của bạn, hệ thống khôi phục dữ liệu gốc trực tiếp trên thiết bị của bạn, hoàn toàn ngoại tuyến thông qua Trình tạo Decoy Phrase — mà không liên quan đến bất kỳ bên thứ ba nào.',
      },
      'gen-8': {
        question: 'Chia sẻ Văn bản Mồi nhử với người khác có an toàn không?',
        answer:
          'Có, nó an toàn.\n\nVăn bản Mồi nhử được thiết kế để trông bình thường và không chứa bất kỳ thông tin nhạy cảm nào có thể sử dụng được. Nếu không có tệp ánh xạ tương ứng, nó không thể được sử dụng để khôi phục dữ liệu gốc. Tương tự, một tệp ánh xạ không có văn bản mồi nhử liên quan cũng không sử dụng được. Do đó, chỉ chia sẻ Văn bản Mồi nhử không làm lộ bí mật của bạn.',
      },
      'gen-9': {
        question: 'Decoy Phrase khác với trình quản lý mật khẩu như thế nào?',
        answer:
          'Decoy Phrase không phải là trình quản lý mật khẩu trực tuyến.\n\nViệc chuyển đổi cụm từ hạt giống, mật khẩu hoặc dữ liệu nhạy cảm khác được thực hiện hoàn toàn ngoại tuyến thông qua Trình tạo Decoy Phrase.\n\nLưu Trữ Vĩnh Viễn chỉ được sử dụng để lưu trữ văn bản mồi nhử và tệp ánh xạ, được tách biệt trong các không gian lưu trữ khác nhau bằng tính năng quản lý đa mật khẩu.\n\nTất cả các tệp được lưu trữ trong Lưu Trữ Vĩnh Viễn đều được mã hóa phía máy khách. Ngay cả khi chúng bị lộ, các khóa giải mã chỉ được giữ bởi người dùng, khiến dữ liệu không sử dụng được đối với bất kỳ ai khác.\n\nKhông giống như các trình quản lý mật khẩu lưu trữ mật khẩu được mã hóa trên máy chủ hoặc đám mây, Decoy Phrase cung cấp cho bạn toàn quyền kiểm soát cách thức và nơi dữ liệu nhạy cảm của bạn được lưu trữ và khôi phục.',
      },
      'prod-1': {
        question: 'Trình tạo Decoy Phrase là gì và các thành phần của nó là gì?',
        answer:
          'Trình tạo Decoy Phrase là công cụ trung tâm trong hệ thống Decoy Phrase, kết hợp Trình tạo Ánh xạ (Mapping Maker) và Trình tạo Văn bản (Text Generator).\n\nTrình tạo Ánh xạ chuyển đổi cụm từ hạt giống hoặc dữ liệu nhạy cảm thành văn bản mồi nhử thông thường và tạo tệp ánh xạ đóng vai trò là khóa khôi phục, trong khi Trình tạo Văn bản sử dụng tệp ánh xạ đó để khôi phục dữ liệu gốc từ văn bản mồi nhử.\n\nTất cả các quy trình được chạy hoàn toàn trên thiết bị của người dùng mà không cần kết nối internet, đảm bảo rằng không có dữ liệu nhạy cảm nào được gửi đến bất kỳ máy chủ nào.',
      },
      'prod-2': {
        question: 'Tệp Ánh xạ là gì và tại sao nó phải được lưu trữ riêng?',
        answer:
          'Tệp Ánh xạ là một tệp riêng tư (.json) chứa thông tin kỹ thuật và đóng vai trò là khóa duy nhất để khôi phục dữ liệu gốc từ văn bản mồi nhử.\n\nNó không trực tiếp chứa dữ liệu nhạy cảm và không có ý nghĩa nếu không có văn bản mồi nhử liên quan. Vì lý do này, Tệp Ánh xạ phải được lưu trữ riêng biệt với văn bản mồi nhử. Sự phân tách này ngăn chặn một tệp duy nhất tiết lộ bí mật. Nếu không có sự kết hợp chính xác của cả hai, việc khôi phục là không thể — nghĩa là không có thành phần riêng lẻ nào chứa thông tin nhạy cảm có thể khai thác được.',
      },
      'prod-3': {
        question: 'Lưu Trữ Vĩnh Viễn hoạt động như thế nào và định dạng tệp nào được hỗ trợ?',
        answer:
          'Lưu Trữ Vĩnh Viễn là một lớp lưu trữ dựa trên Arweave lưu trữ văn bản mồi nhử và tệp ánh xạ vĩnh viễn và bất biến.\n\nNó được thiết kế như bộ lưu trữ "ghi một lần, đọc mãi mãi" để sao lưu văn bản dài hạn mà không phụ thuộc vào các máy chủ truyền thống.\n\nLưu Trữ Vĩnh Viễn chỉ hỗ trợ các tệp dựa trên văn bản, chẳng hạn như .txt, .md và .json. Các định dạng khác như hình ảnh, video hoặc tệp âm thanh không được hỗ trợ.\n\nTất cả các lần tải lên được quản lý thông qua một tài khoản duy nhất bằng Ví Chính Chia sẻ (Shared Master Wallet), vì vậy người dùng không cần tạo hoặc quản lý ví blockchain cũng như không cần hiểu cơ chế blockchain. Sự phức tạp của blockchain được ẩn sau một giao diện người dùng đơn giản.',
      },
      'prod-4': {
        question:
          'Kho chứa Đa Mật khẩu (Multi-Password Vaults) là gì và chúng được sử dụng như thế nào?',
        answer:
          'Kho chứa Đa Mật khẩu là một tính năng của Lưu Trữ Vĩnh Viễn cho phép một tài khoản duy nhất chứa nhiều kho lưu trữ biệt lập, mỗi kho được bảo vệ bằng một mật khẩu khác nhau. Ví dụ: người dùng có thể lưu trữ văn bản mồi nhử trong Kho A và tệp ánh xạ trong Kho B, sử dụng mật khẩu riêng cho từng kho.\n\nMỗi kho được cách ly về mặt logic, nghĩa là quyền truy cập vào một kho không cấp quyền truy cập vào các kho khác. Do đó, việc xâm phạm một mật khẩu chỉ làm lộ một kho, giữ an toàn cho các tệp nhạy cảm khác.',
      },
      'prod-5': {
        question: 'Trình tạo Decoy Phrase có thể được sử dụng trên các thiết bị khác nhau không?',
        answer:
          'Có. Trình tạo Decoy Phrase có sẵn trên nhiều nền tảng. Nó có thể chạy trên các hệ điều hành máy tính để bàn chính (Windows, macOS, Linux) và trên các thiết bị Android.\n\nVì tất cả các quy trình được thực thi ngoại tuyến trên thiết bị cục bộ, Decoy Phrase cũng có thể được sử dụng trong môi trường không có truy cập internet hoặc trên các hệ thống bảo mật cao, chẳng hạn như máy tính "air-gapped".',
      },
      'prod-6': {
        question: 'Người dùng có cần hiểu blockchain để sử dụng các tính năng này không?',
        answer:
          'Không. Mặc dù Decoy Phrase sử dụng công nghệ blockchain (Arweave) ở hậu trường để lưu trữ vĩnh viễn, giao diện được thiết kế để người dùng không cần phải đối phó với bất kỳ sự phức tạp nào liên quan đến blockchain.\n\nBằng cách sử dụng Ví Chính Chia sẻ, người dùng chỉ cần tập trung vào việc quản lý văn bản và mật khẩu của họ; họ không cần tạo, lưu trữ hoặc quản lý ví blockchain của riêng mình. Do đó, tất cả các tính năng của Decoy Phrase có thể được sử dụng mà không cần bất kỳ kiến thức nào trước đó về công nghệ blockchain.',
      },
      'sec-1': {
        question: 'Hệ thống bảo vệ dữ liệu người dùng như thế nào?',
        answer:
          'Decoy Phrase áp dụng các nguyên tắc "offline-first" và không kiến thức, nghĩa là tất cả quá trình chuyển đổi và mã hóa dữ liệu nhạy cảm đều được thực hiện hoàn toàn trên thiết bị của người dùng — mà không yêu cầu kết nối internet hoặc bất kỳ máy chủ nào.\n\nDữ liệu được xử lý và mã hóa phía máy khách (ví dụ: sử dụng AES-256-GCM) trước khi được lưu trữ trong Lưu Trữ Vĩnh Viễn, vì vậy bộ lưu trữ công cộng chỉ chứa dữ liệu được mã hóa không thể đọc được nếu không có khóa của người dùng.\n\nNgoài ra, không có cụm từ hạt giống hoặc dữ liệu nhạy cảm gốc nào được lưu trữ trên bất kỳ máy chủ nào, nghĩa là không có kho chứa trung tâm nào có thể trở thành mục tiêu tấn công giá trị cao. Cách tiếp cận này loại bỏ sự phụ thuộc vào bên thứ ba và chuyển bảo mật từ bảo vệ dựa trên niềm tin sang kiến trúc kỹ thuật khiến việc truy cập bên ngoài là không thể theo thiết kế.',
      },
      'sec-2': {
        question: 'Decoy Phrase có thể xóa tệp của tôi trong Lưu Trữ Vĩnh Viễn không?',
        answer:
          'Không. Decoy Phrase không thể xóa tệp của bạn khi chúng đã được lưu trữ trong Lưu Trữ Vĩnh Viễn. Lưu Trữ Vĩnh Viễn được xây dựng trên blockchain Arweave, nơi dữ liệu là bất biến theo thiết kế. Khi một tệp được tải lên, nó không thể bị xóa, sửa đổi hoặc xóa bởi Decoy Phrase — hoặc bất kỳ ai khác.',
      },
      'sec-3': {
        question: 'Hệ thống đảm bảo rằng không có dữ liệu nhạy cảm nào được lưu trữ như thế nào?',
        answer:
          'Decoy Phrase sử dụng nguyên tắc "chuyển đổi và phân tách". Dữ liệu gốc được chuyển đổi ngoại tuyến thành văn bản mồi nhử thông thường trông có vẻ ngẫu nhiên và không chứa ý nghĩa bí mật. Tệp ánh xạ được tạo chứa thông tin khôi phục kỹ thuật nhưng không bao gồm dữ liệu nhạy cảm gốc.\n\nHai thành phần này phải được lưu trữ riêng biệt (ví dụ: ở các vị trí khác nhau hoặc được bảo vệ bằng các mật khẩu khác nhau). Do đó, không có thành phần riêng lẻ nào chứa bí mật gốc. Không có tệp ánh xạ, văn bản mồi nhử là vô dụng; và không có văn bản mồi nhử, tệp ánh xạ là vô nghĩa.\n\nPhương pháp này đảm bảo rằng dữ liệu nhạy cảm gốc không bao giờ được lưu trữ trực tiếp trong ứng dụng hoặc trên bất kỳ máy chủ nào.',
      },
      'sec-4': {
        question: 'Hệ thống biết gì và không biết gì trong Lưu Trữ Vĩnh Viễn?',
        answer:
          'Decoy Phrase là hệ thống không kiến thức, nghĩa là hệ thống không bao giờ biết nội dung dữ liệu của người dùng.\n\nNó không thể nhìn thấy cụm từ hạt giống, mật khẩu hoặc nội dung tệp gốc vì tất cả dữ liệu đều được mã hóa hoàn toàn trong trình duyệt cục bộ của người dùng trước khi tải lên.\n\nThông tin duy nhất hiển thị cho hệ thống là siêu dữ liệu công khai không nhạy cảm, chẳng hạn như tên người dùng (được sử dụng làm mã định danh công khai) và số lượng tệp được lưu trữ.\n\nMối quan hệ giữa văn bản mồi nhử và tệp ánh xạ của nó cũng không được hệ thống biết đến. Tóm lại, nội dung và bí mật của người dùng không bao giờ bị lộ; chỉ tồn tại dữ liệu được mã hóa và siêu dữ liệu công khai hạn chế.',
      },
      'sec-5': {
        question:
          'Cách tiếp cận bảo mật của Decoy Phrase khác với các hệ thống truyền thống (như trình quản lý mật khẩu) như thế nào?',
        answer:
          '• Lưu trữ dữ liệu gốc: Các trình quản lý mật khẩu truyền thống lưu trữ bí mật của người dùng (mật khẩu, hạt giống, v.v.) bên trong một kho chứa được mã hóa. Decoy Phrase hoàn toàn không bao giờ lưu trữ dữ liệu gốc.\n\n• Kiến trúc: Các trình quản lý mật khẩu thường dựa vào máy chủ hoặc cơ sở hạ tầng đám mây để đồng bộ hóa. Decoy Phrase là offline-first, không có backend và không phụ thuộc vào bên thứ ba.\n\n• Mô hình bảo mật: Trong các trình quản lý mật khẩu, bảo mật phụ thuộc vào mã hóa kho chứa và mật khẩu chủ; nếu kho chứa hoặc mật khẩu chủ bị xâm phạm, tất cả dữ liệu có thể bị lộ. Decoy Phrase không có kho chứa như vậy. Việc rò rỉ một tệp duy nhất (văn bản mồi nhử hoặc tệp ánh xạ) không đủ để khôi phục dữ liệu gốc, vì mỗi thành phần không có giá trị khi đứng một mình.\n\n• Điểm lỗi duy nhất: Kho chứa của trình quản lý mật khẩu là mục tiêu giá trị cao. Decoy Phrase không có đối tượng duy nhất nào chứa bí mật; cho đến khi cả hai thành phần (văn bản mồi nhử và tệp ánh xạ) bị xâm phạm cùng nhau, không có điểm lỗi chính nào để tấn công.',
      },
      'sec-6': {
        question: 'Điều gì xảy ra nếu tệp mồi nhử hoặc tệp ánh xạ rơi vào tay người khác?',
        answer:
          '• Nếu chỉ văn bản mồi nhử bị lộ, không có bí mật nào bị lộ. Văn bản mồi nhử là dữ liệu thông thường không có ý nghĩa nhạy cảm và không thể sử dụng nếu không có tệp ánh xạ.\n\n• Nếu chỉ tệp ánh xạ bị lộ, dữ liệu gốc vẫn an toàn. Tệp ánh xạ chỉ chứa các mẫu ký tự kỹ thuật, không có nội dung bí mật và vô dụng nếu không có văn bản mồi nhử liên quan.\n\n• Chỉ khi cả hai bị lộ cùng nhau, dữ liệu gốc mới có thể được khôi phục. Trong trường hợp đó, an ninh hoàn toàn sụp đổ vì kẻ tấn công sở hữu cả hai thành phần cần thiết.',
      },
      'sec-7': {
        question: 'Rủi ro của việc không phân tách các tệp là gì?',
        answer:
          'Rủi ro chính xảy ra nếu văn bản mồi nhử và tệp ánh xạ không được lưu trữ riêng biệt (ví dụ: ở cùng một vị trí hoặc được bảo vệ bằng cùng một mật khẩu).\n\nNếu điều này xảy ra, bất kỳ ai có quyền truy cập vào cả hai thành phần đều có thể trực tiếp khôi phục dữ liệu gốc. Nói cách khác, hệ thống chỉ thất bại khi hai thành phần vô tình được đưa lại với nhau.\n\nĐó là lý do tại sao sự phân tách nghiêm ngặt là rất cần thiết: lưu trữ văn bản mồi nhử và tệp ánh xạ ở các vị trí khác nhau hoặc bảo vệ chúng bằng các mật khẩu khác nhau. Khi được phân tách đúng cách, sự thất bại như vậy là cực kỳ khó xảy ra.',
      },
    },
  },
  donate: {
    title: 'Hỗ trợ Decoy Phrase',
    description:
      'Decoy Phrase miễn phí sử dụng và được xây dựng như một sáng kiến phi lợi nhuận. Không có bức tường phí và không yêu cầu đăng ký. Đóng góp là tùy chọn và minh bạch.',
    link: 'Xem số liệu dự án trực tiếp và dữ liệu công khai tại đây!',
    cards: {
      storage: {
        title: 'Quỹ Lưu trữ',
        description:
          'Khoản đóng góp này được chuyển trực tiếp vào ví lưu trữ và được tự động thêm vào quỹ lưu trữ, tài trợ bền vững cho việc lưu trữ vĩnh viễn và tăng dung lượng khả dụng.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Gửi AR từ sàn giao dịch</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Mua token AR</li>
      <li>Đi tới Gửi hoặc Rút tiền</li>
      <li>Chọn Rút tiền On-Chain</li>
      <li>Chọn AR (Arweave)</li>
      <li>Dán địa chỉ Wallet của Decoy Phrase</li>
      <li>Chọn mạng Arweave</li>
      <li>Nhập số tiền</li>
      <li>Xác nhận rút tiền</li>
    </ol>
    <p class="mt-2 text-xs text-muted-foreground/80 italic">Chuyển tiền AR thường mất 1–5 phút.</p>
  </li>
  <li>
    <span class="font-bold block mb-1">Gửi AR từ Wander Wallet</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Tạo Wander Wallet</li>
      <li>Mua token AR qua phương thức thanh toán có sẵn</li>
      <li>Nhấp Gửi</li>
      <li>Dán địa chỉ Wallet của Decoy Phrase</li>
      <li>Nhập số lượng</li>
      <li>Xác nhận giao dịch</li>
    </ol>
  </li>
</ol>`,
      },
      team: {
        title: 'Quỹ Đội ngũ',
        description:
          'Khoản đóng góp này hỗ trợ đội ngũ và hệ sinh thái Decoy Phrase, bao gồm phát triển, tiếp thị và các sáng kiến cộng đồng. Quỹ cũng có thể được phân bổ cho việc lưu trữ khi cần thiết.',
        howTo: `<ol class="pl-4 list-decimal space-y-4">
  <li>
    <span class="font-bold block mb-1">Gửi stable coin từ sàn giao dịch</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Mua USDT, USDC hoặc stablecoin được hỗ trợ khác</li>
      <li>Đi tới Gửi hoặc Rút tiền</li>
      <li>Chọn Rút tiền On-Chain</li>
      <li>Chọn stablecoin bạn muốn gửi</li>
      <li>Dán địa chỉ ví của Decoy Phrase (đảm bảo khớp với mạng đã chọn)</li>
      <li>Chọn mạng khớp với địa chỉ ví</li>
      <li>Nhập số tiền</li>
      <li>Xác nhận rút tiền</li>
    </ol>
  </li>
  <li>
    <span class="font-bold block mb-1">Gửi stable coin từ DEX</span>
    <ol class="pl-4 list-decimal space-y-1 marker:text-muted-foreground/70">
      <li>Mua stablecoin hoặc token gốc của mạng đã chọn</li>
      <li>Đi tới Gửi hoặc Rút tiền</li>
      <li>Chọn mạng hoặc Chọn coin bạn muốn gửi</li>
      <li>Dán địa chỉ ví của Decoy Phrase dựa trên token và mạng ví</li>
      <li>Nhập số lượng</li>
      <li>Xác nhận giao dịch</li>
    </ol>
  </li>
</ol>`,
      },
    },
    calculator: 'Máy tính Lưu trữ',
    info: {
      p1: 'Kích thước tệp trung bình cho tệp ánh xạ cụm từ hạt giống 12 từ là ~50 KiB. Tải lên hiện sử dụng <strong class="text-foreground">Turbo (được cung cấp bởi ar.io)</strong>, cho phép tải lên miễn phí các tệp dưới 105 KiB, với tính toán phí Arweave trực tiếp được khuyến nghị như dự phòng nếu Turbo không khả dụng.',
      p2: 'Tất cả dữ liệu được lưu trữ trên bộ lưu trữ vĩnh viễn vẫn có thể truy cập mãi mãi, ngay cả khi dung lượng đạt đến giới hạn và không có khoản đóng góp nào trong tương lai được thực hiện, trong khi dung lượng bổ sung nhằm hỗ trợ người dùng và các thế hệ tương lai của Decoy Phrase.',
    },
    labels: {
      donationAmount: 'Số tiền quyên góp',
      arweaveEquivalent: 'Tương đương Arweave',
      winstonAmount: 'Số tiền Winston',
      capacityIncrease: 'Khoản đóng góp này làm tăng dung lượng lưu trữ vĩnh viễn thêm',
      files: 'Tệp',
      calculate: 'Tính toán',
      currentBalance: 'Số dư hiện tại',
      howToDonate: 'Làm thế nào để quyên góp?',
      copied: 'Đã sao chép!',
      addressCopied: 'Đã sao chép địa chỉ!',
      copyAddress: 'Sao chép địa chỉ ví',
      selectNetwork: 'Chọn mạng',
      walletAddress: 'Địa chỉ ví',
    },
  },
  metrics: {
    title: 'Thống kê Decoy Phrase Trực tiếp',
    labels: {
      totalUsers: 'Tổng người dùng',
      totalFilesStored: 'Tổng tệp đã lưu',
      totalFilesLocked: 'Tổng tệp bị khóa',
      totalDonations: 'Tổng số tiền quyên góp',
      remainingCapacity: 'Dung lượng tệp còn lại',
      downloadTotal: 'Tổng lượt tải xuống Trình tạo Decoy Phrase',
    },
    status: {
      live: 'Trực tiếp',
      reconnecting: 'Đang kết nối lại...',
      disconnected: 'Đã ngắt kết nối',
    },
    filters: {
      day: 'Ngày',
      month: 'Tháng',
      quarter: 'Quý',
      year: 'Năm',
      all: 'Tất cả',
    },
  },
  download: {
    title: 'Chuyên đổi và khôi phục cụm từ hạt giống gốc của bạn bất cứ lúc nào.',
    subtitle:
      'Chuyển đổi cụm từ hạt giống của bạn thành văn bản mồi nhử có thể tùy chỉnh và khôi phục bản gốc bất cứ lúc nào bằng tệp ánh xạ riêng tư của bạn. Hoàn toàn ngoại tuyến, không lưu trữ, tải lên hoặc chia sẻ cụm từ hạt giống.',
    cta: {
      about: 'Về trình tạo Decoy',
      tutorials: 'Xem hướng dẫn',
    },
  },
  feedback: {
    title: 'Phản hồi & Hỗ trợ',
    description:
      'Chia sẻ đề xuất của bạn hoặc báo cáo sự cố để giúp chúng tôi cải thiện Trình tạo Decoy. Vui lòng không gửi cụm từ hạt giống hoặc dữ liệu nhạy cảm.',
    discord: {
      text: 'Tham gia <span class="font-bold text-[#5865F2]">Discord</span> để cập nhật phản hồi và giải pháp cộng đồng.',
      linkText: 'Tham gia ngay!',
    },
    forms: {
      feedback: {
        title: 'Phản hồi',
        name: 'Tên',
        subject: 'Chủ đề',
        description: 'Mô tả',
        email: 'Email',
        submit: 'Gửi',
        submitting: 'Đang gửi...',
        success: 'Đã gửi phản hồi! Kiểm tra Discord để cập nhật.',
        error: 'Gửi thất bại. Vui lòng thử lại.',
        required: 'Bắt buộc',
        invalidEmail: 'Địa chỉ email không hợp lệ',
        minChar: 'Phải có ít nhất 10 ký tự',
      },
      support: {
        title: 'Hỗ trợ',
        category: 'Danh mục',
        appVersion: 'Phiên bản ứng dụng',
        reference: 'Liên kết tham chiếu (Tùy chọn)',
        referenceHelper:
          "Tải ảnh chụp màn hình hoặc video lên Google Drive hoặc đám mây khác, đặt quyền truy cập thành 'bất kỳ ai có liên kết' và dán liên kết vào đây.",
        required: 'Bắt buộc',
        invalidEmail: 'Địa chỉ email không hợp lệ',
        minChar: 'Phải có ít nhất 10 ký tự',
      },
    },
  },
};
