import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Mike Hudson",
    role: "PDG, TechSolutions Inc.",
    avatar: "/assets/ceo.webp",
    content:
      "Les services de design UI/UX de Digicombi ont transformé notre plateforme. Leur équipe a compris notre vision et a livré une interface intuitive qui a augmenté notre engagement utilisateur de 40 %.",
    rating: 5,
    project: "Refonte de plateforme e-commerce",
  },
  {
    name: "Sophie Martin",
    role: "Directrice Marketing, InnovateCo",
    avatar: "/assets/woman-ceo.webp",
    content:
      "Le site web créé par Digicombi est magnifique et fonctionne à merveille. Nos taux de conversion ont doublé depuis le lancement, et leur support continu est irréprochable.",
    rating: 5,
    project: "Développement de site vitrine",
  },
  {
    name: "David Chen",
    role: "CTO, Startup Ventures",
    avatar: "/assets/man.webp",
    content:
      "Leur expertise en architecture cloud nous a permis d’économiser des milliers d’euros en coûts d’infrastructure. Les solutions de Digicombi sont évolutives, sécurisées et parfaitement adaptées à nos besoins.",
    rating: 4,
    project: "Optimisation de l’infrastructure cloud",
  },
  {
    name: "Amélie Dubois",
    role: "Cheffe de Produit, AppTech",
    avatar: "/assets/amelie.webp",
    content:
      "Travailler avec Digicombi a été un véritable tournant. Leur solution logicielle sur mesure a automatisé nos processus et nous a fait gagner plus de 20 heures de travail manuel par semaine.",
    rating: 5,
    project: "Automatisation des processus métier",
  },
];


export default function TestimonialsSection() {
  return (
    <section className="py-28 bg-gray-50 dark:bg-neutral-950">
      <div className="w-full max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mb-4">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Ce que nos clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">disent de nous</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez comment nous avons aidé des entreprises comme la vôtre à réussir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-white dark:bg-neutral-900 p-3 rounded-full shadow-md">
                <Quote className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-white dark:border-neutral-800 shadow-sm"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`text-sm ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {testimonial.content}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-neutral-800">
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}