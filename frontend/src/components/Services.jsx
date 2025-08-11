import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    "Job design & candidate profiling",
    "Interviewing & short‑listing",
    "Pre‑employment checks & references",
    "Allocate right candidate to right job",
    "Improve hiring quality & reduce cost",
  ];

  const sectors = [
    "Industrial & Engineering",
    "IT & Telecom",
    "Media & Pharma",
    "Education & FMCG",
    "Security & Real Estate",
    "Retail & Supply Chain",
  ];

  return (
    <section
      id="services"
      className="relative py-20 animate-gradient-x"
      style={{
        background:
          "linear-gradient(135deg, #0f172a, #1e293b, #334155, #1e293b)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* subtle overlay for smooth contrast */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 tracking-tight"
        >
          Our <span className="text-blue-400">Services</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-700"
          >
            <p className="text-gray-300 leading-relaxed mb-6 text-lg md:text-xl font-medium">
              We deliver professional{" "}
              <span className="text-blue-400 font-semibold">
                HR consultancy
              </span>{" "}
              and recruitment services across industries. Our approach ensures{" "}
              <span className="text-indigo-400 font-semibold">
                efficiency, quality, and cost‑effectiveness
              </span>{" "}
              in talent acquisition.
            </p>

            <ul className="space-y-4 mb-8">
              {services.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-3 text-gray-200 font-medium text-base md:text-lg"
                >
                  <span className="mt-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Industries We Serve
            </h3>
            <ul className="flex flex-wrap gap-3">
              {sectors.map((sec, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-full text-sm md:text-base font-medium shadow-md cursor-default transition"
                >
                  {sec}
                </motion.span>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="HR Services"
            className="rounded-2xl shadow-2xl border-4 border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
}
