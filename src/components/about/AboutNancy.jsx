import React from "react";
import { ArrowRight } from "lucide-react";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import about from "../../assets/about.avif";

const About = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      label: "Nancy Gabriel on LinkedIn",
      color: "hover:text-pink-500 hover:border-pink-500/40",
      link: "https://www.linkedin.com/",
    },
    {
      icon: FaTiktok,
      label: "Nancy Gabriel on TikTok",
      color: "hover:text-pink-500 hover:border-pink-500/40",
      link: "https://www.tiktok.com/",
    },
    {
      icon: FaFacebook,
      label: "Nancy Gabriel on Facebook",
      color: "hover:text-pink-500 hover:border-pink-500/40",
      link: "https://www.facebook.com/",
    },
    {
      icon: FaYoutube,
      label: "Nancy Gabriel on YouTube",
      color: "hover:text-pink-500 hover:border-pink-500/40",
      link: "https://www.youtube.com/",
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

        {/* ================================
            TEXT CONTENT
        ================================= */}
        <div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          data-aos="fade-right"
        >

          {/* ABOUT LABEL */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            bg-pink-500/10 border border-pink-500/20 mb-5"
            data-aos="fade-down"
          >
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"
            />

            <span className="font-semibold tracking-wider uppercase text-pink-600 text-sm">
              About Me
            </span>
          </div>

          {/* HEADING */}
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6
            dark:text-white text-gray-900 leading-tight"
            data-aos="fade-up"
          >
            Helping Brands Get Seen,{" "}
            <span className="text-pink-600 dark:text-pink-400">
              Heard & Found.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <div
            className="text-base lg:text-lg mb-8 leading-relaxed
            dark:text-gray-300 text-gray-700 max-w-xl space-y-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>
              I'm{" "}
              <strong className="dark:text-white text-gray-900">
                Nancy Gabriel
              </strong>
              , a Digital Growth & Visibility Specialist who brings together
              strategy, creativity, and digital execution to help brands build
              a stronger online presence.
            </p>

            <p>
              I believe good digital work should have a purpose, whether
              that's helping people discover a business, understand its value,
              take action, or feel confident engaging with it.
            </p>

            <p>
              That's why I combine{" "}
              <strong className="dark:text-white text-gray-900">
                SEO, website development, social media management, digital
                advertising, and creative content
              </strong>{" "}
              to create digital experiences that are not only visually
              appealing, but useful, discoverable, and built with growth in
              mind.
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <nav
            aria-label="Nancy Gabriel social media profiles"
            className="flex gap-4 justify-center lg:justify-start mb-8"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className={`w-12 h-12 rounded-full flex items-center justify-center
                    text-2xl border border-gray-200
                    dark:border-gray-800 bg-white/50
                    dark:bg-gray-900/50 backdrop-blur-sm
                    transition-all duration-300 hover:scale-110 hover:shadow-lg
                    ${social.color}`}
                >
                  <IconComponent aria-hidden="true" />
                </a>
              );
            })}
          </nav>

          {/* LET'S TALK BUTTON */}
          <a
            href="#contact"
            data-aos="fade-up"
            data-aos-delay="300"
            aria-label="Contact Nancy Gabriel"
            className="group inline-flex items-center justify-center gap-2
            px-8 py-3 rounded-full text-white font-semibold
            bg-linear-to-r from-pink-500 to-pink-800
            hover:shadow-[0_0_40px_rgba(220,38,38,0.7)]
            transition-all duration-300 transform hover:scale-105"
          >
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="group-hover:translate-x-1 transition-transform"
            />

            Let's Talk
          </a>
        </div>

        {/* ================================
            IMAGE
        ================================= */}
        <div
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
          data-aos="fade-left"
        >
          <div className="relative w-full max-w-sm sm:max-w-md">

            {/* GLOW */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-r from-pink-600 to-pink-800
              rounded-[40%_60%_60%_40%/40%_60%_70%_60%]
              blur-xl opacity-40 animate-pulse"
            />

            {/* IMAGE */}
            <img
              src={about}
              alt="Nancy Gabriel, Digital Growth and Visibility Specialist"
              width="600"
              height="700"
              loading="lazy"
              className="relative z-10 w-full
              rounded-[40%_60%_60%_40%/40%_60%_70%_60%]
              shadow-2xl h-auto object-cover
              border-2 border-pink-500/30 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;