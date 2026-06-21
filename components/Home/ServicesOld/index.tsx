import Bar from "@/components/Bar";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";
import {
  HiOutlineCode,
  HiOutlineCalculator,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineClipboardList,
  HiOutlineBriefcase,
  HiOutlineBookOpen,
} from "react-icons/hi";
import { HiOutlineBanknotes } from "react-icons/hi2";

const Services = () => {
  const services = [
    {
      name: "Software Solutions",
      description: "Custom software tailored to your business needs.",
      href: "/services/aml-diligence",
      icon: <HiOutlineCode size={24} className="text-white" />,
    },
    {
      name: "Accounting Services",
      description: "Comprehensive accounting services for your business.",
      href: "/accounting/accounting-bookkeeping",
      icon: <HiOutlineCalculator size={24} className="text-white" />,
    },
    {
      name: "Tax Advisory",
      description: "Expert tax advice to help you stay compliant.",
      href: "/services/aml",
      icon: <HiOutlineDocumentText size={24} className="text-white" />,
    },
    {
      name: "Compliance Services",
      description: "Ensuring regulatory compliance for your business.",
      href: "/services/compliance-services",
      icon: <HiOutlineShieldCheck size={24} className="text-white" />,
    },
    {
      name: "Bank Account Opening Services",
      description: "Hassle-free bank account opening assistance.",
      href: "accounting/accounting-bookkeeping",
      icon: <HiOutlineBanknotes size={24} className="text-white" />,
    },
    {
      name: "Audit & Assurance",
      description: "Audit and assurance services for accurate reporting.",
      href: "assurance/external-audit",
      icon: <HiOutlineClipboardList size={24} className="text-white" />,
    },
    {
      name: "Business Setup",
      description: "Set up your business with ease and efficiency.",
      href: "/start-a-business",
      icon: <HiOutlineBriefcase size={24} className="text-white" />,
    },
    {
      name: "Golden Visa",
      description: "Get your UAE Golden Visa with expert guidance.",
      href: "/services/golden-visa-uae",
      icon: <HiOutlineBookOpen size={24} className="text-white" />,
    },
  ];

  return (
    <div id="services" className="md:px-16 py-16 px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-mont mb-2 text-center flex justify-center items-center">
        <span className="border-b-4 border-primary pb-2">Our Services</span>
      </h2>
      <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {services.map((service) => (
            <Link
              href={service.href}
              key={service.name}
              className="group cursor-pointer relative w-full h-[250px] flex flex-col justify-end bg-ambition-gold p-5 overflow-hidden rounded-lg"
            >
              <div>
                <div className="p-2.5 bg-trust-blue  w-fit mb-3 rounded-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium">{service.name}</h3>
                <p className="text-sm mt-2 text-tertiary	">
                  {service.description}
                </p>
              </div>
              <LuArrowUpRight size={30} className="absolute right-5 bottom-5 translate-y-20 group-hover:translate-y-0 text-3xl transition duration-300  bg-trust-blue rounded-full text-secondary" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
