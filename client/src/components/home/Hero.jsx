import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import SparkleBackground from '../ui/SparkleBackground'
import featuredNecklace from '../../assets/featured-necklace.png'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="relative min-h-screen mesh-gradient overflow-hidden">
      <SparkleBackground />

      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-16 lg:px-8 lg:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 border border-gold/30 bg-cream/50 px-4 py-2 backdrop-blur-sm"
              >
                <Sparkles size={14} className="text-gold" />
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-dark">
                  New Collection 2026
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-display text-5xl font-medium leading-[1.1] text-ink sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                Elegance in
                <br />
                <span className="text-gradient-gold italic">every sparkle</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 max-w-md text-base leading-relaxed text-muted lg:text-lg"
              >
                Discover handcrafted fine jewelry where timeless artistry meets
                contemporary design. Each piece tells a story of brilliance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link to="/shop">
                  <Button variant="gold" size="lg">
                    Explore Collection
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Our Story
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-14 flex gap-10 border-t border-gold/15 pt-8"
              >
                {[
                  { value: '25+', label: 'Years of Craft' },
                  { value: '10K+', label: 'Happy Clients' },
                  { value: '100%', label: 'Certified Gems' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl text-ink lg:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative aspect-[4/5] w-full overflow-hidden bg-cream-dark"
                >
                  <img
                    src={featuredNecklace}
                    alt="Sasrika Jewels featured necklace"
                    className="absolute inset-0 z-0 h-full w-full object-cover object-center"
                    loading="eager"
                    decoding="async"
                  />
                  <div
                    className="absolute inset-0 z-10 bg-gradient-to-t from-ink/25 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute -left-4 top-1/4 glass px-5 py-4 shadow-xl lg:-left-8"
                  style={{ animation: 'float 6s ease-in-out infinite' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted">Featured</p>
                  <p className="font-display text-lg text-ink">Aurora Collection</p>
                  <p className="text-sm text-gold-dark">From ₹1,299</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="absolute -right-2 bottom-1/4 glass-dark px-5 py-4 text-cream shadow-xl lg:-right-6"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Limited Edition</p>
                  <p className="font-display text-lg">Celestial Diamonds</p>
                </motion.div>

                <div className="absolute -z-10 -bottom-6 -right-6 h-full w-full border border-gold/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
