import Link from 'next/link'

const G = '#C9A84C'
const W = '#F5F5F0'
const WD = 'rgba(245, 245, 240, 0.55)'
const BORDER = 'rgba(201, 168, 76, 0.14)'
const MONO = 'var(--font-plex-mono)'
const SERIF = 'var(--font-cormorant)'

const FOUNDERS = [
  {
    index: '01',
    name: 'Dr. William Hahn',
    title: 'Chief Executive Officer',
    credentials: [
      'AI Scientist',
      'Chief Science Officer — Pure Cipher (AI & National Defense)',
      'Director — AI & Robotics Lab, Florida Atlantic University',
    ],
    bio: [
      'Dr. Hahn brings research-grade rigor to commercial AI deployment. His work at Florida Atlantic University focuses on machine learning systems, autonomous robotics, and applied AI — the same scientific foundation that underlies every Hahn AI engagement.',
      'At Pure Cipher, he leads AI strategy for defense-grade clients where the cost of error is not measured in revenue. That standard of accountability carries into every SMB engagement Hahn AI accepts.',
      'He believes most AI consulting is theater. His mandate is to eliminate the gap between what AI can do in a lab and what it actually does for a business.',
    ],
  },
  {
    index: '02',
    name: 'Brett Hahn',
    title: 'Chief Strategy & Growth Officer',
    credentials: [
      '15+ Years in Marketing Technology & CRM',
      'Digital Transformation & Automation Specialist',
      '5 Years Consulting — SMB & Mid-Market',
    ],
    bio: [
      'Brett has spent fifteen years at the intersection of technology and commercial operations — implementing marketing automation, CRM systems, and digital transformation initiatives for businesses ranging from local operators to regional enterprises.',
      'His consulting background means he has seen, firsthand, what happens when technology is implemented without operational alignment. He specializes in identifying where AI creates genuine leverage versus where it creates complexity.',
      'Brett is responsible for strategy, client relationships, and ensuring every engagement starts with an honest conversation about business value before any technology is discussed.',
    ],
  },
  {
    index: '03',
    name: 'Chris Hahn',
    title: 'Chief Implementation & Compliance Officer',
    credentials: [
      'Technical Deployment Specialist',
      'Quality Management Systems',
      'Regulatory Compliance & Operational Systems',
    ],
    bio: [
      'Chris is responsible for what actually ships. His background in quality management and regulatory compliance means he approaches every implementation with a systems mindset — mapping dependencies, documenting processes, and building for auditability from the start.',
      'In regulated industries, documentation is not optional. Chris ensures that AI implementations meet the compliance requirements of healthcare, financial services, and other regulated verticals without sacrificing operational effectiveness.',
      'Every Hahn AI deliverable is documented to the standard that Chris sets. Your team can maintain it. Your auditors can review it. And if circumstances change, you are not dependent on us to keep it running.',
    ],
  },
]

const REGIONS = [
  {
    name: 'Northeast Indiana',
    desc: 'Fort Wayne and surrounding communities. Manufacturing, distribution, healthcare, and professional services.',
  },
  {
    name: 'South Florida',
    desc: 'Miami-Dade, Broward, and Palm Beach counties. Financial services, real estate, legal, and healthcare.',
  },
  {
    name: 'Eastern North Carolina',
    desc: 'Raleigh–Durham corridor and coastal communities. Professional services, agriculture tech, and light manufacturing.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────────────────── */}
      <section style={{ padding: '192px 56px 96px', borderBottom: `1px solid ${BORDER}` }}>
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
            // About
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(60px, 8vw, 100px)',
              fontWeight: 300,
              color: W,
              lineHeight: 0.95,
              marginBottom: 40,
            }}
          >
            The Firm.
          </h1>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 12,
              lineHeight: 2.0,
              color: WD,
              maxWidth: 580,
            }}
          >
            Hahn AI is a boutique advisory firm built around one conviction:
            AI implementation should be as rigorous and accountable as the
            businesses it serves. Three principals. No middlemen. No associates
            handed your account.
          </p>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────────────── */}
      <section style={{ padding: '96px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
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
                marginBottom: 24,
              }}
            >
              // Our Conviction
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(36px, 4.5vw, 52px)',
                fontWeight: 300,
                color: W,
                lineHeight: 1.1,
              }}
            >
              Most AI consulting
              <br />
              is{' '}
              <em style={{ fontStyle: 'italic', color: G }}>theater.</em>
            </h2>
          </div>
          <div style={{ paddingTop: 8 }}>
            <p
              style={{
                fontFamily: MONO,
                fontSize: 12,
                lineHeight: 2.0,
                color: WD,
                marginBottom: 24,
              }}
            >
              Vendors sell software. Generalist consultants sell hours. Neither
              has a stake in whether the AI actually performs. Hahn AI is built
              differently. We are principals — not account managers — and our
              reputation is attached to every engagement we accept.
            </p>
            <p
              style={{
                fontFamily: MONO,
                fontSize: 12,
                lineHeight: 2.0,
                color: WD,
              }}
            >
              We take a limited number of clients at any time. We begin with an
              audit — not a pitch. And we measure success by operational outcomes,
              not by the number of tools installed.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 56px' }}>
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
                fontSize: 'clamp(38px, 4.5vw, 58px)',
                fontWeight: 300,
                color: W,
              }}
            >
              Who you work with.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {FOUNDERS.map((f) => (
              <div
                key={f.index}
                style={{
                  border: `1px solid ${BORDER}`,
                  padding: '60px 52px',
                  display: 'grid',
                  gridTemplateColumns: '280px 1fr',
                  gap: 72,
                  alignItems: 'start',
                }}
              >
                {/* Left: identity */}
                <div>
                  <div
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      color: 'rgba(201, 168, 76, 0.4)',
                      letterSpacing: '0.2em',
                      marginBottom: 20,
                    }}
                  >
                    {f.index}
                  </div>
                  <h3
                    style={{
                      fontFamily: SERIF,
                      fontSize: 34,
                      fontWeight: 400,
                      color: W,
                      marginBottom: 12,
                    }}
                  >
                    {f.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      color: G,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: 28,
                    }}
                  >
                    {f.title}
                  </div>
                  <div
                    style={{
                      paddingTop: 24,
                      borderTop: `1px solid ${BORDER}`,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                    }}
                  >
                    {f.credentials.map((c) => (
                      <div
                        key={c}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 12,
                        }}
                      >
                        <span
                          style={{
                            width: 12,
                            height: 1,
                            background: 'rgba(201, 168, 76, 0.4)',
                            display: 'inline-block',
                            flexShrink: 0,
                            marginTop: 8,
                          }}
                        />
                        <span
                          style={{
                            fontFamily: MONO,
                            fontSize: 10,
                            color: 'rgba(245, 245, 240, 0.38)',
                            lineHeight: 1.75,
                          }}
                        >
                          {c}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: bio */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {f.bio.map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: MONO,
                        fontSize: 12,
                        lineHeight: 2.0,
                        color: i === 0 ? WD : 'rgba(245, 245, 240, 0.42)',
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGIONS ──────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '96px 56px',
          borderTop: `1px solid ${BORDER}`,
          background:
            'radial-gradient(ellipse at 20% 60%, rgba(201,168,76,0.04) 0%, transparent 65%)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
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
              // Where We Work
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(38px, 4.5vw, 52px)',
                fontWeight: 300,
                color: W,
              }}
            >
              Three regions.
              <br />
              Local presence matters.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
              border: `1px solid ${BORDER}`,
            }}
          >
            {REGIONS.map((r, i) => (
              <div
                key={r.name}
                style={{
                  padding: '44px 40px',
                  border: `1px solid ${BORDER}`,
                }}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    color: 'rgba(201, 168, 76, 0.4)',
                    letterSpacing: '0.2em',
                    marginBottom: 16,
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
                    marginBottom: 16,
                  }}
                >
                  {r.name}
                </h3>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    lineHeight: 1.95,
                    color: 'rgba(245, 245, 240, 0.42)',
                  }}
                >
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: '96px 56px',
        }}
      >
        <div
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
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 300,
                color: W,
                marginBottom: 16,
              }}
            >
              Start with a conversation.
            </h2>
            <p
              style={{
                fontFamily: MONO,
                fontSize: 11,
                color: WD,
                letterSpacing: '0.04em',
              }}
            >
              A 30-minute discovery call. No pitch. No obligation.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              fontFamily: MONO,
              fontSize: 12,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding: '16px 40px',
              background: G,
              color: '#080808',
              fontWeight: 500,
              flexShrink: 0,
            }}
          >
            Book an Audit →
          </Link>
        </div>
      </section>
    </>
  )
}
