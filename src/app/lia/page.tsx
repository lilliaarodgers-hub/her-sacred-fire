import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import WaitlistForm from '@/components/shared/WaitlistForm'

export const metadata: Metadata = {
  title: 'About Lia',
  description: 'Lia Dominique — Sacred Facilitator of Transformation. Her story, her mission, her fire.',
}

export default function AboutLiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--color-void)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--color-plum)]/20 blur-3xl pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="section-label">Your Facilitator</span>
              <div className="fire-divider mt-3 mb-4" />
              <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-[var(--color-cream)] leading-tight">
                Lia{' '}
                <span className="font-[family-name:var(--font-great-vibes)] text-[var(--color-gold)] text-7xl sm:text-8xl block mt-1">
                  Dominique
                </span>
              </h1>
              <p className="mt-3 text-[var(--color-ember)] tracking-widest uppercase text-sm font-medium">
                Sacred Facilitator of Transformation
              </p>
              <p className="mt-6 text-[var(--color-cream)]/70 leading-relaxed text-lg font-[family-name:var(--font-serif)] italic">
                "I am not walking beside you. I am walking with you - because I have already been through the fire myself."
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15} direction="right">
              <div className="relative max-w-sm mx-auto lg:ml-auto">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-plum)] via-[var(--color-ember-deep)] to-[var(--color-void)] border border-[var(--color-ember)]/20 shadow-2xl flex items-center justify-center">
                  <span className="font-[family-name:var(--font-great-vibes)] text-8xl text-[var(--color-gold)]/30">Lia</span>
                </div>
                <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-[var(--color-ember)] to-[var(--color-plum)] rounded-2xl px-5 py-4 shadow-xl">
                  <p className="font-[family-name:var(--font-serif)] text-white text-sm">Sacred Facilitator</p>
                  <p className="font-[family-name:var(--font-serif)] text-white/70 text-xs">of Transformation</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Her story */}
      <section className="section-pad bg-[var(--color-ember-deep)]">
        <div className="section-container max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label">Her Story</span>
            <div className="fire-divider mt-3 mb-8" />
            <div className="space-y-6 text-[var(--color-cream)]/75 leading-relaxed text-lg font-[family-name:var(--font-serif)]">
              <p>
                For most of my life, I did not understand why everything felt so hard. Why the noise was too much. Why I had to work twice as hard just to seem half as okay. Why I kept being told I was "too much" - too sensitive, too emotional, too intense.
              </p>
              <p>
                Then perimenopause showed up. And my body - which had been trying to tell me something for years - got very, very loud.
              </p>
              <p>
                When my diagnoses finally came, they were not a label. They were a key. Suddenly everything made sense. And with that understanding came grief - real, heavy grief - for the years I had spent fighting myself. And then, slowly, something else. A fire.
              </p>
              <p className="text-[var(--color-gold)] italic text-xl">
                Not the fire of anger, though that was there too. The fire of knowing. Of finally coming home to myself.
              </p>
              <p>
                Her Sacred Fire was born from that homecoming. It is the space I needed and could not find - where neurodivergent women in perimenopause are not just supported, but truly <em>seen</em>. Where nobody asks you to shrink, slow down, or simplify yourself.
              </p>
              <p>
                I am not a coach. I am a Sacred Facilitator of Transformation. I do not have a formula to fix you - because you are not broken. I have a 10-week journey to walk with you, into the truth of who you are, so you can step into who you were always meant to be.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What she brings */}
      <section className="section-pad bg-[var(--color-void)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="section-label">What She Brings</span>
              <div className="fire-divider-center mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-cream)]">
                Lived. Trained. Sacred.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { num: 'I', title: 'She Has Been There', desc: 'A neurodivergent woman who has lived perimenopause, late diagnosis, and the long road back to herself. She is not guessing. She knows.' },
              { num: 'II', title: 'Trained and Grounded', desc: 'Trained in somatic practices and trauma-informed approaches. Everything she brings into the circle is designed with your nervous system in mind.' },
              { num: 'III', title: 'Community Builder', desc: 'Founder of The Fire Circle - a free community built for women who needed a place to land. Hundreds of women have found their people there.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={0.1 * i}>
                <div className="card-dark p-7 text-center">
                  <div className="relative w-8 h-10 mx-auto">
                    <svg className="absolute inset-0 w-full h-full text-[var(--color-ember)]/25 animate-flicker-slow blur-[2px]" viewBox="0 0 24 32" fill="currentColor">
                      <path d="M12 1C12 1 20 10 20 17C20 21.9 16.4 26 12 26C7.6 26 4 21.9 4 17C4 13 6 10 6 10C6 10 4 16 9 19C9 19 3 15 3 9C3 5 7 1 12 1Z"/>
                    </svg>
                    <svg className="absolute inset-0 w-full h-full text-[var(--color-ember)]/70 animate-flicker" viewBox="0 0 24 32" fill="currentColor">
                      <path d="M12 3C12 3 18 10 18 16C18 20.4 15.3 24 12 24C8.7 24 6 20.4 6 16C6 12.5 7.5 10 7.5 10C7.5 10 6 15 10 17.5C10 17.5 5 14 5 9C5 5.5 8 3 12 3Z"/>
                      <ellipse cx="12" cy="27" rx="3.5" ry="2" opacity="0.35"/>
                    </svg>
                    <svg className="absolute inset-0 w-full h-full text-[var(--color-ember-glow)]/50 animate-flicker-slow scale-[0.55] translate-y-2" viewBox="0 0 24 32" fill="currentColor">
                      <path d="M12 5C12 5 16 11 16 15C16 18 14.2 20 12 20C9.8 20 8 18 8 15C8 12.5 9 11 9 11C9 11 8 14 11 16C11 16 7 13 7 9C7 6.5 9 5 12 5Z"/>
                    </svg>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-serif)] text-xl text-[var(--color-cream)]">{item.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[var(--color-ember-deep)] relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[var(--color-ember)]/15 blur-3xl pointer-events-none" />
        <div className="section-container relative z-10 max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-great-vibes)] text-5xl text-[var(--color-gold)] mb-6">
              Your fire is waiting.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/enroll" className="btn-fire">Join the Waitlist</Link>
              <Link href="/fire-circle" className="btn-outline-cream">Join the Free Circle</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
