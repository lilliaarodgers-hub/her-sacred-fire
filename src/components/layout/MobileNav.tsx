'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'The Fire Circle', href: '/fire-circle' },
  { label: 'The Program', href: '/about' },
  { label: 'Community', href: '/community' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About Lia', href: '/lia' },
  { label: 'Join the Waitlist', href: '/enroll' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="flex flex-col gap-[5px] p-2 lg:hidden"
      >
        <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-[var(--color-cream)] origin-center" style={{ display: 'block' }} />
        <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-px bg-[var(--color-cream)]" style={{ display: 'block' }} />
        <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-[var(--color-cream)] origin-center" style={{ display: 'block' }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[var(--color-void)] flex flex-col pt-24 px-8"
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[var(--color-ember)] blur-3xl" />
            </div>
            <nav className="flex flex-col gap-2 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-3xl font-[family-name:var(--font-cormorant)] text-[var(--color-cream)] border-b border-[var(--color-ember)]/20 hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8 relative z-10">
              <Link href="/enroll" onClick={() => setOpen(false)} className="btn-fire w-full text-center">
                Join the Waitlist
              </Link>
            </div>
            <p className="mt-auto mb-8 text-xs text-[var(--color-muted)] tracking-widest uppercase relative z-10">
              hersacredfire.com
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
