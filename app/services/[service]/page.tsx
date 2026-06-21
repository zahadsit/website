'use client';
import Hero from '@/components/hero';
import Slogan from '@/components/slogan';
import AMLContact from '@/components/AMLContact';
import React from 'react';
import { services } from '@/data/services';
import { useParams } from 'next/navigation';

const page = () => {
  const { service } = useParams();
  const serviceObj = services.find((s) => s.id === service);

  return (
    serviceObj && (
      <div>
        {/* Hero Section */}
        <Hero
          title={serviceObj?.title}
          description={serviceObj?.subtitle}
          btnText={serviceObj?.btnTxt}
          img={serviceObj?.img}
        />

        <div className="bg-[#f3f4f6] py-28 md:py-24 px-8 md:px-16 ">
          <div className="mb-10 md:mb-20 max-w-4xl mx-auto space-y-5">
            <h1 className="text-md md:text-4xl pl-2 border-l-4 border-ambition-gold text-trust-blue">
              {serviceObj?.keyPoints.title}
            </h1>
            <p className='text-gray-600' >{serviceObj?.keyPoints.description}</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {serviceObj?.keyPoints.points.map((point, index) => (
              <div
                key={index}
                className="text-center md:text-left border-t-2 border-trust-blue pt-14 px-5 relative"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-ambition-gold text-lg text-black absolute top-0 -translate-y-1/2 flex items-center justify-center rounded-full left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0">
                  {React.createElement(point.icon, {
                    className: 'text-3xl md:text-4xl',
                  })}
                </div>
                <h3 className="text-lg md:text-xl mb-2 text-growth-green">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Account Opening Services Section */}
        <div className="my-20 px-8 md:px-16">
          <h2 className="text-3xl md:text-4xl font-mont text-center flex justify-center items-center">
            <span className="border-b-4 border-trust-blue pb-2">
              {serviceObj?.services.title}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {serviceObj?.services.points.map((point, index) => (
              <div
                key={index}
                className="bg-secondary overflow-hidden flex flex-col"
              >
                <div className="p-6">
                  <h3 className="text-lg md:text-xl pl-4 border-l-4 border-ambition-gold text-growth-green mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 mb-5">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-20 px-8 md:px-16">
          <h2 className="text-3xl md:text-4xl font-mont text-center flex justify-center items-center">
            <span className="border-b-4 border-trust-blue text-growth-green pb-2">
              {serviceObj.guide.title}
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-10 mt-10">
            {/* Guide Links */}
            <div className="p-5 border md:w-1/3 h-fit">
              <ul className="text-lg text-gray-800">
                {serviceObj.guide.sectionTitles.map((title, index) => (
                  <li key={index}>
                    <a
                      href={title.href}
                      className="inline-block w-full h-full py-5 px-5 hover:bg-secondary hover:text-ambition-gold transition-colors"
                    >
                      {title.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="md:w-2/3 max-h-[70vh] overflow-auto p-5 border"
              dangerouslySetInnerHTML={{ __html: serviceObj.guide.content }}
            ></div>
          </div>
        </div>

        {/* Contact Section */}
        {service === 'aml' && <AMLContact />}

        {/* Slogan Component */}
        <Slogan />
      </div>
    )
  );
};

export default page;
