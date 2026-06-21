import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import Button from '../components/ui/Button'
import { contact, contactLinks } from '../data/contact'
import { images } from '../data/images'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Our Boutique',
    detail: contact.location,
  },
  {
    icon: Phone,
    title: 'Call Us',
    detail: `+91 ${contact.phone}`,
    href: contactLinks.phone,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: `+91 ${contact.whatsapp}`,
    href: contactLinks.whatsapp,
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: contact.email,
    href: contactLinks.email,
  },
  {
    icon: Clock,
    title: 'Store Hours',
    detail: contact.hours,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold-dark">
            Get in Touch
          </p>
          <h1 className="mt-4 font-display text-5xl text-ink lg:text-6xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            We&apos;d love to hear from you. Visit our boutique in Trivandrum, call us, or send a
            message — our team is here to help you find your perfect piece.
          </p>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-2" direction="right">
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 border border-gold/15 hover:border-gold/30 transition-colors"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-gold/10 text-gold">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-ink">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="mt-1 block text-sm text-muted hover:text-gold transition-colors"
                      >
                        {info.detail}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-muted">{info.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3" direction="left" delay={0.2}>
            <div className="bg-cream-dark/50 p-8 lg:p-10 border border-gold/10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <p className="font-display text-3xl text-ink">Message Sent!</p>
                  <p className="mt-3 text-muted">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] text-muted mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gold/15 bg-cream px-4 py-3 text-ink outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] text-muted mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gold/15 bg-cream px-4 py-3 text-ink outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-muted mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full border border-gold/15 bg-cream px-4 py-3 text-ink outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>
                  <Button variant="gold" type="submit">
                    Send Message
                    <Send size={14} />
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-16">
          <div className="relative aspect-[21/9] overflow-hidden bg-cream-dark">
            <img
              src={images.artisan}
              alt="Sasrika Jewels boutique in Trivandrum"
              className="absolute inset-0 h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-ink/30">
              <p className="font-display text-2xl text-cream lg:text-3xl">
                Find us in Trivandrum
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
