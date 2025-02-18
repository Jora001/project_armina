// components/GallerySection.tsx
import Image from "next/image";

const GallerySection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-cormorant text-[40px] text-[#1E2B3B] mt-[40px] font-bold">
        Fotogalerie
      </p>
      <p className="font-cormorant md:text-[20px] text-[#1E2B3B] italic mt-[10px]">
        Facellus lorem malesuada ligula pulvinar commodo maecenas
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-[2rem] relative">
        <Image
          src="/assets/images/rectangle13.svg"
          alt="rectangle13"
          width={407}
          height={613}
          className="grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110"
        />
        <Image
          src="/assets/images/rectangle14.svg"
          alt="rectangle14"
          width={407}
          height={325}
          className="grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110"
        />
        <Image
          src="/assets/images/rectangle12.svg"
          alt="rectangle12"
          width={415}
          height={613}
          className="grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110"
        />
        <Image
          src="/assets/images/rectangle15.svg"
          alt="rectangle15"
          width={199}
          height={277}
          className="absolute md:mt-[336px] md:ml-[427px] grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110 hidden md:block"
        />
        <Image
          src="/assets/images/rectangle16.svg"
          alt="rectangle16"
          width={199}
          height={277}
          className="absolute md:mt-[336px] md:ml-[635px] grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110 hidden md:block"
        />
      </div>
    </div>
  );
};

export default GallerySection;
