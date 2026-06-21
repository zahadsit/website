'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import img from '@/assets/Logo1.png';
import WhiteLogo from '@/assets/logoWhite.png';
import {
  accountingTax,
  assurances,
  businessSetup,
  businessSetupServices,
  certifications,
  resources,
  services,
  taxation,
} from '@/data';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { PopupButton } from '@typeform/embed-react';
import { usePathname } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';
import ContactActionButton from "../ContactActionButton";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState<string>('');
  const [toggleMenu, setToggleMenu] = useState<string>('');
  const navbarRef = useRef(null);
  const pathName = usePathname();

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only blog pages always white, all other pages transparent until scrolled
      if (!pathName.startsWith('/blogs') && window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathName]);

  function handleToggleSubMenu(id: string) {
    if (toggleSubMenu === id) {
      setToggleSubMenu('');
    } else {
      setToggleSubMenu(id);
    }
  }

  function handleToggleMenu(id: string) {
    if (toggleMenu === id) {
      setToggleMenu('');
    } else {
      setToggleMenu(id);
    }
  }

  function handleLinkClick() {
    setShowMenu(false);
    setToggleSubMenu('');
    setToggleMenu('');
  }

  // Transparent on all pages except /blogs and blog detail pages, when not scrolled
  const isBlogPage =
    pathName.startsWith("/blogs") || pathName.startsWith("/trade-license"); ;
  const isTransparent = !isBlogPage && !hasScrolled;
  return (
    <div
      ref={navbarRef}
      className={`fixed top-0 left-0 z-50 flex w-full py-1 items-center justify-between md:px-24 px-6 transition-all duration-300 ${
        isBlogPage
          ? "bg-white shadow-md"
          : isTransparent
          ? "bg-transparent"
          : "bg-white shadow-md"
      }`}
    >
      <Link href={"/"} className="">
        <Image
          src={img}
          alt="logo"
          width={80}
          className={`w-24 md:w-32 md:h-28 h-20 object-cover  mt-5 transition-all duration-300 ${
            isBlogPage || hasScrolled ? "" : "filter brightness-0 invert"
          }`}
        />
      </Link>
      <div className="md:hidden block">
        {showMenu ? (
          <X
            size={24}
            className={
              pathName.startsWith("/blogs") || hasScrolled || pathName !== "/"
                ? "text-primary"
                : "text-white"
            }
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <Menu
            size={24}
            className={
              pathName.startsWith("/blogs") || hasScrolled || pathName !== "/"
                ? "text-primary"
                : "text-white"
            }
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
        {showMenu && (
          <div className="absolute shadow-md py-5 top-[105px] px-5  left-2.5 z-[999] w-[95vw] mx-auto bg-white">
            <div className="flex flex-col gap-2">
              {/* Business Setup Section */}
              <div
                className="flex flex-row justify-between items-center"
                onClick={() => handleToggleMenu("business-setup")}
              >
                <h4 className="text-sm">Business Setup</h4>
                {toggleMenu == "business-setup" ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {businessSetupServices.map((item) => (
                <div
                  key={item.id}
                  className={`flex pl-2 flex-col gap-1 ${
                    toggleMenu == "business-setup" ? "block" : "hidden"
                  }`}
                >
                  <div
                    className="flex flex-row justify-between items-center"
                    onClick={() => handleToggleSubMenu(item.id)}
                  >
                    <h4 className="text-sm">{item.title}</h4>
                    {toggleSubMenu == item.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  <div
                    className={`flex flex-col gap-1 ${
                      toggleSubMenu == item.id ? "block" : "hidden"
                    }`}
                  >
                    {item.subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`${subItem.id}`} // Ensured matching link structure
                        onClick={handleLinkClick}
                      >
                        <p className="text-sm pl-4 text-gray-700 hover:text-primary hover:bg-primary/10">
                          {subItem.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Accounting & Tax Section */}
              {accountingTax.map((item) => (
                <div key={item.id} className={`flex flex-col gap-1`}>
                  <div
                    className="flex flex-row justify-between items-center"
                    onClick={() => handleToggleSubMenu(item.id)}
                  >
                    <h4 className="text-sm">{item.title}</h4>
                    {toggleSubMenu == item.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  <div
                    className={`flex flex-col gap-1 ${
                      toggleSubMenu == item.id ? "block" : "hidden"
                    }`}
                  >
                    {item.subservices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/accounting/${subItem.id}`} // Matching link structure
                        onClick={handleLinkClick}
                      >
                        <p className="text-sm pl-2 text-gray-700 hover:text-primary hover:bg-primary/10">
                          {subItem.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Taxation Section */}
              {taxation.map((item) => (
                <div key={item.id} className={`flex flex-col gap-1`}>
                  <div
                    className="flex flex-row justify-between items-center"
                    onClick={() => handleToggleSubMenu(item.id)}
                  >
                    <h4 className="text-sm">{item.title}</h4>
                    {toggleSubMenu == item.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  <div
                    className={`flex flex-col gap-1 ${
                      toggleSubMenu == item.id ? "block" : "hidden"
                    }`}
                  >
                    {item.subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/taxation/${subItem.id}`} // Matching link structure
                        onClick={handleLinkClick}
                      >
                        <p className="text-sm pl-4 text-gray-700 hover:text-primary hover:bg-primary/10">
                          {subItem.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Services Section */}
              {services.map((item) => (
                <div
                  key={item.id}
                  className={`flex pl-2 flex-col gap-1 ${
                    toggleMenu == "services" ? "block" : "hidden"
                  }`}
                >
                  <div
                    className="flex flex-row justify-between items-center"
                    onClick={() => handleToggleSubMenu(item.id)}
                  >
                    <h4 className="text-sm">{item.title}</h4>
                    {toggleSubMenu == item.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  <div
                    className={`flex flex-col gap-1 ${
                      toggleSubMenu == item.id ? "block" : "hidden"
                    }`}
                  >
                    {item.subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/services/${subItem.id}`} // Matching link structure
                        onClick={handleLinkClick}
                      >
                        <p className="text-sm pl-4 text-gray-700 hover:text-primary hover:bg-primary/10">
                          {subItem.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Software Section */}
              {certifications[1].subServices.map((subItem) => (
                <Link
                  key={subItem.id}
                  href={`/certifications/${subItem.id}`} // Matching link structure for Software
                  onClick={handleLinkClick}
                >
                  <p className="text-sm pl-4 text-gray-700 hover:text-primary hover:bg-primary/10">
                    {subItem.title}
                  </p>
                </Link>
              ))}

              {/* Resources Section */}
              {resources.map((item) => (
                <Link
                  href={`/${item.id}`}
                  key={item.id}
                  className={`flex pl-2 flex-col gap-1 ${
                    toggleMenu == "resources" ? "block" : "hidden"
                  }`}
                  onClick={handleLinkClick}
                >
                  <div className="flex flex-row justify-between items-center">
                    <h4 className="text-sm">{item.title}</h4>
                  </div>
                </Link>
              ))}

              <PopupButton
                id="naqPzEEo"
                className="text-primary py-2 border-2 border-primary px-4 font-medium"
              >
                Cost Calculator
              </PopupButton>
              <Link
                className="w-full"
                href={"/blogs"}
                onClick={handleLinkClick}
              >
                <button className="w-full border border-primary bg-primary text-white py-2">
                  Our Blogs
                </button>
              </Link>
              <Link
                className="w-full"
                href={"/contact"}
                onClick={handleLinkClick}
              >
                <button className="w-full border border-primary bg-primary text-white py-2">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex flex-col items-end">
        <ul className="flex items-center space-x-2 text-sm my-3">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/contact", label: "Contact" },
            { href: "/blogs", label: "Blogs" },
          ].map(({ href, label }) => {
            const isActive = pathName === href;

            return (
              <li
                key={href}
                className={`border-b hover:rounded-md group transition duration-300 py-2 hover:border-primary hover:bg-secondary ${
                  isActive
                    ? isTransparent
                      ? "border-white " // active border white when transparent
                      : "border-primary " // active border primary otherwise
                    : "border-transparent"
                }`}
              >
                <Link
                  href={href}
                  className={`py-2 px-4 text-sm transition-colors duration-300 ${
                    isTransparent
                      ? "text-white group-hover:text-black"
                      : "text-black"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="items-center space-x-2 text-sm flex">
          <div className="relative group">
            <div className="flex gap-2 items-center justify-between">
              <p
                className={`text-sm ${
                  isTransparent ? "text-white" : "text-black"
                }`}
              >
                Taxation
              </p>
              <ChevronDown
                size={15}
                className={`group-hover:rotate-180 transition-transform ${
                  isTransparent ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div className="absolute hidden group-hover:block bg-white w-[900px] top-5 left-0 px-3 py-2 shadow-lg rounded-lg z-10">
              <div className="grid grid-cols-3 gap-4 px-2 py-2">
                {/* Corporate Tax Section */}
                <div>
                  <h4 className="font-bold mb-2 text-sm">Corporate Tax</h4>
                  <div className="flex flex-col space-y-1">
                    {taxation[0].subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/taxation/${subItem.id}`}
                        className="block text-sm text-gray-700 hover:text-black hover:bg-secondary/10 px-2 py-1 rounded-md"
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Value Added Tax Section */}
                <div>
                  <h4 className="font-bold mb-2 text-sm">
                    Value Added Tax (VAT)
                  </h4>
                  <div className="flex flex-col space-y-1">
                    {taxation[1].subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/taxation/${subItem.id}`}
                        className="block text-sm text-gray-700 hover:text-black hover:bg-secondary/10 px-2 py-1 rounded-md"
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Excise Tax Section */}
                <div>
                  <h4 className="font-bold mb-2 text-sm">Excise Tax</h4>
                  <div className="flex flex-col space-y-1">
                    {taxation[2].subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/taxation/${subItem.id}`}
                        className="block text-sm text-gray-700 hover:text-black hover:bg-secondary/10 px-2 py-1 rounded-md"
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="flex flex-row items-center">
              <button
                className={`py-2 px-4 text-sm ${
                  isTransparent ? "text-white" : "text-black"
                }`}
              >
                Accounting
              </button>
              <ChevronDown
                size={15}
                className={`group-hover:rotate-180 transition-all ${
                  isTransparent ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg ">
              <div className="grid grid-cols-1 w-[230px] gap-4 px-2 py-3">
                {accountingTax[0].subservices.map((item) => (
                  <Link
                    key={item.id}
                    href={`/accounting/${item.id}`}
                    className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="flex flex-row items-center">
              <button
                className={`py-2 px-4 text-sm ${
                  isTransparent ? "text-white" : "text-black"
                }`}
              >
                Assurance
              </button>
              <ChevronDown
                size={15}
                className={`group-hover:rotate-180 transition-all ${
                  isTransparent ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg ">
              <div className="grid grid-cols-1 w-[230px] gap-4 px-2 py-3">
                {assurances[0].subservices.map((item) => (
                  <Link
                    key={item.id}
                    href={`/assurance/${item.id}`}
                    className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="flex gap-2 flex-row items-center justify-between">
              <p
                className={`text-sm ${
                  isTransparent ? "text-white" : "text-black"
                }`}
              >
                Business Setup & Advisory
              </p>
              <ChevronDown
                size={15}
                className={`group-hover:rotate-180 transition-all ${
                  isTransparent ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div
              className="absolute 
             hidden group-hover:block
           bg-white w-[600px] top-5 px-4 py-2 shadow-lg "
            >
              <div className="grid grid-cols-3 gap-4 px-2 py-3">
                <div>
                  <h4 className="font-bold mb-2">Free Zones</h4>
                  <div className="flex flex-col space-y-2">
                    {businessSetupServices[0].subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`${subItem.id}`}
                        className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Advisory</h4>
                  <div className="flex flex-col space-y-2">
                    {businessSetupServices[1].subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`${subItem.id}`}
                        className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Strategy</h4>
                  <div className="flex flex-col space-y-2">
                    {businessSetupServices[2].subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`${subItem.id}`}
                        className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="flex flex-row justify-between items-center">
              <button
                className={`py-2 px-4 text-sm ${
                  isTransparent ? "text-white" : "text-black"
                }`}
              >
                Certification & Software
              </button>
              <ChevronDown
                size={15}
                className={`group-hover:rotate-180 transition-all ${
                  isTransparent ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div
              className="absolute ml-[-200px]
             hidden group-hover:block
           bg-white w-[500px] px-4 py-2 shadow-lg"
            >
              <div className="grid grid-cols-2 gap-4 px-2 py-3">
                <div>
                  <h4 className="font-bold mb-2">Certification</h4>
                  <div className="flex flex-col space-y-2">
                    {certifications[0].subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`${subItem.id}`}
                        className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* <div>
                <h4 className="font-bold mb-2">Operational Services</h4>
                <div className="flex flex-col space-y-2">
                  {services[1].subServices.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={`/services/${subItem.id}`}
                      className="block mt-1 text-sm text-gray-700 hover:text-secondary hover:bg-secondary/5 px-2 py-1"
                      onClick={handleLinkClick}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div> */}
                <div>
                  <h4 className="font-bold mb-2">Software</h4>
                  <div className="flex flex-col space-y-2">
                    {certifications[1].subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`${subItem.id}`}
                        className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="relative group">
            <div className="flex flex-row items-center justify-between">
              <button
                className={`${
                  pathName != '/' || (pathName == '/' && hasScrolled)
                    ? 'text-black'
                    : 'text-black'
                } transition-all py-2 px-4 text-sm `}
              >
                Resources
              </button>
              <ChevronDown
                size={15}
                className={` group-hover:rotate-180 transition-all ${
                  pathName != '/' || (pathName == '/' && hasScrolled)
                    ? 'text-black'
                    : 'text-black'
                }`}
              />
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg ">
              <div className="flex flex-col gap-2 px-2 py-3 w-[200px]">
                {resources.map((item) => (
                  <Link
                    key={item.id}
                    href={`/${item.id}`}
                    className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div> */}
          
<ContactActionButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
