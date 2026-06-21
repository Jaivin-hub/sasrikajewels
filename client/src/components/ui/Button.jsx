import { motion } from 'framer-motion'

const sizes = {
  sm: 'px-5 py-2.5 text-xs tracking-[0.2em]',
  md: 'px-8 py-3.5 text-sm tracking-[0.15em]',
  lg: 'px-10 py-4 text-sm tracking-[0.15em]',
}

const variants = {
  primary:
    'bg-ink text-cream hover:bg-ink-soft shadow-lg shadow-ink/10',
  gold:
    'bg-gold text-ink hover:bg-gold-light shadow-lg shadow-gold/25',
  outline:
    'border border-gold/40 text-ink hover:bg-gold/10 hover:border-gold',
  ghost:
    'text-ink hover:text-gold',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 font-medium uppercase transition-colors duration-300 ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
