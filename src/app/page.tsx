import Link from 'next/link'
import ParticleCanvas from '@/components/ParticleCanvas'

const G = '#C9A84C'
const W = '#F5F5F0'
const WD = 'rgba(245, 245, 240, 0.55)'
const WF = 'rgba(245, 245, 240, 0.28)'
const BORDER = 'rgba(201, 168, 76, 0.14)'
const MONO = 'var(--font-plex-mono)'
const SERIF = 'var(--font-cormorant)'

const SERVICES = [
  {
    index: '01',
    name: 'AI Readiness &\nWorkflow Audit',
    price: '$2,500 – $5,000',
    desc: 'A structured review of your operations, software stack, data quality, and team capacity. Delivered as a written assessment with prioritized opportunities.',
  },
  {
    index: '02',
    name: 'AI Implementation\n& Integration',
    price: '$5,000 – $25,000+',
    desc: 'End-to-end deployment of AI tools and automations into your existing workflows — scoping, vendor selection, integration, testing, and team training.',
  },
  {
    index: '03',
    name: 'Ongoing AI\nAdvisory Retainer',
    price: '$2,000 – $6,000 / mo',
    desc: 'Strategic guidance, vendor oversight, and continuous optimization. Monthly reviews, priority access, and quarterly roadmap updates.',
  },
  {
    index: '04',
    name: 'Custom AI\nDevelopment',
    price: 'Scoped individually',
    desc: 'Proprietary model development, custom tooling, and specialized integrations for organizations with unique operational requirements.',
  },
]

const INDUSTRIES = [
  'Healthcare',
  'Legal',
  'Light Manufacturing',
  'Financial Services',
  'Distribution',
  'Real Estate',
  'Professional Services',
  'Regulated Industries',
]

const PRINCIPALS = [
  {
    name: 'Dr. William Hahn',
    title: 'AI Research & Technical Architecture',
    credentials: 'AI Scientist · FAU AI & Robotics Lab · Pure Cipher CSO',
    bio: 'Research-grade AI expertise applied to commercial operations. Brings the rigor of a lab to the discipline of a business.',
  },
  {
    name: 'Brett Hahn',
    title: 'Commercial Strategy & Client Advisory',
    credentials: '15+ Years Marketing Technology · CRM · Digital Transformation',
    bio: 'Translates technical AI capability into commercial strategy. Identifies where automation creates durable operational leverage.',
  },
  {
    name: 'Chris Hahn',
    title: 'Implementation & Compliance',
    credentials: 'Technical Deployment · Quality Management · Regulatory Compliance',
    bio: 'Ensures every implementation is documented, auditable, and built to last. Primary point of contact after deployment.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: 600,
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <ParticleCanvas />

        {/* Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 40% 50%, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0.88) 100%)',
          }}
        />

        {/* Content */}
        <div
          className="hero-wrap"
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 56px',
            width: '100%',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: G,
              marginBottom: 36,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span
              style={{
                width: 36,
                height: 1,
                background: G,
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            Where AI Meets Operational Discipline
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(48px, 9.5vw, 120px)',
              fontWeight: 300,
              lineHeight: 0.95,
              color: W,
              letterSpacing: '-0.015em',
              marginBottom: 44,
            }}
          >
            Intelligence,
            <br />
            <em style={{ fontStyle: 'italic', color: G }}>Applied.</em>
          </h1>

          {/* Subline */}
          <p
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '1.1rem',
              lineHeight: 1.85,
              color: WD,
              maxWidth: 500,
              marginBottom: 56,
            }}
          >
            AI advisory and implementation for organizations that compete on clarity, not buzzwords. Boutique. Rigorous. Accountable.
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link
              href="/contact"
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '14px 34px',
                background: G,
                color: '#080808',
                fontWeight: 500,
              }}
            >
              Book an AI Audit →
            </Link>
            <Link
              href="/services"
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '14px 34px',
                border: '1px solid rgba(201, 168, 76, 0.38)',
                color: 'rgba(245, 245, 240, 0.6)',
              }}
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: 44,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: 9,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(245, 245, 240, 0.2)',
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 44,
              background: 'linear-gradient(to bottom, rgba(201,168,76,0.35), transparent)',
            }}
          />
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────────────── */}
      <section
        className="pad-x"
        style={{
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          padding: '0 56px',
        }}
      >
        <div
          className="grid-3col"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          {[
            { stat: 'Nationwide', label: 'Service Area' },
            { stat: '20+', label: 'Years of Combined AI Experience' },
            { stat: 'Family-Led', label: 'Accountability that\'s personal, not contractual.' },
          ].map(({ stat, label }, i) => (
            <div
              key={stat}
              className="card"
              style={{
                padding: '48px 40px',
                borderRight: i < 2 ? `1px solid ${BORDER}` : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: 52,
                  fontWeight: 300,
                  color: G,
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {stat}
              </div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(245, 245, 240, 0.38)',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────────────── */}
      <section className="sec" style={{ padding: '120px 56px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: G,
                marginBottom: 20,
              }}
            >
              // What We Do
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 300,
                color: W,
              }}
            >
              Four engagements.
              <br />
              Every one accountable.
            </h2>
          </div>

          {/* Service cards */}
          <div
            className="grid-2col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 1,
              border: `1px solid ${BORDER}`,
            }}
          >
            {SERVICES.map((s) => (
              <div
                key={s.index}
                className="card"
                style={{
                  padding: '48px 44px',
                  border: `1px solid ${BORDER}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    color: 'rgba(201, 168, 76, 0.45)',
                    letterSpacing: '0.2em',
                  }}
                >
                  {s.index}
                </div>
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: 32,
                    fontWeight: 300,
                    color: W,
                    whiteSpace: 'pre-line',
                    lineHeight: 1.15,
                  }}
                >
                  {s.name}
                </h3>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    color: G,
                    letterSpacing: '0.08em',
                  }}
                >
                  {s.price}
                </div>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: '1.1rem',
                    lineHeight: 1.95,
                    color: 'rgba(245, 245, 240, 0.45)',
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              href="/services"
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: G,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span
                style={{ width: 32, height: 1, background: G, display: 'inline-block' }}
              />
              Full Service Details
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ─────────────────────────────────────────────── */}
      <section
        className="sec"
        style={{
          padding: '120px 56px',
          borderTop: `1px solid ${BORDER}`,
          background:
            'radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)',
        }}
      >
        <div
          className="grid-2col"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 96,
            alignItems: 'start',
          }}
        >
          {/* Left */}
          <div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: G,
                marginBottom: 20,
              }}
            >
              // Client Profile
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(36px, 4.5vw, 58px)',
                fontWeight: 300,
                color: W,
                marginBottom: 32,
                lineHeight: 1.1,
              }}
            >
              10 to 150 people.
              <br />
              Ready to operate
              <br />
              <em style={{ fontStyle: 'italic', color: G }}>differently.</em>
            </h2>
            <p
              style={{
                fontFamily: MONO,
                fontSize: '1.1rem',
                lineHeight: 2.0,
                color: WD,
                maxWidth: 440,
              }}
            >
              We work with established businesses that have real operational
              complexity and the discipline to implement solutions that stick.
              Not every company is ready for AI. We tell you honestly whether
              you are.
            </p>
          </div>

          {/* Right: industries */}
          <div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(245, 245, 240, 0.3)',
                marginBottom: 32,
              }}
            >
              Industries we serve
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {INDUSTRIES.map((ind) => (
                <span
                  key={ind}
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '8px 16px',
                    border: `1px solid ${BORDER}`,
                    color: 'rgba(245, 245, 240, 0.45)',
                  }}
                >
                  {ind}
                </span>
              ))}
            </div>
            <div
              style={{
                marginTop: 48,
                paddingTop: 40,
                borderTop: `1px solid ${BORDER}`,
              }}
            >
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: '1.1rem',
                  lineHeight: 1.9,
                  color: WF,
                  fontStyle: 'italic',
                }}
              >
                &ldquo;Not every company is ready for AI. We tell you
                honestly whether you are — and what it would take to get
                there.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PRINCIPALS ───────────────────────────────────────────── */}
      <section
        className="sec"
        style={{ padding: '120px 56px', borderTop: `1px solid ${BORDER}` }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: G,
                marginBottom: 20,
              }}
            >
              // The Principals
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(36px, 4.5vw, 58px)',
                fontWeight: 300,
                color: W,
              }}
            >
              Three founders.
              <br />
              No associates handed your account.
            </h2>
          </div>

          <div
            className="grid-3col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
              border: `1px solid ${BORDER}`,
            }}
          >
            {PRINCIPALS.map((p, i) => (
              <div
                key={p.name}
                className="card"
                style={{ padding: '44px 40px', border: `1px solid ${BORDER}` }}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    color: 'rgba(201, 168, 76, 0.4)',
                    letterSpacing: '0.2em',
                    marginBottom: 20,
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: 28,
                    fontWeight: 400,
                    color: W,
                    marginBottom: 10,
                  }}
                >
                  {p.name}
                </h3>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    color: G,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: 20,
                  }}
                >
                  {p.title}
                </div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    color: 'rgba(245, 245, 240, 0.3)',
                    lineHeight: 1.85,
                    marginBottom: 24,
                    paddingBottom: 24,
                    borderBottom: `1px solid ${BORDER}`,
                  }}
                >
                  {p.credentials}
                </div>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: '1.1rem',
                    lineHeight: 1.95,
                    color: 'rgba(245, 245, 240, 0.48)',
                  }}
                >
                  {p.bio}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              href="/about"
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: G,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span
                style={{ width: 32, height: 1, background: G, display: 'inline-block' }}
              />
              About the Firm
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section
        className="sec"
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: '100px 56px',
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.05) 0%, transparent 65%)',
        }}
      >
        <div
          className="cta-row"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 48,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: G,
                marginBottom: 20,
              }}
            >
              // Start Here
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(36px, 4.5vw, 60px)',
                fontWeight: 300,
                color: W,
                lineHeight: 1.05,
              }}
            >
              Begin with an
              <br />
              <em style={{ fontStyle: 'italic', color: G }}>AI Readiness Audit.</em>
            </h2>
          </div>
          <div style={{ flexShrink: 0 }}>
            <Link
              href="/contact"
              className="btn-full"
              style={{
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                padding: '18px 44px',
                background: G,
                color: '#080808',
                fontWeight: 500,
                display: 'inline-block',
              }}
            >
              Schedule Your Audit →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
