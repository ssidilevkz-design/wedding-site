import { motion } from 'framer-motion'

export default function LocationMap() {
  return (
    <motion.section
      className="py-14"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-wrapper">
        <motion.img
          src="/images/location1.png"
          alt="Карта локации"
          className="w-full"
          style={{ maxWidth: '640px', margin: '0 auto', display: 'block', mixBlendMode: 'multiply' }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />

        <motion.div
          className="text-center mt-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="https://yandex.ru/maps/-/CPD4aDKH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-charcoal/70 hover:text-gold transition-colors duration-300 border border-gold/40 hover:border-gold px-5 py-2.5"
            style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
              <path d="M6 0C3.24 0 1 2.24 1 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" opacity="0.7"/>
            </svg>
            Открыть на карте
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
