import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ekansh Tiwari | lazyekansh',
  description: '16-year-old developer from Noida. Building OSINT tools, AI systems, and internet infrastructure.',
  openGraph: {
    title: 'Ekansh Tiwari | lazyekansh',
    description: 'Developer & Builder. OSINT · AI · Web.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
