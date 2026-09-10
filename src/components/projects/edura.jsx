import React from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Megaphone,
  PenTool,
  Search,
  Users,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import edura from "../../assets/project4.avif";

const Edura = () => {
  const services = [
    {
      title: "Website Development",
      description:
        "Designed and developed a responsive digital platform focused on connecting schools with qualified teachers and creating a clear experience for both sides.",
      icon: Code2,
    },
    {
      title: "Social Media Management",
      description:
        "Supported EDURA's social media presence with content and communication designed to keep the platform visible to schools, educators, and potential users.",
      icon: Megaphone,
    },
    {
      title: "Content Creation",
      description:
        "Created digital content that communicates the platform's value, highlights its purpose, and makes its offering easier for the target audience to understand.",
      icon: PenTool,
    },
    {
      title: "SEO",
      description:
        "Applied search-focused thinking to the website and content structure to improve discoverability and create a stronger foundation for organic visibility.",
      icon: Search,
    },
  ];

  const highlights = [
    "Teacher-school connection platform",
    "Responsive website experience",
    "Clear user journey",
    "Social media presence",
    "Promotional content",
    "Search visibility",
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
    <main className="min-h-screen bg-black text-white">

      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-linear-to-br from-pink-950/40 via-black to-black" />

        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-pink-600/10 blur-3xl" />

        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back to projects */}
          <a
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-pink-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </a>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Project introduction */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
                Project Case Study
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                EDURA
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                A platform connecting exceptional teachers with schools that
                recognize their value.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
                EDURA was created to make it easier for schools to discover
                talented teachers while giving educators an opportunity to
                connect with institutions where their skills and experience
                are valued.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-300">
                  Education
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  Recruitment
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  Digital Platform
                </span>
              </div>
            </div>

            {/* Project image */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-2rem bg-pink-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-2rem border border-white/10 bg-zinc-900 shadow-2xl">
                <img
                  src={edura}
                  alt="EDURA education recruitment platform project by Nancy Gabriel"
                  width="1200"
                  height="675"
                  loading="eager"
                  decoding="async"
                  className="h-auto w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                The Project
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Creating a better connection between schools and teachers.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-white/60">
              <p>
                Finding the right teacher can be a challenge for schools, while
                talented educators can struggle to find institutions where
                their skills are properly recognized.
              </p>

              <p>
                EDURA provides a digital space designed to bring both sides
                closer together, making the discovery and connection process
                more straightforward.
              </p>

              <p>
                My contribution covered several parts of the platform's
                digital presence, combining website development, content,
                social media, and SEO to create a more complete online
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              My Role
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Building and growing the digital presence.
            </h2>

            <p className="mt-5 leading-7 text-white/60">
              EDURA gave me the opportunity to work across multiple areas of
              digital execution — from the platform itself to the content and
              channels used to communicate its value.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-2rem border border-white/10 bg-black p-7 transition duration-300 hover:-translate-y-1 hover:border-pink-500/30"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                Digital Approach
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Bringing technology, visibility, and communication together.
              </h2>

              <p className="mt-6 leading-8 text-white/60">
                EDURA is more than a website. Its success depends on whether
                schools and teachers can understand the platform, find it
                online, and feel confident engaging with it.
              </p>

              <p className="mt-5 leading-8 text-white/60">
                My approach was therefore not limited to development. I worked
                across the digital touchpoints that help a platform establish
                its presence and communicate its value to the people it serves.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500">
                  <Users className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">
                    Built around people
                  </p>

                  <p className="mt-1 text-sm text-white/40">
                    Connecting schools with the right educators
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="rounded-2rem border border-white/10 bg-zinc-950 p-7 sm:p-9">
              <div className="mb-7">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-pink-500">
                  Project Highlights
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  Key areas of execution
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-pink-500" />

                    <span className="text-sm leading-6 text-white/65">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Digital Presence
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Explore EDURA online.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/50">
            The project extends beyond the website. Explore EDURA's social
            platforms to see how the brand communicates with its audience
            across different digital channels.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => {
              const Icon = platform.icon;

              return (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit EDURA on ${platform.name}`}
                  className="group flex items-center gap-3 rounded-full border border-white/10 bg-black px-6 py-3 text-sm text-white/70 transition hover:border-pink-500/40 hover:text-pink-400"
                >
                  <Icon className="h-5 w-5" />

                  <span>{platform.name}</span>

                  <ArrowUpRight className="h-4 w-4 opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="rounded-2rem border border-pink-500/20 bg-linear-to-br from-pink-950/40 via-zinc-950 to-black p-8 sm:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500">
              <ArrowUpRight className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              See EDURA in action.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/50">
              Explore the platform and see how EDURA brings schools and
              educators together.
            </p>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-pink-500"
            >
              Visit Website
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

 
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-pink-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </a>
        </div>
      </section>
    </main>
  );
};

export default Edura;