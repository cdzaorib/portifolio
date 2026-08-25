/**
 * A URL that is known to exist but whose address has not been supplied yet.
 *
 * The UI renders nothing at all for a pending link — never a dead button and
 * never a placeholder string leaking onto the page. The note stays in the
 * source so it is obvious what still needs filling in.
 */
export type Pending = { readonly pending: true; readonly note: string }

export type MaybeUrl = string | Pending

export const pending = (note: string): Pending => ({ pending: true, note })

/** Narrows to a real, linkable URL. */
export const isUrl = (link: MaybeUrl | undefined): link is string =>
  typeof link === 'string' && link.length > 0
