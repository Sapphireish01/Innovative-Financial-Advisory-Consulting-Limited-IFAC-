"use client";

export default function WhoWeServe() {
  const groups = [
    "Individuals",
    "Entrepreneurs",
    "Multinational Companies",
  ];

  return (
    <section className="py-20 px-8 md:px-20 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#001B42] mb-6">
        Who We Serve
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
        At IFAC, we deliver tailored financial advisory and consulting solutions 
        designed to empower your growth—whether you're an individual, an emerging 
        entrepreneur, or a global enterprise.
      </p>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-12 items-center">

        {/* Left Image */}
        <div className="w-full">
          <img
            src="/building.jpeg"
            alt="Corporate building"
            className="rounded-xl shadow-lg w-full h-[350px] object-cover"
          />
        </div>

        {/* Vertical Items */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-8">

            {groups.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-gray-50 px-8 py-4 rounded-lg shadow-sm text-gray-800 font-semibold w-full text-center border border-gray-200 hover:shadow-md transition">
                  {item}
                </div>

                {index < groups.length - 1 && (
                    <div className="h-10 w-[3px] bg-gray-300 rounded-full shadow-[0_0_6px_rgba(0,0,0,0.08)] mt-2"></div>
                )}
              </div>
            ))}

          </div>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src="/people.jpeg"
            alt="Business professionals"
            className="rounded-xl shadow-lg w-full h-[350px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
