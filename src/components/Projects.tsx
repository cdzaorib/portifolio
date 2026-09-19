import { projects } from '../data/projects'
import { FeaturedProject } from './FeaturedProject'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projetos" title="O que eu construí">
      <FeaturedProject />

      {/* One column, separated by rules: entries in a document. A two-column
          grid of bordered cards made four unlike projects look interchangeable
          and left a hole wherever one had a screenshot and its neighbour did
          not. */}
      <ul className="mt-16 divide-y divide-rule border-t border-rule">
        {projects.map((project, index) => (
          <li key={project.id} className="py-12 first:pt-12 last:pb-0 sm:py-14">
            <Reveal delay={index * 60}>
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
