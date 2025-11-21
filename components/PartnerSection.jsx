"use client";

export default function PartnerSection() {
  const logos = ["/avis.jpg", "/braun.jpg", "/partner3.jpg", "/ibank.jpg", "/erml.png", "/setp.jpg"];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <h2 className="text-center text-3xl font-semibold mb-6">Trusted By</h2>

      {/* Slider Container */}
      <div className="relative w-full">
        <div className="flex animate-scroll gap-16">
          {/* Duplicate list to make scrolling seamless */}
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="h-20 w-auto object-contain"
              alt="partner logo"
            />
          ))}
        </div>
      </div>

      {/* Animation Style */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          width: max-content;
          animation: scroll 18s linear infinite;
        }
      `}</style>
    </section>
  );
}
