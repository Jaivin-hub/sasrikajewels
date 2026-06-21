import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag } from 'lucide-react'
import { formatPrice } from '../../data/products'

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false)
  const [liked, setLiked] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative overflow-hidden bg-cream-dark aspect-[4/5]">
        <motion.img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {product.badge && (
          <span className="absolute top-4 left-4 z-20 bg-gold text-ink text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5">
            {product.badge}
          </span>
        )}

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-center gap-2 bg-cream/95 backdrop-blur-sm py-3 text-xs font-medium uppercase tracking-[0.15em] text-ink hover:bg-gold hover:text-ink transition-colors"
        >
          <ShoppingBag size={14} />
          Add to Cart
        </motion.button>

        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 z-20 p-2 bg-cream/80 backdrop-blur-sm rounded-full hover:bg-cream transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart
            size={16}
            className={liked ? 'fill-rose text-rose' : 'text-ink/60'}
          />
        </button>
      </div>

      <div className="pt-5 space-y-1">
        <p className="text-[11px] uppercase tracking-[0.25em] text-muted">{product.category}</p>
        <h3 className="font-display text-xl text-ink group-hover:text-gold-dark transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-ink">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
