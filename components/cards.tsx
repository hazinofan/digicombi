import Image from "next/image";

const services = [
  {
    title: "Audit de système informatique",
    description:
      "Analyse complète de votre infrastructure informatique pour détecter les failles, améliorer la sécurité et optimiser les performances.",
    icon: "/icons/icon1.png",
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "Formation IT personnalisée",
    description:
      "Apprenez à maîtriser les outils informatiques (bureautique, web, cybersécurité...) à votre rythme.",
    icon: "/icons/icon2.png",
    color: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    title: "Automatisation avec IA",
    description:
      "Mettez l'intelligence artificielle au service de votre quotidien : automatisation de tâches, assistant personnel, et plus encore.",
    icon: "/icons/icon3.png",
    color: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    title: "Design UI/UX",
    description:
      "Création d'interfaces intuitives, modernes et efficaces pour offrir la meilleure expérience utilisateur.",
    icon: "/icons/icon4.png",
    color: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    title: "Édition vidéo",
    description: "Besoin de vidéos professionnelles éditées ? Nous sommes là !",
    icon: "/icons/icon5.png",
    color: "bg-rose-100 dark:bg-rose-900/30",
  },
  {
    title: "Création de logiciels sur-mesure",
    description:
      "Développement de solutions logicielles adaptées à vos besoins personnels ou professionnels.",
    icon: "/icons/icon6.png",
    color: "bg-indigo-100 dark:bg-indigo-900/30",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="w-full max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mb-4">
            Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Solutions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              technologiques
            </span>{" "}
            sur mesure
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Nous offrons une gamme complète de services pour répondre à tous vos
            besoins numériques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl p-6 ${service.color} transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className=" mb-6 rounded-xl flex items-center justify-center ">
                  <div className="w-56 h-56 relative">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
