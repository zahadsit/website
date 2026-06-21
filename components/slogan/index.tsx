import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Slogan = () => {
  return (
    <div className="px-6 md:px-12 py-6 md:py-12 flex flex-col md:flex-row md:justify-between gap-5 bg-primary">
      <div className="border-l-4 border-ambition-gold pl-3 md:w-1/2">
        <h2 className="italic text-secondary text-xl sm:text-2xl md:text-3xl font-light">
          #BeYourOwnBoss
        </h2>
        <h4 className="text-2xl sm:text-3xl md:text-4xl mt-1 text-secondary">
          {/* Let’s Work Together */}
          UAE's Premier Chartered Accountancy
        </h4>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 flex items-center justify-center md:justify-end">
        <a href="mailto:info@zahads.com" className="text-center md:text-right">
          <p className="font-light text-lg sm:text-xl flex items-center justify-center md:justify-end">
            <FaEnvelope className="mr-2 text-ambition-gold" />{" "}
            <span className="text-ambition-gold">Email</span>
          </p>
          <p className="border-b border-gray-700 text-xl text-secondary  sm:text-3xl md:text-4xl mt-1 break-all">
            info@zahads.com
          </p>
        </a>
      </div>
    </div>
  );
};

export default Slogan;
