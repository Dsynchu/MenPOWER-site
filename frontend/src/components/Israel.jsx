import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "./Footer";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  HelpCircle,
  Building2,
  HeartHandshake,
} from "lucide-react";
import ApplyModal from "../components/ApplyModal"; // 

export default function Israel() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  const [selectedJob, setSelectedJob] = useState(null); // 

  const heroImage =
    "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600";

  const vacancies = [
    {
      title: "Caregivers",
      img: "https://images.pexels.com/photos/6129685/pexels-photo-6129685.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "High demand for caregivers with long-term contracts. Salary ~46 Shekels/hr, medical coverage & housing.",
    },
    {
      title: "Construction Workers",
      img: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "Skilled masons, carpenters, welders, heavy machine operators required for mega projects.",
    },
    {
      title: "Agriculture Helpers",
      img: "https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "Seasonal & permanent roles in greenhouses, irrigation, farming. Food & housing included.",
    },
  ];

  const steps = [
    { title: "Apply for Employment", desc: "Fill candidate form online & choose a vacancy." },
    { title: "Application Review", desc: "Our specialists check your documents & eligibility." },
    { title: "Employment Contract", desc: "Receive signed contract & official invitation from Cohen Group." },
    { title: "Visa Application", desc: "Prepare B1 Visa docs, PCC, medical & submit at Embassy." },
    { title: "Visa Approval", desc: "Get passport back with B1 Work Visa stamped." },
    { title: "Arrival in Israel", desc: "Border control clearance & registration at airport." },
    { title: "Free Housing & Orientation", desc: "Transfer, accommodation & workplace training." },
    { title: "Start Employment", desc: "Begin 3-month paid internship, then extend contract up to 5 years." },
  ];

  const benefits = [
    "Legal employment under B/1 Work Visa",
    "Salary: 46 Shekels/hour (~$12.5 USD/hour)",
    "Paid bi-monthly into Israeli bank account",
    "Employer covers medical insurance & social security",
    "Free housing, meals, work clothes & transport",
    "Annual leave, severance & pension included",
    "Visa renewable up to 63 months",
    "100% candidate support at every stage",
  ];

  const requirements = [
    "Men & women aged 21–55",
    "Knowledge of English or Russian",
    "No relatives in Israel up to 3rd generation",
    "No Jewish roots",
    "No criminal record",
    "No infectious diseases (AIDS, Hepatitis B/C, TB)",
    "Citizenship: India, Philippines, Bangladesh, Sri Lanka, Vietnam, etc.",
    "Advantage: technical education or Gulf/Europe work experience",
  ];

  const faqs = [
    { q: "What visa will I get?", a: "B/1 Work Visa, valid for 1 year, renewable up to 5 years." },
    { q: "Is accommodation free?", a: "Yes, family-style hostels & apartments are provided." },
    { q: "Do I pay agency fees?", a: "No, employment is 100% free. Only govt visa/medical fees apply." },
    { q: "How much salary?", a: "Avg 11,000–12,000 Shekels/month depending on hours worked." },
    { q: "Who supports me in Israel?", a: "Cohen Group coordinators help at airport, housing, workplace." },
    { q: "Can I change employer?", a: "Not without PIBA approval. You must work with listed employer." },
  ];

  return (
    <>
    <section className="relative">
      {/* ✅ Hero Banner */}
      <div className="relative h-[70vh] flex items-center justify-center text-center">
        <img src={heroImage} alt="Israel Skyline" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-black/70 to-blue-800/80"></div>
        <div className="relative z-10 px-6">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Employment in Israel 🇮🇱
          </motion.h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Legal Jobs • High Salary • Free Housing • Full Protection
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setSelectedJob("General Israel Application")}
              className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
            >
              Apply Now
            </button>
            <a href="/company-profile_konnect-talent.pdf" download className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-600 transition">
              Download Details
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 space-y-28">
        {/* Vacancies */}
        <section>
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Current Vacancies</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {vacancies.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden"
              >
                <img src={job.img} alt={job.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-700 mb-4">{job.desc}</p>
                  <button
                    onClick={() => setSelectedJob(job.title)}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* What You Get */}
        <section className="bg-gradient-to-r from-blue-50 to-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 flex items-center gap-2">
            <HeartHandshake className="w-8 h-8 text-blue-600" /> What You Get
            with Ramesh Group
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>📑 12-month labor contract (extendable to 5 years)</li>
            <li>📩 Official invitation & legal employment</li>
            <li>🩺 Medical insurance, 🧓 Pension, 🏖️ Paid vacation</li>
            <li>🏠 Free housing, 🍽️ meals, 🚐 transport, 🦺 work gear</li>
            <li>💰 Salary ~46 Shekels/hour (avg 11,500 Shekels/month)</li>
            <li>🏦 Salary credited twice a month to Israeli bank</li>
            <li>👥 Full support from coordinators at all stages</li>
          </ul>
        </section>

        {/* Why Choose */}
        <section>
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
            Why Thousands Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "100% Legal Employment in Israel",
              "Fast process (2–3 months to arrival)",
              "Full Visa & Document Assistance",
              "Support at every stage of work",
              "Jobs in construction, farms, warehouses, manufacturing",
              "Licensed agency until 2027",
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-gradient-to-b from-white to-blue-50 rounded-xl shadow hover:shadow-lg"
              >
                <Building2 className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-gray-800 font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Candidate Requirements */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-10 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">
            Candidate Requirements
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-800 font-medium">
            {requirements.map((r, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="text-blue-600">✔</span> {r}
              </li>
            ))}
          </ul>
        </section>

        {/* Benefits */}
        <section className="bg-gradient-to-r from-green-50 via-white to-green-100 p-10 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
            <CheckCircle2 className="inline-block w-8 h-8 text-green-600" />{" "}
            Benefits & Guarantees
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-800 font-medium">
            {benefits.map((b, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="text-green-600">✅</span> {b}
              </li>
            ))}
          </ul>
        </section>

        {/* Process Steps */}
        <section>
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
            Full Employment Process
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg"
              >
                <h4 className="text-lg font-semibold text-blue-700 mb-2">
                  {s.title}
                </h4>
                <p className="text-gray-700">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
            <HelpCircle className="inline-block w-8 h-8 text-purple-600" />{" "}
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                onClick={() => toggleFAQ(i)}
                className="bg-gradient-to-r from-white to-blue-50 rounded-xl shadow p-6 cursor-pointer hover:shadow-lg transition"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.q}
                  </h3>
                  {openIndex === i ? (
                    <ChevronUp className="text-blue-600" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </div>
                {openIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-700 leading-relaxed"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </section>

         {/* CTA */}
        <section
          id="apply"
          className="text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white p-12 rounded-2xl shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="mb-6 text-lg">
            Apply now with <span className="font-semibold">KonnectHRC</span> and
            Cohen Employment Group to secure your{" "}
            <span className="text-yellow-300">legal job in Israel</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Updated Apply Button */}
            <button
              onClick={() => setSelectedJob("General Israel Application")}
              className="px-10 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow transition"
            >
              Apply Now
            </button>

            <a
              href="/company-profile_konnect-talent.pdf"
              download
              className="px-10 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition"
            >
              Download Details
            </a>
          </div>
        </section>
      </div>

      {/*  Apply Modal */}
      <ApplyModal open={!!selectedJob} onClose={() => setSelectedJob(null)} jobTitle={selectedJob} />
    </section>
    <Footer/>
    </>
  );
}
