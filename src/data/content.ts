export type Locale = "pt" | "en";

export const locales: Locale[] = ["pt", "en"];

export const localeLabels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
};

export const contactInfo = {
  email: "lucas.dasilvafaria@hotmail.com",
  github: "github.com/lucasfariarj",
  linkedin: "linkedin.com/in/lucas-faria-47673b18b",
};

interface NavItem {
  label: string;
  href: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
}

interface ProjectItem {
  category: string;
  title: string;
  description: string;
  stack: string[];
  featured: boolean;
  mockup: "analytics" | "ecommerce" | "ai";
}

interface TechGroup {
  category: string;
  items: string[];
}

interface LocaleContent {
  nav: NavItem[];
  header: {
    hireMe: string;
    openMenu: string;
    languageLabel: string;
  };
  hero: {
    greeting: string;
    roles: string[];
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: StatItem[];
  about: {
    eyebrow: string;
    heading: string;
    headingHighlight: string;
    paragraphs: string[];
    meta: { label: string; value: string }[];
    statusEyebrow: string;
    status: string;
    downloadCv: string;
  };
  experience: {
    eyebrow: string;
    heading: string;
    items: ExperienceItem[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    description: string;
    featuredLabel: string;
    githubLabel: string;
    demoLabel: string;
    items: ProjectItem[];
  };
  techStack: {
    eyebrow: string;
    heading: string;
    groups: TechGroup[];
    alsoWorkedWithLabel: string;
    alsoWorkedWith: string[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Locale, LocaleContent> = {
  pt: {
    nav: [
      { label: "Sobre", href: "#sobre" },
      { label: "Experiência", href: "#experiencia" },
      // { label: "Projetos", href: "#projetos" },
      { label: "Tecnologias", href: "#tecnologias" },
      { label: "Contato", href: "#contato" },
    ],
    header: {
      hireMe: "Contrate-me",
      openMenu: "Abrir menu",
      languageLabel: "Idioma",
    },
    hero: {
      greeting: "Olá, me chamo",
      roles: [
        "Full Stack Developer",
        "React & Next.js",
        "TypeScript",
        "PHP & Laravel",
        "PostgreSQL & MySQL",
      ],
      description:
        "Focado em transformar problemas reais em aplicações web funcionais, conectando interfaces, back-end, APIs e dados em soluções bem estruturadas e fáceis de evoluir.",
      ctaPrimary: "Ver projetos →",
      ctaSecondary: "Entre em contato",
    },
    stats: [
      { value: "5+", label: "Anos de experiência" },
      { value: "10+", label: "Tecnologias utilizadas" },
      { value: "3+", label: "Stacks principais" },
    ],
    about: {
      eyebrow: "Sobre mim",
      heading: "Construindo aplicações web",
      headingHighlight: "de ponta a ponta",
      paragraphs: [
        "Sou desenvolvedor Full Stack com 5 anos de experiência no desenvolvimento e manutenção de aplicações web. Comecei minha trajetória trabalhando com PHP e jQuery e, hoje, atuo principalmente com Next.js, React, TypeScript e MySQL.",
        "Gosto de participar de todo o processo de desenvolvimento, desde a construção das interfaces até regras de negócio, APIs e banco de dados, sempre buscando soluções simples, bem estruturadas e fáceis de manter.",
      ],
      meta: [
        { label: "Localização", value: "Cabo Frio, RJ - Brasil (remoto ok)" },
        { label: "Graduação", value: "Sistemas de Informação - Unesa" },
        { label: "Inglês", value: "B1" },
      ],
      statusEyebrow: "Status",
      status: "Disponível para projetos",
      downloadCv: "→ Baixar currículo",
    },
    experience: {
      eyebrow: "Carreira",
      heading: "Experiência Profissional",
      items: [
        {
          role: "Desenvolvedor Web Full Stack",
          company: "Brave.ag",
          period: "2022 - Presente",
          description:
            "Atuação no desenvolvimento e evolução de aplicações para uma plataforma internacional de transporte e delivery, trabalhando em diferentes frentes do produto. Desenvolvi páginas e painéis administrativos em Next.js/TypeScript, componentes React para controle de permissões e filtros dinâmicos, além de funcionalidades de gerenciamento de arquivos integradas ao S3/MinIO. Também atuo na manutenção de aplicações com Prisma, investigando e corrigindo problemas relacionados a schema, migrations e banco de dados.",
          stack: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "MySQL"],
        },
        {
          role: "Desenvolvedor Web Full Stack - Bolsista de Pesquisa",
          company: "COPPE/UFRJ",
          period: "06/2025 - 06/2026",
          description:
            "Desenvolvimento de aplicações web voltadas à pesquisa e visualização de dados. Trabalhei em um sistema de monitoramento epidemiológico com React e Chart.js e na integração de uma ferramenta para visualização de logs de poços em Angular. Implementei recursos interativos como customização de cores e preenchimentos, menus de contexto e importação/exportação de templates.",
          stack: ["React", "Angular", "Chart.js", "REST API"],
        },
        {
          role: "Desenvolvedor Web Full Stack",
          company: "Instituto de Desenvolvimento de Arraial do Cabo",
          period: "10/2021 - 02/2022",
          description:
            "Responsável pela manutenção e evolução de sites institucionais da Prefeitura de Arraial do Cabo e de outros órgãos públicos, atuando na correção de problemas, manutenção de aplicações existentes e integração com serviços externos por meio de APIs.",
          stack: ["Laravel", "PHP", "JavaScript", "REST API"],
        },
        {
          role: "Desenvolvedor Freelancer",
          company: "lf.dev",
          period: "06/2021 - 02/2022",
          description:
            "Desenvolvimento e otimização de sites voltados para vendas, com foco em implementação web, performance, SEO e gerenciamento de conteúdo.",
          stack: ["PHP", "JavaScript", "Wordpress", "SEO"],
        },
      ],
    },
    projects: {
      eyebrow: "Portfólio",
      heading: "Projetos em Destaque",
      description: "Seleção dos projetos mais relevantes — do conceito ao deploy.",
      featuredLabel: "Destaque",
      githubLabel: "GitHub",
      demoLabel: "Demo ↗",
      items: [
        {
          category: "SaaS Analytics Platform",
          title: "NexusFlow",
          description:
            "Plataforma SaaS de analytics em tempo real com dashboards customizáveis, alertas inteligentes e integração com mais de 40 fontes de dados. Processamento de 2M+ eventos/dia.",
          stack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
          featured: true,
          mockup: "analytics",
        },
        {
          category: "E-commerce Full Stack",
          title: "ShopWave",
          description:
            "Plataforma de e-commerce moderna com carrinho em tempo real, pagamentos via Stripe, painel admin, gestão de estoque e notificações por email/SMS.",
          stack: ["Next.js", "Prisma", "Stripe", "Tailwind", "AWS S3"],
          featured: true,
          mockup: "ecommerce",
        },
        {
          category: "Assistente de Código com IA",
          title: "DevMind AI",
          description:
            "Ferramenta de produtividade para devs com sugestão de código via GPT-4, revisão automática de PRs, geração de testes e documentação assistida.",
          stack: ["Python", "FastAPI", "OpenAI", "React", "WebSocket"],
          featured: true,
          mockup: "ai",
        },
      ],
    },
    techStack: {
      eyebrow: "Stack",
      heading: "Tecnologias",
      groups: [
        {
          category: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular 2+"],
        },
        {
          category: "Backend",
          items: ["Node.js", "Laravel", "REST APIs", "PHP", "WebSockets"],
        },
        {
          category: "Database",
          items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "UML"],
        },
        {
          category: "DevOps & Cloud",
          items: ["Docker", "AWS"],
        },
      ],
      alsoWorkedWithLabel: "Também trabalhei com",
      alsoWorkedWith: ["Go", ".Net"],
    },
    contact: {
      eyebrow: "Contato",
      heading: "Meus Contatos",
      description:
        "Estou disponível para novos projetos e oportunidades. Me chame por qualquer um dos canais abaixo.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: [
      { label: "About", href: "#sobre" },
      { label: "Experience", href: "#experiencia" },
      // { label: "Projects", href: "#projetos" },
      { label: "Tech Stack", href: "#tecnologias" },
      { label: "Contact", href: "#contato" },
    ],
    header: {
      hireMe: "Hire me",
      openMenu: "Open menu",
      languageLabel: "Language",
    },
    hero: {
      greeting: "Hi, I'm",
      roles: [
        "Full Stack Developer",
        "React & Next.js",
        "TypeScript",
        "PHP & Laravel",
        "PostgreSQL & MySQL",
      ],
      description:
        "Focused on turning real problems into functional web applications, connecting interfaces, back-end, APIs, and data into well-structured solutions that are easy to evolve.",
      ctaPrimary: "View projects →",
      ctaSecondary: "Get in touch",
    },
    stats: [
      { value: "5+", label: "Years of experience" },
      { value: "10+", label: "Technologies used" },
      { value: "3+", label: "Core stacks" },
    ],
    about: {
      eyebrow: "About me",
      heading: "Building web applications",
      headingHighlight: "end to end",
      paragraphs: [
        "I'm a Full Stack developer with 5 years of experience building and maintaining web applications. I started out working with PHP and jQuery, and today I work mainly with Next.js, React, TypeScript, and MySQL.",
        "I enjoy being involved in the entire development process, from building interfaces to business rules, APIs, and databases, always aiming for solutions that are simple, well-structured, and easy to maintain.",
      ],
      meta: [
        { label: "Location", value: "Cabo Frio, RJ - Brazil (remote ok)" },
        { label: "Degree", value: "Information Systems - Unesa" },
        { label: "English", value: "B1" },
      ],
      statusEyebrow: "Status",
      status: "Available for projects",
      downloadCv: "→ Download resume",
    },
    experience: {
      eyebrow: "Career",
      heading: "Professional Experience",
      items: [
        {
          role: "Full Stack Web Developer",
          company: "Brave.ag",
          period: "2022 - Present",
          description:
            "Working on the development and evolution of applications for an international transportation and delivery platform, contributing across different areas of the product. I built pages and admin dashboards in Next.js/TypeScript, React components for permission control and dynamic filters, plus file management features integrated with S3/MinIO. I also maintain applications built with Prisma, investigating and fixing issues related to schema, migrations, and the database.",
          stack: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "MySQL"],
        },
        {
          role: "Full Stack Web Developer — Research Fellow",
          company: "COPPE/UFRJ",
          period: "06/2025 - 06/2026",
          description:
            "Development of web applications focused on research and data visualization. I worked on an epidemiological monitoring system using React and Chart.js, and on integrating a tool for well-log visualization in Angular. I implemented interactive features such as color and fill customization, context menus, and template import/export.",
          stack: ["React", "Angular", "Chart.js", "REST API"],
        },
        {
          role: "Full Stack Web Developer",
          company: "Instituto de Desenvolvimento de Arraial do Cabo",
          period: "10/2021 - 02/2022",
          description:
            "Responsible for maintaining and evolving institutional websites for the Arraial do Cabo city government and other public agencies, fixing issues, maintaining existing applications, and integrating external services through APIs.",
          stack: ["Laravel", "PHP", "JavaScript", "REST API"],
        },
        {
          role: "Freelance Developer",
          company: "lf.dev",
          period: "06/2021 - 02/2022",
          description:
            "Development and optimization of sales-oriented websites, focused on web implementation, performance, SEO, and content management.",
          stack: ["PHP", "JavaScript", "Wordpress", "SEO"],
        },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      heading: "Featured Projects",
      description: "A selection of the most relevant projects — from concept to deploy.",
      featuredLabel: "Featured",
      githubLabel: "GitHub",
      demoLabel: "Demo ↗",
      items: [
        {
          category: "SaaS Analytics Platform",
          title: "NexusFlow",
          description:
            "Real-time SaaS analytics platform with customizable dashboards, smart alerts, and integration with 40+ data sources. Processing 2M+ events/day.",
          stack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
          featured: true,
          mockup: "analytics",
        },
        {
          category: "E-commerce Full Stack",
          title: "ShopWave",
          description:
            "Modern e-commerce platform with real-time cart, Stripe payments, admin dashboard, inventory management, and email/SMS notifications.",
          stack: ["Next.js", "Prisma", "Stripe", "Tailwind", "AWS S3"],
          featured: true,
          mockup: "ecommerce",
        },
        {
          category: "AI Code Assistant",
          title: "DevMind AI",
          description:
            "Productivity tool for developers with GPT-4 code suggestions, automatic PR reviews, test generation, and assisted documentation.",
          stack: ["Python", "FastAPI", "OpenAI", "React", "WebSocket"],
          featured: true,
          mockup: "ai",
        },
      ],
    },
    techStack: {
      eyebrow: "Stack",
      heading: "Technologies",
      groups: [
        {
          category: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular 2+"],
        },
        {
          category: "Backend",
          items: ["Node.js", "Laravel", "REST APIs", "PHP", "WebSockets"],
        },
        {
          category: "Database",
          items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "UML"],
        },
        {
          category: "DevOps & Cloud",
          items: ["Docker", "AWS"],
        },
      ],
      alsoWorkedWithLabel: "Also worked with",
      alsoWorkedWith: ["Go", ".Net"],
    },
    contact: {
      eyebrow: "Contact",
      heading: "My Contacts",
      description:
        "I'm available for new projects and opportunities. Reach out through any of the channels below.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};
