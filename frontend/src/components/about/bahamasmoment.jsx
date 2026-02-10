import Image from "next/image";

const BahaMoments = () => {
  return (
    <div className="w-full">
      <Image
        src="/assets/bahamasmoment.png"   // <-- your full combined image
        alt="BahaMoments Section"
        width={1920}
        height={600}
        className="w-full h-auto"
        priority
      />
    </div>
  );
};

export default BahaMoments;
