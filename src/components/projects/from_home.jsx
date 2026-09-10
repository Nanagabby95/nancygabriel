import React from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Megaphone,
  PenTool,
  Search,
  Smartphone,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

import fromHome from "../../assets/project1.avif";

const FromHome = () => {
  const services = [
    {
      title: "Website Development",
      description:
        "Designed and developed a responsive digital marketplace experience focused on usability, clarity, and a smooth customer journey.",
      icon: Code2,
    },
    {
      title: "Social Media Management",
      description:
        "Supported the brand's social presence with consistent content and communication designed to keep the business visible and connected with its audience.",
      icon: Megaphone,
    },
    {
      title: "Content Creation",
      description:
        "Created promotional and social content that communicates the platform's value and helps customers understand how From Home works.",
      icon: PenTool,
    },
  ];

  const highlights = [
    "Premium marketplace experience",
    "Responsive website interface",
    "Clear customer journey",
    "Social media presence",
    "Promotional content",
    "Digital brand visibility",
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
      name: "TikTok",
      icon: FaTiktok,
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
          {/* Back button */}
          <a
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-pink-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </a>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
                Project Case Study
              </p>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                From Home
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                A premium marketplace connecting diaspora Nigerians with
                trusted food vendors in Nigeria.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
                From Home was created to make it easier for Nigerians abroad
                to connect with trusted food vendors and send familiar
                Nigerian meals and food products to loved ones back home.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-300">
                  Marketplace
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  Website
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  Digital Presence
                </span>
              </div>
            </div>

            {/* Project image */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-2rem bg-pink-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-2rem border border-white/10 bg-zinc-900 shadow-2xl">
                <img
                  src={fromHome}
                  alt="From Home marketplace project by Nancy Gabriel"
                  width="1200"
                  height="675"
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
                Building a digital home for a food marketplace.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-white/60">
              <p>
                From Home needed more than just a website. The platform needed
                a digital experience that could communicate trust, make the
                marketplace easy to understand, and give customers a simple
                way to discover what the brand offers.
              </p>

              <p>
                My work focused on bringing the digital pieces together —
                from the website experience to the brand's social presence and
                promotional content.
              </p>

              <p>
                The goal was to create a consistent online presence where the
                website and social platforms support one another instead of
                operating as disconnected channels.
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
              More than building the website.
            </h2>

            <p className="mt-5 leading-7 text-white/60">
              I worked across the digital presence of From Home, combining
              development, content, and social media to help create a more
              cohesive brand experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
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

                  <h3 className="text-xl font-semibold">
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
                Digital Execution
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Connecting the website, content, and audience.
              </h2>

              <p className="mt-6 leading-8 text-white/60">
                A strong digital presence is rarely about one platform.
                From Home's online experience was approached as a connected
                system where the website, social media, and content all play a
                role in helping the brand communicate its value.
              </p>

              <p className="mt-5 leading-8 text-white/60">
                This allowed me to apply different parts of my skill set to
                the same project — combining technical development with
                marketing and creative execution.
              </p>
            </div>

            <div className="rounded-2rem border border-white/10 bg-zinc-950 p-7 sm:p-9">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500">
                  <Smartphone className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Project Highlights
                  </h3>

                  <p className="text-sm text-white/40">
                    Key areas of digital execution
                  </p>
                </div>
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
            Explore From Home online.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/50">
            The project extends beyond the website. Explore the brand's social
            platforms to see how its digital presence is communicated across
            different channels.
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
                  aria-label={`Visit From Home on ${platform.name}`}
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
              <Search className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              See the project in action.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/50">
              Explore the From Home platform and experience the digital
              marketplace firsthand.
            </p>

            <a
                              href="https://freshharvest.vercel.app/"
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

export default FromHome;