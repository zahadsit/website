'use client';
import { marqueeImgs } from '@/constants';
import Marquee from 'react-fast-marquee';

const MarqueeComp = () => {
  return (
    <div className="w-full py-10 bg-secondary px-8 md:px-16">
      <h3 className="text-2xl sm:text-3xl md:text-4xl text-center">
        <span className="md:border-b-4 border-primary pb-2">
          Trusted by partners worldwide
        </span>
      </h3>
      <Marquee className="uppercase text-xl font-light mt-5 md:mt-10">
        {marqueeImgs.map((img) => (
          <img
            key={img}
            src={img}
            className="w-28 md:w-36 mx-5"
            alt="Business Setup, Tax & Accounting Services in UAE | Zahads Chartered Accountants"
          />
        ))}
      </Marquee>
    </div>
  );
};
export default MarqueeComp;
