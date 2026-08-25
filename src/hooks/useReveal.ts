import { useEffect, useRef, useState } from 'react'

/**
 * One-shot scroll reveal.
 *
 * Falls open rather than closed. IntersectionObserver drives the common case,
 * but it only reports threshold crossings — jump straight to the bottom of the
 * page with End and the elements skipped over are never reported, which would
 * leave them invisible. A passive scroll listener covers that, and both detach
 * as soon as the element is shown.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let done = false
    const show = () => {
      if (done) return
      done = true
      setVisible(true)
      observer?.disconnect()
      window.removeEventListener('scroll', onScroll)
    }

    // Already on screen (or scrolled past) by the time we mount.
    const onScroll = () => {
      if (node.getBoundingClientRect().top < window.innerHeight * 0.95) show()
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
    }
  }, [])

  return { ref, visible }
}
