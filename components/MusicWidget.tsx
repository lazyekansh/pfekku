'use client'

import { useState, useRef, useEffect } from 'react'
import { FaPlay, FaPause, FaMusic } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'
import { PLAYLIST } from '@/lib/data'

export default function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(PLAYLIST[0])
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const hour = new Date().getHours()
    const index = Math.floor(hour / (24 / PLAYLIST.length)) % PLAYLIST.length
    setCurrentSong(PLAYLIST[index])
  }, [])

  const togglePlay = () => {
    if (!iframeRef.current) return
    const command = isPlaying ? 'pauseVideo' : 'playVideo'
    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: command, args: [] }),
      '*'
    )
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="glass h-full rounded-2xl p-5 relative overflow-hidden group border border-white/10 hover:border-primary/30 transition-all">
      <iframe
        ref={iframeRef}
        className="hidden"
        src={`https://www.youtube.com/embed/${currentSong.videoId}?enablejsapi=1&autoplay=0&controls=0`}
        title="Music"
        allow="autoplay; encrypted-media"
      />

      <div className="relative z-10 flex flex-col h-full justify-between gap-4">
        <div className="flex justify-between items-start">
          <div className="bg-primary/10 p-2 rounded-lg text-primary animate-pulse">
            <FaMusic size={18} />
          </div>
          {isPlaying && (
            <div className="flex gap-[3px] items-end h-5">
              <span className="w-1 bg-primary rounded-full music-bar" style={{ height: '8px' }} />
              <span className="w-1 bg-primary rounded-full music-bar" style={{ height: '14px' }} />
              <span className="w-1 bg-primary rounded-full music-bar" style={{ height: '6px' }} />
            </div>
          )}
        </div>

        <div>
          <span className="text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Now Playing
          </span>
          <h3 className="text-base font-bold text-white mt-2 truncate">{currentSong.title}</h3>
          <p className="text-secondary text-sm truncate">{currentSong.artist}</p>

          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 hover:bg-primary transition-all"
            >
              {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} className="ml-0.5" />}
            </button>
            <a
              href={`https://youtu.be/${currentSong.videoId}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-secondary hover:text-white flex items-center gap-1 transition-colors"
            >
              Open <BiLinkExternal />
            </a>
          </div>
        </div>
      </div>

      {/* Vibe gradient */}
      <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-pink-500/20 blur-3xl rounded-full group-hover:bg-pink-500/30 transition-colors pointer-events-none" />
    </div>
  )
}
