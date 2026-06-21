// Footer.tsx
import React from 'react';
import logo from '@/assets/Logo1.png';
import { FaLocationDot } from 'react-icons/fa6';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A2A3A] text-[#E0E0E0] py-10 px-8 md:px-16">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {/* Column 1 - Logo & Contact */}
          <div className="w-full mb-8 md:mb-0 sm:col-span-2">
            <Link href="/">
              <img src={logo.src} alt="logo" className="w-56 mb-4 filter brightness-0 invert cursor-pointer" />
            </Link>
            <p className="mb-2 text-[#E0E0E0]/80">Business Setup in Dubai</p>
            <p className="text-[#E0E0E0]/80">Office 1834, Tamani Arts Offices, Al Asayel Street, Business Bay, Dubai, UAE.</p>
            <a
              href="https://maps.app.goo.gl/BRApGeA6AgFQBJPq9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ambition-gold hover:bg-[#5F9EA0] text-[#1A2A3A] mt-5 p-3 flex items-center w-fit gap-2 transition-colors"
            >
              <FaLocationDot className="text-xl" />
              Open in Google Maps
            </a>
            <div className="flex justify-start space-x-4 mt-5">
              <a 
                href="https://www.linkedin.com/company/zahads-chartered-accountants/" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#2C3E50] rounded-full p-2 hover:bg-[#5F9EA0] hover:border-[#5F9EA0] transition-colors"
              >
                <FaLinkedin className="text-xl text-[#E0E0E0]" />
              </a>
              <a 
                href="https://wa.me/971501234567" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#2C3E50] rounded-full p-2 hover:bg-[#5F9EA0] hover:border-[#5F9EA0] transition-colors"
              >
                <FaWhatsapp className="text-xl text-[#E0E0E0]" />
              </a>
              <a 
                href="https://www.instagram.com/zahads_official/" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#2C3E50] rounded-full p-2 hover:bg-[#5F9EA0] hover:border-[#5F9EA0] transition-colors"
              >
                <FaInstagram className="text-xl text-[#E0E0E0]" />
              </a>
              <a 
                href="https://www.facebook.com/people/Zahads/61577095744817/#" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#2C3E50] rounded-full p-2 hover:bg-[#5F9EA0] hover:border-[#5F9EA0] transition-colors"
              >
                <FaFacebook className="text-xl text-[#E0E0E0]" />
              </a>
            </div>
          </div>

          {/* Business Setup & Advisory */}
          <div className="w-full mb-8 md:mb-0">
            <h2 className="text-ambition-gold mb-4">Business Setup & Advisory</h2>
            <ul>
              {[
                { text: 'Business Setup in Freezone', link: '/business-setup/freezone-overview' },
                { text: 'Business Setup in UAE Mainland', link: '/business-setup/mainland-overview' },
                { text: 'Pro Services', link: '/services/pro-services' },
                { text: 'Golden Visa', link: '/services/golden-visa-uae' },
                { text: 'Anti Money Laundering (AML)', link: '/services/aml' },
                { text: 'Economic Substance Regulation (ESR)', link: '/services/esr' },
                { text: 'Ultimate Beneficial Ownership (UBO)', link: '/services/ubo' },
                { text: 'Business Plan', link: '/start-a-business' },
                { text: 'Feasibility Study', link: '/guides' },
                { text: 'Business Valuation', link: '/trade-license' }
              ].map((item) => (
                <li key={item.text} className="mb-2 group">
                  <Link
                    href={item.link}
                    className="text-[#E0E0E0]/80 hover:text-[#5F9EA0] group-hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accounting */}
          <div className="w-full mb-8 md:mb-0">
            <h2 className="text-ambition-gold mb-4">ACCOUNTING</h2>
            <ul>
              {[
                { text: 'Accounting & Bookkeeping Service', link: '/accounting/accounting-bookkeeping' },
                { text: 'Outsourced CFO Service', link: '/accounting/outsourced-cfo' },
                { text: 'Backlog Accounting', link: '/accounting/backlog-accounting' },
                { text: 'IFRS Implementation', link: '/accounting/ifrs-implementation' },
                { text: 'Registration Process', link: '/start-a-business' },
                { text: 'Bank Reconciliation', link: '/accounting/bank-reconciliation' }
              ].map((item) => (
                <li key={item.text} className="mb-2 group">
                  <Link
                    href={item.link}
                    className="text-[#E0E0E0]/80 hover:text-[#5F9EA0] group-hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Assurance */}
          <div className="w-full mb-8 md:mb-0">
            <h2 className="text-ambition-gold mb-4">ASSURANCE</h2>
            <ul>
              {[
                { text: 'External Audit Service', link: '/assurance/external-audit' },
                { text: 'Internal Audit Service', link: '/assurance/internal-audit' },
                { text: 'Forensic Audit Service', link: '/assurance/forensic-audit' },
                { text: 'Inventory Audit Service', link: '/assurance/inventory-audit' },
                { text: 'Asset Verification Service', link: '/assurance/asset-verification' }
              ].map((item) => (
                <li key={item.text} className="mb-2 group">
                  <Link
                    href={item.link}
                    className="text-[#E0E0E0]/80 hover:text-[#5F9EA0] group-hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certification & Software */}
          <div className="w-full">
            <h2 className="text-ambition-gold mb-4">Certification & Software</h2>
            <ul>
              {[
                { text: 'ICV Certification', link: '/services/icv-certification' },
                { text: 'ISO Certification', link: '/services/iso-certification' },
                { text: 'Zoho Books', link: '/services/zoho-books' },
                { text: 'AML Diligence', link: '/services/aml-diligence' }
              ].map((item) => (
                <li key={item.text} className="mb-2 group">
                  <Link
                    href={item.link}
                    className="text-[#E0E0E0]/80 hover:text-[#5F9EA0] group-hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2C3E50] mt-8 pt-8 flex flex-wrap justify-between">
          <p className="text-[#E0E0E0]/60 text-sm md:text-base text-center md:text-left">
            Copyright © {new Date().getFullYear()} Zahads. All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-[#E0E0E0]/60 hover:text-[#5F9EA0] text-sm md:text-base">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-[#E0E0E0]/60 hover:text-[#5F9EA0] text-sm md:text-base">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;