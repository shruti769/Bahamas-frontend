import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative h-[280px] md:h-[400px] lg:h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/contacthero.png" // Replace with your image path
          alt="Tropical beach background"
          fill
          className="object-cover object-center"
          priority
        />
      
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-end mr-50">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </div>
    </section>
  );
}