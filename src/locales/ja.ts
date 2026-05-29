import { Translation } from './en';

export const ja: Translation = {
  nav: {
    home: "ホーム",
    about: "プロフィール",
    skills: "スタック",
    experience: "経験",
    projects: "プロジェクト",
    architecture: "システム",
    contact: "コンタクト",
  },
  hero: {
    welcome: {
      fullstack: "フルスタック開発者",
      frontend: "フロントエンド開発者",
      backend: "バックエンド開発者",
      react: "ReactとNext.jsのエキスパート",
      node: "Node.jsとNestJSに精通",
      django: "Djangoバックエンドスペシャリスト",
      microservices: "マイクロサービスアーキテクチャ愛好家",
    },
    title: "提供する",
    highlight: "最高の",
    subtitle: "プロジェクト体験",
    description: "React、Next.js、Node.jsを使用してスケーラブルで安全なWebアプリケーションを作成することを専門とするフルスタック開発者です。NestJS、Django、Spring Boot、Golangなどのバックエンド技術に精通しており、マイクロサービスアーキテクチャと高度なセキュリティプラクティスを確実に習得しています。人工知能とソフトウェア工学の専門課程を修了し、技術的な深さと多様性をさらに高めています。",
    cta: "詳しく見る！",
  },
  skills: {
    badge: "Next 14でより良く考える",
    title: "最新技術でアプリを作成",
    subtitle: "タスクの期限やアイデアを逃さない",
  },
  encryption: {
    title: "パフォーマンス",
    and: "と",
    security: "セキュリティ",
    subtitle: "エンドツーエンド暗号化でデータを保護",
    types: {
      encryption: "暗号化",
      nodeForge: "Node forge",
      nodeRsa: "Node RSA",
      asymmetric: "非対称暗号化",
      gcm: "GCM暗号",
      crypto: "暗号学",
      security: "セキュリティ",
      ssr: "サーバーサイドレンダリング",
      csr: "クライアントサイドレンダリング",
    }
  },
  experience: {
    title: "私の経験",
    items: [
      {
        title: "2025年6月 – 現在",
        cardTitle: "Blank Factor - ボゴタ、コロンビア",
        cardSubtitle: "シニアフロントエンド開発者",
        cardDetailedText: `
          <ul>
            <li>React.js、Context API、カスタムフックを使用したスケーラブルなフロントエンドアプリケーションの開発を主導</li>
            <li>複数のREST APIを統合し、安全なデータ交換と効率的なエラー処理を確保</li>
            <li>SASS CSSと内部ライブラリを使用したコンポーネント駆動アーキテクチャに従って再利用可能なUIコンポーネントを設計</li>
            <li>Context API、レデューサー、メモ化を使用してグローバルな状態管理ソリューションを実装し、パフォーマンスを最適化</li>
            <li>バックエンドチームと協力してAPIコントラクトを定義し、より高速なレンダリングのためにレスポンス構造を改善</li>
            <li>Formikと Yupを使用して動的検証と条件付きロジックを含む高度なフォームを構築</li>
            <li>遅延ロード、コード分割、バンドル最適化によりアプリケーションのパフォーマンスを向上</li>
            <li>JestとReact Testing Libraryを使用して単体テストと統合テストを記述し、高いカバレッジを達成</li>
            <li>アジャイルチームの一員としてスプリント計画、コードレビュー、技術的意思決定に参加</li>
            <li>UIワークフロー、コンポーネントの動作、統合プロセスを内部オンボーディング用に文書化</li>
            <li>UIコンポーネント全体でアクセシビリティコンプライアンス（WCAG）を確保</li>
            <li>バグ修正、リファクタリング、継続的な改善を処理して保守性と拡張性を向上</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">ツール/テクノロジー: React.js, Context API, TypeScript, Formik, Yup, SASS, REST APIs, GraphQL, Jest, React Testing Library, Git, Azure DevOps</p>
        `,
      },
      {
        title: "2022年10月 – 2025年4月",
        cardTitle: "Banco Caja Social - ボゴタ、コロンビア",
        cardSubtitle: "フルスタック開発者",
        cardDetailedText: `
          <ul>
            <li>マイクロサービスアーキテクチャに基づく製品の分析と定義</li>
            <li>contextApi、tailwindを使用してゼロからNextでフロントエンドを作成</li>
            <li>バックログ管理と開発チームの管理</li>
            <li>アプリケーションのセキュリティと複数のAPIとの対話およびデータ暗号化機能を確保</li>
            <li>Azure DevOpsによる継続的デプロイメント</li>
            <li>Nextでさまざまな検証を使用してuseFormでさまざまなフォームを作成</li>
            <li>Jestでのテスト</li>
            <li>Nestでマイクロサービスを開発</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">ツール/テクノロジー: Next.js, ContextAPI, Tailwind, Azure DevOps, Jest, NestJS</p>
        `,
      },
      {
        title: "2021年3月 – 2022年12月",
        cardTitle: "MinTic - Canal 13、ボゴタ、コロンビア",
        cardSubtitle: "フルスタック開発者",
        cardDetailedText: `
          <ul>
            <li>Moodleプラットフォーム用のフォームを作成</li>
            <li>管理ダッシュボードを作成</li>
            <li>マイクロサービスアーキテクチャに基づく製品の分析と定義</li>
            <li>Nodeでゼロからバックエンドを作成</li>
            <li>contextApiとRedux、Bootstrapを使用してゼロからReactでフロントエンドを作成</li>
            <li>バックログ管理と開発チームの管理</li>
            <li>さまざまなプラットフォームのデータを分析および処理するための5つ以上のフルスタックWebアプリケーションを開発</li>
            <li>アプリケーションのセキュリティと複数のAPIおよびデータベースとの対話機能を確保</li>
            <li>プロジェクトおよび製品マネージャー、開発者、QAを含むアプリ開発チームと緊密に協力して、問題、テスト方法、ベストプラクティスを決定</li>
            <li>顧客向けの高プロファイルアプリケーション用の単体テストと負荷テストを実施し、システム障害率を80%削減</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">ツール/テクノロジー: Azure, React, Node, PHP, Docker, MySQL, Nginx</p>
        `,
      },
      {
        title: "2021年9月 – 2022年5月",
        cardTitle: "エネルギー省、ボゴタ、コロンビア",
        cardSubtitle: "フリーランサー",
        cardDetailedText: `
          <ul>
            <li>プロダクトオーナーが管理するモデルの開発</li>
            <li>フロントエンドとバックエンドのバグ解決</li>
            <li>製品の分析と定義</li>
            <li>HTML、JavaScript、CSS、Bootstrapでレイアウトを設計および開発</li>
            <li>アプリケーションの効率、データ品質、範囲、操作性、柔軟性を向上</li>
            <li>分散コンピューティング、大規模設計、リアルタイムデータ処理、データストレージのアイデアを使用して、困難なデータセットの問題を解決</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">ツール/テクノロジー: Django, HTML, CSS, Bootstrap, JavaScript</p>
        `,
      },
      {
        title: "2021年11月 – 2022年1月",
        cardTitle: "Banitsmo、ボゴタ、コロンビア",
        cardSubtitle: "フルスタック開発者",
        cardDetailedText: `
          <ul>
            <li>Angular、HTML、JavaScript、CSS、Bootstrapでレイアウトを設計および開発</li>
            <li>金融商品のスタンドアロンデータ抽出「エージェント」とメインアプリケーション機能を開発および実装</li>
            <li>非常に効率的なアプリベースのソリューションを作成および提供することにより、会社の苦情処理プロセスを最適化</li>
            <li>DynamoDbとMySQLでのデータベースモデリング</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">ツール/テクノロジー: Angular, HTML, CSS, Bootstrap, JavaScript, NodeJS, AWS</p>
        `,
      },
      {
        title: "2021年12月 – 2022年2月",
        cardTitle: "Vivienda 360、ボゴタ、コロンビア",
        cardSubtitle: "フリーランサーおよび個人プロジェクト",
        cardDetailedText: `
          <ul>
            <li>製品の分析と定義</li>
            <li>React、HTML、JavaScript、CSS、Bootstrapでレイアウトを設計および開発</li>
            <li>Node.js、Typescript、React、chartJSを含むさまざまなテクノロジーを利用して、ナレッジグラフ上のナレッジ管理プラットフォームを設計および作成</li>
            <li>MercadoPagoを使用した金融商品のデータ抽出とメインアプリケーション機能を実装</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">ツール/テクノロジー: React, HTML, CSS, Bootstrap, JavaScript, NodeJS, MercadoPago, ContextAPI</p>
        `,
      },
      {
        title: "2020年1月 – 2021年3月",
        cardTitle: "Rapid Fast、ボゴタ、コロンビア",
        cardSubtitle: "フルスタック開発者",
        cardDetailedText: `
          <ul>
            <li>Flutter、React、Node、Firebaseを使用してWebプラットフォームとモバイルアプリケーションを作成</li>
            <li>Google Cloud Consoleでのデプロイメント</li>
            <li>Firebaseを使用したデータベースモデリング</li>
            <li>バックエンドサービスAPIの作成</li>
            <li>バックログ管理と開発チームの管理</li>
            <li>業界で採用されている最新のテクノロジーとフレームワークを使用して、さまざまなプラットフォームでフルスタックアプリケーションを開発</li>
            <li>Webベースのソフトウェアの開発、改善、運用において重要な役割を果たす</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">ツール/テクノロジー: React, Node, Next, Firebase, Flutter, Android, iOS, Google Cloud Platform</p>
        `,
      },
      {
        title: "2019年5月 – 2019年10月",
        cardTitle: "YoyisFood、ボゴタ、コロンビア",
        cardSubtitle: "ジュニア開発者",
        cardDetailedText: `
          <ul>
            <li>HTML、JavaScript、CSS、Bootstrapでレイアウトを設計および開発</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">ツール/テクノロジー: HTML, CSS, Bootstrap, JavaScript, PHP, MySQL</p>
        `,
      },
    ]
  },
  projects: {
    title: "私のプロジェクト",
    items: [
      {
        title: "Upstask mern",
        description: "socket.ioとreact hooksを使用したmernスタックで作成されたプロジェクト、mongoDbを使用"
      },
      {
        title: "Minenergia",
        description: "wagtail、Django、html、Javascript、Bootstrap、postgreSQL、CSSで作成されたプロジェクト"
      },
      {
        title: "Pultemsoft",
        description: "reactとbootstrapで作成されたプロジェクト"
      },
      {
        title: "Banco Caja Social",
        description: "Next.js、TailwindCSS、TypeScript、Redux Toolkit、MongoDB、NestJSで作成されたプロジェクト"
      },
      {
        title: "カラージェネレーター",
        description: "Reactで作成されたプロジェクト"
      },
      {
        title: "暗号通貨アプリ",
        description: "Reactで作成されたプロジェクト"
      }
    ]
  },
  about: {
    eyebrow: "プロフィール",
    title: "スケールし、思考するシステムを設計する",
    lead: "エレガントなフロントエンド体験と、回復力がありAIを活用したバックエンドが出会う、プロダクション品質のプラットフォームを設計・構築します。",
    paragraphs: [
      "銀行・行政・スタートアップで7年、実負荷でも高速を保つマイクロサービス、イベント駆動システム、クラウドインフラを構築してきました。",
      "人工知能とソフトウェア工学の専門課程を修了し、システム設計とインターフェースの作り込み（モーション・性能・ディテール）を同じく重視しています。",
    ],
    stats: [
      { value: 7, suffix: "", label: "年の経験" },
      { value: 40, suffix: "+", label: "リリースしたシステム" },
      { value: 12, suffix: "+", label: "エンタープライズ顧客" },
      { value: 99, suffix: "%", label: "稼働率重視" },
    ],
    pillars: [
      { title: "システムアーキテクチャ", description: "組織と共にスケールする、マイクロサービス・イベント駆動設計・クリーンな境界。" },
      { title: "AIエンジニアリング", description: "実プロダクトに組み込まれたLLMパイプライン・検索・推論サービス。" },
      { title: "クラウド & DevOps", description: "初日から可観測性を備えたAWS・GCP・コンテナ・CI/CD。" },
      { title: "スケーラビリティ志向", description: "性能予算・キャッシュ戦略・既定の水平スケーリング。" },
    ],
  },
  systems: {
    eyebrow: "システム & AI",
    title: "動くアーキテクチャ",
    description: "分散・イベント駆動・AI駆動のシステムを、エッジから推論までどう構成するかのライブビュー。",
    legend: {
      client: "クライアント層",
      gateway: "APIゲートウェイ",
      services: "マイクロサービス",
      data: "データ & イベント",
      ai: "AIパイプライン",
      cloud: "クラウド基盤",
    },
  },
  contact: {
    eyebrow: "コンタクト",
    title: "卓越したものを一緒に作りましょう",
    description: "シニアAIエンジニア・アーキテクトの職、アドバイザリー、意欲的なコラボレーションを歓迎します。",
    namePlaceholder: "お名前",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "プロジェクトについて教えてください…",
    submit: "メッセージを送信",
    availability: "新規プロジェクト対応可能",
  }
};
