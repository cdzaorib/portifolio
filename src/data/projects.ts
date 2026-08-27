import { pending, type MaybeUrl } from './links'

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

export type Project = {
  id: string
  name: string
  description: string
  stack: string[]
  decision: Decision
  features?: string[]
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
  description:
    'Assistente financeiro via WhatsApp — registro e consulta de despesas por texto, áudio e imagem.',
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
    description:
      'App que substituiu o preenchimento manual em Excel do reembolso de passagens dos consultores da Tecnoarte — trecho a trecho, o que levava minutos, às vezes horas — por um fluxo web com banco de dados.',
    stack: ['Next.js 15', 'TypeScript', 'Supabase', 'Vercel'],
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
    id: 'sexta-feira',
    name: 'Sexta Feira',
    description:
      'Assistente pessoal de IA para desktop, inspirado no Jarvis do Iron Man.',
    stack: [
      'Tauri',
      'React 19',
      'TypeScript',
      'Deepgram (STT)',
      'Claude Haiku',
      'Edge-TTS',
      'WebSocket',
    ],
    decision: {
      label: 'Em construção',
      body: 'Projeto pessoal em desenvolvimento. Até aqui construí a arquitetura de voz e IA rodando localmente: captura de áudio, transcrição, resposta do modelo e síntese de fala conectadas por WebSocket.',
      tone: 'ongoing',
    },
    // No liveUrl and no repoUrl: this project has neither yet, so the card
    // renders no action buttons rather than dead ones.
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
