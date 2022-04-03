import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import * as T from './types'

function FadeWhenVisible({ children, delay }: T.FadeWhenVisible) {
  const controls = useAnimation()
  const ref = useRef<any>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry.some((x) => x.isIntersecting)) return controls.start('visible')
    })
    if (ref?.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [controls, ref])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeWhenVisible
