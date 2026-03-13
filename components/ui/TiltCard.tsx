'use client'
import { useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface Props {
  children: ReactNode
  className?: string
  glowColor?: string
}

export default function TiltCard({ children, className, glowColor = 'rgba(251,190,7,0.35)' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glow, setGlow] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const cx = e.clientX - r.left
    const cy = e.clientY - r.top
    setTilt({ x: (cy - r.height / 2) / 22, y: -(cx - r.width / 2) / 22 })
    setGlow({ x: cx, y: cy })
  }

  return (
    <motion.div
      ref={ref}
      className={clsx('relative overflow-hidden', className)}
      style={{
        transform: hovered
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.015,1.015,1)`
          : 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
        transition: 'transform 0.12s ease-out',
        willChange: 'transform',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }) }}
      onMouseMove={onMove}
    >
      {hovered && (
        <div
          className="pointer-events-none absolute z-10 rounded-full"
          style={{
            width: 180,
            height: 180,
            top: glow.y - 90,
            left: glow.x - 90,
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            transition: 'opacity 0.15s',
          }}
        />
      )}
      {children}
    </motion.div>
  )
}
