"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { usePathname } from "next/navigation";

interface Props {
  img: string;
  title: string;
  description: string;
  btnText?: string;
  costCalculator?: boolean;
}

const Hero = ({ img, title, description, btnText, costCalculator }: Props) => {
  const pathname = usePathname();
  return (
    <div className="relative w-full h-[85vh] md:h-[95vh]">
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover object-top absolute top-0 left-0"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-end h-full w-full text-white px-8 md:px-16 py-28">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 ">
            {description}
          </p>
          {pathname != "/contact" && (
            <Link
              href="/contact"
              className="bg-ambition-gold text-black px-4 sm:px-6 py-2 sm:py-3 transition duration-300 flex items-center w-fit gap-2 sm:gap-3"
            >
              <span>{btnText ? btnText : "Get Started Today"}</span>
              <FaArrowRight className="text-lg sm:text-xl" />
            </Link>
          )}
          {costCalculator && (
            <p className="underline text-white mt-4 sm:mt-5 text-xs sm:text-sm">
              Calculate your setup costs
            </p>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center p-4">
        <Link
          href=""
          className="text-white text-base sm:text-lg flex flex-col items-center"
        >
          <span> Learn more </span>
          <FaArrowDown className="animate-bounce mt-3 sm:mt-5" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
