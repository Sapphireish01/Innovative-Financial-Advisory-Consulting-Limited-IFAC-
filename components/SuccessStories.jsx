"use client";

import { motion } from "framer-motion";
import { Scale, DollarSign, ShieldCheck } from "lucide-react";

export default function SuccessStories() {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="success"
      className="py-20 px-6 md:px-20 bg-[#001C53] text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Our Impactful Success Stories
      </h2>

      <p className="text-center text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-14">
        Discover how IFAC empowers businesses through strategic financial
        advisory and consulting, driving tangible results and lasting value.
      </p>

      {/* Motion Container */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-10"
      >
        {/* Card 1 */}
        <motion.div
          variants={card}
          className="bg-white text-[#011B42] p-8 rounded-lg shadow-lg"
        >
          <Scale size={26} className="text-[#011B42] mb-4" />
          <h4 className="text-xl font-bold text-right mb-4">$10M</h4>
          <p className="text-sm leading-relaxed text-gray-700">
            Secured mandate to acquire State licence for Microfinance Banking
            License towards establishing a World Class Digital Bank leveraging
            technology and providing affordable innovative banking solutions to
            financially excluded sectors/segments of the Nigerian economy.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={card}
          className="bg-white text-[#011B42] p-8 rounded-lg shadow-lg"
        >
          <DollarSign size={26} className="text-[#011B42] mb-4" />
          <h4 className="text-xl font-bold text-right mb-4">$50M</h4>
          <p className="text-sm leading-relaxed text-gray-700">
            Secured mandate to arrange $50m debt and equity capital for a 7 star,
            50 bed state of the art specialist hospital from an investment grade
            multilateral development and trade finance institution.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={card}
          className="bg-white text-[#011B42] p-8 rounded-lg shadow-lg"
        >
          <ShieldCheck size={26} className="text-[#011B42] mb-4" />
          <h4 className="text-xl font-bold text-right mb-4">Equity Funding</h4>
          <p className="text-sm leading-relaxed text-gray-700">
            Secured mandate for mortgage bank which intends to convert its licence
            to regional commercial banking licence and seeks to raise ₦8 billion
            in equity capital to meet regulatory requirements for conversion into
            a regional commercial bank to fund growth and expansion.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
