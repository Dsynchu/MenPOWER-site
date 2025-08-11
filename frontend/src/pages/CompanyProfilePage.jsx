import { motion } from "framer-motion";
import Footer from "../components/Footer"; 

export default function CompanyProfilePage() {
  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "100+", label: "Global Clients" },
    { number: "5000+", label: "Successful Placements" },
    { number: "10+", label: "Industries Served" },
    { number: "25+", label: "Countries Covered" },
    { number: "24/7", label: "Candidate Support" },
  ];

  const values = [
    {
      title: "Integrity",
      desc: "We uphold the highest ethical standards in all our recruitment processes, ensuring honesty and trust at every step.",
    },
    {
      title: "Innovation",
      desc: "We embrace modern technology and innovative hiring strategies to deliver efficient and smart HR solutions.",
    },
    {
      title: "Excellence",
      desc: "We strive for perfection and deliver top‑quality services, ensuring the satisfaction of both clients and candidates.",
    },
    {
      title: "Transparency",
      desc: "Every process and communication is crystal clear, building confidence and long‑term partnerships.",
    },
  ];

  const approach = [
    "Tailored recruitment solutions to fit business needs.",
    "Transparency in every process and documentation.",
    "Commitment to long-term partnerships and growth.",
    "End-to-end support from hiring to onboarding.",
    "Focus on both client satisfaction and candidate growth.",
    "Dedicated global network for niche hiring requirements.",
  ];

  const heroImage =
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1600"; 
  //  Dubai skyline image (reliable Pexels link)

  return (
    <>

    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center text-center">
        <img
          src={heroImage}
          alt="Dubai Skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-black/70 to-blue-800/80"></div>
        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          >
            Company Profile
          </motion.h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Building Bridges Between Talent and Opportunity Since 2008
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-20"
        >
          <span className="font-bold text-blue-700">Konnect Talent HR Consultancy</span> 
          is headquartered in Dubai, UAE, and has emerged as a trusted leader in recruitment 
          and HR solutions across industries. We empower businesses by connecting them with 
          world-class talent while enabling candidates to unlock their true potential. 
          Our global network ensures excellence, innovation, and cultural alignment in every placement.
        </motion.p>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.img
            src="https://images.pexels.com/photos/5668773/pexels-photo-5668773.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Office"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-blue-800">
              Who We Are
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              With decades of combined expertise, we are more than just recruiters. 
              We are career architects, business growth partners, and trusted advisors 
              who bridge the gap between companies and talent worldwide.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our operations span multiple industries — construction, IT, oil & gas, healthcare, 
              education, aviation, hospitality, retail, and more. With Dubai as our hub, 
              we serve global markets with integrity and passion.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-10 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="leading-relaxed">
              To become the most trusted global HR partner, delivering transformative 
              solutions that empower businesses to thrive and enable individuals 
              to achieve fulfilling careers across borders.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-yellow-400 to-yellow-300 p-10 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-800 leading-relaxed">
              To redefine the hiring experience by offering transparent, efficient, 
              and impactful HR solutions. We aim to be the catalyst that transforms 
              businesses and careers alike.
            </p>
          </motion.div>
        </div>

        {/* Key Highlights */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-800 mb-12"
        >
          Key Highlights
        </motion.h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-4xl font-extrabold text-blue-600">{stat.number}</h3>
              <p className="text-gray-700 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <h3 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Our Core Values
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {values.map((val, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-b from-white to-blue-50 p-8 rounded-2xl shadow text-center hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h4 className="text-xl font-semibold text-blue-700 mb-3">{val.title}</h4>
              <p className="text-gray-700">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Office Info */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-white p-10 rounded-2xl shadow-xl mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-blue-800">
            Our Office
          </h3>
          <p className="text-gray-700 mb-3">
            <strong>📍 Location:</strong> Abu Saif Business Center, Office No M35, Near Al Qiyadah Metro, Dubai
          </p>
          <p className="text-gray-700 mb-3">
            <strong>📞 Contact:</strong> +971 56 277 8484
          </p>
          <p className="text-gray-700">
            <strong>📧 Email:</strong>{" "}
            <a
              href="mailto:info@konnectthrc.com"
              className="text-blue-600 hover:underline"
            >
              info@konnectthrc.com
            </a>
          </p>
        </motion.div>

        {/* Our Approach */}
        <h3 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Our Approach
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approach.map((point, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-r from-white to-blue-50 p-6 rounded-xl shadow text-gray-700 font-medium hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {point}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
