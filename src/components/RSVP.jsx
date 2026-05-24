import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkoevnvk'

const drinkOptions = ['Вино', 'Шампанское', 'Крепкий алкоголь', 'Безалкогольное', 'Другое']

const initialForm = {
  name: '',
  drinks: [],
  allergies: '',
  children: '',
  comment: '',
}

export default function RSVP() {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function handleDrink(drink) {
    setForm(f => ({
      ...f,
      drinks: f.drinks.includes(drink)
        ? f.drinks.filter(d => d !== drink)
        : [...f.drinks, drink],
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(false)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, drinks: form.drinks.join(', ') }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <motion.section
      className="py-14"
      style={{ background: '#FAF6EE' }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-wrapper">
        <div className="text-center mb-10">
          <h2 className="font-script text-gold" style={{ fontSize: 'clamp(1.8rem, 7vw, 4rem)' }}>
            Подтверждение участия
          </h2>
          <p className="font-serif text-charcoal/55 italic text-sm mt-2">
            Пожалуйста, ответьте до 30 мая 2026
          </p>
          <div className="ornament-divider mt-6"><EnvelopeSmall /></div>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6">
                <svg width="56" height="56" viewBox="0 0 56 56" className="mx-auto">
                  <circle cx="28" cy="28" r="26" stroke="#C8A96A" strokeWidth="1" fill="rgba(200,169,106,0.08)" />
                  <path d="M17 28 L24 35 L39 20" stroke="#C8A96A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-script text-gold mb-3" style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)' }}>
                Спасибо!
              </p>
              <p className="font-serif text-charcoal/70 italic" style={{ fontSize: '1.05rem', fontWeight: 300 }}>
                Мы получили ваш ответ и уже очень ждём встречи.
              </p>
              <p className="font-serif text-charcoal/45 text-sm mt-2">
                До встречи на Вилле Принца — 27 июня.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="px-5 py-8 sm:px-10 sm:py-10 space-y-6"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              style={{
                background: 'rgba(245,237,223,0.96)',
                border: '1.5px solid rgba(200,169,106,0.75)',
                boxShadow: 'inset 0 0 0 5px rgba(250,246,238,0.9), inset 0 0 0 6.5px rgba(200,169,106,0.4)',
              }}
            >
              {/* Name */}
              <Field label="Ваше имя">
                <input
                  className="input-elegant"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Имя и фамилия"
                  required
                />
              </Field>

              {/* Drinks */}
              <Field label="Ваши предпочтения в напитках">
                <div className="flex flex-wrap gap-2 mt-2">
                  {drinkOptions.map(drink => (
                    <button
                      type="button"
                      key={drink}
                      onClick={() => handleDrink(drink)}
                      className={`px-4 py-2 font-sans text-xs tracking-widest uppercase border transition-all duration-200 ${
                        form.drinks.includes(drink)
                          ? 'bg-gold/15 border-gold text-charcoal'
                          : 'border-gold/30 text-charcoal/55 hover:border-gold/50'
                      }`}
                    >
                      {drink}
                    </button>
                  ))}
                </div>
              </Field>

              {/* Allergies */}
              <Field label="Есть ли аллергии или особенности питания?">
                <input
                  className="input-elegant"
                  type="text"
                  name="allergies"
                  value={form.allergies}
                  onChange={handleChange}
                  placeholder="Если есть — расскажите"
                />
              </Field>

              {/* Children */}
              <Field label="Будут ли с вами маленькие гости?">
                <div className="flex gap-3 mt-2">
                  {[['yes', 'Да'], ['no', 'Нет']].map(([val, lbl]) => (
                    <label
                      key={val}
                      className={`flex items-center gap-2 cursor-pointer px-4 py-2 border transition-all duration-200 ${
                        form.children === val
                          ? 'border-gold bg-gold/8 text-charcoal'
                          : 'border-gold/30 text-charcoal/60 hover:border-gold/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="children"
                        value={val}
                        checked={form.children === val}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="font-serif text-sm">{lbl}</span>
                    </label>
                  ))}
                </div>
              </Field>

              {/* Comment */}
              <Field label="Пожелания и комментарии">
                <textarea
                  className="input-elegant resize-none"
                  rows={3}
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  placeholder="Ваши пожелания..."
                />
              </Field>

              {error && (
                <p className="font-serif text-dustyrose text-sm italic text-center">
                  Что-то пошло не так. Попробуйте ещё раз.
                </p>
              )}

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={submitting || !form.name}
                  className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed w-full sm:w-auto sm:min-w-48"
                >
                  {submitting ? 'Отправляю...' : 'Отправить ответ'}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

function Field({ label, children }) {
  return (
    <div>
      <p className="font-sans text-charcoal/60 text-xs tracking-[0.2em] uppercase mb-2">{label}</p>
      {children}
    </div>
  )
}

function EnvelopeSmall() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
      <rect x="1" y="1" width="18" height="12" rx="0.5" stroke="#C8A96A" strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M1 1 L10 8 L19 1" stroke="#C8A96A" strokeWidth="1" fill="none" opacity="0.7" />
    </svg>
  )
}
