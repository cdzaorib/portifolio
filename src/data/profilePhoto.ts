/**
 * Resolves the profile photo only if the file is actually present.
 *
 * A static import of a missing asset fails the build, so the lookup is a glob:
 * drop `profile.jpg` into `src/assets/images/` and the hero picks it up; leave
 * it out and the hero lays itself out as a single column instead of holding
 * an empty frame open.
 *
 * [[PLACEHOLDER: adicionar em src/assets/images/profile.jpg]]
 */
const matches = import.meta.glob<string>(
  '../assets/images/profile.{jpg,jpeg,png,webp}',
  { eager: true, query: '?url', import: 'default' },
)

export const profilePhotoUrl: string | null = Object.values(matches)[0] ?? null
