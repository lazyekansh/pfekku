'use client'

import { motion } from 'framer-motion'
import { KNOWLEDGE } from '@/lib/data'

export default function KnowledgeCard() {
  return (
    <div className="glass p-5 rounded-2xl h-full flex flex-col gap-5">
      <h3 className="text-xs font-bold text-secondary uppercase tracking-widest">Knowledge</h3>

      {KNOWLEDGE.map((item, i) => (
        <motion.div
          key={item.category}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="space-y-2"
        >
          <div className="flex justify-between items-center">
            <span className={`text-sm font-semibold ${item.color}`}>{item.category}</span>
            <span className="text-xs text-secondary font-mono">{item.percent}%</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${item.bar}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${item.percent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
            />
          </div>
          <p className="text-[10px] text-secondary leading-relaxed">{item.skills}</p>
        </motion.div>
      ))}
    </div>
  )
}
