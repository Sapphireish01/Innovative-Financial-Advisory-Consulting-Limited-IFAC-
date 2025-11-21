"use client";

import { useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";

export default function HomeHero() {
  // Images must be inside /public
  const images = ["/hero.jpeg", "/hero1.jpeg", "/hero2.jpeg", "/hero3.jpeg"];
  const words = ["Innovation", "Excellence", "Advancement", "Solutions", "Empowering"];

  const [displayWord, setDisplayWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  // --- TIMING SETTINGS ---
  const TYPE_SPEED = 150;
  const DELETE_SPEED = 100;
  const HOLD_TIME = 3000; // pause after typing

  // Compute full cycle
  const FULL_CYCLE_TIME =
    words[wordIndex].length * TYPE_SPEED + // typing
    HOLD_TIME +                            // pause
    words[wordIndex].length * DELETE_SPEED; // deleting

  // --- Background slide synced with full cycle ---
  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setWordIndex((prev) => (prev + 1) % words.length);

      // reset typing cycle
      setCharIndex(0);
      setIsDeleting(false);
    }, FULL_CYCLE_TIME);

    return () => clearTimeout(slideTimer);
  }, [wordIndex, FULL_CYCLE_TIME, images.length]);

  // --- Typing effect ---
  useEffect(() => {
    let timeout;

    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex < currentWord.length) {
      // TYPE FORWARD
      timeout = setTimeout(() => {
        setDisplayWord(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, TYPE_SPEED);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // PAUSE
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, HOLD_TIME);
    } else if (isDeleting && charIndex > 0) {
      // DELETING
      timeout = setTimeout(() => {
        setDisplayWord(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, DELETE_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="relative w-full h-[550px] md:h-[650px] overflow-hidden">

      {/* Background Images */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
          
        />
      ))}

      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute bottom-10 left-10 text-left text-white max-w-sm md:max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Empowering Businesses Through <br /> <span>Financial </span>
          <span className="text-[#00E1FF] inline-flex">
            {displayWord}
            <span className="border-r-2 border-white ml-1 animate-pulse"></span>
          </span>
        </h1>

        <div className="w-full flex justify-start mt-3">
          <div className="border-t border-white/70 w-62 md:w-98"></div>
        </div>

        <button className="mt-4 bg-white text-[#042153] px-6 py-2 rounded-full font-semibold shadow-md hover:bg-[#e6e6e6] block">
          Get in Touch <span> <IoMdArrowForward className="inline-flex" /></span>
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              setWordIndex(idx % words.length);
              setCharIndex(0);
              setIsDeleting(false);
            }}
            className={`w-1 h-1 rounded-full transition-all ${
              currentIndex === idx ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
