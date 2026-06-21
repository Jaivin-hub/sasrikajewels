import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden bg-ink px-8 py-16 lg:px-20 lg:py-20">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  'radial-gradient(ellipse 60% 80% at 80% 20%, rgba(201,169,98,0.4), transparent)',
              }}
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
                  Stay Connected
                </p>
                <h2 className="mt-4 font-display text-3xl text-cream lg:text-4xl">
                  Join the Sasrika Circle
                </h2>
                <p className="mt-4 text-cream/60 leading-relaxed">
                  Be the first to discover new collections, exclusive offers, and
                  styling inspiration delivered to your inbox.
                </p>
              </div>

              <div>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center lg:text-left"
                  >
                    <p className="font-display text-2xl text-gold">Welcome to the Circle!</p>
                    <p className="mt-2 text-cream/60">
                      Thank you for subscribing. Your first exclusive offer is on its way.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 border border-cream/15 bg-cream/5 px-5 py-4 text-cream placeholder:text-cream/30 outline-none focus:border-gold transition-colors"
                    />
                    <Button variant="gold" type="submit">
                      Subscribe
                      <Send size={14} />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
