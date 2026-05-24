import { motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'

const TARGET = '2026-06-27T16:00:00+03:00'

const units = [
  { key: 'days',    label: 'дней' },
  { key: 'hours',   label: 'часов' },
  { key: 'minutes', label: 'минут' },
  { key: 'seconds', label: 'секунд' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Countdown() {
  const timeLeft = useCountdown(TARGET)

  return (
    <motion.section
      className="py-20"
      style={{ background: '#FAF6EE' }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
    >
    <div className="max-w-2xl mx-auto px-6 text-center">
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
<h2 className="font-script text-gold mb-10" style={{ fontSize: 'clamp(1.8rem, 7vw, 4rem)' }}>
        До самого особенного дня
      </h2>

      <motion.div
        className="grid grid-cols-4 gap-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {units.map(({ key, label }) => (
          <motion.div key={key} variants={cardVariants} className="flex flex-col items-center text-center py-4">
            <span
              className="font-serif text-charcoal tabular-nums leading-none"
              style={{ fontSize: 'clamp(1.8rem, 8vw, 4.2rem)', fontWeight: 300 }}
            >
              {String(timeLeft[key]).padStart(2, '0')}
            </span>
            <span className="font-sans text-gold/70 text-xs tracking-[0.2em] uppercase mt-2">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="ornament-divider mt-10"
        initial={{ opacity: 0, scaleX: 0.3 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3" fill="#C8A96A" opacity="0.6" /><circle cx="10" cy="10" r="7" fill="none" stroke="#C8A96A" strokeWidth="0.7" opacity="0.4" /></svg>
      </motion.div>
    </div>
    </motion.section>
  )
}
