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

/** Every channel carries a visible text label, so no control is icon-only. */
function ChannelCard({ channel }: { channel: ContactChannel }) {
  const Icon = icons[channel.icon]
  const isExternal = channel.href.startsWith('http')

  return (
    <a
      href={channel.href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex min-h-11 items-center gap-4 rounded-xl border border-rule p-5 transition-colors duration-150 hover:border-signal"
    >
      <Icon className="h-5 w-5 shrink-0 text-ink-muted transition-colors duration-150 group-hover:text-signal" />

      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-muted">
          {channel.label}
        </span>
        <span className="mt-1 block truncate font-mono text-[0.875rem] text-ink transition-colors duration-150 group-hover:text-signal">
          {channel.display}
        </span>
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
    <Section id="contato" eyebrow="Contato" title="Vamos conversar">
      <Reveal className="mt-8" delay={60}>
        {/* Grid items default to min-width:auto, which lets the nowrap
            address inside push the card wider than the viewport. */}
        <ul className="grid gap-4 sm:grid-cols-2">
          {contactChannels.map((channel) => (
            <li key={channel.id} className="min-w-0">
              <ChannelCard channel={channel} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
