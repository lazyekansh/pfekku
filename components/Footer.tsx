import { USER } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-secondary">
            <span className="text-white font-semibold">{USER.handle}</span> · {USER.location}
          </span>
        </div>
        <p className="text-xs text-secondary/60">
          Built with Next.js · © {new Date().getFullYear()} Ekansh Tiwari
        </p>
      </div>
    </footer>
  )
}
