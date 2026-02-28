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
    name: 'William Hahn, PhD',
    title: 'AI Research & Technical Architecture',
    linkedin: 'https://www.linkedin.com/in/william-edward-hahn-532654124/',
    credentials: [
      'Ph.D., Machine Perception, Florida Atlantic University',
      'Co-Director, Machine Perception & Cognitive Robotics Lab (MPCR)',
      'Co-Founder & CSO, PureCipher (Defense AI)',
      'Former CEO, VoxelRx (Deep Learning & Medical Imaging)',
      'B.S. Mathematics & Physics, Guilford College',
    ],
    bio: [
      'William holds a Ph.D. in Machine Perception from Florida Atlantic University, where his doctoral research focused on complex systems and brain sciences. He has been a Research Scientist and Co-Director of the Machine Perception and Cognitive Robotics Laboratory at FAU since 2011, one of the longest-running applied AI research programs in the region.',
      'As Co-Founder and Chief Science Officer of PureCipher, he develops AI systems for defense-grade clients where the margin for error is effectively zero.',
      'Previously, as CEO of VoxelRx, he led the application of deep learning to medical imaging, deploying AI in one of the most regulated and high-stakes environments that exists.',
    ],
  },
  {
    index: '02',
    name: 'Brett Hahn',
    title: 'Commercial Strategy & Client Advisory',
    linkedin: 'https://www.linkedin.com/in/brett-hahn-142b5163/',
    credentials: [
      'Sr. Manager, MarTech Operations, Comcast',
      'Director of CRM Operations, C3 Industries',
      'CRM Leadership: Vail Resorts, Light & Wonder, Caesars Entertainment',
      'Founder, Indian Lakes Marketing',
    ],
    bio: [
      'Brett has spent fifteen years building and operating data-driven marketing systems at enterprise scale, across some of the most operationally complex and compliance-sensitive industries in the country.',
      'At Comcast, he led the strategy, governance, and optimization of the residential marketing technology ecosystem as Sr. Manager of MarTech Operations. At C3 Industries, he directed CRM operations across a fast-growing multi-state retail network.',
      'Earlier in his career, he held CRM leadership roles at Vail Resorts, Light & Wonder, Rivers Casino, and Caesars Entertainment, developing deep expertise in segmentation, lifecycle strategy, and data architecture across regulated environments.',
      'He founded Indian Lakes Marketing in 2024, a consulting practice focused on helping businesses navigate modern marketing with clarity. At Hahn AI, Brett is responsible for client strategy, commercial positioning, and ensuring every engagement starts with an honest assessment of business value before any technology is discussed.',
    ],
  },
  {
    index: '03',
    name: 'Chris Hahn',
    title: 'Implementation & Compliance',
    linkedin: null,
    credentials: [
      'Technical Deployment Specialist',
      'Quality Management Systems',
      'Regulatory Compliance & Operational Systems',
    ],
    bio: [
      'Chris is responsible for what actually ships. His background in quality management and regulatory compliance means he approaches every implementation with a systems mindset: mapping dependencies, documenting processes, and building for auditability from the start.',
      'In regulated industries, documentation is not optional. Chris ensures that AI implementations meet the compliance requirements of healthcare, financial services, and other regulated verticals without sacrificing operational effectiveness.',
      'Every Hahn AI deliverable is documented to the standard that Chris sets. Your team can maintain it. Your auditors can review it. And if circumstances change, you are not dependent on us to keep it running.',
    ],
  },
]


export default function AboutPage() {
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
            // About
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
            Hahn AI is an advisory firm built around one conviction:
            AI implementation should be as rigorous and accountable as the
            businesses it serves. Three principals. No middlemen. No associates
            handed your account.
          </p>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────────────── */}
      <section
        className="sec"
        style={{ padding: '96px 56px', borderBottom: `1px solid ${BORDER}` }}
      >
        <div
          className="grid-2col"
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
                fontSize: '1rem',
                lineHeight: 2.0,
                color: WD,
                marginBottom: 24,
              }}
            >
              Vendors sell software. Generalist consultants sell hours. Neither
              has a stake in whether the AI actually performs. Hahn AI is built
              differently. We are principals, not account managers, and our
              reputation is attached to every engagement we accept.
            </p>
            <p
              style={{ fontFamily: MONO, fontSize: '1rem', lineHeight: 2.0, color: WD }}
            >
              We take a limited number of clients at any time. We begin with an
              audit, not a pitch. And we measure success by operational outcomes,
              not by the number of tools installed.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ─────────────────────────────────────────────────── */}
      <section className="sec" style={{ padding: '96px 56px' }}>
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
              Who you work with.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {FOUNDERS.map((f) => (
              <div
                key={f.index}
                className="grid-2col card"
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
                        style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
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

                  {/* LinkedIn link */}
                  {f.linkedin && (
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        marginTop: 24,
                        fontFamily: MONO,
                        fontSize: 10,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: G,
                      }}
                    >
                      View LinkedIn Profile →
                    </a>
                  )}
                  </div>
                </div>

                {/* Right: bio */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {f.bio.map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: MONO,
                        fontSize: '1rem',
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

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section
        className="sec"
        style={{ borderTop: `1px solid ${BORDER}`, padding: '96px 56px' }}
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
            <p style={{ fontFamily: MONO, fontSize: 11, color: WD, letterSpacing: '0.04em' }}>
              A 30-minute discovery call. No pitch. No obligation.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-full"
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
