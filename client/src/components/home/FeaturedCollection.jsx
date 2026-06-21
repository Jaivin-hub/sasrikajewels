import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import ProductCard from '../ui/ProductCard'
import Button from '../ui/Button'
import { featuredProducts } from '../../data/products'

export default function FeaturedCollection() {
  return (
    <section className="py-24 lg:py-32 bg-cream-dark/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 mb-14 sm:flex-row sm:items-end">
          <AnimatedSection>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold-dark">
              Handpicked
            </p>
            <h2 className="mt-4 font-display text-4xl text-ink lg:text-5xl">
              Featured Collection
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Link to="/shop">
              <Button variant="outline">
                View All
                <ArrowRight size={14} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
