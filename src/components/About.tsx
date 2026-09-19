import { about, experience, profile } from '../data/profile'
import portraitFormal from '../assets/images/portrait-formal.webp'
import { eyebrowClass } from './Eyebrow'
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

      {/* Same row rhythm as the stack datasheet: a label column, then the
          content. The running role carries the accent, like any live value. */}
      <Reveal className="mt-14" delay={80}>
        <h3 className={eyebrowClass}>Experiência</h3>

        <dl className="mt-5 divide-y divide-rule border-y border-rule">
          {experience.map((role) => (
            <div
              key={role.id}
              className="grid gap-3 py-6 sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:gap-8"
            >
              <dt
                translate="no"
                className={`font-mono text-[0.8125rem] sm:pt-1 ${
                  role.current ? 'text-signal' : 'text-ink-muted'
                }`}
              >
                {role.period}
              </dt>

              <dd className="max-w-[68ch]">
                <p className="font-display text-[1.125rem] font-semibold tracking-[-0.015em]">
                  {role.company}
                </p>
                <p className="mt-1 font-mono text-[0.8125rem] text-ink-muted">{role.title}</p>

                <div className="mt-3.5 space-y-2.5">
                  {role.bullets.map((bullet) => (
                    <p key={bullet} className="text-pretty text-[0.9375rem] leading-[1.6] text-ink-muted">
                      {bullet}
                    </p>
                  ))}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}
