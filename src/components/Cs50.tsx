import { cs50Exercises } from '../data/projects'
import { isUrl } from '../data/links'
import { ActionLink } from './ActionLink'
import { Reveal } from './Reveal'
import { Section } from './Section'

/**
 * Deliberately the quietest section on the page: evidence of fundamentals,
 * not a headline. Smaller type, hairline boxes, no accent.
 */
export function Cs50() {
  return (
    <Section
      id="cs50"
      eyebrow="CS50"
      title="Fundamentos"
      lede="Exercícios do Harvard CS50, escritos em C."
    >
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cs50Exercises.map((exercise, index) => (
          <li key={exercise.id}>
            <Reveal delay={index * 70} className="h-full">
              <article
                aria-labelledby={`${exercise.id}-title`}
                className="flex h-full flex-col rounded-xl border border-rule p-5 transition-colors duration-150 hover:border-ink/30"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3
                    id={`${exercise.id}-title`}
                    translate="no"
                    className="font-mono text-[0.9375rem] font-medium text-ink"
                  >
                    {exercise.name}
                  </h3>
                  <span className="rounded-[5px] border border-rule px-1.5 py-0.5 font-mono text-[0.6875rem] text-ink-muted">
                    {exercise.language}
                  </span>
                </div>

                <p className="mt-3 text-[0.9375rem] leading-[1.55] text-ink-muted">
                  {exercise.summary}
                </p>

                <p className="mt-3 font-mono text-[0.75rem] leading-snug text-ink-muted">
                  {exercise.concept}
                </p>

                {isUrl(exercise.repoUrl) ? (
                  <div className="mt-4">
                    <ActionLink href={exercise.repoUrl} variant="quiet" external className="px-0">
                      Código
                    </ActionLink>
                  </div>
                ) : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
