'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import TiltCard from '@/components/ui/TiltCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-screen px-6 md:px-10 py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-cabinet font-bold text-white mb-10" style={{ fontSize: 'clamp(40px,6vw,72px)' }}>
          Projects
        </motion.h2>

        {/* Bento grid — 5 columns like Kavan */}
        <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-3 gap-4 mt-8">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
              className={p.containerClassName}>
              <TiltCard
                glowColor={p.accent + '55'}
                className="h-full min-h-[200px] rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-all"
              >
                {/* Background gradient blob */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 20% 20%, ${p.gradientFrom}, ${p.gradientTo} 60%, transparent)` }} />

                {/* Noise texture */}
                <div className="absolute inset-0 rounded-2xl opacity-[0.04] pointer-events-none"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '30%' }} />

                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                  <div>
                    {/* Category badge */}
                    <span className="inline-block text-[10px] uppercase tracking-widest px-2 py-1 rounded-md border font-satoshi mb-4"
                      style={{ color: p.accent, borderColor: p.accent + '40', background: p.accent + '12' }}>
                      {p.category}
                    </span>

                    <h3 className="font-cabinet font-bold text-xl text-white mb-2">{p.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">{p.desc}</p>
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                    {/* Tags */}
                    <div className="flex gap-1.5 flex-wrap">
                      {p.tags.slice(0, 2).map(t => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-satoshi">{t}</span>
                      ))}
                    </div>

                    {/* More button */}
                    <Link href={`/projects/${p.id}`}
                      className="flex items-center gap-1 text-xs font-medium text-white/60 hover:text-white transition-colors group font-satoshi ml-3 shrink-0"
                      style={{ color: p.accent }}>
                      More <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
