import { isUrl } from '../data/links'
import type { Project } from '../data/projects'
import { ActionLink } from './ActionLink'
import { DecisionBlock } from './DecisionBlock'
import { Metrics } from './Metrics'
import { Screenshot } from './Screenshot'
import { StackList } from './StackList'

export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = isUrl(project.liveUrl) || isUrl(project.repoUrl)

  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="flex h-full flex-col rounded-2xl border border-rule bg-paper p-6 transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_18px_40px_-28px_rgba(16,20,28,0.45)]"
    >
      {project.image ? (
        <div className="mb-6">
          <Screenshot image={project.image} />
        </div>
      ) : null}

      <h3
        id={`${project.id}-title`}
        className="text-balance font-display text-[1.375rem] font-semibold leading-tight tracking-[-0.02em]"
      >
        {project.name}
      </h3>

      <p className="mt-3 text-pretty text-[0.9375rem] leading-[1.6] text-ink-muted">
        {project.description}
      </p>

      {project.metrics ? (
        <div className="mt-6">
          <Metrics metrics={project.metrics} />
        </div>
      ) : null}

      <dl className={`mt-6 ${project.features ? 'grid gap-6 sm:grid-cols-2' : ''}`}>
        <StackList items={project.stack} label="Stack" />
        {project.features ? (
          <StackList items={project.features} label="O que faz" />
        ) : null}
      </dl>

      <div className="mt-6">
        <DecisionBlock decision={project.decision} />
      </div>

      {/* No links, no button row — never a dead control. */}
      {hasLinks ? (
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
          {isUrl(project.liveUrl) ? (
            <ActionLink href={project.liveUrl} variant="secondary" external>
              Ver ao vivo
            </ActionLink>
          ) : null}
          {isUrl(project.repoUrl) ? (
            <ActionLink href={project.repoUrl} variant="quiet" external>
              Código
            </ActionLink>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}
