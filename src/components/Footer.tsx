import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(201, 168, 76, 0.1)',
        padding: '64px 56px 48px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: 64,
          marginBottom: 56,
        }}
      >
        {/* Brand */}
        <div>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 21,
              fontWeight: 400,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#F5F5F0',
              display: 'inline-block',
              marginBottom: 20,
            }}
          >
            Hahn <span style={{ color: '#C9A84C' }}>AI</span>
          </Link>
          <p
            style={{
              fontFamily: 'var(--font-plex-mono)',
              fontSize: 11,
              lineHeight: 2.0,
              color: 'rgba(245, 245, 240, 0.38)',
              maxWidth: 260,
            }}
          >
            Boutique AI advisory and implementation for businesses that are
            ready to operate differently. Three principals. No associates
            handed your account.
          </p>
        </div>

        {/* Services */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-plex-mono)',
              fontSize: 10,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: 24,
            }}
          >
            Services
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'AI Readiness Audit',
              'AI Implementation',
              'Advisory Retainer',
              'Custom Development',
            ].map((s) => (
              <Link
                key={s}
                href="/services"
                style={{
                  fontFamily: 'var(--font-plex-mono)',
                  fontSize: 11,
                  color: 'rgba(245, 245, 240, 0.38)',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s',
                }}
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Regions */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-plex-mono)',
              fontSize: 10,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: 24,
            }}
          >
            Regions
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'Northeast Indiana',
              'South Florida',
              'Eastern North Carolina',
            ].map((r) => (
              <span
                key={r}
                style={{
                  fontFamily: 'var(--font-plex-mono)',
                  fontSize: 11,
                  color: 'rgba(245, 245, 240, 0.38)',
                  letterSpacing: '0.04em',
                }}
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          paddingTop: 32,
          borderTop: '1px solid rgba(245, 245, 240, 0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-plex-mono)',
          fontSize: 10,
          color: 'rgba(245, 245, 240, 0.22)',
          letterSpacing: '0.08em',
        }}
      >
        <span>© {year} Hahn AI Advisory LLC. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 32 }}>
          {[
            { href: '/services', label: 'Services' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{ color: 'rgba(245, 245, 240, 0.22)', transition: 'color 0.2s' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
