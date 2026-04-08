import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up' | 'left' | 'right' | 'none'
  threshold = 0.15,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const baseTransition = `transition-all duration-700 ease-out`
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {}

  const hiddenClass = {
    up:    'opacity-0 translate-y-8',
    left:  'opacity-0 translate-x-8',
    right: 'opacity-0 -translate-x-8',
    none:  'opacity-0',
  }[direction]

  return (
    <div
      ref={ref}
      className={`${baseTransition} ${visible ? 'opacity-100 translate-x-0 translate-y-0' : hiddenClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  )
}
