import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import contact from "../../assets/contact.avif";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "8dfe699c-2430-4aeb-b3a0-12377619ff08");

    // Helps identify where the message came from
    formData.append(
      "subject",
      "New Project Enquiry from Nancy Gabriel Portfolio",
    );

    formData.append("from_name", "Nancy Gabriel Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage(
          "Thanks for reaching out. Your message has been sent successfully.",
        );

        form.reset();
      } else {
        setStatus("error");
        setMessage(
          "Something went wrong while sending your message. Please try again.",
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");
      setMessage(
        "Unable to send your message right now. Please try again shortly.",
      );
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-20"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        {/* ================= HEADER ================= */}
        <div className="mb-12 text-center" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
            Let's Work Together
          </p>

          <h2
            id="contact-heading"
            className="
              mb-4
              text-3xl
              font-bold
              text-gray-900
              dark:text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Grow Your Brand With the Right{" "}
            <span className="text-pink-500 dark:text-pink-400">
              Digital Strategy
            </span>
          </h2>

          <p
            className="
              mx-auto
              max-w-2xl
              text-sm
              leading-6
              text-gray-600
              dark:text-gray-400
              sm:text-base
            "
          >
            Whether you need better search visibility, a stronger website,
            social media support, digital advertising, or creative content,
            let's talk about what your brand needs.
          </p>
        </div>

        {/* ================= CONTACT CONTENT ================= */}
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* ================= FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="
              order-2
              mx-auto
              flex
              w-full
              max-w-xl
              flex-col
              gap-5
              rounded-3xl
              border
              border-gray-100
              bg-white/60
              p-8
              backdrop-blur-sm
              dark:border-zinc-800
              dark:bg-pink-900
              sm:p-10
              lg:order-1
            "
            data-aos="fade-right"
          >
            {/* Hidden Web3Forms configuration */}
            <input
              type="hidden"
              name="botcheck"
              tabIndex="-1"
              autoComplete="off"
            />

            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-800
                  dark:text-gray-200
                "
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-5
                  py-4
                  text-base
                  text-gray-800
                  outline-none
                  transition-all
                  placeholder:text-gray-400
                  focus:border-pink-500
                  focus:ring-2
                  focus:ring-pink-500/10
                  dark:border-zinc-800
                  dark:bg-zinc-900/60
                  dark:text-white
                  dark:focus:border-pink-400
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-800
                  dark:text-gray-200
                "
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-5
                  py-4
                  text-base
                  text-gray-800
                  outline-none
                  transition-all
                  placeholder:text-gray-400
                  focus:border-pink-500
                  focus:ring-2
                  focus:ring-pink-500/10
                  dark:border-zinc-800
                  dark:bg-zinc-900/60
                  dark:text-white
                  dark:focus:border-pink-400
                "
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-800
                  dark:text-gray-200
                "
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="How can I help your brand?"
                required
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-5
                  py-4
                  text-base
                  leading-6
                  text-gray-800
                  outline-none
                  transition-all
                  placeholder:text-gray-400
                  focus:border-pink-500
                  focus:ring-2
                  focus:ring-pink-500/10
                  dark:border-zinc-800
                  dark:bg-zinc-900/60
                  dark:text-white
                  dark:focus:border-pink-400
                "
              />
            </div>

            {/* STATUS MESSAGE */}
            {status === "success" && (
              <div
                role="status"
                aria-live="polite"
                className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-green-500/20
                  bg-green-500/10
                  p-4
                  text-sm
                  text-green-700
                  dark:text-green-400
                "
              >
                <CheckCircle size={18} className="mt-0.5 shrink-0" />

                <p>{message}</p>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                aria-live="assertive"
                className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-red-500/20
                  bg-red-500/10
                  p-4
                  text-sm
                  text-red-700
                  dark:text-red-400
                "
              >
                <AlertCircle size={18} className="mt-0.5 shrink-0" />

                <p>{message}</p>
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-pink-600
                px-8
                py-4
                text-base
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-pink-700
                hover:shadow-lg
                hover:shadow-pink-500/20
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-60
                sm:w-fit
              "
            >
              <Send size={18} />

              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* ================= IMAGE ================= */}
          <div
            className="
              order-1
              relative
              flex
              w-full
              items-center
              justify-center
              lg:order-2
            "
            data-aos="fade-left"
          >
            {/* GLOW */}
            <div
              aria-hidden="true"
              className="
                absolute
                h-72
                w-72
                rounded-full
                bg-pink-400/40
                blur-3xl
                dark:bg-pink-500/30
                sm:h-80
                sm:w-80
              "
            />

            {/* IMAGE */}
            <img
              src={contact}
              alt="Nancy Gabriel available for digital growth, SEO and website projects"
              width="600"
              height="750"
              loading="lazy"
              decoding="async"
              className="
                relative
                z-10
                h-420px
                w-full
                max-w-md
                rounded-3xl
                object-contain
                shadow-2xl
                sm:h-500px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
