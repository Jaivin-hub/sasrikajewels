import Hero from '../components/home/Hero'
import Categories from '../components/home/Categories'
import FeaturedCollection from '../components/home/FeaturedCollection'
import Craftsmanship from '../components/home/Craftsmanship'
import PromoBanner from '../components/home/PromoBanner'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedCollection />
      <Craftsmanship />
      <PromoBanner />
      <Testimonials />
      <Newsletter />
    </>
  )
}
