import { motion } from "framer-motion";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function ServicesPage() {
  const extraServices = [
    {
      title: "Executive Search",
      desc: "Finding the right leadership talent for critical roles in organizations, ensuring long-term success.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    },
    {
      title: "Global Recruitment",
      desc: "Connecting talent across borders, ensuring international companies get access to skilled professionals.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    },
    {
      title: "HR Outsourcing",
      desc: "Providing end-to-end HR solutions so businesses can focus on growth while we manage their workforce.",
      img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a0",
    },
  ];

  const industries = [
    "Healthcare", "Construction", "Hospitality", "Retail",
    "Education", "Banking", "Oil & Gas", "Technology"
  ];

  const whyUs = [
    {
      title: "25+ Years Experience",
      desc: "Trusted expertise in HR & recruitment across industries."
    },
    {
      title: "Faster Deployment",
      desc: "Swift onboarding with large pre-approved visa quota."
    },
    {
      title: "In-House ERP",
      desc: "Custom-built HR software ensuring efficiency & transparency."
    }
  ];

  return (
    <div className="font-sans antialiased text-gray-100 bg-gray-950">
      
      {/* 🔥 Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-500 drop-shadow-lg">
            Let Us Solve All Your Staffing Needs
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            At <span className="text-yellow-400 font-bold">KonnectHRC</span>, we craft innovative workforce solutions — 
            from staffing to HR outsourcing, so your business always stays ahead.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-black hover:scale-105 transition transform shadow-lg"
          >
            Speak to Our Team
          </a>
        </motion.div>
      </section>

      {/* 🚀 Our Approach (dark overlay) */}
      <section className="py-20 relative bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1600')" }}>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6}}
            viewport={{once:true}}
            className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400"
          >
            Our Approach
          </motion.h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            KonnectHRC’s approach combines deep market expertise, advanced recruitment technology, and a people-first philosophy. 
            We ensure that businesses get the right talent at the right time, with complete transparency and reliability.
          </p>
        </div>
      </section>
          {/* 🏆 Our Services (Dark Mode Fixed) */}
<section className="relative py-20 bg-gradient-to-b from-gray-900 via-black to-gray-950">
  {/* subtle overlay pattern */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

  <div className="relative max-w-7xl mx-auto px-6 text-center">
    <motion.h2 
      initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6}}
      viewport={{once:true}}
      className="text-4xl md:text-5xl font-extrabold mb-14 
                 text-transparent bg-clip-text 
                 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 
                 drop-shadow-lg"
    >
      Our Services
    </motion.h2>

    {/* Instead of letting Services bring light bg, force dark styling */}
    <div className="grid md:grid-cols-3 gap-10 text-left">
      {[
        {
          title: "HR Consultancy",
          desc: "Comprehensive HR solutions including policy design, compliance, and organizational development."
        },
        {
          title: "Recruitment Services",
          desc: "Helping businesses hire the best talent with speed, precision, and cultural fit."
        },
        {
          title: "Payroll & PRO Services",
          desc: "Efficient payroll management and government liaison support for hassle-free operations."
        }
      ].map((srv, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-2xl 
                     shadow-lg border border-gray-700 
                     hover:border-cyan-400 hover:shadow-cyan-400/30 
                     transition text-white"
        >
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">{srv.title}</h3>
          <p className="text-gray-300 leading-relaxed">{srv.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* 💡 More of Our Expertise (dark mode) */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-20 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
          >
            More of Our Expertise
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {extraServices.map((srv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
              >
                <img
                  src={srv.img}
                  alt={srv.title}
                  className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition duration-500"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-yellow-400 mb-3 group-hover:text-orange-400 transition">
                    {srv.title}
                  </h3>
                  <p className="text-gray-300">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ Why Choose Us (dark mode) */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <motion.h2 
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6}}
            viewport={{once:true}}
            className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400"
          >
            Why Choose KonnectHRC?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, i)=>(
              <motion.div 
                key={i}
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.5, delay:i*0.2}}
                viewport={{once:true}}
                className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 Testimonials (dark mode) */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <motion.h2 
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6}}
            viewport={{once:true}}
            className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "KonnectHRC helped us scale quickly.",
              "Professional and reliable team.",
              "Best recruitment partner we ever had."
            ].map((quote,i)=>(
              <motion.div 
                key={i}
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.5, delay:i*0.2}}
                viewport={{once:true}}
                className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <p className="text-gray-300 italic">“{quote}”</p>
                <h4 className="mt-4 font-semibold text-yellow-400">— Client {i+1}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (dark gradient already) */}
      <section className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-black/70 to-blue-900/90"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto text-white px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to Transform Your Hiring?
          </motion.h2>
          <p className="mb-8 text-lg text-gray-300">
            Let <span className="font-semibold text-yellow-400">KonnectHRC</span> handle your 
            recruitment challenges while you focus on scaling your business.
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
