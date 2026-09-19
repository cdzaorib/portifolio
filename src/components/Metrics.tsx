import { useEffect, useRef, useState } from 'react'
import type { Metric } from '../data/projects'
import { eyebrowClass } from './Eyebrow'

/** The same arrow the transform demo uses: a value becoming another value. */
function ShiftArrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 shrink-0 text-ink-muted"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

/**
 * Counts up to the real value when the readout first scrolls into view.
 *
 * State starts at the true number, not zero: if JS never runs or the observer
 * never fires, the page still shows the fact rather than a stuck 0. Under
 * reduced motion the effect bails out and the number simply stands there.
 */
function CountValue({ metric }: { metric: Extract<Metric, { kind: 'count' }> }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(metric.value)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let started = false

    const run = () => {
      started = true
      setShown(0)
      const startedAt = performance.now()
      const duration = 1000

      const tick = (now: number) => {
        const t = Math.min(1, (now - startedAt) / duration)
        // easeOutQuart — fast out of the gate, settles gently on the value.
        const eased = 1 - Math.pow(1 - t, 4)
        setShown(Math.round(metric.value * eased))
        if (t < 1) raf = requestAnimationFrame(tick)
      }

      raf = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            run()
            observer.disconnect()
          }
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [metric.value])

  return (
    <span
      ref={ref}
      translate="no"
      className="font-mono text-[1.75rem] font-medium leading-none tracking-[-0.02em] text-ink tabular-nums"
    >
      {metric.prefix}
      {shown.toLocaleString('pt-BR')}
      {metric.suffix}
    </span>
  )
}

/** Before and after, with the accent on the value the project produced. */
function ShiftValue({ metric }: { metric: Extract<Metric, { kind: 'shift' }> }) {
  return (
    <span translate="no" className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono">
      <span className="text-[1.0625rem] leading-none text-ink-muted line-through decoration-rule">
        {metric.from}
      </span>
      <ShiftArrow />
      <span className="text-[1.75rem] font-medium leading-none tracking-[-0.02em] text-signal">
        {metric.to}
      </span>
    </span>
  )
}

/**
 * Numbers the project actually earned, set as a datasheet readout: label
 * above, value below — the same rhythm as the status strip.
 */
export function Metrics({ metrics }: { metrics: readonly Metric[] }) {
  return (
    <dl className="flex flex-wrap gap-x-12 gap-y-6">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dt className={eyebrowClass}>{metric.label}</dt>
          <dd className="mt-2.5">
            {metric.kind === 'count' ? (
              <CountValue metric={metric} />
            ) : (
              <ShiftValue metric={metric} />
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}
