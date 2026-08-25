import { profile } from '../data/profile'

export function SiteFooter() {
  return (
    <footer className="edge-safe border-t border-rule py-10">
      <div className="mx-auto flex w-full max-w-[1120px] flex-wrap items-center justify-between gap-4 px-6 sm:px-8">
        <p className="font-mono text-[0.75rem] text-ink-muted">
          {profile.name} · Rio de Janeiro
        </p>
        <a
          href="#topo"
          className="inline-flex min-h-11 items-center font-mono text-[0.75rem] text-ink-muted transition-colors duration-150 hover:text-signal"
        >
          Voltar ao topo
        </a>
      </div>
    </footer>
  )
}
