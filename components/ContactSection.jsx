"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section
    id="contact"
      className="py-20 px-6 md:px-20 bg-white relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/contact-bg.png)`,
      }}
      alt="Contact background image" 
    >
          
      {/* Overlay with 30% opacity */}
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className=" text-2xl text-[#011B42] font-bold md:text-4xl mb-10">Contact us</h2>

          <div className="space-y-8 text-gray-800 text-xs">
            <div className="flex items-start gap-4">
              <MapPin className="text-black mt-1" />
              <p>17B Kafayat Abdulrasaq Street Off Fola Oshibo Lekki Phase 1 Lagos.</p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-black" />
              <p>(+234) 904 300 4 300</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-black" />
              <p>dola@innovativefinancialadvisory.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form 
          action={`mailto:dola@innovativefinancialadvisory.com`}
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
          <input
            type="text"
            placeholder="Your name"
            className="w-full border-0 border-b border-gray-300 focus:outline-none focus:border-black p-2"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border-0 border-b border-gray-300 focus:outline-none focus:border-black p-2"
          />

          <input
            type="text"
            placeholder="Your phone number"
            className="w-full border-0 border-b border-gray-300 focus:outline-none focus:border-black p-2"
          />

          <textarea
            placeholder="Your message"
            className="w-full border-0 border-b border-gray-300 focus:outline-none focus:border-black p-2 h-32"
          />

          <div className="flex justify-end">
            <button className="bg-[#011B42] text-white px-8 py-3 mt-4 rounded-lg">
            Send message
          </button>
          </div>
          
        </form>
      </div>
    </section>
  );
}
