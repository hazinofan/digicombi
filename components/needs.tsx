import Image from "next/image";

export default function EverythingYouNeedSection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="w-full max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Illustration - Switched to left side for better visual flow */}
          

          {/* Text Content */}
          <div className="space-y-8">
            <span className="inline-block px-3 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              Solutions complètes
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Tout ce dont vous avez besoin,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                en un seul endroit
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Chez{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Digicombi
              </span>
              , nous avons réuni les solutions et les outils nécessaires pour
              propulser votre entreprise vers le succès. Explorez notre gamme
              complète pour trouver exactement ce dont vous avez besoin pour
              atteindre vos objectifs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-5 w-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Solutions intégrées
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-5 w-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Support personnalisé
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-5 w-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Technologies modernes
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-5 w-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Évolutivité garantie
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20">
                Explorer nos solutions
              </button>
            </div>
          </div>

          <div className="relative w-full h-[480px] order-1 lg:order-none">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-purple-100/40 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl" />
            <Image
              src="/assets/needs.webp"
              alt="Illustration Digicombi"
              fill
              className="object-contain object-left transition-all duration-500 hover:scale-105"
              priority
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
