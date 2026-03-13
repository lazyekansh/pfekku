'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-cabinet text-sm font-bold text-white group-hover:text-accent transition-colors">lazyekansh</span>
        </Link>
        <div className="hidden md:flex gap-8">
          {['about','projects','stack','contact'].map(s => (
            <a key={s} href={`#${s}`} className="text-sm text-zinc-500 hover:text-white transition-colors capitalize font-satoshi">{s}</a>
          ))}
        </div>
        <a href="https://github.com/lazyekansh" target="_blank" rel="noopener noreferrer"
          className="text-xs px-4 py-2 rounded-lg border border-white/10 text-zinc-400 hover:border-accent/50 hover:text-accent transition-all font-satoshi">
          GitHub →
        </a>
      </div>
    </nav>
  )
}
