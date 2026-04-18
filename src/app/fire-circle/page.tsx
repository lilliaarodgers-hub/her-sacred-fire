import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import WaitlistForm from '@/components/shared/WaitlistForm'

export const metadata: Metadata = {
  title: 'The Fire Circle',
  description: 'The Fire Circle — a free sacred community for neurodivergent women in perimenopause.',
}

export default function FireCirclePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--color-void)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[var(--color-plum)]/20 blur-3xl" />
          <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[var(--color-ember)]/10 blur-3xl" />
        </div>
        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label">Free Community</span>
            <div className="fire-divider-center mt-3 mb-4" />
            <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-[var(--color-cream)] leading-tight">
              The{' '}
              <span className="font-[family-name:var(--font-great-vibes)] text-[var(--color-gold)] text-7xl sm:text-8xl block mt-1">
                Fire Circle
              </span>
            </h1>
            <p className="mt-6 text-[var(--color-cream)]/70 leading-relaxed text-lg font-[family-name:var(--font-serif)] italic max-w-xl mx-auto">
              A free community for neurodivergent women in perimenopause who are tired of going through it alone.
            </p>
            <Link href="#join" className="btn-fire mt-8 inline-flex">
              Join the Circle - Free
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* What it is */}
      <section className="section-pad bg-[var(--color-ember-deep)]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="section-label text-base">What Is It?</span>
              <div className="fire-divider mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-cream)] leading-tight">
                A circle of women who{' '}
                <span className="script italic">get it.</span>
              </h2>
              <p className="mt-5 text-[var(--color-cream)]/70 leading-relaxed">
                The Fire Circle is a free space for neurodivergent women in perimenopause. No one is here to lecture you or sell you something. No toxic positivity. No one telling you to just try yoga.
              </p>
              <p className="mt-4 text-[var(--color-cream)]/70 leading-relaxed">
                Just women - real, complex, beautiful, neurospicy women - who know exactly what this season feels like. Showing up for each other.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: 'Monthly Live Gatherings', desc: 'Free community calls with Lia - open to everyone in the circle. A place to land, every month.' },
                  { title: 'Private Community Space', desc: 'A safe, moderated space to connect and be honest with each other - without judgment.' },
                  { title: 'Free Resources', desc: 'Tools, practices, and guides shared regularly. Everything is designed with your nervous system in mind.' },
                  { title: 'First Access to Her Sacred Fire', desc: 'Circle members are always first to hear when enrollment opens. Your spot waits for you.' },
                ].map((item, i) => (
                  <AnimatedSection key={item.title} delay={0.08 * i}>
                    <div className="card-dark p-5 flex gap-4">
                      <svg className="w-2.5 h-3 flex-shrink-0 mt-1 text-[var(--color-ember)]/60" viewBox="0 0 24 32" fill="currentColor">
                        <path d="M12 3C12 3 18 10 18 16C18 20.4 15.3 24 12 24C8.7 24 6 20.4 6 16C6 12.5 7.5 10 7.5 10C7.5 10 6 15 10 17.5C10 17.5 5 14 5 9C5 5.5 8 3 12 3Z"/>
                      </svg>
                      <div>
                        <h4 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-cream)]">{item.title}</h4>
                        <p className="text-sm text-[var(--color-muted)] mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="section-pad bg-[var(--color-void)] relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[var(--color-ember)]/10 blur-3xl pointer-events-none" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <WaitlistForm
              heading="Come as you are."
              subtext="The Fire Circle is free - always. Drop your name and email and we will send you everything you need to get in."
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
