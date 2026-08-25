import { statusFacts } from '../data/profile'
import { CheckCheck } from './Icons'

/**
 * The datasheet strip: the four things a recruiter checks first, answered in
 * one line of real facts. The read-receipt mark lands on the availability
 * cell — the accent means "confirmed", so it belongs on the one fact the
 * reader most needs confirmed.
 */
export function StatusStrip() {
  return (
    <div className="edge-safe border-y border-rule bg-paper-sunk/60">
      <dl className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-y-5 px-6 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.2fr)_minmax(0,1.2fr)_minmax(0,0.88fr)] lg:gap-0 lg:py-0">
        {statusFacts.map((fact) => (
          <div
            key={fact.label}
            className="lg:border-l lg:border-rule lg:px-6 lg:py-6 lg:first:border-l-0 lg:first:pl-0"
          >
            <dt className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-muted">
              {fact.label}
            </dt>
            <dd className="mt-1.5 flex items-center gap-2 font-mono text-[0.8125rem] text-ink">
              {fact.confirmed ? (
                <CheckCheck className="h-3.5 w-5 shrink-0 text-signal" />
              ) : null}
              <span>{fact.value}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
