export const profile = {
  name: 'Carlos Daniel Cabral Ribeiro',
  /** Split for the display setting — two lines, tight leading. */
  nameLines: ['Carlos Daniel', 'Cabral Ribeiro'] as const,
  role: 'Desenvolvedor Full Stack Júnior',
  tagline:
    'Construo aplicações web funcionais, bem estruturadas e com boas decisões técnicas.',
}

/**
 * The datasheet strip under the hero: the four things a recruiter checks
 * first, answered in one line. Facts only — no metrics, no invented titles.
 */
export const statusFacts: readonly { label: string; value: string; confirmed?: boolean }[] = [
  { label: 'Base', value: 'Rio de Janeiro' },
  { label: 'Hoje', value: 'Conclínica · Técnico consultor' },
  { label: 'Formação', value: 'Análise de Sistemas · dez/2026' },
  { label: 'Disponível', value: 'Júnior / Estágio', confirmed: true },
]

export const about: readonly string[] = [
  'Sou desenvolvedor autodidata focado em construir aplicações web funcionais e bem estruturadas. Trabalho com React, Node.js, Firebase e integração com APIs externas. Estou sempre explorando novas tecnologias e resolvendo problemas reais através de projetos próprios.',
  'Atualmente, estou completando Harvard CS50, estudando AWS Cloud Practitioner e praticando algoritmos com LeetCode.',
  'Disponível para oportunidades de desenvolvedor júnior e estágios em Rio de Janeiro e remoto.',
]

export const stackGroups: readonly { group: string; items: readonly string[] }[] = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Python'] },
  { group: 'Database', items: ['Firebase Realtime DB', 'SQLite'] },
  { group: 'Infra', items: ['Railway', 'Git', 'GitHub', 'Vercel'] },
  { group: 'APIs/IA', items: ['Groq', 'Evolution API', 'REST APIs'] },
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
