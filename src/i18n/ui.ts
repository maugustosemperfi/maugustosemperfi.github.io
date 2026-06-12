export type Locale = 'en' | 'pt';

const ui = {
  en: {
    'nav.home': 'Home',
    'nav.writing': 'Writing',
    'nav.craft': 'Craft',
    'nav.about': 'About',
    'nav.colophon': 'Colophon',
    'nav.til': 'TIL',
    'nav.search': 'Search',
    'nav.toggleTheme': 'Toggle theme',
    'nav.toggleThemeLight': 'Switch to light mode',
    'nav.toggleThemeDark': 'Switch to dark mode',
    'footer.tagline': 'Built with',
    '404.title': '404',
    '404.line': "This page doesn't exist — but the notes do.",
    '404.home': 'Home',
    '404.writing': 'Writing',
    'palette.title': 'Search',
    'palette.placeholder': 'Search pages and notes…',
    'palette.pages': 'Pages',
    'palette.actions': 'Actions',
    'palette.search': 'Search',
    'palette.noResults': 'No results found.',
    'palette.searchUnavailable': 'Search index not available in dev mode. Pages and actions still work.',
    'palette.toggleTheme': 'Toggle theme',
    'palette.copyEmail': 'Copy email',
    'palette.copied': 'Copied!',
    'palette.openGithub': 'Open GitHub',
    'palette.openX': 'Open X',
    'badge.seedling': 'rough, fresh thinking',
    'badge.budding': 'taking shape',
    'badge.evergreen': 'stable, kept current',
    'til.empty': 'Nothing here yet — the first TIL lands when it lands.',
    'blog.ptEmpty': 'Ainda nada por aqui — os posts em português estão a caminho.',
    'lang.switch': 'Language',
    'hero.eyebrow': 'Marcos Augusto / Brazil / Mobile engineer at Nubank',
    'hero.lede':
      'Flutter in production by day, web and TypeScript whenever I can, and a growing lab of agent skills, harnesses, and orchestration patterns.',
    'hero.readNotes': 'Read the notes',
    'hero.github': 'GitHub',
    'hero.email': 'Email',
    'hero.signal.current': 'Current',
    'hero.signal.currentValue': 'Nubank — mobile engineering, Flutter at scale',
    'hero.signal.always': 'Always',
    'hero.signal.alwaysValue': 'The web: UI craft, motion, interfaces that feel right',
    'hero.signal.exploring': 'Exploring',
    'hero.signal.exploringValue': 'Agent infrastructure and eval harnesses',
    'threads.eyebrow': 'What you get here',
    'threads.title': 'Three threads, one engineer.',
    'threads.mobile.eyebrow': 'Day work',
    'threads.mobile.title': 'Mobile foundations that other engineers build on.',
    'threads.mobile.copy':
      'At Nubank I work on the mobile platform: the design system, internationalization pipeline, and release tooling behind an app used by tens of millions of people.',
    'threads.web.eyebrow': 'First love, still home',
    'threads.web.title': 'The web is where I learned to care about interfaces.',
    'threads.web.copy':
      'Years of frontend before mobile, and it never left. I still build for the web, obsess over motion and clean UI, and treat every page as a chance to make something feel right.',
    'threads.agents.eyebrow': 'Current obsession',
    'threads.agents.title': 'Agent skills, harnesses, and orchestration for daily engineering.',
    'threads.agents.copy':
      'I am building practical agent infrastructure: reusable skills, evaluation harnesses, and workflows that make coding agents more dependable instead of just more flashy.',
    'projects.eyebrow': 'Selected work',
    'projects.title': 'Artifacts with a real problem behind them.',
    'projects.note':
      "Not a portfolio — just the things I've shipped that are live right now, plus the notebook where I write about the rest. Some source is private; the products speak for themselves.",
    'writing.eyebrow': 'Recent writing',
    'writing.title': 'The lab notebook.',
    'writing.empty': 'No posts yet. The first one is on its way.',
    'writing.readAll': 'Read all notes',
    'craft.eyebrow': 'Craft',
    'craft.title': 'Small interactions, taken seriously.',
    'craft.intro':
      'Studies in motion and UI feel — the kind of details I care about in real products. Dependency-free.',
    'craft.sourceClaim':
      'The code shown on this page is the exact source of the components running on it.',
    'craft.tabBehavior': 'Behavior',
    'craft.tabMarkup': 'Markup',
    'craft.tabStyles': 'Styles',
    'craft.codeTabsLabel': 'Code sections',
    'craft.copy': 'Copy',
    'craft.copied': 'Copied',
    'craft.showAll': 'Show all',
    'craft.collapse': 'Collapse',
    'craft.motionLabel': 'Motion',
    'til.eyebrow': 'TIL',
    'til.title': 'Today I learned.',
    'colophon.eyebrow': 'Colophon',
    'colophon.title': 'How this site is built.',
    'blog.title': 'Writing',
    'blog.authorLine':
      'Mobile engineer at Nubank. I write about mobile, the web, and agent infrastructure.',
    'blog.allNotes': '← All notes',
    'blog.lastTended': 'Last tended',
  },
  pt: {
    'nav.home': 'Início',
    'nav.writing': 'Textos',
    'nav.craft': 'Craft',
    'nav.about': 'Sobre',
    'nav.colophon': 'Colofão',
    'nav.til': 'TIL',
    'nav.search': 'Buscar',
    'nav.toggleTheme': 'Alternar tema',
    'nav.toggleThemeLight': 'Mudar para modo claro',
    'nav.toggleThemeDark': 'Mudar para modo escuro',
    'footer.tagline': 'Feito com',
    '404.title': '404',
    '404.line': 'Esta página não existe — mas os textos existem.',
    '404.home': 'Início',
    '404.writing': 'Textos',
    'palette.title': 'Buscar',
    'palette.placeholder': 'Buscar páginas e textos…',
    'palette.pages': 'Páginas',
    'palette.actions': 'Ações',
    'palette.search': 'Busca',
    'palette.noResults': 'Nenhum resultado encontrado.',
    'palette.searchUnavailable':
      'Índice de busca indisponível no modo dev. Páginas e ações ainda funcionam.',
    'palette.toggleTheme': 'Alternar tema',
    'palette.copyEmail': 'Copiar email',
    'palette.copied': 'Copiado!',
    'palette.openGithub': 'Abrir GitHub',
    'palette.openX': 'Abrir X',
    'badge.seedling': 'ideia crua, ainda fresca',
    'badge.budding': 'tomando forma',
    'badge.evergreen': 'estável, mantido atual',
    'til.empty': 'Nada aqui ainda — o primeiro TIL chega quando chegar.',
    'blog.ptEmpty': 'Ainda nada por aqui — os posts em português estão a caminho.',
    'lang.switch': 'Idioma',
    'hero.eyebrow': 'Marcos Augusto / Brasil / Engenheiro mobile no Nubank',
    'hero.lede':
      'Flutter em produção de dia, web e TypeScript sempre que posso, e um laboratório crescente de skills, harnesses e padrões de orquestração para agentes.',
    'hero.readNotes': 'Ler os textos',
    'hero.github': 'GitHub',
    'hero.email': 'Email',
    'hero.signal.current': 'Agora',
    'hero.signal.currentValue': 'Nubank — engenharia mobile, Flutter em escala',
    'hero.signal.always': 'Sempre',
    'hero.signal.alwaysValue': 'A web: craft de UI, motion, interfaces que fazem sentido',
    'hero.signal.exploring': 'Explorando',
    'hero.signal.exploringValue': 'Infraestrutura de agentes e harnesses de avaliação',
    'threads.eyebrow': 'O que você encontra aqui',
    'threads.title': 'Três fios, um engenheiro.',
    'threads.mobile.eyebrow': 'Trabalho do dia',
    'threads.mobile.title': 'Fundações mobile em que outros engenheiros constroem.',
    'threads.mobile.copy':
      'No Nubank trabalho na plataforma mobile: design system, pipeline de internacionalização e ferramentas de release por trás de um app usado por dezenas de milhões de pessoas.',
    'threads.web.eyebrow': 'Primeiro amor, ainda em casa',
    'threads.web.title': 'A web é onde aprendi a me importar com interfaces.',
    'threads.web.copy':
      'Anos de frontend antes do mobile, e nunca saiu. Ainda construo para a web, obceco por motion e UI limpa, e trato cada página como chance de fazer algo que se sinta certo.',
    'threads.agents.eyebrow': 'Obsessão atual',
    'threads.agents.title': 'Skills, harnesses e orquestração de agentes para engenharia do dia a dia.',
    'threads.agents.copy':
      'Estou construindo infraestrutura prática para agentes: skills reutilizáveis, harnesses de avaliação e workflows que tornam coding agents mais confiáveis em vez de só mais chamativos.',
    'projects.eyebrow': 'Trabalho selecionado',
    'projects.title': 'Artefatos com um problema real por trás.',
    'projects.note':
      'Não é portfólio — só o que está no ar agora, mais o caderno onde escrevo sobre o resto. Parte do código é privada; os produtos falam por si.',
    'writing.eyebrow': 'Textos recentes',
    'writing.title': 'O caderno de laboratório.',
    'writing.empty': 'Nenhum texto ainda. O primeiro está a caminho.',
    'writing.readAll': 'Ler todos os textos',
    'craft.eyebrow': 'Craft',
    'craft.title': 'Pequenas interações, levadas a sério.',
    'craft.intro':
      'Estudos em motion e sensação de UI — o tipo de detalhe que me importa em produtos reais. Sem dependências.',
    'craft.sourceClaim':
      'O código nesta página é o código-fonte exato dos componentes que rodam nela.',
    'craft.tabBehavior': 'Comportamento',
    'craft.tabMarkup': 'Marcação',
    'craft.tabStyles': 'Estilos',
    'craft.codeTabsLabel': 'Seções do código',
    'craft.copy': 'Copiar',
    'craft.copied': 'Copiado',
    'craft.showAll': 'Mostrar tudo',
    'craft.collapse': 'Recolher',
    'craft.motionLabel': 'Movimento',
    'til.eyebrow': 'TIL',
    'til.title': 'Hoje eu aprendi.',
    'colophon.eyebrow': 'Colofão',
    'colophon.title': 'Como este site é feito.',
    'blog.title': 'Textos',
    'blog.authorLine':
      'Engenheiro mobile no Nubank. Escrevo sobre mobile, web e infraestrutura de agentes.',
    'blog.allNotes': '← Todos os textos',
    'blog.lastTended': 'Última revisão',
  },
} as const;

export type UIKey = keyof typeof ui.en;

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui.en[key];
  };
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return first === 'pt' ? 'pt' : 'en';
}

export function localizedPath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  if (path === '/') return '/pt/';
  return `/pt${path}`;
}
