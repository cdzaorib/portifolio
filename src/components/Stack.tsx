import { credentials, stackGroups } from '../data/profile'
import { CheckCheck } from './Icons'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Stack() {
  return (
    <Section id="stack" title="Com o que eu trabalho">
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
              {/* Type carries the hierarchy, not boxes: the languages row is
                  set large and dark, everything else recedes. */}
              <dd
                translate="no"
                className={
                  group.featured
                    ? 'font-mono text-[1.0625rem] font-medium leading-[1.6] tracking-[-0.01em] text-ink sm:text-[1.1875rem]'
                    : 'font-mono text-[0.875rem] leading-[1.8] text-ink-muted'
                }
              >
                {/* Name + separator welded, then a real space as the break
                    opportunity — otherwise the row is one unbreakable run. */}
                {group.items.map((item, index) => (
                  <span key={item}>
                    <span className="whitespace-nowrap">
                      {item}
                      {index < group.items.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className={`text-ink-muted ${group.featured ? 'pl-2.5' : 'pl-2'}`}
                        >
                          ·
                        </span>
                      ) : null}
                    </span>
                    {index < group.items.length - 1 ? ' ' : null}
                  </span>
                ))}
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
