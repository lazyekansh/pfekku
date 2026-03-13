'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactFormSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        const data = await res.json()
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Failed to send message. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="w-screen px-6 md:px-10 py-24 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-cabinet font-bold text-white mb-3" style={{ fontSize: 'clamp(40px,6vw,72px)' }}>
            Send a Message
          </h2>
          <p className="text-zinc-500 text-base font-satoshi max-w-lg mb-16">
            Have a question or want to collaborate? Drop me a message and I will get back to you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="max-w-xl space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-xs text-zinc-500 uppercase tracking-widest font-satoshi mb-2">Name</label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-white text-sm font-satoshi placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs text-zinc-500 uppercase tracking-widest font-satoshi mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-white text-sm font-satoshi placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs text-zinc-500 uppercase tracking-widest font-satoshi mb-2">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-white text-sm font-satoshi placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              placeholder="What would you like to say?"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-7 py-2.5 bg-accent text-black text-sm font-semibold rounded-full font-satoshi hover:bg-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-green-400 font-satoshi"
            >
              Message sent successfully. I will get back to you soon.
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-400 font-satoshi"
            >
              {errorMsg}
            </motion.p>
          )}
        </motion.form>

      </div>
    </section>
  )
}
