'use client';
import Hero from '@/components/hero';
import React from 'react';
import Slogan from '@/components/slogan';
import { useParams } from 'next/navigation';
import { businessSetup } from '@/data/businessSetup';
import Marquee from 'react-fast-marquee';

const page = () => {
  const { slug } = useParams();
  const data = businessSetup.find((item) => item.id === slug);

  return (
    data && (
      <div>
        {/* Hero Section */}
        <Hero
          title={data.title}
          description={data.subtitle}
          img={data.img}
          btnText={data.btnTxt}
        />

        {/* Key Accounting Solutions */}
        <div className="bg-[#f3f4f6] py-24 px-8 md:px-16">
          <div className="mb-20 max-w-4xl space-y-5">
            <h1 className="text-3xl md:text-4xl pl-2 border-l-4 border-primary">
              {data.keyPoints.title}
            </h1>
            <p className="text-base md:text-lg">{data.keyPoints.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8">
            {/* Solution 1 */}
            {data.keyPoints.points.map((point, index) => (
              <div
                key={index}
                className="text-center md:text-left border-t-2 border-[#556D1E] pt-14 px-5 relative"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#556D1E] text-lg text-white absolute top-0 -translate-y-1/2 flex items-center justify-center rounded-full left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0">
                  {React.createElement(point.icon, {
                    className: 'text-3xl md:text-4xl',
                  })}
                </div>
                <h3 className="text-lg md:text-xl mb-2 text-[#556D1E]">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {data.freezonePage && data.areas && (
          <div className="w-full py-10  px-8 md:px-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">
              <span className="md:border-b-4 border-primary pb-2">
                {data.areas.title}
              </span>
            </h1>

            <Marquee className="my-10">
              {' '}
              {data.areas.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Freezone"
                  className="w-28 md:w-36 mx-5"
                />
              ))}
            </Marquee>
          </div>
        )}

        {data.benefits && (
          <div className="w-full flex flex-col md:flex-row justify-between even:bg-[#F5F9EB]">
            <div className="w-full md:w-1/2 overflow-hidden">
              <img
                src={data.benefits.img}
                className="w-full h-full object-cover"
                alt="Freezone Benefits"
              />
            </div>
            <div className="w-full md:w-1/2 px-8 md:px-16 py-20">
              <h2 className="text-3xl md:text-4xl mt-3 font-mont border-l-4 pl-2 border-primary">
                {data.benefits.title}
              </h2>
              {data.benefits.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center my-5 text-gray-600"
                >
                  {React.createElement(benefit.icon, {
                    className: 'text-[#556D1E] text-2xl w-8 h-8 ',
                  })}
                  <p>
                    <strong>{benefit.title}:</strong> {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {data.popularAreas && (
          <div className="flex flex-col py-24 gap-3 px-8 md:px-16">
            <h2 className="text-3xl md:text-4xl font-mont text-center mb-10">
              <span className="border-b-4 border-primary pb-2">
                {data.popularAreas.title}
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {data.popularAreas.images.map((image, index) => (
                <img key={index} src={image} className="w-full h-[40vh]" />
              ))}
            </div>
          </div>
        )}
        {data.requirements && (
          <div className="w-full flex flex-col md:flex-row-reverse justify-between even:bg-[#F5F9EB]">
            <div className="w-full md:w-1/2 overflow-hidden">
              <img
                src={data.requirements.img}
                className="w-full h-full object-cover"
                alt="Freezone Benefits"
              />
            </div>
            <div className="w-full md:w-1/2 px-8 md:px-16 py-20">
              <h2 className="text-3xl md:text-4xl mt-3 font-mont border-l-4 pl-2 border-primary">
                {data.requirements.title}
              </h2>
              {data.requirements.requirements.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center my-5 text-gray-600"
                >
                  {React.createElement(benefit.icon, {
                    className: 'text-[#556D1E] text-2xl',
                  })}
                  <p>
                    <strong> {benefit.title}:</strong> {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.steps && (
          <div className="bg-[#f3f4f6] py-24 px-8 md:px-16">
            <h2 className="border-b-4 border-primary p-2 md:p-0 md:border-none text-3xl md:text-4xl font-mont text-center mb-20">
              <span className="md:border-b-4 border-primary pb-2">
                {data.steps.title}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8">
              {data.steps.steps.map((step, index) => (
                <div
                  key={index}
                  className="text-center md:text-left border-t-2 border-[#556D1E] py-10 px-5 relative"
                >
                  <div className="w-14 h-14 bg-[#556D1E] text-lg text-white absolute top-0 -translate-y-1/2 flex items-center justify-center rounded-full left-0">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg mb-2">{step.title}</h3>

                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Slogan Section */}
        <Slogan />
      </div>
    )
  );
};

export default page;
