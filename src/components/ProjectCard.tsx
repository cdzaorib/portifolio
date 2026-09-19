import { isUrl } from '../data/links'
import type { Project } from '../data/projects'
import { ActionLink } from './ActionLink'
import { DecisionBlock } from './DecisionBlock'
import { eyebrowClass } from './Eyebrow'
import { Metrics } from './Metrics'
import { Screenshot } from './Screenshot'
import { StackList } from './StackList'

/**
 * An entry in a document, not a tile in a dashboard.
 *
 * The left rail states where the work stands — software other people depend
 * on reads differently from something built to learn — and the right column
 * holds the work itself. It is the same label-rail rhythm the stack rows and
 * the experience timeline use, so the page is built from one device instead
 * of a page of bordered boxes.
 */
export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = isUrl(project.liveUrl) || isUrl(project.repoUrl)
  const live = project.status === 'em produção'

  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="grid gap-4 sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:gap-8"
    >
      <p
        translate="no"
        className={`${eyebrowClass} sm:pt-2 ${live ? 'text-signal' : 'text-ink-muted'}`}
      >
        {project.status}
      </p>

      <div className="min-w-0">
        <h3
          id={`${project.id}-title`}
          className="text-balance font-display text-[1.5rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[1.75rem]"
        >
          {project.name}
        </h3>

        <p className="mt-3 max-w-[64ch] text-pretty leading-[1.6] text-ink-muted">
          {project.description}
        </p>

        {project.metrics ? (
          <div className="mt-6">
            <Metrics metrics={project.metrics} />
          </div>
        ) : null}

        {project.image ? (
          <div className="mt-7 max-w-[640px]">
            <Screenshot image={project.image} />
          </div>
        ) : null}

        <dl className={`mt-7 ${project.features ? 'grid gap-6 sm:grid-cols-2' : ''}`}>
          <StackList items={project.stack} label="Stack" />
          {project.features ? <StackList items={project.features} label="O que faz" /> : null}
        </dl>

        <div className="mt-7 max-w-[68ch]">
          <DecisionBlock decision={project.decision} />
        </div>

        {/* No links, no button row — never a dead control. */}
        {hasLinks ? (
          <div className="mt-7 flex flex-wrap items-center gap-3">
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
      </div>
    </article>
  )
}
