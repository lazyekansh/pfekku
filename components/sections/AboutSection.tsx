'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { USER, BIO } from '@/lib/data'

const interestIcons: Record<string, React.ReactNode> = {
  chess: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16"/><path d="M8.5 16h7a1 1 0 0 0 .916-.6l1.084-2.4a1 1 0 0 0-.916-1.4H7.416a1 1 0 0 0-.916 1.4l1.084 2.4a1 1 0 0 0 .916.6z"/><path d="M9 6.236a4 4 0 0 1 6 0"/><path d="M12 4v2"/><circle cx="12" cy="4" r="1"/></svg>
  ),
  tennis: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><circle cx="12" cy="12" r="10"/><path d="M18.364 5.636a9 9 0 0 1-2.828 6.364 9 9 0 0 1-6.364 2.828"/><path d="M5.636 18.364a9 9 0 0 1 2.828-6.364 9 9 0 0 1 6.364-2.828"/></svg>
  ),
  book: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  ),
  art: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><circle cx="13.5" cy="6.5" r="2.5"/><path d="M17.093 10.007A5 5 0 0 0 12 6a5 5 0 0 0-4.773 6.5H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-3.5"/><circle cx="7.5" cy="14.5" r="1.5"/><circle cx="12" cy="14.5" r="1.5"/></svg>
  ),
}

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

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Next.js', 'React', 'Python', 'Node.js', 'Tailwind', 'Socket.io'].map(t => (
                <span key={t} className="px-3 py-1 text-xs font-medium text-accent bg-zinc-900 rounded-full border border-zinc-800 font-satoshi hover:bg-zinc-800 transition-colors">
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
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </Link>
          </motion.div>

          {/* Right: interest cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="flex flex-col gap-3 min-w-[240px]">
            {BIO.interests.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/60 hover:border-zinc-700 hover:scale-[1.02] transition-all duration-300">
                <span className="shrink-0">{interestIcons[item.icon]}</span>
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
