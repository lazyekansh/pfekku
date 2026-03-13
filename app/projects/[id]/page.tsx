'use client'
import { motion } from 'framer-motion'
import { use } from 'react'
import Link from 'next/link'
import { PROJECTS } from '@/lib/data'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = PROJECTS.find(p => p.id === id)
  if (!project) notFound()

  const others = PROJECTS.filter(p => p.id !== project.id).slice(0, 2)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">

          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-white transition-colors mb-14 group font-satoshi">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              All projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md border font-satoshi"
                style={{ color: project.accent, borderColor: project.accent + '40', background: project.accent + '12' }}>
                {project.category}
              </span>
              <span className="text-zinc-600 text-xs font-satoshi">{project.year}</span>
            </div>
            <h1 className="font-cabinet font-bold text-white leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(40px,7vw,72px)' }}>
              {project.title}
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-satoshi mb-8">{project.tagline}</p>

            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-black font-satoshi transition-all duration-300 hover:scale-105"
              style={{ background: project.accent }}>
              Visit Project
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </motion.div>

          {/* Gradient hero banner with SVG mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            className="mt-12 rounded-2xl border border-zinc-800 overflow-hidden relative"
            style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}>

            {/* Bento preview grid */}
            <div className="grid grid-cols-3 gap-3 p-6">
              {/* Main mockup */}
              <div className="col-span-2 rounded-xl border border-white/5 bg-black/20 overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
                  <span className="w-2 h-2 rounded-full bg-red-500/50" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <span className="w-2 h-2 rounded-full bg-green-500/50" />
                  <span className="text-[9px] text-zinc-600 ml-2 font-satoshi truncate">{project.link}</span>
                </div>
                <div className="p-4 flex flex-col items-center justify-center h-28">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={project.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 mb-2">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="m3 9h18" />
                    <path d="m9 21V9" />
                  </svg>
                  <p className="text-[10px] text-zinc-500 font-satoshi">{project.title}</p>
                </div>
              </div>

              {/* Side mockups */}
              <div className="flex flex-col gap-3">
                <div className="flex-1 rounded-xl border border-white/5 bg-black/20 flex items-center justify-center p-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={project.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <div className="flex-1 rounded-xl border border-white/5 bg-black/20 flex items-center justify-center p-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={project.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Long desc */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-12 text-zinc-300 text-base leading-[1.9] font-satoshi">
            {project.longDesc}
          </motion.p>

          {/* Features */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-12">
            <h2 className="font-cabinet font-bold text-white text-2xl mb-5">What it does</h2>
            <div className="space-y-3">
              {project.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 text-zinc-300 font-satoshi text-sm leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.accent }} />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-12">
            <h2 className="font-cabinet font-bold text-white text-2xl mb-5">Built with</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-300 font-satoshi hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-300">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Other projects */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="mt-20 pt-12 border-t border-white/5">
            <h2 className="font-cabinet font-bold text-white text-xl mb-5">More projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {others.map(p => (
                <Link key={p.id} href={`/projects/${p.id}`}
                  className="px-5 py-4 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/50 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 group">
                  <p className="text-[10px] uppercase tracking-widest font-satoshi mb-2" style={{ color: p.accent }}>{p.category}</p>
                  <h3 className="font-cabinet font-bold text-white text-lg mb-1 group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="text-zinc-500 text-xs font-satoshi leading-relaxed line-clamp-2">{p.desc}</p>
                  <div className="flex items-center gap-1 mt-3 text-xs text-zinc-600 group-hover:text-white transition-colors font-satoshi">
                    View
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  )
}
