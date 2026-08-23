import { motion } from 'framer-motion'
import { Heart, Eye, Users } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import { images } from '../data/images'

const milestones = [
  { year: '2001', event: 'Founded in Trivandrum with a passion for fine jewelry' },
  { year: '2010', event: 'Expanded to certified diamond collections' },
  { year: '2018', event: 'Launched online boutique nationwide' },
  { year: '2026', event: 'Celebrating 25 years of excellence' },
]

const values = [
  {
    icon: Heart,
    title: 'Passion',
    text: 'Every piece is crafted with love and dedication to the art of fine jewelry.',
  },
  {
    icon: Eye,
    title: 'Integrity',
    text: 'Transparent sourcing, honest pricing, and certified authenticity always.',
  },
  {
    icon: Users,
    title: 'Community',
    text: 'Building lasting relationships with clients who become part of our family.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-28 pb-20 overflow-hidden mesh-gradient">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold-dark">
              Our Heritage
            </p>
            <h1 className="mt-4 font-display text-5xl text-ink lg:text-6xl">
              A Legacy of Brilliance
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              For over two decades, Thalam Jewels has been synonymous with elegance,
              craftsmanship, and trust — creating heirlooms that transcend generations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection direction="right">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-dark">
                <img
                  src={images.artisan}
                  alt="Jewelry artisan at work"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <h2 className="font-display text-4xl text-ink">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Thalam Jewels began as a small atelier in Trivandrum, founded
                  by Saranyasree with a vision to create jewelry that
                  celebrates Indian heritage while embracing modern aesthetics.
                </p>
                <p>
                  Today, our team of skilled artisans continues this legacy, handcrafting each
                  piece with meticulous attention to detail. From selecting the finest
                  gemstones to the final polish, every step reflects our commitment to
                  perfection.
                </p>
                <p>
                  We believe jewelry is more than adornment — it&apos;s a vessel for memories,
                  emotions, and stories that live on through generations.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
              Our Journey
            </p>
            <h2 className="mt-4 font-display text-4xl text-cream">Milestones</h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 hidden lg:block" />
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <AnimatedSection key={milestone.year} delay={i * 0.1}>
                  <div
                    className={`flex flex-col items-center gap-4 lg:flex-row ${
                      i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <span className="font-display text-3xl text-gold">{milestone.year}</span>
                      <p className="mt-2 text-cream/60">{milestone.event}</p>
                    </div>
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      className="hidden lg:flex h-4 w-4 items-center justify-center bg-gold rounded-full shrink-0"
                    />
                    <div className="flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-dark/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-4xl text-ink">Our Values</h2>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="text-center p-8 border border-gold/15 hover:border-gold/40 transition-colors">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center bg-gold/10 text-gold">
                    <value.icon size={24} />
                  </div>
                  <h3 className="font-display text-2xl text-ink">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{value.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
