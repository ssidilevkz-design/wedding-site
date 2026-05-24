import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { googleCalendarUrl, appleCalendarUrl } from '../utils/calendarLinks'

export default function TheDetails() {
  const [calOpen, setCalOpen] = useState(false)

  return (
    <motion.section
      className="relative py-20 overflow-hidden"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative section-wrapper text-center">
        <motion.img
          src="/images/dog.png"
          alt=""
          aria-hidden="true"
          className="mx-auto mb-3 select-none"
          style={{ width: 'clamp(100px, 18vw, 160px)' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <h2 className="font-script text-gold mb-2" style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)' }}>
          Место и время
        </h2>
        <div className="ornament-divider"><LocationPin /></div>

        {/* Venue card */}
        <motion.div
          className="parchment-card rounded-sm px-8 py-8 mb-8 text-left sm:text-center"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="font-sans text-gold text-xs tracking-[0.25em] uppercase mb-3">Локация</p>
          <h3 className="font-serif text-charcoal mb-1" style={{ fontSize: 'clamp(1.4rem, 4vw, 1.9rem)', fontWeight: 400 }}>
            Вилла Принца
          </h3>
          <p className="font-sans text-charcoal/60 text-sm tracking-wide italic mb-1">
            Villa du Prince · Бутик-отель 1830 года
          </p>
          <p className="font-serif text-charcoal/70 text-base mb-4">
            Каменный остров, Санкт-Петербург
          </p>

          <div className="ornament-divider opacity-50 my-4" />

          <p className="font-sans text-charcoal/70 text-sm tracking-[0.15em] uppercase">
            Сбор гостей с{' '}
            <span className="font-serif text-gold text-lg italic normal-case" style={{ fontWeight: 400 }}>
              16:00
            </span>
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <a
            href="https://yandex.com/maps/-/CPSeQXYV"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center justify-center gap-2"
            style={{ background: 'rgba(200,169,106,0.12)', border: '1px solid rgba(200,169,106,0.5)' }}
          >
            <MapIcon />
            Открыть на Яндекс Картах
          </a>

          <div className="relative">
            <button
              className="btn-gold w-full flex items-center justify-center gap-2"
              style={{ background: 'rgba(200,169,106,0.12)', border: '1px solid rgba(200,169,106,0.5)' }}
              onClick={() => setCalOpen(v => !v)}
            >
              <CalIcon />
              Добавить в календарь
              <span className="text-gold/60" style={{ fontSize: 10 }}>▾</span>
            </button>

            <AnimatePresence>
              {calOpen && (
                <motion.div
                  className="absolute left-0 right-0 top-full mt-1 parchment-card rounded-sm overflow-hidden z-20"
                  initial={{ opacity: 0, y: -8, scaleY: 0.9 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1 }}
                  exit={{ opacity: 0, y: -8, scaleY: 0.9 }}
                  style={{ transformOrigin: 'top' }}
                >
                  <a
                    href={googleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 font-sans text-xs tracking-widest uppercase text-charcoal hover:bg-gold/10 transition-colors border-b border-gold/20"
                    onClick={() => setCalOpen(false)}
                  >
                    Google Calendar
                  </a>
                  <a
                    href={appleCalendarUrl()}
                    download="wedding-sergey-alena.ics"
                    className="block px-5 py-3 font-sans text-xs tracking-widest uppercase text-charcoal hover:bg-gold/10 transition-colors"
                    onClick={() => setCalOpen(false)}
                  >
                    Apple Calendar
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

function LocationPin() {
  return (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
      <path d="M9 1C5.13 1 2 4.13 2 8c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#C8A96A" strokeWidth="1.2" fill="rgba(200,169,106,0.15)" />
      <circle cx="9" cy="8" r="2.5" stroke="#C8A96A" strokeWidth="1" fill="none" />
    </svg>
  )
}

function MapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1C4.79 1 3 2.79 3 5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4z" stroke="currentColor" strokeWidth="1" />
      <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function CalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="2" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1" />
      <path d="M1 5h12" stroke="currentColor" strokeWidth="1" />
      <path d="M4 1v2M10 1v2" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
