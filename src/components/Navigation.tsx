'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
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
        background: scrolled ? 'rgba(8, 8, 8, 0.94)' : 'transparent',
        borderBottom: scrolled
          ? '1px solid rgba(201, 168, 76, 0.1)'
          : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'background 0.45s ease, border-color 0.45s ease',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 21,
          fontWeight: 400,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#F5F5F0',
        }}
      >
        Hahn <span style={{ color: '#C9A84C' }}>AI</span>
      </Link>

      {/* Links */}
      <div style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: 'var(--font-plex-mono)',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color:
                pathname === href
                  ? '#C9A84C'
                  : 'rgba(245, 245, 240, 0.5)',
              transition: 'color 0.2s ease',
            }}
          >
            {label}
          </Link>
        ))}

        {/* CTA button */}
        <Link
          href="/contact"
          style={{
            fontFamily: 'var(--font-plex-mono)',
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            padding: '10px 22px',
            border: '1px solid rgba(201, 168, 76, 0.45)',
            color: pathname === '/contact' ? '#080808' : '#C9A84C',
            background: pathname === '/contact' ? '#C9A84C' : 'transparent',
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          Book an Audit
        </Link>
      </div>
    </nav>
  )
}
