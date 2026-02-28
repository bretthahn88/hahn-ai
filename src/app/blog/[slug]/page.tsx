import { notFound } from 'next/navigation'
import Link from 'next/link'
import { marked } from 'marked'
import { getAllPosts, getPostBySlug, getPostSlugs } from '@/lib/posts'

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

export async function generateStaticParams() {
  return getPostSlugs().map((f) => ({ slug: f.replace(/\.md$/, '') }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug)
    return { title: `${post.title} — Hahn AI`, description: post.excerpt }
  } catch {
    return { title: 'Post Not Found — Hahn AI' }
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post
  try {
    post = getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  const html = await marked.parse(post.content)

  return (
    <>
      {/* ── POST HERO ─────────────────────────────────────────────────── */}
      <section
        className="sec-hero"
        style={{ padding: '192px 56px 80px', borderBottom: `1px solid ${BORDER}` }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(245, 245, 240, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 40,
            }}
          >
            ← The Brief
          </Link>

          {/* Meta */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              marginBottom: 28,
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
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 300,
              color: W,
              lineHeight: 1.05,
              marginBottom: 32,
            }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p
            style={{
              fontFamily: MONO,
              fontSize: '1rem',
              lineHeight: 2.0,
              color: WD,
            }}
          >
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ── POST BODY ─────────────────────────────────────────────────── */}
      <section className="sec" style={{ padding: '80px 56px 120px' }}>
        <div
          className="prose"
          style={{ maxWidth: 800, margin: '0 auto' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: '72px 56px',
        }}
      >
        <div
          className="cta-row"
          style={{
            maxWidth: 800,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 40,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 300,
                color: W,
                marginBottom: 12,
              }}
            >
              Ready to find out where AI fits?
            </h2>
            <p style={{ fontFamily: MONO, fontSize: 11, color: WD }}>
              Start with a 30-minute discovery call. No pitch. No obligation.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-full"
            style={{
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding: '14px 32px',
              background: G,
              color: '#080808',
              fontWeight: 500,
              flexShrink: 0,
              display: 'inline-block',
              textAlign: 'center',
            }}
          >
            Book an Audit →
          </Link>
        </div>
      </section>
    </>
  )
}
