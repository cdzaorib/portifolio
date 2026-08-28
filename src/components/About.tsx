import { about, profile } from '../data/profile'
import portraitFormal from '../assets/images/portrait-formal.webp'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  const [lead, ...rest] = about

  return (
    <Section id="sobre" eyebrow="Sobre" title="Sobre mim">
      <div className="mt-8 grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,58ch)_auto] lg:items-start lg:gap-14">
        <Reveal delay={60}>
          <div>
            <p className="text-[1.0625rem] leading-[1.65] sm:text-[1.1875rem]">{lead}</p>
            {rest.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-ink-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <figure className="lg:pt-1">
            <img
              src={portraitFormal}
              alt={`Retrato de ${profile.name} em traje social`}
              width={525}
              height={645}
              loading="lazy"
              decoding="async"
              className="w-full max-w-[240px] rounded-2xl border border-rule object-cover sm:max-w-[264px]"
            />
          </figure>
        </Reveal>
      </div>
    </Section>
  )
}
