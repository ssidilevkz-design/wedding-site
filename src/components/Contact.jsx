import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      className="py-14 flex justify-center"
      style={{ background: '#FAF6EE' }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative mx-auto flex flex-col items-center" style={{ maxWidth: 460, width: '100%' }}>
        <img
          src="/images/zerkalo.png"
          alt=""
          aria-hidden="true"
          className="w-full select-none pointer-events-none"
          draggable={false}
        />

        {/* Text fits inside the mirror head — handle is ~35% at the bottom */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          style={{ paddingTop: '18%', paddingBottom: '60%', paddingLeft: '28%', paddingRight: '34%' }}
        >
          <p className="font-sans text-charcoal/50 tracking-[0.22em] uppercase mb-4"
            style={{ fontSize: '0.6rem' }}
          >
            Контакт
          </p>

          <p className="font-serif text-charcoal/70 leading-relaxed mb-4"
            style={{ fontSize: 'clamp(0.68rem, 2.65vw, 0.86rem)', fontWeight: 300 }}
          >
            Наш организатор с радостью ответит на все ваши вопросы!
          </p>

          <p className="font-serif text-charcoal/55 leading-relaxed mb-5"
            style={{ fontSize: 'clamp(0.66rem, 2.42vw, 0.83rem)', fontWeight: 300 }}
          >
            Для связи и уточнения деталей:<br />
            <span className="text-charcoal/75">Лана +7 (981) 850-56-76</span>
          </p>

          <a
            href="https://t.me/lana_uniqueyou"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-sans text-charcoal/60 hover:text-gold transition-colors duration-300 border border-gold/40 hover:border-gold px-3 py-2"
            style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            <TelegramIcon />
            Telegram
          </a>
        </div>
      </div>
    </motion.section>
  )
}

function TelegramIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
