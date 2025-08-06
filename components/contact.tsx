import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactUsSection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="w-full max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mb-4">
            Contactez-nous
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Parlons de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">projet</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Notre équipe est prête à répondre à vos questions et à discuter de vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
                <MapPin className="w-4 h-4" />
              </span>
              Nos coordonnées
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Bureaux</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Montréal–Canada, Dakar–Sénégal <br />
                    Yaoundé, cameroun
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                  <a 
                    href="mailto:info@digicombi.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline mt-1 inline-block"
                  >
                    info@digicombi.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Téléphone</h4>
                  <a 
                    href="tel:+14183813722" 
                    className="text-blue-600 dark:text-blue-400 hover:underline mt-1 inline-block"
                  >
                    +1 418 381 3722
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-neutral-800">
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">Heures d'ouverture</h4>
              <p className="text-gray-600 dark:text-gray-400">Lundi - Vendredi: 9h - 17h</p>
              <p className="text-gray-600 dark:text-gray-400">Samedi - Dimanche: Fermé</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Envoyez-nous un message
            </h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Votre nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 text-sm border border-gray-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Votre email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 text-sm border border-gray-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Votre numéro
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 text-sm border border-gray-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Sujet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 text-sm border border-gray-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Votre message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 text-sm border border-gray-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Envoyer le message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}