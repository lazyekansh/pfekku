'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { USER } from '@/lib/data'
import CodeProfile from './CodeProfile'

export default function Hero() {
  return (
    <section id="about" className="pt-32 md:pt-40 pb-10 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-7 text-center lg:text-left"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Available for collaboration
        </motion.div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Building{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Digital
            </span>
            <br />
            Experiences.
          </h1>
          <p className="text-secondary text-sm font-medium tracking-widest uppercase">
            @{USER.handle} · {USER.altHandle} · Noida, India 🇮🇳
          </p>
        </div>

        {/* Bio */}
        <p className="text-secondary text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
          {USER.bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-black transition-all flex items-center gap-2 text-sm"
          >
            View Work <ArrowRight size={16} />
          </a>
          <a
            href={USER.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/5 text-white font-medium rounded-xl hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2 text-sm"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Quick stats */}
        <div className="flex gap-8 justify-center lg:justify-start pt-2">
          {[
            { val: '16', label: 'Years Old' },
            { val: '6+', label: 'Projects' },
            { val: '∞', label: 'Bots Deployed' },
          ].map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">{s.val}</div>
              <div className="text-xs text-secondary uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right — Code Block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="flex-1 w-full flex justify-center lg:justify-end"
      >
        <CodeProfile />
      </motion.div>
    </section>
  )
}
