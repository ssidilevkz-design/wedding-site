import { motion } from 'framer-motion'

const events = [
  { time: '15:00',        title: 'Заселение на Виллу Принца', sub: 'Check-in'       },
  { time: '16:00',        title: 'Welcome & сбор гостей',     sub: 'Welcome Drinks' },
  { time: '16:30',        title: 'Церемония',                 sub: 'Ceremony'       },
  { time: '17:30',        title: 'Свадебный ужин',            sub: 'Dinner'         },
  { time: '23:00',        title: 'After Party',               sub: 'After Party'    },
]

export default function OrderOfTheDay() {
  return (
    <motion.section
      className="section-wrapper py-20"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="text-center mb-14">
        <motion.img
          src="/images/we.png"
          alt=""
          aria-hidden="true"
          className="mx-auto mb-3 select-none"
          style={{
            width: 'clamp(110px, 18vw, 160px)',
            mixBlendMode: 'multiply',
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <h2 className="font-script text-gold" style={{ fontSize: 'clamp(1.8rem, 7vw, 4rem)' }}>
          Программа вечера
        </h2>
      </div>

      {/* Vertical timeline — centered */}
      <div className="flex flex-col items-center">
        {events.map((evt, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            {/* Time */}
            <p
              className="font-sans text-charcoal/50 tracking-[0.2em]"
              style={{ fontSize: '0.75rem' }}
            >
              {evt.time}
            </p>

            {/* Title */}
            <p
              className="font-serif text-gold mt-1"
              style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: 400 }}
            >
              {evt.title}
            </p>

            {/* Connector line — except after last item */}
            {i < events.length - 1 && (
              <div className="w-px bg-gold/30 my-5" style={{ height: '48px' }} />
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
