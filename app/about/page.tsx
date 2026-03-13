'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BIO, USER } from '@/lib/data'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const interestIcons: Record<string, React.ReactNode> = {
  chess: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16"/><path d="M8.5 16h7a1 1 0 0 0 .916-.6l1.084-2.4a1 1 0 0 0-.916-1.4H7.416a1 1 0 0 0-.916 1.4l1.084 2.4a1 1 0 0 0 .916.6z"/><path d="M9 6.236a4 4 0 0 1 6 0"/><path d="M12 4v2"/><circle cx="12" cy="4" r="1"/></svg>
  ),
  tennis: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><circle cx="12" cy="12" r="10"/><path d="M18.364 5.636a9 9 0 0 1-2.828 6.364 9 9 0 0 1-6.364 2.828"/><path d="M5.636 18.364a9 9 0 0 1 2.828-6.364 9 9 0 0 1 6.364-2.828"/></svg>
  ),
  book: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  ),
  art: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><circle cx="13.5" cy="6.5" r="2.5"/><path d="M17.093 10.007A5 5 0 0 0 12 6a5 5 0 0 0-4.773 6.5H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-3.5"/><circle cx="7.5" cy="14.5" r="1.5"/><circle cx="12" cy="14.5" r="1.5"/></svg>
  ),
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">

          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-white transition-colors mb-14 group font-satoshi">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              Back home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
            <h1 className="font-cabinet font-bold text-white leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px,6vw,64px)' }}>
              {BIO.headline}
            </h1>

            <div className="flex flex-wrap gap-4 text-xs text-zinc-500 font-satoshi mb-14">

              <span className="flex items-center gap-1.5"> {USER.location}</span>
              <span>/ 16 years old /</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
                Available for collabs
              </span>
            </div>
          </motion.div>

          {/* Bio paragraphs */}
          <div className="space-y-7 mb-16">
            {BIO.paragraphs.map((p, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="text-zinc-300 text-base leading-[1.9] font-satoshi">
                {p}
              </motion.p>
            ))}
          </div>

          {/* Quick facts */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            className="mb-16">
            <h2 className="font-cabinet font-bold text-white text-2xl mb-5">Quick facts</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {BIO.facts.map(f => (
                <div key={f.label} className="px-4 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-satoshi mb-1">{f.label}</p>
                  <p className="text-white text-sm font-semibold font-satoshi">{f.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
            <h2 className="font-cabinet font-bold text-white text-2xl mb-5">Beyond the screen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BIO.interests.map(item => (
                <div key={item.title} className="flex items-center gap-4 px-5 py-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 hover:border-zinc-700 hover:scale-[1.02] transition-all duration-300">
                  <span className="shrink-0">{interestIcons[item.icon]}</span>
                  <div>
                    <p className="text-white text-sm font-semibold font-satoshi">{item.title}</p>
                    <p className="text-zinc-500 text-xs font-satoshi mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  )
}
