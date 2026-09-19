import { credentials, stackGroups } from '../data/profile'
import { CheckCheck } from './Icons'
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

      <Reveal className="mt-10" delay={120}>
        <div>
          <h3 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-muted">
            Formação e certificações
          </h3>

          {/* The double check marks what is finished — the same mark the
              status strip uses for a confirmed fact. */}
          <ul className="mt-4 space-y-3">
            {credentials.map((credential) => (
              <li
                key={credential.label}
                className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
              >
                {credential.done ? (
                  <CheckCheck className="h-3 w-4 shrink-0 translate-y-px text-signal" />
                ) : null}
                <span className="text-[0.9375rem] text-ink">{credential.label}</span>
                <span translate="no" className="font-mono text-[0.75rem] text-ink-muted">
                  {credential.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
