"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Search, Sun, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";

const NAV_ITEMS = [
  { label: "Accueil", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Équipe", href: "#team" },
  { label: "Avis", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [progress, setProgress] = useState(0);
  const sectionIds = useMemo(
    () => NAV_ITEMS.map((i) => i.href.replace("#", "")),
    []
  );
  const navRef = useRef<HTMLElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id.replace("#", ""));
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80; // navbar height
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getProgress = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      if (!sections.length) return 0;

      const navH = navRef.current?.getBoundingClientRect().height ?? 80;
      const y = window.scrollY + navH;

      let accum = 0;
      for (let i = 0; i < sections.length; i++) {
        const start = sections[i].offsetTop;

        // ⬇️ key change here
        const end =
          i < sections.length - 1
            ? sections[i + 1].offsetTop
            : sections[i].offsetTop + sections[i].offsetHeight;

        if (y >= end) {
          accum += 1;
        } else if (y > start) {
          accum += (y - start) / Math.max(end - start, 1);
          break;
        } else {
          break;
        }
      }

      return Math.max(0, Math.min(1, accum / sections.length));
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setProgress(getProgress());
          ticking = false;
        });
        ticking = true;
      }
    };

    const onResize = () => setProgress(getProgress());

    // init & listeners
    setProgress(getProgress());
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [sectionIds]);

  return (
    <nav
      ref={navRef}
      className={`fixed w-full top-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white shadow-sm transition-all duration-300 ${
        scrolled ? "py-2 shadow-lg" : "py-4"
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "#about")}
            className="cursor-pointer"
          >
            <Image
              src="/assets/logo.png"
              alt="Digicombi"
              width={140}
              height={40}
              className={`transition-all duration-300 ${
                scrolled ? "h-8 w-auto" : "h-10 w-auto"
              }`}
            />
          </a>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Desktop Nav links + all controls */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors text-sm lg:text-base"
              >
                {item.label}
              </a>
            ))}

            {/* Language selector */}
            <select
              className="bg-transparent focus:outline-none cursor-pointer text-sm lg:text-base"
              defaultValue="fr"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>

            {/* Dark mode switch */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="relative w-10 h-5 lg:w-12 lg:h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors"
            >
              <span
                className={
                  "block w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full shadow transform transition-transform " +
                  (theme === "dark"
                    ? "translate-x-5 lg:translate-x-6"
                    : "translate-x-0")
                }
              />
              <Sun className="absolute left-1 w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 pointer-events-none" />
              <Moon className="absolute right-1 w-3 h-3 lg:w-4 lg:h-4 text-gray-800 pointer-events-none" />
            </button>

            {/* Search icon */}
            <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Search className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center space-x-4 pt-4">
              <select
                className="bg-transparent focus:outline-none cursor-pointer"
                defaultValue="fr"
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>

              <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-1 bg-transparent">
        <div
          className="h-full bg-blue-600 dark:bg-blue-500 transition-[width] duration-100"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </nav>
  );
}
