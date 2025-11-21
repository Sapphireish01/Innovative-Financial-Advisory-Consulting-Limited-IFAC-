"use client";


export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-6 md:px-20 bg-white overflow-hidden">

      {/* Background large circle - bottom right */}
        <div className="absolute right-[-120px] bottom-[-120px] w-[380px] h-[380px] bg-[#F3F4F6] rounded-full"></div>

        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#042153] mb-6">
            About IFAC
        </h2>

        {/* First Paragraph */}
        <p className="text-gray-700 text-lg leading-8">
            Innovative Financial Advisory & Consulting Limited (IFAC) is a registered
            company with the Corporate Affairs Commission (CAC), licensed by the Lagos
            State Ministry of Home Affairs to carry out the business of money lending,
            Financial Management and Advisory services to its stakeholders in a
            convenient & cost-effective manner.  
            <br />
            IFAC was incorporated in 2022 and commenced operations in 2023.
        </p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start mt-12 relative">

            {/* Image + dotted pattern container */}
            <div className="relative z-10">
            <img
                src="/about.jpg"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
                alt="About IFAC"
            />
            </div>
            
            {/* Background dotted pattern */}
            <div className="absolute top-[18vh] left-[420px]">
                <img
                    src="/about2.png"
                    className="w-70 h-auto object-cover"
                    alt="About IFAC"
                />
            </div>

            {/* Right Text */}
            <div className="text-gray-700 text-lg md:mt-[100px] md:max-w-lg leading-8">
                <p>
                    Over the years, the company has successfully facilitated Business and
                    Investment Consulting Services with top-notch and multinational companies.  
                    <br /><br />
                    IFAC entered the market with a comparative advantage in product
                    development and deployment that is unique to key market segments, which
                    has strategically positioned the company.
                </p>
            
            </div>

        </div>
    </section>
  );
}
