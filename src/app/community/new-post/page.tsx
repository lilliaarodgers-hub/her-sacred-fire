'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'

const CATEGORIES = [
  { label: 'Introductions' },
  { label: 'Perimenopause' },
  { label: 'Neurospicy Life' },
  { label: 'Wins & Celebrations' },
  { label: 'Need Support' },
  { label: 'Resources' },
]

export default function NewPostPage() {
  const [form, setForm] = useState({ title: '', category: '', body: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('/api/community/post', {
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

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[var(--color-ember-deep)] flex items-center justify-center">
        <div className="text-center px-8">
          <span className="font-[family-name:var(--font-great-vibes)] text-4xl text-[var(--color-gold)]">Shared.</span>
          <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl text-[var(--color-cream)]">
            Your voice is heard.
          </h2>
          <p className="mt-3 text-[var(--color-muted)] mb-8">Your post has been shared with the circle.</p>
          <Link href="/community" className="btn-fire">Back to Community</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-[var(--color-void)]">
        <div className="section-container max-w-2xl mx-auto">
          <AnimatedSection>
            <Link href="/community" className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors mb-8">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Community
            </Link>

            <span className="section-label">New Post</span>
            <div className="fire-divider mt-3 mb-4" />
            <h1 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-cream)] mb-8">
              Share with the Circle
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-[var(--color-muted)] mb-2 tracking-widest uppercase">Category *</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.label}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, category: cat.label }))}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-colors ${
                        form.category === cat.label
                          ? 'bg-[var(--color-ember)]/20 border-[var(--color-ember)] text-[var(--color-cream)]'
                          : 'border-[var(--color-ember)]/20 text-[var(--color-muted)] hover:border-[var(--color-ember)]/40 hover:text-[var(--color-cream)]'
                      }`}
                    >
                      <span className="text-[var(--color-ember)] text-xs">-</span>
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--color-muted)] mb-2 tracking-widest uppercase">Title *</label>
                <input type="text" required value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} placeholder="What do you want to share?" className={inputClass} />
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--color-muted)] mb-2 tracking-widest uppercase">Your Message *</label>
                <textarea
                  required
                  rows={8}
                  value={form.body}
                  onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
                  placeholder="Speak from your heart. This is a safe space."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex gap-4">
                <button type="submit" disabled={status === 'loading' || !form.category} className="btn-fire flex-1">
                  {status === 'loading' ? 'Sharing...' : 'Share with the Circle 🔥'}
                </button>
                <Link href="/community" className="btn-outline-cream">Cancel</Link>
              </div>

              {status === 'error' && (
                <p className="text-center text-sm text-[var(--color-ember-light)]">Something went wrong. Please try again.</p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
