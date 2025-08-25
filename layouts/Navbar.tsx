"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Search, Sun, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef, useMemo } from "react";
import SupportBot from "../components/SupportBot";
import Modal from "../components/Modal";

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
  const [open, setOpen] = React.useState(false);
  const sectionIds = useMemo(
    () => NAV_ITEMS.map((i) => i.href.replace("#", "")),
    []
  );
  const navRef = useRef<HTMLElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔵 NEW: active section state
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id.replace("#", ""));
    if (!el) return;
    const y =
      el.getBoundingClientRect().top +
      window.scrollY -
      (navRef.current?.getBoundingClientRect().height ?? 80);
    window.scrollTo({ top: y, behavior: "smooth" });
    setActive(id.replace("#", "")); // immediately reflect active on click
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔵 NEW: IntersectionObserver to update `active`
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    // Leave some headroom equal to navbar height so the highlight changes a bit earlier
    const navH = navRef.current?.getBoundingClientRect().height ?? 80;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75], // smooth changes
        // Shift the “viewport” down by the navbar height
        rootMargin: `-${navH + 4}px 0px -55% 0px`,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds]);

  // existing progress bar logic
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
        const end =
          i < sections.length - 1
            ? sections[i + 1].offsetTop
            : sections[i].offsetTop + sections[i].offsetHeight;

        if (y >= end) accum += 1;
        else if (y > start) {
          accum += (y - start) / Math.max(end - start, 1);
          break;
        } else break;
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
      <SupportBot />
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
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={
                    "relative text-sm lg:text-base transition-colors " +
                    (isActive
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "hover:text-blue-600 dark:hover:text-blue-400")
                  }
                >
                  {item.label}
                  {/* underline indicator */}
                  <span
                    className={
                      "absolute -bottom-2 left-0 h-[2px] rounded-full bg-blue-600 dark:bg-blue-400 transition-all " +
                      (isActive ? "w-full opacity-100" : "w-0 opacity-0")
                    }
                  />
                </a>
              );
            })}

            {/* Dark mode switch */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="relative w-10 h-5 lg:w-12 lg:h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors"
            >
              <span
                className={
                  "block w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full shadow transform transition-transform " +
                  (theme === "dark" ? "translate-x-5 lg:translate-x-6" : "translate-x-0")
                }
              />
              <Sun className="absolute left-1 w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 pointer-events-none" />
              <Moon className="absolute right-1 w-3 h-3 lg:w-4 lg:h-4 text-gray-800 pointer-events-none" />
            </button>

            <button
              className="bg-blue-900 p-2 text-white text-sm rounded-tr-2xl rounded-bl-2xl cursor-pointer transition-all hover:rounded-xl hover:bg-blue-950"
              onClick={() => setOpen(true)}
            >
              Rejoignez Nous
            </button>

            <Modal open={open} onClose={() => setOpen(false)} title="Rejoignez DigiCombi">
              <video
                width="520"
                height="240"
                loop
                muted
                autoPlay
                controls={false}
                preload="none"
                className="rounded-xl mb-4"
              >
                <source src="/assets/animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-sm text-slate-700 leading-relaxed">
                Laissez‑nous vos coordonnées et votre besoin. Nous revenons vers vous sous 24h ouvrées.
              </p>
              <form className="mt-4 space-y-3">
                <input
                  className="w-full border rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                  placeholder="Nom / Entreprise"
                />
                <input
                  className="w-full border rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                  placeholder="Email"
                  type="email"
                />
                <textarea
                  className="w-full border rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                  rows={4}
                  placeholder="Décrivez votre projet…"
                />
              </form>
            </Modal>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={
                    "block py-2 transition-colors " +
                    (isActive
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "hover:text-blue-600 dark:hover:text-blue-400")
                  }
                >
                  {item.label}
                </a>
              );
            })}

            <div className="flex items-center space-x-4 pt-4">
              <select className="bg-transparent focus:outline-none cursor-pointer" defaultValue="fr">
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

      {/* progress bar */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-1 bg-transparent">
        <div
          className="h-full bg-blue-600 dark:bg-blue-500 transition-[width] duration-100"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </nav>
  );
}
