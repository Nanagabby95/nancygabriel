import React, { useRef } from "react";

import project1 from "../../assets/project1.avif";
import project2 from "../../assets/project2.avif";
import project3 from "../../assets/project3.avif";
import project4 from "../../assets/project4.avif";

import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const Projects = () => {
  const scrollRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      image: project1,
      title: "FROM HOME",
      desc: "A premium marketplace connecting diaspora Nigerians with trusted food vendors in Nigeria.",

      services: [
        "Website Development",
        "Social Media Management",
        "Content Creation",
      ],

      socials: [
        {
          name: "Facebook",
          url: "https://facebook.com/",
          icon: FaFacebook,
        },
        {
          name: "Instagram",
          url: "https://instagram.com/",
          icon: FaInstagram,
        },
        {
          name: "TikTok",
          url: "https://tiktok.com/",
          icon: FaTiktok,
        },
      ],
    },

    {
      id: 2,
      image: project2,
      title: "ARTIC FINANCE LTD",
      desc: "A financial services firm providing educational loans and funding solutions to privately owned schools in Port Harcourt.",

      services: [
        "Website Development",
        "Social Media Management",
        "SEO",
        "Content Creation",
        "Meta Advertising",
      ],

      socials: [
        {
          name: "Facebook",
          url: "https://facebook.com/",
          icon: FaFacebook,
        },
        {
          name: "Instagram",
          url: "https://instagram.com/",
          icon: FaInstagram,
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/",
          icon: FaLinkedin,
        },
      ],
    },

    {
      id: 3,
      image: project3,
      title: "COINWISE",
      desc: "A crypto intelligence platform helping traders track, analyze, and improve performance.",

      services: [
        "Website Development",
        "Social Media Management",
        "Content Creation",
      ],

      socials: [
        {
          name: "Twitter",
          url: "https://twitter.com/",
          icon: FaTwitter,
        },
        {
          name: "Instagram",
          url: "https://instagram.com/",
          icon: FaInstagram,
        },
      ],
    },

    {
      id: 4,
      image: project4,
      title: "EDURA",
      desc: "A platform connecting exceptional teachers with schools that recognize their value.",

      services: [
        "Website Development",
        "Social Media Management",
        "Content Creation",
        "SEO",
      ],

      socials: [
        {
          name: "Facebook",
          url: "https://facebook.com/",
          icon: FaFacebook,
        },
        {
          name: "Instagram",
          url: "https://instagram.com/",
          icon: FaInstagram,
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/",
          icon: FaLinkedin,
        },
      ],
    },
  ];

  // Duplicate projects to create the infinite carousel effect
  const infiniteProjects = [
    ...projectsData,
    ...projectsData,
    ...projectsData,
    ...projectsData,
  ];

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth;

    const targetScroll =
      direction === "left"
        ? scrollLeft - scrollAmount
        : scrollLeft + scrollAmount;

    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    setTimeout(() => {
      if (!scrollRef.current) return;

      const maxScroll = scrollRef.current.scrollWidth / 4;

      if (scrollRef.current.scrollLeft >= maxScroll * 3) {
        scrollRef.current.scrollLeft = maxScroll;
      } else if (scrollRef.current.scrollLeft <= 0) {
        scrollRef.current.scrollLeft = maxScroll * 2;
      }
    }, 450);
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden py-20"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-8 lg:px-14">

        {/* ================= HEADER ================= */}
        <div className="mb-16 flex flex-col items-center justify-between gap-6 sm:flex-row">

          <div className="text-center sm:text-left">
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-500"
              data-aos="fade-up"
            >
              Selected Work
            </p>

            <h2
              id="projects-heading"
              className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
              data-aos="fade-up"
            >
              My{" "}
              <span className="text-pink-500 dark:text-pink-400">
                Projects
              </span>
            </h2>

            <p
              className="mt-4 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base"
              data-aos="fade-up"
            >
              Digital projects I've helped build, manage, optimize, and grow.
            </p>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="View previous projects"
              className="
                flex h-12 w-12 items-center justify-center
                rounded-full border-2
                border-gray-800
                text-gray-900
                transition-all duration-300
                hover:border-pink-500
                hover:bg-pink-500/10
                dark:border-zinc-200
                dark:text-white
                dark:hover:border-pink-500
                dark:hover:bg-pink-500/10
              "
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="View next projects"
              className="
                flex h-12 w-12 items-center justify-center
                rounded-full border-2
                border-gray-800
                text-gray-900
                transition-all duration-300
                hover:border-pink-500
                hover:bg-pink-500/10
                dark:border-zinc-200
                dark:text-white
                dark:hover:border-pink-500
                dark:hover:bg-pink-500/10
              "
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* ================= PROJECT CAROUSEL ================= */}
        <div
          ref={scrollRef}
          aria-label="Selected projects"
          className="
            flex w-full gap-6
            overflow-hidden
            px-4
            snap-x snap-mandatory
            scrollbar-none
          "
        >
          {infiniteProjects.map((project, index) => (
            <article
              key={`${project.id}-${index}`}
              className="
                group flex w-full shrink-0 snap-start flex-col
                overflow-hidden rounded-3xl
                border-2
                border-gray-100
                bg-white
                transition-all duration-300
                hover:border-pink-500/40
                hover:shadow-[0_20px_40px_rgba(236,72,153,0.15)]
                dark:border-zinc-800/60
                dark:bg-zinc-900/40
                md:w-[calc(50%-12px)]
                lg:w-[calc(33.333%-16px)]
              "
            >
              {/* ================= PROJECT IMAGE ================= */}
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-zinc-900">

                <img
                  src={project.image}
                  alt={`${project.title} project by Nancy Gabriel`}
                  width="1200"
                  height="675"
                  loading="lazy"
                  decoding="async"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* IMAGE OVERLAY */}
                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/50
                    via-black/10
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* PROJECT NUMBER */}
                <div
                  className="
                    absolute left-4 top-4
                    rounded-full
                    bg-black/70
                    px-3 py-1
                    text-xs
                    font-semibold
                    tracking-wider
                    text-white
                    backdrop-blur-md
                  "
                >
                  0{project.id}
                </div>
              </div>

              {/* ================= PROJECT DETAILS ================= */}
              <div className="flex grow flex-col p-6">

                {/* TITLE */}
                <h3
                  className="
                    mb-3
                    text-xl
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mb-6
                    text-sm
                    leading-6
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  {project.desc}
                </p>

                {/* ================= WHAT I DID ================= */}
                <div className="mb-6">
                  <p
                    className="
                      mb-3
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-gray-400
                      dark:text-zinc-500
                    "
                  >
                    What I Did
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="
                          whitespace-nowrap
                          rounded-full
                          border
                          border-pink-500/20
                          bg-pink-500/5
                          px-3
                          py-1.5
                          text-[11px]
                          font-medium
                          text-pink-600
                          dark:bg-pink-500/10
                          dark:text-pink-400
                        "
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="mb-5 border-t border-gray-100 dark:border-zinc-800" />

                {/* ================= SOCIAL PRESENCE ================= */}
                <div className="mt-auto flex items-center justify-between gap-4">

                  <div>
                    <p
                      className="
                        mb-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-gray-400
                        dark:text-zinc-500
                      "
                    >
                      Social Presence
                    </p>

                    <div className="flex items-center gap-2">
                      {project.socials.map((social) => {
                        const Icon = social.icon;

                        return (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${project.title} on ${social.name}`}
                            title={`Visit ${project.title} on ${social.name}`}
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-gray-200
                              text-gray-600
                              transition-all
                              duration-300
                              hover:border-pink-500
                              hover:bg-pink-500/10
                              hover:text-pink-500
                              dark:border-zinc-700
                              dark:text-gray-400
                              dark:hover:bg-pink-500/10
                            "
                          >
                            <Icon size={16} />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* EXTERNAL LINK */}
                  <div
                    aria-hidden="true"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-gray-100
                      text-gray-500
                      transition-all
                      duration-300
                      group-hover:bg-pink-500
                      group-hover:text-white
                      dark:bg-zinc-800
                      dark:text-gray-400
                    "
                    title="Social pages"
                  >
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;