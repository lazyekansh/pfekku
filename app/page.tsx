import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BentoGrid from '@/components/BentoGrid'
import TechMarquee from '@/components/TechMarquee'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <BentoGrid />
        <TechMarquee />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
