'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BIO, USER } from '@/lib/data'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">

          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-white transition-colors mb-14 group font-satoshi">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
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
              <span className="flex items-center gap-1.5">📍 {USER.location}</span>
              <span>· 16 years old ·</span>
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
                <div key={f.label} className="px-4 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/50">
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
                <div key={item.title} className="flex items-center gap-4 px-5 py-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-all">
                  <span className="text-2xl">{item.icon}</span>
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
