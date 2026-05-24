import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [isNight, setIsNight] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsNight(true), 3000)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FAF6EE]">

      {/* Images — natural proportions, anchored to bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/images/day_new.png"
          alt=""
          aria-hidden="true"
          className="w-full block pointer-events-none select-none"
        />
        <motion.img
          src="/images/night_new.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full block pointer-events-none select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isNight ? 1 : 0 }}
          transition={{ duration: 5, ease: 'easeInOut' }}
        />
      </div>

      {/* Text — top of section */}
      <motion.div
        className="absolute left-0 right-0 flex flex-col items-center text-center px-4 z-10"
        style={{ top: '25%', transform: 'translateY(-50%)' }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="relative inline-block px-5 py-4 sm:px-16 sm:py-8">
          {/* Baroque cartouche frame */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 300 160"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Fill */}
            <motion.path
              d="M50,8 Q150,0 250,8 C252,22 296,24 296,38 Q305,80 296,122 C296,136 252,138 250,152 Q150,160 50,152 C48,138 4,136 4,122 Q-5,80 4,38 C4,24 48,22 50,8Z"
              animate={{ fill: isNight ? 'rgba(15,12,10,0.32)' : 'rgba(250,246,238,0.88)' }}
              transition={{ duration: 4, ease: 'easeInOut' }}
            />
            {/* Outer border */}
            <motion.path
              d="M50,8 Q150,0 250,8 C252,22 296,24 296,38 Q305,80 296,122 C296,136 252,138 250,152 Q150,160 50,152 C48,138 4,136 4,122 Q-5,80 4,38 C4,24 48,22 50,8Z"
              fill="none"
              strokeWidth="1.8"
              animate={{ stroke: isNight ? 'rgba(200,169,106,0.55)' : 'rgba(200,169,106,0.85)' }}
              transition={{ duration: 4 }}
            />
            {/* Inner border */}
            <motion.path
              d="M57,14 Q150,7 243,14 C245,26 288,28 288,41 Q296,80 288,119 C288,132 245,134 243,146 Q150,153 57,146 C55,134 12,132 12,119 Q4,80 12,41 C12,28 55,26 57,14Z"
              fill="none"
              strokeWidth="0.7"
              animate={{ stroke: isNight ? 'rgba(200,169,106,0.3)' : 'rgba(200,169,106,0.55)' }}
              transition={{ duration: 4 }}
            />
          </svg>

          <div className="relative z-10 text-center">
            <motion.p
              className="font-sans tracking-[0.35em] uppercase mb-3"
              style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.8rem)' }}
              animate={{ color: isNight ? 'rgba(255,255,255,0.7)' : 'rgba(58,53,48,0.5)' }}
              transition={{ duration: 4, ease: 'easeInOut' }}
            >
              27 июня · 2026 · Санкт-Петербург
            </motion.p>

            <motion.h1
              className="font-script leading-none"
              style={{ fontSize: 'clamp(2rem, 8vw, 8rem)' }}
              animate={{ color: isNight ? '#FFFFFF' : '#C8A96A' }}
              transition={{ duration: 4, ease: 'easeInOut' }}
            >
              Алёна & Сергей
            </motion.h1>
          </div>
        </div>
      </motion.div>

      {/* Day/Night toggle */}
      <motion.button
        onClick={() => setIsNight(n => !n)}
        aria-label={isNight ? 'Переключить на день' : 'Переключить на ночь'}
        className="absolute top-6 right-6 z-30 flex items-center gap-0 rounded-full px-1.5 py-1.5 cursor-pointer"
        style={{ background: '#E8DED0', width: 76, height: 38 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.span
          className="absolute rounded-full bg-white shadow-sm"
          style={{ width: 30, height: 30, top: 4 }}
          animate={{ left: isNight ? 38 : 6 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
        <span className="relative z-10 flex items-center justify-center" style={{ width: 32, height: 30 }}>
          <SunIcon active={!isNight} />
        </span>
        <span className="relative z-10 flex items-center justify-center" style={{ width: 32, height: 30 }}>
          <MoonIcon active={isNight} />
        </span>
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 0 L8 20 M2 14 L8 20 L14 14" stroke="#C8A96A" strokeWidth="1" strokeOpacity="0.6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

function SunIcon({ active }) {
  const color = active ? '#C8A96A' : '#C8A96A60'
  return (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="3.5" stroke={color} strokeWidth="1.3" />
      <path d="M9 1.5V3M9 15v1.5M1.5 9H3M15 9h1.5M3.7 3.7l1.06 1.06M13.24 13.24l1.06 1.06M14.3 3.7l-1.06 1.06M4.76 13.24l-1.06 1.06"
        stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function MoonIcon({ active }) {
  const color = active ? '#C8A96A' : '#C8A96A60'
  return (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
      <path d="M14.5 10.5A6 6 0 0 1 7.5 3.5a6 6 0 1 0 7 7z"
        stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
