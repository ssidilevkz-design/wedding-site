import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SEGMENTS = [
  {
    text: 'Дорогой читатель\n',
    className: 'font-script text-gold block',
    style: { fontSize: 'clamp(0.72rem, 4.5vw, 3.5rem)', lineHeight: 1.0 },
  },
  {
    text: 'стало известно, что в этом сезоне состоится долгожданное событие!\n\n',
    className: 'font-serif text-charcoal/65 block italic',
    style: { fontSize: 'clamp(0.6rem, 3.2vw, 1.6rem)', fontWeight: 300, lineHeight: 1.3 },
  },
  {
    text: 'свадьба Алёны и Сергея\n\n',
    className: 'font-script text-gold block',
    style: { fontSize: 'clamp(0.72rem, 3.8vw, 3.0rem)', lineHeight: 1.0 },
  },
  {
    text: 'и, разумеется, без вас этот день не будет таким особенным!\nОни с нетерпением будут ждать вас на своем празднике!',
    className: 'font-serif text-charcoal/65 block italic',
    style: { fontSize: 'clamp(0.6rem, 3.2vw, 1.6rem)', fontWeight: 300, lineHeight: 1.3 },
  },
]

const SEG_OFFSETS = SEGMENTS.reduce((acc, seg, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SEGMENTS[i - 1].text.length)
  return acc
}, [])
const TOTAL_CHARS = SEGMENTS.reduce((s, seg) => s + seg.text.length, 0)

// Duration of in.mp3 part inside combined.m4a
const INTRO_DURATION = 18.6

export default function EnvelopeScreen({ onOpen, audioRef }) {
  const [phase, setPhase] = useState('idle')
  const [showHint, setShowHint] = useState(false)
  const [revealedCount, setRevealedCount] = useState(0)
  const videoRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 2000)
    return () => {
      clearTimeout(t)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  function startReveal() {
    const audio = audioRef.current
    if (!audio) return
    function tick() {
      const progress = Math.min(audio.currentTime / INTRO_DURATION, 1)
      setRevealedCount(Math.floor(progress * TOTAL_CHARS))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  function handleClick() {
    if (phase !== 'idle') return
    setPhase('video')
    setTimeout(() => videoRef.current?.play(), 300)
  }

  function handleVideoEnd() {
    setPhase('end')
    setTimeout(() => {
      const audio = audioRef.current
      if (!audio) return
      audio.play().catch(() => {})

      function handleTimeUpdate() {
        if (audio.currentTime >= INTRO_DURATION) {
          audio.removeEventListener('timeupdate', handleTimeUpdate)
          setRevealedCount(TOTAL_CHARS)
          setTimeout(onOpen, 1000)
        }
      }
      audio.addEventListener('timeupdate', handleTimeUpdate)

      startReveal()
    }, 600)
  }

  return (
    <motion.div
      className="fixed inset-0 bg-[#FAF6EE]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Closed envelope */}
      <AnimatePresence>
        {phase === 'idle' && (
          <motion.img
            key="mail-closed"
            src="/images/mail.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center cursor-pointer"
            onClick={handleClick}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      {/* Opening video */}
      <video
        ref={videoRef}
        src="/video/newvideo.mp4"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          opacity: phase === 'video' ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
        }}
        playsInline
        onEnded={handleVideoEnd}
      />

      {/* End frame + text */}
      <AnimatePresence>
        {phase === 'end' && (
          <motion.div
            key="end-frame"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <img
              src="/images/mail_end.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
              draggable={false}
            />

            {/* Text overlay positioned inside the letter's blank area */}
            <div className="absolute inset-0 flex justify-center pt-[52vh] sm:pt-[54vh]">
              <div
                className="text-center"
                style={{ width: 'min(420px, 43vw)', marginLeft: '4vw' }}
              >
                <SyncedText revealedCount={revealedCount} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint */}
      <AnimatePresence>
        {showHint && phase === 'idle' && (
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none" style={{ paddingBottom: '50%' }}>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: [0, 1, 0.6, 1], y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="font-sans tracking-[0.25em] uppercase whitespace-nowrap"
              style={{ color: '#C8A96A', fontSize: 'clamp(0.75rem, 4vw, 2.2rem)' }}
            >
              Нажмите, чтобы открыть
            </motion.p>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function SyncedText({ revealedCount }) {
  return (
    <>
      {SEGMENTS.map((seg, si) => {
        const segStart = SEG_OFFSETS[si]
        return (
          <span key={si} className={seg.className} style={seg.style}>
            {seg.text.split('').map((char, ci) => {
              const visible = segStart + ci < revealedCount
              return (
                <span
                  key={ci}
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: visible ? 'opacity 0.4s ease' : 'none',
                    display: char === '\n' ? 'block' : 'inline',
                    height: char === '\n' ? (seg.text[ci - 1] === '\n' ? '0.25em' : '0') : 'auto',
                  }}
                >
                  {char !== '\n' ? char : ''}
                </span>
              )
            })}
          </span>
        )
      })}
    </>
  )
}
