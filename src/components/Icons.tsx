/**
 * Every icon here is decorative: each one sits next to a visible text label,
 * or inside a control that carries its own accessible name. They are hidden
 * from assistive tech so nothing gets announced twice.
 */
type IconProps = { className?: string }

const base = (className?: string) => ({
  className,
  'aria-hidden': true,
  focusable: 'false' as const,
  xmlns: 'http://www.w3.org/2000/svg',
})

/** The read-receipt double check — the page's confirmation mark. */
export function CheckCheck({ className }: IconProps) {
  return (
    <svg {...base(className)} viewBox="0 0 24 16" fill="none">
      <path
        d="M1 9.2 4.6 13 11.4 3.4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="square"
      />
      <path
        d="M9.4 9.2 13 13 22.6 3.4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="square"
      />
    </svg>
  )
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg {...base(className)} viewBox="0 0 16 16" fill="none">
      <path
        d="M4.5 11.5 11.5 4.5M11.5 4.5H5.5M11.5 4.5v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )
}

export function ArrowDown({ className }: IconProps) {
  return (
    <svg {...base(className)} viewBox="0 0 16 16" fill="none">
      <path
        d="M8 3v10M8 13l4-4M8 13l-4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )
}

export function Mail({ className }: IconProps) {
  return (
    <svg {...base(className)} viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m2.8 5.5 7.2 5.2 7.2-5.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function WhatsApp({ className }: IconProps) {
  return (
    <svg {...base(className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24a8.2 8.2 0 0 1 8.23 8.25c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.47-.29Z" />
    </svg>
  )
}

export function LinkedIn({ className }: IconProps) {
  return (
    <svg {...base(className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function GitHub({ className }: IconProps) {
  return (
    <svg {...base(className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.26.8-.57v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.75.09-.73.09-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5.99.1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.2.68.82.57A12 12 0 0 0 12 .3Z" />
    </svg>
  )
}

/** Voice-note waveform on the SalvaMoney audio input. */
export function Waveform({ className }: IconProps) {
  const bars = [6, 12, 18, 10, 22, 14, 8, 16, 11, 20, 7, 13, 9, 17, 6]
  return (
    <svg {...base(className)} viewBox="0 0 76 24" fill="none">
      {bars.map((height, index) => (
        <rect
          key={index}
          x={index * 5}
          y={(24 - height) / 2}
          width="2.4"
          height={height}
          rx="1.2"
          fill="currentColor"
        />
      ))}
    </svg>
  )
}

/** Receipt thumbnail on the SalvaMoney image input. */
export function Receipt({ className }: IconProps) {
  return (
    <svg {...base(className)} viewBox="0 0 40 48" fill="none">
      <path
        d="M4 3h32v42l-4-2.6-4 2.6-4-2.6-4 2.6-4-2.6-4 2.6-4-2.6L4 45V3Z"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10 13h20M10 20h20M10 27h12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  )
}
