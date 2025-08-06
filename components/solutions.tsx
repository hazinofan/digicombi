import Image from "next/image";

export default function BusinessSolutionsSection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="w-full max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <span className="inline-block px-3 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              Solutions d'entreprise
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Des solutions d'affaires <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">uniques</span> pour votre croissance
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Chez <span className="font-semibold text-gray-900 dark:text-white">Digicombi</span>, nous créons des solutions sur mesure, adaptées aux besoins spécifiques de votre entreprise. Notre expertise vous accompagne pour atteindre vos objectifs avec des outils innovants et performants.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 cursor-pointer py-3 border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-neutral-800">
                Contactez-nous
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-[480px] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/30 dark:to-purple-900/30 z-10" />
            
            <Image
              src="/assets/team.webp"
              alt="Équipe Digicombi en train de collaborer"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
              quality={90}
            />
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-4 rounded-lg shadow-sm z-20 max-w-md">
              <h3 className="font-bold text-gray-900 dark:text-white">Notre équipe d'experts</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Prête à transformer vos défis en opportunités technologiques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}