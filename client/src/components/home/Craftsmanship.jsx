import { motion } from 'framer-motion'
import { Gem, Shield, Truck, Award } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { images } from '../../data/images'

const features = [
  {
    icon: Gem,
    title: 'Certified Gemstones',
    description: 'Every diamond and gemstone is ethically sourced and GIA certified for authenticity.',
  },
  {
    icon: Award,
    title: 'Master Craftsmanship',
    description: '25+ years of artisan expertise passed through generations of master jewelers.',
  },
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'Comprehensive protection on every piece, including free cleaning and resizing.',
  },
  {
    icon: Truck,
    title: 'Secure Delivery',
    description: 'Insured, tamper-proof packaging with real-time tracking across India.',
  },
]

export default function Craftsmanship() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 50%, rgba(201,169,98,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(184,131,106,0.2) 0%, transparent 40%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection direction="right">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
              The Thalam Promise
            </p>
            <h2 className="mt-4 font-display text-4xl text-cream lg:text-5xl leading-tight">
              Where Artistry
              <br />
              <span className="text-gradient-gold italic">Meets Legacy</span>
            </h2>
            <p className="mt-6 text-cream/60 leading-relaxed">
              Born in the heart of Trivandrum, Thalam Jewels blends
              centuries-old Indian craftsmanship with contemporary design sensibilities.
              Each creation is a testament to our unwavering commitment to excellence.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center border border-gold/30 text-gold group-hover:bg-gold group-hover:text-ink transition-colors">
                    <feature.icon size={20} />
                  </div>
                  <h3 className="font-display text-lg text-cream">{feature.title}</h3>
                  <p className="mt-1 text-sm text-cream/50">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative aspect-square overflow-hidden bg-cream-dark"
              >
                <img
                  src={images.ring}
                  alt="Jewelry craftsmanship"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute -bottom-4 -left-4 h-full w-full border border-gold/30 -z-10" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -top-6 -right-6 flex h-28 w-28 flex-col items-center justify-center bg-gold text-ink"
              >
                <span className="font-display text-3xl font-semibold">25+</span>
                <span className="text-[9px] uppercase tracking-[0.15em]">Years</span>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
