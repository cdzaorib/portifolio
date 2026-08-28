import type { ProjectImage } from '../data/projects'

/**
 * A real product screenshot inside a restrained "window" frame.
 *
 * The chrome is monochrome on purpose: the site is near-mono, so macOS
 * traffic-light dots would be the only saturated thing on the page. The frame
 * also lets a dark screenshot (SalvaMoney) sit on the light page as an
 * intentional dark-mode app rather than a clashing block. width/height are
 * the intrinsic pixels, so the browser reserves the aspect ratio and the
 * image never shifts layout as it loads.
 */
export function Screenshot({ image }: { image: ProjectImage }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-rule bg-paper shadow-[0_1px_2px_rgba(16,20,28,0.05),0_18px_36px_-24px_rgba(16,20,28,0.30)]">
      <div className="flex items-center gap-2.5 border-b border-rule bg-paper-sunk/70 px-4 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full border border-rule" />
          <span className="h-2.5 w-2.5 rounded-full border border-rule" />
          <span className="h-2.5 w-2.5 rounded-full border border-rule" />
        </span>
        {image.label ? (
          <span
            translate="no"
            className="ml-1 truncate font-mono text-[0.6875rem] text-ink-muted"
          >
            {image.label}
          </span>
        ) : null}
      </div>

      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />

      {image.caption ? (
        <figcaption className="border-t border-rule px-4 py-2.5 text-[0.8125rem] leading-snug text-ink-muted">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
