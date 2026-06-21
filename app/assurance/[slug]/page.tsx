'use client';
// import ContactForm from '@/components/ContactForm/ContactForm'
// import { accountingServices } from '@/data/accounting';
// import React from 'react'
// import Markdown from 'react-markdown';

// interface AccountingProps {
//     params: {
//         slug: string;
//     };
// }

// const page = ({ params }: AccountingProps) => {

//     const service = accountingServices.find((service) => service.link === params.slug);

//     return (
//         <div className='flex flex-row gap-7 px-32 md:my-44 my-28'>
//             <div className='w-4/5 '>
//                 <Markdown className='markdown'>{service?.content}</Markdown>
//             </div>
//             <div className='md:w-2/5 w-full mx-auto my-20 md:px-0 px-8'>
//                 <ContactForm backgroundColor='#10244810' buttonColor='#102448' title={service ? service.title : "Contact Us"} />
//             </div>
//         </div>
//     )
// }

// export default page

import Hero from '@/components/hero';
import React from 'react';
import { useParams } from 'next/navigation';
import Slogan from '@/components/slogan';

import { assurance } from '@/data/assurance';

const page = () => {
  const { slug } = useParams();
  const service = assurance.find((service) => service.id === slug);

  return (
    service && (
      <div>
        <Hero
          title={service.title}
          description={service.subtitle}
          img={service.img}
          btnText={service.btnTxt}
        />

        <div className="bg-[#f3f4f6] py-16 md:py-24 px-8 md:px-16">
          <div className="mb-10 md:mb-20 max-w-4xl space-y-5">
            <h1 className="text-3xl md:text-4xl pl-2 border-l-4 border-primary">
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
                className="text-center md:text-left border-t-2 border-growth-green pt-14 px-5 relative"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-ambition-gold text-lg text-black absolute top-0 -translate-y-1/2 flex items-center justify-center rounded-full left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0">
                  {React.createElement(point.icon, {
                    className: 'text-3xl md:text-4xl',
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
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
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
                  alt="financial services"
                />
              </div>
            </div>
          ))}
        </div>
        <Slogan />
      </div>
    )
  );
};

export default page;
