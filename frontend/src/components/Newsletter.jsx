import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
        >
          Stay Updated with{" "}
          <span className="text-blue-400">KonnectHRC</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 text-lg md:text-xl opacity-90 leading-relaxed"
        >
          Subscribe to our newsletter and get{" "}
          <span className="text-blue-300 font-semibold">
            career tips, job alerts, and company news
          </span>{" "}
          delivered straight to your inbox.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubscribe}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-5 py-3 rounded-lg w-full md:w-2/3
                       text-gray-200 placeholder-white
                       bg-white/10 backdrop-blur-md
                       border border-white/20
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                       transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg hover:scale-105 transition transform"
          >
            Subscribe
          </button>
        </motion.form>

        {/* Small note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 text-sm text-gray-300"
        >
          We respect your privacy. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}
