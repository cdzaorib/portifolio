const navItems = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#stack', label: 'Stack' },
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
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
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center whitespace-nowrap rounded-[8px] px-1.5 font-mono text-[0.6875rem] font-medium text-ink-muted transition-colors duration-150 hover:text-signal min-[380px]:px-2 min-[380px]:text-[0.75rem] sm:px-3 sm:text-[0.8125rem]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
