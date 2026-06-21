import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'
import { contact, contactLinks } from '../../data/contact'

const footerLinks = {
  shop: [
    { label: 'Rings', to: '/shop' },
    { label: 'Necklaces', to: '/shop' },
    { label: 'Earrings', to: '/shop' },
    { label: 'Bracelets', to: '/shop' },
    { label: 'New Arrivals', to: '/shop' },
  ],
  company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Craftsmanship', to: '/about' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Care Guide', to: '/about' },
  ],
}

const socialLinks = [
  { label: 'Instagram', href: contactLinks.instagram, text: `@${contact.instagram}` },
  { label: 'Facebook', href: contactLinks.facebook, text: contact.facebook },
  { label: 'WhatsApp', href: contactLinks.whatsapp, text: `+91 ${contact.whatsapp}` },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-display text-3xl font-semibold">Sasrika</span>
              <span className="block text-[10px] uppercase tracking-[0.35em] text-gold mt-1">
                Jewels
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-cream/60">
              Elegance in every sparkle. Handcrafted fine jewelry that celebrates
              life&apos;s most precious moments.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-cream/60 hover:text-gold transition-colors"
                >
                  {link.label}: {link.text}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-5">
              Visit Us
            </h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li className="flex gap-3">
                <MapPin size={16} className="shrink-0 text-gold mt-0.5" />
                <span>{contact.location}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="shrink-0 text-gold mt-0.5" />
                <a href={contactLinks.phone} className="hover:text-gold transition-colors">
                  +91 {contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={16} className="shrink-0 text-gold mt-0.5" />
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp: +91 {contact.whatsapp}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="shrink-0 text-gold mt-0.5" />
                <a href={contactLinks.email} className="hover:text-gold transition-colors">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="line-gold mt-14 mb-8 opacity-30" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-cream/40 sm:flex-row">
          <p>&copy; 2026 Sasrika Jewels. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
