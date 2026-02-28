import Link from 'next/link'

const G = '#C9A84C'
const W = '#F5F5F0'
const WD = 'rgba(245, 245, 240, 0.55)'
const BORDER = 'rgba(201, 168, 76, 0.14)'
const MONO = 'var(--font-plex-mono)'
const SERIF = 'var(--font-cormorant)'

const SERVICES = [
  {
    index: '01',
    name: 'AI Readiness & Workflow Audit',
    price: '$2,500 – $5,000',
    timeline: '2 – 3 weeks',
    deliverable: 'Written assessment with prioritized AI opportunities and risk factors',
    desc: 'Before any implementation, you need an honest picture of where your business actually stands. We conduct a structured review of your current operations, software stack, data quality, and team capacity. No vendor agenda. No upsell pressure. A clear, written assessment you can act on, with or without us.',
    includes: [
      'Operations and workflow mapping',
      'Software and data infrastructure review',
      'Team capability and change-readiness assessment',
      'Prioritized AI opportunity matrix',
      'Risk and readiness scoring',
      'Written deliverable with recommendations',
    ],
  },
  {
    index: '02',
    name: 'AI Implementation & Integration',
    price: '$5,000 – $25,000+',
    timeline: '4 – 12 weeks',
    deliverable: 'Deployed AI system with documentation and team training',
    desc: 'We handle the full deployment lifecycle: from scoping and vendor selection through integration, testing, and team training. Every implementation is documented, tested against your actual workflows, and handed off with your team trained to maintain it. No black boxes.',
    includes: [
      'Implementation scoping and vendor selection',
      'Integration with existing systems and workflows',
      'Quality assurance and performance testing',
      'Team training and onboarding',
      'Full technical documentation',
      'Post-launch support window',
    ],
  },
  {
    index: '03',
    name: 'Ongoing AI Advisory Retainer',
    price: '$2,000 – $6,000 / month',
    timeline: 'Engagement reviewed quarterly.',
    deliverable: 'Monthly reviews, quarterly roadmap, and priority access to principals',
    desc: 'AI is not a one-time installation. Markets shift, models improve, your operations evolve. The retainer keeps a principal accountable to your strategy on an ongoing basis: monthly performance reviews, vendor oversight, optimization priorities, and a quarterly roadmap update.',
    includes: [
      'Monthly strategy and performance review',
      'Ongoing vendor and tool oversight',
      'Continuous workflow optimization',
      'Priority access to principals',
      'Quarterly AI roadmap update',
      'Ad hoc guidance on new AI opportunities',
    ],
  },
  {
    index: '04',
    name: 'Custom AI Development',
    price: 'Scoped individually',
    timeline: 'Determined after discovery',
    deliverable: 'Proprietary AI tooling built to your operational requirements',
    desc: 'Some organizations have operational requirements that off-the-shelf AI products cannot meet. We scope, design, and build proprietary AI models, tools, and integrations where genuine custom development is warranted. Engagements begin with a paid discovery and scoping phase.',
    includes: [
      'Paid discovery and requirements scoping',
      'Custom model or tool architecture',
      'Development and integration',
      'Testing and validation against business metrics',
      'Documentation and knowledge transfer',
      'Ongoing support options',
    ],
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'A 30-minute conversation to understand your business, current challenges, and whether we are a fit. No pitch. No deck.',
  },
  {
    step: '02',
    title: 'AI Readiness Audit',
    desc: 'Most engagements begin here. We assess your operations, systems, and team before recommending anything. This is where the real work starts.',
  },
  {
    step: '03',
    title: 'Implementation or Retainer',
    desc: 'Based on audit findings, we scope the appropriate engagement: implementation project, advisory retainer, or both. You approve all work before it begins.',
  },
  {
    step: '04',
    title: 'Handoff & Continuity',
    desc: 'Every deliverable is documented. Your team is trained. If we part ways, you are not left dependent on us. If you stay, the retainer ensures continuous optimization.',
  },
]

export default function ServicesPage() {
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
            // Services
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
            The Work.
          </h1>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 12,
              lineHeight: 2.0,
              color: WD,
              maxWidth: 560,
            }}
          >
            Four defined engagements. Each scoped to your actual requirements.
            No vendor agendas. No tool pitches. Just disciplined execution.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS ────────────────────────────────────────────── */}
      <section className="sec" style={{ padding: '96px 56px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {SERVICES.map((s) => (
              <div
                key={s.index}
                className="grid-2col card"
                style={{
                  border: `1px solid ${BORDER}`,
                  padding: '56px 52px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.2fr',
                  gap: 64,
                  alignItems: 'start',
                }}
              >
                {/* Left column */}
                <div>
                  <div
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      color: 'rgba(201, 168, 76, 0.4)',
                      letterSpacing: '0.2em',
                      marginBottom: 24,
                    }}
                  >
                    {s.index}
                  </div>
                  <h2
                    style={{
                      fontFamily: SERIF,
                      fontSize: 42,
                      fontWeight: 300,
                      color: W,
                      lineHeight: 1.1,
                      marginBottom: 24,
                    }}
                  >
                    {s.name}
                  </h2>
                  <div
                    style={{
                      fontFamily: MONO,
                      fontSize: 13,
                      color: G,
                      letterSpacing: '0.06em',
                      marginBottom: 10,
                    }}
                  >
                    {s.price}
                  </div>
                  <div style={{ marginBottom: 32 }}>
                    <div
                      style={{
                        fontFamily: MONO,
                        fontSize: 9,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(245, 245, 240, 0.28)',
                        marginBottom: 6,
                      }}
                    >
                      Timeline
                    </div>
                    <div
                      style={{
                        fontFamily: MONO,
                        fontSize: 11,
                        color: 'rgba(245, 245, 240, 0.55)',
                      }}
                    >
                      {s.timeline}
                    </div>
                  </div>
                  <div style={{ paddingTop: 28, borderTop: `1px solid ${BORDER}` }}>
                    <div
                      style={{
                        fontFamily: MONO,
                        fontSize: 9,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(245, 245, 240, 0.28)',
                        marginBottom: 8,
                      }}
                    >
                      Primary Deliverable
                    </div>
                    <div
                      style={{
                        fontFamily: MONO,
                        fontSize: 11,
                        color: 'rgba(245, 245, 240, 0.5)',
                        lineHeight: 1.8,
                      }}
                    >
                      {s.deliverable}
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div>
                  <p
                    style={{
                      fontFamily: MONO,
                      fontSize: '1rem',
                      lineHeight: 2.0,
                      color: WD,
                      marginBottom: 36,
                    }}
                  >
                    {s.desc}
                  </p>
                  <div
                    style={{
                      fontFamily: MONO,
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(245, 245, 240, 0.28)',
                      marginBottom: 20,
                    }}
                  >
                    Includes
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {s.includes.map((item) => (
                      <div
                        key={item}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}
                      >
                        <span
                          style={{
                            width: 16,
                            height: 1,
                            background: G,
                            display: 'inline-block',
                            flexShrink: 0,
                            marginTop: 9,
                          }}
                        />
                        <span
                          style={{
                            fontFamily: MONO,
                            fontSize: '0.95rem',
                            color: 'rgba(245, 245, 240, 0.5)',
                            lineHeight: 1.8,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE ENGAGE ────────────────────────────────────────────── */}
      <section
        className="sec"
        style={{
          padding: '96px 56px',
          borderTop: `1px solid ${BORDER}`,
          background:
            'radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        }}
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
              // How We Engage
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(36px, 4.5vw, 58px)',
                fontWeight: 300,
                color: W,
              }}
            >
              A deliberate process.
              <br />
              No surprises.
            </h2>
          </div>

          <div
            className="grid-4col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1,
              border: `1px solid ${BORDER}`,
            }}
          >
            {PROCESS.map((p) => (
              <div
                key={p.step}
                className="card"
                style={{ padding: '40px 36px', border: `1px solid ${BORDER}` }}
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
                  {p.step}
                </div>
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: 26,
                    fontWeight: 400,
                    color: W,
                    marginBottom: 16,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    lineHeight: 1.95,
                    color: 'rgba(245, 245, 240, 0.45)',
                  }}
                >
                  {p.desc}
                </p>
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
              Ready to find out where AI actually fits?
            </h2>
            <p
              style={{ fontFamily: MONO, fontSize: 11, color: WD, letterSpacing: '0.04em' }}
            >
              Most engagements start with a 30-minute discovery call.
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
