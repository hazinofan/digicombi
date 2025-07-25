// components/AboutSection.tsx
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-20">
    {/* Left: Big GIF */}
    <div className="w-full md:w-1/2 flex justify-center">
      {/* on mobile ~300px, on md+ ~600px */}
      <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
        <img
          src="/assets/animations-2.gif"
          alt="DigiCombi animation"
          className="w-full h-full object-contain"
        />
      </div>
    </div>

    {/* Right: Text */}
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
        DigiCombi – Votre partenaire digital pour tous vos services IT
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        DigiCombi – Votre partenaire digital pour tous vos services IT
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        Chez DigiCombi, nous croyons que la technologie doit être un levier
        de croissance, pas un frein.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        Notre nom combine Digital et Combi, un terme familier qui signifie
        “partenaire” : car nous ne sommes pas qu’un prestataire, mais un
        véritable allié numérique.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        Création de site internet, marketing digital, gestion des identités,
        cybersécurité, infonuagique (cloud), support technique,
        transformation numérique…
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        Nous offrons une gamme complète de services IT, adaptés à vos
        besoins et à vos ambitions.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        DigiCombi, c’est l’expertise, la proximité et la confiance pour
        faire de votre environnement technologique un moteur de performance.
      </p>
    </div>
  </div>
</section>

  );
}
