import Image from "next/image";

export default function HeroSection({ title, subtitle, image, alt }) {
  // Dynamically generate paths without relying on a file extension
  const getImageSrc = (size) => `${image}-${size}.webp`;

  return (
    <section className="w-full h-[90vh] flex items-center justify-center overflow-hidden relative">
      <div className="bg-base opacity-25">
        <Image
          src={getImageSrc("2xl")} // Largest version as fallback
          alt={alt}
          className="object-cover"
          fill // Fills the container
          sizes="(max-width: 640px) 100vw, 
               (max-width: 960px) 100vw, 
               (max-width: 1280px) 100vw, 
               (max-width: 1980px) 100vw, 
               100vw"
          priority={true}
        />
      </div>
      <div className="absolute text-center z-10 text-text">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </section>
  );
}
