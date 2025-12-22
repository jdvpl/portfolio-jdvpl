import { Translation } from './en';

export const fr: Translation = {
  nav: {
    skills: "Compétences",
    projects: "Projets",
    experience: "Expérience",
  },
  hero: {
    welcome: {
      fullstack: "Développeur full stack",
      frontend: "Développeur Frontend",
      backend: "Développeur Backend",
      react: "Expert en React et Next.js",
      node: "Compétent en Node.js et NestJS",
      django: "Spécialiste Backend Django",
      microservices: "Passionné d'Architecture Microservices",
    },
    title: "offrant",
    highlight: "la meilleure",
    subtitle: "expérience de projet",
    description: "Je suis un Développeur Full Stack spécialisé dans la création d'applications web évolutives et sécurisées utilisant React, Next.js et Node.js. Compétent dans les technologies backend telles que NestJS, Django, Spring Boot et Golang, j'ai une solide maîtrise de l'architecture microservices et des pratiques de sécurité avancées. J'ai complété des spécialisations en Intelligence Artificielle et Ingénierie Logicielle, améliorant davantage ma profondeur technique et ma polyvalence.",
    cta: "En savoir plus!",
  },
  skills: {
    badge: "Pensez mieux avec Next 14",
    title: "Créer des applications avec des technologies modernes",
    subtitle: "Ne manquez jamais une échéance ou une idée",
  },
  encryption: {
    title: "Performance",
    and: "et",
    security: "sécurité",
    subtitle: "Sécurisez vos données avec un chiffrement de bout en bout",
    types: {
      encryption: "Chiffrement",
      nodeForge: "Node forge",
      nodeRsa: "Node RSA",
      asymmetric: "Chiffrement Asymétrique",
      gcm: "Chiffrement GCM",
      crypto: "Cryptographie",
      security: "Sécurité",
      ssr: "Rendu côté serveur",
      csr: "Rendu côté client",
    }
  },
  experience: {
    title: "Mon Expérience",
    items: [
      {
        title: "Juin 2025 – Actuel",
        cardTitle: "Blank Factor - Bogotá, Colombie",
        cardSubtitle: "Développeur Frontend Senior",
        cardDetailedText: `
          <ul>
            <li>J'ai dirigé le développement d'applications frontend évolutives utilisant React.js, Context API et hooks personnalisés</li>
            <li>J'ai intégré plusieurs API REST, assurant un échange de données sécurisé et une gestion efficace des erreurs</li>
            <li>J'ai conçu des composants UI réutilisables suivant une architecture orientée composants avec SASS css et bibliothèques internes</li>
            <li>J'ai implémenté des solutions de gestion d'état global utilisant Context API, reducers et mémoisation pour optimiser les performances</li>
            <li>J'ai collaboré avec les équipes backend pour définir les contrats API et améliorer la structure des réponses pour un rendu plus rapide</li>
            <li>J'ai construit des formulaires avancés utilisant Formik et Yup, incluant validations dynamiques et logique conditionnelle</li>
            <li>J'ai amélioré les performances de l'application grâce au lazy loading, code splitting et optimisation du bundle</li>
            <li>J'ai écrit des tests unitaires et d'intégration utilisant Jest et React Testing Library, atteignant une couverture élevée</li>
            <li>J'ai participé à la planification des sprints, revues de code et prise de décisions techniques en tant que membre d'une équipe agile</li>
            <li>J'ai documenté les flux UI, le comportement des composants et les processus d'intégration pour l'intégration interne</li>
            <li>J'ai assuré la conformité à l'accessibilité (WCAG) dans les composants UI</li>
            <li>J'ai géré les corrections de bugs, refactoring et améliorations continues pour améliorer la maintenabilité et l'évolutivité</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">Outils/Technologies: React.js, Context API, TypeScript, Formik, Yup, SASS, REST APIs, GraphQL, Jest, React Testing Library, Git, Azure DevOps</p>
        `,
      },
      {
        title: "Oct. 2022 – Avr. 2025",
        cardTitle: "Banco Caja Social - Bogotá, Colombie",
        cardSubtitle: "Développeur Full Stack",
        cardDetailedText: `
          <ul>
            <li>Analyse et définition du produit basé sur l'architecture microservices</li>
            <li>Création du frontend en Next de zéro avec contextApi, tailwind</li>
            <li>Administration du backlog et gestion de l'équipe de développement</li>
            <li>Assurer la sécurité des applications et la capacité d'interagir avec plusieurs API et chiffrer les données</li>
            <li>Déploiement continu avec Azure DevOps</li>
            <li>Création de différents formulaires avec useForm dans Next avec différentes validations</li>
            <li>Tests avec Jest</li>
            <li>Développement de microservices avec Nest</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">Outils/Technologies: Next.js, ContextAPI, Tailwind, Azure DevOps, Jest, NestJS</p>
        `,
      },
      {
        title: "Mars 2021 – Déc. 2022",
        cardTitle: "MinTic - Canal 13, Bogotá, Colombie",
        cardSubtitle: "Développeur Full Stack",
        cardDetailedText: `
          <ul>
            <li>Création de formulaires pour plateforme Moodle</li>
            <li>Création de tableau de bord admin</li>
            <li>Analyse et définition du produit basé sur l'architecture microservices</li>
            <li>Création du backend en Node de zéro</li>
            <li>Création du frontend en React de zéro avec contextApi et Redux, Bootstrap</li>
            <li>Administration du backlog et gestion de l'équipe de développement</li>
            <li>J'ai développé plus de 5 applications web full-stack pour analyser et traiter des données pour différentes plateformes</li>
            <li>Assuré la sécurité des applications et la capacité d'interagir avec plusieurs API et bases de données</li>
            <li>J'ai travaillé étroitement avec l'équipe de développement incluant les chefs de projet et de produit, développeurs et QA pour déterminer les problèmes, méthodes de test et meilleures pratiques</li>
            <li>J'ai effectué des tests unitaires et de charge pour des applications grand public à haut profil, réduisant le taux de défaillance du système de 80%</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">Outils/Technologies: Azure, React, Node, PHP, Docker, MySQL, Nginx</p>
        `,
      },
      {
        title: "Sept. 2021 – Mai 2022",
        cardTitle: "Ministère de l'Énergie, Bogotá, Colombie",
        cardSubtitle: "Freelancer",
        cardDetailedText: `
          <ul>
            <li>Développement de modèles gérés par le product owner</li>
            <li>Résolution de bugs avec frontend et backend</li>
            <li>Analyse et définition du produit</li>
            <li>J'ai conçu et développé des layouts en HTML, JavaScript, CSS et Bootstrap</li>
            <li>J'ai amélioré l'efficacité, la qualité des données, la portée, l'opérabilité et la flexibilité des applications</li>
            <li>J'ai résolu des problèmes complexes de jeux de données en utilisant des idées de calcul distribué, conception à grande échelle, traitement de données en temps réel, stockage de données</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">Outils/Technologies: Django, HTML, CSS, Bootstrap, JavaScript</p>
        `,
      },
      {
        title: "Nov. 2021 – Jan. 2022",
        cardTitle: "Banitsmo, Bogotá, Colombie",
        cardSubtitle: "Développeur Full Stack",
        cardDetailedText: `
          <ul>
            <li>J'ai conçu et développé des layouts en Angular, HTML, JavaScript, CSS et Bootstrap</li>
            <li>J'ai développé et implémenté un "agent" autonome d'extraction de données et fonctionnalités d'application principale pour un produit financier</li>
            <li>J'ai optimisé le processus de traitement des plaintes de l'entreprise en créant et fournissant des solutions basées sur des applications hautement efficaces</li>
            <li>Modélisation de base de données dans DynamoDb et MySQL</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">Outils/Technologies: Angular, HTML, CSS, Bootstrap, JavaScript, NodeJS, AWS</p>
        `,
      },
      {
        title: "Déc. 2021 – Fév. 2022",
        cardTitle: "Vivienda 360, Bogotá, Colombie",
        cardSubtitle: "Freelancer et projet personnel",
        cardDetailedText: `
          <ul>
            <li>Analyse et définition du produit</li>
            <li>J'ai conçu et développé des layouts en React, HTML, JavaScript, CSS et Bootstrap</li>
            <li>J'ai conçu et créé une plateforme de gestion des connaissances sur un graphe de connaissances, utilisant une gamme de technologies, incluant Node.js, Typescript, React, chartJS</li>
            <li>J'ai implémenté l'extraction de données et fonctionnalités d'application principale pour un produit financier avec MercadoPago</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">Outils/Technologies: React, HTML, CSS, Bootstrap, JavaScript, NodeJS, MercadoPago, ContextAPI</p>
        `,
      },
      {
        title: "Jan. 2020 – Mars 2021",
        cardTitle: "Rapid Fast, Bogotá, Colombie",
        cardSubtitle: "Développeur Full Stack",
        cardDetailedText: `
          <ul>
            <li>J'ai créé une plateforme web et application mobile avec Flutter, React, Node, Firebase</li>
            <li>Déploiements dans Google Cloud Console</li>
            <li>Modélisation de base de données avec Firebase</li>
            <li>Création d'API de service backend</li>
            <li>Administration du backlog et gestion de l'équipe de développement</li>
            <li>J'ai développé des applications full-stack sur diverses plateformes utilisant les dernières technologies et frameworks adoptés par l'industrie</li>
            <li>J'ai joué un rôle clé dans le développement, l'amélioration et l'exploitation de logiciels basés sur le web</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">Outils/Technologies: React, Node, Next, Firebase, Flutter, Android, iOS, Google Cloud Platform</p>
        `,
      },
      {
        title: "Mai 2019 – Oct. 2019",
        cardTitle: "YoyisFood, Bogotá, Colombie",
        cardSubtitle: "Développeur Junior",
        cardDetailedText: `
          <ul>
            <li>J'ai conçu et développé des layouts en HTML, JavaScript, CSS et Bootstrap</li>
          </ul>
          <p class="text-amber-600 dark:text-purple-400 font-semibold">Outils/Technologies: HTML, CSS, Bootstrap, JavaScript, PHP, MySQL</p>
        `,
      },
    ]
  },
  projects: {
    title: "Mes Projets",
    items: [
      {
        title: "Upstask mern",
        description: "Projet créé avec stack mern, avec socket.io et react hooks, utilisant mongoDb"
      },
      {
        title: "Minenergia",
        description: "Projet créé avec wagtail, Django, html, Javascript, Bootstrap, postgreSQL et CSS"
      },
      {
        title: "Pultemsoft",
        description: "Projet créé avec react et bootstrap"
      },
      {
        title: "Banco Caja Social",
        description: "Projet créé avec Next.js, TailwindCSS, TypeScript, Redux Toolkit, MongoDB, NestJS"
      },
      {
        title: "Générateur de couleurs",
        description: "Projet créé avec React"
      },
      {
        title: "App Crypto",
        description: "Projet créé avec React"
      }
    ]
  }
};
