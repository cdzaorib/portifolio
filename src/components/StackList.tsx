import { eyebrowClass } from './Eyebrow'

/**
 * A stack, written the way an engineer writes one: a mono line, separated by
 * middots. It used to be a row of bordered pills — but a pill gives every
 * name the same weight and adds a box per word, and the page already has
 * enough boxes. The separator trails its item so a wrapped line never opens
 * with a stray dot.
 */
export function StackList({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <div>
      <dt className={eyebrowClass}>{label}</dt>
      <dd
        translate="no"
        className="mt-2 font-mono text-[0.8125rem] leading-[1.75] text-ink"
      >
        {/* The name and its trailing separator stay welded together so a
            wrapped line never opens with a stray dot; the space that follows
            is the only break opportunity, and without it the whole line is
            one unbreakable run that overflows the viewport. */}
        {items.map((item, index) => (
          <span key={item}>
            <span className="whitespace-nowrap">
              {item}
              {index < items.length - 1 ? (
                <span aria-hidden="true" className="pl-2 text-ink-muted">
                  ·
                </span>
              ) : null}
            </span>
            {index < items.length - 1 ? ' ' : null}
          </span>
        ))}
      </dd>
    </div>
  )
}
