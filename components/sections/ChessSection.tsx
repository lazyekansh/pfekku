'use client'
import { motion } from 'framer-motion'

const progression = [
  { year: '2023', month: 'Jan', rating: 800 },
  { year: '2023', month: 'Jun', rating: 850 },
  { year: '2023', month: 'Dec', rating: 950 },
  { year: '2024', month: 'Mar', rating: 1050 },
  { year: '2024', month: 'Jun', rating: 1100 },
  { year: '2024', month: 'Oct', rating: 1200 },
  { year: '2025', month: 'Feb', rating: 1300 },
  { year: '2025', month: 'Jun', rating: 1400 },
  { year: '2025', month: 'Nov', rating: 1500 },
  { year: '2026', month: 'Mar', rating: 1613 },
]

const maxRating = 1700
const minRating = 700

function ratingToY(rating: number, height: number, padTop: number, padBot: number) {
  return padTop + (height - padTop - padBot) * (1 - (rating - minRating) / (maxRating - minRating))
}

function buildSmoothPath(points: { x: number; y: number }[]) {
  if (points.length < 2) return ''
  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i]
    const p1 = points[i + 1]
    const cpx = (p0.x + p1.x) / 2
    d += ` C ${cpx} ${p0.y}, ${cpx} ${p1.y}, ${p1.x} ${p1.y}`
  }
  return d
}

export default function ChessSection() {
  const svgW = 600
  const svgH = 160
  const padLeft = 45
  const padRight = 15
  const padTop = 20
  const padBot = 25

  const chartW = svgW - padLeft - padRight
  const points = progression.map((p, i) => ({
    x: padLeft + (i / (progression.length - 1)) * chartW,
    y: ratingToY(p.rating, svgH, padTop, padBot),
    ...p,
  }))

  const smoothPath = buildSmoothPath(points)

  const yLabels = [1600, 1400, 1200, 1000, 800]

  return (
    <section className="w-screen px-6 md:px-10 py-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-cabinet font-bold text-white mb-2" style={{ fontSize: 'clamp(32px,5vw,56px)' }}>
            Chess Progress
          </h2>
          <p className="text-zinc-500 text-sm max-w-xl font-satoshi mb-10">
            Rating growth from 2023 to 2026, tracked across Rapid and Blitz formats.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 md:p-6"
          >
            <p className="text-xs text-zinc-500 font-satoshi mb-4">Rating Progression (Rapid)</p>

            <div className="w-full overflow-hidden">
              <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                {/* Grid lines */}
                {yLabels.map(val => {
                  const y = ratingToY(val, svgH, padTop, padBot)
                  return (
                    <g key={val}>
                      <line x1={padLeft} y1={y} x2={svgW - padRight} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      <text x={padLeft - 6} y={y + 3} textAnchor="end" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="Satoshi, sans-serif">{val}</text>
                    </g>
                  )
                })}

                {/* Gradient fill */}
                <defs>
                  <linearGradient id="chessGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fbbe07" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#fbbe07" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d={`${smoothPath} L ${points[points.length - 1].x} ${svgH - padBot} L ${points[0].x} ${svgH - padBot} Z`}
                  fill="url(#chessGrad)"
                />

                {/* Smooth curve */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                  d={smoothPath}
                  fill="none"
                  stroke="#fbbe07"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Data points */}
                {points.map((p, i) => (
                  <g key={i}>
                    <motion.circle
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08, duration: 0.2 }}
                      cx={p.x}
                      cy={p.y}
                      r="3"
                      fill="#fbbe07"
                    />
                    {/* Show rating labels only at key years */}
                    {(i === 0 || i === progression.length - 1 || i === 4 || i === 7) && (
                      <motion.text
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                        x={p.x}
                        y={p.y - 10}
                        textAnchor="middle"
                        fill="#fbbe07"
                        fontSize="9"
                        fontWeight="600"
                        fontFamily="Satoshi, sans-serif"
                      >
                        {p.rating}
                      </motion.text>
                    )}
                  </g>
                ))}

                {/* Year labels at bottom */}
                {['2023', '2024', '2025', '2026'].map((yr, idx) => {
                  const x = padLeft + (idx / 3) * chartW
                  return (
                    <text key={yr} x={x} y={svgH - 5} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="Satoshi, sans-serif">
                      {yr}
                    </text>
                  )
                })}
              </svg>
            </div>
          </motion.div>

          {/* Rating cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-row md:flex-col gap-3 md:w-52"
          >
            <div className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-satoshi">Rapid</p>
              </div>
              <p className="text-2xl font-cabinet font-bold text-white">1613</p>
            </div>

            <div className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-satoshi">Blitz</p>
              </div>
              <p className="text-2xl font-cabinet font-bold text-white">1358</p>
            </div>

            <div className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16"/><path d="M8.5 16h7a1 1 0 0 0 .916-.6l1.084-2.4a1 1 0 0 0-.916-1.4H7.416a1 1 0 0 0-.916 1.4l1.084 2.4a1 1 0 0 0 .916.6z"/><path d="M9 6.236a4 4 0 0 1 6 0"/><path d="M12 4v2"/><circle cx="12" cy="4" r="1"/></svg>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-satoshi">Growth</p>
              </div>
              <p className="text-2xl font-cabinet font-bold text-accent">+813</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
