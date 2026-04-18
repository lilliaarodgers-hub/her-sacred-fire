'use client'

import { useState } from 'react'

interface WaitlistFormProps {
  heading?: string
  subtext?: string
  compact?: boolean
}

export default function WaitlistForm({
  heading = 'Something is telling you this is for you.',
  subtext = 'Trust that feeling. Add your name and be the first to know when enrollment opens.',
  compact = false,
}: WaitlistFormProps) {
  const [form, setForm] = useState({ name: '', email: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-[var(--color-ember)]/20 flex items-center justify-center mx-auto mb-5 border border-[var(--color-ember)]/40">
          <span className="font-[family-name:var(--font-great-vibes)] text-3xl text-[var(--color-gold)]">Your fire is lit.</span>
        </div>
        <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--color-cream)] mt-4 mb-2">
          You are in.
        </h3>
        <p className="text-[var(--color-muted)] text-sm">
          You are on the list. Watch your inbox - something beautiful is on its way to you.
        </p>
      </div>
    )
  }

  return (
    <div className={compact ? '' : 'text-center max-w-lg mx-auto'}>
      {!compact && (
        <>
          <span className="section-label text-base">Waitlist</span>
          <div className="gold-divider-center mt-3 mb-4" />
          <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl text-[var(--color-cream)] mb-3">
            {heading}
          </h2>
          <p className="text-base text-[var(--color-muted)] mb-8 leading-relaxed">{subtext}</p>
        </>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {!compact && (
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your first name"
            required
            className="w-full px-5 py-3.5 rounded-full bg-white/6 border border-[var(--color-ember)]/30 text-[var(--color-cream)] placeholder:text-[var(--color-muted)] text-sm outline-none focus:border-[var(--color-gold)] transition-colors"
          />
        )}
        <div className={compact ? 'flex gap-3' : 'flex flex-col gap-4'}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="your@email.com"
            required
            className="flex-1 w-full px-5 py-3.5 rounded-full bg-white/6 border border-[var(--color-ember)]/30 text-[var(--color-cream)] placeholder:text-[var(--color-muted)] text-sm outline-none focus:border-[var(--color-gold)] transition-colors"
          />
          <button type="submit" disabled={status === 'loading'} className={`btn-fire whitespace-nowrap ${compact ? '' : 'w-full'}`}>
            {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
          </button>
        </div>
      </form>

      {status === 'error' && (
        <p className="mt-3 text-xs text-[var(--color-ember-light)] text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  )
}
