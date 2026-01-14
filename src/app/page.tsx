import placeholderData from "@/data/placeholder.json";
import { Hero, Intro, Marquee, Services, Works, Promo, Testimonials, FAQ, Footer } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Navbar */}
      <Hero data={placeholderData.hero} navbar={placeholderData.navbar} />

      {/* Intro Section */}
      <Intro data={placeholderData.intro} />

      {/* Marquee Section */}
      <Marquee data={placeholderData.intro} />

      {/* Why Us Section - To be built */}

      {/* Services Section */}
      <Services data={placeholderData.services} />

      {/* Works/Gallery Section */}
      <Works data={placeholderData.works} />

      {/* Promo Section */}
      <Promo data={placeholderData.promo} />

      {/* Testimonials Section */}
      <Testimonials data={placeholderData.testimonials} />

      {/* FAQ Section */}
      <FAQ data={placeholderData.faq} />

      {/* Footer Section */}
      <Footer data={placeholderData.footer} />
    </main>
  );
}
