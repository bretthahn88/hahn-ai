import type { Metadata } from 'next'
import { Cormorant_Garamond, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hahn AI — Intelligence, Applied.',
  description:
    'AI advisory and implementation for organizations that compete on clarity, not buzzwords. Workflow-first. Rigorous. Accountable.',
  keywords:
    'AI advisory, AI implementation, SMB AI consulting, workflow automation, AI integration, boutique AI firm',
  openGraph: {
    title: 'Hahn AI — Intelligence, Applied.',
    description:
      'AI advisory and implementation for organizations that compete on clarity, not buzzwords. Workflow-first. Rigorous. Accountable.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plexMono.variable}`}>
      <head>
        <link rel="icon" href="/HahnAIlogo_roosterhead.png" />
      </head>
      <body>
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
