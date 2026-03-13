import { Zap, Sun, Rocket, Trophy } from 'lucide-react'
import { CHESS_STATS } from '@/lib/data'

const stats = [
  { label: 'Rapid', value: CHESS_STATS.rapid, icon: Zap, color: 'text-yellow-400' },
  { label: 'Blitz', value: CHESS_STATS.blitz, icon: Zap, color: 'text-orange-400' },
  { label: 'Daily', value: CHESS_STATS.daily, icon: Sun, color: 'text-blue-400' },
  { label: 'Bullet', value: CHESS_STATS.bullet, icon: Rocket, color: 'text-red-400' },
]

export default function ChessWidget() {
  return (
    <div className="glass p-5 rounded-2xl h-full flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-bl-full blur-2xl group-hover:bg-green-500/20 transition-all pointer-events-none" />

      <div className="flex items-center gap-2 mb-4 z-10">
        <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
          <Trophy size={18} />
        </div>
        <div>
          <h3 className="font-bold text-sm text-white">Chess.com</h3>
          <p className="text-[10px] text-secondary">@lazyekansh</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 z-10">
        {stats.map((s) => (
          <div key={s.label} className="bg-black/40 p-3 rounded-xl border border-white/5 text-center">
            <div className={`text-[10px] ${s.color} flex items-center justify-center gap-1 mb-1 uppercase tracking-wide`}>
              <s.icon size={9} /> {s.label}
            </div>
            <div className="font-mono font-bold text-lg text-white">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
