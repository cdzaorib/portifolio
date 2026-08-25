import type { ReactNode } from 'react'
import { ArrowUpRight } from './Icons'

type ActionLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'quiet'
  /** Opens in a new tab and announces that it does. */
  external?: boolean
  className?: string
}

const variants = {
  primary:
    'bg-ink text-paper border border-ink hover:bg-signal hover:border-signal',
  secondary:
    'bg-transparent text-ink border border-ink/25 hover:border-signal hover:text-signal',
  quiet:
    'bg-transparent text-ink-muted border border-transparent hover:text-signal',
} as const

/**
 * Navigation, so it is an anchor — every one of these goes somewhere, whether
 * that is another document or another part of this one.
 */
export function ActionLink({
  href,
  children,
  variant = 'secondary',
  external = false,
  className = '',
}: ActionLinkProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a
      href={href}
      {...externalProps}
      className={`inline-flex min-h-11 items-center gap-2 rounded-[10px] px-4 py-2.5 font-mono text-[0.8125rem] font-medium transition-colors duration-150 ${variants[variant]} ${className}`}
    >
      {children}
      {external ? (
        <>
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
          <span className="sr-only">(abre em nova aba)</span>
        </>
      ) : null}
    </a>
  )
}
