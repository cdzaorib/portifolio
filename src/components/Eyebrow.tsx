import type { ReactNode } from 'react'

/**
 * Small mono label. Mono because these read as field names in a datasheet —
 * the page's rule is that anything a machine would write or read is set in
 * mono, and prose never is.
 */
export const eyebrowClass =
  'font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-muted'

export function Eyebrow({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <p className={`${eyebrowClass} ${className}`}>{children}</p>
}
