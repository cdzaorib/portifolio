import { stackGroups, studying } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Stack() {
  return (
    <Section id="stack" eyebrow="Stack" title="Ferramentas que uso">
      <Reveal className="mt-8" delay={60}>
        <dl className="divide-y divide-rule border-y border-rule">
          {stackGroups.map((group) => (
            <div
              key={group.group}
              className="grid gap-3 py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
            >
              <dt
                className={`font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] sm:pt-1.5 ${
                  group.featured ? 'text-ink' : 'text-ink-muted'
                }`}
              >
                {group.group}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      translate="no"
                      className={
                        group.featured
                          ? 'rounded-[6px] border border-ink bg-ink px-2.5 py-1 font-mono text-[0.8125rem] font-medium text-paper'
                          : 'rounded-[6px] border border-rule bg-paper px-2.5 py-1 font-mono text-[0.8125rem] text-ink'
                      }
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal className="mt-8" delay={120}>
        {/* A short row of labels, not prose — no reading measure to hold. */}
        <div>
          <h3 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-muted">
            Atualmente estudando
          </h3>
          {/* Separator trails each item rather than leading the next, so a
              wrapped line never opens with a stray dot. */}
          <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[0.9375rem] text-ink">
            {studying.map((item, index) => (
              <li key={item} className="flex items-center gap-2">
                {item}
                {index < studying.length - 1 ? (
                  <span aria-hidden="true" className="text-ink-muted">
                    ·
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
