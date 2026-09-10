import React from "react";
import { ArrowRight } from "lucide-react";
import cert from "../../assets/cert.avif";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "SEO Optimization",
      issuer: "Semrush",
      date: "2025",
    },
    {
      id: 2,
      title: "Meta Ads",
      issuer: "Alison",
      date: "2025",
    },
    {
      id: 3,
      title: "Google Analytics 3 & 4",
      issuer: "Alison",
      date: "2026",
    },
    {
      id: 4,
      title: "Content Marketing",
      issuer: "Alison",
      date: "2026",
    },
    {
      id: 5,
      title: "Google Ads",
      issuer: "Alison",
      date: "2026",
    },
    {
      id: 6,
      title: "Copywriting",
      issuer: "Alison",
      date: "2026",
    },
    {
      id: 7,
      title: "Email Marketing & CRM",
      issuer: "Alison",
      date: "2026",
    },
    {
      id: 8,
      title: "Google Search Console",
      issuer: "Alison",
      date: "2026",
    },
  ];

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="
        relative flex min-h-screen items-center
        overflow-hidden py-20
        px-4 sm:px-6 lg:px-16
      "
    >
      <div className="container mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-14">
        <div
          className="
            flex flex-col items-center
            gap-12 lg:flex-row lg:gap-16
          "
        >

          {/* =========================================
              IMAGE COLUMN
          ========================================== */}
          <div
            className="
              order-1 flex w-full
              justify-center lg:w-2/5
            "
            data-aos="fade-right"
          >
            <div className="group relative w-full max-w-md">

              {/* GLOW */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-4
                  rounded-full
                  bg-linear-to-r
                  from-pink-500 to-pink-700
                  opacity-30
                  blur-2xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-50
                "
              />

              {/* IMAGE FRAME */}
              <div
                className="
                  relative overflow-hidden
                  rounded-full
                  border border-pink-500/20
                  bg-white/5
                  shadow-2xl
                  backdrop-blur-sm
                  dark:bg-gray-950/20
                "
              >
                <img
                  src={cert}
                  alt="Nancy Gabriel's professional certifications in SEO, digital advertising, analytics, and content marketing"
                  width="600"
                  height="700"
                  loading="lazy"
                  className="
                    relative z-10
                    h-auto w-full
                    rounded-1.5rem
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* BORDER RING EFFECT */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  rounded-full
                  border-2 border-pink-500/30
                  scale-110
                  transition-transform duration-500
                  group-hover:scale-125
                "
              >
                <div
                  className="
                    absolute inset-0
                    rounded-full
                    border-2 border-pink-500/30
                    scale-110
                    transition-transform duration-500
                    group-hover:scale-150
                  "
                />
              </div>

              {/* SMALL PINK ACCENT */}
              <div
                aria-hidden="true"
                className="
                  absolute -bottom-3 -right-3
                  h-20 w-20
                  rounded-full
                  border border-pink-500/20
                  bg-pink-500/10
                  blur-sm
                "
              />
            </div>
          </div>

          {/* =========================================
              CERTIFICATE CONTENT
          ========================================== */}
          <div
            className="
              order-2 w-full
              lg:w-3/5
            "
            data-aos="fade-left"
          >

            {/* LABEL */}
            <div
              className="
                mb-5 inline-flex
                items-center gap-2
                rounded-full
                border border-pink-500/20
                bg-pink-500/10
                px-4 py-1.5
                backdrop-blur-sm
              "
              data-aos="fade-down"
            >
              <span
                aria-hidden="true"
                className="
                  h-2 w-2
                  animate-pulse
                  rounded-full
                  bg-pink-500
                "
              />

              <span
                className="
                  text-sm font-semibold
                  uppercase tracking-[0.2em]
                  text-pink-600
                  dark:text-pink-400
                "
              >
                Certifications
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="certificates-heading"
              className="
                text-4xl font-bold
                leading-tight tracking-tight
                text-gray-900
                dark:text-white
                sm:text-5xl
              "
              data-aos="fade-up"
            >
              Skills backed by{" "}
              <span
                className="
                  bg-linear-to-r
                  from-pink-500 to-pink-700
                  bg-clip-text
                  text-transparent
                  dark:from-pink-400
                  dark:to-pink-600
                "
              >
                continuous learning.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5 max-w-2xl
                text-base leading-7
                text-gray-600
                dark:text-gray-300
              "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              I continuously develop my expertise across{" "}
              <strong className="text-gray-900 dark:text-white">
                SEO, digital advertising, analytics, content marketing,
                and search tools
              </strong>{" "}
              so I can bring more informed strategies and better digital
              solutions to the brands I work with.
            </p>

            {/* CERTIFICATE LIST */}
            <ul
              aria-label="Nancy Gabriel's professional certifications"
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {certificates.map(
                ({ id, title, issuer, date }, index) => (
                  <li
                    key={id}
                    data-aos="fade-up"
                    data-aos-delay={index * 70}
                    className="
                      group flex items-center
                      justify-between gap-4
                      rounded-xl
                      border border-gray-200
                      bg-white/60
                      px-4 py-4
                      backdrop-blur-sm
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-pink-500/30
                      hover:shadow-lg
                      hover:shadow-pink-500/5
                      dark:border-gray-800
                      dark:bg-gray-950/60
                      dark:hover:border-pink-500/30
                    "
                  >
                    <div className="min-w-0">
                      <h3
                        className="
                          truncate
                          text-sm font-semibold
                          text-gray-900
                          dark:text-white
                        "
                      >
                        {title}
                      </h3>

                      <p
                        className="
                          mt-1 text-xs
                          text-gray-500
                          dark:text-gray-500
                        "
                      >
                        {issuer} • {date}
                      </p>
                    </div>

                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="
                        shrink-0
                        text-gray-400
                        transition-all duration-300
                        group-hover:translate-x-1
                        group-hover:text-pink-500
                      "
                    />
                  </li>
                )
              )}
            </ul>

            {/* SUPPORTING STATEMENT */}
            <p
              className="
                mt-7 max-w-2xl
                text-sm leading-6
                text-gray-500
                dark:text-gray-400
              "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              My learning is ongoing because digital marketing,
              search, technology, and online customer behaviour
              continue to evolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;