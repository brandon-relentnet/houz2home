import Image from "next/image";

export default function HeroSection({ title, subtitle, image, alt }) {
  return (
    <section className="w-full h-screen flex items-center justify-center relative">
      <div className="bg-base opacity-25 w-full h-full absolute">
        <Image
          src={image}
          alt={alt}
          className="object-cover"
          fill 
        />
      </div>
      <div className="absolute text-center z-10 text-text px-4">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="w-full h-80"
          preserveAspectRatio="none"
        >
          <path
            d="M0 417L150 374L300 437L450 437L600 413L750 386L900 434L900 601L750 601L600 601L450 601L300 601L150 601L0 601Z"
            className="fill-crust"
          ></path>
          <path
            d="M0 453L150 470L300 502L450 452L600 486L750 433L900 491L900 601L750 601L600 601L450 601L300 601L150 601L0 601Z"
            className="fill-mantle"
          ></path>
          <path
            d="M0 495L150 519L300 519L450 517L600 543L750 519L900 532L900 601L750 601L600 601L450 601L300 601L150 601L0 601Z"
            className="fill-base"
          ></path>
        </svg>
      </div>

    </section>
  );
}
