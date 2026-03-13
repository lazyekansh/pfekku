export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-zinc-500 font-satoshi">
            <span className="text-white font-semibold">lazyekansh</span> · Noida, India
          </span>
        </div>
        <p className="text-xs text-zinc-700 font-satoshi">
          Built with Next.js · © {new Date().getFullYear()} Ekansh Tiwari
        </p>
      </div>
    </footer>
  )
}
