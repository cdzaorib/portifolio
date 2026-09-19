import { contactChannels, type ContactChannel } from '../data/profile'
import { ArrowUpRight, GitHub, LinkedIn, Mail, WhatsApp } from './Icons'
import { Reveal } from './Reveal'
import { Section } from './Section'

const icons = {
  mail: Mail,
  whatsapp: WhatsApp,
  linkedin: LinkedIn,
  github: GitHub,
} as const

/**
 * A list, not three bordered tiles. Each row is a full-width link with the
 * channel named on the left and the address set in mono on the right — the
 * page's label/value rhythm again, and one fewer box.
 */
function ChannelRow({ channel }: { channel: ContactChannel }) {
  const Icon = icons[channel.icon]
  const isExternal = channel.href.startsWith('http')

  return (
    <a
      href={channel.href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex min-h-14 flex-wrap items-center gap-x-4 gap-y-1 py-4 transition-colors duration-150 hover:text-signal"
    >
      <Icon className="h-[1.125rem] w-[1.125rem] shrink-0 text-ink-muted transition-colors duration-150 group-hover:text-signal" />

      <span className="w-[5.5rem] shrink-0 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-muted">
        {channel.label}
      </span>

      <span
        translate="no"
        className="min-w-0 flex-1 truncate font-mono text-[0.9375rem] text-ink transition-colors duration-150 group-hover:text-signal"
      >
        {channel.display}
      </span>

      {isExternal ? (
        <>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-colors duration-150 group-hover:text-signal" />
          <span className="sr-only">(abre em nova aba)</span>
        </>
      ) : null}
    </a>
  )
}

export function Contact() {
  return (
    <Section
      id="contato"
      title="Onde me achar"
      lede="Aberto a vagas de backend júnior e estágio, no Rio ou remoto."
    >
      <Reveal className="mt-8" delay={60}>
        <ul className="max-w-[46rem] divide-y divide-rule border-y border-rule">
          {contactChannels.map((channel) => (
            <li key={channel.id}>
              <ChannelRow channel={channel} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
