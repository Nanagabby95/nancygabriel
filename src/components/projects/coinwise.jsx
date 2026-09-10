import React from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
  Search,
  Megaphone,
  PenTool,
  Code2,
  BarChart3,
} from "lucide-react";

import { FaInstagram, FaTwitter } from "react-icons/fa";

import coinwise from "../../assets/project3.avif";

const Coinwise = () => {
  const services = [
    {
      icon: Code2,
      title: "Website Development",
      description:
        "Developed a responsive digital platform designed to present Coinwise's crypto intelligence tools in a clear and user-friendly way.",
    },
    {
      icon: Megaphone,
      title: "Social Media Management",
      description:
        "Supported the brand's social presence with consistent communication and content designed to keep the platform visible to its audience.",
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description:
        "Created digital content that helped communicate Coinwise's value, platform features, and relevance to traders.",
    },
    {
      icon: Search,
      title: "SEO",
      description:
        "Applied search-focused thinking to improve the discoverability and digital visibility of the platform and its content.",
    },
  ];

  const highlights = [
    "Responsive and user-focused website experience",
    "Clear presentation of crypto intelligence features",
    "Content designed around the target audience",
    "Consistent digital brand presence",
    "Search visibility considerations built into the digital strategy",
  ];

  const platforms = [
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "#",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "#",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center px-6 pt-32 pb-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-fuchsia-700/10 blur-3xl" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* TEXT */}
          <div data-aos="fade-right">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-400">
              <span className="h-2 w-2 rounded-full bg-pink-500" />
              Selected Project
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
              Digital Project
            </p>

            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Coinwise
              <span className="block bg-linear-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
                Crypto Intelligence
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
              A crypto intelligence platform helping traders track, analyze,
              and improve performance through clearer access to useful market
              and trading insights.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Website Development", "Social Media", "Content Creation", "SEO"].map(
                (service) => (
                  <span
                    key={service}
                    className="rounded-full border border-pink-500/20 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur dark:bg-white/5 dark:text-zinc-200"
                  >
                    {service}
                  </span>
                )
              )}
            </div>
          </div>

          {/* IMAGE */}
          <div data-aos="fade-left" className="relative">
            <div className="absolute -inset-4 rounded-2rem bg-linear-to-r from-pink-500/20 to-fuchsia-600/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-2rem border border-white/10 bg-zinc-900 shadow-2xl">
              <img
                src={coinwise}
                alt="Coinwise crypto intelligence platform project by Nancy Gabriel"
                width="1200"
                height="675"
                loading="eager"
                decoding="async"
                className="h-auto w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/30 to-transparent p-6 pt-20">
                <p className="text-sm font-medium text-white/70">
                  Project 03
                </p>
                <p className="mt-1 text-xl font-semibold text-white">
                  Coinwise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div
            data-aos="fade-up"
            className="grid gap-10 rounded-2rem border border-zinc-200/70 bg-white/60 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/0.03 sm:p-12 lg:grid-cols-[1fr_1.5fr]"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Turning a digital platform into a clearer experience.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-300">
              <p>
                Coinwise was created to help traders make better sense of
                crypto-related information and improve how they monitor their
                trading performance.
              </p>

              <p>
                My work focused on combining website development, content,
                social media, and SEO thinking to help the platform communicate
                its value clearly and maintain a stronger digital presence.
              </p>

              <p>
                The goal was not simply to build a website, but to create a
                digital experience that could support the brand's visibility,
                communication, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl" data-aos="fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              My Role
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What I brought to the project.
            </h2>

            <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
              I worked across the digital experience, bringing together
              development, marketing, content, and search visibility.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group rounded-2rem border border-zinc-200/70 bg-white/60 p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-pink-500/30 dark:border-white/10 dark:bg-white/0.03"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 transition group-hover:bg-pink-500 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{title}</h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL APPROACH */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div data-aos="fade-right">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              Digital Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              More than a website.
              <span className="block text-pink-500">
                A complete digital presence.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-zinc-600 dark:text-zinc-300">
              For Coinwise, the digital experience needed to extend beyond the
              website. The brand also needed clear communication, useful
              content, social visibility, and search-focused thinking working
              together.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-zinc-600 dark:text-zinc-300">
              This approach reflects how I work with brands: bringing the
              right combination of skills together rather than treating each
              digital channel as a separate piece.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="rounded-2rem border border-pink-500/20 bg-linear-to-br from-pink-500/10 to-transparent p-8 sm:p-10"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500 text-white">
                <BarChart3 size={26} />
              </div>

              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Digital Growth
                </p>
                <h3 className="text-xl font-bold">
                  Connected digital channels
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Website",
                "Search visibility",
                "Social media",
                "Content",
                "Audience communication",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-zinc-200/60 bg-white/60 p-4 dark:border-white/10 dark:bg-black/20"
                >
                  <CheckCircle2 className="shrink-0 text-pink-500" size={20} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT HIGHLIGHTS */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center" data-aos="fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              Project Highlights
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built with purpose.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight, index) => (
              <div
                key={highlight}
                data-aos="fade-up"
                data-aos-delay={index * 75}
                className="flex items-start gap-4 rounded-2xl border border-zinc-200/70 bg-white/60 p-5 dark:border-white/10 dark:bg-white/0.03"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-pink-500"
                  size={21}
                />

                <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL PRESENCE */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div
          data-aos="fade-up"
          className="mx-auto max-w-4xl rounded-2rem border border-zinc-200/70 bg-white/60 p-8 text-center shadow-xl dark:border-white/10 dark:bg-white/0.03 sm:p-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Digital Presence
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Explore Coinwise online.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
            Follow the project across its social platforms to explore its
            digital presence and content.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            {platforms.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Coinwise on ${name}`}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32 pt-10 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2rem border border-pink-500/20 bg-linear-to-r from-pink-500/10 via-fuchsia-500/5 to-transparent p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              Project 03
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Explore more of my work.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold transition hover:border-pink-500 hover:text-pink-500 dark:border-white/15"
            >
              <ArrowLeft size={17} />
              Back to Projects
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:bg-pink-600"
            >
              Visit Website
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Coinwise;