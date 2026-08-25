import { useEffect, useRef, useState } from 'react'

/**
 * One-shot scroll reveal.
 *
 * Falls open rather than closed. IntersectionObserver drives the common case,
 * but it only reports threshold crossings — jump straight to the bottom of the
 * page with End and the elements skipped over are never reported, which would
 * leave them invisible. A passive scroll listener covers that, coalesced into
 * one animation frame so a dozen of these on the page cannot turn a scroll
 * into a dozen layout reads per event. Both detach as soon as the element
 * is shown.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let done = false
    let frame = 0

    const show = () => {
      if (done) return
      done = true
      setVisible(true)
      observer?.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        if (node.getBoundingClientRect().top < window.innerHeight * 0.95) show()
      })
    }

    const observer =
      typeof IntersectionObserver === 'undefined'
        ? null
        : new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) show()
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
          )

    if (!observer) {
      show()
      return
    }

    observer.observe(node)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return { ref, visible }
}
