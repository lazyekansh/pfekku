import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ekansh Tiwari | lazyekansh',
  description: '16-year-old developer from Noida building OSINT tools, AI systems, and internet infrastructure. Frontend dev · JEE Aspirant.',
  keywords: ['Ekansh Tiwari', 'lazyekansh', 'ek4nsh', 'OSINT', 'developer', 'React', 'Next.js', 'portfolio'],
  authors: [{ name: 'Ekansh Tiwari', url: 'https://github.com/lazyekansh' }],
  openGraph: {
    title: 'Ekansh Tiwari | lazyekansh',
    description: '16-year-old developer building OSINT tools, AI systems, and internet infrastructure.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] text-white antialiased overflow-x-hidden noise">
        {children}
      </body>
    </html>
  )
}
