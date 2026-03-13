'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { USER } from '@/lib/data'

const ROLES = ['Full Stack Developer', 'Builder', 'OSINT Engineer', 'JEE Aspirant']

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

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row md:items-center md:gap-12">
        <div className="flex-1">
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

          {/* Role rotator */}
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
            Crafting tools that matter, blending{' '}
            <span className="text-accent font-medium">intelligence</span>{' '}
            with cutting-edge technology.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-4 items-center">
            <a href="#projects"
              className="px-7 py-2.5 bg-accent text-black text-sm font-semibold rounded-full font-satoshi hover:bg-white transition-all duration-300 hover:scale-105">
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

          {/* Tagline quote */}
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

        {/* Animated character - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="hidden md:flex items-center justify-center md:w-[280px] lg:w-[320px] shrink-0"
        >
          <svg viewBox="0 0 200 220" className="w-48 md:w-64 lg:w-72" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Body */}
            <ellipse cx="100" cy="190" rx="36" ry="12" fill="rgba(251,190,7,0.08)" />
            <rect x="76" y="120" width="48" height="60" rx="8" fill="#1a1a1a" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

            {/* Head */}
            <circle cx="100" cy="85" r="32" fill="#1a1a1a" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

            {/* Eyes */}
            <circle cx="88" cy="80" r="3.5" fill="#fbbe07">
              <animate attributeName="r" values="3.5;1;3.5" dur="3.5s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle cx="112" cy="80" r="3.5" fill="#fbbe07">
              <animate attributeName="r" values="3.5;1;3.5" dur="3.5s" repeatCount="indefinite" begin="2s" />
            </circle>

            {/* Smile */}
            <path d="M90 95 Q100 104 110 95" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* Left arm (static) */}
            <line x1="76" y1="135" x2="55" y2="155" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="55" cy="155" r="5" fill="#1a1a1a" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

            {/* Right arm (waving) */}
            <g>
              <animateTransform attributeName="transform" type="rotate" values="-15,124,135;15,124,135;-15,124,135" dur="1.5s" repeatCount="indefinite" />
              <line x1="124" y1="135" x2="150" y2="110" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="150" cy="110" r="5" fill="#1a1a1a" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
              {/* Wave lines */}
              <g opacity="0.4">
                <line x1="158" y1="100" x2="164" y2="94" stroke="#fbbe07" strokeWidth="1" strokeLinecap="round">
                  <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
                </line>
                <line x1="162" y1="106" x2="170" y2="104" stroke="#fbbe07" strokeWidth="1" strokeLinecap="round">
                  <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
                </line>
                <line x1="158" y1="114" x2="164" y2="118" stroke="#fbbe07" strokeWidth="1" strokeLinecap="round">
                  <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
                </line>
              </g>
            </g>

            {/* Legs */}
            <line x1="90" y1="180" x2="85" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="110" y1="180" x2="115" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />

            {/* Accent dot on body */}
            <circle cx="100" cy="140" r="3" fill="#fbbe07" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[10px] text-zinc-700 uppercase tracking-widest font-satoshi">Scroll</span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700 animate-bounce"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </motion.div>
    </section>
  )
}
