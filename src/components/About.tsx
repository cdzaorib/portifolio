import { about } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  const [lead, ...rest] = about

  return (
    <Section id="sobre" eyebrow="Sobre" title="Sobre mim">
      <Reveal className="mt-8" delay={60}>
        <div className="max-w-[64ch]">
          <p className="text-[1.0625rem] leading-[1.65] sm:text-[1.1875rem]">{lead}</p>
          {rest.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
