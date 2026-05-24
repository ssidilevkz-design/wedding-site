import { motion } from 'framer-motion'

const galleryImages = [
  { src: '/images/villa-02.jpg', alt: 'Парадный зал с хрустальной люстрой' },
  { src: '/images/villa-03.jpg', alt: 'Зал-ротонда с куполом' },
  { src: '/images/villa-01.jpg', alt: 'Номер с балдахином' },
  { src: '/images/villa-04.jpg', alt: 'Свадебный ужин при свечах' },
  { src: '/images/villa-05.jpg', alt: 'Стол с живыми цветами' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const imgVariants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
}

export default function Accommodation() {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center mb-12">
        <h2 className="font-script text-gold mb-2" style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)' }}>
          Проживание
        </h2>
        <p className="font-serif text-charcoal/60 italic text-sm mb-6">
          Вилла Принца — ваш дом на эту ночь
        </p>
        <div className="ornament-divider mb-8"><LeafPairSvg /></div>

        <motion.div
          className="font-serif text-charcoal/80 leading-relaxed space-y-4"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: 300 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p>
            Мы хотим, чтобы этот вечер ощущался как маленькое путешествие —
            с ужином, танцами и атмосферой большого дома.
          </p>
          <p>
            Поэтому для гостей, приезжающих из других городов,
            на вилле будут подготовлены номера.
          </p>
        </motion.div>
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center mt-2">
        <p className="font-serif text-charcoal/50 italic text-sm">
          По вопросам размещения свяжитесь с нами — мы будем рады обо всём позаботиться.
        </p>
      </div>
    </motion.section>
  )
}

function LeafPairSvg() {
  return (
    <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
      <path d="M16 8 C12 2, 2 3, 2 8 C2 13, 12 14, 16 8Z" fill="#8FA68A" opacity="0.5" />
      <path d="M16 8 C20 2, 30 3, 30 8 C30 13, 20 14, 16 8Z" fill="#8FA68A" opacity="0.5" />
    </svg>
  )
}
