
'use client';
import Link from "next/link";
import Image from "next/image";

export default function WhyWeExist() {
  return (
    <section className="bg-[#f3f4f6] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why We Exist
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            The BahaMoments is more than a destination—it's a feeling.
            A mix of warmth, culture, crystal-blue waters,
            and unforgettable island stories.
          </p>
          
     
            <ul className="space-y-5 mb-10">
            {[
                "Curated Island Experiences",
                "Smooth & Easy Planning",
                "Local Insights You Can Trust",
                "A Platform Built for Every Traveler",
            ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                
                {/* Yellow Dot */}
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-400 flex-shrink-0"></span>
                
                {/* Text */}
                <span className="text-gray-700 text-lg">
                    {item}
                </span>

                </li>
            ))}
            </ul>

          {/* BUTTON */}
          {/* BUTTON */}
          <Link
            href="/packages"
            className="inline-block bg-[#4B8EAF] hover:bg-[#3a7590] text-white px-10 py-4 rounded-full text-lg transition duration-300 shadow-sm"
          >
            Explore the package
          </Link>
    
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/assets/whyweexists.png"   // Put your image inside public/images
            width={600}
            height={600}
            alt="Why We Exist"
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
