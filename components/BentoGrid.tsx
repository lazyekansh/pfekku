'use client'

import { motion } from 'framer-motion'
import { MdLocationOn } from 'react-icons/md'
import { FaGithub, FaTelegram, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Box, Trophy, BookOpen } from 'lucide-react'
import { USER, SOCIALS, INTERESTS } from '@/lib/data'
import MusicWidget from './MusicWidget'
import ChessWidget from './ChessWidget'
import KnowledgeCard from './KnowledgeCard'
import GithubCard from './GithubCard'

const socialIcons: Record<string, React.ElementType> = {
  github: FaGithub,
  telegram: FaTelegram,
  instagram: FaInstagram,
  email: MdEmail,
}

const interestIcons: Record<string, React.ElementType> = {
  cube: Box,
  trophy: Trophy,
  book: BookOpen,
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5 },
})

export default function BentoGrid() {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {/* Location */}
        <motion.div
          className="glass md:col-span-2 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden min-h-[160px]"
          {...fadeUp(0)}
        >
          <div className="relative z-10">
            <h3 className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Base Operations</h3>
            <p className="text-2xl font-bold text-white flex items-center gap-2 mt-2">
              <MdLocationOn className="text-primary" />
              {USER.location}
            </p>
            <p className="text-secondary text-sm mt-2">{USER.bioLong.split('.')[0]}.</p>
          </div>
          <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
        </motion.div>

        {/* Music */}
        <motion.div className="md:col-span-1 min-h-[160px]" {...fadeUp(0.1)}>
          <MusicWidget />
        </motion.div>

        {/* Socials */}
        <motion.div
          className="glass rounded-2xl p-5 flex flex-col justify-center gap-4 md:col-span-1 min-h-[160px]"
          {...fadeUp(0.2)}
        >
          <h3 className="text-[10px] font-bold text-secondary uppercase tracking-widest">Network</h3>
          <div className="flex gap-3 flex-wrap">
            {SOCIALS.map((s) => {
              const Icon = socialIcons[s.icon]
              return (
                <a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="p-3 bg-white/5 rounded-xl hover:bg-primary/20 hover:text-primary transition-all border border-white/5 text-lg"
                >
                  {Icon && <Icon />}
                </a>
              )
            })}
          </div>
        </motion.div>

        {/* Knowledge */}
        <motion.div className="md:col-span-1 lg:row-span-2 min-h-[320px]" {...fadeUp(0.3)}>
          <KnowledgeCard />
        </motion.div>

        {/* GitHub Snake */}
        <motion.div className="md:col-span-2 min-h-[160px]" {...fadeUp(0.4)}>
          <GithubCard />
        </motion.div>

        {/* Chess */}
        <motion.div className="md:col-span-1 min-h-[160px]" {...fadeUp(0.5)}>
          <ChessWidget />
        </motion.div>

        {/* Interests */}
        <motion.div
          className="glass md:col-span-3 rounded-2xl p-5 flex items-center justify-around gap-4 min-h-[100px]"
          {...fadeUp(0.6)}
        >
          {INTERESTS.map((item) => {
            const Icon = interestIcons[item.icon]
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-2 flex-1 p-3 hover:bg-white/5 rounded-xl transition-colors border border-transparent hover:border-white/5"
              >
                <div className={`p-2 bg-white/5 rounded-full ${item.color}`}>
                  {Icon && <Icon size={18} />}
                </div>
                <div>
                  <p className="font-bold text-sm text-white">{item.title}</p>
                  <p className="text-[10px] text-secondary">{item.subtitle}</p>
                </div>
              </div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
