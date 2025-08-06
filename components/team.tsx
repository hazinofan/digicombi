import Image from "next/image";

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
    linkedin:
      "https://www.linkedin.com/in/reward-njefeh-yonkeu/",
    twitter: "#",
    github: "#",
  },
  {
    name: "Ahmed Amine Maarouf",
    role: "Software Engineer0",
    image: "/team/amine.webp",
    linkedin:
      "https://www.linkedin.com/in/ahmed-amine-maarouf-b08050293/",
    twitter: "#",
    github: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-28 px-0 bg-white dark:bg-neutral-950">
      <div className="w-full">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-neutral-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative w-full h-72 rounded-xl overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {member.role}
                </p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
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
  );
}
