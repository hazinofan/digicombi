import Head from "next/head";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/footer";
import Image from "next/image";
import { Mail, MapPin, Phone, Quote, Send, Star } from "lucide-react";
import { useState, KeyboardEvent } from "react";
import Modal from "../../components/Modal";
import SplineRobot from "../../components/SplineRobot";

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

const team = [
  {
    name: "Charles Landry",
    role: "Fondateur | Architecte cloud",
    image: "/team/charles.webp",
    linkedin:
      "https://www.linkedin.com/in/charles-landry-rim-%C3%A0-nyam-5b4061134/",
    twitter: "#",
    github: "#",
  },
  {
    name: "Martin Legault",
    role: "Back End Developer",
    image: "/team/martin.webp",
    linkedin: "https://www.linkedin.com/in/martin-lglt/",
    twitter: "#",
    github: "#",
  },
  {
    name: "Maryam Shahrabi",
    role: "IT Specialist",
    image: "/team/maryam.webp",
    linkedin: "https://www.linkedin.com/in/maryshahrabi/",
    twitter: "#",
    github: "#",
  },
  {
    name: "Jeanne Y",
    role: "Back End Developer",
    image: "/team/jeanne.webp",
    linkedin: "https://www.linkedin.com/in/jeanne-y-ba5159272/",
    twitter: "#",
    github: "#",
  },
  {
    name: "Breanna Reddock",
    role: "Full-Stack Web Developer",
    image: "/team/breanna.webp",
    linkedin: "https://www.linkedin.com/in/breanna-reddock/",
    twitter: "#",
    github: "#",
  },
  {
    name: "Reward Njefeh Yonkeu",
    role: "Oracle Database Administrator",
    image: "/team/reward.webp",
    linkedin: "https://www.linkedin.com/in/reward-njefeh-yonkeu/",
    twitter: "#",
    github: "#",
  },
  {
    name: "Ahmed Amine Maarouf",
    role: "Software Engineer0",
    image: "/team/amine.webp",
    linkedin: "https://www.linkedin.com/in/ahmed-amine-maarouf-b08050293/",
    twitter: "#",
    github: "#",
  },
  {
    name: "OMGBA EKOTTO Louis",
    role: "Cybersécurty expert",
    image: "/team/cyber.png",
    linkedin: "https://www.linkedin.com/in/lomgba/",
    twitter: "#",
    github: "#",
  },
];

const services = [
  {
    title: "Automatisation avec IA",
    description:
      "Mettez l'intelligence artificielle au service de votre quotidien : automatisation de tâches, assistant personnel, et plus encore.",
    icon: "/icons/icon3.png",
    color: "bg-emerald-100 dark:bg-emerald-900/30",
    video: "/assets/video4.mp4",
  },
  {
    title: "Formation IT personnalisée",
    description:
      "Apprenez à maîtriser les outils informatiques (bureautique, web, cybersécurité...) à votre rythme.",
    icon: "/icons/icon2.png",
    color: "bg-purple-100 dark:bg-purple-900/30",
    video: "/assets/video5.mp4",
  },
  {
    title: "Audit de système informatique",
    description:
      "Analyse complète de votre infrastructure informatique pour détecter les failles, améliorer la sécurité et optimiser les performances.",
    icon: "/icons/icon1.png",
    color: "bg-blue-100 dark:bg-blue-900/30",
    video: "/assets/video6.mp4",
  },
  {
    title: "Design UI/UX",
    description:
      "Création d'interfaces intuitives, modernes et efficaces pour offrir la meilleure expérience utilisateur.",
    icon: "/icons/icon4.png",
    color: "bg-amber-100 dark:bg-amber-900/30",
    video: "/assets/video1.mp4",
  },
  {
    title: "Édition vidéo",
    description: "Besoin de vidéos professionnelles éditées ? Nous sommes là !",
    icon: "/icons/icon5.png",
    color: "bg-rose-100 dark:bg-rose-900/30",
    video: "/assets/video2.mp4",
  },
  {
    title: "Création de logiciels sur-mesure",
    description:
      "Développement de solutions logicielles adaptées à vos besoins personnels ou professionnels.",
    icon: "/icons/icon6.png",
    color: "bg-indigo-100 dark:bg-indigo-900/30",
    video: "/assets/video3.mp4",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<any | null>(null);

  function openService(s: any) {
    setActive(s);
    setOpen(true);
  }

  function onKeyCard(e: KeyboardEvent<HTMLDivElement>, s: any) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openService(s);
    }
  }
  return (
    <>
      <Navbar />
      <Head>
        <title>Digicombi | Agence Digitale & Développement Web au Maroc</title>
        <meta
          name="description"
          content="Digicombi, votre partenaire en transformation digitale : création de sites web, e-commerce, cybersécurité, cloud et solutions sur mesure. Contactez-nous dès aujourd’hui !"
        />
        <meta
          name="keywords"
          content="agence digitale Maroc, création site web, développement web, e-commerce, cybersécurité, cloud, design UI UX"
        />
        <meta name="author" content="Digicombi" />

        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content="Digicombi | Agence Digitale & Développement Web"
        />
        <meta
          property="og:description"
          content="Votre partenaire digital pour sites web, e-commerce, cybersécurité, cloud et solutions sur mesure."
        />
        <meta property="og:image" content="/assets/logo.png" />
        <meta property="og:url" content="https://www.digicombi.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Digicombi | Agence Digitale & Développement Web"
        />
        <meta
          name="twitter:description"
          content="Transformation digitale : sites web, e-commerce, cybersécurité, cloud et plus encore."
        />
        <meta name="twitter:image" content="/assets/logo.png" />
      </Head>
      <main className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 pt-16">
        <section id="about" className="min-h-[calc(100vh-80px)]">
          <section className="py-16 md:py-24 transition-colors duration-300 bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-900 dark:to-slate-800/50">
            <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col items-center text-center">
              {/* Robot en position supérieure */}
              <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col items-center text-center">
                {/* Robot en position supérieure */}
                <div className="w-[200px] h-[200px] md:w-[380px] md:h-[380px] relative mb-4">
                  <SplineRobot
                    sceneUrl="https://prod.spline.design/mr5HIUUkmAe93obW/scene.splinecode"
                    className="w-full h-full rounded-2xl"
                  />
                  {/* Effets visuels subtils */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-500/10 rounded-full blur-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-purple-500/10 rounded-full blur-lg"></div>
                </div>
              </div>

              {/* Contenu concis en dessous */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Votre partenaire digital
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  DigiCombi —{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Transformation digitale
                  </span>
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Chez DigiCombi, nous combinons expertise technique et
                  proximité pour faire de la technologie un véritable levier de
                  croissance pour votre entreprise.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6 max-w-md mx-auto">
                  {[
                    "Automatisation de l'IA",
                    "Sites web",
                    "Cybersécurité",
                    "Cloud",
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center bg-white dark:bg-slate-800/50 p-3 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <a
                    href="#services"
                    className="px-6 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Découvrir nos services
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section id="services" className="">
          <section className="px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 transition-colors duration-300">
            <div className="w-full max-w-[1600px] mx-auto px-4">
              <div className="text-center mb-16 pt-16">
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
                  Nous offrons une gamme complète de services pour répondre à
                  tous vos besoins numériques.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    role="button"
                    tabIndex={0}
                    onClick={() => openService(service)}
                    onKeyDown={(e) => onKeyCard(e, service)}
                    className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer outline-none ring-offset-2 focus:ring-2 focus:ring-blue-600 ${service.color} transition-all duration-300 hover:-translate-y-2`}
                    aria-label={`Voir la vidéo: ${service.title}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="mb-6 rounded-xl flex items-center justify-center">
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

              {/* Modal with autoplay video */}
              <Modal
                open={open}
                onClose={() => {
                  setOpen(false);
                  setActive(null);
                }}
                title={active?.title ?? "Service"}
                showSendButton={false}
              >
                {active && (
                  <div className="space-y-4">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                      <video
                        src={active.video}
                        autoPlay
                        loop
                        playsInline
                        controls={false}
                        disableRemotePlayback
                        // optional poster if you added it
                        poster={active.poster}
                        className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
                        aria-label={`Présentation vidéo ${active.title}`}
                      />
                    </div>

                    {/* (Optionnel) Description sous la vidéo */}
                    <p className="text-sm text-white-black dark:text-black leading-relaxed">
                      {active.description}
                    </p>
                  </div>
                )}
              </Modal>
            </div>
          </section>
        </section>
        <section id="team" className="py-10 ">
          <section className="py-10 px-0 bg-white dark:bg-neutral-950 ">
            <div className="w-full ">
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mb-4">
                  Notre Équipe
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Rencontrez nos{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                    experts
                  </span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Une équipe passionnée dédiée à votre réussite technologique.
                </p>
              </div>

              {/* Updated grid for responsive layout */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 px-4 md:px-32">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-neutral-900 p-4 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  >
                    <div className="relative w-full h-48 sm:h-64 md:h-72 rounded-xl overflow-hidden mb-4 sm:mb-6">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="text-center">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                        {member.role}
                      </p>

                      <div className="flex justify-center space-x-3 sm:space-x-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 48 48"
                            className="w-5 h-5 sm:w-6 sm:h-6"
                          >
                            <path
                              fill="#0288D1"
                              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                            ></path>
                            <path
                              fill="#FFF"
                              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
        <section id="testimonials" className="py-20">
          <section className="py-28 bg-gray-50 dark:bg-neutral-950">
            <div className="w-full max-w-[1600px] mx-auto px-4">
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mb-4">
                  Témoignages
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Ce que nos clients{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                    disent de nous
                  </span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Découvrez comment nous avons aidé des entreprises comme la
                  vôtre à réussir.
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
                                className={`text-sm ${
                                  i < testimonial.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300 dark:text-gray-600"
                                }`}
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
        </section>
        <section id="contact" className="">
          <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 transition-colors duration-300">
            <div className="w-full max-w-[1600px] mx-auto px-4">
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mb-4">
                  Contactez-nous
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Parlons de votre{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                    projet
                  </span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Notre équipe est prête à répondre à vos questions et à
                  discuter de vos besoins.
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
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Bureaux
                        </h4>
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
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Email
                        </h4>
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
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Téléphone
                        </h4>
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
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      Heures d'ouverture
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lundi - Vendredi: 9h - 17h
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Samedi - Dimanche: Fermé
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2 bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Envoyez-nous un message
                  </h3>

                  <form
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget as HTMLFormElement;
                      const data = {
                        name: (form.querySelector("#name") as HTMLInputElement)
                          .value,
                        email: (
                          form.querySelector("#email") as HTMLInputElement
                        ).value,
                        phone:
                          (form.querySelector("#phone") as HTMLInputElement)
                            ?.value || "",
                        subject: (
                          form.querySelector("#subject") as HTMLInputElement
                        ).value,
                        message: (
                          form.querySelector("#message") as HTMLTextAreaElement
                        ).value,
                      };
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                      });
                      const json = await res.json();
                      if (json.ok) alert("Message envoyé ✅");
                      else alert(json.message || "Échec de l’envoi ❌");
                    }}
                  >
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
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
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
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
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Votre numéro
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 text-sm border border-gray-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
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
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
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
        </section>
      </main>
      <Footer />
    </>
  );
}
