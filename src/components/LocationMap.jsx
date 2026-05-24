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
            href="https://villaduprince.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-charcoal/50 hover:text-gold transition-colors duration-300"
            style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            <span style={{ display: 'inline-block', width: 28, height: 1, background: 'currentColor', opacity: 0.5 }} />
            villaduprince.ru
            <span style={{ display: 'inline-block', width: 28, height: 1, background: 'currentColor', opacity: 0.5 }} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
