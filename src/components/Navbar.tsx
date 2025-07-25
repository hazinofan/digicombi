import { useTheme } from "@/context/ThemeContext";
import { Moon, Search, Sun, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Équipe", href: "/team" },
  { label: "Avis", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Desktop Nav */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Digicombi"
              width={140}
              height={40}
            />
          </Link>

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

          {/* Desktop Nav links + controls */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Language selector */}
            <select
              className="bg-transparent focus:outline-none cursor-pointer"
              defaultValue="fr"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>

            {/* Dark mode switch */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="relative w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors"
            >
              {/* Knob */}
              <span
                className={
                  "block w-4 h-4 bg-white rounded-full shadow transform transition-transform " +
                  (theme === "dark" ? "translate-x-6" : "translate-x-0")
                }
              />
              {/* Icons */}
              <Sun className="absolute left-1 w-4 h-4 text-yellow-400 pointer-events-none" />
              <Moon className="absolute right-1 w-4 h-4 text-gray-800 pointer-events-none" />
            </button>

            {/* Search icon */}
            <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center space-x-4 pt-4">
              {/* Language selector */}
              <select
                className="bg-transparent focus:outline-none cursor-pointer"
                defaultValue="fr"
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>

              {/* Search icon */}
              <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}