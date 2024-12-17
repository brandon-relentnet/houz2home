import Image from "next/image";
import SequentialText from "./SequentialText";

export default function HeroSection({ title, subtitle, image, alt }) {
  // Derive the base image name (without extension)
  const baseImageName = image.replace(/\.(png|jpg|jpeg|webp)$/, "");

  // Generate image URLs for Next.js Image component
  const getImageSrc = (size) => `${baseImageName}-${size}.webp`;

  // Reusable component for the flower images
  const FlowerImage = ({ position, alt }) => {
    const isLeft = position === "left";

    // Adjust side and transformation classes for alignment
    const sideClass = isLeft ? "-left-32" : "-right-32 rotate-180";
    const className = `${sideClass} pointer-events-none z-10 opacity-30 relative`;

    return (
      <div className={className} style={{ width: "50%", height: "auto" }}>
        <div className="relative w-full flex justify-center items-center">
          <Image
            src={getImageSrc("lg")}
            alt={alt}
            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 75vw, 100vw" // Tailwind handles this dynamically
            width={800}
            height={800}
            priority // Prioritize image loading
            className="object-contain" // Maintains image aspect ratio
            srcSet={`
              ${getImageSrc("sm")} 640w,
              ${getImageSrc("md")} 1024w,
              ${getImageSrc("lg")} 1280w,
              ${getImageSrc("xl")} 1536w,
              ${getImageSrc("2xl")} 1920w
            `}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-screen flex justify-center items-center pt-28 mb-28 bg-base overflow-hidden">
      {/* Left Flower */}
      <FlowerImage position="left" alt={`${alt} (left)`} />

      {/* Text Content */}
      <div className="absolute z-20 text-center px-4">
        <SequentialText title={title} subtitle={subtitle} />
      </div>

      {/* Right Flower */}
      <FlowerImage position="right" alt={`${alt} (right)`} />
    </section>
  );
}
