'use client'

import { useState } from 'react'
import Link from 'next/link'

const G = '#C9A84C'
const W = '#F5F5F0'
const WD = 'rgba(245, 245, 240, 0.55)'
const BORDER = 'rgba(201, 168, 76, 0.14)'
const MONO = 'var(--font-plex-mono)'
const SERIF = 'var(--font-cormorant)'

const inputStyle = {
  width: '100%',
  background: 'rgba(245, 245, 240, 0.03)',
  border: '1px solid rgba(201, 168, 76, 0.2)',
  padding: '14px 18px',
  fontFamily: MONO,
  fontSize: 12,
  color: W,
  outline: 'none',
  letterSpacing: '0.03em',
}

const labelStyle = {
  fontFamily: MONO,
  fontSize: 9,
  letterSpacing: '0.22em',
  textTransform: 'uppercase' as const,
  color: 'rgba(245, 245, 240, 0.38)',
  display: 'block',
  marginBottom: 8,
}

const NEXT_STEPS = [
  {
    n: '01',
    title: 'Discovery Call',
    desc: 'A 30-minute conversation within 2 business days. We ask questions. You ask questions. No pitch.',
  },
  {
    n: '02',
    title: 'Audit Proposal',
    desc: 'If there is a fit, we send a written proposal for your AI Readiness Audit scoped to your specific operation.',
  },
  {
    n: '03',
    title: 'The Work Begins',
    desc: 'Upon agreement, the audit begins within one week. Findings delivered in writing within the agreed timeline.',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    employees: '',
    revenue: '',
    challenge: '',
    referral: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('https://formspree.io/f/xdaljpgl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please email us directly at hello@indianlakesmarketing.com.')
      }
    } catch {
      setError('Something went wrong. Please email us directly at hello@indianlakesmarketing.com.')
    } finally {
      setSubmitting(false)
    }
  }

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
            // Contact
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
            Begin with
            <br />
            <em style={{ fontStyle: 'italic', color: G }}>an audit.</em>
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
            Complete the form below and we will be in touch within one business day
            to schedule a 30-minute discovery call. We accept a limited number of
            clients to ensure every engagement receives principal-level attention.
          </p>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ────────────────────────────────────────────── */}
      <section className="sec" style={{ padding: '96px 56px' }}>
        <div
          className="grid-2col"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: 80,
            alignItems: 'start',
          }}
        >
          {/* Form */}
          {submitted ? (
            <div
              style={{
                border: `1px solid ${BORDER}`,
                padding: '72px 60px',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
              }}
            >
              <div style={{ width: 40, height: 1, background: G }} />
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: 52,
                  fontWeight: 300,
                  color: W,
                  lineHeight: 1.05,
                }}
              >
                We received
                <br />
                <em style={{ fontStyle: 'italic', color: G }}>your inquiry.</em>
              </h2>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: 12,
                  lineHeight: 2.0,
                  color: WD,
                  maxWidth: 480,
                }}
              >
                A principal will reach out within one business day to schedule
                your discovery call. We look forward to learning about your
                business.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  border: `1px solid ${BORDER}`,
                  padding: '56px 52px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 32,
                }}
              >
                {/* Name + Company */}
                <div
                  className="grid-2col"
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
                >
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      style={inputStyle}
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Company *</label>
                    <input
                      style={inputStyle}
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div
                  className="grid-2col"
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
                >
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      style={inputStyle}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@acmecorp.com"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone (optional)</label>
                    <input
                      style={inputStyle}
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                    />
                  </div>
                </div>

                {/* Employees + Revenue */}
                <div
                  className="grid-2col"
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
                >
                  <div>
                    <label style={labelStyle}>Number of Employees *</label>
                    <select
                      style={{ ...inputStyle, appearance: 'none' as const }}
                      name="employees"
                      value={form.employees}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select range</option>
                      <option value="1-9">1 – 9</option>
                      <option value="10-25">10 – 25</option>
                      <option value="26-50">26 – 50</option>
                      <option value="51-100">51 – 100</option>
                      <option value="101-150">101 – 150</option>
                      <option value="150+">150+</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Annual Revenue *</label>
                    <select
                      style={{ ...inputStyle, appearance: 'none' as const }}
                      name="revenue"
                      value={form.revenue}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select range</option>
                      <option value="under-2m">Under $2M</option>
                      <option value="2m-5m">$2M – $5M</option>
                      <option value="5m-15m">$5M – $15M</option>
                      <option value="15m-50m">$15M – $50M</option>
                      <option value="50m+">$50M+</option>
                    </select>
                  </div>
                </div>

                {/* Challenge */}
                <div>
                  <label style={labelStyle}>Primary Challenge or Goal *</label>
                  <textarea
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120, lineHeight: 1.85 }}
                    name="challenge"
                    value={form.challenge}
                    onChange={handleChange}
                    required
                    placeholder="Describe the operational challenge or business goal you're trying to address. Be specific. Vague inquiries get vague answers."
                  />
                </div>

                {/* Referral */}
                <div>
                  <label style={labelStyle}>How did you hear about us?</label>
                  <input
                    style={inputStyle}
                    name="referral"
                    value={form.referral}
                    onChange={handleChange}
                    placeholder="Referral, LinkedIn, Google, etc."
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p
                    style={{
                      fontFamily: MONO,
                      fontSize: 11,
                      lineHeight: 1.85,
                      color: 'rgba(245, 100, 100, 0.85)',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {error}
                  </p>
                )}

                {/* Submit */}
                <div
                  className="cta-row"
                  style={{
                    paddingTop: 8,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: 24,
                  }}
                >
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      color: 'rgba(245, 245, 240, 0.28)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    * Required fields
                  </span>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-full"
                    style={{
                      fontFamily: MONO,
                      fontSize: 12,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      padding: '14px 36px',
                      background: submitting ? 'rgba(201, 168, 76, 0.5)' : G,
                      color: '#080808',
                      fontWeight: 500,
                      border: 'none',
                      opacity: submitting ? 0.7 : 1,
                    }}
                  >
                    {submitting ? 'Sending…' : 'Submit Inquiry →'}
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {NEXT_STEPS.map((s) => (
              <div
                key={s.n}
                className="card"
                style={{ border: `1px solid ${BORDER}`, padding: '32px 28px' }}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    color: 'rgba(201, 168, 76, 0.4)',
                    letterSpacing: '0.2em',
                    marginBottom: 14,
                  }}
                >
                  {s.n}
                </div>
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: 24,
                    fontWeight: 400,
                    color: W,
                    marginBottom: 12,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    lineHeight: 1.95,
                    color: 'rgba(245, 245, 240, 0.42)',
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}

            {/* Capacity note */}
            <div
              style={{
                marginTop: 8,
                padding: '28px',
                border: '1px solid rgba(201, 168, 76, 0.08)',
                background: 'rgba(201, 168, 76, 0.03)',
              }}
            >
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: 10,
                  lineHeight: 1.95,
                  color: 'rgba(245, 245, 240, 0.32)',
                  fontStyle: 'italic',
                }}
              >
                We accept a limited number of clients to ensure every
                engagement receives principal-level attention. If we are
                at capacity, we will let you know immediately and provide
                an estimated timeline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
