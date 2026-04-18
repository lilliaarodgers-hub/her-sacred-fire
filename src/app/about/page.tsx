import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import WaitlistForm from '@/components/shared/WaitlistForm'

export const metadata: Metadata = {
  title: 'The Program',
  description: 'Her Sacred Fire — a 10-week sacred container for neurodivergent women in perimenopause.',
}

const WEEKS = [
  { num: '1', title: 'The Awakening', desc: 'We start exactly where you are. No pretending, no rushing ahead. Where are you right now - in your body, your mind, your life? We look honestly. With kindness.', theme: 'Awareness' },
  { num: '2', title: 'The Body Speaks', desc: 'Your body has been trying to tell you something for a long time. This week we stop fighting it and start listening. It is not the enemy.', theme: 'Embodiment' },
  { num: '3', title: 'Unmasking', desc: 'You have been performing for a long time. The version of you that showed up so everyone else was comfortable? She is exhausted. This week, we let her rest.', theme: 'Authenticity' },
  { num: '4', title: 'Letting Yourself Grieve', desc: 'There is real loss in this season. For the self you performed. For the years of not knowing. For the diagnoses that came too late. This week, we sit with it.', theme: 'Release' },
  { num: '5', title: 'What Do You Actually Want?', desc: 'Not what your family needs. Not what looks good. What do YOU want? This week is about finding the answer you have been too afraid to say out loud.', theme: 'Desire' },
  { num: '6', title: 'Your Nervous System is Not the Problem', desc: 'Your brain is wired differently - and that is a gift, not a flaw. This week we stop fighting your nervous system and start working with it.', theme: 'Regulation' },
  { num: '7', title: 'Boundaries as Self-Love', desc: 'Saying no is not mean. It is necessary. This week we practice it together - gently, repeatedly - until it starts to feel like breathing.', theme: 'Sovereignty' },
  { num: '8', title: 'Coming Back to Your Power', desc: 'The woman you are becoming has always been inside you. This week we stop hiding her. We let her take up the space she deserves.', theme: 'Power' },
  { num: '9', title: 'Building Your Life Your Way', desc: 'Using everything you have uncovered, we start designing a life that is actually built for you. Not the woman you were pretending to be. You.', theme: 'Vision' },
  { num: '10', title: 'You Step Out', desc: 'You came in as one woman. You leave as yourself - more rooted, more clear, more alive. And you do not walk out alone. You carry your circle with you.', theme: 'Integration' },
]

const INCLUDED = [
  { num: 'I', title: '10 Weekly Live Sessions', desc: 'Ninety minutes together every single week - facilitated by Lia. Recorded if you cannot make it live. You will never fall behind.' },
  { num: 'II', title: 'A Real Circle, Not a Course', desc: 'Kept small on purpose. This is not a lecture you watch alone. It is a circle where every woman is known, seen, and belongs.' },
  { num: 'III', title: 'Your Weekly Workbook', desc: 'Each week comes with its own workbook - prompts, practices, and space to go deeper in your own time. At your own pace. No rush.' },
  { num: 'IV', title: 'Body-Based Tools', desc: 'Everything is designed with neurospicy nervous systems in mind. Nothing here will overwhelm you. Accessible, gentle, and actually effective.' },
  { num: 'V', title: 'Private Community Space', desc: 'A private space to connect with your cohort between sessions - to share, process, celebrate, and just be with women who get it.' },
  { num: 'VI', title: 'Yours to Keep, Forever', desc: 'Every session recording belongs to you. Come back to them anytime. Integration does not have a deadline.' },
]

export default function AboutProgramPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-[var(--color-void)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[var(--color-ember)]/10 blur-3xl" />
        </div>
        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label">The Program</span>
            <div className="fire-divider-center mt-3 mb-4" />
            <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-[var(--color-cream)] leading-tight">
              Her Sacred{' '}
              <span className="font-[family-name:var(--font-great-vibes)] text-[#8C3A12] text-7xl sm:text-8xl block mt-1">
                Fire
              </span>
            </h1>
            <p className="mt-6 text-[var(--color-cream)]/70 leading-relaxed text-xl sm:text-2xl font-[family-name:var(--font-serif)] italic">
              A 10-week journey for neurodivergent women in perimenopause who are done just surviving - and ready to actually live.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is included */}
      <section className="section-pad bg-[var(--color-ember-deep)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">Everything Included</span>
              <div className="fire-divider-center mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-cream)]">
                What You Receive
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INCLUDED.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.08 * i}>
                <div className="card-dark p-7 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-8 h-10 flex-shrink-0">
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
                    <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-cream)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Weeks detailed */}
      <section className="section-pad bg-[var(--color-void)]">
        <div className="section-container max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">Week by Week</span>
              <div className="fire-divider-center mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-cream)]">
                Your 10-Week Journey
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {WEEKS.map((week, i) => (
              <AnimatedSection key={week.num} delay={0.05 * i}>
                <div className="card-dark p-6 group">
                  <div className="flex items-baseline gap-5">
                    <span className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-ember)]/30 group-hover:text-[var(--color-ember)]/70 transition-colors leading-none flex-shrink-0">
                      {week.num}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-gold)]">
                        {week.title}
                      </h3>
                      <p className="text-xs text-[var(--color-muted)] tracking-widest uppercase mt-0.5">{week.theme}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-[var(--color-cream)]/70 leading-relaxed pl-[4.25rem]">{week.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="section-pad bg-[var(--color-ember-deep)] relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[var(--color-ember)]/15 blur-3xl pointer-events-none" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <WaitlistForm
              heading="Something is telling you this is for you."
              subtext="Trust that. Join the waitlist and you will be the first to hear when the doors open."
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
