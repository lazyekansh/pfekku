'use client'

import { SKILLS } from '@/lib/data'

export default function TechMarquee() {
  const doubled = [...SKILLS, ...SKILLS]

  return (
    <div className="py-8 overflow-hidden relative border-y border-white/5 my-6">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{
          animation: 'marquee 25s linear infinite',
        }}
      >
        {doubled.map((skill, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <span className="text-sm font-semibold text-secondary hover:text-white transition-colors cursor-default">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
