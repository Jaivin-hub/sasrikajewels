import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { categories } from '../../data/products'

export default function Categories() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold-dark">
            Curated For You
          </p>
          <h2 className="mt-4 font-display text-4xl text-ink lg:text-5xl">
            Shop by Category
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            From statement rings to delicate earrings, find the perfect piece for every occasion.
          </p>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <AnimatedSection key={category.id} delay={index * 0.1}>
              <Link to="/shop" className="group relative block overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
                          {category.count} pieces
                        </p>
                        <h3 className="mt-1 font-display text-2xl text-cream">
                          {category.name}
                        </h3>
                        <p className="mt-1 text-sm text-cream/60">{category.description}</p>
                      </div>
                      <motion.span
                        className="flex h-10 w-10 items-center justify-center bg-gold text-ink opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowUpRight size={18} />
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
