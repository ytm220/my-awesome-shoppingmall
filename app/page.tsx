import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { CollectionSection } from "@/components/collection-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <CollectionSection />
      <Footer />
    </main>
  )
}
