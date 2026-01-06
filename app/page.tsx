import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import TechStack from '@/components/TechStack'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TechStack />
      <Footer />
    </main>
  )
}