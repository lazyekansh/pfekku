'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { USER, BIO } from '@/lib/data'

export default function AboutSection() {
  return (
    <section id="about" className="w-screen px-6 md:px-10 py-24 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-cabinet font-bold text-white mb-10" style={{ fontSize: 'clamp(40px,6vw,72px)' }}>
          About
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left: text */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="flex-1 max-w-2xl space-y-5">

            <p className="text-zinc-400 text-lg leading-relaxed font-satoshi">{USER.shortBio}</p>

            <p className="text-zinc-500 text-sm leading-relaxed font-satoshi">
              Currently grinding JEE Physics while building tools and shipping projects. I work across the full stack —
              from slick React frontends to Python OSINT scripts to Telegram bots that run 24/7.
            </p>

            {/* Tech chips - Kavan style */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Next.js', 'React', 'Python', 'Node.js', 'Tailwind', 'Socket.io'].map(t => (
                <span key={t} className="px-3 py-1 text-xs font-medium text-accent bg-zinc-900 rounded-full border border-zinc-800 font-satoshi">
                  {t}
                </span>
              ))}
            </div>

            <p className="text-zinc-600 text-sm leading-relaxed font-satoshi max-w-xl">
              I approach every project with the same mindset: understand the problem deeply, then build the simplest thing that actually solves it.
            </p>

            {/* Know more link */}
            <Link href="/about"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-white transition-colors group font-satoshi pt-1">
              Know more
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: interest cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="flex flex-col gap-3 min-w-[240px]">
            {BIO.interests.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-white text-sm font-medium font-satoshi">{item.title}</p>
                  <p className="text-zinc-500 text-xs font-satoshi mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
