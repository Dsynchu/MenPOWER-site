import { motion } from "framer-motion";
import { useState } from "react";
import ApplyModal from "../components/ApplyModal"; //  Modal import

export default function JobsSection() {
  const [selectedJob, setSelectedJob] = useState(null);

  // Dubai Jobs
  const jobsDubai = [
    {
      title: "Printing Machine Operator",
      location: "Dubai, UAE",
      salary: "AED 1200 – 1500",
      img: "https://images.unsplash.com/photo-1581091870634-1d22d89f3d89?auto=format&fit=crop&w=800&q=80",
      details: "2+ years exp · Full-time · 8 hrs/day",
    },
    {
      title: "HR Assistant",
      location: "Dubai, UAE",
      salary: "AED 2000 – 2500",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      details: "1+ year exp · Full-time · Office based",
    },
    {
      title: "Sales Executive",
      location: "Dubai, UAE",
      salary: "AED 2500 – 3000",
      img: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80",
      details: "Target based · Commission available",
    },
    {
      title: "Data Entry Clerk",
      location: "Dubai, UAE",
      salary: "AED 1800 – 2200",
      img: "https://images.unsplash.com/photo-1584697964403-4dff5d6e6fbb?auto=format&fit=crop&w=800&q=80",
      details: "Basic computer knowledge · MS Office",
    },
    {
      title: "Office Boy",
      location: "Dubai, UAE",
      salary: "AED 1200 – 1500",
      img: "https://images.unsplash.com/photo-1581574208694-d7a2b4d5c57d?auto=format&fit=crop&w=800&q=80",
      details: "Cleaning · Support tasks · Tea/coffee",
    },
  ];

  // Overseas Jobs
  const jobsOverseas = [
    {
      title: "Nurse",
      location: "Qatar",
      salary: "QAR 4000 – 5000",
      img: "https://images.unsplash.com/photo-1580281657520-a1f67b3a5e2c?auto=format&fit=crop&w=800&q=80",
      details: "Valid license required · Full-time",
    },
    {
      title: "Welder",
      location: "Saudi Arabia",
      salary: "SAR 2000 – 2500",
      img: "https://images.unsplash.com/photo-1592853625600-00a5fcd0e19b?auto=format&fit=crop&w=800&q=80",
      details: "Gulf exp preferred · 9 hrs/day",
    },
    {
      title: "Driver",
      location: "Oman",
      salary: "OMR 180 – 220",
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
      details: "Valid GCC license required",
    },
    {
      title: "Chef",
      location: "Bahrain",
      salary: "BHD 300 – 400",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      details: "Multi-cuisine exp preferred",
    },
    {
      title: "Electrician",
      location: "Kuwait",
      salary: "KWD 150 – 200",
      img: "https://images.unsplash.com/photo-1581092917463-2d50b2b8ef5a?auto=format&fit=crop&w=800&q=80",
      details: "ITI/Diploma · 3+ years exp",
    },
  ];

  const JobCard = ({ job }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-6 bg-gray-900/70 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-700"
    >
      <img
        src={job.img}
        alt={job.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
      <p className="text-gray-400 text-sm mt-1">{job.location}</p>
      <p className="text-gray-500 text-sm mt-1">{job.details}</p>
      <p className="text-blue-400 font-medium mt-2">{job.salary}</p>
      <button
        onClick={() => setSelectedJob(job.title)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:shadow-lg transition"
      >
        Apply Now
      </button>
    </motion.div>
  );

  return (
    <section
      id="jobs"
      className="py-20 relative"
      style={{
        background:
          "linear-gradient(135deg, #0f172a, #1e293b, #334155, #1e293b)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Current Job Openings
        </motion.h2>

        {/* Dubai Jobs */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-blue-400 mb-6 border-l-4 border-blue-500 pl-3"
        >
          Dubai (Local)
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {jobsDubai.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>

        {/* Overseas Jobs */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-green-400 mb-6 border-l-4 border-green-500 pl-3"
        >
          Overseas
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobsOverseas.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>
      </div>

      {/*  Apply Modal */}
      {selectedJob && (
        <ApplyModal
          open={true}
          jobTitle={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </section>
  );
}
