import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20"
      style={{
        background:
          "linear-gradient(135deg, #0f172a, #1e293b, #111827, #0f172a)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-6 drop-shadow-lg">
          📬 Get In <span className="text-blue-400">Touch</span>
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          Have questions or want to work with us? Reach out through the form or
          connect directly using our contact details below.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div className="space-y-6">
            {[
              {
                icon: <MapPin className="w-6 h-6 text-blue-400" />,
                title: "Our Office",
                value: "Guwahati, Assam, India",
              },
              {
                icon: <Mail className="w-6 h-6 text-blue-400" />,
                title: "Email Us",
                value: "info@konnecthrc.com",
              },
              {
                icon: <Phone className="w-6 h-6 text-blue-400" />,
                title: "Call Us",
                value: "+91 98765 43210",
              },
              {
                icon: <Clock className="w-6 h-6 text-blue-400" />,
                title: "Working Hours",
                value: "Mon – Sat: 9:00 AM – 7:00 PM",
              },
              {
                icon: <Globe className="w-6 h-6 text-blue-400" />,
                title: "Website",
                value: "www.konnecthrc.com",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 bg-gray-800/60 backdrop-blur-lg p-4 rounded-xl shadow-md 
                border border-gray-700 hover:border-blue-400 hover:shadow-blue-500/30 
                transition duration-300"
              >
                {item.icon}
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-gray-300">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 border border-gray-700 hover:shadow-blue-500/20 transition"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 text-white placeholder-gray-400 
                border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 text-white placeholder-gray-400 
                border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 text-white placeholder-gray-400 
                border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
              text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-blue-500/40 
              transition duration-300"
            >
              Send Message
            </button>

            {status && (
              <p className="text-sm text-gray-300 mt-2">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
