import { featuredProject } from '../data/projects'
import { isUrl } from '../data/links'
import { ActionLink } from './ActionLink'
import { DecisionBlock } from './DecisionBlock'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'
import { Screenshot } from './Screenshot'
import { StackList } from './StackList'
import { TransformDemo } from './TransformDemo'

export function FeaturedProject() {
  const project = featuredProject

  return (
    <Reveal className="mt-12">
      <article aria-labelledby="salvamoney-title">
        <Eyebrow>Projeto em destaque</Eyebrow>

        <h3
          id="salvamoney-title"
          className="mt-3 font-display text-[clamp(1.875rem,3.4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.025em]"
        >
          {project.name}
        </h3>

        <p className="mt-4 max-w-[58ch] text-pretty text-ink-muted">{project.description}</p>

        {project.image ? (
          <div className="mt-8">
            <Screenshot image={project.image} />
          </div>
        ) : null}

        <div className="mt-8">
          <TransformDemo />
        </div>

        <dl className="mt-8 grid gap-7 sm:grid-cols-2">
          <StackList items={project.stack} label="Stack" />
          {project.features ? (
            <StackList items={project.features} label="Funcionalidades" />
          ) : null}
        </dl>

        <div className="mt-8 max-w-[68ch]">
          <DecisionBlock decision={project.decision} />
        </div>

        {/*
          The two pending links render nothing at all rather than a dead
          button. The WhatsApp thread is the live demo in the meantime.
        */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.whatsappUrl ? (
            <ActionLink href={project.whatsappUrl} variant="primary" external>
              Testar no WhatsApp
            </ActionLink>
          ) : null}
          {isUrl(project.liveUrl) ? (
            <ActionLink href={project.liveUrl} variant="secondary" external>
              Ver ao vivo
            </ActionLink>
          ) : null}
          {isUrl(project.repoUrl) ? (
            <ActionLink href={project.repoUrl} variant="secondary" external>
              Código
            </ActionLink>
          ) : null}
        </div>
      </article>
    </Reveal>
  )
}
