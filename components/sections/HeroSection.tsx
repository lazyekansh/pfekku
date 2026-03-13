'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { USER } from '@/lib/data'

const ROLES = ['Developer', 'Builder', 'OSINT Engineer', 'JEE Aspirant']

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const iv = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % ROLES.length)
        setVisible(true)
      }, 300)
    }, 2800)
    return () => clearInterval(iv)
  }, [])

  return (
    <section id="hero" className="relative w-screen min-h-screen flex flex-col justify-center px-6 md:px-10 pt-16 bg-[#0a0a0a] overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      {/* Yellow glow blob */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fbbe07, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-satoshi">{USER.location}</span>
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-cabinet font-bold text-white leading-[0.9] tracking-[-0.04em] mb-6"
          style={{ fontSize: 'clamp(64px, 11vw, 130px)' }}>
          Ekansh<br />
          <span className="text-white/15" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.18)' }}>Tiwari.</span>
        </motion.h1>

        {/* Role rotator — exact Kavan style */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }}
          className="text-xl md:text-2xl text-zinc-400 font-satoshi mb-4">
          I am a{' '}
          <span
            className="text-white font-semibold inline-block transition-all duration-300"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(-8px)' }}>
            {ROLES[roleIdx]}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }}
          className="text-zinc-500 text-base max-w-lg leading-relaxed mb-10 font-satoshi">
          Crafting tools that matter — blending{' '}
          <span className="text-accent font-medium">intelligence</span>{' '}
          with cutting-edge technology.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="flex flex-wrap gap-4 items-center">
          <a href="#projects"
            className="px-7 py-2.5 bg-accent text-black text-sm font-semibold rounded-full font-satoshi hover:bg-white transition-all hover:scale-105">
            See my work
          </a>
          <div className="flex items-center gap-4 pl-2">
            {[
              { href: 'https://github.com/lazyekansh', label: 'GitHub' },
              { href: 'https://t.me/lazyekansh', label: 'Telegram' },
              { href: 'https://instagram.com/lazyekansh', label: 'Instagram' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-white transition-colors font-satoshi">
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Tagline quote — Kavan-style */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="mt-10 pl-4 border-l-4 border-accent/60">
          <p className="text-sm italic text-zinc-600 font-satoshi">
            Turning lines of code into tools that{' '}
            <span className="shine-text font-medium" style={{ backgroundImage: 'linear-gradient(120deg,rgba(255,255,255,0) 30%,rgba(255,255,255,0.8) 50%,rgba(255,255,255,0) 70%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              solve real problems.
            </span>
          </p>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[10px] text-zinc-700 uppercase tracking-widest font-satoshi">Scroll</span>
        <ArrowDown size={13} className="text-zinc-700 animate-bounce" />
      </motion.div>
    </section>
  )
}
