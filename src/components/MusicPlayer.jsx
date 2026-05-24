import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [showLabel, setShowLabel] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = new Audio('/music/bri.m4a')
    audio.loop = true
    audio.volume = 0.35
    audioRef.current = audio

    audio.addEventListener('canplaythrough', () => {
      setLoaded(true)
      audio.play().then(() => setPlaying(true)).catch(() => {})
    })

    const t = setTimeout(() => setShowLabel(false), 5000)
    return () => {
      clearTimeout(t)
      audio.pause()
      audio.src = ''
    }
  }, [])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    setShowLabel(false)
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().catch(() => {})
      setPlaying(true)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <AnimatePresence>
        {showLabel && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: [0, 1, 1, 0.7, 1], x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 1.2 }}
            className="font-sans text-gold text-xs tracking-widest uppercase bg-cream border border-gold/30 px-3 py-1.5 rounded-sm shadow-sm"
          >
            ♪ Музыка
          </motion.span>
        )}
      </AnimatePresence>

      <button
        onClick={toggle}
        className="w-12 h-12 rounded-full bg-cream border border-gold/40 shadow-gold-sm flex items-center justify-center transition-all duration-300 hover:border-gold hover:shadow-md"
        aria-label={playing ? 'Выключить музыку' : 'Включить музыку'}
        title={playing ? 'Выключить музыку' : 'Включить музыку'}
      >
        {playing ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          >
            <MusicNoteIcon />
          </motion.div>
        ) : (
          <div className="relative">
            <MusicNoteIcon muted />
          </div>
        )}
      </button>
    </div>
  )
}

function MusicNoteIcon({ muted }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M7 14 L7 5 L14 3 L14 12"
        stroke={muted ? '#C8A96A60' : '#C8A96A'}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="5.5" cy="14" r="2" stroke={muted ? '#C8A96A60' : '#C8A96A'} strokeWidth="1.2" fill="none" />
      <circle cx="12.5" cy="12" r="2" stroke={muted ? '#C8A96A60' : '#C8A96A'} strokeWidth="1.2" fill="none" />
      {muted && (
        <path d="M2 2 L16 16" stroke="#C8A96A60" strokeWidth="1" strokeLinecap="round" />
      )}
    </svg>
  )
}
