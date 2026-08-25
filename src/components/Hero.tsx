import { githubUrl, profile } from '../data/profile'
import { profilePhotoUrl } from '../data/profilePhoto'
import { ActionLink } from './ActionLink'
import { Eyebrow } from './Eyebrow'
import { ArrowDown } from './Icons'
import { StatusStrip } from './StatusStrip'

/**
 * Two rails: the name holds the left, the sentence and the two ways in hold
 * the right, sitting on the same baseline as the last line of the name.
 * When no photo file is present the right rail simply starts lower — there is
 * never an empty frame waiting for an image.
 */
export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-title">
      <div className="mx-auto w-full max-w-[1120px] px-6 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-32">
        <div className="grid gap-y-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-x-16">
          <div>
            <Eyebrow>{profile.role}</Eyebrow>

            <h1
              id="hero-title"
              className="mt-6 font-display text-[clamp(2.25rem,7.2vw,4.75rem)] font-bold leading-[0.94] tracking-[-0.035em]"
            >
              {/* The leading space is collapsed visually but keeps the
                  accessible name as "Carlos Daniel Cabral Ribeiro" rather
                  than running the two lines together. */}
              {profile.nameLines.map((line, index) => (
                <span key={line} className="block">
                  {index > 0 ? ' ' : ''}
                  {line}
                </span>
              ))}
            </h1>
          </div>

          <div className="lg:pb-2">
            {profilePhotoUrl ? (
              <figure className="mb-7">
                <img
                  src={profilePhotoUrl}
                  alt={`Retrato de ${profile.name}`}
                  width={168}
                  height={168}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-[144px] w-[144px] rounded-2xl border border-rule object-cover sm:h-[168px] sm:w-[168px]"
                />
              </figure>
            ) : null}

            <p className="max-w-[40ch] text-[1.0625rem] leading-[1.6] text-ink-muted sm:text-[1.1875rem]">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ActionLink href="#projetos" variant="primary">
                Ver projetos
                <ArrowDown className="h-3.5 w-3.5 shrink-0" />
              </ActionLink>
              <ActionLink href={githubUrl} variant="secondary" external>
                GitHub
              </ActionLink>
            </div>
          </div>
        </div>
      </div>

      <StatusStrip />
    </section>
  )
}
