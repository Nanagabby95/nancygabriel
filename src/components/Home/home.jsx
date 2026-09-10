import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import hero from "../../assets/hero.avif";
import Resume from "../../assets/Resume.pdf";
import { Mail, Download } from "lucide-react";

const Hero = () => {
  const socialIcons = [
    {
      icon: FaLinkedin,
      alt: "Nancy Gabriel on LinkedIn",
      link: "https://www.linkedin.com/",
    },
    {
      icon: FaTwitter,
      alt: "Nancy Gabriel on Twitter",
      link: "https://twitter.com/",
    },
    {
      icon: FaInstagram,
      alt: "Nancy Gabriel on Instagram",
      link: "https://www.instagram.com/",
    },
    {
      icon: FaYoutube,
      alt: "Nancy Gabriel on YouTube",
      link: "https://www.youtube.com/",
    },
    {
      icon: FaFacebook,
      alt: "Nancy Gabriel on Facebook",
      link: "https://www.facebook.com/",
    },
  ];

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:mt-14 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-24 lg:gap-16">

          {/* ================================
              IMAGE COLUMN
          ================================= */}
          <div
            className="lg:w-2/5 w-full flex items-center justify-center relative"
            data-aos="fade-right"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group mx-auto">

              {/* Decorative glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-r from-pink-600 to-pink-800 filter blur-2xl opacity-30 group-hover:opacity-50 duration-500"
              />

              {/* Profile Image */}
              <img
                src={hero}
                alt="Nancy Gabriel, Digital Growth and Visibility Specialist"
                width="600"
                height="600"
                fetchPriority="high"
                className="w-full h-full object-cover rounded-full relative z-10 transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Decorative rings */}
              <div
                aria-hidden="true"
                className="absolute inset-0 border-2 border-pink-500/30 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 border-2 border-pink-500/30 rounded-full scale-110 group-hover:scale-150 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* ================================
              TEXT COLUMN
          ================================= */}
          <header
            className="lg:w-3/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left"
            data-aos="fade-left"
          >

            {/* AVAILABILITY */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-pink-400 border-pink-500/20 mb-5"
              aria-label="Currently available for work"
            >
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
              />

              <span className="text-sm font-medium dark:text-black text-white">
                Available for work
              </span>
            </div>

            {/* MAIN HEADING */}
           <h1
  id="hero-heading"
  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 dark:text-white text-gray-900"
>
  Hi, I'm{" "}
  <span className="text-pink-600 dark:text-pink-400">
    Nancy Gabriel
  </span>
  , a{" "}
  <span className="text-pink-600 dark:text-white">
    Digital Growth & Visibility Specialist
  </span>
</h1>

            {/* PROFESSIONAL TITLE TAG */}
            <p
              className="text-lg sm:text-xl font-mono mb-5 dark:text-pink-400 text-pink-600"
              aria-label="Digital Growth and Visibility Specialist"
            >
              <span className="text-gray-400" aria-hidden="true">
                &lt;
              </span>{" "}
               I help brands grow online{" "}
              <span className="text-gray-400" aria-hidden="true">
                &gt;
              </span>
            </p>

            {/* INTRODUCTION */}
            <p className="mb-6 leading-relaxed max-w-md lg:max-w-lg dark:text-gray-300 text-gray-700">
            Through{" "}
              <strong>
                SEO, website development, social media management,
                digital advertising, and creative content.
              </strong>{" "}
              I combine strategy and creativity to help businesses get
              noticed, connect with the right audience, and build a stronger
              digital presence.
            </p>

            {/* STATS */}
            <div
              className="flex gap-8 mb-6"
              aria-label="Professional experience and project statistics"
            >
              {[
                {
                  number: "4+",
                  label: "Years Experience",
                },
                {
                  number: "10+",
                  label: "Projects",
                },
                {
                  number: "5+",
                  label: "Happy Clients",
                },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold dark:text-white text-gray-700">
                    {stat.number}
                  </div>

                  <div className="text-xs dark:text-gray-400 text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

              {/* DOWNLOAD RESUME */}
              <a
                href={Resume}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-2 rounded-full text-white font-semibold bg-linear-to-r from-pink-500 to-pink-800 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transform hover:scale-105"
                aria-label="Download Nancy Gabriel's resume"
              >
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>

              {/* HIRE ME */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-2 rounded-full border-2 dark:border-pink-500 border-pink-600 dark:text-white text-gray-800 hover:text-white font-semibold hover:bg-pink-600 dark:hover:bg-pink-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transform hover:scale-105"
                aria-label="Contact Nancy Gabriel about a project"
              >
                <Mail size={18} aria-hidden="true" />
                Hire Me
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <nav
              aria-label="Nancy Gabriel social media profiles"
              className="flex items-center gap-4 mt-7"
            >
              {socialIcons.map(({ icon: Icon, alt, link }) => (
                <a
                  key={alt}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                  title={alt}
                  className="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
                >
                  <Icon size={19} />
                </a>
              ))}
            </nav>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Hero;