import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [isNight, setIsNight] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsNight(true), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FAF6EE]">

      {/* Images — natural proportions, anchored to bottom */}
      <div className="absolute inset-0">
        <img
          src="/images/day_new.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top pointer-events-none select-none"
        />
        <motion.img
          src="/images/night_new.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isNight ? 1 : 0 }}
          transition={{ duration: 5, ease: 'easeInOut' }}
        />

        {/* Day/Night toggle — top-right corner of the image */}
        <motion.button
          onClick={() => setIsNight(n => !n)}
          aria-label={isNight ? 'Переключить на день' : 'Переключить на ночь'}
          className="absolute top-4 right-4 z-30 flex items-center gap-0 rounded-full px-1.5 py-1.5 cursor-pointer"
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
      </div>

      {/* Text — top of section */}
      <motion.div
        className="absolute left-0 right-0 flex flex-col items-center text-center px-4 z-10"
        style={{ top: '25%', transform: 'translateY(-50%)' }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="text-center">
            <motion.p
              className="font-sans tracking-[0.35em] uppercase mb-3"
              style={{ fontSize: 'clamp(0.78rem, 2vw, 1.05rem)' }}
              animate={{ color: isNight ? 'rgba(255,255,255,0.7)' : 'rgba(58,53,48,0.5)' }}
              transition={{ duration: 4, ease: 'easeInOut' }}
            >
              27 июня · 2026 · Санкт-Петербург
            </motion.p>

            <motion.h1
              className="font-script leading-none"
              style={{ fontSize: 'clamp(2.6rem, 10.4vw, 10.4rem)' }}
              animate={{ color: isNight ? '#FFFFFF' : '#C8A96A' }}
              transition={{ duration: 4, ease: 'easeInOut' }}
            >
              Алёна & Сергей
            </motion.h1>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
            <path d="M14 0 L14 28 M3 20 L14 31 L25 20" stroke="#C8A96A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
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
