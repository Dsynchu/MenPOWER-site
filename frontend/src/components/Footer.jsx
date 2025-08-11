import { Linkedin, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-16 grid md:grid-cols-3 gap-12 border-b border-gray-700">
        {/* Logo + About */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/images/hero.jpeg" alt="KonnectHRC" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-blue-500">Konnect HRC</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Konnect Talent HR Consultancy helps businesses find the right talent 
            and individuals achieve their dream careers. We focus on transparency, 
            trust, and growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#jobs" className="hover:text-blue-400 transition">Jobs</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="flex items-center space-x-3 mb-2">
            <Phone size={18} className="text-blue-400" /> <span>+971 56 277 8484</span>
          </p>
          <p className="flex items-center space-x-3 mb-2">
            <Mail size={18} className="text-blue-400" /> <span>info@konnectthrc.com</span>
          </p>
          <p className="flex items-center space-x-3">
            <MapPin size={18} className="text-blue-400" /> 
            <span>Abu Saif Business Center, Dubai</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} KonnectHRC. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-blue-600 hover:text-white transition">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-pink-500 hover:text-white transition">
            <Instagram size={20} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-blue-500 hover:text-white transition">
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
