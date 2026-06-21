import { useState } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import ProductCard from '../components/ui/ProductCard'
import { products, categories } from '../data/products'

const filters = ['All', ...categories.map((c) => c.name)]

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? products
      : products.filter((p) => p.category === activeFilter)

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold-dark">
            Our Collection
          </p>
          <h1 className="mt-4 font-display text-5xl text-ink lg:text-6xl">Shop All</h1>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Explore our complete range of handcrafted fine jewelry, from everyday elegance to
            once-in-a-lifetime pieces.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mb-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-ink text-cream'
                      : 'border border-gold/20 text-ink hover:border-gold hover:bg-gold/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <button className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted hover:text-gold transition-colors">
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>
        </AnimatedSection>

        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-20">No products found in this category.</p>
        )}
      </div>
    </div>
  )
}
