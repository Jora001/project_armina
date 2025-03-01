import Image from "next/image";

const GallerySection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <p className="font-cormorant text-[40px] text-[#1E2B3B] mt-[40px] font-bold">
        Fotogalerie
      </p>
      <p className="font-cormorant md:text-[20px] text-[#1E2B3B] italic mt-[10px] text-center">
        Facellus lorem malesuada ligula pulvinar commodo maecenas
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-[2rem]">
        <div className="flex flex-col gap-3">
          <Image
            src="/assets/images/rectangle13.svg"
            alt="rectangle13"
            width={407}
            height={613}
            className="transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Image
            src="/assets/images/rectangle14.svg"
            alt="rectangle14"
            width={407}
            height={325}
            className="transition-transform duration-500 hover:scale-110"
          />
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/assets/images/rectangle15.svg"
              alt="rectangle15"
              width={199}
              height={277}
              className="transition-transform duration-500 hover:scale-110"
            />
            <Image
              src="/assets/images/rectangle16.svg"
              alt="rectangle16"
              width={199}
              height={277}
              className="transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Image
            src="/assets/images/rectangle12.svg"
            alt="rectangle12"
            width={415}
            height={613}
            className="transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
