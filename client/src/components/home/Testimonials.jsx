import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 lg:py-32 bg-cream mesh-gradient">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold-dark">
            Client Stories
          </p>
          <h2 className="mt-4 font-display text-4xl text-ink lg:text-5xl">
            Loved by Thousands
          </h2>
        </AnimatedSection>

        <AnimatedSection className="relative mx-auto max-w-3xl">
          <Quote size={48} className="absolute -top-4 left-0 text-gold/20" />

          <div className="relative min-h-[280px] px-4 sm:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center gap-1">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="font-display text-2xl italic leading-relaxed text-ink lg:text-3xl">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>
                <div className="mt-8">
                  <p className="font-medium text-ink">{testimonials[active].name}</p>
                  <p className="text-sm text-muted">{testimonials[active].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center border border-gold/30 text-ink hover:bg-gold hover:border-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 transition-all duration-300 ${
                    i === active ? 'w-8 bg-gold' : 'w-1.5 bg-gold/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center border border-gold/30 text-ink hover:bg-gold hover:border-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
