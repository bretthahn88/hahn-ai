'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
]

const G = '#C9A84C'
const MONO = 'var(--font-plex-mono)'
const SERIF = 'var(--font-cormorant)'

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className="nav-wrapper"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '28px 56px',
          background: scrolled || menuOpen ? 'rgba(8, 8, 8, 0.96)' : 'transparent',
          borderBottom:
            scrolled && !menuOpen
              ? '1px solid rgba(201, 168, 76, 0.1)'
              : '1px solid transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          transition: 'background 0.45s ease, border-color 0.45s ease',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: SERIF,
            fontSize: 21,
            fontWeight: 400,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#F5F5F0',
            position: 'relative',
            zIndex: 1001,
          }}
        >
          Hahn <span style={{ color: G }}>AI</span>
        </Link>

        {/* Desktop links */}
        <div
          className="nav-links"
          style={{ gap: 48, alignItems: 'center' }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: pathname === href ? G : 'rgba(245, 245, 240, 0.5)',
                transition: 'color 0.2s ease',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '10px 22px',
              border: '1px solid rgba(201, 168, 76, 0.45)',
              color: pathname === '/contact' ? '#080808' : G,
              background: pathname === '/contact' ? G : 'transparent',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            Book an Audit
          </Link>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none',
            border: 'none',
            padding: '8px',
            position: 'relative',
            zIndex: 1001,
            flexDirection: 'column',
            gap: 5,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          {menuOpen ? (
            /* X icon */
            <div style={{ position: 'relative', width: 22, height: 22 }}>
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  width: 22,
                  height: 1,
                  background: G,
                  transform: 'translateY(-50%) rotate(45deg)',
                  display: 'block',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  width: 22,
                  height: 1,
                  background: G,
                  transform: 'translateY(-50%) rotate(-45deg)',
                  display: 'block',
                }}
              />
            </div>
          ) : (
            /* Three bars */
            <>
              <span style={{ width: 22, height: 1, background: G, display: 'block' }} />
              <span style={{ width: 22, height: 1, background: G, display: 'block' }} />
              <span style={{ width: 14, height: 1, background: G, display: 'block' }} />
            </>
          )}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#080808',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            padding: '110px 32px 56px',
          }}
        >
          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[...NAV_LINKS, { href: '/contact', label: 'Book an Audit' }].map(
              ({ href, label }, i, arr) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: SERIF,
                    fontSize: 52,
                    fontWeight: 300,
                    lineHeight: 1.1,
                    color:
                      href === '/contact'
                        ? G
                        : pathname === href
                        ? G
                        : '#F5F5F0',
                    padding: '18px 0',
                    borderBottom:
                      i < arr.length - 1
                        ? '1px solid rgba(201, 168, 76, 0.1)'
                        : 'none',
                    letterSpacing: '0.02em',
                  }}
                >
                  {label}
                </Link>
              )
            )}
          </div>

          {/* Region tags at bottom */}
          <div
            style={{
              marginTop: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {['Northeast Indiana', 'South Florida', 'Eastern North Carolina'].map(
              (r) => (
                <span
                  key={r}
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(245, 245, 240, 0.22)',
                  }}
                >
                  {r}
                </span>
              )
            )}
          </div>
        </div>
      )}
    </>
  )
}
