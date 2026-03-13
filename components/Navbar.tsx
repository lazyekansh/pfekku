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
    <nav
      className={`fixed z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-black/20'
          : 'top-0 left-0 right-0 w-full'
      }`}
    >
      <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'px-5 h-12' : 'max-w-6xl px-6 md:px-10 h-16'
      }`}>
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
          className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border border-white/10 text-zinc-400 hover:border-accent/50 hover:text-accent transition-all font-satoshi">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </nav>
  )
}
