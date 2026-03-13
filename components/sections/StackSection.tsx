'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { STACK } from '@/lib/data'

function SkillCard({ name, sub, glowColor }: { name: string; sub: string; glowColor: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [glow, setGlow] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    setGlow({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  return (
    <div ref={ref} className="relative flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/60 transition-all duration-300 overflow-hidden group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMove}>
      {/* Glow spot */}
      {hovered && (
        <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"
          style={{ background: `radial-gradient(60px circle at ${glow.x}px ${glow.y}px, ${glowColor}, transparent 70%)` }} />
      )}
      <div className="relative">
        <p className="text-white text-sm font-medium font-satoshi">{name}</p>
        <p className="text-zinc-500 text-xs font-satoshi mt-0.5">{sub}</p>
      </div>
    </div>
  )
}

export default function StackSection() {
  return (
    <section id="stack" className="w-screen px-6 md:px-10 py-24 bg-gradient-to-b from-zinc-950 to-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-cabinet font-bold text-white mb-3" style={{ fontSize: 'clamp(40px,6vw,72px)' }}>
            Tools & Stack
          </h2>
          <p className="text-zinc-500 text-base max-w-2xl font-satoshi mb-16">
            My tech stack spans frontend, backend, databases, and OSINT tooling. Here&apos;s what I actually use and how confident I am.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {STACK.map((cat, i) => (
            <motion.div key={cat.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="space-y-5">
              <div>
                <h3 className="font-cabinet font-bold text-white text-2xl mb-1">{cat.title}</h3>
                <p className="text-zinc-500 text-sm font-satoshi">{cat.desc}</p>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-satoshi text-zinc-600">
                  <span>Proficiency</span>
                  <span style={{ color: cat.color }}>{cat.percent}%</span>
                </div>
                <div className="h-1 rounded-full bg-zinc-800 overflow-hidden">
                  <motion.div className="h-full rounded-full"
                    style={{ background: cat.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cat.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.15, ease: 'easeOut' }} />
                </div>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {cat.skills.map((s) => (
                  <SkillCard key={s.name} name={s.name} sub={s.sub} glowColor={cat.color + '55'} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
