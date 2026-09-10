import React from "react";
import {
  FaHeart,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const projects = [
    {
      name: "Artic Finance Ltd",
      description: "School finance and digital growth",
      href: "/projects/artic_finance_ltd",
    },
    {
      name: "From Home",
      description: "Diaspora food marketplace",
      href: "/projects/from_home",
    },
    {
      name: "Coinwise",
      description: "Crypto intelligence platform",
      href: "/projects/coinwise",
    },
    {
      name: "EDURA",
      description: "Teacher-school connection platform",
      href: "/projects/edura",
    },
  ];

  const services = [
    {
      name: "SEO & Search Visibility",
      href: "/#services",
    },
    {
      name: "Website Development",
      href: "/#services",
    },
    {
      name: "Social Media Management",
      href: "/#services",
    },
    {
      name: "Digital Advertising",
      href: "/#services",
    },
  ];

  return (
    <footer
  className="
    border-t
    border-zinc-200/60
    bg-linear-to-r
    from-pink-400
    to-white
    dark:border-white/10
    dark:from-zinc-950
    dark:to-black
    pt-14
    pb-32
  "
>
      <div className="container mx-auto px-6">

        {/* TOP FOOTER */}
        <div
          className="
            grid
            gap-10
            border-b
            border-black/10
            pb-10
            dark:border-white/10
            md:grid-cols-2
            lg:grid-cols-[1.2fr_1fr_1fr]
          "
        >

          {/* BRAND */}
          <div className="max-w-sm text-center md:text-left">
            <a
              href="/"
              aria-label="Nancy Gabriel Digital Growth and Visibility Specialist"
              className="inline-block"
            >
              <h2 className="text-2xl font-bold text-white">
                Nancy Gabriel
              </h2>
            </a>

            <p className="mt-2 text-sm font-medium text-zinc-800 dark:text-zinc-300">
              Digital Growth & Visibility Specialist
            </p>

            <p className="mt-4 text-sm leading-7 text-zinc-700 dark:text-zinc-400">
              Helping brands build stronger digital presences through SEO,
              websites, social media, digital advertising, and creative
              content.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-6 flex justify-center gap-4 md:justify-start">
              <a
                href="#"
                aria-label="Nancy Gabriel on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-black/10
                  transition
                  hover:-translate-y-1
                  hover:border-pink-500
                  hover:text-pink-500
                  dark:border-white/10
                "
              >
                <FaLinkedin size={17} />
              </a>

              <a
                href="#"
                aria-label="Nancy Gabriel on Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-black/10
                  transition
                  hover:-translate-y-1
                  hover:border-pink-500
                  hover:text-pink-500
                  dark:border-white/10
                "
              >
                <FaTwitter size={17} />
              </a>

              <a
                href="#"
                aria-label="Nancy Gabriel on YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-black/10
                  transition
                  hover:-translate-y-1
                  hover:border-pink-500
                  hover:text-pink-500
                  dark:border-white/10
                "
              >
                <FaYoutube size={17} />
              </a>
            </div>
          </div>

          {/* SELECTED PROJECTS */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">
              Selected Projects
            </p>

            <h3 className="mt-2 text-lg font-bold">
              Digital work I've helped build and grow
            </h3>

            <nav
              aria-label="Selected projects"
              className="mt-5 space-y-4"
            >
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.href}
                  className="
                    group
                    block
                    rounded-xl
                    border
                    border-black/5
                    bg-white/40
                    p-3
                    transition
                    hover:border-pink-500/30
                    hover:bg-white/70
                    dark:border-white/5
                    dark:bg-white/0.02
                    dark:hover:bg-white/0.05
                  "
                >
                  <span
                    className="
                      block
                      text-sm
                      font-semibold
                      transition
                      group-hover:text-pink-500
                    "
                  >
                    {project.name}
                  </span>

                  <span className="mt-1 block text-xs text-zinc-600 dark:text-zinc-500">
                    {project.description}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">
              What I Do
            </p>

            <h3 className="mt-2 text-lg font-bold">
              Digital growth services
            </h3>

            <nav
              aria-label="Digital growth services"
              className="mt-5 space-y-3"
            >
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="
                    block
                    text-sm
                    text-zinc-700
                    transition
                    hover:translate-x-1
                    hover:text-pink-500
                    dark:text-pink-400
                  "
                >
                  {service.name}
                </a>
              ))}
            </nav>

            <a
              href="/#contact"
              className="
                mt-6
                inline-flex
                items-center
                rounded-full
                bg-pink-500
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-pink-600
              "
            >
              Let's work together
            </a>
          </div>
        </div>

        {/* PROJECT SEO CONTEXT */}
        <div
          className="
            border-b
            border-black/10
            py-7
            dark:border-white/10
          "
        >
          <p className="mx-auto max-w-4xl text-center text-xs leading-6 text-zinc-600 dark:text-zinc-500">
            Nancy Gabriel is a Digital Growth & Visibility Specialist
            working across SEO, website development, social media management,
            digital advertising, content creation, and digital brand growth.
            Her selected projects include Artic Finance Ltd, From Home,
            Coinwise, and EDURA.
          </p>
        </div>

        {/* BOTTOM FOOTER */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            pt-6
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <p className="text-xs text-zinc-700 dark:text-zinc-500">
            © {currentYear} Nancy Gabriel. All rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-1 text-xs text-zinc-700 dark:text-zinc-500">
            Helping brands get
            <span className="font-semibold text-pink-500">
              seen, heard & found
            </span>

            <FaHeart className="ml-1 text-pink-500" />
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;