import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Words from women whose fire was reclaimed through Her Sacred Fire.',
}

const TESTIMONIALS = [
  {
    quote: "I have been to therapy, taken the medication, read all the books. Nothing prepared me for what Her Sacred Fire did for me - in the best possible way. Lia does not fix you. She helps you remember you were never broken.",
    name: 'Tamara R.',
    tag: 'Her Sacred Fire Alumni',
  },
  {
    quote: "I cried in the first session because someone finally described my experience exactly. I have never felt so seen. The Fire Circle kept me alive during the hardest months of perimenopause.",
    name: 'Denise M.',
    tag: 'Fire Circle Member',
  },
  {
    quote: "I came in thinking I needed to fix my brain. I left knowing my brain was never the problem. The way Lia shows up - without judgment, without rushing - changed how I see myself permanently.",
    name: 'Keisha T.',
    tag: 'Her Sacred Fire Alumni',
  },
  {
    quote: "Week 4 broke me open in the most beautiful way. I released things I had been carrying for 40 years. This program is not for the faint of heart. It is for women who are ready.",
    name: 'Sandra L.',
    tag: 'Her Sacred Fire Alumni',
  },
  {
    quote: "I joined thinking it was about perimenopause. I stayed because it became about my whole life. My marriage changed. My relationship with my children changed. I changed.",
    name: 'Michelle B.',
    tag: 'Her Sacred Fire Alumni',
  },
  {
    quote: "Lia is unlike anyone I have ever encountered. She does not perform compassion - she embodies it. What she creates in that circle is genuinely different.",
    name: 'Renee W.',
    tag: 'Fire Circle Member',
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-[var(--color-void)] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[var(--color-ember)]/8 blur-3xl pointer-events-none" />
        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label">Their Words</span>
            <div className="fire-divider-center mt-3 mb-4" />
            <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-[var(--color-cream)]">
              Women Who{' '}
              <span className="font-[family-name:var(--font-great-vibes)] text-[var(--color-gold)] text-7xl sm:text-8xl block mt-1">
                Found Their Fire
              </span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-[var(--color-ember-deep)]">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.name} delay={0.08 * i}>
                <div className="card-dark p-8 h-full flex flex-col">
                  <p className="text-xs text-[var(--color-gold)] tracking-widest uppercase mb-4">{t.tag}</p>
                  <p className="text-[var(--color-cream)]/80 leading-relaxed text-lg font-[family-name:var(--font-serif)] italic flex-1">
                    {t.quote}
                  </p>
                  <p className="mt-1 font-medium text-[var(--color-cream)]">{t.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[var(--color-void)] relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] rounded-full bg-[var(--color-ember)]/12 blur-3xl pointer-events-none" />
        <div className="section-container relative z-10 text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <span className="font-[family-name:var(--font-great-vibes)] text-5xl text-[var(--color-gold)] block mb-4">
              Your story is next.
            </span>
            <p className="text-[var(--color-cream)]/70 mb-8">
              Your transformation is waiting. Join the waitlist and be the first to hear when enrollment opens.
            </p>
            <Link href="/enroll" className="btn-fire text-base px-10 py-4">
              Join the Waitlist
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
