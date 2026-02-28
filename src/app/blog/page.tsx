import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

const G = '#C9A84C'
const W = '#F5F5F0'
const WD = 'rgba(245, 245, 240, 0.55)'
const BORDER = 'rgba(201, 168, 76, 0.14)'
const MONO = 'var(--font-plex-mono)'
const SERIF = 'var(--font-cormorant)'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const metadata = {
  title: 'Blog — Hahn AI',
  description: 'Perspectives on AI implementation, operational readiness, and working with AI in the real world.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────────────────── */}
      <section
        className="sec-hero"
        style={{ padding: '192px 56px 96px', borderBottom: `1px solid ${BORDER}` }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: G,
              marginBottom: 24,
            }}
          >
            // Perspectives
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(56px, 8vw, 100px)',
              fontWeight: 300,
              color: W,
              lineHeight: 0.95,
              marginBottom: 40,
            }}
          >
            The Brief.
          </h1>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 12,
              lineHeight: 2.0,
              color: WD,
              maxWidth: 520,
            }}
          >
            Operational perspectives on AI implementation, readiness, and
            working with emerging technology in businesses that have real
            complexity.
          </p>
        </div>
      </section>

      {/* ── POST LIST ─────────────────────────────────────────────────── */}
      <section className="sec" style={{ padding: '96px 56px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {posts.length === 0 ? (
            <p style={{ fontFamily: MONO, fontSize: 12, color: WD }}>
              No posts yet.
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ display: 'block' }}
                >
                  <div
                    className="card"
                    style={{
                      border: `1px solid ${BORDER}`,
                      padding: '48px 52px',
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      alignItems: 'start',
                      gap: 48,
                      transition: 'border-color 0.2s',
                    }}
                  >
                    <div>
                      {/* Meta */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 24,
                          marginBottom: 20,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: MONO,
                            fontSize: 10,
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: G,
                          }}
                        >
                          {formatDate(post.date)}
                        </span>
                        <span
                          style={{
                            width: 20,
                            height: 1,
                            background: BORDER,
                            display: 'inline-block',
                          }}
                        />
                        <span
                          style={{
                            fontFamily: MONO,
                            fontSize: 10,
                            letterSpacing: '0.1em',
                            color: 'rgba(245, 245, 240, 0.3)',
                          }}
                        >
                          {post.author}
                        </span>
                      </div>

                      {/* Title */}
                      <h2
                        style={{
                          fontFamily: SERIF,
                          fontSize: 'clamp(28px, 3vw, 40px)',
                          fontWeight: 300,
                          color: W,
                          lineHeight: 1.1,
                          marginBottom: 20,
                        }}
                      >
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p
                        style={{
                          fontFamily: MONO,
                          fontSize: 12,
                          lineHeight: 1.95,
                          color: WD,
                          maxWidth: 640,
                        }}
                      >
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      style={{
                        fontFamily: MONO,
                        fontSize: 11,
                        letterSpacing: '0.14em',
                        color: G,
                        whiteSpace: 'nowrap',
                        paddingTop: 4,
                      }}
                    >
                      Read →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
