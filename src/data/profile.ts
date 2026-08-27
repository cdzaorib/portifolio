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
  { label: 'Formação', value: 'Análise de Sistemas · dez/2026' },
  { label: 'Disponível', value: 'Júnior / Estágio', confirmed: true },
]

export const about: readonly string[] = [
  'Sou desenvolvedor autodidata com foco em backend — APIs, modelagem de dados e integração com IA. Trabalho com Node.js, Python e SQL, e construo do banco à interface quando o projeto pede. Resolvo problemas reais através de projetos próprios.',
  'Atualmente, estou completando Harvard CS50, estudando AWS Cloud Practitioner e praticando algoritmos com LeetCode.',
  'Disponível para oportunidades de desenvolvedor backend júnior e estágio, no Rio de Janeiro e remoto.',
]

export const stackGroups: readonly {
  group: string
  items: readonly string[]
  /** The languages row leads and is drawn with more weight — the thing to read first. */
  featured?: boolean
}[] = [
  { group: 'Linguagens', items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'C'], featured: true },
  { group: 'Backend', items: ['Node.js', 'Express'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS'] },
  { group: 'Dados', items: ['PostgreSQL', 'Firebase', 'SQLite'] },
  { group: 'IA / APIs', items: ['Groq (LLM)', 'Claude', 'Evolution API', 'REST'] },
  { group: 'Infra', items: ['Railway', 'Vercel', 'Git', 'GitHub'] },
]

export const studying: readonly string[] = [
  'Harvard CS50 (reta final)',
  'AWS Cloud Practitioner',
  'LeetCode diário (NeetCode)',
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
    display: 'cdzao@yahoo.com',
    href: 'mailto:cdzao@yahoo.com',
    icon: 'mail',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    display: '(21) 97442-4034',
    href: 'https://wa.me/5521974424034',
    icon: 'whatsapp',
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
