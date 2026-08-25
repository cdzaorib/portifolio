import { projects } from '../data/projects'
import { FeaturedProject } from './FeaturedProject'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projetos" eyebrow="Projetos" title="O que eu construí">
      <FeaturedProject />

      <ul className="mt-14 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.id}>
            <Reveal delay={index * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
