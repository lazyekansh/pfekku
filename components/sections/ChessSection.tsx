'use client'
import { motion } from 'framer-motion'

const progression = [
  { year: '2023', rating: 800 },
  { year: '2024', rating: 1100 },
  { year: '2025', rating: 1400 },
  { year: '2026', rating: 1613 },
]

const maxRating = 1613
const minRating = 600

export default function ChessSection() {
  return (
    <section className="w-screen px-6 md:px-10 py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-cabinet font-bold text-white mb-3" style={{ fontSize: 'clamp(40px,6vw,72px)' }}>
            Chess Progress
          </h2>
          <p className="text-zinc-500 text-base max-w-2xl font-satoshi mb-16">
            Rating growth from 2023 to 2026, tracked across Rapid and Blitz formats.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Timeline chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8"
          >
            <p className="text-sm text-zinc-500 font-satoshi mb-6">Rating Progression (Rapid)</p>

            {/* SVG Line Chart */}
            <div className="w-full overflow-hidden">
              <svg viewBox="0 0 400 180" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="50"
                    y1={20 + i * 35}
                    x2="380"
                    y2={20 + i * 35}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                  />
                ))}

                {/* Y-axis labels */}
                {[1600, 1400, 1200, 1000, 800].map((val, i) => (
                  <text
                    key={val}
                    x="40"
                    y={24 + i * 35}
                    textAnchor="end"
                    fill="rgba(255,255,255,0.25)"
                    fontSize="10"
                    fontFamily="Satoshi, sans-serif"
                  >
                    {val}
                  </text>
                ))}

                {/* Line path */}
                <motion.polyline
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                  points={progression.map((p, i) => {
                    const x = 75 + i * 100
                    const y = 160 - ((p.rating - minRating) / (maxRating - minRating)) * 140
                    return `${x},${y}`
                  }).join(' ')}
                  fill="none"
                  stroke="#fbbe07"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data points */}
                {progression.map((p, i) => {
                  const x = 75 + i * 100
                  const y = 160 - ((p.rating - minRating) / (maxRating - minRating)) * 140
                  return (
                    <g key={p.year}>
                      <motion.circle
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
                        cx={x}
                        cy={y}
                        r="5"
                        fill="#fbbe07"
                      />
                      <motion.circle
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 0.2 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
                        cx={x}
                        cy={y}
                        r="10"
                        fill="#fbbe07"
                      />
                      {/* Rating label */}
                      <motion.text
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.15 }}
                        x={x}
                        y={y - 14}
                        textAnchor="middle"
                        fill="#fbbe07"
                        fontSize="11"
                        fontWeight="600"
                        fontFamily="Satoshi, sans-serif"
                      >
                        {p.rating}
                      </motion.text>
                      {/* Year label */}
                      <text
                        x={x}
                        y="175"
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.35)"
                        fontSize="11"
                        fontFamily="Satoshi, sans-serif"
                      >
                        {p.year}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </motion.div>

          {/* Current ratings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4 md:w-64"
          >
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-satoshi">Rapid</p>
              </div>
              <p className="text-4xl font-cabinet font-bold text-white">1613</p>
              <p className="text-xs text-zinc-600 font-satoshi mt-1">Current rating</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-satoshi">Blitz</p>
              </div>
              <p className="text-4xl font-cabinet font-bold text-white">1358</p>
              <p className="text-xs text-zinc-600 font-satoshi mt-1">Current rating</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16"/><path d="M8.5 16h7a1 1 0 0 0 .916-.6l1.084-2.4a1 1 0 0 0-.916-1.4H7.416a1 1 0 0 0-.916 1.4l1.084 2.4a1 1 0 0 0 .916.6z"/><path d="M9 6.236a4 4 0 0 1 6 0"/><path d="M12 4v2"/><circle cx="12" cy="4" r="1"/></svg>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-satoshi">Growth</p>
              </div>
              <p className="text-4xl font-cabinet font-bold text-accent">+813</p>
              <p className="text-xs text-zinc-600 font-satoshi mt-1">Since 2023</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
