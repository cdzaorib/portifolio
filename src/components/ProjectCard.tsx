import { isUrl } from '../data/links'
import type { Project } from '../data/projects'
import { ActionLink } from './ActionLink'
import { DecisionBlock } from './DecisionBlock'
import { Screenshot } from './Screenshot'
import { StackList } from './StackList'

export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = isUrl(project.liveUrl) || isUrl(project.repoUrl)

  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="flex h-full flex-col rounded-2xl border border-rule bg-paper p-6 transition-colors duration-150 hover:border-ink/30"
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

      <dl className="mt-6">
        <StackList items={project.stack} label="Stack" />
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
