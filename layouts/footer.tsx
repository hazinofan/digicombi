import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
// import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-gray-300 pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          {/* <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Digicombi</span>
            </h3>
            <p className="text-gray-400">
              Solutions technologiques innovantes pour propulser votre entreprise vers l'avenir.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div> */}

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Nos solutions
                </Link>
              </li>
              <li>
                <Link href="/#team" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-neutral-800">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span className="mt-1">Montréal, Canada<br />Dakar, Sénégal</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-neutral-800">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <a href="mailto:info@digicombi.com" className="mt-1 hover:text-white transition-colors duration-300">
                  info@digicombi.com
                </a>
              </li>
              {/* <li className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-neutral-800">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <a href="tel:+14183813722" className="mt-1 hover:text-white transition-colors duration-300">
                  +1 418 381 3722
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Digicombi. Tous droits réservés.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Confidentialité
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Conditions
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Cookies
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Plan du site
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}