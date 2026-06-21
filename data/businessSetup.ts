import { FaCheckCircle } from 'react-icons/fa';
import { LiaHandshakeSolid } from 'react-icons/lia';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { CiClock2 } from 'react-icons/ci';
import hero from '@/assets/images/businessSetup.jpg';
import fz1 from '@/assets/images/freezones/1.png';
import fz2 from '@/assets/images/freezones/2.png';
import fz3 from '@/assets/images/freezones/3.jpeg';
import fz4 from '@/assets/images/freezones/4.png';
import fz5 from '@/assets/images/freezones/5.png';
import fz6 from '@/assets/images/freezones/6.png';
import fz7 from '@/assets/images/freezones/7.png';
import fz8 from '@/assets/images/freezones/8.png';
import fz9 from '@/assets/images/freezones/9.png';
import img1 from '@/assets/images/accounting1.jpg';
import pfz1 from '@/assets/images/freezones/pfz1.webp';
import pfz2 from '@/assets/images/freezones/pfz2.jpg';
import pfz3 from '@/assets/images/freezones/pfz3.jpg';
import {
  MdOutlineAccountBalanceWallet,
  MdHealthAndSafety,
} from 'react-icons/md';
import { GoShieldCheck } from 'react-icons/go';
import { FaRegChartBar, FaPassport } from 'react-icons/fa';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { HiOutlineDocument } from 'react-icons/hi';
import img from '@/assets/images/services.jpg';
import img2 from '@/assets/images/Services/compilance.jpg';
import img3 from '@/assets/images/Services/health.jpg';
import img4 from '@/assets/images/Services/golden_visa.jpg';
import img5 from '@/assets/images/Services/pro_services.jpg';
import img6 from '@/assets/images/Services/well_preparation_Service.jpg';
export const businessSetup = [
  {
    id: 'freezone-overview',
    title: "Set up your business in UAE's most popular freezones.",
    subtitle:
      "Our experts simplify the process of establishing your business in the UAE's freezones, providing comprehensive support every step of the way.",
    img: hero.src,
    btnTxt: 'Start your freezone business today',
    keyPoints: {
      title: 'Key Application Steps for UAE Freezone Business Setup',
      description:
        'Setting up a business in a UAE freezone offers numerous advantages including tax exemptions, full ownership, and simplified setup procedures. Our services ensure a smooth and efficient process for your freezone business setup.',
      points: [
        {
          icon: LiaHandshakeSolid,
          title: 'In-person application',
          description:
            'Your physical presence might be required for certain procedures, including signing documents and submitting original copies.',
        },
        {
          icon: IoDocumentTextOutline,
          title: 'Online application',
          description:
            'For those outside the UAE, an online process can initiate your business setup, with physical presence required at a later stage for verification.',
        },
        {
          icon: CiClock2,
          title: 'Expected Processing Timeline',
          description:
            'Processing times vary by freezone but typically range from 10 to 20 working days.',
        },
      ],
    },
    freezonePage: true,
    areas: {
      title: 'Freezones',
      images: [
        fz1.src,
        fz2.src,
        fz3.src,
        fz4.src,
        fz5.src,
        fz6.src,
        fz7.src,
        fz8.src,
        fz9.src,
      ],
    },
    benefits: {
      title: 'Benefits of Freezones in UAE',
      benefits: [
        {
          icon: FaCheckCircle,
          title: 'Tax Exemptions',
          description:
            'Freezones provide relief from local taxes, enhancing profitability. ',
        },
        {
          icon: FaCheckCircle,
          title: 'Combination of Different Activities',
          description:
            'Freezones allow businesses to engage in multiple activities under a single license.',
        },
        {
          icon: FaCheckCircle,
          title: 'Simplified Business Setup Procedures',
          description:
            'Streamlined processes facilitate faster and easier business setup.',
        },
        {
          icon: FaCheckCircle,
          title: 'Free Lease Agreement',
          description:
            'Freezones offer a free lease agreement to make your business setup even easier.',
        },
        {
          icon: FaCheckCircle,
          title: 'Bank Account Assistance',
          description:
            'Freezones provide assistance in opening bank accounts to facilitate business operations.',
        },
        {
          icon: FaCheckCircle,
          title: 'License Issued in 1 Day',
          description:
            'Fast and efficient licensing process, with licenses issued within 1 day.',
        },
      ],

      img: img1.src,
    },
    popularAreas: {
      title: 'Popular Freezones in UAE',
      images: [pfz1.src, pfz2.src, pfz3.src],
    },
    requirements: {
      title: 'Requirements for Freezone Business Setup',
      requirements: [
        {
          icon: FaCheckCircle,
          title: 'Completed Application Form',
          description:
            'Submit a fully filled application to initiate the setup process.',
        },
        {
          icon: FaCheckCircle,
          title: 'Passport Copies',
          description:
            'Provide copies of the passport for all business owners and stakeholders.',
        },
        {
          icon: FaCheckCircle,
          title: 'Detailed Business Plan',
          description:
            'Submit a comprehensive business plan outlining your business activities, goals, and strategies.',
        },
        {
          icon: FaCheckCircle,
          title: 'Varied by Freezone',
          description:
            'Note that specific requirements may differ depending on the chosen freezone.',
        },
      ],
      img: img1.src,
    },
    steps: {
      title: 'Steps to Establish a Freezone Company',
      steps: [
        {
          title: 'Select the Right Freezone',
          description:
            'Choose a freezone that aligns with your business activities and offers the best advantages.',
        },
        {
          title: 'Register the Company',
          description:
            'Complete the registration process, which includes submitting necessary documents and information.',
        },
        {
          title: 'Obtain Necessary Licenses',
          description:
            'Acquire all required licenses specific to your business sector within the freezone.',
        },
        {
          title: 'Set Up Office Space',
          description:
            'Secure office space as per your business needs in the selected freezone.',
        },
        {
          title: 'Expert Guidance',
          description:
            'Utilize the assistance of our experts who will guide you through each step of the process.',
        },
      ],
    },
  },
  {
    id: 'business-activities',
    title: "Explore Business Activities in UAE's Freezones",
    subtitle:
      'Freezones in the UAE offer a wide range of business activities, from trading and consulting to IT services and media production. Choosing the right activity is crucial for the success of your business.',
    img: hero.src,
    btnTxt: 'Discover Your Business Options',
    keyPoints: {
      title: 'Popular Business Activities in UAE Freezones',
      description:
        'Freezones in the UAE offer licenses for various business activities. Some zones specialize in specific industries, making it important to choose the right zone for your business.',
      points: [
        {
          icon: FaCheckCircle,
          title: 'Trading',
          description:
            'Engage in trading activities, such as importing, exporting, and distribution of goods. Trading licenses are one of the most sought-after licenses in UAE freezones.',
        },
        {
          icon: FaCheckCircle,
          title: 'Consulting',
          description:
            'Provide consultancy services in sectors such as IT, management, finance, and more. Freezones like Dubai Media City and Dubai Internet City are ideal for consultancy businesses.',
        },
        {
          icon: FaCheckCircle,
          title: 'Technology & IT',
          description:
            'Freezones like Dubai Silicon Oasis and Dubai Internet City offer licenses for IT services, software development, and technology innovation.',
        },
      ],
    },
    freezonePage: true,
    areas: {
      title: 'Freezones',
      images: [
        fz1.src,
        fz2.src,
        fz3.src,
        fz4.src,
        fz5.src,
        fz6.src,
        fz7.src,
        fz8.src,
        fz9.src,
      ],
    },
    benefits: {
      title: 'Benefits of Freezone Business Activities',
      benefits: [
        {
          icon: FaCheckCircle,
          title: 'Access to International Markets',
          description:
            'Freezones are strategically located near major trade routes, allowing easy access to international markets and global clients.',
        },
        {
          icon: FaCheckCircle,
          title: 'Tax-Free Operations',
          description:
            'Freezone businesses enjoy tax-free operations, including zero corporate and personal income tax, and customs duty exemptions.',
        },
        {
          icon: FaCheckCircle,
          title: 'Industry-Specific Infrastructure',
          description:
            'Some freezones offer specialized infrastructure, such as data centers for tech firms or storage facilities for trading companies.',
        },
      ],
      img: img1.src,
    },
    popularAreas: {
      title: 'Popular Freezones in UAE',
      images: [pfz1.src, pfz2.src, pfz3.src],
    },
    requirements: {
      title: 'Requirements for Freezone Business Activities',
      requirements: [
        {
          icon: FaCheckCircle,
          title: 'Appropriate License',
          description:
            "Ensure that the freezone you choose offers the appropriate license for your business activity, whether it's commercial, professional, or industrial.",
        },
        {
          icon: FaCheckCircle,
          title: 'Business Plan',
          description:
            'A detailed business plan is often required, especially for consultancy or professional services, to outline your goals and operations.',
        },
        {
          icon: FaCheckCircle,
          title: 'Specific Certifications',
          description:
            'Depending on the activity, some freezones may require additional certifications, especially in sectors like healthcare or financial services.',
        },
      ],
      img: img1.src,
    },
    steps: {
      title: 'Steps to Start Business Activities in a Freezone',
      steps: [
        {
          title: 'Step 1: Research Suitable Freezones',
          description:
            'Research the various freezones and determine which one best aligns with your business activity. Freezones often specialize in certain industries, such as media, tech, or logistics.',
        },
        {
          title: 'Step 2: Obtain the Relevant License',
          description:
            "Once you've chosen a freezone, apply for the specific business license that matches your activity, whether it's trading, consulting, or tech services.",
        },
        {
          title: 'Step 3: Submit Documents and Business Plan',
          description:
            'Prepare and submit all required documents, including your business plan, passport copies, and any specific certifications needed for your industry.',
        },
        {
          title: 'Step 4: Finalize Office Setup',
          description:
            'Lease an office space or a flexi-desk in the freezone as required by the local authority. Some freezones offer virtual office options for smaller businesses.',
        },
        {
          title: 'Step 5: Commence Operations',
          description:
            'Once your license is issued, you can start your business operations in the UAE. Ensure you comply with all local regulations to maintain your license.',
        },
      ],
    },
  },

  // Free Zones - License Locations and Pricing
  {
    id: 'freezone-license',
    title: 'Find the Best Freezone License Locations and Pricing',
    subtitle:
      'Choosing the right freezone is critical to the success of your business. UAE freezones offer competitive pricing depending on the industry, location, and type of office required.',
    img: hero.src,
    btnTxt: 'Compare Freezone Pricing',
    keyPoints: {
      title: 'Freezone License Pricing and Locations',
      description:
        'Freezones across the UAE vary in pricing depending on the facilities, industry focus, and location. Comparing the right freezone for your budget and needs is essential.',
      points: [
        {
          icon: FaCheckCircle,
          title: 'Dubai Freezones',
          description:
            "Dubai's freezones, including DMCC, Dubai Airport Freezone, and Dubai Media City, offer premium services and proximity to major trade hubs.",
        },
        {
          icon: FaCheckCircle,
          title: 'Abu Dhabi Freezones',
          description:
            'Abu Dhabi’s freezones, such as Khalifa Industrial Zone (KIZAD) and Abu Dhabi Global Market (ADGM), provide a range of licenses at competitive prices for industrial and financial sectors.',
        },
        {
          icon: FaCheckCircle,
          title: 'Northern Emirates Freezones',
          description:
            'Sharjah, Ras Al Khaimah, and Fujairah offer some of the most cost-effective freezone licenses, making them ideal for startups and SMEs.',
        },
      ],
    },
    freezonePage: true,
    areas: {
      title: 'Freezones',
      images: [
        fz1.src,
        fz2.src,
        fz3.src,
        fz4.src,
        fz5.src,
        fz6.src,
        fz7.src,
        fz8.src,
        fz9.src,
      ],
    },
    benefits: {
      title: 'Advantages of Choosing the Right Freezone',
      benefits: [
        {
          icon: FaCheckCircle,
          title: 'Location-Specific Benefits',
          description:
            'Each freezone offers unique advantages based on its proximity to airports, seaports, or commercial centers. Choosing the right location can improve your logistics and access to clients.',
        },
        {
          icon: FaCheckCircle,
          title: 'Cost-Effective Setup',
          description:
            'Some freezones provide lower-cost setup options, such as shared office spaces and virtual office packages, reducing the initial capital required.',
        },
        {
          icon: FaCheckCircle,
          title: 'Industry-Specific Support',
          description:
            'Freezones specializing in certain industries offer tailored facilities and business support, such as tech infrastructure in Dubai Silicon Oasis or trading hubs in JAFZA.',
        },
      ],
      img: img1.src,
    },
    popularAreas: {
      title: 'Popular Freezones in UAE',
      images: [pfz1.src, pfz2.src, pfz3.src],
    },
    requirements: {
      title: 'Requirements for Securing Freezone Licenses',
      requirements: [
        {
          icon: FaCheckCircle,
          title: 'Specific License Types',
          description:
            'Ensure that your chosen freezone offers the specific license type needed for your business activity, whether it’s a commercial, service, or industrial license.',
        },
        {
          icon: FaCheckCircle,
          title: 'Office Space Requirement',
          description:
            'Most freezones require businesses to lease physical office space, though some allow for flexi-desk or virtual office setups.',
        },
        {
          icon: FaCheckCircle,
          title: 'Minimum Capital Requirement',
          description:
            'Certain freezones have minimum capital requirements depending on the nature of the business. Check this before applying.',
        },
      ],
      img: img1.src,
    },
    steps: {
      title: 'Steps to Secure a Freezone License',
      steps: [
        {
          title: 'Step 1: Identify Your Business Needs',
          description:
            'Evaluate your business needs, including the industry, budget, and market focus. This will help you narrow down the freezones that suit your business best.',
        },
        {
          title: 'Step 2: Research Freezone Locations',
          description:
            'Research various freezones across the UAE, focusing on those that offer licenses for your business activity. Consider the location, industry support, and proximity to trade routes.',
        },
        {
          title: 'Step 3: Apply for the License',
          description:
            'Once you’ve identified a suitable freezone, submit the required documents and application forms to obtain the necessary business license. Ensure that your documentation is complete to avoid delays.',
        },
        {
          title: 'Step 4: Secure Office Space',
          description:
            'Find an office space within the freezone as per their requirements. Some zones offer shared workspaces or flexi-desks to reduce costs.',
        },
        {
          title: 'Step 5: Start Business Operations',
          description:
            'Once you’ve received your license and secured office space, you can begin your business operations within the UAE’s regulatory framework.',
        },
      ],
    },
  },

  // Mainland - Overview (Example)
  {
    id: 'mainland-overview',
    title: "Explore Business Opportunities in Dubai's Mainland",
    subtitle:
      'Dubai Mainland offers unrestricted business activities and direct access to local markets. Our experts will help you navigate the process of setting up your business with full compliance to local regulations.',
    img: hero.src,
    btnTxt: 'Start Your Mainland Business Today',
    keyPoints: {
      title: 'Key Steps for Mainland Business Setup',
      description:
        'Setting up a business in Dubai Mainland provides flexibility in business operations, access to local markets, and the ability to expand within the UAE without restrictions.',
      points: [
        {
          icon: LiaHandshakeSolid,
          title: 'Sponsorship Requirement',
          description:
            "Most mainland businesses require a local sponsor, who will hold 51% of the shares, unless you're setting up a professional services business, where 100% foreign ownership is allowed.",
        },
        {
          icon: IoDocumentTextOutline,
          title: 'License Application',
          description:
            'You must acquire a trade license from the Department of Economic Development (DED) to legally operate in Dubai Mainland. This involves submitting documents and selecting the business activities you intend to carry out.',
        },
        {
          icon: CiClock2,
          title: 'Processing Time',
          description:
            'The process for setting up a business in Dubai Mainland can take between 15 to 30 working days, depending on the type of business and industry.',
        },
      ],
    },
    freezonePage: false,
    areas: {
      title: 'Mainland Business Areas',
      images: [fz1.src, fz2.src],
    },
    benefits: {
      title: 'Benefits of Setting Up in Dubai Mainland',
      benefits: [
        {
          icon: FaCheckCircle,
          title: 'Access to Local Markets',
          description:
            'Unlike freezones, mainland businesses can freely trade within the UAE’s local market, giving access to a larger customer base.',
        },
        {
          icon: FaCheckCircle,
          title: 'No Office Location Restrictions',
          description:
            'You are free to set up your office anywhere in Dubai or the wider UAE, giving you greater flexibility in choosing your business location.',
        },
        {
          icon: FaCheckCircle,
          title: 'Ability to Bid on Government Contracts',
          description:
            'Mainland businesses are eligible to participate in government tenders and contracts, which are not accessible to freezone companies.',
        },
      ],
      img: img1.src,
    },
    popularAreas: {
      title: 'Popular Mainland Business Locations',
      images: [pfz1.src, pfz2.src],
    },
    requirements: {
      title: 'Requirements for Mainland Business Setup',
      requirements: [
        {
          icon: FaCheckCircle,
          title: 'Local Sponsor Agreement',
          description:
            "Most mainland businesses require a local sponsor who holds 51% of the shares, unless you're setting up a professional services company or a branch of a foreign entity.",
        },
        {
          icon: FaCheckCircle,
          title: 'Trade Name Approval',
          description:
            'Submit the proposed trade name of your company for approval by the Department of Economic Development to ensure it complies with UAE naming conventions.',
        },
        {
          icon: FaCheckCircle,
          title: 'Initial DED Approval',
          description:
            'Obtain an initial approval from the Department of Economic Development to proceed with further documentation and licensing.',
        },
        {
          icon: FaCheckCircle,
          title: 'Lease Agreement',
          description:
            'To complete the registration process, a tenancy contract for a physical office location in Dubai Mainland is required.',
        },
      ],
      img: img1.src,
    },
    steps: {
      title: 'Steps to Establish a Mainland Company',
      steps: [
        {
          title: 'Step 1: Choose Your Business Structure',
          description:
            'Determine the right business structure for your company. Common structures include Limited Liability Companies (LLCs), sole establishments, or branch offices of foreign companies. Each has its own legal and financial implications.',
        },
        {
          title: 'Step 2: Set Up Local Sponsorship',
          description:
            'For most business types, you’ll need to enter into an agreement with a UAE national (the sponsor), who will own 51% of the business. Professional service companies, however, can be fully foreign-owned.',
        },
        {
          title: 'Step 3: Submit Trade License Application',
          description:
            'Submit your trade name and business activity for approval to the DED. Alongside this, provide all necessary documents such as MOA, sponsorship agreements, and identification details.',
        },
        {
          title: 'Step 4: Lease Office Space',
          description:
            'Rent or lease office space as per the DED’s regulations. An Ejari tenancy contract will be required to complete your company registration.',
        },
        {
          title: 'Step 5: Receive Trade License',
          description:
            'Once your documentation is approved and your office is secured, your business license will be issued, allowing you to commence operations.',
        },
      ],
    },
  },
  // 5. PRO Services
  {
    id: 'pro-services',
    title: 'Comprehensive PRO Services for Businesses in the UAE',
    subtitle:
      'We manage all governmental paperwork and processes for your business, saving you time and ensuring full compliance.',
    img: img5.src,
    btnTxt: 'Get Our PRO Services Today!',
    keyPoints: {
      title: 'Why Choose Us?',
      description:
        'Our PRO services handle all government-related documentation, including visa applications, labor permits, and trade license renewals, making sure your business stays compliant with UAE regulations.',
      points: [
        {
          icon: HiOutlineDocument,
          title: 'Government Liaison',
          description:
            'We manage all communication with government departments on your behalf, ensuring efficient processing of all required paperwork.',
        },
        {
          icon: FaRegChartBar,
          title: 'Efficient Document Management',
          description:
            'Our team ensures that all your documents are accurately prepared and submitted on time, helping you avoid delays and penalties.',
        },
        {
          icon: GoShieldCheck,
          title: 'Compliance with Laws',
          description:
            'We ensure your business remains compliant with UAE laws and regulations, protecting you from fines and legal issues.',
        },
      ],
    },
    services: {
      title: 'Our PRO Services',
      points: [
        {
          title: 'Visa Processing',
          description:
            'We handle the full process of applying for visas, from documentation to approval, ensuring fast and efficient results.',
        },
        {
          title: 'Trade License Renewal',
          description:
            'We manage your trade license renewal process, making sure your business stays compliant with all local regulations.',
        },
        {
          title: 'Labor Permits',
          description:
            'We assist with labor permit applications and renewals, ensuring your employees are legally authorized to work in the UAE.',
        },
      ],
    },
    guide: {
      title: 'Complete Guide to PRO Services in the UAE',
      sectionTitles: [
        { href: '#visa-processing', title: 'Visa Processing' },
        { href: '#trade-license-renewal', title: 'Trade License Renewal' },
        { href: '#labor-permits', title: 'Labor Permits' },
        { href: '#document-attestation', title: 'Document Attestation' },
        { href: '#company-setup', title: 'Company Setup' },
      ],
      content: `
        <h2 id="visa-processing" style="font-size: 24px; color: #000000;">Visa Processing</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          We manage the full visa application process for your business and its employees. This includes gathering the necessary documentation, filing applications, and tracking the progress to ensure swift approval.
        </p>

        <h2 id="trade-license-renewal" style="font-size: 24px; color: #000000;">Trade License Renewal</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Your business must renew its trade license annually to continue operating legally in the UAE. We manage the entire renewal process, ensuring all requirements are met and submissions are made on time.
        </p>

        <h2 id="labor-permits" style="font-size: 24px; color: #000000;">Labor Permits</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          We assist in acquiring labor permits for your employees, ensuring they are legally permitted to work in the UAE. We also handle the renewal of labor permits to keep your workforce fully compliant.
        </p>

        <h2 id="document-attestation" style="font-size: 24px; color: #000000;">Document Attestation</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Document attestation is a mandatory process for all businesses operating in the UAE. We help you with the certification and notarization of documents required for various business activities, including visa processing, company setup, and license renewals.
        </p>

        <h2 id="company-setup" style="font-size: 24px; color: #000000;">Company Setup</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          We assist with company setup services, guiding you through every stage, from submitting the necessary documents to receiving your trade license. Whether you're setting up in a free zone or on the mainland, we make the process as smooth and hassle-free as possible.
        </p>
      `,
    },
  },

  {
    id: 'uae-residence-visa',
    title: 'Obtain UAE Residence Visa Through Freezone Setup',
    subtitle:
      'Setting up your business in a UAE freezone can facilitate acquiring residence visas for business owners and employees. We assist you throughout the process to ensure smooth handling of all the required documentation and approvals.',
    img: hero.src,
    btnTxt: 'Apply for UAE Visa',
    keyPoints: {
      title: 'Visa Application Process for Freezone Businesses',
      description:
        'Residence visas are a vital aspect of business setup in freezones. They allow business owners and employees to live and work in the UAE legally, while also providing benefits such as family sponsorship.',
      points: [
        {
          icon: FaCheckCircle,
          title: 'Owner Visa',
          description:
            'Business owners can apply for a UAE residence visa, which allows them to live and manage their business in the UAE. These visas are typically valid for 2-3 years and renewable.',
        },
        {
          icon: FaCheckCircle,
          title: 'Employee Visa',
          description:
            'Employers can sponsor employees for residence visas, depending on the size of the office and the business activity. Employee visas are essential for hiring and retaining talent.',
        },
        {
          icon: FaCheckCircle,
          title: 'Family Sponsorship',
          description:
            'Freezone business owners can sponsor their immediate family members for UAE residence visas, enabling them to live and study in the UAE.',
        },
      ],
    },
    freezonePage: true,
    areas: {
      title: 'Freezones',
      images: [
        fz1.src,
        fz2.src,
        fz3.src,
        fz4.src,
        fz5.src,
        fz6.src,
        fz7.src,
        fz8.src,
        fz9.src,
      ],
    },
    benefits: {
      title: 'Benefits of UAE Residence Visa',
      benefits: [
        {
          icon: FaCheckCircle,
          title: 'Legal Residency',
          description:
            'A UAE residence visa provides legal residency for business owners and employees, allowing access to services like banking, healthcare, and education.',
        },
        {
          icon: FaCheckCircle,
          title: 'Family Sponsorship',
          description:
            'Business owners and employees with a residence visa can sponsor their family members, making it easier to relocate to the UAE.',
        },
        {
          icon: FaCheckCircle,
          title: 'Multiple Entry',
          description:
            'Visa holders can enter and exit the UAE as often as needed without the need to apply for a new visa each time.',
        },
      ],
      img: img1.src,
    },
    popularAreas: {
      title: 'Popular Freezones in UAE',
      images: [pfz1.src, pfz2.src, pfz3.src],
    },
    requirements: {
      title: 'Requirements for Obtaining a Residence Visa',
      requirements: [
        {
          icon: FaCheckCircle,
          title: 'Valid Trade License',
          description:
            'Your freezone company must have a valid trade license in order to sponsor visas for employees and owners.',
        },
        {
          icon: FaCheckCircle,
          title: 'Medical Examination',
          description:
            'Visa applicants must pass a medical examination, which includes screening for communicable diseases like tuberculosis.',
        },
        {
          icon: FaCheckCircle,
          title: 'Emirates ID Application',
          description:
            'After the visa is approved, applicants need to apply for an Emirates ID, which acts as an official identification document in the UAE.',
        },
      ],
      img: img1.src,
    },
    steps: {
      title: 'Steps to Obtain a UAE Residence Visa',
      steps: [
        {
          title: 'Step 1: Trade License Issuance',
          description:
            'Ensure your freezone company has a valid trade license, as this is necessary to sponsor visas for both business owners and employees.',
        },
        {
          title: 'Step 2: Submit Visa Application',
          description:
            'Submit the visa application, including your passport, trade license, and other required documents, to the relevant freezone authority or immigration office.',
        },
        {
          title: 'Step 3: Medical Examination',
          description:
            'The applicant must undergo a medical examination as part of the residence visa application process. The medical test screens for certain diseases and is mandatory.',
        },
        {
          title: 'Step 4: Emirates ID and Biometrics',
          description:
            'Once your visa is approved, proceed to the Emirates ID center for biometric data collection and the issuance of your official ID.',
        },
        {
          title: 'Step 5: Visa Stamping',
          description:
            'After completing the medical and Emirates ID steps, the visa is stamped into your passport, completing the process and granting you legal residency in the UAE.',
        },
      ],
    },
  },

  // Free Zones - Registration Process
  {
    id: 'registration-process',
    title: 'Step-by-Step Guide to Freezone Company Registration',
    subtitle:
      'Establishing a business in a UAE freezone is streamlined, offering numerous advantages like 100% foreign ownership and no taxes. This guide will help you navigate through the registration process efficiently.',
    img: hero.src,
    btnTxt: 'Start Your Registration Today',
    keyPoints: {
      title: 'Freezone Business Registration Process',
      description:
        'Registering a business in a UAE freezone involves a few key steps, from choosing the right freezone to obtaining the required licenses and approvals. Our experts will walk you through every stage.',
      points: [
        {
          icon: FaCheckCircle,
          title: 'Choose the Freezone',
          description:
            'The first step is selecting the freezone that best suits your business activity and industry. Some freezones specialize in trading, while others focus on media, technology, or industrial activities.',
        },
        {
          icon: FaCheckCircle,
          title: 'Submit Documents',
          description:
            "Once you've chosen the freezone, the next step is to submit the necessary documentation, including passport copies, business plans, and trade name applications.",
        },
        {
          icon: FaCheckCircle,
          title: 'Receive Approvals',
          description:
            'Once the documents are submitted, you will receive initial approval from the freezone authority. Following this, you can proceed with licensing and other formalities.',
        },
      ],
    },
    freezonePage: true,
    areas: {
      title: 'Freezones',
      images: [
        fz1.src,
        fz2.src,
        fz3.src,
        fz4.src,
        fz5.src,
        fz6.src,
        fz7.src,
        fz8.src,
        fz9.src,
      ],
    },
    benefits: {
      title: 'Benefits of Freezone Registration',
      benefits: [
        {
          icon: FaCheckCircle,
          title: '100% Foreign Ownership',
          description:
            'Unlike mainland businesses, freezones offer 100% foreign ownership, which means you do not need a local sponsor or partner.',
        },
        {
          icon: FaCheckCircle,
          title: 'No Local Taxes',
          description:
            'Freezone businesses are exempt from corporate taxes, income taxes, and customs duties, making them a cost-effective choice for entrepreneurs.',
        },
        {
          icon: FaCheckCircle,
          title: 'Fast-Track Setup',
          description:
            'Many freezones offer fast-track business setup options, allowing you to obtain your license and start operations within days.',
        },
      ],
      img: img1.src,
    },
    popularAreas: {
      title: 'Popular Freezones in UAE',
      images: [pfz1.src, pfz2.src, pfz3.src],
    },
    requirements: {
      title: 'Documents Required for Registration',
      requirements: [
        {
          icon: FaCheckCircle,
          title: 'Trade Name Approval',
          description:
            'Submit your proposed trade name for approval to ensure it complies with UAE regulations. This is an essential first step in the registration process.',
        },
        {
          icon: FaCheckCircle,
          title: 'Passport Copies',
          description:
            'Provide passport copies of all shareholders and directors involved in the company formation process.',
        },
        {
          icon: FaCheckCircle,
          title: 'Lease Agreement',
          description:
            "Some freezones require a lease agreement for physical office space or flexi-desk, depending on the nature of your business and the freezone's policies.",
        },
      ],
      img: img1.src,
    },
    steps: {
      title: 'Steps to Register a Freezone Company',
      steps: [
        {
          title: 'Step 1: Select the Freezone and Trade Name',
          description:
            'Choose a freezone that aligns with your business goals and activity. Once selected, reserve your trade name with the freezone authority.',
        },
        {
          title: 'Step 2: Submit Required Documentation',
          description:
            'Submit all necessary documents, including your business plan, passport copies, and other required certifications or approvals.',
        },
        {
          title: 'Step 3: Receive Initial Approval',
          description:
            'Once your documents are processed, you will receive initial approval, which allows you to proceed with the business setup steps.',
        },
        {
          title: 'Step 4: Office Space Lease',
          description:
            'If required by the freezone, sign a lease agreement for office space or flexi-desk to meet the minimum office requirements for business setup.',
        },
        {
          title: 'Step 5: Finalize License Issuance',
          description:
            'After completing all registration steps and fulfilling office requirements, your freezone business license will be issued, enabling you to start operations.',
        },
      ],
    },
  },

  // Mainland - Sponsorship
  {
    id: 'sponsorship',
    title: 'Understanding Sponsorship in Dubai Mainland',
    subtitle:
      'Mainland businesses in Dubai often require a local sponsor who holds a 51% share in the company. Learn about the different sponsorship options and how we can assist you in finding the right sponsor for your business.',
    img: hero.src,
    btnTxt: 'Learn More About Sponsorship',
    keyPoints: {
      title: 'Sponsorship Types in Dubai Mainland',
      description:
        'Choosing the right sponsorship model is crucial for businesses in Dubai Mainland. There are different types of sponsorship arrangements depending on your business type and structure.',
      points: [
        {
          icon: FaCheckCircle,
          title: 'Individual Sponsor',
          description:
            'A UAE national who holds 51% of the shares in your business. This type of sponsorship is commonly required for LLCs and certain trade businesses.',
        },
        {
          icon: FaCheckCircle,
          title: 'Corporate Sponsor',
          description:
            'A local company acting as your sponsor, providing additional corporate resources and support to help you navigate business operations and legal matters.',
        },
        {
          icon: FaCheckCircle,
          title: 'Nominee Sponsorship',
          description:
            'Nominee sponsors remain silent partners, allowing foreign investors to retain full control over the company while complying with local regulations.',
        },
      ],
    },
    freezonePage: false,
    areas: {
      title: 'Mainland Sponsorship Solutions',
      images: [fz1.src, fz2.src],
    },
    benefits: {
      title: 'Benefits of the Right Sponsorship',
      benefits: [
        {
          icon: FaCheckCircle,
          title: 'Compliance with UAE Law',
          description:
            'Having a local sponsor ensures your business complies with UAE legal requirements, allowing you to operate smoothly and avoid legal challenges.',
        },
        {
          icon: FaCheckCircle,
          title: 'Full Business Control',
          description:
            'Through nominee sponsorship agreements, business owners can maintain operational control of their companies while meeting the sponsorship requirement.',
        },
        {
          icon: FaCheckCircle,
          title: 'Corporate Support',
          description:
            'Corporate sponsors provide additional support in terms of resources, networking, and connections to local markets, helping you grow your business.',
        },
      ],
      img: img1.src,
    },
    popularAreas: {
      title: 'Popular Sponsorship Options',
      images: [pfz1.src, pfz2.src],
    },
    requirements: {
      title: 'Requirements for Sponsorship Agreements',
      requirements: [
        {
          icon: FaCheckCircle,
          title: 'Legal Sponsorship Agreement',
          description:
            'A legal sponsorship agreement must be drafted, outlining the terms and responsibilities of both the business owner and the sponsor.',
        },
        {
          icon: FaCheckCircle,
          title: 'Trade Name Registration',
          description:
            'As part of the business setup process, the company’s trade name must be registered with the Department of Economic Development.',
        },
        {
          icon: FaCheckCircle,
          title: 'Memorandum of Association (MOA)',
          description:
            'An MOA is required to define the ownership structure and responsibilities between the business owner and the local sponsor.',
        },
      ],
      img: img1.src,
    },
    steps: {
      title: 'Steps to Establish a Mainland Sponsorship Agreement',
      steps: [
        {
          title: 'Step 1: Identify Sponsorship Needs',
          description:
            'Determine the type of sponsorship your business requires based on your legal structure and industry. Decide whether an individual or corporate sponsor is needed.',
        },
        {
          title: 'Step 2: Find a Sponsor',
          description:
            'We can help you connect with reliable sponsors who match your business needs and share your vision for growth.',
        },
        {
          title: 'Step 3: Draft Legal Sponsorship Agreement',
          description:
            'Work with legal professionals to draft a sponsorship agreement that outlines the roles, responsibilities, and financial terms clearly to avoid future disputes.',
        },
        {
          title: 'Step 4: Submit Sponsorship Agreement',
          description:
            'Submit the finalized agreement to the Department of Economic Development along with other business setup documents for approval.',
        },
        {
          title: 'Step 5: Register the Business',
          description:
            'Once your sponsorship agreement is approved, you can proceed with the trade name registration and other necessary steps to finalize the business setup process.',
        },
      ],
    },
  },

  // Mainland - Dubai Mainland License
  {
    id: 'dubai-mainland-license',
    title: 'Obtain Your Dubai Mainland License',
    subtitle:
      'Setting up a business in Dubai Mainland provides the flexibility to trade freely within the UAE and internationally. Our experts will assist you in obtaining the appropriate business license for your operations.',
    img: hero.src,
    btnTxt: 'Apply for Mainland License',
    keyPoints: {
      title: 'Types of Dubai Mainland Licenses',
      description:
        'Dubai Mainland licenses are categorized based on business activities. It is crucial to choose the right license to ensure compliance with local laws and to operate effectively.',
      points: [
        {
          icon: FaCheckCircle,
          title: 'Commercial License',
          description:
            'Required for businesses engaged in trading, buying, or selling goods within the UAE and globally. Suitable for retailers, wholesalers, and trading companies.',
        },
        {
          icon: FaCheckCircle,
          title: 'Professional License',
          description:
            'Issued to individuals or companies offering professional services, such as consultants, freelancers, legal services, or educational training.',
        },
        {
          icon: FaCheckCircle,
          title: 'Industrial License',
          description:
            'Granted to businesses involved in manufacturing or industrial activities, including production and assembly. This license covers businesses operating factories or processing plants.',
        },
      ],
    },
    freezonePage: false,
    benefits: {
      title: 'Why Choose a Mainland License?',
      benefits: [
        {
          icon: FaCheckCircle,
          title: 'Access to UAE Markets',
          description:
            'Mainland licenses allow businesses to freely trade and operate within the UAE market, including selling directly to consumers.',
        },
        {
          icon: FaCheckCircle,
          title: 'No Limit on Office Locations',
          description:
            'Unlike freezones, mainland businesses are free to establish offices or branches anywhere within the UAE without restrictions on office location.',
        },
        {
          icon: FaCheckCircle,
          title: 'Government Contracts',
          description:
            'With a mainland license, your business can bid on and participate in UAE government tenders and contracts, offering lucrative growth opportunities.',
        },
      ],
      img: img1.src,
    },
    popularAreas: {
      title: 'Popular Mainland Business Locations',
      images: [pfz1.src, pfz2.src],
    },
    requirements: {
      title: 'Requirements for Obtaining a Mainland License',
      requirements: [
        {
          icon: FaCheckCircle,
          title: 'Trade Name Approval',
          description:
            'Register and get approval for your business name with the Department of Economic Development (DED) to ensure it complies with local regulations.',
        },
        {
          icon: FaCheckCircle,
          title: 'Initial Approval from DED',
          description:
            'After the trade name is approved, you must obtain initial approval for the business activities you plan to conduct under the license.',
        },
        {
          icon: FaCheckCircle,
          title: 'Lease Agreement for Office Space',
          description:
            'A lease agreement for a physical office space is required to finalize the license issuance. The office must meet DED standards for business operations.',
        },
      ],
      img: img1.src,
    },
    steps: {
      title: 'Steps to Acquire a Dubai Mainland License',
      steps: [
        {
          title: 'Step 1: Determine Business Activity',
          description:
            'Identify the business activity or activities you plan to engage in. This will determine the type of license you need (commercial, professional, or industrial).',
        },
        {
          title: 'Step 2: Register Trade Name',
          description:
            'Submit your trade name to the DED for approval to ensure it complies with the UAE’s naming conventions and is unique within your business category.',
        },
        {
          title: 'Step 3: Obtain Initial Approval',
          description:
            'After the trade name is approved, apply for initial approval from DED for the planned business activities and company structure.',
        },
        {
          title: 'Step 4: Secure Office Space',
          description:
            'Lease office space or business premises in Dubai Mainland. Ensure that the office complies with local regulations and that you obtain the necessary tenancy contracts.',
        },
        {
          title: 'Step 5: Finalize License Issuance',
          description:
            'Once all documentation is in place, submit your final license application to the DED. After approval, your mainland business license will be issued, allowing you to begin operations.',
        },
      ],
    },
  },
  {
    id: 'our-solution',
    title: 'Our Comprehensive Solution for UAE Freezone Business Setup',
    subtitle:
      "We offer an end-to-end solution for setting up your business in one of UAE's popular freezones. From documentation to licensing and beyond, we simplify the process so you can focus on growing your business.",
    img: hero.src,
    btnTxt: 'Get Started with Our Solution',
    keyPoints: {
      title: 'Why Choose Our Solution for Freezone Business Setup?',
      description:
        'Our experienced consultants make the process of establishing a business in UAE freezones seamless. We handle everything from initial consultation to post-registration services, allowing you to start operations quickly.',
      points: [
        {
          icon: FaCheckCircle,
          title: 'Personalized Business Consultation',
          description:
            'We offer a personalized business consultation to understand your requirements and advise you on the best freezone that aligns with your industry and goals.',
        },
        {
          icon: FaCheckCircle,
          title: 'End-to-End Documentation Support',
          description:
            'We assist with preparing, submitting, and tracking all necessary documentation, from trade name approvals to legal paperwork, ensuring a smooth registration process.',
        },
        {
          icon: FaCheckCircle,
          title: 'Post-Setup Support',
          description:
            'Our services don’t end at registration. We provide ongoing support, including visa processing, office setup, banking services, and compliance with freezone regulations.',
        },
      ],
    },
    freezonePage: true,
    areas: {
      title: 'Freezones',
      images: [
        fz1.src,
        fz2.src,
        fz3.src,
        fz4.src,
        fz5.src,
        fz6.src,
        fz7.src,
        fz8.src,
        fz9.src,
      ],
    },
    benefits: {
      title: 'Benefits of Using Our Freezone Business Setup Solution',
      benefits: [
        {
          icon: FaCheckCircle,
          title: 'Expertise in Freezone Processes',
          description:
            'With years of experience in the UAE market, our consultants are well-versed in the specific requirements of various freezones, ensuring that your business setup is both efficient and compliant.',
        },
        {
          icon: FaCheckCircle,
          title: 'Tailored Business Solutions',
          description:
            'We offer customized business setup packages that cater to your unique business needs, whether you are a startup, an SME, or a large enterprise.',
        },
        {
          icon: FaCheckCircle,
          title: 'Time-Saving and Hassle-Free',
          description:
            'By managing all aspects of the setup process—from document submission to acquiring licenses—we save you time and reduce the complexities involved.',
        },
      ],
      img: img1.src,
    },
    popularAreas: {
      title: 'Popular Freezones in UAE',
      images: [pfz1.src, pfz2.src, pfz3.src],
    },
    requirements: {
      title: 'What We Need from You',
      requirements: [
        {
          icon: FaCheckCircle,
          title: 'Basic Information',
          description:
            'We require basic information about your business, including the proposed name, type of business activity, and shareholder details. This helps us initiate the process with the freezone authority.',
        },
        {
          icon: FaCheckCircle,
          title: 'Business Plan',
          description:
            'A comprehensive business plan detailing your goals, activities, and market strategy is required by many freezones. We assist in drafting and refining this plan.',
        },
        {
          icon: FaCheckCircle,
          title: 'Passport Copies',
          description:
            'Provide passport copies for all shareholders and key personnel involved in the business setup process. This is required for identity verification by freezone authorities.',
        },
      ],
      img: img1.src,
    },
    steps: {
      title: 'Steps Involved in Our Freezone Business Setup Solution',
      steps: [
        {
          title: 'Step 1: Initial Consultation',
          description:
            'We begin with a detailed consultation to understand your business needs. Based on your activity and goals, we recommend the best freezone options, discuss office solutions, and outline the setup process.',
        },
        {
          title: 'Step 2: Documentation Preparation and Submission',
          description:
            'Our team prepares all necessary documentation, including trade name reservation, Memorandum of Association (MOA), and shareholder agreements. We then submit these documents to the relevant freezone authority.',
        },
        {
          title: 'Step 3: Secure Approvals and License Issuance',
          description:
            'Once the documents are submitted, we track the approval process with the freezone authority. After receiving the necessary approvals, we obtain your business license, allowing you to legally operate within the freezone.',
        },
        {
          title: 'Step 4: Office Setup and Leasing',
          description:
            'We assist in securing office space or a flexi-desk solution based on the freezone’s requirements. This step is mandatory for obtaining your license, and we handle negotiations and lease finalization on your behalf.',
        },
        {
          title: 'Step 5: Post-License Services and Visa Processing',
          description:
            'Once your license is issued, we continue to provide post-license support, including employee and owner visa applications, assistance with opening a corporate bank account, and ongoing compliance with freezone regulations.',
        },
      ],
    },
  },
  {
    id: 'mainland-business-activities',
    title: 'Explore Permitted Business Activities in Dubai Mainland',
    subtitle:
      'We provide comprehensive guidance on the types of business activities allowed in Dubai Mainland. Whether you are interested in trading, consultancy, construction, or retail, Dubai Mainland offers numerous opportunities for growth.',
    img: hero.src,
    btnTxt: 'Discover Your Options',
    keyPoints: {
      title: 'Key Business Activities Allowed in Dubai Mainland',
      description:
        'Dubai Mainland allows businesses to operate across a wide range of activities, offering access to local and international markets. Understanding which activities are permitted can help you choose the right license and business structure.',
      points: [
        {
          icon: FaCheckCircle,
          title: 'Trading and Retail',
          description:
            'Dubai Mainland is a prime location for retail shops, e-commerce businesses, and trading companies. You can trade freely within the UAE and internationally.',
        },
        {
          icon: FaCheckCircle,
          title: 'Consulting and Professional Services',
          description:
            'Businesses providing professional services such as management consultancy, IT consultancy, marketing, legal services, and more are permitted to operate in Dubai Mainland with 100% foreign ownership.',
        },
        {
          icon: FaCheckCircle,
          title: 'Construction and Real Estate',
          description:
            'Construction and real estate development are major industries in Dubai Mainland. Businesses involved in building, contracting, or real estate services can thrive here.',
        },
      ],
    },
    freezonePage: false,
    areas: {
      title: 'Key Business Sectors in Dubai Mainland',
      images: [fz1.src, fz2.src, fz3.src],
    },
    benefits: {
      title: 'Why Choose Dubai Mainland for Your Business Activities?',
      benefits: [
        {
          icon: FaCheckCircle,
          title: 'Access to Local Markets',
          description:
            'Businesses in Dubai Mainland have unrestricted access to the local UAE market, allowing you to serve both domestic and international customers.',
        },
        {
          icon: FaCheckCircle,
          title: 'No Location Restrictions',
          description:
            'Unlike freezones, mainland businesses can set up offices or retail stores anywhere in the UAE, providing more flexibility for business operations.',
        },
        {
          icon: FaCheckCircle,
          title: 'Eligibility for Government Contracts',
          description:
            'Mainland businesses are eligible to bid on and win lucrative government contracts, which are not available to companies operating in freezones.',
        },
      ],
      img: img1.src,
    },
    popularAreas: {
      title: 'Popular Business Areas for Dubai Mainland',
      images: [pfz1.src, pfz2.src, pfz3.src],
    },
    requirements: {
      title: 'Requirements for Starting a Business in Dubai Mainland',
      requirements: [
        {
          icon: FaCheckCircle,
          title: 'Trade License',
          description:
            'You must apply for a trade license from the Department of Economic Development (DED) specific to your chosen business activity.',
        },
        {
          icon: FaCheckCircle,
          title: 'Local Sponsor',
          description:
            'For most business activities, you will need a local UAE national sponsor who holds 51% of the shares in your company, unless you are setting up a professional services firm.',
        },
        {
          icon: FaCheckCircle,
          title: 'Office Space',
          description:
            'To operate a business in Dubai Mainland, you are required to lease or purchase office space that complies with local regulations.',
        },
      ],
      img: img1.src,
    },
    steps: {
      title: 'Steps to Start Your Business Activity in Dubai Mainland',
      steps: [
        {
          title: 'Step 1: Choose Your Business Activity',
          description:
            'Select the business activity that aligns with your goals and vision. Research the available activities under the Dubai Mainland trade license categories, such as commercial, industrial, or professional.',
        },
        {
          title: 'Step 2: Apply for Trade Name and License',
          description:
            "Once you've selected your business activity, submit your trade name for approval to the DED and apply for the appropriate trade license to legally operate in Dubai Mainland.",
        },
        {
          title: 'Step 3: Draft the Memorandum of Association (MOA)',
          description:
            'If you are forming an LLC, you must draft a Memorandum of Association (MOA) with your local sponsor outlining shareholding and responsibilities within the company.',
        },
        {
          title: 'Step 4: Secure Office Space',
          description:
            'Lease or purchase office space that meets Dubai Municipality regulations. An office lease agreement is necessary to complete your business registration.',
        },
        {
          title: 'Step 5: Obtain Final Approvals and Start Operations',
          description:
            'Once you have secured your trade license, obtained all necessary approvals, and finalized the office setup, you can begin your business operations in Dubai Mainland.',
        },
      ],
    },
  },
  {
    id: 'mainland-visas',
    title: 'Acquire Mainland Visas for Business Owners and Employees',
    subtitle:
      'Mainland businesses in Dubai have the ability to sponsor residence visas for business owners, employees, and their families. We provide end-to-end support for the visa application process, ensuring a smooth and efficient experience.',
    img: hero.src,
    btnTxt: 'Apply for Mainland Visa',
    keyPoints: {
      title: 'Visa Application for Mainland Business Setup',
      description:
        'Business owners in Dubai Mainland can apply for visas to live and work in the UAE, and they can also sponsor visas for employees and family members. Understanding the visa application process is essential for running a successful business.',
      points: [
        {
          icon: FaCheckCircle,
          title: 'Owner Visa',
          description:
            'Mainland business owners are eligible for a UAE residence visa, allowing them to live and work in the UAE. These visas are renewable every two to three years.',
        },
        {
          icon: FaCheckCircle,
          title: 'Employee Visa',
          description:
            'Businesses can sponsor employees for residence visas, enabling them to live and work legally in the UAE. The number of visas available depends on the size of your office and license type.',
        },
        {
          icon: FaCheckCircle,
          title: 'Family Sponsorship',
          description:
            'Once you have a mainland residence visa, you can sponsor immediate family members, including spouses and children, to reside in the UAE.',
        },
      ],
    },
    freezonePage: false,
    benefits: {
      title: 'Benefits of Mainland Visa Sponsorship',
      benefits: [
        {
          icon: FaCheckCircle,
          title: 'Legal Residency',
          description:
            'A mainland visa provides legal residency in the UAE, giving business owners and employees access to benefits such as healthcare, banking, and other essential services.',
        },
        {
          icon: FaCheckCircle,
          title: 'Flexibility in Hiring',
          description:
            'Mainland companies can sponsor employees from around the world, providing flexibility in recruiting skilled workers and building a global team.',
        },
        {
          icon: FaCheckCircle,
          title: 'Family Residency',
          description:
            'Mainland visa holders can sponsor their immediate family members for residence, ensuring that families can live together in the UAE.',
        },
      ],
      img: img1.src,
    },
    areas: {
      title: 'Popular Mainland Visa Solutions',
      images: [pfz1.src, pfz2.src],
    },
    requirements: {
      title: 'Requirements for Mainland Visa Sponsorship',
      requirements: [
        {
          icon: FaCheckCircle,
          title: 'Valid Trade License',
          description:
            'The business must hold a valid Dubai Mainland trade license to sponsor visas for business owners and employees.',
        },
        {
          icon: FaCheckCircle,
          title: 'Medical Examination',
          description:
            'Visa applicants must undergo a medical examination, which includes tests for infectious diseases such as tuberculosis and hepatitis.',
        },
        {
          icon: FaCheckCircle,
          title: 'Emirates ID',
          description:
            'Once the visa is approved, the applicant must apply for an Emirates ID, which acts as their official identification in the UAE.',
        },
      ],
      img: img1.src,
    },
    steps: {
      title: 'Steps to Apply for Mainland Visas',
      steps: [
        {
          title: 'Step 1: Submit Visa Application',
          description:
            'Submit the visa application along with necessary documentation, such as passport copies, a valid trade license, and a tenancy contract for your office space.',
        },
        {
          title: 'Step 2: Undergo Medical Examination',
          description:
            'All visa applicants must complete a mandatory medical examination, which tests for diseases like tuberculosis. This step is essential for visa approval.',
        },
        {
          title: 'Step 3: Receive Visa Approval',
          description:
            'Once your application is processed, and the medical test is cleared, the immigration authority will approve the visa. You can then proceed with the remaining formalities.',
        },
        {
          title: 'Step 4: Apply for Emirates ID',
          description:
            'After receiving visa approval, the applicant needs to apply for an Emirates ID, which serves as the national identification document required to live and work in the UAE.',
        },
        {
          title: 'Step 5: Visa Stamping',
          description:
            "Once all the necessary steps are completed, the visa will be stamped on the applicant's passport, granting them official residence in the UAE.",
        },
      ],
    },
  },
];
