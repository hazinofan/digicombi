import ServicesSection from "../../components/cards";
import ContactUsSection from "../../components/contact";
import AboutSection from "../../components/HeroSection";
import Navbar from "../../layouts/Navbar";
import EverythingYouNeedSection from "../../components/needs";
import BusinessSolutionsSection from "../../components/solutions";
import TeamSection from "../../components/team";
import TestimonialsSection from "../../components/testimonial";
import Footer from "../../layouts/footer";

// pages/index.tsx
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <AboutSection />
        <EverythingYouNeedSection />
        <ServicesSection />
        <BusinessSolutionsSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactUsSection />
      </main>
      <Footer />
    </>
  );
}
