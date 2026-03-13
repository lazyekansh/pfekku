import Navbar from '@/components/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import StackSection from '@/components/sections/StackSection'
import ToolsSection from '@/components/sections/ToolsSection'
import ChessSection from '@/components/sections/ChessSection'
import ContactSection from '@/components/sections/ContactSection'
import ContactFormSection from '@/components/sections/ContactFormSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <StackSection />
      <ToolsSection />
      <ChessSection />
      <ContactSection />
      <ContactFormSection />
      <Footer />
    </>
  )
}
