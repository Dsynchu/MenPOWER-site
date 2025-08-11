import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Connecting Talent with Opportunities",
        "Building Careers, Empowering Businesses",
        "Your Trusted HR Consultancy",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://innovationuae.com/wp-content/uploads/2020/12/about-banner.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6 z-20 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          Welcome to{" "}
          <span className="text-blue-400 animate-pulse">Konnect talent HR consultancy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl mb-10 font-light"
        >
          <span ref={el}></span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-6"
        >
          <a
            href="#about"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Explore More
          </a>
          <a
            href="#contact"
            className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
