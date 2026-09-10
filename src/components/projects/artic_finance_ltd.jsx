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

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import articFinance from "../../assets/project2.avif";

const ArticFinanceLtd = () => {
  const services = [
    {
      icon: Code2,
      title: "Website Development",
      description:
        "Designed and developed a responsive digital platform that communicates Artic Finance's services clearly and professionally.",
    },
    {
      icon: Search,
      title: "SEO & Search Visibility",
      description:
        "Built the website structure and content with search visibility and relevant school-financing queries in mind.",
    },
    {
      icon: FaInstagram,
      title: "Social Media Management",
      description:
        "Supported the brand's social presence with consistent content, communication, and audience-focused messaging.",
    },
    {
      icon: Megaphone,
      title: "Meta Advertising",
      description:
        "Created targeted advertising campaigns designed to reach school owners and generate relevant enquiries.",
    },
    {
      icon: PenTool,
      title: "Content & Creative",
      description:
        "Developed promotional content around school expansion, buses, WAEC centres, ICT equipment, and other financing needs.",
    },
  ];

  const approach = [
    "Understand the business and its audience",
    "Translate services into clear digital messaging",
    "Build a credible and responsive website",
    "Improve the foundation for search visibility",
    "Create content that communicates value",
    "Use digital advertising to reach relevant audiences",
  ];

  const platforms = [
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "#",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      <section
        aria-labelledby="project-title"
        className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
          <a
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-pink-500 dark:text-zinc-400"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </a>

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                Selected Case Study
              </p>

              <h1
                id="project-title"
                className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              >
                Artic Finance Ltd
              </h1>

              <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-2xl">
                Building a stronger digital presence for a school-focused
                financial services brand.
              </p>

              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
                Artic Finance provides educational loans and funding solutions
                to privately owned schools in Port Harcourt. My work focused on
                bringing its website, search visibility, social media, content,
                and advertising together into a more connected digital presence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-600 dark:text-pink-400">
                  Website Development
                </span>

                <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-600 dark:text-pink-400">
                  SEO
                </span>

                <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-600 dark:text-pink-400">
                  Social Media
                </span>

                <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-600 dark:text-pink-400">
                  Digital Advertising
                </span>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://articfinance.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:-translate-y-0.5 hover:bg-pink-600"
                >
                  Visit Website
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3.5 text-sm font-semibold text-zinc-800 transition hover:border-pink-500 hover:text-pink-500 dark:border-zinc-700 dark:text-zinc-200"
                >
                  Explore the Work
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-2rem bg-pink-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-2rem border border-zinc-200 bg-zinc-100 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
                <img
                  src={articFinance}
                  alt="Artic Finance Ltd website project by Nancy Gabriel"
                  width="1200"
                  height="800"
                  fetchPriority="high"
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 left-5 rounded-2xl border border-zinc-200 bg-white/95 px-5 py-4 shadow-xl backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/95 sm:left-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Project
                </p>

                <p className="mt-1 font-semibold">Artic Finance Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        aria-labelledby="overview-heading"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              The Challenge
            </p>

            <h2
              id="overview-heading"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Making financial services easier to discover and understand.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
            <p>
              Financial services can feel complicated online. For a school owner
              looking for funding, the website needs to answer a simple question
              quickly:
              <span className="font-semibold text-zinc-900 dark:text-white">
                {" "}
                “Can this business help me solve my school's funding need?”
              </span>
            </p>

            <p>
              Artic Finance needed a professional digital presence that could
              communicate its loan solutions clearly, establish credibility, and
              make it easier for school owners to understand what funding was
              available to them.
            </p>

            <p>
              The opportunity was bigger than building a website. The different
              digital touchpoints needed to work together; website, search,
              social media, content, and advertising.
            </p>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="role-heading"
        className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              My Role
            </p>

            <h2
              id="role-heading"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              More than building a website.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
              I worked across several areas of Artic Finance's digital presence,
              bringing strategy, development, marketing, and creative execution
              together.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-500/5 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 transition group-hover:bg-pink-500 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">{service.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="approach-heading"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              The Approach
            </p>

            <h2
              id="approach-heading"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              One brand. Multiple digital touchpoints.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
              The goal wasn't simply to create individual pieces of digital
              work. It was to create a more connected presence where each
              channel supports the next.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {approach.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-500/10 text-sm font-bold text-pink-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="text-sm font-medium leading-6 text-zinc-700 dark:text-zinc-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        aria-labelledby="outcome-heading"
        className="bg-zinc-950 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-5 rounded-2rem bg-pink-500/10 blur-3xl" />

              <div className="relative rounded-2rem border border-zinc-800 bg-zinc-900 p-5 shadow-2xl sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500">
                      Digital Growth
                    </p>

                    <p className="mt-1 text-lg font-semibold">
                      Connected Presence
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/10 text-pink-500">
                    <BarChart3 size={19} />
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    ["Website", "Built"],
                    ["SEO Foundation", "Optimized"],
                    ["Social Presence", "Managed"],
                    ["Content", "Created"],
                    ["Advertising", "Launched"],
                  ].map(([label, status]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-4"
                    >
                      <span className="text-sm text-zinc-300">{label}</span>

                      <span className="flex items-center gap-2 text-xs font-semibold text-pink-400">
                        <CheckCircle2 size={15} />
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
                The Bigger Picture
              </p>

              <h2
                id="outcome-heading"
                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Turning digital activity into a connected brand presence.
              </h2>

              <p className="mt-6 text-base leading-8 text-zinc-400">
                A website shouldn't exist in isolation. Search visibility,
                social content, advertising, and the website itself should help
                move people from discovering a brand to understanding it and
                eventually taking action.
              </p>

              <p className="mt-6 text-base leading-8 text-zinc-400">
                That's the approach I brought to this project. Combining
                different digital skills around the actual needs of the business
                and its audience.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-px w-12 bg-pink-500" />

                <p className="text-sm font-semibold text-white">
                  Strategy + Creativity + Execution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="details-heading"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Brand
            </p>

            <p className="mt-3 text-lg font-semibold">Artic Finance Ltd</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Industry
            </p>

            <p className="mt-3 text-lg font-semibold">Financial Services</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Primary Audience
            </p>

            <p className="mt-3 text-lg font-semibold">
              Privately Owned Schools
            </p>
          </div>
        </div>

        <div
          id="details-heading"
          className="mt-16 h-px w-full bg-zinc-200 dark:bg-zinc-800"
        />

        <div className="mt-12 flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              Social Presence
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Explore the brand online.
            </h2>
          </div>

          <div className="flex gap-3">
            {platforms.map((platform) => {
              const Icon = platform.icon;

              return (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Artic Finance on ${platform.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition hover:border-pink-500 hover:bg-pink-500 hover:text-white dark:border-zinc-700 dark:text-zinc-400"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2rem bg-pink-500 px-6 py-14 text-center sm:px-12 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            What's Next?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Looking for more than just a website?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80">
            I help brands bring together strategy, technology, marketing, and
            creative execution to build stronger digital presences.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-pink-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-zinc-100"
          >
            Let's Work Together
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <section
        aria-labelledby="next-project-heading"
        className="border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                More Work
              </p>

              <h2
                id="next-project-heading"
                className="mt-3 text-3xl font-bold tracking-tight"
              >
                Explore another project.
              </h2>
            </div>

            <a
              href="/#projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-pink-500"
            >
              View all projects
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticFinanceLtd;
