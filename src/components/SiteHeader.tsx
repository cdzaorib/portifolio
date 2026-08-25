import { useEffect, useState } from 'react'

const navItems = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#stack', label: 'Stack' },
  { href: '#contato', label: 'Contato' },
]

/**
 * Marks the section currently under the reader.
 *
 * The observer band is a thin strip across the middle of the viewport, so
 * usually one section sits in it — but zero do at the very top of the page,
 * and two can during a fast scroll. Tracking the whole set and taking the
 * topmost keeps the marker off the hero and stops it flickering between
 * neighbours, which a plain "last entry wins" reducer would do.
 */
function useCurrentSection() {
  const [current, setCurrent] = useState('')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((node): node is HTMLElement => node !== null)

    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return

    const inBand = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target.id)
          else inBand.delete(entry.target.id)
        }

        const topmost = sections.find((section) => inBand.has(section.id))
        setCurrent(topmost ? `#${topmost.id}` : '')
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return current
}

export function SiteHeader() {
  const current = useCurrentSection()

  return (
    <header className="edge-safe sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-3 px-6 py-3.5 max-[379px]:justify-end sm:px-8">
        {/* Below ~380px the four nav targets need the full width, and the
            name is already the h1 directly underneath. */}
        <a
          href="#topo"
          className="hidden shrink-0 whitespace-nowrap font-display text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink transition-colors duration-150 hover:text-signal min-[380px]:inline-block"
        >
          Carlos Ribeiro
        </a>

        <nav aria-label="Seções da página">
          <ul className="flex shrink-0 items-center gap-0.5 sm:gap-2">
            {navItems.map((item) => {
              const isCurrent = current === item.href
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    /* "location", not "page": these point within this page,
                       not at one page among several. */
                    aria-current={isCurrent ? 'location' : undefined}
                    className={`relative inline-flex min-h-11 items-center whitespace-nowrap rounded-[8px] px-1.5 font-mono text-[0.6875rem] font-medium transition-colors duration-150 min-[380px]:px-2 min-[380px]:text-[0.75rem] sm:px-3 sm:text-[0.8125rem] ${
                      isCurrent ? 'text-ink' : 'text-ink-muted hover:text-signal'
                    }`}
                  >
                    {item.label}
                    {isCurrent ? (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-signal"
                      />
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
