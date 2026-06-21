'use client';
import Hero from "@/components/hero";
import React from "react";
import { useParams } from "next/navigation";
import Slogan from "@/components/slogan";
import { accounting } from "@/data/accounting";
import { useEffect } from "react";

const ClientAccountingPage = () => {
  const params = useParams();
  const service = accounting.find((service) => service.id === params.slug);

  // Set metadata client-side as fallback
  useEffect(() => {
    if (service) {
      document.title = service.title || "Accounting Services | Zahads";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', service.subtitle || "Professional accounting services in UAE");
      }
    }
  }, [service]);

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Service not found</p>
      </div>
    );
  }

  return (
    <div>
      <Hero
        title={service.title}
        description={service.subtitle}
        img={service.img}
        btnText={service.btnTxt}
      />

      <div className="bg-[#f3f4f6] py-40 md:py-24 px-8 md:px-16">
        <div className="mb-10 md:mb-20 max-w-4xl space-y-5">
          <h1 className="text-lg md:text-4xl pl-2 border-l-4 border-trust-blue">
            {service.keyPoints.title}
          </h1>
          <p className="text-base md:text-lg">
            {service.keyPoints.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.keyPoints.points.map((point, index) => (
            <div
              key={index}
              className="text-center md:text-left border-t-2 border-trust-blue pt-14 px-5 relative"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-ambition-gold text-lg text-black absolute top-0 -translate-y-1/2 flex items-center justify-center rounded-full left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0">
                {React.createElement(point.icon, {
                  className: "text-3xl md:text-4xl",
                })}
              </div>
              <h3 className="text-lg md:text-xl mb-2 text-trust-blue">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        {service.services.map((item, index) => (
          <div
            key={index}
            className={`w-full flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } justify-between even:bg-[#F5F9EB]`}
          >
            <div className="w-full md:w-1/2 shrink-0 px-8 md:px-16 py-10 md:py-20">
              <h2 className="text-2xl md:text-3xl mt-3 font-mont border-l-4 pl-2 border-ambition-gold text-growth-green">
                {item.title}
              </h2>
              <p className="mt-4 tracking-wide text-gray-500 text-sm md:text-base font-normal">
                {item.description}
              </p>
            </div>

            <div className="w-full md:w-1/2 shrink-0 overflow-hidden cursor-pointer">
              <img
                src={item.img}
                className="w-full h-[60vh] object-cover"
                alt={item.title || "Financial service"}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      <Slogan />
    </div>
  );
};

export default ClientAccountingPage;