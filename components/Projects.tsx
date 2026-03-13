'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ChessKnight, Brain, Instagram, Terminal, Cloud, Zap } from 'lucide-react'
import { FaChessKnight } from 'react-icons/fa'
import { PROJECTS } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  chess: FaChessKnight,
  brain: Brain,
  instagram: Instagram,
  terminal: Terminal,
  cloud: Cloud,
  zap: Zap,
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="flex items-center justify-between mb-12 px-1">
        <h2 className="text-3xl font-bold text-white">Selected Works</h2>
        <div className="h-px flex-1 mx-6 bg-white/10 hidden md:block" />
        <a
          href="https://github.com/lazyekansh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-secondary hover:text-primary transition-colors shrink-0"
        >
          All on GitHub →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project, idx) => {
          const Icon = iconMap[project.icon] ?? Terminal
          return (
            <motion.a
              href={project.link}
              target="_blank"
              key={project.id}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className={`group relative bg-[#0a0a0a] rounded-2xl p-6 border border-white/5 transition-all duration-300 hover:-translate-y-1.5 ${project.hoverBorder} cursor-pointer`}
            >
              {/* Bloom */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 blur-xl pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform ${project.iconColor}`}>
                    <Icon size={20} />
                  </div>
                  <ExternalLink className="text-gray-600 group-hover:text-white transition-colors" size={15} />
                </div>

                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm mb-4 leading-relaxed flex-1">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase font-semibold tracking-wider px-2 py-1 rounded bg-black/50 border border-white/10 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
