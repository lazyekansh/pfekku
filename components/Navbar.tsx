'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { USER } from '@/lib/data'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#about" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-bold text-white tracking-tight group-hover:text-primary transition-colors">
            {USER.handle}
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-secondary hover:text-white transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://github.com/lazyekansh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all font-medium"
        >
          GitHub →
        </a>
      </div>
    </nav>
  )
}
