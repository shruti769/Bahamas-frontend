"use client";

import Image from "next/image";

const WhyChoose = () => {
  const handleHostClick = () => {
    alert("Become a host clicked!");
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="bg-[#F5A220] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* LEFT CONTENT */}
        <div className="text-white max-w-lg">
            <div className="flex items-center gap-2 mb-4">
          <Image
            src="/assets/icon.png"
            alt="BahaMoments Logo"
            width={25}
            height={25}
          />
          <span className="text-2xl font-semibold leading-relaxed">
            BahaMoments
          </span>
          
        </div>

          <h2 className="text-3xl md:text-3xl font-bold mb-4">
            Why did you choose us?
          </h2>

          <p className="text-sm md:text-small text-orange-50 mb-6 leading-relaxed">
            Accompanying us, you have a trip full of experiences. With Chisfis,
            booking accommodation, resort villas, hotels, private houses,
            apartments... becomes fast, convenient and easy.
          </p>

          <button
            onClick={handleHostClick}
            className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-full font-medium flex items-center gap-2"
          >
            Become a host →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-10 md:mt-0 relative w-[420px] h-[320px]">
          <Image
            src="/assets/whychoose.png"
            alt="Host illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
