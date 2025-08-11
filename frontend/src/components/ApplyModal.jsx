import { useState } from "react";

export default function ApplyModal({ open, onClose, jobTitle }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [files, setFiles] = useState({
    passport_front: null,
    passport_back: null,
    photo: null,
    education: null,
    experience: null,
    aadhaar: null,
    pan: null,
    birth_certificate: null,
  });
  const [status, setStatus] = useState("");

  if (!open) return null;

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFile = (e) => {
    const name = e.target.name;
    setFiles((prev) => ({ ...prev, [name]: e.target.files[0] || null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending application...");

    // Required fields check
    if (!form.name || !form.email || !form.phone) {
      setStatus("Please fill name, email, and phone.");
      return;
    }

    const requiredFiles = [
      "passport_front",
      "passport_back",
      "photo",
      "education",
      "experience",
      "aadhaar",
      "pan",
      "birth_certificate",
    ];

    for (const key of requiredFiles) {
      if (!files[key]) {
        setStatus("Please upload all required documents.");
        return;
      }
    }

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("phone", form.phone);
      fd.append("jobTitle", jobTitle || "Not specified");

      Object.keys(files).forEach((k) => {
        if (files[k]) fd.append(k, files[k]);
      });

      const res = await fetch("http://localhost:5000/apply-job", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Application sent! We'll contact you soon.");
        setForm({ name: "", email: "", phone: "" });
        setFiles({
          passport_front: null,
          passport_back: null,
          photo: null,
          education: null,
          experience: null,
          aadhaar: null,
          pan: null,
          birth_certificate: null,
        });
        setTimeout(() => {
          setStatus("");
          onClose();
        }, 2000);
      } else {
        setStatus(data.message || "Failed to send application.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error sending application.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative max-w-3xl w-[95%] max-h-[90vh] overflow-y-auto bg-gray-900 text-white rounded-2xl p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold mb-2">Apply — {jobTitle}</h3>
        <p className="text-sm text-gray-300 mb-4">
          Please fill details & upload all required documents (PDF/JPG/PNG, max 6MB per file).
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Info */}
          <div className="grid sm:grid-cols-3 gap-3">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              className="col-span-3 p-3 bg-gray-800 rounded border border-gray-700"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className="col-span-3 p-3 bg-gray-800 rounded border border-gray-700"
              required
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone (with country code)"
              className="col-span-3 p-3 bg-gray-800 rounded border border-gray-700"
              required
            />
          </div>

          {/* File Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label>
              <div className="text-sm text-gray-300 mb-1">Passport (front)</div>
              <input name="passport_front" onChange={handleFile} type="file" accept=".pdf,.jpg,.jpeg,.png" />
            </label>
            <label>
              <div className="text-sm text-gray-300 mb-1">Passport (back)</div>
              <input name="passport_back" onChange={handleFile} type="file" accept=".pdf,.jpg,.jpeg,.png" />
            </label>
            <label>
              <div className="text-sm text-gray-300 mb-1">Passport photo (white bg)</div>
              <input name="photo" onChange={handleFile} type="file" accept=".jpg,.jpeg,.png" />
            </label>
            <label>
              <div className="text-sm text-gray-300 mb-1">Education certificate</div>
              <input name="education" onChange={handleFile} type="file" accept=".pdf,.jpg,.jpeg,.png" />
            </label>
            <label>
              <div className="text-sm text-gray-300 mb-1">Experience certificate</div>
              <input name="experience" onChange={handleFile} type="file" accept=".pdf,.jpg,.jpeg,.png" />
            </label>
            <label>
              <div className="text-sm text-gray-300 mb-1">Aadhaar</div>
              <input name="aadhaar" onChange={handleFile} type="file" accept=".pdf,.jpg,.jpeg,.png" />
            </label>
            <label>
              <div className="text-sm text-gray-300 mb-1">PAN</div>
              <input name="pan" onChange={handleFile} type="file" accept=".pdf,.jpg,.jpeg,.png" />
            </label>
            <label>
              <div className="text-sm text-gray-300 mb-1">Birth certificate</div>
              <input name="birth_certificate" onChange={handleFile} type="file" accept=".pdf,.jpg,.jpeg,.png" />
            </label>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-4">
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded font-semibold">
              Submit Application
            </button>
            <button type="button" onClick={onClose} className="text-gray-300 px-3 py-2">
              Cancel
            </button>
            <div className="ml-auto text-sm text-gray-300">{status}</div>
          </div>
        </form>
      </div>
    </div>
  );
}
