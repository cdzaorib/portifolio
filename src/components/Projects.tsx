import { projects } from '../data/projects'
import { FeaturedProject } from './FeaturedProject'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projetos" eyebrow="Projetos" title="O que eu construí">
      <FeaturedProject />

      {/* The wide card takes the whole row; it leads so the grid never opens
          a hole beside it. */}
      {/* items-start, not stretch: one card carries a screenshot and the other
          does not, and a stretched short card reads as a hollow box. */}
      <ul className="mt-14 grid items-start gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.id} className={project.wide ? 'lg:col-span-2' : undefined}>
            <Reveal delay={index * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
