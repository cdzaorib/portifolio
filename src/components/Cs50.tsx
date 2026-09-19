import { cs50Exercises } from '../data/projects'
import { isUrl } from '../data/links'
import { ActionLink } from './ActionLink'
import { Reveal } from './Reveal'
import { Section } from './Section'

/**
 * Deliberately the quietest section on the page: evidence of fundamentals,
 * not a headline. Rows in a table rather than three bordered mini-cards —
 * the exercises are a list of the same kind of thing, and a list is what
 * that is.
 */
export function Cs50() {
  return (
    <Section
      id="cs50"
      title="Fundamentos"
      lede="Exercícios em C do CS50x de Harvard, concluído em 2026."
    >
      <Reveal className="mt-8" delay={60}>
        <ul className="divide-y divide-rule border-y border-rule">
          {cs50Exercises.map((exercise) => (
            <li
              key={exercise.id}
              className="grid gap-2 py-5 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
            >
              <p className="flex items-baseline gap-2.5">
                <span translate="no" className="font-mono text-[0.9375rem] font-medium text-ink">
                  {exercise.name}
                </span>
                <span
                  translate="no"
                  className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-muted"
                >
                  {exercise.language}
                </span>
              </p>

              <p className="max-w-[60ch] text-[0.9375rem] leading-[1.55] text-ink-muted">
                {exercise.summary}
                <span aria-hidden="true" className="px-1.5 text-ink-muted">
                  ·
                </span>
                <span translate="no" className="font-mono text-[0.8125rem]">
                  {exercise.concept}
                </span>
              </p>

              {isUrl(exercise.repoUrl) ? (
                <ActionLink href={exercise.repoUrl} variant="quiet" external className="px-0">
                  Código
                </ActionLink>
              ) : null}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
