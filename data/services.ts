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

export const services = [
  // 1. Bank Account Opening
  {
    id: 'bank-account-opening',
    title: "Open a Bank Account with Any of the UAE's Most Trusted Banks",
    subtitle:
      'Let our in-house experts make business bank account opening easy and convenient for you.',
    img: img.src,
    btnTxt: 'Open your UAE business account today!',
    keyPoints: {
      title: 'Why Choose Us?',
      description:
        'We make the process of opening a business bank account in the UAE seamless and hassle-free. Our team guides you every step of the way, from choosing the right bank to compiling all the necessary documents for the application process.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Expert Guidance',
          description:
            "Our in-house experts will help you find the best banking option for your business needs, whether it's local, international, or offshore accounts.",
        },
        {
          icon: GoShieldCheck,
          title: 'Liaising with Banks',
          description:
            'We manage communications with UAE banks, saving you time and effort, ensuring that all requirements are met and all information is processed promptly.',
        },
        {
          icon: FaRegChartBar,
          title: 'Document Preparation',
          description:
            "We will guide you in gathering all necessary documents and ensure that they are properly certified and submitted in compliance with the bank's policies.",
        },
      ],
    },
    services: {
      title: 'Our Bank Account Opening Services',
      points: [
        {
          title: 'Client Assessment',
          description:
            'We assess your company’s financial profile, including expected turnover, initial deposit requirements, and recommend the most suitable bank that aligns with your business needs.',
        },
        {
          title: 'Liaising with the Bank',
          description:
            'Our team manages all communications with the bank on your behalf, ensuring any additional information requests are addressed promptly.',
        },
        {
          title: 'Document Preparation',
          description:
            'We gather and prepare all required documents such as trade licenses, shareholder details, and personal financial statements. Additionally, we help with notarizations as needed.',
        },
      ],
    },
    guide: {
      title: 'Complete Banking Guide for UAE Entrepreneurs',
      sectionTitles: [
        { href: '#choose-bank', title: 'How to Choose the Right Bank' },
        {
          href: '#documents-required',
          title: 'Documents Required for Account Opening',
        },
        { href: '#account-process', title: 'Bank Account Opening Process' },
        { href: '#account-types', title: 'Types of Bank Accounts' },
        { href: '#fees-charges', title: 'Banking Fees and Charges' },
      ],
      content: `
        <h2 id="choose-bank" style="font-size: 24px; color: #000000;">How to Choose the Right Bank</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          The process of choosing the right bank for your business is crucial for managing your company’s financial operations. 
          Whether your priority is accessibility, low fees, or robust digital banking features, each bank provides different options.
          Our team will assess your company’s specific requirements, such as expected transaction volume, international needs, 
          or the necessity for multi-currency accounts. Additionally, if your business involves frequent international transactions, 
          you'll want a bank with strong international ties and favorable exchange rates.
        </p>

        <h2 id="documents-required" style="font-size: 24px; color: #000000;">Documents Required for Account Opening</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          To open a business bank account in the UAE, you’ll need several important documents. These typically include:
        </p>
        <ul style="font-size: 16px; color: #333; line-height: 1.6; padding-left: 20px;">
          <li>Trade license</li>
          <li>Memorandum of association</li>
          <li>Certificate of incorporation</li>
          <li>Passport copies of all shareholders</li>
          <li>Personal financial statements for the last six months</li>
          <li>Proof of residency (such as a utility bill)</li>
        </ul>

        <h2 id="account-process" style="font-size: 24px; color: #000000;">Bank Account Opening Process</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Opening a bank account in the UAE usually involves submitting an application either in person or online. 
          The bank will then conduct a Know Your Customer (KYC) process to confirm your identity and compliance with legal requirements. 
          You may need to attend a meeting with the bank to finalize the process. Timelines vary based on the complexity of your business.
        </p>

        <h2 id="account-types" style="font-size: 24px; color: #000000;">Types of Bank Accounts</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Different types of accounts are available in the UAE, such as current accounts, savings accounts, and offshore accounts. 
          Current accounts are useful for managing daily transactions, while savings accounts help you accumulate interest on reserved funds. 
          Offshore accounts provide flexibility for international businesses with operations across multiple countries.
        </p>

        <h2 id="fees-charges" style="font-size: 24px; color: #000000;">Banking Fees and Charges</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Banks may charge various fees for maintaining a business account, such as monthly service fees, international transfer fees, and penalties for falling below the minimum balance. 
          Reviewing the fee structure in advance helps ensure you choose the best bank for your business’s financial health.
        </p>
      `,
    },
  },

  //Anti Money Laundering
  {
    id: 'aml',
    title:
      'Ensure Full Compliance with UAE’s Anti-Money Laundering (AML) Regulations',
    subtitle:
      'Our in-house experts help you navigate the complex regulatory environment of Anti-Money Laundering (AML) compliance, ensuring your business adheres to all legal requirements and best practices.',
    img: img.src,
    btnTxt: 'Secure Your Compliance Today!',
    keyPoints: {
      title: 'Why Choose Us?',
      description:
        'We make the process of implementing and maintaining AML compliance seamless and hassle-free. Our team provides expert guidance, from conducting risk assessments to preparing policies and training employees.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Expert Guidance',
          description:
            'Our in-house AML experts provide tailored advice on how to identify and mitigate risks related to money laundering and financial crime.',
        },
        {
          icon: GoShieldCheck,
          title: 'Compliance with Regulations',
          description:
            'We ensure your business is fully compliant with UAE’s stringent AML regulations and guidelines, helping you avoid hefty fines and legal issues.',
        },
        {
          icon: FaRegChartBar,
          title: 'Document Preparation',
          description:
            'We assist in drafting and maintaining all necessary AML documentation, including policies, procedures, and reports, in compliance with UAE’s legal requirements.',
        },
      ],
    },
    services: {
      title: 'Our Anti-Money Laundering Services',
      points: [
        {
          title: 'Risk Assessment & Compliance',
          description:
            'We conduct a comprehensive risk assessment of your business operations to identify potential areas of vulnerability to money laundering and terrorist financing. Our team ensures that your AML policies are aligned with the latest regulatory requirements.',
        },
        {
          title: 'AML Training',
          description:
            'We provide in-depth training for your employees to ensure they are aware of the latest AML practices and are able to detect and report suspicious activities effectively.',
        },
        {
          title: 'Reporting & Liaising with Authorities',
          description:
            'Our team assists with preparing and submitting Suspicious Activity Reports (SARs) to the relevant authorities, ensuring that your business maintains full regulatory compliance.',
        },
      ],
    },
    guide: {
      title: 'Comprehensive AML Guide for UAE Businesses',
      sectionTitles: [
        { href: '#aml-laws', title: 'Understanding AML Laws' },
        {
          href: '#risk-assessment',
          title: 'How to Conduct a Risk Assessment',
        },
        { href: '#compliance-process', title: 'AML Compliance Process' },
        { href: '#aml-policies', title: 'Creating AML Policies' },
        { href: '#training-reporting', title: 'Training and Reporting' },
      ],
      content: `
          <h2 id="aml-laws" style="font-size: 24px; color: #000000;">Understanding AML Laws</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            AML laws in the UAE are designed to combat money laundering, terrorist financing, and other illicit financial activities. 
            Businesses operating in the UAE are required to comply with these regulations by implementing robust policies, conducting regular risk assessments, and reporting suspicious activities.
          </p>
  
          <h2 id="risk-assessment" style="font-size: 24px; color: #000000;">How to Conduct a Risk Assessment</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            A thorough risk assessment is the first step in achieving AML compliance. 
            Our experts evaluate your business’s exposure to money laundering risks based on factors such as the nature of your business, transaction volumes, and customer profiles. 
            This assessment helps identify potential weaknesses in your AML framework and allows for the implementation of appropriate controls.
          </p>
  
          <h2 id="compliance-process" style="font-size: 24px; color: #000000;">AML Compliance Process</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            The AML compliance process involves a combination of risk assessment, policy development, employee training, and regular monitoring. 
            Our team ensures that your business remains compliant with all AML regulations by providing ongoing support, guidance, and reporting assistance.
          </p>
  
          <h2 id="aml-policies" style="font-size: 24px; color: #000000;">Creating AML Policies</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Developing strong AML policies is crucial for protecting your business from financial crime. 
            We assist in creating comprehensive AML policies tailored to your business needs, covering areas such as customer due diligence, transaction monitoring, and reporting procedures.
          </p>
  
          <h2 id="training-reporting" style="font-size: 24px; color: #000000;">Training and Reporting</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Ongoing employee training is a critical component of AML compliance. 
            Our team offers tailored training programs to ensure your staff are equipped to identify and report suspicious activities. 
            We also help with the preparation and submission of mandatory reports to the appropriate authorities.
          </p>
        `,
    },
  },

  // Economic Substance Regulations
  {
    id: 'esr',
    title: "Ensure Compliance with UAE's Economic Substance Regulations (ESR)",
    subtitle:
      'Our in-house experts help your business meet the Economic Substance Regulations (ESR) requirements, ensuring compliance and avoiding penalties.',
    img: img.src,
    btnTxt: 'Secure Your ESR Compliance Today!',
    keyPoints: {
      title: 'Why Choose Us?',
      description:
        'We assist businesses in understanding and adhering to the UAE’s Economic Substance Regulations (ESR). Our team ensures that your business meets all legal requirements by conducting assessments and preparing necessary reports.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'ESR Risk Assessment',
          description:
            'Our experts assess your business activities to determine whether they fall under ESR regulations, and guide you through the compliance process.',
        },
        {
          icon: GoShieldCheck,
          title: 'Compliance with ESR Requirements',
          description:
            'We help your business fulfill all ESR compliance obligations, including the submission of Economic Substance Reports and notifications to the relevant authorities.',
        },
        {
          icon: FaRegChartBar,
          title: 'Report Preparation',
          description:
            'We prepare and submit all required ESR reports and documentation, ensuring that they are accurate and meet the UAE’s regulatory standards.',
        },
      ],
    },
    services: {
      title: 'Our Economic Substance Regulation Services',
      points: [
        {
          title: 'ESR Applicability Assessment',
          description:
            'We assess whether your business’s activities fall within the scope of ESR regulations and help you understand your compliance obligations.',
        },
        {
          title: 'ESR Reporting & Submission',
          description:
            'We prepare and submit the necessary reports and notifications to the Ministry of Finance, ensuring timely and accurate filings.',
        },
        {
          title: 'Ongoing ESR Compliance',
          description:
            'We provide continuous support to ensure that your business remains compliant with ESR regulations, including updating reports as required by changes in your business activities.',
        },
      ],
    },
    guide: {
      title: 'Complete ESR Compliance Guide for UAE Businesses',
      sectionTitles: [
        {
          href: '#esr-applicability',
          title: 'Understanding ESR Applicability',
        },
        {
          href: '#esr-requirements',
          title: 'ESR Compliance Requirements',
        },
        { href: '#esr-reporting', title: 'ESR Reporting Process' },
        { href: '#esr-penalties', title: 'ESR Penalties and Consequences' },
      ],
      content: `
          <h2 id="esr-applicability" style="font-size: 24px; color: #000000;">Understanding ESR Applicability</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            The UAE’s Economic Substance Regulations (ESR) apply to certain business activities that are deemed relevant by the Ministry of Finance. 
            These include banking, insurance, investment funds management, shipping, holding company businesses, and intellectual property businesses. 
            We assess whether your company falls under these regulations and guide you through the compliance process.
          </p>
  
          <h2 id="esr-requirements" style="font-size: 24px; color: #000000;">ESR Compliance Requirements</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            To comply with ESR, businesses must meet specific requirements, including economic substance reporting and notifications. 
            Our team helps ensure your business meets all relevant requirements, including demonstrating adequate control, personnel, and office space in the UAE for the business’s core activities.
          </p>
  
          <h2 id="esr-reporting" style="font-size: 24px; color: #000000;">ESR Reporting Process</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            The ESR reporting process involves submitting annual reports and notifications to the Ministry of Finance. 
            We prepare and submit these reports on your behalf, ensuring they meet all regulatory requirements and deadlines.
          </p>
  
          <h2 id="esr-penalties" style="font-size: 24px; color: #000000;">ESR Penalties and Consequences</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Failure to comply with ESR regulations can result in significant penalties, including fines and administrative sanctions. 
            We help businesses avoid these penalties by ensuring full compliance with all ESR requirements and submitting accurate and timely reports.
          </p>
        `,
    },
  },
  // Ultimate Beneficial Ownership
  {
    id: 'ubo',
    title:
      'Ultimate Beneficial Ownership (UBO) Compliance for Transparency and Accountability',
    subtitle:
      'Our in-house experts guide you through the Ultimate Beneficial Ownership (UBO) requirements, ensuring your business remains fully transparent and compliant with UAE regulations.',
    img: img.src,
    btnTxt: 'Ensure Your UBO Compliance Today!',
    keyPoints: {
      title: 'Why Choose Us?',
      description:
        'We assist businesses in meeting the UAE’s Ultimate Beneficial Ownership (UBO) regulations, ensuring transparency and accountability. Our team ensures your business complies with reporting requirements and maintains accurate records.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'UBO Identification',
          description:
            'We help you identify the ultimate beneficial owners of your business, ensuring that the correct individuals are reported in compliance with UAE laws.',
        },
        {
          icon: GoShieldCheck,
          title: 'UBO Reporting',
          description:
            'We prepare and submit the necessary UBO reports to the relevant authorities, ensuring that all information is accurate and compliant with regulations.',
        },
        {
          icon: FaRegChartBar,
          title: 'Ongoing Compliance',
          description:
            'We provide ongoing support to ensure your business maintains up-to-date UBO records and remains compliant with any changes in the law.',
        },
      ],
    },
    services: {
      title: 'Our UBO Compliance Services',
      points: [
        {
          title: 'UBO Identification & Verification',
          description:
            'We help your business identify and verify the ultimate beneficial owners in line with UAE regulations, ensuring full compliance with reporting requirements.',
        },
        {
          title: 'UBO Reporting',
          description:
            'We prepare and submit UBO reports to the relevant authorities, ensuring that your business complies with all legal obligations.',
        },
        {
          title: 'Ongoing UBO Maintenance',
          description:
            'We provide continuous support to help your business maintain accurate UBO records, ensuring that any changes in ownership or structure are reflected in your reports.',
        },
      ],
    },
    guide: {
      title: 'Complete UBO Compliance Guide for UAE Businesses',
      sectionTitles: [
        { href: '#ubo-importance', title: 'Understanding UBO Importance' },
        {
          href: '#ubo-reporting',
          title: 'UBO Reporting Requirements',
        },
        { href: '#ubo-verification', title: 'UBO Verification Process' },
        { href: '#ubo-penalties', title: 'UBO Non-Compliance Penalties' },
      ],
      content: `
          <h2 id="ubo-importance" style="font-size: 24px; color: #000000;">Understanding UBO Importance</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            The Ultimate Beneficial Ownership (UBO) regulation in the UAE is designed to enhance transparency in corporate structures by identifying the individuals who ultimately control or benefit from a business. 
            These regulations help prevent illegal activities such as money laundering and fraud by providing full transparency into company ownership.
          </p>
  
          <h2 id="ubo-reporting" style="font-size: 24px; color: #000000;">UBO Reporting Requirements</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Businesses operating in the UAE are required to submit UBO reports to the relevant authorities, identifying the ultimate beneficial owners. 
            Our team assists with gathering and verifying the necessary information, preparing the reports, and submitting them to ensure full compliance.
          </p>
  
          <h2 id="ubo-verification" style="font-size: 24px; color: #000000;">UBO Verification Process</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            UBO verification is an essential part of the reporting process. 
            We help your business verify the identities of the beneficial owners and ensure that the information submitted is accurate and in line with UAE regulations.
          </p>
  
          <h2 id="ubo-penalties" style="font-size: 24px; color: #000000;">UBO Non-Compliance Penalties</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Failure to comply with UBO regulations can result in severe penalties, including fines and administrative sanctions. 
            Our team helps your business stay compliant with UBO regulations, avoiding potential penalties and ensuring full transparency.
          </p>
        `,
    },
  },

  // 2. Compliance Services
  {
    id: 'compliance-services',
    title: 'Ensure Full Compliance with UAE Regulations',
    subtitle:
      'Our compliance services help you navigate complex regulatory frameworks and avoid legal risks.',
    img: img2.src,
    btnTxt: 'Stay Compliant with UAE Laws!',
    keyPoints: {
      title: 'Why Choose Us?',
      description:
        'We offer compliance solutions that ensure your business stays up-to-date with UAE regulations, helping you mitigate risk and avoid costly penalties.',
      points: [
        {
          icon: GoShieldCheck,
          title: 'Regulatory Expertise',
          description:
            'Our team has in-depth knowledge of UAE’s regulatory environment, ensuring that your company adheres to both local and international standards.',
        },
        {
          icon: FaRegChartBar,
          title: 'Ongoing Monitoring',
          description:
            'We offer continuous compliance monitoring to ensure that your business remains in line with the latest regulatory changes and avoids legal complications.',
        },
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Efficient Filing',
          description:
            'We assist in preparing and submitting all required documents, keeping everything timely and organized to meet compliance deadlines.',
        },
      ],
    },
    services: {
      title: 'Our Compliance Services',
      points: [
        {
          title: 'Audit Preparation',
          description:
            'We help prepare for both internal and external audits, ensuring that your records and reports meet regulatory standards.',
        },
        {
          title: 'Regulatory Filings',
          description:
            'We handle all regulatory filings on your behalf, ensuring that submissions are complete, accurate, and timely.',
        },
        {
          title: 'Continuous Monitoring',
          description:
            'Our continuous monitoring ensures that you remain compliant with any changing regulatory requirements, avoiding any last-minute surprises.',
        },
      ],
    },
    guide: {
      title: 'Complete Compliance Guide for UAE Businesses',
      sectionTitles: [
        { href: '#compliance-overview', title: 'Overview of Compliance' },
        {
          href: '#regulatory-changes',
          title: 'Staying Updated on Regulatory Changes',
        },
        { href: '#penalties-avoidance', title: 'How to Avoid Penalties' },
        { href: '#filing-guidelines', title: 'Filing Guidelines' },
        { href: '#audit-preparation', title: 'Audit Preparation Tips' },
      ],
      content: `
        <h2 id="compliance-overview" style="font-size: 24px; color: #000000;">Overview of Compliance</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Maintaining compliance with UAE’s business regulations is essential to protect your company from fines and legal actions. 
          Compliance involves adhering to tax laws, labor laws, anti-money laundering (AML) regulations, and more. The UAE regularly updates its regulatory framework, 
          making it crucial for businesses to remain aware of the latest legal obligations.
        </p>

        <h2 id="regulatory-changes" style="font-size: 24px; color: #000000;">Staying Updated on Regulatory Changes</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          The UAE regulatory landscape is dynamic, with frequent updates to corporate tax laws, labor policies, and financial regulations. 
          Staying informed is critical. We provide periodic updates and assist in implementing new compliance measures to ensure your business is always ahead of regulatory changes.
        </p>

        <h2 id="penalties-avoidance" style="font-size: 24px; color: #000000;">How to Avoid Penalties</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Penalties for non-compliance in the UAE can range from hefty fines to the suspension of business licenses. 
          We focus on proactive measures, ensuring that filings, renewals, and reports are submitted ahead of deadlines, 
          thereby eliminating the risk of financial or operational disruptions.
        </p>

        <h2 id="filing-guidelines" style="font-size: 24px; color: #000000;">Filing Guidelines</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Filing documents with UAE regulatory bodies can be complex. Each filing requires precise documentation, 
          including proof of company operations, shareholder agreements, and financial statements. 
          Our team simplifies the process by ensuring all documents are organized, up-to-date, and compliant with UAE’s legal requirements.
        </p>

        <h2 id="audit-preparation" style="font-size: 24px; color: #000000;">Audit Preparation Tips</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Preparing for an audit can be a daunting task. However, with the right guidance and timely preparations, 
          audits can be straightforward and stress-free. Our audit preparation services help ensure all records are up-to-date, accurate, and ready for review.
        </p>
      `,
    },
  },
  // 3. Health Insurance
  {
    id: 'health-insurance',
    title: 'Comprehensive Health Insurance Solutions for Your Employees',
    subtitle:
      'We offer a range of health insurance plans tailored to meet UAE’s mandatory coverage requirements.',
    img: img3.src,
    btnTxt: 'Get Your Health Insurance Plan Now!',
    keyPoints: {
      title: 'Why Choose Us?',
      description:
        'We partner with top insurers to provide your business with health insurance plans that cover everything from general medical care to specialized treatments, ensuring your employees are fully protected under UAE law.',
      points: [
        {
          icon: MdHealthAndSafety,
          title: 'Comprehensive Coverage',
          description:
            'Our health insurance plans offer full coverage, including outpatient care, emergency treatment, specialist consultations, and prescription medications.',
        },
        {
          icon: GoShieldCheck,
          title: 'Legal Compliance',
          description:
            'We ensure that all health insurance plans comply with UAE’s mandatory health insurance regulations, helping you avoid fines or legal issues.',
        },
        {
          icon: FaRegChartBar,
          title: 'Affordable Premiums',
          description:
            'We provide a range of plans at competitive rates, ensuring you get the best value while protecting your employees’ well-being.',
        },
      ],
    },
    services: {
      title: 'Our Health Insurance Services',
      points: [
        {
          title: 'Tailored Insurance Plans',
          description:
            'We work with you to understand your company’s specific needs and offer plans that are tailored to your budget and employee demographics.',
        },
        {
          title: 'Comprehensive Coverage Options',
          description:
            'Our health insurance solutions cover everything from general medical visits to emergency care, surgeries, dental treatments, and more.',
        },
        {
          title: 'Dedicated Support',
          description:
            'Our support team assists with claims, policy renewals, and provides guidance on making the most of your insurance plan.',
        },
      ],
    },
    guide: {
      title: 'Health Insurance Guide for UAE Businesses',
      sectionTitles: [
        {
          href: '#insurance-requirements',
          title: 'UAE Health Insurance Requirements',
        },
        { href: '#choosing-plan', title: 'Choosing the Right Plan' },
        { href: '#coverage-details', title: 'What Should Your Plan Cover?' },
        { href: '#claims-process', title: 'Understanding the Claims Process' },
        { href: '#premium-options', title: 'Managing Insurance Premiums' },
      ],
      content: `
        <h2 id="insurance-requirements" style="font-size: 24px; color: #000000;">UAE Health Insurance Requirements</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          The UAE mandates that all employers provide health insurance for their employees. Failure to comply with this can result in penalties. 
          Health insurance is essential to ensure employees have access to medical care, from general check-ups to emergency treatments. 
          It's important to choose a plan that offers full coverage while aligning with your budget.
        </p>

        <h2 id="choosing-plan" style="font-size: 24px; color: #000000;">Choosing the Right Plan</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          The right health insurance plan depends on the size of your business, the nature of your work, and the demographics of your employees. 
          For example, a tech startup with younger employees may have different needs compared to a manufacturing business. We assess your business profile 
          to recommend the best plans that ensure both compliance and comprehensive coverage.
        </p>

        <h2 id="coverage-details" style="font-size: 24px; color: #000000;">What Should Your Plan Cover?</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Comprehensive health insurance should cover general consultations, dental care, specialist visits, hospital stays, surgeries, and emergency treatments. 
          Additionally, some plans offer maternity care, pediatric services, and optical care. We help you customize your plan to suit your workforce.
        </p>

        <h2 id="claims-process" style="font-size: 24px; color: #000000;">Understanding the Claims Process</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Filing insurance claims can be complex, but we make the process straightforward. From gathering necessary paperwork to liaising with the insurer, 
          we ensure claims are processed quickly and efficiently.
        </p>

        <h2 id="premium-options" style="font-size: 24px; color: #000000;">Managing Insurance Premiums</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Premiums for health insurance can vary greatly depending on the level of coverage. We help you find the most affordable plans 
          without compromising on coverage, ensuring that both your employees and your bottom line are protected.
        </p>
      `,
    },
  },
  // 4. Golden Visa UAE
  {
    id: 'golden-visa-uae',
    title: 'Secure Your UAE Golden Visa',
    subtitle:
      'Long-term residency options for investors, entrepreneurs, and skilled professionals in the UAE.',
    img: img4.src,
    btnTxt: 'Apply for Golden Visa Now!',
    keyPoints: {
      title: 'Why Choose Us?',
      description:
        'We help you navigate the Golden Visa application process, ensuring you meet eligibility criteria and have all required documents prepared and submitted on time.',
      points: [
        {
          icon: FaPassport,
          title: 'Eligibility Assessment',
          description:
            'We assess your eligibility for the Golden Visa, ensuring you qualify for this prestigious residency program.',
        },
        {
          icon: GoShieldCheck,
          title: 'Application Assistance',
          description:
            'Our experts guide you through every step of the application process, from gathering the required documentation to submitting your application to the relevant authorities.',
        },
        {
          icon: FaRegChartBar,
          title: 'Document Preparation',
          description:
            'We help you prepare and certify all necessary documents, ensuring that your application is complete and accurate.',
        },
      ],
    },
    services: {
      title: 'Our Golden Visa Services',
      points: [
        {
          title: 'Eligibility Check',
          description:
            'We conduct a thorough assessment of your eligibility, ensuring that you meet the necessary investment, business, or talent criteria.',
        },
        {
          title: 'Complete Documentation',
          description:
            'We assist with the preparation and submission of all required documents, ensuring they meet the UAE’s immigration standards.',
        },
        {
          title: 'Application Submission',
          description:
            'We manage the entire application submission process, liaising with the appropriate government bodies to ensure your application is processed smoothly.',
        },
      ],
    },
    guide: {
      title: 'Golden Visa Guide',
      sectionTitles: [
        { href: '#golden-visa-eligibility', title: 'Golden Visa Eligibility' },
        {
          href: '#application-process',
          title: 'The Golden Visa Application Process',
        },
        { href: '#required-documents', title: 'Documents Needed' },
        {
          href: '#benefits-of-golden-visa',
          title: 'Benefits of the Golden Visa',
        },
        { href: '#renewal-process', title: 'How to Renew the Golden Visa' },
      ],
      content: `
        <h2 id="golden-visa-eligibility" style="font-size: 24px; color: #000000;">Golden Visa Eligibility</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          The UAE Golden Visa offers long-term residency to certain categories of applicants, such as investors, entrepreneurs, high-performing professionals, and specialized talents. 
          The visa typically provides 5 to 10-year residency terms, allowing individuals to live, work, and study in the UAE. Our team will help you determine your eligibility for this visa.
        </p>

        <h2 id="application-process" style="font-size: 24px; color: #000000;">The Golden Visa Application Process</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          The application process involves filling out forms, gathering supporting documents such as passports, investment records, and proof of business ownership. 
          The application is submitted to UAE authorities, and the timeline varies depending on the applicant’s category.
        </p>

        <h2 id="required-documents" style="font-size: 24px; color: #000000;">Documents Needed</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Documents required include proof of investment, a valid passport, business incorporation documents, and in the case of professionals, proof of specialized talent or academic achievements.
        </p>

        <h2 id="benefits-of-golden-visa" style="font-size: 24px; color: #000000;">Benefits of the Golden Visa</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          The Golden Visa offers numerous benefits, including long-term residency, the ability to sponsor family members, access to high-quality healthcare, and the freedom to establish businesses across the UAE.
        </p>

        <h2 id="renewal-process" style="font-size: 24px; color: #000000;">How to Renew the Golden Visa</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Renewing the Golden Visa is a straightforward process. You will need to submit updated documents, proof of investment or business activity, and a renewal application form. Our team can assist with all renewal requirements.
        </p>
      `,
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
  // 6. Will Preparation Service
  {
    id: 'will-preparation-service',
    title: 'Protect Your Legacy with Professional Will Preparation Services',
    subtitle:
      'Ensure your assets and loved ones are protected with a legally binding will prepared by experts in UAE law.',
    img: img6.src,
    btnTxt: 'Prepare Your Will Now!',
    keyPoints: {
      title: 'Why Choose Us?',
      description:
        'We provide tailored will preparation services to ensure that your assets are distributed according to your wishes, in full compliance with UAE laws.',
      points: [
        {
          icon: AiOutlineFileProtect,
          title: 'Personalized Will Drafting',
          description:
            'Our services ensure that your will reflects your individual preferences and safeguards your assets for your loved ones.',
        },
        {
          icon: GoShieldCheck,
          title: 'Legal Compliance',
          description:
            'We ensure that your will is drafted in full compliance with UAE law, preventing any potential legal challenges.',
        },
        {
          icon: FaRegChartBar,
          title: 'Asset Protection',
          description:
            'Our team works to ensure that your assets are protected and distributed in line with your wishes, avoiding family disputes and legal complications.',
        },
      ],
    },
    services: {
      title: 'Our Will Preparation Services',
      points: [
        {
          title: 'Personalized Consultation',
          description:
            'We offer one-on-one consultations to understand your wishes and ensure that they are clearly reflected in your will.',
        },
        {
          title: 'Drafting the Will',
          description:
            'Our legal team drafts the will, ensuring that all legal requirements are met and your estate is protected.',
        },
        {
          title: 'Amendments and Updates',
          description:
            'As your life circumstances change, we offer services to amend and update your will, ensuring that your legacy is secure at all times.',
        },
      ],
    },
    guide: {
      title: 'Comprehensive Guide to Will Preparation in the UAE',
      sectionTitles: [
        {
          href: '#importance-of-will',
          title: 'Importance of Will Preparation',
        },
        {
          href: '#legal-requirements',
          title: 'Legal Requirements for Wills in UAE',
        },
        {
          href: '#distribution-of-assets',
          title: 'How Assets Are Distributed',
        },
        { href: '#executor-duties', title: 'Executor Duties' },
        { href: '#will-amendments', title: 'When to Update Your Will' },
      ],
      content: `
        <h2 id="importance-of-will" style="font-size: 24px; color: #000000;">Importance of Will Preparation</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Preparing a legally binding will is one of the most important steps you can take to protect your family and assets. 
          Without a will, your estate could be distributed in a way that doesn’t align with your wishes, leaving loved ones without the protection they need.
        </p>

        <h2 id="legal-requirements" style="font-size: 24px; color: #000000;">Legal Requirements for Wills in UAE</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          The UAE requires that wills follow specific legal frameworks to be enforceable. Our team ensures that your will meets all necessary legal requirements, 
          from notarization to compliance with UAE inheritance laws, particularly for expats and business owners.
        </p>

        <h2 id="distribution-of-assets" style="font-size: 24px; color: #000000;">How Assets Are Distributed</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          A will outlines how your assets should be distributed upon your passing. This includes property, investments, business shares, and personal belongings. 
          We ensure your estate is distributed as per your wishes, minimizing disputes among heirs.
        </p>

        <h2 id="executor-duties" style="font-size: 24px; color: #000000;">Executor Duties</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          The executor of your will is responsible for carrying out your instructions. We help you appoint a trustworthy executor who will oversee the distribution of your estate and ensure that all legal formalities are observed.
        </p>

        <h2 id="will-amendments" style="font-size: 24px; color: #000000;">When to Update Your Will</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          It’s important to update your will as your circumstances change, such as after marriage, the birth of a child, or a significant change in assets. 
          We offer will amendment services to ensure that your wishes are accurately reflected at all times.
        </p>
      `,
    },
  },
  {
    id: 'icv-certification',
    title: 'Enhance Your Business with In-Country Value (ICV) Certification',
    subtitle:
      'Achieve ICV certification to boost your business standing in the UAE market and improve your eligibility for government contracts.',
    img: img6.src,
    btnTxt: 'Get Your ICV Certification Now!',
    keyPoints: {
      title: 'Why Choose Us?',
      description:
        'We assist businesses in obtaining In-Country Value (ICV) certification, enhancing your company’s competitiveness in the UAE market by prioritizing local economic value.',
      points: [
        {
          icon: AiOutlineFileProtect,
          title: 'ICV Assessment',
          description:
            'Our team evaluates your business’s contribution to the local economy, guiding you through the ICV assessment process.',
        },
        {
          icon: GoShieldCheck,
          title: 'Application Assistance',
          description:
            'We manage the entire ICV certification process, ensuring your documents meet the criteria and are submitted to the relevant authorities.',
        },
        {
          icon: FaRegChartBar,
          title: 'Improve Business Opportunities',
          description:
            'ICV certification opens doors for participating in government contracts and projects, giving your business a competitive edge.',
        },
      ],
    },
    services: {
      title: 'Our ICV Certification Services',
      points: [
        {
          title: 'ICV Pre-Certification Assessment',
          description:
            'We assess your company’s operations to determine your ICV score, providing guidance on how to maximize your contribution to the UAE’s economy.',
        },
        {
          title: 'Document Submission & Compliance',
          description:
            'Our team prepares and submits all necessary documentation, ensuring compliance with the ICV program’s requirements.',
        },
        {
          title: 'Ongoing ICV Compliance',
          description:
            'We offer support to help your business maintain its ICV certification, ensuring that your operations continue to meet the program’s criteria.',
        },
      ],
    },
    guide: {
      title: 'Comprehensive Guide to ICV Certification in the UAE',
      sectionTitles: [
        {
          href: '#importance-of-icv',
          title: 'Why ICV Certification is Important',
        },
        {
          href: '#icv-process',
          title: 'ICV Certification Process',
        },
        {
          href: '#improving-icv-score',
          title: 'How to Improve Your ICV Score',
        },
        {
          href: '#benefits-of-icv',
          title: 'Benefits of ICV Certification',
        },
      ],
      content: `
              <h2 id="importance-of-icv" style="font-size: 24px; color: #000000;">Why ICV Certification is Important</h2>
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                The In-Country Value (ICV) program was introduced to encourage businesses to contribute more to the UAE economy by sourcing locally, investing in Emirati talent, and supporting the nation’s industrial sectors. 
                ICV certification enhances your business’s standing, making you eligible for government tenders and contracts.
              </p>
      
              <h2 id="icv-process" style="font-size: 24px; color: #000000;">ICV Certification Process</h2>
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                The ICV certification process involves evaluating your company’s financial and operational data to determine your contribution to the UAE’s economy. 
                We guide you through this process, helping your business achieve ICV certification by complying with all necessary regulations.
              </p>
      
              <h2 id="improving-icv-score" style="font-size: 24px; color: #000000;">How to Improve Your ICV Score</h2>
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                Businesses can improve their ICV score by increasing their local sourcing, investing in Emirati talent, and contributing to local industrial sectors. 
                We provide strategies to help you enhance your ICV score and boost your business’s competitiveness in the UAE market.
              </p>
      
              <h2 id="benefits-of-icv" style="font-size: 24px; color: #000000;">Benefits of ICV Certification</h2>
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                ICV certification provides numerous benefits, including eligibility for government tenders and contracts, enhanced market reputation, and support for long-term business growth.
              </p>
            `,
    },
  },

  {
    id: 'iso-certification',
    title: 'Achieve Global Standards with ISO Certification for Your Business',
    subtitle:
      'ISO certification demonstrates your business’s commitment to quality, safety, and efficiency. Let our experts guide you through the process.',
    img: img6.src,
    btnTxt: 'Get ISO Certified Today!',
    keyPoints: {
      title: 'Why Choose Us?',
      description:
        'We assist businesses in obtaining ISO certification, ensuring your company meets international standards for quality management, environmental management, and more.',
      points: [
        {
          icon: AiOutlineFileProtect,
          title: 'ISO Standard Selection',
          description:
            'Our experts help you identify the ISO standard that best aligns with your business needs, whether it’s ISO 9001, ISO 14001, or ISO 45001.',
        },
        {
          icon: GoShieldCheck,
          title: 'ISO Certification Process',
          description:
            'We manage the ISO certification process from start to finish, ensuring that all requirements are met and your business achieves compliance.',
        },
        {
          icon: FaRegChartBar,
          title: 'Improved Efficiency',
          description:
            'ISO certification helps streamline your business processes, reducing inefficiencies and ensuring that you deliver quality products and services.',
        },
      ],
    },
    services: {
      title: 'Our ISO Certification Services',
      points: [
        {
          title: 'ISO Pre-Certification Assessment',
          description:
            'We conduct a detailed assessment of your business operations to identify gaps and opportunities for improvement, ensuring your business is ready for ISO certification.',
        },
        {
          title: 'ISO Documentation & Compliance',
          description:
            'Our team assists in preparing the necessary documentation and ensures that your business complies with the ISO standard requirements.',
        },
        {
          title: 'Post-Certification Support',
          description:
            'We provide ongoing support to help your business maintain its ISO certification and ensure continued compliance with global standards.',
        },
      ],
    },
    guide: {
      title: 'Complete Guide to ISO Certification',
      sectionTitles: [
        {
          href: '#iso-benefits',
          title: 'Why ISO Certification Matters',
        },
        {
          href: '#iso-process',
          title: 'ISO Certification Process',
        },
        {
          href: '#iso-standards',
          title: 'Different Types of ISO Standards',
        },
        {
          href: '#iso-maintenance',
          title: 'Maintaining ISO Certification',
        },
      ],
      content: `
              <h2 id="iso-benefits" style="font-size: 24px; color: #000000;">Why ISO Certification Matters</h2>
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                ISO certification enhances your business’s credibility by demonstrating your commitment to quality, safety, and efficiency. 
                It provides a competitive advantage in the global market and helps ensure customer satisfaction and operational excellence.
              </p>
      
              <h2 id="iso-process" style="font-size: 24px; color: #000000;">ISO Certification Process</h2>
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                The ISO certification process involves conducting a thorough assessment of your business operations, addressing gaps, and ensuring compliance with the chosen ISO standard. 
                We guide you through every step, from initial assessment to final certification.
              </p>
      
              <h2 id="iso-standards" style="font-size: 24px; color: #000000;">Different Types of ISO Standards</h2>
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                ISO offers a wide range of standards, including ISO 9001 (Quality Management), ISO 14001 (Environmental Management), and ISO 45001 (Occupational Health and Safety). 
                We help you select the standard that best fits your business’s needs and objectives.
              </p>
      
              <h2 id="iso-maintenance" style="font-size: 24px; color: #000000;">Maintaining ISO Certification</h2>
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                Once you have achieved ISO certification, it’s important to maintain compliance. 
                We provide ongoing support to ensure your business continues to meet ISO standards and benefits from improved efficiency and quality control.
              </p>
            `,
    },
  },
  {
    id: 'zoho-books',
    title: 'Effortless Accounting and Finance Management with Zoho Books',
    subtitle:
      'Streamline your business finances with Zoho Books, a powerful cloud-based accounting software tailored for businesses in the UAE.',
    img: img6.src,
    btnTxt: 'Get Started with Zoho Books Today!',
    keyPoints: {
      title: 'Why Choose Zoho Books?',
      description:
        'Zoho Books is an all-in-one accounting software designed to help businesses manage their finances efficiently. With features like automated tax calculations, invoice management, and expense tracking, Zoho Books simplifies your financial operations.',
      points: [
        {
          icon: AiOutlineFileProtect,
          title: 'Automated Tax Calculations',
          description:
            'Zoho Books automatically calculates VAT, ensuring that your business stays compliant with UAE tax laws, reducing manual errors and saving time.',
        },
        {
          icon: GoShieldCheck,
          title: 'Real-Time Financial Insights',
          description:
            'Get real-time insights into your business’s financial health with powerful reporting features that help you make informed decisions.',
        },
        {
          icon: FaRegChartBar,
          title: 'Easy Invoicing and Payment Collection',
          description:
            'Send professional invoices, set up recurring billing, and accept online payments through multiple gateways, all within Zoho Books.',
        },
      ],
    },
    services: {
      title: 'Our Zoho Books Integration Services',
      points: [
        {
          title: 'Setup & Configuration',
          description:
            'We assist you with setting up and configuring Zoho Books according to your business needs, ensuring all features are optimized for your industry.',
        },
        {
          title: 'Customization',
          description:
            'We customize Zoho Books to align with your business processes, including setting up VAT, tax codes, custom invoice templates, and more.',
        },
        {
          title: 'Training & Support',
          description:
            'We provide comprehensive training for your team on how to use Zoho Books effectively and offer ongoing support to ensure smooth operations.',
        },
      ],
    },
    guide: {
      title: 'Complete Guide to Zoho Books for UAE Businesses',
      sectionTitles: [
        {
          href: '#zoho-benefits',
          title: 'Why Zoho Books is Ideal for UAE Businesses',
        },
        {
          href: '#zoho-setup',
          title: 'How to Set Up Zoho Books',
        },
        {
          href: '#zoho-tax-compliance',
          title: 'Managing VAT and Tax Compliance with Zoho Books',
        },
        {
          href: '#zoho-automation',
          title: 'Automating Financial Processes in Zoho Books',
        },
      ],
      content: `
          <h2 id="zoho-benefits" style="font-size: 24px; color: #000000;">Why Zoho Books is Ideal for UAE Businesses</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Zoho Books is specifically designed to handle the unique financial and tax requirements of businesses in the UAE. 
            It supports VAT compliance, multi-currency transactions, and offers powerful features to manage your accounts, invoicing, expenses, and inventory all in one platform.
          </p>
  
          <h2 id="zoho-setup" style="font-size: 24px; color: #000000;">How to Set Up Zoho Books</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Setting up Zoho Books is simple with our step-by-step guidance. We help you configure your company’s financial settings, set up VAT and tax codes, and customize invoices and reports according to your business requirements.
          </p>
  
          <h2 id="zoho-tax-compliance" style="font-size: 24px; color: #000000;">Managing VAT and Tax Compliance with Zoho Books</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Zoho Books simplifies tax compliance with automatic VAT calculation and reporting. 
            We assist you in setting up tax rates, generating VAT returns, and ensuring your business remains compliant with UAE tax laws.
          </p>
  
          <h2 id="zoho-automation" style="font-size: 24px; color: #000000;">Automating Financial Processes in Zoho Books</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Automate repetitive tasks such as invoicing, payment reminders, and reconciliation with Zoho Books. 
            This allows you to focus on growing your business while the system handles routine accounting tasks.
          </p>
        `,
    },
  },
  {
    id: 'aml-diligence',
    title: 'Ensure Full Compliance with AML Diligence Requirements',
    subtitle:
      'Our AML Diligence services help businesses comply with UAE’s Anti-Money Laundering laws by conducting thorough customer due diligence and risk assessments.',
    img: img6.src,
    btnTxt: 'Ensure AML Compliance Today!',
    keyPoints: {
      title: 'Why Choose Us?',
      description:
        'We provide end-to-end Anti-Money Laundering (AML) Diligence services to help businesses meet regulatory requirements, ensuring that you avoid penalties and maintain full compliance.',
      points: [
        {
          icon: AiOutlineFileProtect,
          title: 'Comprehensive Customer Due Diligence (CDD)',
          description:
            'We conduct thorough CDD processes to ensure that all customers are properly vetted, reducing the risk of financial crimes.',
        },
        {
          icon: GoShieldCheck,
          title: 'AML Risk Assessments',
          description:
            'Our team performs risk assessments of your business to identify areas of vulnerability and implement strategies to mitigate them.',
        },
        {
          icon: FaRegChartBar,
          title: 'Ongoing Monitoring & Reporting',
          description:
            'We provide ongoing monitoring of transactions and help you file Suspicious Activity Reports (SARs) in compliance with UAE regulations.',
        },
      ],
    },
    services: {
      title: 'Our AML Diligence Services',
      points: [
        {
          title: 'Customer Due Diligence (CDD)',
          description:
            'We help you implement robust CDD procedures to ensure all customers are vetted according to AML laws, reducing the risk of dealing with illicit activities.',
        },
        {
          icon: GoShieldCheck,
          title: 'Sanction Screening Software',
          description:
            'The Software not only scans individual and business profiles against global sanctions lists but also checks if individuals are Politically Exposed Persons (PEP). It develops a client risk profile as mandated by the UAE AML Regulations. This is an annual subscription-based software.',
        },

        {
          title: 'Ongoing AML Compliance Monitoring',
          description:
            'We assist in setting up systems to continuously monitor transactions, ensuring your business remains compliant with AML regulations.',
        },
      ],
    },
    guide: {
      title: 'Complete Guide to AML Diligence for UAE Businesses',
      sectionTitles: [
        {
          href: '#aml-overview',
          title: 'What is AML Diligence?',
        },
        {
          href: '#aml-cdd',
          title: 'Understanding Customer Due Diligence (CDD)',
        },
        {
          href: '#aml-risk-assessment',
          title: 'How to Conduct an AML Risk Assessment',
        },
        {
          href: '#aml-reporting',
          title: 'AML Reporting Obligations',
        },
      ],
      content: `
          <h2 id="aml-overview" style="font-size: 24px; color: #000000;">What is AML Diligence?</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Anti-Money Laundering (AML) Diligence involves performing due diligence on customers to ensure they are not engaged in illicit activities. 
            It’s a critical component of any business that deals with financial transactions to prevent involvement in money laundering or terrorism financing.
          </p>
  
          <h2 id="aml-cdd" style="font-size: 24px; color: #000000;">Understanding Customer Due Diligence (CDD)</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Customer Due Diligence (CDD) requires businesses to gather and verify information on their customers to assess their risk of engaging in money laundering activities. 
            This includes identity verification, financial background checks, and continuous monitoring of high-risk customers.
          </p>
  
          <h2 id="aml-risk-assessment" style="font-size: 24px; color: #000000;">How to Conduct an AML Risk Assessment</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Conducting an AML risk assessment involves evaluating your business’s exposure to money laundering risks based on customer profiles, transaction types, and geographic locations. 
            We provide detailed risk assessments and recommendations for improving your AML compliance strategy.
          </p>
  
          <h2 id="aml-reporting" style="font-size: 24px; color: #000000;">AML Reporting Obligations</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Businesses are required to file Suspicious Activity Reports (SARs) if they detect potential money laundering activities. 
            We help you stay compliant with these reporting obligations by ensuring timely submission of reports to the relevant authorities.
          </p>
        `,
    },
  },
];

export default services;
