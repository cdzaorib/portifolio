export const profile = {
  name: 'Carlos Daniel Cabral Ribeiro',
  /** Split for the display setting — two lines, tight leading. */
  nameLines: ['Carlos Daniel', 'Cabral Ribeiro'] as const,
  role: 'Desenvolvedor Backend Júnior',
  tagline:
    'Construo o backend de aplicações reais: APIs, banco de dados e integração com IA — com decisões técnicas que se sustentam.',
}

/**
 * The datasheet strip under the hero: the four things a recruiter checks
 * first, answered in one line. Facts only — no metrics, no invented titles.
 */
export const statusFacts: readonly { label: string; value: string; confirmed?: boolean }[] = [
  { label: 'Base', value: 'Rio de Janeiro' },
  { label: 'Hoje', value: 'Tecnoarte · Consultor Técnico' },
  { label: 'Formação', value: 'ADS · Estácio · dez/2026' },
  { label: 'Disponível', value: 'Backend Júnior / Estágio', confirmed: true },
]

export const about: readonly string[] = [
  'Sou desenvolvedor backend júnior: trabalho com APIs REST, Node.js, Python e bancos relacionais. Na Tecnoarte dou suporte técnico aos sistemas Conclínica e Visual Asa — investigo ocorrências e escrevo consultas SQL para diagnosticar e validar dados.',
  'Fora do suporte, construo. Os projetos aqui integram LLMs a aplicações que rodam de verdade: um bot financeiro no WhatsApp que entende texto, áudio e imagem, e um assistente de desktop com RAG local, memória e roteamento entre modelos.',
  'CS50x de Harvard concluído, cursando Análise e Desenvolvimento de Sistemas na Estácio. Disponível para vagas de backend júnior e estágio, no Rio de Janeiro e remoto.',
]

export type Role = {
  id: string
  company: string
  title: string
  period: string
  /** Marks the role still running — gets the accent, like a live value. */
  current?: boolean
  bullets: readonly string[]
}

export const experience: readonly Role[] = [
  {
    id: 'tecnoarte',
    company: 'Tecnoarte',
    title: 'Consultor Técnico Júnior',
    period: '06/2026 — atual',
    current: true,
    bullets: [
      'Suporte técnico aos sistemas Conclínica e Visual Asa: investigo ocorrências, oriento usuários e rodo consultas SQL para diagnóstico e validação de dados.',
      'Por iniciativa própria, construí o Relatório de Passagens — app multiusuário com autenticação e geração de PDF — que substituiu um processo manual em planilhas e hoje é usado pela equipe de consultores.',
    ],
  },
  {
    id: 'riogaleao',
    company: 'RioGaleão · Aeroporto Tom Jobim',
    title: 'Jovem Aprendiz — Operações',
    period: '01/2024 — 04/2025',
    bullets: [
      'Apoio às operações de embarque e ao atendimento a passageiros, incluindo situações de contingência.',
    ],
  },
]

export const stackGroups: readonly {
  group: string
  items: readonly string[]
  /** The languages row leads and is drawn with more weight — the thing to read first. */
  featured?: boolean
}[] = [
  { group: 'Linguagens', items: ['JavaScript', 'Python', 'TypeScript', 'SQL', 'C'], featured: true },
  { group: 'Backend', items: ['Node.js', 'Express', 'Flask', 'APIs REST'] },
  { group: 'Dados', items: ['PostgreSQL', 'Supabase', 'SQLite', 'Firebase'] },
  {
    group: 'IA aplicada',
    items: ['LLMs', 'RAG', 'embeddings', 'busca vetorial', 'tool calling', 'Groq', 'Claude API', 'Ollama'],
  },
  { group: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS'] },
  {
    group: 'IA no fluxo',
    items: ['Claude Code', 'Codex', 'Kimi K3', 'GLM 5.3', 'DeepSeek V4 Pro'],
  },
  { group: 'Infra', items: ['Git', 'GitHub', 'Railway', 'Vercel'] },
]

/** Finished credentials, not aspirations — CS50x is done, not in progress. */
export const credentials: readonly { label: string; detail: string; done?: boolean }[] = [
  { label: 'CS50x — Harvard', detail: 'concluído · 2026', done: true },
  { label: 'Inglês B2 — EF SET', detail: 'certificado', done: true },
  { label: 'Análise e Desenvolvimento de Sistemas — Estácio', detail: 'conclusão dez/2026' },
]

export type ContactChannel = {
  id: string
  label: string
  /** What the reader sees — kept human-readable, not the raw href. */
  display: string
  href: string
  icon: 'mail' | 'whatsapp' | 'linkedin' | 'github'
}

export const contactChannels: readonly ContactChannel[] = [
  {
    id: 'email',
    label: 'Email',
    display: 'carlosdcribeiroti@gmail.com',
    href: 'mailto:carlosdcribeiroti@gmail.com',
    icon: 'mail',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    display: 'linkedin.com/in/carlos-ribeiro2',
    href: 'https://www.linkedin.com/in/carlos-ribeiro2',
    icon: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    display: 'github.com/cdzaorib',
    href: 'https://github.com/cdzaorib',
    icon: 'github',
  },
]

export const githubUrl = 'https://github.com/cdzaorib'
