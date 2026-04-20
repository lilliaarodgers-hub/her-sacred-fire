import Link from 'next/link'

const socials = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@unmaskedanduntamed' },
  { label: 'YouTube', href: 'https://www.youtube.com/@unmaskedanduntamed' },
  { label: 'Substack', href: 'https://unmaskedanduntamed.substack.com' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/unmaskedanduntamed' },
  { label: 'Lemon8', href: 'https://www.lemon8app.com/@unmaskedanduntamed' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/unmaskedanduntamed' },
  { label: 'Patreon', href: 'https://www.patreon.com/unmaskedanduntamed' },
  { label: 'Skool', href: 'https://www.skool.com/unmaskedanduntamed' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[var(--color-void)] border-t border-[var(--color-ember)]/20">
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-ember)] to-transparent" />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <span className="font-[family-name:var(--font-great-vibes)] text-4xl text-[var(--color-gold)]">
              Her Sacred Fire
            </span>
            <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed max-w-xs">
              A 10-week sacred container for neurodivergent women ready to reclaim their fire and step fully into themselves.
            </p>
            <p className="mt-4 text-xs text-[var(--color-ember)] tracking-widest uppercase">
              Facilitated by Lia Dominique
            </p>
          </div>

          <div>
            <h4 className="section-label mb-4">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'The Fire Circle', href: '/fire-circle' },
                { label: 'The Program', href: '/about' },
                { label: 'Community', href: '/community' },
                { label: 'Testimonials', href: '/testimonials' },
                { label: 'About Lia', href: '/lia' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-4">Your Fire Awaits</h4>
            <p className="text-sm text-[var(--color-muted)] mb-5 leading-relaxed">
              The waitlist is open. Reserve your sacred seat before doors close.
            </p>
            <Link href="/enroll" className="btn-fire text-xs">
              Join the Waitlist
            </Link>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-12 flex flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--color-ember)]/20 px-4 py-1.5 text-xs text-[var(--color-muted)] hover:border-[var(--color-ember)] hover:text-[var(--color-cream)] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--color-ember)]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} Her Sacred Fire. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-[var(--color-cream)] transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-[var(--color-cream)] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
