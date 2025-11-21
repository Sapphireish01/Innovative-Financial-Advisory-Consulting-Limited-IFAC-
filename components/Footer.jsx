"use client";


import { FiTwitter } from "react-icons/fi";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
export default function Footer() {
  // Quick links with their corresponding section IDs
  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Success Stories", id: "success" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#001C53] text-white py-14 px-8 md:px-20">

      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-14 md:gap-0">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src="/logo.jpg" alt="IFAC Logo" className="w-28 object-contain" />
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-5 text-center text-white/40">Quick Links</h3>

          <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm opacity-90">
            {quickLinks.map((link, idx) => (
              <li
                key={idx}
                className="cursor-pointer hover:text-white/90 transition"
                onClick={() => handleScroll(link.id)}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold text-lg mb-5">Follow Us</h3>

          <div className="flex justify-center md:justify-end gap-6">
            <LuFacebook className="w-5 h-5 hover:text-white/80 transition" />
            <FiTwitter className="w-5 h-5 hover:text-white/80 transition" />
            <LuLinkedin className="w-5 h-5 hover:text-white/80 transition" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-12 mb-6"></div>

      {/* Copyright */}
      <p className="text-center text-xs opacity-70 tracking-wide">
        © {new Date().getFullYear()} IFAC. All rights reserved.
      </p>
    </footer>
  );
}
