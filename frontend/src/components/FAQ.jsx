import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does KonnectHRC provide?",
    answer:
      "We specialize in HR consulting, recruitment, staffing solutions, training, and career guidance. Our mission is to connect talent with the right opportunities.",
  },
  {
    question: "How can I apply for jobs?",
    answer:
      "You can explore current job openings in the Jobs section and filter them using our Find Your Dream Job tool. Simply click on Apply to submit your details.",
  },
  {
    question: "Do you provide services for companies or job seekers?",
    answer:
      "Both! We help companies hire the best talent, and we also guide job seekers to land their dream roles.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are based in India but provide HR consultancy and recruitment services globally through our network.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-20"
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b, #334155, #1e293b)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-14 drop-shadow-lg">
          ❓ Frequently Asked <span className="text-blue-400">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/70 backdrop-blur-lg shadow-lg rounded-2xl p-6 cursor-pointer border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/30 transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-400" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-gray-300 leading-relaxed text-base"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
