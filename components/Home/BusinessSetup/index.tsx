import React from "react";
import { FaBuilding, FaIdBadge, FaHandshake } from "react-icons/fa";
import img from "@/assets/images/home-bs.jpg";
import img2 from "@/assets/images/home-bs-2.jpg";
import img3 from "@/assets/images/home-bs-3.jpg";
import img4 from "@/assets/images/home-bs-4.jpg";
import Link from 'next/link'
import {
  FaBriefcase,
  FaFileInvoice,
  FaChartLine,
  FaUniversity,
  FaShieldAlt,
  FaVideo,
} from "react-icons/fa";

const BusinessSetupSection: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Section 1 - Business Setup (Growth Green) */}
      <section className="flex flex-col md:flex-row items-center bg-growth-green text-clarity-white">
        <div className="md:w-1/2 mb-8 lg:mb-0 p-8 md:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-clarity-white mb-4 pl-2 border-l-4 border-ambition-gold text-secondary">
            Need help setting up your business?
          </h2>
          <p className="md:text-lg text-secondary mb-8">
            Starting a business in the UAE can be a complex process, but our
            team of experts is here to make it easy. Zahads offers comprehensive
            solutions for setting up your business in free zones or the
            mainland, ensuring that you are fully compliant with local
            regulations.
          </p>

          <div className="space-y-6 text-secondary">
            {/* Feature 1 */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-ambition-gold/20 group-hover:bg-ambition-gold/40 transition-all">
                <FaBuilding className="w-5 h-5 text-ambition-gold group-hover:text-clarity-white transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-clarity-white flex items-center">
                  <span className="mr-2">Company Formation and Licensing</span>
                  {/* <span className="text-ambition-gold">✦</span> */}
                </h4>
                <p className="text-clarity-white/80">
                  Fast and reliable company setup services across various free
                  zones and mainland regions.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-ambition-gold/20 group-hover:bg-ambition-gold/40 transition-all">
                <FaIdBadge className="w-5 h-5 text-ambition-gold group-hover:text-clarity-white transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-clarity-white flex items-center">
                  <span className="mr-2">UAE Residence Visa</span>
                  {/* <span className="text-ambition-gold">✦</span> */}
                </h4>
                <p className="text-clarity-white/80">
                  Assistance in obtaining residency visas for business owners,
                  employees, and their families.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-ambition-gold/20 group-hover:bg-ambition-gold/40 transition-all">
                <FaHandshake className="w-5 h-5 text-ambition-gold group-hover:text-clarity-white transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-clarity-white flex items-center">
                  <span className="mr-2">Business Sponsorship</span>
                  {/* <span className="text-ambition-gold">✦</span/> */}
                </h4>
                <p className="text-clarity-white/80">
                  Help in finding a reliable UAE national sponsor for your
                  business needs.
                </p>
              </div>
            </div>
          </div>

          <Link href="/contact" className="mt-8 bg-ambition-gold text-authority-black px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-bold flex items-center w-fit group">
            Enquire Now
            <span className="ml-2 group-hover:translate-x-1 transition-all">
              →
            </span>
          </Link>
        </div>

        <div className="md:w-1/2">
          <img
            src={img.src}
            alt="Business Setup"
            className="w-full h-[80vh] object-cover"
          />
        </div>
      </section>

      {/* Section 2 - Finances (Trust Blue) */}
      <section className="flex flex-col md:flex-row-reverse items-center bg-trust-blue text-clarity-white">
        <div className="md:w-1/2 mb-8 lg:mb-0 p-8 md:px-16 text-secondary">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-clarity-white mb-4 pl-2 border-l-4 border-ambition-gold">
            Need help with your finances?
          </h2>
          <p className="md:text-lg text-clarity-white/90 mb-8">
            Managing your finances is critical to your business's success. Our
            team of tax and accounting experts provide tailored services to
            ensure you comply with UAE regulations and optimize your financial
            strategies.
          </p>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-ambition-gold/20 group-hover:bg-ambition-gold/40 transition-all">
                <FaBriefcase className="w-5 h-5 text-ambition-gold group-hover:text-clarity-white transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-clarity-white flex items-center">
                  <span className="mr-2">Corporate Tax Planning</span>
                  {/* <span className="text-ambition-gold">✦</span> */}
                </h4>
                <p className="text-clarity-white/80">
                  Maximize your savings with strategic tax planning and
                  compliance support.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-ambition-gold/20 group-hover:bg-ambition-gold/40 transition-all">
                <FaFileInvoice className="w-5 h-5 text-ambition-gold group-hover:text-clarity-white transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-clarity-white flex items-center">
                  <span className="mr-2">VAT Compliance and Filing</span>
                  {/* <span className="text-ambition-gold">✦</span> */}
                </h4>
                <p className="text-clarity-white/80">
                  Expert guidance for VAT registration and ongoing compliance.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-ambition-gold/20 group-hover:bg-ambition-gold/40 transition-all">
                <FaChartLine className="w-5 h-5 text-ambition-gold group-hover:text-clarity-white transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-clarity-white flex items-center">
                  <span className="mr-2">Financial Reporting</span>
                  {/* <span className="text-ambition-gold">✦</span> */}
                </h4>
                <p className="text-clarity-white/80">
                  Detailed financial reports and thorough audits to ensure your
                  financial integrity.
                </p>
              </div>
            </div>
          </div>

          <Link href="/contact" className="w-fit mt-8 bg-ambition-gold text-black px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-bold flex items-center group">
            Enquire Now
            <span className="ml-2 group-hover:translate-x-1 transition-all">
              →
            </span>
          </Link>
        </div>

        <div className="md:w-1/2">
          <img
            src={img2.src}
            alt="Financial Services"
            className="w-full h-[80vh] object-cover"
          />
        </div>
      </section>

      {/* Section 3 - Operations (Growth Green) */}
      <section className="flex flex-col md:flex-row items-center bg-growth-green text-clarity-white">
        <div className="md:w-1/2 mb-8 lg:mb-0 p-8 md:px-16 text-secondary">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-clarity-white mb-4 pl-2 border-l-4 border-ambition-gold">
            Ensure smooth operations for your business.
          </h2>
          <p className="md:text-lg text-clarity-white/90 mb-8">
            Running a successful business in the UAE requires more than just
            setting up; it involves staying compliant and managing essential
            services. Zahads provides all the support you need to operate
            efficiently and within the law.
          </p>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-ambition-gold/20 group-hover:bg-ambition-gold/40 transition-all">
                <FaUniversity className="w-5 h-5 text-ambition-gold group-hover:text-clarity-white transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-clarity-white flex items-center">
                  <span className="mr-2">Bank Account Opening</span>
                  {/* <span className="text-ambition-gold">✦</span> */}
                </h4>
                <p className="text-clarity-white/80">
                  Assistance in opening business bank accounts with top UAE
                  banks.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-ambition-gold/20 group-hover:bg-ambition-gold/40 transition-all">
                <FaShieldAlt className="w-5 h-5 text-ambition-gold group-hover:text-clarity-white transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-clarity-white flex items-center">
                  <span className="mr-2">Compliance Services</span>
                  {/* <span className="text-ambition-gold">✦</span> */}
                </h4>
                <p className="text-clarity-white/80">
                  Ensure your business adheres to local regulations and avoid
                  costly penalties.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-ambition-gold/20 group-hover:bg-ambition-gold/40 transition-all">
                <FaVideo className="w-5 h-5 text-ambition-gold group-hover:text-clarity-white transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-clarity-white flex items-center">
                  <span className="mr-2">PRO and Visa Services</span>
                  {/* <span className="text-ambition-gold">✦</span> */}
                </h4>
                <p className="text-secondary">
                  Streamlined visa processing and public relations officer
                  services to handle government-related tasks.
                </p>
              </div>
            </div>
          </div>

          <Link href="/contact"  className="w-fit mt-8 bg-ambition-gold text-black px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-bold flex items-center group">
            Enquire Now
            <span className="ml-2 group-hover:translate-x-1 transition-all">
              →
            </span>
          </Link>
        </div>

        <div className="md:w-1/2">
          <img
            src={img3.src}
            alt="Business Operations"
            className="w-full h-[80vh] object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse items-center bg-white text-clarity-white">
        <div className="md:w-1/2 mb-8 lg:mb-0 p-8 md:px-16 text-secondary">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-trust-blue mb-4 pl-2 border-l-4 border-ambition-gold">
Refer & Earn – Share Savings, Grow Together!          </h2>
          <p className="md:text-lg text-trust-blue mb-8">
At Zahads, we believe good financial advice is worth sharing — and now, it pays to do so! When you refer a friend, colleague, or business to our professional financial and tax services, you both enjoy exclusive rewards and discounts.
          </p>

          <div className="space-y-6">
            {/* Feature 4 */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-ambition-gold/20 group-hover:bg-ambition-gold/40 transition-all">
                <FaHandshake className="w-5 h-5 text-ambition-gold group-hover:text-clarity-white transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-clarity-white flex items-center">
                  <span className="mr-2"></span>
                  {/* <span className="text-ambition-gold">✦</span> */}
                </h4>
                <p className="text-trust-blue">
                  Refer someone to Zahads for any of our financial solutions.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-ambition-gold/20 group-hover:bg-ambition-gold/40 transition-all">
                <FaFileInvoice className="w-5 h-5 text-ambition-gold group-hover:text-clarity-white transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-clarity-white flex items-center">
                  <span className="mr-2"></span>
                  {/* <span className="text-ambition-gold">✦</span> */}
                </h4>
                <p className="text-trust-blue">
When they sign up, both of you receive special savings on your next service.
</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-ambition-gold/20 group-hover:bg-ambition-gold/40 transition-all">
                <FaIdBadge className="w-5 h-5 text-ambition-gold group-hover:text-clarity-white transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-clarity-white flex items-center">
                  <span className="mr-2"></span>
                  {/* <span className="text-ambition-gold">✦</span> */}
                </h4>
                <p className="text-trust-blue">
                  The more you refer, the more you earn — it’s that simple!
                </p>
              </div>
            </div>
          </div>

          <Link href="/contact" className="w-fit mt-8 bg-ambition-gold text-black px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-bold flex items-center group">
            Enquire Now
            <span className="ml-2 group-hover:translate-x-1 transition-all">
              →
            </span>
          </Link>
        </div>

        <div className="md:w-1/2">
          <img
            src={img4.src}
            alt="Financial Services"
            className="w-full h-[80vh] object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default BusinessSetupSection;
