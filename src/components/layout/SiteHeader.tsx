'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import MobileNav from './MobileNav'

const navLinks = [
  { label: 'The Fire Circle', href: '/fire-circle' },
  { label: 'The Program', href: '/about' },
  { label: 'Community', href: '/community' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About Lia', href: '/lia' },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[var(--color-void)]/95 backdrop-blur-sm shadow-[0_1px_30px_rgba(196,98,45,0.1)]' : 'bg-transparent'
    }`}>
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="group">
          <span className="font-[family-name:var(--font-great-vibes)] text-3xl md:text-4xl text-[var(--color-gold)] group-hover:text-[var(--color-gold-light)] transition-colors">
            Her Sacred Fire
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-cream)]/80 hover:text-[var(--color-gold)] transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/enroll" className="hidden lg:inline-flex btn-fire text-xs py-2.5 px-6">
            Join the Waitlist
          </Link>
          <div className="relative z-50">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
