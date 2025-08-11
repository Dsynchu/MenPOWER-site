import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
     <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
  {/* Decorative Animated Circles */}
  <div className="absolute top-10 left-10 w-56 h-56 bg-blue-800/40 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-10 right-20 w-72 h-72 bg-yellow-800/30 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-purple-900/20 rounded-full blur-2xl animate-bounce"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-6xl font-extrabold text-center text-gray-100 mb-10 tracking-tight"
    >
      About <span className="text-blue-400">KonnectHRC</span>
    </motion.h2>

    {/* Intro */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-20 text-lg"
    >
      Established in <span className="font-semibold text-blue-400">Dubai</span>, 
      Konnect Talent HR Consultancy is a premier HR solutions provider, 
      shaping careers and building businesses for over a decade. 
      With our deep expertise in <span className="font-semibold">talent acquisition, workforce management, and career guidance</span>, 
      we connect skilled professionals with organizations that inspire growth. 
      <br />
      <br />
      Our belief is simple: <span className="italic">people are the foundation of every success story.</span> 
      Whether you are an individual seeking the right opportunity or a company looking to hire 
      world-class talent, we provide personalized, transparent, and impactful solutions that go beyond recruitment.
    </motion.p>

    {/* Who We Are Section */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
      <motion.img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Team Work"
        className="rounded-2xl shadow-2xl border-4 border-gray-700"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-4 text-gray-100 border-l-4 border-blue-400 pl-3">
          Who We Are
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4 text-lg">
          We are a <span className="text-blue-400 font-semibold">Dubai-based HR consultancy</span> 
          committed to excellence, integrity, and innovation. Our firm specializes in providing 
          <span className="font-semibold"> recruitment, staffing, HR advisory, and workforce solutions</span> 
          to clients across industries such as engineering, IT, hospitality, healthcare, construction, and finance.
        </p>
        <p className="text-gray-300 leading-relaxed text-lg">
          Over the years, we have become the <span className="italic">trusted partner</span> for 
          multinational corporations, SMEs, and startups, ensuring they have the right talent 
          to scale their vision.
        </p>
      </motion.div>
    </div>

    {/* Vision & Mission Section */}
    <div className="grid md:grid-cols-2 gap-12 mb-24">
      <motion.div
        className="bg-gray-800/80 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-gray-700"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Vision</h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          To be the most <span className="font-semibold">trusted global HR partner</span>, 
          delivering tailored and innovative workforce solutions that empower businesses and transform lives. 
          We envision a world where <span className="text-blue-400">talent meets opportunity seamlessly</span>, 
          fostering growth and prosperity across borders.
        </p>
      </motion.div>

      <motion.div
        className="bg-gray-800/80 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-gray-700"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          To deliver <span className="font-semibold">transparent, efficient, and reliable HR solutions</span> 
          that drive business success and career growth. We aim to redefine recruitment by making 
          it <span className="italic">human-centric</span>, technology-driven, and globally accessible.
        </p>
      </motion.div>
    </div>

    {/* Values Section */}
    <div className="mb-24">
      <h3 className="text-3xl font-extrabold text-center mb-12 text-gray-100">
        Our Core Values
      </h3>
      <div className="grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Integrity",
            desc: "We uphold honesty and ethical practices in every interaction, building trust with our clients and candidates.",
          },
          {
            title: "Transparency",
            desc: "We ensure clear communication, fair processes, and accountability in all our services.",
          },
          {
            title: "Commitment",
            desc: "We are dedicated to delivering excellence and creating long-term partnerships that fuel growth.",
          },
        ].map((val, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl shadow-md text-center border border-gray-700 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">{val.title}</h4>
            <p className="text-gray-300 leading-relaxed text-lg">{val.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* CEO Message */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.img
        src="/images/ceo.jpg"
        alt="CEO"
        className="w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-gray-700 mx-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-3xl font-bold mb-4 text-gray-100 border-l-4 border-blue-400 pl-3">
          CEO’s Message
        </h3>
        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
          At <span className="font-bold text-blue-400">KonnectHRC</span>, 
          our journey has always been about people. We believe that the true strength 
          of any organization lies in its workforce. Every successful business is built 
          on the foundation of the right people, culture, and values.
        </p>
        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          As we continue to expand globally, our commitment to excellence, innovation, 
          and human connection remains at the heart of everything we do. We are not just 
          connecting jobs with candidates; we are <span className="italic">building futures</span>.
        </p>
        <p className="text-gray-300 leading-relaxed text-lg font-medium">
          Together, let’s create opportunities that inspire growth, 
          empower individuals, and transform businesses worldwide.
        </p>
      </motion.div>
    </div>
  </div>
</section>


     
      <Footer />
    </>
  );
}
