import AboutSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";

// pages/index.tsx
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <AboutSection />
      </main>
    </>
  );
}
