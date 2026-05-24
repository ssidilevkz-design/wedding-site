import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function OurPhoto() {
  const videoRef = useRef(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {})
        else el.pause()
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.section
      className="py-20"
      style={{ background: '#FAF6EE' }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-wrapper text-center">
        <h2 className="font-script text-gold mb-2" style={{ fontSize: 'clamp(1.8rem, 7vw, 4rem)' }}>
          Алёна & Сергей
        </h2>
        <div className="ornament-divider mb-10"><HeartSvg /></div>

        {/* Photo frame */}
        <motion.div
          className="relative max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Video behind frame */}
          <video
            ref={videoRef}
            src="/video/pariswed.mov"
            className="absolute z-0"
            style={{
              top: '7%', left: '9%',
              width: '82%', height: '86%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            muted
            loop
            playsInline
          />
          {/* ram.png frame overlay */}
          <img
            src="/images/ram2.png"
            alt=""
            className="relative z-10 w-full block pointer-events-none select-none"
          />
        </motion.div>

        {/* Caption */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-serif text-charcoal/70 italic" style={{ fontSize: '1.1rem', fontWeight: 300 }}>
            Наша история продолжается...
          </p>
          <p className="font-serif text-charcoal/50 text-sm mt-2">
            И мы будем счастливы разделить этот день с вами.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

function HeartSvg() {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
      <path
        d="M10 16 C10 16 1 10 1 5 C1 2.8 2.8 1 5 1 C7 1 9 2.5 10 4 C11 2.5 13 1 15 1 C17.2 1 19 2.8 19 5 C19 10 10 16 10 16Z"
        stroke="#C9A4A0"
        strokeWidth="1"
        fill="rgba(201,164,160,0.2)"
      />
    </svg>
  )
}

function CornerOrnament({ className, rotate }) {
  return (
    <div className={className} style={{ transform: `rotate(${rotate}deg)` }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1 1 L1 6 M1 1 L6 1" stroke="#F5EDDF" strokeWidth="1.2" />
      </svg>
    </div>
  )
}
