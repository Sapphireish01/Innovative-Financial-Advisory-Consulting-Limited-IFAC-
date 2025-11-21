"use client";

import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";

export default function TopHeader() {
  const [open, setOpen] = useState(false);

  // Function to scroll and close mobile menu
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // close mobile menu
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Logo" className="h-15 w-auto" />
        </div>

        <div className="flex gap-2.5">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#042153FF]">
            <button onClick={() => handleScroll("about")} className="hover:border-b-2 hover:border-blue-900 border-b-transparent">About IFAC</button>
            <button onClick={() => handleScroll("vision")} className="hover:border-b-2 hover:border-blue-900 border-b-transparent">Vision</button>
            <button onClick={() => handleScroll("services")} className="hover:border-b-2 hover:border-blue-900 border-b-transparent">Services</button>
            <button onClick={() => handleScroll("success")} className="hover:border-b-2 hover:border-blue-900 border-b-transparent">Success stories</button>
          </nav>

          {/* Get in touch Button */}
          <button onClick={() => handleScroll("contact")} className="ml-4 hidden md:block bg-[#042153FF] text-white px-5 py-2 rounded-full text-sm shadow">
            Get in touch <span> <IoMdArrowForward className="inline-flex" /></span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-gray-700 text-sm">
          <button onClick={() => handleScroll("about")} className="block w-full  text-center">About IFAC</button>
          <button onClick={() => handleScroll("vision")} className="block w-full  text-center">Contact</button>
          <button onClick={() => handleScroll("services")} className="block w-full  text-center">Services</button>
          <button onClick={() => handleScroll("success")} className="block w-full  text-center">Success stories</button>

          <div className="flex justify-center">
            <button className=" bg-[#042153FF] text-white px-5 py-2 rounded-full text-sm shadow">
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
