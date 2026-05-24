import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import EnvelopeScreen from './components/EnvelopeScreen'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import LocationMap from './components/LocationMap'
import OrderOfTheDay from './components/OrderOfTheDay'
import DressCode from './components/DressCode'
import Accommodation from './components/Accommodation'
import OurPhoto from './components/OurPhoto'
import RSVP from './components/RSVP'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false)

  return (
    <>
      <AnimatePresence mode="wait">
        {!envelopeOpen ? (
          <EnvelopeScreen key="envelope" onOpen={() => setEnvelopeOpen(true)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Hero />
            <Countdown />
            <LocationMap />
            <OrderOfTheDay />
            <DressCode />
            <Accommodation />
            <RSVP />
            <OurPhoto />
            <Footer />
            <MusicPlayer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Footer() {
  return (
    <footer className="text-center py-12 px-6" style={{ background: '#FAF6EE' }}>
      <div className="ornament-divider mb-8 max-w-xs mx-auto opacity-60" />
      <p className="font-script text-gold mb-1" style={{ fontSize: '2rem' }}>
        Алёна & Сергей
      </p>
      <p className="font-sans text-charcoal/40 text-xs tracking-[0.2em] uppercase">
        27 · 06 · 2026 · Санкт-Петербург
      </p>
      <p className="font-serif text-charcoal/30 italic text-xs mt-4">
        Вилла Принца · Каменный остров
      </p>
    </footer>
  )
}
