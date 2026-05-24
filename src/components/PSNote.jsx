import { motion } from 'framer-motion'

export default function PSNote() {
  return (
    <motion.section
      className="py-14"
      style={{ background: '#FAF6EE' }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-wrapper text-center">
        <h2 className="font-script text-gold mb-6" style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}>
          P.S.
        </h2>
        <p
          className="font-serif text-charcoal/70 italic leading-relaxed mx-auto"
          style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', fontWeight: 300, maxWidth: '480px' }}
        >
          Мы долго искали образ, который передаёт настроение нашей свадьбы, и нашли его в Бриджертонах.
          Если хотите заранее погрузиться в атмосферу вечера — посмотрите хотя бы одну серию.
          Это будет ваша лучшая подготовка.
        </p>
      </div>
    </motion.section>
  )
}
