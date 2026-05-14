import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react'

/**
 * Reveal: anima cada palavra do conteúdo entrando ao entrar na viewport.
 * Preserva inline tags (<em>, <strong>) recursando em children.
 */
function splitNode(node, counterRef) {
  if (typeof node === 'string' || typeof node === 'number') {
    const text = String(node)
    const parts = text.split(/(\s+)/)
    return parts.map((p, i) => {
      if (/^\s+$/.test(p) || p === '') return p
      const idx = counterRef.current++
      return (
        <span className="reveal-word" key={`w-${idx}`}>
          <span
            className="reveal-word-inner"
            style={{ transitionDelay: `${idx * 45}ms` }}
          >
            {p}
          </span>
        </span>
      )
    })
  }
  if (isValidElement(node)) {
    const newChildren = Children.map(node.props.children, (c) => splitNode(c, counterRef))
    return cloneElement(node, { ...node.props }, newChildren)
  }
  if (Array.isArray(node)) {
    return node.map((c) => splitNode(c, counterRef))
  }
  return node
}

function Reveal({ as: Tag = 'span', children, className = '', threshold = 0.2, ...rest }) {
  const ref = useRef(null)
  const counterRef = useRef(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if ('IntersectionObserver' in window === false) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  counterRef.current = 0
  const split = Children.map(children, (c) => splitNode(c, counterRef))

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-on' : ''} ${className}`} {...rest}>
      {split}
    </Tag>
  )
}

export default Reveal
