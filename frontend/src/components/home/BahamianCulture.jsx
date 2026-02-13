"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const BahamianCulture = () => {
  const router = useRouter();

  const handleStartSearch = () => {
    router.push("/search");
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Experience
              <br />
              True
              <br />
              <span className="inline-block bg-[#F5A623] text-white px-2 py-1">
                Bahamian
              </span>
              <br />
              Culture
            </h1>

            <p className="mt-8 text-black text-[15px] leading-relaxed max-w-[260px]">
              Every adventure is crafted and led by local experts, giving you
              an insider's view of island traditions, hidden spots, and
              unforgettable moments.
            </p>
            <button
              onClick={handleStartSearch}
              className="mt-8 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition"
            >
              <img
                src="/assets/Searchicon.svg"
                alt="Search"
                className="w-4 h-4"
              />
              Start your search
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