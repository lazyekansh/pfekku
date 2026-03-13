'use client'
import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PROJECTS } from '@/lib/data'
import TiltCard from '@/components/ui/TiltCard'

function ArrowRightIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
  )
}

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  )
}

function ProjectCard({ p, isCenter }: { p: typeof PROJECTS[number]; isCenter?: boolean }) {
  return (
    <TiltCard
      glowColor={p.accent + '55'}
      className={`h-full min-h-[200px] rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-all duration-500 ${isCenter ? 'scale-[1.03] shadow-xl shadow-black/30' : 'scale-100'}`}
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 20% 20%, ${p.gradientFrom}, ${p.gradientTo} 60%, transparent)` }} />
      <div className="absolute inset-0 rounded-2xl opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '30%' }} />
      <div className="relative z-10 h-full p-6 flex flex-col justify-between">
        <div>
          <span className="inline-block text-[10px] uppercase tracking-widest px-2 py-1 rounded-md border font-satoshi mb-4"
            style={{ color: p.accent, borderColor: p.accent + '40', background: p.accent + '12' }}>
            {p.category}
          </span>
          <h3 className="font-cabinet font-bold text-xl text-white mb-2">{p.title}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">{p.desc}</p>
        </div>
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
          <div className="flex gap-1.5 flex-wrap">
            {p.tags.slice(0, 2).map(t => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-satoshi">{t}</span>
            ))}
          </div>
          <Link href={`/projects/${p.id}`}
            className="flex items-center gap-1 text-xs font-medium text-white/60 hover:text-white transition-colors group font-satoshi ml-3 shrink-0"
            style={{ color: p.accent }}>
            More <ArrowRightIcon size={12} />
          </Link>
        </div>
      </div>
    </TiltCard>
  )
}

const SCROLL_THRESHOLD = 10
const SCROLL_PERCENTAGE = 0.7
const CARD_WIDTH = 360
const CARD_GAP = 16

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [centerIndex, setCenterIndex] = useState(0)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > SCROLL_THRESHOLD)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - SCROLL_THRESHOLD)

    const center = el.scrollLeft + el.clientWidth / 2
    const idx = Math.round((center - CARD_WIDTH / 2) / (CARD_WIDTH + CARD_GAP))
    setCenterIndex(Math.max(0, Math.min(idx, PROJECTS.length - 1)))
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * SCROLL_PERCENTAGE
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="w-screen px-6 md:px-10 py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-end justify-between mb-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-cabinet font-bold text-white" style={{ fontSize: 'clamp(40px,6vw,72px)' }}>
            Projects
          </motion.h2>

          {/* Carousel navigation arrows - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2"
          >
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 flex items-center justify-center hover:border-zinc-600 hover:text-white hover:bg-zinc-800/60 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 flex items-center justify-center hover:border-zinc-600 hover:text-white hover:bg-zinc-800/60 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ChevronRightIcon />
            </button>
          </motion.div>
        </div>

        {/* Desktop/Tablet: horizontal carousel with depth effect */}
        <div
          ref={scrollRef}
          className="hidden md:flex gap-4 mt-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
          style={{ scrollSnapType: 'x mandatory', perspective: '1200px' }}
        >
          {PROJECTS.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex-shrink-0 w-[360px] transition-all duration-500"
              style={{
                scrollSnapAlign: 'center',
                transform: centerIndex === i ? 'scale(1)' : 'scale(0.95)',
                opacity: centerIndex === i ? 1 : 0.75,
              }}
            >
              <ProjectCard p={p} isCenter={centerIndex === i} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: original stacked layout */}
        <div className="grid grid-cols-1 gap-4 mt-8 md:hidden">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
