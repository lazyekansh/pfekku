'use client'
import { use } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react'
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
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              All projects
            </Link>
          </motion.div>

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
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-black font-satoshi transition-all hover:scale-105"
              style={{ background: project.accent }}>
              Visit Project <ExternalLink size={13} />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            className="mt-12 h-52 rounded-2xl border border-zinc-800 flex items-center justify-center overflow-hidden relative"
            style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}>
            <span className="font-cabinet font-bold text-8xl select-none"
              style={{ color: project.accent + '18', WebkitTextStroke: `1px ${project.accent}30` }}>
              {project.title}
            </span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-12 text-zinc-300 text-base leading-[1.9] font-satoshi">
            {project.longDesc}
          </motion.p>

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

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-12">
            <h2 className="font-cabinet font-bold text-white text-2xl mb-5">Built with</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-300 font-satoshi">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="mt-20 pt-12 border-t border-white/5">
            <h2 className="font-cabinet font-bold text-white text-xl mb-5">More projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {others.map(p => (
                <Link key={p.id} href={`/projects/${p.id}`}
                  className="px-5 py-4 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/50 hover:border-zinc-600 transition-all group">
                  <p className="text-[10px] uppercase tracking-widest font-satoshi mb-2" style={{ color: p.accent }}>{p.category}</p>
                  <h3 className="font-cabinet font-bold text-white text-lg mb-1 group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="text-zinc-500 text-xs font-satoshi leading-relaxed line-clamp-2">{p.desc}</p>
                  <div className="flex items-center gap-1 mt-3 text-xs text-zinc-600 group-hover:text-white transition-colors font-satoshi">
                    View <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
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
