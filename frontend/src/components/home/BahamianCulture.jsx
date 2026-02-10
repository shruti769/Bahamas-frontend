"use client";

import Image from "next/image";

const BahamianCulture = () => {
  const handleStartSearch = () => {
    alert("Start Search Clicked 🚀");
    // later:
    // router.push("/search");
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Experience <br />
              True{" "}
              <span className="inline-block bg-orange-400 text-white px-2 py-1 rounded">
                Bahamian
              </span>{" "}
              <br />
              Culture
            </h1>

            <p className="mt-6 text-gray-600 max-w-md">
              Every adventure is crafted and led by local experts, giving you
              an insider’s view of island traditions, hidden spots, and
              unforgettable moments.
            </p>

            <button
              onClick={handleStartSearch}
              className="mt-8 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition duration-300"
            >
              🔍 Start your search
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[420px]">
            <Image
              src="/assets/culture.png"
              alt="Bahamian Culture"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BahamianCulture;
