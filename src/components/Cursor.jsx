import { useEffect, useRef } from 'react'

/**
 * Custom cursor — dois elementos:
 *   .cursor-dot      = ponto pequeno seguindo exato o cursor (1:1, sem lag)
 *   .cursor-ring     = anel maior com leve lag (lerp), expande/escala em hover
 *
 * Esconde no touch e em prefers-reduced-motion.
 */
function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const target = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })
  const rafRef = useRef(0)

  useEffect(() => {
    const isTouch =
      'ontouchstart' in window || (navigator.maxTouchPoints || 0) > 1
    if (isTouch) return
    const reduced =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    document.body.classList.add('has-custom-cursor')

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
    }

    const HOVER_SELECTOR =
      'a, button, [role="button"], input[type="submit"], input[type="button"], .portfolio-item, .service-card, .plan-card, .step, .nav-cta'

    const onOver = (e) => {
      const t = e.target.closest?.(HOVER_SELECTOR)
      if (t) ring.classList.add('is-hover')
    }
    const onOut = (e) => {
      const t = e.target.closest?.(HOVER_SELECTOR)
      if (t) ring.classList.remove('is-hover')
    }
    const onDown = () => ring.classList.add('is-down')
    const onUp = () => ring.classList.remove('is-down')

    const loop = () => {
      // lerp pro ring
      current.current.x += (target.current.x - current.current.x) * 0.18
      current.current.y += (target.current.y - current.current.y) * 0.18
      ring.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
      rafRef.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafRef.current)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}

export default Cursor
