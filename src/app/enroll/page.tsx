'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/shared/AnimatedSection'
import Link from 'next/link'

const QUESTIONS = [
  'How long have you been moving through perimenopause? What has that been like for you?',
  'Have you received a neurodivergent diagnosis - ADHD, autism, or something else? Share only what feels comfortable.',
  'What brought you here? What is it about Her Sacred Fire that made you stop and pay attention?',
  'What does transformation mean to you right now? Not the goal version - the honest one.',
]

export default function EnrollPage() {
  const [form, setForm] = useState({ name: '', email: '', answers: ['', '', '', ''] })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function updateAnswer(i: number, val: string) {
    setForm((f) => {
      const answers = [...f.answers]
      answers[i] = val
      return { ...f, answers }
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full px-5 py-3.5 rounded-xl bg-white/5 border border-[var(--color-ember)]/25 text-[var(--color-cream)] placeholder:text-[var(--color-muted)] text-sm outline-none focus:border-[var(--color-gold)] transition-colors'

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-[var(--color-void)] relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[var(--color-ember)]/10 blur-3xl pointer-events-none" />
        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label">Waitlist</span>
            <div className="fire-divider-center mt-3 mb-4" />
            <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-[var(--color-cream)] leading-tight">
              Your Fire{' '}
              <span className="font-[family-name:var(--font-great-vibes)] text-[var(--color-ember-glow)] text-7xl sm:text-8xl block mt-1">
                is Waiting
              </span>
            </h1>
            <p className="mt-6 text-[var(--color-cream)]/70 max-w-xl mx-auto leading-relaxed">
              Doors are not open yet - but your place can be held right now. Join the waitlist and you will be the first to know the moment enrollment begins.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming soon banner */}
      <section className="py-6 bg-[var(--color-ember)]">
        <div className="section-container text-center">
          <p className="text-[var(--color-cream)] text-sm font-medium tracking-wide">
            Enrollment Opening Soon - Waitlist Members Get First Access
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-pad bg-[var(--color-ember-deep)]">
        <div className="section-container max-w-2xl mx-auto">
          {status === 'success' ? (
            <AnimatedSection>
              <div className="text-center py-16">
                <span className="font-[family-name:var(--font-great-vibes)] text-5xl text-[var(--color-gold)] block mb-4">Your fire is registered.</span>
                <h2 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-cream)] mb-4">
                  Your fire is registered.
                </h2>
                <p className="text-[var(--color-muted)] leading-relaxed mb-8 max-w-md mx-auto">
                  You are on the waitlist. When the doors open, you will be among the very first to know. Watch your inbox - something beautiful is coming.
                </p>
                <Link href="/fire-circle" className="btn-outline-cream">
                  Join the Free Fire Circle While You Wait
                </Link>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              <div className="text-center mb-10">
                <h2 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-cream)]">
                  Save Your Seat
                </h2>
                <p className="mt-3 text-[var(--color-muted)] text-sm">
                  Before you go, take a few minutes to share a little about where you are. This helps Lia make sure every woman who joins is truly ready - and truly supported.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[var(--color-muted)] mb-2 tracking-widest uppercase">First Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[var(--color-muted)] mb-2 tracking-widest uppercase">Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="your@email.com" className={inputClass} />
                  </div>
                </div>

                {QUESTIONS.map((q, i) => (
                  <div key={i}>
                    <label className="block text-xs font-medium text-[var(--color-muted)] mb-2 tracking-widest uppercase">
                      Question {i + 1}
                    </label>
                    <p className="text-base sm:text-lg text-[var(--color-cream)]/80 mb-3 font-[family-name:var(--font-serif)] italic leading-relaxed">{q}</p>
                    <textarea
                      rows={3}
                      value={form.answers[i]}
                      onChange={(e) => updateAnswer(i, e.target.value)}
                      className={`${inputClass} resize-none`}
                      placeholder="Share what feels true for you..."
                    />
                  </div>
                ))}

                <button type="submit" disabled={status === 'loading'} className="btn-fire w-full text-base py-4">
                  {status === 'loading' ? 'Submitting...' : 'Join the Waitlist'}
                </button>

                {status === 'error' && (
                  <p className="text-center text-sm text-[var(--color-ember-light)]">
                    Something went wrong. Please email lia@hersacredfire.com directly.
                  </p>
                )}
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  )
}
