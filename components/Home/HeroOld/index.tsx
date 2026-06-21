import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import HeroVideo from "./VideoHero";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        preload="metadata"
        autoPlay
        loop
        muted
        poster="/videos/hero1.webp"
        playsInline
      >
        <source src="/videos/home.webm" type="video/webm" />
        <source src="/videos/home.mp4" type="video/mp4" />
      </video> */}
      <HeroVideo/>
      {/* Black overlay for video */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center h-full w-full text-white px-8 md:px-16">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">
            Empowering Your Business Journey with Strategic Financial Solutions.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
            Offering expert solutions for accounting, tax, and business growth
            in Dubai.
          </p>
          <Link
            href="/contact"
            className="bg-primary-yellow text-tertiary	 px-4 sm:px-6 py-2 sm:py-3 transition duration-300 hover:bg-opacity-90"
          >
            <span>Enquire Now</span>
          </Link>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-0 w-full flex justify-center p-4">
        <Link href="" className="text-white text-lg flex flex-col items-center">
          <span> Learn more </span>
          <FaArrowDown className="animate-bounce mt-2 sm:mt-5" />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
