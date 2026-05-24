import { motion } from 'framer-motion'
import { CartoucheCard } from './CartoucheCard'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
}

export default function DressCode() {
  return (
    <motion.section
      className="py-14"
      style={{ background: '#FAF6EE' }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="font-script text-gold mb-2" style={{ fontSize: 'clamp(1.8rem, 7vw, 4rem)' }}>
          Убранство гостей
        </h2>
        <p className="font-sans text-charcoal/50 tracking-[0.22em] uppercase text-xs mb-10">
          Вечер в стиле Бриджертонов на Вилле Принца
        </p>

        {/* Illustration overflowing into card */}
        <div className="relative">
          {/* Image — sits above card, overflows into it */}
          <motion.img
            src="/images/dresscode.png"
            alt="Dress code illustration"
            className="relative z-10 w-full block"
            style={{ marginBottom: '-12px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
          <CartoucheCard className="px-12 pb-14 sm:px-14 sm:pb-12 text-center" style={{ paddingTop: '2rem' }}>
            <div>
              {/* Two text blocks */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Ladies */}
                <motion.div variants={itemVariants} className="text-center">
                  <p className="font-sans text-gold text-xs tracking-[0.25em] uppercase mb-3">Дамы</p>
                  <p className="font-serif text-charcoal/75 leading-relaxed" style={{ fontSize: 'clamp(0.8rem, 2.8vw, 0.97rem)', fontWeight: 300 }}>
                    Элегантные вечерние наряды в пастельных оттенках, струящиеся силуэты, летящие ткани и утончённые детали, подчёркивающие лёгкость и эстетику вечера.
                  </p>
                </motion.div>

                {/* Gentlemen */}
                <motion.div variants={itemVariants} className="text-center">
                  <p className="font-sans text-gold text-xs tracking-[0.25em] uppercase mb-3">Кавалеры</p>
                  <p className="font-serif text-charcoal/75 leading-relaxed" style={{ fontSize: 'clamp(0.8rem, 2.8vw, 0.97rem)', fontWeight: 300 }}>
                    Классические чёрные костюмы или смокинги. Также будет уместно сочетание белой рубашки с чёрными брюками — элегантно, сдержанно и в стилистике вечера.
                  </p>
                </motion.div>
              </motion.div>

              {/* Divider */}
              <div className="ornament-divider opacity-40 mb-6"><DiamondSvg /></div>

              {/* Tux rental note */}
              <motion.p
                className="font-serif text-charcoal/55 italic leading-relaxed"
                style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)', fontWeight: 300 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Если вы давно мечтали почувствовать себя настоящим джентльменом — смокинг можно взять в аренду в Санкт-Петербурге.{' '}
                <a
                  href="https://platinium.spb.ru/catalog?tfc_storepartuid%5B580263287%5D=2.+%D0%A1%D0%BC%D0%BE%D0%BA%D0%B8%D0%BD%D0%B3%D0%B8+%D0%B8+%D0%A4%D1%80%D0%B0%D0%BA%D0%B8&tfc_div=:::"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold/80 underline underline-offset-4 decoration-gold/40 hover:text-gold transition-colors duration-200 not-italic"
                >
                  Рекомендуем Platinium
                </a>
              </motion.p>
            </div>
          </CartoucheCard>
          </motion.div>
        </div>

      </div>
    </motion.section>
  )
}

function DiamondSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <polygon points="8,1 15,8 8,15 1,8" stroke="#C8A96A" strokeWidth="1" fill="rgba(200,169,106,0.2)" />
    </svg>
  )
}
