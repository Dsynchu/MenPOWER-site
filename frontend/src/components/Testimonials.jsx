import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Mohammed Al Rashid",
    role: "Business Consultant, Dubai",
    feedback:
      "KonnectHRC guided me in hiring top professionals quickly and efficiently. Their process is world-class.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Fatima Al Mansoori",
    role: "HR Director, Abu Dhabi",
    feedback:
      "We trust KonnectHRC for critical recruitment needs. Their professionalism and speed is unmatched in the UAE market.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Omar Bin Khalid",
    role: "Entrepreneur, Sharjah",
    feedback:
      "Thanks to KonnectHRC, we built a strong workforce in record time. Highly recommend them to any growing business.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Aisha Al Qasimi",
    role: "Marketing Head, Dubai",
    feedback:
      "Their HR services are innovative and highly reliable. It feels like working with a true partner.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Khalid Al Maktoum",
    role: "Construction Manager, Dubai",
    feedback:
      "KonnectHRC helped us with mass hiring for a big project. Excellent quality candidates every time.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Noura Al Suwaidi",
    role: "Finance Manager, Abu Dhabi",
    feedback:
      "Professional, fast, and transparent. They truly understand UAE’s recruitment landscape.",
    image: "https://randomuser.me/api/portraits/women/53.jpg",
  },
  {
    name: "Hassan Bin Zayed",
    role: "Operations Head, Sharjah",
    feedback:
      "We rely on KonnectHRC for specialized roles. Their network in the GCC is impressive.",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Layla Al Marri",
    role: "Project Manager, Dubai",
    feedback:
      "The process was smooth, efficient, and stress-free. I would definitely recommend them.",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
  },
  {
    name: "Abdullah Al Nuaimi",
    role: "HR Business Partner, Abu Dhabi",
    feedback:
      "Their recruitment solutions are reliable, and they saved us significant hiring time.",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    name: "Sara Al Habtoor",
    role: "Tech Recruiter, Dubai",
    feedback:
      "The best consultancy for tech hiring in the UAE. Extremely professional and effective.",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    name: "Yusuf Al Ghurair",
    role: "Investor, Dubai",
    feedback:
      "Strongly recommend KonnectHRC. Their guidance and network is unmatched in Dubai.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Maryam Al Fardan",
    role: "Talent Acquisition, Dubai",
    feedback:
      "Always responsive and committed. They make recruitment seamless and stress-free.",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const perPage = 3;
  const totalSlides = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const currentTestimonials = testimonials.slice(
    index * perPage,
    index * perPage + perPage
  );

  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a, #1e1b4b, #0f172a, #111827)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Animated Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg"
        >
          Voices From <span className="text-blue-400">Dubai & UAE</span>
        </motion.h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
          Professionals and leaders across{" "}
          <span className="font-semibold text-blue-400">
            Dubai, Abu Dhabi & GCC
          </span>{" "}
          trust{" "}
          <span className="font-semibold text-blue-400">KonnectHRC</span>.
        </p>

        {/* Carousel */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/10 backdrop-blur-xl relative p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-[0_0_25px_#3b82f6] hover:border-blue-500 transition"
            >
              <div className="absolute -top-6 left-6 text-blue-500/40 text-7xl font-serif select-none">
                “
              </div>
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500/40 shadow-md"
              />
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                {t.feedback}
              </p>
              <h4 className="text-lg font-bold text-white">{t.name}</h4>
              <p className="text-sm text-blue-400 font-medium">{t.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-blue-500 scale-125" : "bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-16 right-10 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl opacity-40"></div>
    </section>
  );
}
