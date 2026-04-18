import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import WaitlistForm from '@/components/shared/WaitlistForm'

const WEEKS = [
  { num: '1', title: 'The Awakening', desc: 'We start by just being honest. Where are you right now? No fixing. No rushing. Just you, as you are.' },
  { num: '2', title: 'The Body Speaks', desc: 'Your body has been trying to tell you something for a long time. This week, we finally listen.' },
  { num: '3', title: 'Unmasking', desc: 'The version of you that performed for everyone else? She is exhausted. We gently start to let her rest.' },
  { num: '4', title: 'Letting Yourself Grieve', desc: 'There is real loss in this season - and you deserve to honor it. Grief is not weakness. It is love.' },
  { num: '5', title: 'What Do You Actually Want?', desc: 'Not what your family needs. Not what looks good. What do YOU want? We find out together.' },
  { num: '6', title: 'Your Nervous System is Not the Problem', desc: 'Your brain is wired differently - and that is a gift. This week we learn how to work with it, not against it.' },
  { num: '7', title: 'Boundaries as Self-Love', desc: 'Saying no is not mean. It is necessary. We practice it together until it feels like breathing.' },
  { num: '8', title: 'Coming Back to Your Power', desc: 'The woman you are becoming? She has always been in there. This week we let her take up space.' },
  { num: '9', title: 'Building Your Life Your Way', desc: 'Using everything you have discovered, we start designing a life that is actually built for you.' },
  { num: '10', title: 'You Step Out', desc: 'You came in one woman. You leave as yourself - more rooted, more clear, and more alive than before.' },
]

const PILLARS = [
  { icon: 'I', title: 'Women Who Get It', desc: 'A small group of women who truly understand - because they are living it too.' },
  { icon: 'II', title: 'Weekly Time Together', desc: 'Every week for 10 weeks, we gather live. You are never doing this alone.' },
  { icon: 'III', title: 'Tools Built for Your Brain', desc: 'Everything we do is designed with your neurospicy nervous system in mind. Nothing here will overwhelm you.' },
  { icon: 'IV', title: 'Your Own Guided Workbook', desc: 'Each week comes with a workbook to help you go deeper in your own time, at your own pace.' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-void)]">
        {/* Fire glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[var(--color-ember)]/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[var(--color-ember)]/25 blur-2xl" />
          <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[var(--color-plum)]/20 blur-3xl" />
        </div>

        <div className="section-container relative z-10 pt-24 pb-16 text-center max-w-4xl mx-auto">
          <AnimatedSection delay={0}>
            <span className="section-label">A 10-Week Sacred Journey</span>
            <div className="fire-divider-center mt-3" />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl lg:text-8xl text-[var(--color-cream)] mt-6 leading-tight ember-glow">
              Her Sacred{' '}
              <span className="font-[family-name:var(--font-great-vibes)] text-[#8C3A12] text-8xl sm:text-9xl lg:text-[10rem] block leading-none">
                Fire
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-8 text-xl sm:text-2xl text-[var(--color-cream)]/70 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-serif)] italic">
              For the neurodivergent woman moving through perimenopause who knows, deep down, that there is more waiting for her on the other side of this.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/enroll" className="btn-fire text-base px-8 py-4">
                Join the Waitlist
              </Link>
              <Link href="/about" className="btn-outline-cream">
                Explore the Program
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-16 flex flex-wrap justify-center gap-10">
              {[
                { value: '10', label: 'Sacred Weeks' },
                { value: 'Small', label: 'Intimate Cohort' },
                { value: 'Live', label: 'Weekly Sessions' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-[family-name:var(--font-serif)] text-3xl text-[var(--color-gold)]">{s.value}</p>
                  <p className="text-xs text-[var(--color-muted)] tracking-widest uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[var(--color-ember)]/60">
            <path d="M4 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section-pad bg-[var(--color-ember-deep)]">
        <div className="section-container max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="section-label">Is This You?</span>
            <div className="fire-divider-center mt-3 mb-6" />
            <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-cream)] leading-tight">
              Does any of this sound familiar?
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              'You are going through perimenopause and feel like nobody has real answers for a brain like yours',
              'You have spent years being "the strong one" - and honestly, you are just tired',
              'You have masked and performed and shrunk yourself to fit into spaces that were never made for you',
              'You feel something shifting inside you and you want to understand it, not fight it',
              'You want to be around women who actually get it - not just women who say they do',
              'You are ready to stop just getting through each day and start actually living',
            ].map((item, i) => (
              <AnimatedSection key={i} delay={0.07 * i}>
                <div className="card-dark p-5 flex gap-4">
                  <span className="text-[var(--color-ember)] mt-1 flex-shrink-0 text-xs font-bold">-</span>
                  <p className="text-sm text-[var(--color-cream)]/80 leading-relaxed">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <p className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--color-gold)] italic">
              If you felt even one of those in your chest - this was made for you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section-pad bg-[var(--color-void)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">What You Receive</span>
              <div className="fire-divider-center mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-cream)]">
                What You Get When You Join
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((p, i) => (
              <AnimatedSection key={p.title} delay={0.1 * i}>
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
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 10 WEEKS OVERVIEW */}
      <section className="section-pad bg-[var(--color-ember-deep)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">The Journey</span>
              <div className="fire-divider-center mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-cream)]">
                What Our 10 Weeks Look Like
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WEEKS.map((week, i) => (
              <AnimatedSection key={week.num} delay={0.05 * i}>
                <div className="card-dark p-5 h-full group">
                  <p className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-ember)]/30 group-hover:text-[var(--color-ember)]/60 transition-colors">
                    {week.num}
                  </p>
                  <h4 className="mt-2 font-[family-name:var(--font-serif)] text-base text-[var(--color-gold)]">
                    {week.title}
                  </h4>
                  <p className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed">{week.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="text-center mt-10">
              <Link href="/about" className="btn-outline-cream">
                See the Full Program
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ABOUT LIA TEASER */}
      <section className="section-pad bg-[var(--color-void)]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-plum)] to-[var(--color-ember-deep)] border border-[var(--color-ember)]/20 flex items-center justify-center shadow-2xl">
                  <span className="font-[family-name:var(--font-great-vibes)] text-8xl text-[var(--color-gold)]/30">Lia</span>
                </div>
                <div className="absolute -bottom-5 -right-5 bg-[var(--color-ember)] rounded-2xl px-5 py-4">
                  <p className="text-xs text-[var(--color-cream)] tracking-widest uppercase opacity-80">Sacred</p>
                  <p className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-cream)]">Facilitator of</p>
                  <p className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-cream)]">Transformation</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <span className="section-label">Your Facilitator</span>
              <div className="fire-divider mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-cream)] leading-tight">
                Lia{' '}
                <span className="font-[family-name:var(--font-great-vibes)] text-[var(--color-gold)] text-6xl">
                  Dominique
                </span>
              </h2>
              <p className="mt-2 text-[var(--color-ember)] text-sm tracking-widest uppercase font-medium">
                Sacred Facilitator of Transformation
              </p>
              <p className="mt-5 text-[var(--color-cream)]/70 leading-relaxed">
                Lia is a neurodivergent woman who has been exactly where you are. She went through perimenopause without a roadmap - and came out the other side knowing she had to build one for everyone who came after her.
              </p>
              <p className="mt-4 text-[var(--color-cream)]/70 leading-relaxed">
                She is not here to coach you or fix you. She is here to sit with you, walk with you, and remind you of who you already are.
              </p>
              <Link href="/lia" className="btn-outline-cream mt-8 inline-flex">
                Her Full Story
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WAITLIST CTA */}
      <section className="section-pad relative overflow-hidden bg-[var(--color-ember-deep)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[var(--color-ember)]/15 blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <AnimatedSection>
            <WaitlistForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
