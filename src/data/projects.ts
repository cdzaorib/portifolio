import { pending, type MaybeUrl } from './links'
import salvamoneyDashboard from '../assets/images/salvamoney-dashboard.webp'
import relatorioLanding from '../assets/images/relatorio-landing.webp'

/**
 * A real screenshot of the project, shown in a window frame. Intrinsic pixel
 * dimensions are carried so the frame reserves the aspect ratio (no layout
 * shift). Omitted on projects with nothing public to show yet.
 */
export type ProjectImage = {
  src: string
  alt: string
  width: number
  height: number
  /** Shown in the window chrome — a live URL, or a short label. */
  label?: string
  caption?: string
}

/**
 * The one engineering judgment call behind a project.
 *
 * Every project carries this slot. It is the recurring structural device of
 * the page: for someone evaluating a junior developer, the decision is worth
 * more than the feature list.
 */
export type Decision = {
  /** Slot heading — the framing changes when a project is still being built. */
  label: string
  body: string
  /**
   * The accent marks things that are settled. A project still being built
   * gets a neutral rail instead, so the palette never overstates the status.
   */
  tone: 'resolved' | 'ongoing'
}

/**
 * A number the project actually earned. Two shapes, because the facts come in
 * two shapes: a count that climbs to its value, and a before/after shift —
 * which is the page's own thesis (messy input, structured output) stated in
 * minutes.
 */
export type Metric =
  | { kind: 'count'; value: number; prefix?: string; suffix?: string; label: string }
  | { kind: 'shift'; from: string; to: string; label: string }

export type Project = {
  id: string
  name: string
  description: string
  stack: string[]
  decision: Decision
  features?: string[]
  metrics?: readonly Metric[]
  image?: ProjectImage
  /**
   * Where the work actually stands — the thing a recruiter wants to separate:
   * software other people depend on versus something built to learn.
   */
  status: 'em produção' | 'projeto pessoal' | 'em construção'
  liveUrl?: MaybeUrl
  repoUrl?: MaybeUrl
  /** Only SalvaMoney has one: the chat thread *is* its live demo. */
  whatsappUrl?: string
}

/**
 * The example that runs the input switcher on the featured card.
 *
 * Three heterogeneous inputs, one normalised record. Switching the input
 * never changes the shape of the output — that is the entire point, and it
 * is why the record fields are declared once, outside the input variants.
 */
export type InputModality = {
  id: 'texto' | 'audio' | 'imagem'
  label: string
  /** How the inbound message is drawn. */
  kind: 'text' | 'voice' | 'image'
  /** Message body for text; spoken words for voice; caption for image. */
  body: string
  /** Voice notes only. */
  duration?: string
}

export const salvaMoneyInputs: readonly InputModality[] = [
  {
    id: 'texto',
    label: 'texto',
    kind: 'text',
    body: 'gastei 45,90 no mercado hoje',
  },
  {
    id: 'audio',
    label: 'áudio',
    kind: 'voice',
    body: 'gastei quarenta e cinco e noventa no mercado hoje',
    duration: '0:04',
  },
  {
    id: 'imagem',
    label: 'imagem',
    kind: 'image',
    body: 'foto do comprovante do mercado',
  },
] as const

/** The normalised record. Identical for all three inputs, by design. */
export const salvaMoneyRecord: readonly { key: string; value: string }[] = [
  { key: 'valor', value: 'R$ 45,90' },
  { key: 'categoria', value: 'mercado' },
  { key: 'data', value: '12/03' },
  { key: 'tag', value: '#casa' },
] as const

export const featuredProject: Project = {
  id: 'salvamoney',
  name: 'SalvaMoney',
  status: 'em produção',
  description:
    'Assistente financeiro via WhatsApp: um LLM lê a mensagem — texto, áudio ou foto do comprovante — e devolve um lançamento estruturado, categorizado e gravado.',
  stack: [
    'Node.js',
    'Express',
    'Firebase Realtime DB + Admin SDK',
    'Evolution API',
    'Groq SDK',
    'Railway',
  ],
  features: [
    'categorização automática',
    'parcelamento',
    'despesas fixas',
    'busca por tags',
    'dashboard com heatmap de gastos',
  ],
  metrics: [
    { kind: 'count', value: 1000, suffix: '+', label: 'transações registradas' },
  ],
  image: {
    src: salvamoneyDashboard,
    alt: 'Painel do SalvaMoney: cartões de orçamento, gastos e saldo, formulário de novo gasto e lista de despesas do mês.',
    width: 1170,
    height: 612,
    label: 'salvamoney · painel',
    caption: 'Painel real do app. Os valores e descrições pessoais foram ocultados.',
  },
  decision: {
    label: 'Decisão técnica',
    body: 'Evoluí de Firebase Client SDK para Admin SDK para melhor segurança e controle de acesso.',
    tone: 'resolved',
  },
  // O dashboard roda no Railway atrás de DASHBOARD_TOKEN, mas há uma página
  // pública de apresentação no GitHub Pages — essa é a que linka como "ao vivo".
  liveUrl: 'https://cdzaorib.github.io/Salvamoney-site/',
  repoUrl: 'https://github.com/cdzaorib/salvamoney-bot',
  // Número do próprio bot do SalvaMoney (não o pessoal): abre a conversa que
  // serve de demonstração ao vivo.
  whatsappUrl: 'https://wa.me/5521998541441',
}

export const projects: readonly Project[] = [
  {
    id: 'relatorio-passagens',
    name: 'Relatório de Passagens',
    status: 'em produção',
    description:
      'App multiusuário que substituiu o reembolso de passagens feito em planilha na Tecnoarte. Autenticação, trechos salvos e PDF pronto no fim — usado hoje pela equipe de consultores.',
    stack: ['Next.js 15', 'TypeScript', 'Supabase/PostgreSQL', 'Vercel'],
    metrics: [
      {
        kind: 'shift',
        from: '20–40 min',
        to: '~3 min',
        label: 'para gerar o relatório do período',
      },
    ],
    image: {
      src: relatorioLanding,
      alt: 'Página inicial do Relatório de Passagens: título "Quatro trechos, dois cliques" e um trajeto de ida e volta com valores.',
      width: 1170,
      height: 900,
      label: 'relatorio-de-passagens.vercel.app',
    },
    decision: {
      label: 'Decisão técnica',
      body: 'Substituir uma planilha manual usada no dia a dia da empresa por um sistema web real, com banco de dados.',
      tone: 'resolved',
    },
    // Alias de produção, não a URL de preview de branch: esta é estável e não
    // expira quando a branch some.
    liveUrl: 'https://relatorio-de-passagens.vercel.app/',
    repoUrl: 'https://github.com/cdzaorib/relatorio-de-passagens',
  },
  {
    id: 'crononote',
    name: 'CronoNote',
    status: 'projeto pessoal',
    description:
      'Calendário de estudos em Flask: sessões anônimas por UUID, CRUD de registros e API JSON — sem cadastro para começar a usar.',
    stack: ['Python', 'Flask', 'SQLite', 'SQL', 'JavaScript'],
    decision: {
      label: 'Decisão técnica',
      body: 'Sessão anônima por UUID em vez de login: o app serve no primeiro acesso, sem barreira de cadastro. A validação roda no servidor e as queries são parametrizadas — o cliente não é fonte de verdade.',
      tone: 'resolved',
    },
    repoUrl: 'https://github.com/cdzaorib/Crononote',
  },
  {
    id: 'sexta-feira',
    name: 'Sexta Feira',
    status: 'em construção',
    description:
      'Assistente de IA para desktop que roda local. Roteia entre vários modelos com fallback automático, busca no próprio acervo com RAG, guarda memória entre sessões e executa ações no terminal e no navegador — sempre pedindo confirmação antes de agir.',
    stack: [
      'Tauri/Rust',
      'React',
      'TypeScript',
      'Ollama/Hermes',
      'SQLite + sqlite-vec',
      'fastembed',
      'Deepgram',
      'Edge-TTS',
      'GLM',
    ],
    features: [
      'roteamento multi-provider com fallback',
      'RAG local com busca vetorial',
      'memória persistente do agente',
      'tool/function calling',
      'entrada por voz e visão de tela',
      'Human-in-the-Loop nas ações',
    ],
    metrics: [
      { kind: 'count', value: 174, suffix: '+', label: 'testes automatizados' },
    ],
    decision: {
      label: 'Decisão técnica',
      body: 'Nenhum modelo é o melhor em tudo, e nenhum está sempre no ar. Por isso a arquitetura é multi-provider: o app conversa com uma interface única e o roteador escolhe o modelo, caindo para o próximo quando um falha. Trocar de provedor não encosta no resto do código.',
      tone: 'ongoing',
    },
    // Repositório privado e sem demo pública: o card não renderiza botão algum
    // em vez de um link morto.
  },
]

export type Cs50Exercise = {
  id: string
  name: string
  language: string
  summary: string
  concept: string
  repoUrl: MaybeUrl
}

export const cs50Exercises: readonly Cs50Exercise[] = [
  {
    id: 'filter',
    name: 'filter',
    language: 'C',
    summary: 'Filtros em imagens BMP (blur, grayscale).',
    concept: 'manipulação de pixels/matrizes',
    repoUrl: pending('[[PLACEHOLDER: link github do filter]]'),
  },
  {
    id: 'recover',
    name: 'recover',
    language: 'C',
    summary: 'Recuperação de JPEGs de memória bruta.',
    concept: 'file carving',
    repoUrl: pending('[[PLACEHOLDER: link github do recover]]'),
  },
  {
    id: 'runoff',
    name: 'runoff',
    language: 'C',
    summary: 'Algoritmo de votação Condorcet.',
    concept: 'lógica/estruturas de dados',
    repoUrl: pending('[[PLACEHOLDER: link github do runoff]]'),
  },
]
