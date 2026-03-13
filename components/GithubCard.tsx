import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'

export default function GithubCard() {
  return (
    <a
      href="https://github.com/lazyekansh"
      target="_blank"
      rel="noopener noreferrer"
      className="glass p-0 rounded-2xl h-full flex flex-col relative overflow-hidden group cursor-pointer border border-white/5 hover:border-primary/30 transition-all"
    >
      <div className="p-5 pb-2 flex justify-between items-start z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FaGithub className="text-white text-lg" />
            <span className="font-bold text-white text-sm">Contributions</span>
          </div>
          <p className="text-[10px] text-secondary uppercase tracking-wider">Live commit graph</p>
        </div>
        <div className="text-right">
          <div className="text-primary font-mono font-bold text-sm animate-pulse">● Active</div>
          <p className="text-[10px] text-secondary uppercase mt-0.5">@lazyekansh</p>
        </div>
      </div>

      <div className="flex-1 w-full bg-[#0d1117] flex items-center justify-center overflow-hidden min-h-[110px] relative">
        <Image
          src="https://raw.githubusercontent.com/lazyekansh/lazyekansh/output/github-contribution-grid-snake.svg"
          alt="Github contribution snake"
          fill
          className="object-cover object-left opacity-75 group-hover:opacity-100 transition-opacity"
          unoptimized
        />
      </div>
    </a>
  )
}
