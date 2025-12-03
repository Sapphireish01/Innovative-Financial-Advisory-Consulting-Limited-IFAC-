"use client";

import { BadgeCheck, Lightbulb, Users, ShieldCheck } from "lucide-react";

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative bg-[#001C53] text-white py-12 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* VISION */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="text-center md:text-left md:flex md:justify-start">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold italic mb-4 md:mb-6">
              Our Vision
            </h3>
            <p className="text-gray-200 text-lg md:text-xl leading-8 italic max-w-2xl mx-auto md:mx-0">
              "To empower individuals and businesses through innovative financial
              solutions that drive prosperity, inclusion, and long-term growth."
            </p>
          </div>
        </div>

        {/* MISSION */}
        <div className="text-center md:text-right md:flex md:justify-end mt-10 md:mt-14">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold italic mb-4 md:mb-6">
              Our Mission
            </h3>
            <p className="text-gray-200 text-lg md:text-xl leading-8 italic max-w-2xl mx-auto md:mx-0">
              "Our mission is to simplify finance for people and businesses by
              providing fit-for-purpose advisory, lending, and management
              solutions that foster inclusion, growth, and prosperity."
            </p>
          </div>
        </div>
      </div>

      <hr className="bg-white/30" />

      {/* CORE VALUES SECTION */}
      <div className="max-w-5xl mx-auto mt-14">
        <h3 className="text-center text-3xl md:text-4xl font-semibold italic mb-12">
          Our Core Values
        </h3>

        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-4 
            gap-14 
            text-center
          "
        >
          {/* Professionalism */}
          <div className="flex flex-col items-center px-2 md:px-4">
            <BadgeCheck className="w-14 h-14 md:w-16 md:h-16 text-teal-300 mb-5" strokeWidth={1.5} />
            <h4 className="text-xl md:text-2xl font-semibold mb-3">Professionalism</h4>
            <p className="text-gray-300 text-base md:text-lg leading-7">
              Delivering excellence with integrity and consistency in every interaction.
            </p>
          </div>

          {/* Innovation */}
          <div className="flex flex-col items-center px-2 md:px-4">
            <Lightbulb className="w-14 h-14 md:w-16 md:h-16 text-teal-300 mb-5" strokeWidth={1.5} />
            <h4 className="text-xl md:text-2xl font-semibold mb-3">Innovation</h4>
            <p className="text-gray-300 text-base md:text-lg leading-7">
              Driving progress with forward-thinking solutions that create real value.
            </p>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col items-center px-2 md:px-4">
            <Users className="w-14 h-14 md:w-16 md:h-16 text-teal-300 mb-5" strokeWidth={1.5} />
            <h4 className="text-xl md:text-2xl font-semibold mb-3">Customer Care</h4>
            <p className="text-gray-300 text-base md:text-lg leading-7">
              Putting clients first with personalized support and exceptional experiences.
            </p>
          </div>

          {/* Accountability */}
          <div className="flex flex-col items-center px-2 md:px-4">
            <ShieldCheck className="w-14 h-14 md:w-16 md:h-16 text-teal-300 mb-5" strokeWidth={1.5} />
            <h4 className="text-xl md:text-2xl font-semibold mb-3">Accountability</h4>
            <p className="text-gray-300 text-base md:text-lg leading-7">
              Owning our actions, ensuring transparency, and consistently fulfilling our promises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
