/**
 * Stack names are set in mono: they are strings a machine reads, not prose.
 */
export function StackList({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <div>
      <dt className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-muted">
        {label}
      </dt>
      <dd className="mt-2.5">
        <ul className="flex flex-wrap gap-1.5">
          {items.map((item) => (
            <li
              key={item}
              translate="no"
              className="rounded-[6px] border border-rule bg-paper px-2.5 py-1 font-mono text-[0.75rem] text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  )
}
