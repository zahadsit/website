import React from "react";
import img1 from "@/assets/about/1.jpg";
import img2 from "@/assets/about/2.jpg";
import img3 from "@/assets/about/3.jpg";
import img4 from "@/assets/about/4.jpg";
import img5 from "@/assets/about/5.jpg";
import img6 from "@/assets/about/6.jpg";
import img7 from "@/assets/about/7.jpg";

const Characteristics = () => {
  return (
    <div className="px-8 md:px-16 py-16 sm:py-20 min-h-[70vh] flex items-center justify-center relative">
      {/* Heading with responsive text sizes */}
      <h1 className="max-w-xs sm:max-w-md text-2xl sm:text-3xl md:text-4xl text-center z-10 relative">
        Setting Up a Company With No Regrets
      </h1>

      {/* Images with responsive positioning and sizing */}
      {/* Display images on all screens, but position them differently for mobile */}
      <img
        src={img1.src}
        alt="about"
        className="absolute top-5 left-[5%] w-16 sm:w-24 md:w-48"
      />
      <img
        src={img2.src}
        alt="about"
        className="absolute top-[15%] right-[5%] w-16 sm:w-24 md:w-48"
      />
      <img
        src={img3.src}
        alt="about"
        className="absolute top-[5%] right-[15%] w-16 sm:w-24 md:w-48"
      />
      <img
        src={img4.src}
        alt="about"
        className="absolute top-[50%] left-[5%] w-16 sm:w-24 md:w-48"
      />
      <img
        src={img5.src}
        alt="about"
        className="absolute bottom-[10%] left-[10%] w-16 sm:w-24 md:w-48"
      />
      <img
        src={img6.src}
        alt="about"
        className="absolute bottom-[5%] left-[50%] -translate-x-1/2 w-16 sm:w-24 md:w-48"
      />
      <img
        src={img7.src}
        alt="about"
        className="absolute bottom-[15%] right-[5%] w-16 sm:w-24 md:w-48"
      />
    </div>
  );
};

export default Characteristics;
