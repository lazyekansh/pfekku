import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ekansh Tiwari | lazyekansh',
  description: '16-year-old full stack developer from Noida. Building OSINT tools, AI systems, and internet infrastructure.',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'lazyekansh',
  },
  openGraph: {
    title: 'Ekansh Tiwari | lazyekansh',
    description: 'Full Stack Developer & Builder. OSINT / AI / Web.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#fbbe07',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
