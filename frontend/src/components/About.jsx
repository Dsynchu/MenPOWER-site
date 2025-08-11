import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { number: "100+", label: "Clients Served" },
    { number: "15+", label: "Years of Excellence" },
    { number: "5000+", label: "Successful Hires" },
    { number: "100+", label: "Active Partnerships" },
  ];

  return (
    <>
      {/* About Us Section */}
      <section
        id="about"
        className="relative py-20 bg-gradient-to-r from-gray-900 via-gray-950 to-black text-gray-300 overflow-hidden"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-20">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-8 text-gray-100"
          >
            About Us
          </motion.h2>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="leading-relaxed mb-10 text-center max-w-3xl mx-auto text-lg"
          >
            At{" "}
            <span className="font-bold text-yellow-400 hover:text-yellow-300 transition">
              KonnectHRC
            </span>
            , we connect talent with opportunities. Our mission is to transform hiring into a
            growth journey for businesses and careers alike.
          </motion.p>

          {/* Who We Are + Vision */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <motion.img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team work"
              className="rounded-2xl shadow-xl border border-gray-700"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                Who We Are
              </h3>
              <p className="mb-6 text-gray-300">
                We are a passionate HR consultancy dedicated to bridging the gap between businesses and skilled
                professionals. With innovation and dedication, we help organizations build world-class teams.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                Our Vision
              </h3>
              <p className="text-gray-300">
                To be the most trusted HR partner delivering excellence, fostering sustainable growth, and
                transforming careers globally.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="mt-24">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-100"
            >
              Our Results in Numbers
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center bg-white/10 p-6 rounded-xl shadow-md border border-gray-700 hover:bg-white/20 transition"
                >
                  <h3 className="text-4xl font-extrabold text-yellow-400">
                    {stat.number}
                  </h3>
                  <p className="mt-2 text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 via-black to-gray-950 text-gray-300 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-cyan-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
          {/* CEO Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative">
              <img
                src="/image/ceo.png" // update actual path
                alt="CEO"
                className="w-72 h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full blur-xl opacity-70"></div>
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
            >
              Mr. [Your CEO ko Naam]
            </motion.h3>
            <p className="text-gray-400 mt-1">Founder & CEO, KonnectHRC</p>
          </motion.div>

          {/* CEO Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/10"
          >
            <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              A Message from Our CEO
            </h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              At{" "}
              <span className="font-bold text-yellow-400">KonnectHRC</span>, people are the
              foundation of every success story. Our mission has always been to empower
              businesses with the right talent while guiding individuals toward meaningful
              careers.
              <br />
              <br />
              Every milestone we achieve is built on{" "}
              <span className="font-semibold text-cyan-400">integrity</span>,{" "}
              <span className="font-semibold text-purple-400">transparency</span>, and{" "}
              <span className="font-semibold text-pink-400">excellence</span>. As we grow,
              our focus remains on creating impactful connections that transform both
              businesses and lives.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
