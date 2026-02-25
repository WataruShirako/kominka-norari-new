import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { QuoteSection } from "./components/quote-section";
import { GallerySection } from "./components/gallery-section";
import { StatsSection } from "./components/stats-section";
import { FeaturesSection } from "./components/features-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: '"Noto Serif JP", serif' }}
    >
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <QuoteSection />
        <GallerySection />
        <StatsSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
