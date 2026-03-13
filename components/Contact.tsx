'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaTelegram, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { ArrowRight } from 'lucide-react'
import { USER } from '@/lib/data'

const contacts = [
  { label: 'GitHub', sub: '@lazyekansh', href: USER.github, Icon: FaGithub, color: 'hover:border-white/30 hover:text-white' },
  { label: 'Telegram', sub: '@lazyekansh', href: USER.telegram, Icon: FaTelegram, color: 'hover:border-blue-400/40 hover:text-blue-400' },
  { label: 'Instagram', sub: '@lazyekansh', href: USER.instagram, Icon: FaInstagram, color: 'hover:border-pink-400/40 hover:text-pink-400' },
  { label: 'Email', sub: 'lazyekansh@gmail.com', href: `mailto:${USER.email}`, Icon: MdEmail, color: 'hover:border-primary/40 hover:text-primary' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-10 md:p-14 relative overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
              Let&apos;s build<br />something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                together.
              </span>
            </h2>
            <p className="text-secondary mt-4 leading-relaxed text-sm max-w-sm">
              Open to collabs, projects, or just geeking out about OSINT and AI. Find me everywhere as <strong className="text-white">@lazyekansh</strong>.
            </p>
            <a
              href={USER.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl font-semibold hover:bg-primary transition-all text-sm"
            >
              View GitHub <ArrowRight size={15} />
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {contacts.map(({ label, sub, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 transition-all ${color} group`}
              >
                <div className="p-2 bg-white/5 rounded-lg text-lg group-hover:scale-110 transition-transform">
                  <Icon />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-xs text-secondary">{sub}</p>
                </div>
                <ArrowRight size={14} className="text-secondary group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
