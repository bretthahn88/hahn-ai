import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Hahn AI: Intelligence, Applied.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080808',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
        }}
      >
        {/* Decorative line */}
        <div style={{ width: 64, height: 1, background: '#C9A84C', display: 'flex' }} />

        {/* Wordmark */}
        <div
          style={{
            fontSize: 108,
            fontWeight: 300,
            color: '#F5F5F0',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            display: 'flex',
          }}
        >
          <span>HAHN&nbsp;</span>
          <span style={{ color: '#C9A84C' }}>AI</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 18,
            color: 'rgba(245, 245, 240, 0.45)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            display: 'flex',
          }}
        >
          Intelligence, Applied.
        </div>
      </div>
    ),
    { ...size }
  )
}
