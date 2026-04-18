import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'

export const metadata: Metadata = {
  title: 'The Community',
  description: 'The Her Sacred Fire community space — where women gather, share, and hold each other.',
}

const CATEGORIES = [
  { label: 'All Posts', slug: 'all' },
  { label: 'Introductions', slug: 'introductions' },
  { label: 'Perimenopause', slug: 'perimenopause' },
  { label: 'Neurospicy Life', slug: 'neurospicy' },
  { label: 'Wins & Celebrations', slug: 'wins' },
  { label: 'Need Support', slug: 'support' },
  { label: 'Resources', slug: 'resources' },
]

const PLACEHOLDER_POSTS = [
  {
    id: 1,
    author: 'Tamara R.',
    initials: 'TR',
    category: 'Introductions',
    categoryIcon: '',
    time: '2 hours ago',
    title: 'Finally found my people',
    body: "I've been lurking for two weeks before posting. I don't know why it took me so long — maybe I was afraid to actually be seen. But here I am. I was diagnosed with ADHD at 43, right in the thick of perimenopause, and I genuinely thought I was losing my mind. Finding this community has been everything.",
    replies: 14,
    reactions: 32,
    isPinned: true,
  },
  {
    id: 2,
    author: 'Denise M.',
    initials: 'DM',
    category: 'Wins & Celebrations',
    categoryIcon: '',
    time: '5 hours ago',
    title: 'I said NO and meant it',
    body: "Three months ago I could not say no to anyone about anything. Yesterday I declined a family obligation that has drained me for years. Just — declined it. No explanation, no apology spiral. I sat with the discomfort and it passed. If you told me this was possible in January I would not have believed you.",
    replies: 27,
    reactions: 89,
    isPinned: false,
  },
  {
    id: 3,
    author: 'Keisha T.',
    initials: 'KT',
    category: 'Neurospicy Life',
    categoryIcon: '',
    time: '1 day ago',
    title: 'Sensory overwhelm during hot flashes — anyone else?',
    body: "My hot flashes trigger full sensory overwhelm. The heat, the sounds suddenly too loud, the clothes suddenly unbearable. My neurologist says these things are unrelated but my body is telling me otherwise. Has anyone else experienced this intersection? What helps you?",
    replies: 41,
    reactions: 67,
    isPinned: false,
  },
  {
    id: 4,
    author: 'Sandra L.',
    initials: 'SL',
    category: 'Resources',
    categoryIcon: '',
    time: '2 days ago',
    title: 'Body doubling — a game changer for ADHD + peri brain fog',
    body: "I know some of us have talked about executive dysfunction getting worse in perimenopause. I started doing virtual body doubling sessions and it has genuinely transformed my days. Sharing the resource I use — it is free. Linking in the comments for anyone who wants to try it.",
    replies: 19,
    reactions: 54,
    isPinned: false,
  },
]

export default function CommunityPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-[var(--color-void)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[var(--color-plum)]/20 blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[var(--color-ember)]/10 blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <AnimatedSection>
                <span className="section-label">Sacred Space</span>
                <div className="fire-divider mt-3 mb-4" />
                <h1 className="font-[family-name:var(--font-serif)] text-5xl sm:text-6xl text-[var(--color-cream)]">
                  <span className="font-[family-name:var(--font-great-vibes)] text-[var(--color-gold)] text-6xl sm:text-7xl">
                    Community
                  </span>
                </h1>
                <p className="mt-3 text-[var(--color-muted)] max-w-md">
                  A place to land between sessions. For the women of Her Sacred Fire and The Fire Circle.
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.1}>
              <Link href="/community/new-post" className="btn-fire whitespace-nowrap">
                + Share with the Circle
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="section-pad bg-[var(--color-ember-deep)]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-8">

            {/* Sidebar */}
            <aside>
              <AnimatedSection direction="left">
                <div className="card-dark p-5 sticky top-24">
                  <h3 className="section-label mb-4">Categories</h3>
                  <nav className="space-y-1">
                    {CATEGORIES.map((cat) => (
                      <a
                        key={cat.slug}
                        href={`/community?category=${cat.slug}`}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                          cat.slug === 'all'
                            ? 'bg-[var(--color-ember)]/20 text-[var(--color-cream)]'
                            : 'text-[var(--color-muted)] hover:text-[var(--color-cream)] hover:bg-white/5'
                        }`}
                      >
                        <svg className="w-2.5 h-3 flex-shrink-0 text-[var(--color-ember)]/60" viewBox="0 0 24 32" fill="currentColor">
                          <path d="M12 3C12 3 18 10 18 16C18 20.4 15.3 24 12 24C8.7 24 6 20.4 6 16C6 12.5 7.5 10 7.5 10C7.5 10 6 15 10 17.5C10 17.5 5 14 5 9C5 5.5 8 3 12 3Z"/>
                        </svg>
                        <span>{cat.label}</span>
                      </a>
                    ))}
                  </nav>

                  <div className="mt-6 pt-6 border-t border-[var(--color-ember)]/15">
                    <h3 className="section-label mb-3">Community Rules</h3>
                    <ul className="space-y-2">
                      {[
                        'Hold space - do not fix',
                        'What is shared here, stays here',
                        'Speak from your own experience',
                        'No unsolicited advice',
                        'Celebrate each other freely',
                      ].map((rule) => (
                        <li key={rule} className="flex gap-2 text-xs text-[var(--color-muted)]">
                          <svg className="w-2.5 h-3 flex-shrink-0 mt-0.5 text-[var(--color-ember)]/60" viewBox="0 0 24 32" fill="currentColor">
                            <path d="M12 3C12 3 18 10 18 16C18 20.4 15.3 24 12 24C8.7 24 6 20.4 6 16C6 12.5 7.5 10 7.5 10C7.5 10 6 15 10 17.5C10 17.5 5 14 5 9C5 5.5 8 3 12 3Z"/>
                          </svg>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </aside>

            {/* Feed */}
            <div className="space-y-4">
              {PLACEHOLDER_POSTS.map((post, i) => (
                <AnimatedSection key={post.id} delay={0.07 * i}>
                  <article className="card-dark p-6 hover:border-[var(--color-ember)]/40 transition-colors group cursor-pointer">
                    {post.isPinned && (
                      <div className="flex items-center gap-1.5 text-xs text-[var(--color-gold)] mb-3">
                        <svg className="w-2.5 h-3 flex-shrink-0 text-[var(--color-ember)]/60" viewBox="0 0 24 32" fill="currentColor">
                          <path d="M12 3C12 3 18 10 18 16C18 20.4 15.3 24 12 24C8.7 24 6 20.4 6 16C6 12.5 7.5 10 7.5 10C7.5 10 6 15 10 17.5C10 17.5 5 14 5 9C5 5.5 8 3 12 3Z"/>
                        </svg>
                        <span className="tracking-widest uppercase font-medium">Pinned</span>
                      </div>
                    )}

                    {/* Author row */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-ember)] to-[var(--color-plum)] flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-white">{post.initials}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[var(--color-cream)]">{post.author}</p>
                        <p className="text-xs text-[var(--color-muted)]">{post.time}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-[var(--color-gold)] bg-[var(--color-ember)]/10 px-3 py-1 rounded-full flex-shrink-0">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-cream)] group-hover:text-[var(--color-gold)] transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3">
                      {post.body}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center gap-6 mt-5 pt-4 border-t border-[var(--color-ember)]/10">
                      <button className="flex items-center gap-2 text-xs text-[var(--color-muted)] hover:text-[var(--color-ember)] transition-colors">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 1l1.5 3.5H12l-2.75 2 1 3.5L7 8l-3.25 2 1-3.5L2 5h3.5L7 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                        </svg>
                        {post.reactions}
                      </button>
                      <button className="flex items-center gap-2 text-xs text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M1 1h12v9H8l-3 3V10H1V1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                        </svg>
                        {post.replies} replies
                      </button>
                      <span className="ml-auto text-xs text-[var(--color-ember)]/60 group-hover:text-[var(--color-ember)] transition-colors">
                        Read more →
                      </span>
                    </div>
                  </article>
                </AnimatedSection>
              ))}

              {/* App teaser */}
              <AnimatedSection delay={0.3}>
                <div className="card-dark p-6 border-[var(--color-gold)]/30 text-center">
                  <span className="font-[family-name:var(--font-serif)] text-sm text-[var(--color-ember)] tracking-widest uppercase">Coming Soon</span>
                  <h3 className="mt-3 font-[family-name:var(--font-serif)] text-xl text-[var(--color-cream)]">
                    Community App Coming Soon
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)] max-w-sm mx-auto">
                    The Her Sacred Fire app is in development - bringing this community to your pocket with notifications, direct messaging, and live session access.
                  </p>
                  <Link href="/enroll" className="btn-gold mt-5 inline-flex text-xs">
                    Join Waitlist for Early Access
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
