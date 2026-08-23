import { images } from './images'

export const categories = [
  {
    id: 'rings',
    name: 'Rings',
    description: 'Symbols of eternal love',
    image: images.ring,
    count: 48,
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Grace around your neckline',
    image: images.necklace,
    count: 36,
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Whispers of brilliance',
    image: images.earrings,
    count: 52,
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    description: 'Elegance on your wrist',
    image: images.bracelet,
    count: 29,
  },
]

export const featuredProducts = [
  {
    id: 1,
    name: 'Celestial Diamond Ring',
    category: 'Rings',
    price: 249999,
    originalPrice: 2899,
    badge: 'Bestseller',
    image: images.ring,
  },
  {
    id: 2,
    name: 'Aurora Pearl Necklace',
    category: 'Necklaces',
    price: 18999,
    badge: 'New',
    image: images.necklace,
  },
  {
    id: 3,
    name: 'Luna Gold Earrings',
    category: 'Earrings',
    price: 129999,
    image: images.earrings,
  },
  {
    id: 4,
    name: 'Empress Tennis Bracelet',
    category: 'Bracelets',
    price: 32999,
    badge: 'Limited',
    image: images.bracelet,
  },
]

export const products = [
  ...featuredProducts,
  {
    id: 5,
    name: 'Solstice Engagement Ring',
    category: 'Rings',
    price: 45999,
    image: images.ring,
  },
  {
    id: 6,
    name: 'Heritage Gold Chain',
    category: 'Necklaces',
    price: 219999,
    image: images.necklace,
  },
  {
    id: 7,
    name: 'Starlight Drop Earrings',
    category: 'Earrings',
    price: 899999,
    image: images.earrings,
  },
  {
    id: 8,
    name: 'Royal Cuff Bracelet',
    category: 'Bracelets',
    price: 179999,
    image: images.bracelet,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Bride, Trivandrum',
    quote: 'My engagement ring from Thalam Jewels took my breath away. The craftsmanship is museum-quality, and every facet catches light like a dream.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ananya Reddy',
    role: 'Collector, Kochi',
    quote: 'I have shopped luxury jewelry across continents. Thalam stands apart — timeless design with a soul that feels deeply Indian yet globally refined.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Meera Kapoor',
    role: 'Designer, Bangalore',
    quote: 'The attention to detail is extraordinary. From packaging to the piece itself, Thalam delivers an experience worthy of heirlooms.',
    rating: 5,
  },
]

export const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)
