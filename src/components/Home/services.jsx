import {
  Search,
  Code2,
  Share2,
  Megaphone,
  Palette,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01",
      icon: Search,
      title: "SEO & Search Visibility",
      description:
        "Helping brands improve their search visibility, attract the right audience, and build sustainable organic growth through strategic SEO.",
      tags: ["SEO Strategy", "Keyword Research", "Content"],
    },
    {
      number: "02",
      icon: Code2,
      title: "Website Development",
      description:
        "Building responsive, user-friendly websites that give businesses a credible online presence and create better experiences for their visitors.",
      tags: ["Frontend", "Responsive Design", "Maintenance"],
    },
    {
      number: "03",
      icon: Share2,
      title: "Social Media Management",
      description:
        "Managing social media presence through thoughtful content, consistent communication, and strategies designed to keep brands visible and connected.",
      tags: ["Content", "Strategy", "Community"],
    },
    {
      number: "04",
      icon: Megaphone,
      title: "Digital Advertising",
      description:
        "Creating targeted digital advertising campaigns across Meta, TikTok, and YouTube to reach relevant audiences and turn attention into meaningful action.",
      tags: ["Meta Ads", "TikTok Ads", "YouTube Ads"],
    },
    {
      number: "05",
      icon: Palette,
      title: "Creative Content & Design",
      description:
        "Creating visual content that helps brands communicate their value, capture attention, and promote their products or services across digital platforms.",
      tags: ["Video Editing", "Promotional Design", "Social Content"],
    },
    {
      number: "06",
      icon: HeartHandshake,
      title: "Customer Support & Experience",
      description:
        "Helping businesses create thoughtful customer interactions that improve communication, build trust, and leave customers with a positive experience.",
      tags: ["Support", "Communication", "Experience"],
    },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-16"
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20
        h-80 w-80 rounded-full bg-pink-500/10
        blur-[120px] dark:bg-pink-600/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20
        h-96 w-96 rounded-full bg-pink-500/10
        blur-[140px] dark:bg-pink-500/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2
        h-72 w-72 -translate-x-1/2 -translate-y-1/2
        rounded-full bg-pink-500/5 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* =====================================================
            SERVICES HEADER
        ====================================================== */}

        <header
          className="mx-auto mb-16 max-w-3xl text-center"
          data-aos="fade-up"
        >
          {/* LABEL */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full
            border border-pink-500/20 bg-pink-500/10
            px-4 py-1.5 backdrop-blur-sm"
            data-aos="fade-down"
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 animate-pulse rounded-full bg-pink-500"
            />

            <span
              className="text-sm font-semibold uppercase
              tracking-[0.2em] text-pink-600 dark:text-pink-400"
            >
              What I Do
            </span>
          </div>

          {/* HEADING */}
          <h2
            id="services-heading"
            className="text-4xl font-bold leading-tight
            tracking-tight text-gray-900
            dark:text-white sm:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            Digital services built around{" "}
            <span
              className="bg-linear-to-r from-pink-500 to-pink-700
              bg-clip-text text-transparent
              dark:from-pink-400 dark:to-pink-600"
            >
              growth
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="mx-auto mt-6 max-w-2xl text-base
            leading-7 text-gray-600 dark:text-gray-300
            sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I bring together strategy, technology, marketing, and
            creative skills to help brands build a stronger,
            more visible, and more effective digital presence.
          </p>
        </header>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {services.map(
            (
              { number, icon: Icon, title, description, tags },
              index
            ) => (
              <article
                key={title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-gray-200/80
                  bg-white/70 p-7
                  shadow-sm backdrop-blur-md
                  transition-all duration-500

                  hover:-translate-y-2
                  hover:border-pink-500/30
                  hover:shadow-[0_20px_60px_rgba(236,72,153,0.12)]

                  dark:border-gray-800
                  dark:bg-gray-950/60
                  dark:hover:border-pink-500/30
                  dark:hover:shadow-[0_20px_60px_rgba(236,72,153,0.08)]

                  sm:p-8
                "
              >
                {/* CARD GLOW */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    -right-16 -top-16 h-32 w-32
                    rounded-full bg-pink-500/0
                    blur-3xl transition-all duration-500
                    group-hover:bg-pink-500/10
                  "
                />

                {/* TOP ROW */}
                <div
                  className="
                    relative z-10 mb-10 flex
                    items-start justify-between
                  "
                >
                  {/* NUMBER */}
                  <span
                    aria-hidden="true"
                    className="
                      text-sm font-semibold tracking-[0.2em]
                      text-gray-400
                      dark:text-gray-600
                      transition-colors duration-300
                      group-hover:text-pink-500
                    "
                  >
                    {number}
                  </span>

                  {/* ICON */}
                  <div
                    aria-hidden="true"
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-full border
                      border-gray-200
                      bg-white/70
                      text-gray-500
                      backdrop-blur-sm
                      transition-all duration-500

                      group-hover:rotate-6
                      group-hover:border-pink-500/40
                      group-hover:bg-pink-500
                      group-hover:text-white
                      group-hover:shadow-lg
                      group-hover:shadow-pink-500/20

                      dark:border-gray-800
                      dark:bg-gray-900/70
                      dark:text-gray-400
                    "
                  >
                    <Icon size={19} strokeWidth={1.7} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <h3
                    className="
                      text-xl font-bold tracking-tight
                      text-gray-900
                      transition-colors duration-300
                      group-hover:text-pink-600
                      dark:text-white
                      dark:group-hover:text-pink-400
                      sm:text-2xl
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-4 text-sm leading-6
                      text-gray-600
                      dark:text-gray-400
                      transition-colors duration-300
                      group-hover:text-gray-700
                      dark:group-hover:text-gray-300
                    "
                  >
                    {description}
                  </p>
                </div>

                {/* SERVICE TAGS */}
                <div
                  aria-label={`${title} areas`}
                  className="
                    relative z-10 mt-7
                    flex flex-wrap gap-2
                  "
                >
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full border
                        border-gray-200
                        bg-gray-50
                        px-3 py-1.5
                        text-[10px] font-medium
                        uppercase tracking-wider
                        text-gray-500
                        transition-all duration-300

                        group-hover:border-pink-500/20
                        group-hover:bg-pink-500/5
                        group-hover:text-pink-600

                        dark:border-gray-800
                        dark:bg-gray-900/60
                        dark:text-gray-500
                        dark:group-hover:text-pink-400
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ARROW */}
                <div
                  aria-hidden="true"
                  className="
                    relative z-10 mt-8
                    flex items-center
                    text-pink-500
                    opacity-0
                    -translate-x-2
                    transition-all duration-500

                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight size={18} />
                </div>

                {/* BOTTOM ACCENT */}
                <div
                  aria-hidden="true"
                  className="
                    absolute bottom-0 left-0
                    h-0.5 w-0
                    bg-linear-to-r
                    from-pink-500 to-pink-700
                    transition-all duration-500
                    group-hover:w-full
                  "
                />
              </article>
            )
          )}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div
          className="
            mt-16 flex flex-col items-center
            justify-between gap-6
            border-t border-gray-200
            pt-8 text-center

            dark:border-gray-800

            sm:flex-row sm:text-left
          "
          data-aos="fade-up"
        >
          <p
            className="
              max-w-xl text-sm leading-6
              text-gray-500
              dark:text-gray-400
            "
          >
            I bring together the right combination of skills
            to solve the challenges facing a brand.
          </p>

          <a
            href="#contact"
            aria-label="Contact Nancy Gabriel to discuss a project"
            className="
              group inline-flex items-center gap-2
              text-sm font-semibold
              text-gray-900
              transition-colors duration-300
              hover:text-pink-600

              dark:text-white
              dark:hover:text-pink-400
            "
          >
            Let&apos;s work together

            <ArrowUpRight
              size={17}
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;