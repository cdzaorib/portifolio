import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  /** Optional one-line framing under the section title. */
  lede?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, lede, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`border-t border-rule py-20 sm:py-24 lg:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 sm:px-8">
        <Reveal>
          <header className="max-w-[62ch]">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2
              id={`${id}-title`}
              className="mt-3 text-balance font-display text-[clamp(1.75rem,3vw,2.375rem)] font-semibold leading-[1.1] tracking-[-0.02em]"
            >
              {title}
            </h2>
            {lede ? <p className="mt-4 text-pretty text-ink-muted">{lede}</p> : null}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
