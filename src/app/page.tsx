import AboutUs from "@/components/LandingPage/AboutSection";
import ContactSection from "@/components/LandingPage/Contact";
import ServicesGallery from "@/components/LandingPage/GallerySection";
import Hero from "@/components/LandingPage/HeroSection";
import LivestockPage from "@/components/LandingPage/LivestockSection";
import ServicesSection from "@/components/LandingPage/ServiceSection";

export default function Home() {
  return (
   <>
      <Hero />
      <AboutUs />
      <section id="livestock">
      <LivestockPage />
      </section>
      <section id="services">
      <ServicesSection />
      </section>
      <ServicesGallery />
      <section id="contact">
      <ContactSection />
      </section>
   </>
   
  );
}
