import type { Decision } from '../data/projects'
import { eyebrowClass } from './Eyebrow'

/**
 * The recurring structural slot: the one engineering judgment call behind a
 * project. It carries the accent rail only when the call is actually settled.
 */
export function DecisionBlock({ decision }: { decision: Decision }) {
  const rail =
    decision.tone === 'resolved' ? 'border-l-signal' : 'border-l-ink-muted/40'

  return (
    <div className={`rounded-r-[10px] border-l-2 bg-paper-sunk/70 px-4 py-3.5 ${rail}`}>
      <h4 className={eyebrowClass}>{decision.label}</h4>
      <p className="mt-2 text-[0.9375rem] leading-[1.6] text-ink">{decision.body}</p>
    </div>
  )
}
