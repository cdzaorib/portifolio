import type { Decision } from '../data/projects'
import { eyebrowClass } from './Eyebrow'

/**
 * The recurring structural slot: the one engineering judgment call behind a
 * project. It carries the accent rail only when the call is actually settled.
 */
export function DecisionBlock({ decision }: { decision: Decision }) {
  const rail =
    decision.tone === 'resolved' ? 'border-l-signal' : 'border-l-ink-muted/40'

  // No fill, no rounded box: an annotation in the margin of a document, not a
  // callout card. The rail alone carries whether the call is settled.
  return (
    <div className={`border-l-2 pl-4 ${rail}`}>
      <h4 className={eyebrowClass}>{decision.label}</h4>
      <p className="mt-2 text-[0.9375rem] leading-[1.6] text-ink">{decision.body}</p>
    </div>
  )
}
