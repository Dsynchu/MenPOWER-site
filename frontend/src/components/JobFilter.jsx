import { useState } from "react";
import { motion } from "framer-motion";

const jobs = [
  { id: 1, title: "Welder", location: "Dubai", type: "Full-time" },
  { id: 2, title: "Housekeeping Staff", location: "Abu Dhabi", type: "Full-time" },
  { id: 3, title: "Helper", location: "Sharjah", type: "Part-time" },
  { id: 4, title: "Waiter/Waitress", location: "Dubai", type: "Full-time" },
  { id: 5, title: "Construction Worker", location: "Ajman", type: "Full-time" },
  { id: 6, title: "Warehouse Worker", location: "Dubai", type: "Part-time" },
  { id: 7, title: "Cleaning Staff", location: "Fujairah", type: "Full-time" },
  { id: 8, title: "Helper (General)", location: "Ras Al Khaimah", type: "Full-time" },
  { id: 9, title: "Kitchen Assistant", location: "Dubai", type: "Full-time" },
  { id: 10, title: "Security Guard", location: "Dubai", type: "Full-time" },
];

export default function JobFilter() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchLocation = location === "All" || job.location === location;
    return matchSearch && matchLocation;
  });

  return (
    <section
      id="job-filter"
      className="relative py-20"
      style={{
        background:
          "linear-gradient(135deg, #0f172a, #1e293b, #334155, #1e293b)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
        >
          Find Your <span className="text-blue-400">Dream Job</span>
        </motion.h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 gap-4 mb-12">
          <input
            type="text"
            placeholder="🔍 Search by role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-lg bg-gray-900/60 backdrop-blur-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 shadow-md transition"
          />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full md:w-1/3 px-4 py-3 rounded-lg bg-gray-900/60 backdrop-blur-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white shadow-md transition"
          >
            <option>All</option>
            <option>Dubai</option>
            <option>Abu Dhabi</option>
            <option>Sharjah</option>
            <option>Ajman</option>
            <option>Fujairah</option>
            <option>Ras Al Khaimah</option>
          </select>
        </div>

        {/* Job List */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-800/70 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                <p className="text-gray-300 font-medium">
                  {job.location} • {job.type}
                </p>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-2 font-medium">
              No jobs found. Try another search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
