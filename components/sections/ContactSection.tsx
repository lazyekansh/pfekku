'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaTelegram, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { ArrowUpRight } from 'lucide-react'
import { USER } from '@/lib/data'

const links = [
  { label: 'GitHub', sub: '@lazyekansh', href: USER.github, Icon: FaGithub, color: 'hover:text-white hover:border-zinc-500' },
  { label: 'Telegram', sub: '@lazyekansh', href: USER.telegram, Icon: FaTelegram, color: 'hover:text-[#2AABEE] hover:border-[#2AABEE]/40' },
  { label: 'Instagram', sub: '@lazyekansh', href: USER.instagram, Icon: FaInstagram, color: 'hover:text-pink-400 hover:border-pink-400/40' },
  { label: 'Email', sub: USER.email, href: `mailto:${USER.email}`, Icon: MdEmail, color: 'hover:text-accent hover:border-accent/40' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="w-screen px-6 md:px-10 py-24 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-cabinet font-bold text-white mb-3" style={{ fontSize: 'clamp(40px,6vw,72px)' }}>
            Let&apos;s talk.
          </h2>
          <p className="text-zinc-500 text-base font-satoshi max-w-lg mb-16">
            Open to collabs, projects, or just geeking out about OSINT and AI. Find me everywhere as <span className="text-white">@lazyekansh</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl">
          {links.map(({ label, sub, href, Icon, color }, i) => (
            <motion.a key={label} href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className={`flex items-center gap-4 px-5 py-4 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 transition-all group ${color}`}>
              <Icon size={20} className="shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white font-satoshi">{label}</p>
                <p className="text-xs text-zinc-500 truncate font-satoshi">{sub}</p>
              </div>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
