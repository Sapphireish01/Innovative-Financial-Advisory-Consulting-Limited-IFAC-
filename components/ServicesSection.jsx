"use client";

import { motion } from "framer-motion";
import { LineChart, Briefcase, BarChart3, Landmark } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Strategic Advisory",
      icon: <LineChart className="w-6 h-6 text-[#002861]" />,
      desc: "Expert guidance for growth, mergers, and acquisitions. Navigate complex financial decisions.",
    },
    {
      title: "Financial Consulting",
      icon: <Briefcase className="w-6 h-6 text-[#002861]" />,
      desc: "Optimizing operations, cost structures, and digital transformation. Tailored financial solutions.",
    },
    {
      title: "Management Consulting",
      icon: <BarChart3 className="w-6 h-6 text-[#002861]" />,
      desc: "Access to diverse financing options and debt restructuring support.",
    },
    {
      title: "Loans & Advances",
      icon: <Landmark className="w-6 h-6 text-[#002861]" />,
      desc: "Secure the financing you need with structured loan options and expert navigation.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.22 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-20 px-6 md:px-12 lg:px-20 bg-[#001C53]"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-10 md:mb-14">
        Our Core Services
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          justify-center
          max-w-6xl
          mx-auto
        "
      >
        {services.map((service, i) => (
          <motion.div variants={card} key={i} className="rounded-xl">
            <div
              className="
                bg-white 
                rounded-xl 
                shadow-md 
                p-8 md:p-10
                flex 
                flex-col 
                gap-4 
                transition-all 
                duration-300 
                hover:shadow-xl 
                hover:-translate-y-1
              "
            >
              <div className="w-12 h-12 rounded-lg bg-[#F1F4F9] flex items-center justify-center">
                {service.icon}
              </div>

              <h4 className="text-lg font-semibold text-[#002861]">
                {service.title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>

              <button
                onClick={() => handleScroll("contact")}
                className="mt-4 w-fit text-sm bg-[#F1F4F9] text-[#002861] px-4 py-2 rounded-md hover:bg-gray-200 transition"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
