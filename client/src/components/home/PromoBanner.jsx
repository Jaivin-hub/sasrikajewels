import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { images } from '../../data/images'

export default function PromoBanner() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <Link to="/shop" className="group relative block overflow-hidden">
            <div className="relative aspect-[21/9] sm:aspect-[3/1] overflow-hidden bg-cream-dark">
              <img
                src={images.ring}
                alt="Summer collection promotion"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/50" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold"
                >
                  Limited Time
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="mt-3 font-display text-3xl text-cream sm:text-4xl lg:text-5xl"
                >
                  Summer Radiance Sale
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-3 text-cream/70"
                >
                  Up to 30% off on selected diamond pieces
                </motion.p>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold group-hover:gap-4 transition-all"
                >
                  Shop the Sale
                  <ArrowRight size={16} />
                </motion.span>
              </div>
            </div>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
