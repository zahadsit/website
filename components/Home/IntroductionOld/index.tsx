import Link from 'next/link';
import { FaBolt, FaChartLine, FaHandshake } from 'react-icons/fa';

const Introduction = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-trust-blue text-clarity-white px-8 md:px-16 py-16 sm:py-24 md:py-32">
      <h2 className="text-2xl sm:text-3xl text-center px-4 sm:px-8 md:px-0 md:text-4xl font-bold mb-4 sm:mb-6 font-lora text-secondary">
        Why Choose Zahads?
      </h2>
      <p className="max-w-6xl text-secondary text-center mb-6 sm:mb-8 px-4 sm:px-8 md:px-0 text-sm sm:text-base font-lato">
        At Zahads, we provide premier business consultancy and accounting
        services tailored to the unique needs of the UAE market. Our commitment
        to excellence and deep local expertise empowers your business to
        navigate challenges and seize opportunities for growth and success.
        Trust Zahads for unparalleled professional support in your business
        journey.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-20 my-10">
        <div className="flex flex-col items-center">
          <FaBolt className="text-4xl mb-2 text-ambition-gold" />
          <p className="text-lg text-secondary sm:text-xl font-lato font-bold">Quick Response</p>
        </div>

        <div className="flex flex-col items-center">
          <FaChartLine className="text-4xl mb-2 text-ambition-gold" />
          <p className="text-lg sm:text-xl font-lato text-secondary font-bold">Value Addition</p>
        </div>

        <div className="flex flex-col items-center">
          <FaHandshake className="text-4xl mb-2 text-ambition-gold" />
          <p className="text-lg text-secondary sm:text-xl font-lato font-bold">
            100% Client Satisfaction
          </p>
        </div>
      </div>

      <div className="flex flex-wrap md:mt-6 mt-4 gap-3 sm:gap-4 justify-center items-center">
        <Link href="/contact">
          <p className="bg-ambition-gold text-authority-black font-lato font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-opacity-90 transition">
            Get a free quote
          </p>
        </Link>
        <Link href="#services" className="font-lato underline text-sm sm:text-base text-secondary hover:text-ambition-gold transition">
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default Introduction;