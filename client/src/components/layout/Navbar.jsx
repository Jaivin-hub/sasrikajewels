import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag, Search, Heart } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link to="/" className="group flex flex-col">
            <span className="font-display text-2xl font-semibold tracking-wide text-ink lg:text-3xl">
              Thalam
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-gold-dark group-hover:text-gold transition-colors">
              Jewels
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold ${
                  location.pathname === link.to ? 'text-gold' : 'text-ink/70'
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 lg:gap-5">
            <button className="hidden p-2 text-ink/70 hover:text-gold transition-colors sm:block" aria-label="Search">
              <Search size={18} />
            </button>
            <button className="hidden p-2 text-ink/70 hover:text-gold transition-colors sm:block" aria-label="Wishlist">
              <Heart size={18} />
            </button>
            <button className="relative p-2 text-ink/70 hover:text-gold transition-colors" aria-label="Cart">
              <ShoppingBag size={18} />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center bg-gold text-[9px] font-bold text-ink">
                2
              </span>
            </button>
            <button
              className="p-2 text-ink lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-72 bg-cream p-8 pt-24"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      className={`font-display text-2xl ${
                        location.pathname === link.to ? 'text-gold' : 'text-ink'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
