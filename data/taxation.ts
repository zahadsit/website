import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { GoShieldCheck } from 'react-icons/go';
import { FaRegChartBar } from 'react-icons/fa6';
import hero from '@/assets/images/accountingPage.jpg';
import img1 from '@/assets/images/accounting1.jpg';
import img2 from '@/assets/images/accounting2.jpg';
import img3 from '@/assets/images/accounting3.jpg';
import img4 from '@/assets/images/accounting4.jpg';
import img5 from '@/assets/images/accounting5.jpg';
import img6 from '@/assets/images/accounting6.jpg';
import taxHero from '@/assets/images/Accounting&Tax/tax_hero.jpg';
import tax1 from '@/assets/images/Accounting&Tax/tax_sub1.jpg';
import tax2 from '@/assets/images/Accounting&Tax/tax_sub2.jpg';
import tax3 from '@/assets/images/Accounting&Tax/tax_sub3.jpg';
import tax4 from '@/assets/images/Accounting&Tax/tax_sub4.jpg';
import vatHero from '@/assets/images/Accounting&Tax/vat_hero.jpg';
import vat1 from '@/assets/images/Accounting&Tax/vat_sub1.jpg';
import vat2 from '@/assets/images/Accounting&Tax/vat_sub2.jpg';
import vat3 from '@/assets/images/Accounting&Tax/vat_sub3.jpg';
import vat4 from '@/assets/images/Accounting&Tax/vat_sub4.jpg';

export const taxation = [
  {
    id: 'corporate-tax-uae',
    title: 'Corporate Tax Services in UAE & uk for Compliance and Growth.',
    subtitle:
      'Our expert corporate tax services ensure that your business meets all UAE tax regulations while optimizing your tax liability. From corporate tax registration to filing, we provide comprehensive support tailored to your business’s needs, helping you focus on growth.',
    img: hero.src,
    btnTxt: 'Get Started Today',
    keyPoints: {
      title: 'Key Corporate Tax Solutions',
      description:
        "Effective corporate tax management is essential for the success of any business. Our services help you remain compliant with UAE tax laws, reduce your tax liability, and make informed financial decisions. We offer a full range of corporate tax solutions to support your business's sustainability and growth.",
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Corporate Tax Registration',
          description:
            'We help your business register for corporate tax with the UAE Federal Tax Authority, ensuring compliance with all legal requirements.',
        },
        {
          icon: GoShieldCheck,
          title: 'Corporate Tax Compliance',
          description:
            'Our services ensure that your business complies with UAE corporate tax laws, avoiding penalties and legal issues.',
        },
        {
          icon: FaRegChartBar,
          title: 'Corporate Tax Filing',
          description:
            'We provide accurate and timely corporate tax filings to minimize your tax liability and ensure compliance with UAE regulations.',
        },
      ],
    },
    services: [
      {
        title: 'Corporate Tax Registration',
        description:
          'We guide you through the entire corporate tax registration process, ensuring your business is fully compliant with the Federal Tax Authority’s regulations. Our experts handle all necessary documentation and provide ongoing support to ensure a smooth and timely registration.',
        img: tax1.src,
      },
      {
        title: 'Corporate Tax Filing Services',
        description:
          'Our corporate tax filing services ensure that your tax returns are prepared and submitted accurately and on time. We provide detailed insights into your taxable income and deductions, ensuring that your business meets its obligations while minimizing tax liability.',
        img: vat2.src,
      },
      {
        title: 'Corporate Tax Planning & Strategy',
        description:
          'We help you develop a strategic corporate tax plan that optimizes your tax efficiency. Our experts work closely with you to identify opportunities for tax savings, improve cash flow, and align your tax strategy with your business goals.',
        img: vat3.src,
      },
      {
        title: 'Tax Compliance & Risk Management',
        description:
          'We ensure that your business remains compliant with all corporate tax regulations in the UAE. Our team monitors changes in tax laws and advises on how to mitigate potential risks, helping you avoid penalties and protect your business’s financial health.',
        img: tax4.src,
      },
      {
        title: 'Tax Auditing & Review',
        description:
          'Our tax audit services provide an in-depth review of your corporate tax records to ensure accuracy and compliance. We work with you to identify any discrepancies and make recommendations to improve your tax processes and minimize risks.',
        img: vat4.src,
      },
      {
        title: 'Ongoing Tax Advisory',
        description:
          'Our ongoing tax advisory services help you stay ahead of tax law changes and ensure that your corporate tax strategy remains aligned with your business goals. We offer expert guidance on tax planning, reporting, and compliance to support your long-term success.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'corporate-tax-registration',
    title: 'Corporate Tax Registration Services in UAE for Compliance and Ease',
    subtitle:
      'Our expert corporate tax registration services ensure that your business meets all UAE regulations, providing a seamless and hassle-free registration process with the Federal Tax Authority.',
    img: hero.src,
    btnTxt: 'Register Your Business for Corporate Tax Today!',
    keyPoints: {
      title: 'Key Corporate Tax Registration Solutions',
      description:
        'Corporate tax registration is a crucial step for any business operating in the UAE. Our services ensure compliance with the Federal Tax Authority’s requirements, helping you navigate the process efficiently and accurately.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Complete Guidance',
          description:
            'We provide full support throughout the registration process, ensuring that all documentation is prepared and submitted correctly.',
        },
        {
          icon: GoShieldCheck,
          title: 'Compliance with UAE Tax Laws',
          description:
            'Our services ensure that your business is fully compliant with UAE corporate tax laws, preventing penalties and legal issues.',
        },
        {
          icon: FaRegChartBar,
          title: 'Ongoing Support',
          description:
            'After registration, we offer continued assistance to ensure your business stays compliant with all tax obligations.',
        },
      ],
    },
    services: [
      {
        title: 'Document Preparation & Submission',
        description:
          'We help prepare and submit all necessary documents to the Federal Tax Authority (FTA) for corporate tax registration, ensuring accuracy and timely submission.',
        img: tax1.src,
      },
      {
        title: 'Tax Compliance Guidance',
        description:
          'We guide you through UAE tax regulations, ensuring your business remains compliant throughout the registration process and beyond.',
        img: vat2.src,
      },
      {
        title: 'Ongoing Registration Support',
        description:
          'Once registered, we continue to monitor your business’s compliance with corporate tax regulations, ensuring timely filings and reducing the risk of penalties.',
        img: vat3.src,
      },
      {
        title: 'Tax Advisory & Planning',
        description:
          'Our tax experts provide strategic advice on how to manage your tax obligations effectively, ensuring that your business optimizes its tax position post-registration.',
        img: tax4.src,
      },
      {
        title: 'Tax Filing Support',
        description:
          'Once your business is registered, we offer support for corporate tax filings, ensuring all tax returns are accurate and submitted on time.',
        img: vat4.src,
      },
      {
        title: 'Long-Term Tax Strategy',
        description:
          'We help you develop a long-term tax strategy aligned with your business goals, ensuring compliance and maximizing tax efficiency.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'corporate-tax-assessment',
    title: 'Comprehensive Corporate Tax Assessment Services in UAE',
    subtitle:
      'Our corporate tax assessment services help businesses evaluate their tax obligations, ensuring compliance with UAE regulations while identifying opportunities for tax optimization.',
    img: hero.src,
    btnTxt: 'Assess Your Corporate Tax Today!',
    keyPoints: {
      title: 'Key Corporate Tax Assessment Solutions',
      description:
        'Our corporate tax assessment services provide businesses with an in-depth analysis of their tax liabilities, helping to avoid penalties, reduce tax exposure, and enhance tax efficiency.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Accurate Tax Liability Calculation',
          description:
            'We provide detailed assessments of your corporate tax obligations, ensuring accurate calculations and compliance with UAE tax laws.',
        },
        {
          icon: GoShieldCheck,
          title: 'Risk Identification',
          description:
            'Our assessment services help identify potential risks and tax inefficiencies, providing actionable recommendations to mitigate risks.',
        },
        {
          icon: FaRegChartBar,
          title: 'Tax Optimization Strategies',
          description:
            'We develop tax strategies that align with your business goals, helping you optimize your tax obligations while maintaining compliance.',
        },
      ],
    },
    services: [
      {
        title: 'In-Depth Tax Assessment',
        description:
          'We conduct a comprehensive review of your financial records and business structure to provide a clear understanding of your tax liabilities.',
        img: tax1.src,
      },
      {
        title: 'Risk Identification & Mitigation',
        description:
          'Our team identifies potential risks associated with your current tax structure and offers solutions to minimize exposure to penalties.',
        img: vat2.src,
      },
      {
        title: 'Tax Efficiency Review',
        description:
          'We assess your current tax strategies and provide recommendations to improve tax efficiency and reduce liabilities.',
        img: vat3.src,
      },
      {
        title: 'Compliance Monitoring',
        description:
          'Our experts ensure that your business remains compliant with all corporate tax regulations, minimizing the risk of non-compliance penalties.',
        img: tax4.src,
      },
      {
        title: 'Ongoing Advisory',
        description:
          'We offer ongoing tax advisory services to help you stay ahead of any changes in tax laws and continue optimizing your tax obligations.',
        img: vat4.src,
      },
      {
        title: 'Customized Tax Planning',
        description:
          'Our customized tax plans are designed to help your business achieve its financial goals while maintaining compliance with UAE tax regulations.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'foreign-tax-advisory',
    title: 'Optimize Your Global Tax Strategy with Foreign Tax Credit Advisory',
    subtitle:
      'Our foreign tax credit advisory services help businesses navigate international tax systems, ensuring you take full advantage of foreign tax credits to reduce your overall tax burden.',
    img: hero.src,
    btnTxt: 'Maximize Your Foreign Tax Credits Today!',
    keyPoints: {
      title: 'Key Foreign Tax Credit Solutions',
      description:
        'We provide expert advice on foreign tax credit systems to help businesses avoid double taxation and reduce global tax liabilities, ensuring full compliance with UAE and international tax regulations.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Maximize Foreign Tax Credits',
          description:
            'We help businesses take full advantage of foreign tax credits, reducing their total tax burden and improving cash flow.',
        },
        {
          icon: GoShieldCheck,
          title: 'Global Tax Compliance',
          description:
            'Our team ensures that your business complies with both UAE and international tax laws, reducing the risk of double taxation.',
        },
        {
          icon: FaRegChartBar,
          title: 'Strategic Tax Planning',
          description:
            'We develop customized tax strategies that maximize foreign tax credits while optimizing global tax compliance.',
        },
      ],
    },
    services: [
      {
        title: 'Foreign Tax Credit Analysis',
        description:
          'We conduct a thorough review of your international operations to identify opportunities for claiming foreign tax credits, reducing your global tax liabilities.',
        img: tax1.src,
      },
      {
        title: 'Cross-Border Tax Advisory',
        description:
          'We provide guidance on managing cross-border transactions, ensuring that you maximize foreign tax credits while complying with UAE and international tax regulations.',
        img: vat2.src,
      },
      {
        title: 'Tax Treaty Compliance',
        description:
          'Our experts ensure that your business takes full advantage of applicable tax treaties, minimizing exposure to double taxation.',
        img: vat3.src,
      },
      {
        title: 'Global Tax Strategy Development',
        description:
          'We develop global tax strategies that align with your business goals, helping you navigate complex international tax systems and reduce liabilities.',
        img: tax4.src,
      },
      {
        title: 'Ongoing Tax Advisory Support',
        description:
          'We provide continuous support to ensure that your business remains compliant with changing tax laws and maximizes foreign tax credits.',
        img: vat4.src,
      },
      {
        title: 'International Tax Optimization',
        description:
          'Our team helps you optimize your international tax structure, improving your global cash flow and reducing overall tax liabilities.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'anti-abuse-regulations',
    title: 'Ensure Compliance with Anti-Abuse Regulations in UAE',
    subtitle:
      'Our Anti-Abuse Regulations Advisory services ensure that your business remains compliant with UAE’s anti-abuse tax laws, reducing the risk of penalties and protecting your reputation.',
    img: hero.src,
    btnTxt: 'Get Expert Anti-Abuse Advice Today!',
    keyPoints: {
      title: 'Key Anti-Abuse Regulations Advisory Solutions',
      description:
        'We provide businesses with expert guidance on navigating UAE’s anti-abuse tax regulations, helping you avoid aggressive tax practices and ensuring full compliance with legal requirements.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Regulatory Compliance',
          description:
            'We ensure your business complies with UAE anti-abuse regulations, avoiding legal risks and potential penalties.',
        },
        {
          icon: GoShieldCheck,
          title: 'Risk Identification & Mitigation',
          description:
            'We identify areas of your business that may be at risk of violating anti-abuse regulations and provide strategies to mitigate these risks.',
        },
        {
          icon: FaRegChartBar,
          title: 'Ethical Tax Planning',
          description:
            'Our advisory services help develop ethical tax strategies that comply with UAE anti-abuse laws while optimizing your tax obligations.',
        },
      ],
    },
    services: [
      {
        title: 'Compliance Assessment',
        description:
          'We conduct a detailed assessment of your business’s compliance with anti-abuse regulations, identifying potential risks and providing actionable recommendations.',
        img: tax1.src,
      },
      {
        title: 'Risk Mitigation Strategies',
        description:
          'We help businesses implement strategies to reduce the risk of violating anti-abuse regulations, ensuring legal and ethical tax practices.',
        img: vat2.src,
      },
      {
        title: 'Ongoing Compliance Monitoring',
        description:
          'Our experts provide ongoing monitoring to ensure your business remains compliant with evolving anti-abuse regulations in the UAE.',
        img: vat3.src,
      },
      {
        title: 'Tax Strategy Review',
        description:
          'We review your current tax strategies to ensure they align with UAE’s anti-abuse regulations and provide guidance on improving tax efficiency without breaching regulations.',
        img: tax4.src,
      },
      {
        title: 'Ethical Tax Planning',
        description:
          'Our team develops ethical and compliant tax planning strategies, helping you optimize tax efficiency while avoiding aggressive tax practices.',
        img: vat4.src,
      },
      {
        title: 'Advisory Support',
        description:
          'We offer continuous advisory support to help your business navigate anti-abuse regulations and avoid penalties.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'transfer-pricing',
    title: 'Transfer Pricing Benchmarking to Ensure Compliance & Fair Pricing',
    subtitle:
      'Our Transfer Pricing Benchmarking services help businesses comply with UAE transfer pricing regulations, ensuring that intercompany transactions are priced fairly and in line with market standards.',
    img: hero.src,
    btnTxt: 'Benchmark Your Transfer Pricing Today!',
    keyPoints: {
      title: 'Key Transfer Pricing Benchmarking Solutions',
      description:
        'We provide comprehensive transfer pricing benchmarking services to help businesses comply with UAE regulations and avoid penalties, ensuring that your intercompany transactions are priced in accordance with market standards.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Accurate Pricing Strategies',
          description:
            'We develop accurate and compliant transfer pricing strategies, ensuring that intercompany transactions are in line with global and UAE regulations.',
        },
        {
          icon: GoShieldCheck,
          title: 'Compliance with UAE Laws',
          description:
            'Our services ensure that your business complies with UAE transfer pricing regulations, reducing the risk of audits and penalties.',
        },
        {
          icon: FaRegChartBar,
          title: 'Detailed Benchmarking Reports',
          description:
            'We provide detailed benchmarking reports to justify the pricing of your intercompany transactions, ensuring transparency and compliance.',
        },
      ],
    },
    services: [
      {
        title: 'Transfer Pricing Analysis',
        description:
          'We conduct a detailed analysis of your intercompany transactions to ensure they meet arm’s length pricing standards, reducing the risk of non-compliance.',
        img: tax1.src,
      },
      {
        title: 'Benchmarking Report Preparation',
        description:
          'Our team prepares detailed benchmarking reports, providing documentation that supports your transfer pricing practices and ensures regulatory compliance.',
        img: vat2.src,
      },
      {
        title: 'Risk Assessment & Mitigation',
        description:
          'We assess the potential risks associated with your transfer pricing strategies and provide solutions to mitigate those risks, ensuring compliance with UAE regulations.',
        img: vat3.src,
      },
      {
        title: 'Transfer Pricing Documentation',
        description:
          'We help you prepare the necessary transfer pricing documentation to comply with UAE tax authorities’ requirements.',
        img: tax4.src,
      },
      {
        title: 'Ongoing Advisory Support',
        description:
          'Our experts offer ongoing advisory services to ensure your transfer pricing strategies remain compliant with UAE and international regulations.',
        img: vat4.src,
      },
      {
        title: 'Annual Compliance Review',
        description:
          'We conduct annual reviews of your transfer pricing strategies to ensure continuous compliance with UAE laws.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'tax-residency-advisory',
    title: 'Tax Residency Advisory Services to Optimize Your Tax Position',
    subtitle:
      'Our Tax Residency Advisory services help businesses and individuals understand UAE’s tax residency rules, ensuring compliance and optimizing your tax position.',
    img: hero.src,
    btnTxt: 'Get Expert Tax Residency Advice Today!',
    keyPoints: {
      title: 'Key Tax Residency Advisory Solutions',
      description:
        'We provide expert advisory services to help businesses and individuals navigate UAE’s tax residency rules, ensuring compliance and optimizing tax obligations.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Tax Residency Status Evaluation',
          description:
            'We assess your business or individual tax residency status and provide strategies to optimize your tax obligations.',
        },
        {
          icon: GoShieldCheck,
          title: 'Compliance with UAE Tax Residency Laws',
          description:
            'Our services ensure that your business or personal tax residency status complies with UAE’s tax residency regulations, reducing legal risks.',
        },
        {
          icon: FaRegChartBar,
          title: 'Residency Certificate Application',
          description:
            'We assist with the application process for tax residency certificates, ensuring all documentation is prepared and submitted accurately.',
        },
      ],
    },
    services: [
      {
        title: 'Tax Residency Status Assessment',
        description:
          'We assess your current residency status to determine whether you qualify for UAE tax residency, ensuring compliance with local laws.',
        img: tax1.src,
      },
      {
        title: 'Residency Certificate Application',
        description:
          'Our team assists with the application for a UAE tax residency certificate, preparing and submitting all required documents to the relevant authorities.',
        img: vat2.src,
      },
      {
        title: 'Global Tax Implications',
        description:
          'We provide advisory services on the global tax implications of your residency status, helping you navigate international tax laws and avoid double taxation.',
        img: vat3.src,
      },
      {
        title: 'Tax Residency Optimization',
        description:
          'We offer strategies to optimize your tax residency status, helping reduce your tax liabilities while maintaining compliance with UAE regulations.',
        img: tax4.src,
      },
      {
        title: 'Ongoing Residency Advisory',
        description:
          'Our experts provide continuous advisory support, ensuring that you remain compliant with UAE tax residency rules as your business or personal circumstances evolve.',
        img: vat4.src,
      },
      {
        title: 'Compliance Monitoring',
        description:
          'We monitor changes in UAE tax residency laws and keep you informed to ensure that your tax residency status remains compliant and beneficial.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'permanent-establishment-advisory',
    title: 'Permanent Establishment Advisory for Global Businesses',
    subtitle:
      'Our Permanent Establishment Advisory services help businesses understand the tax implications of establishing a permanent presence in the UAE, ensuring compliance with local and international regulations.',
    img: hero.src,
    btnTxt: 'Get Permanent Establishment Advice Today!',
    keyPoints: {
      title: 'Key Permanent Establishment Advisory Solutions',
      description:
        'We provide expert advisory services to businesses looking to establish a permanent presence in the UAE, helping you comply with local tax laws and minimize your global tax exposure.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'PE Status Assessment',
          description:
            'We assess whether your business activities in the UAE qualify as a Permanent Establishment, triggering tax obligations.',
        },
        {
          icon: GoShieldCheck,
          title: 'Regulatory Compliance',
          description:
            'We ensure that your business complies with UAE and international regulations regarding Permanent Establishment status.',
        },
        {
          icon: FaRegChartBar,
          title: 'Tax Optimization Strategies',
          description:
            'Our team provides strategies to help you minimize tax liabilities related to your Permanent Establishment status while maintaining compliance.',
        },
      ],
    },
    services: [
      {
        title: 'PE Status Determination',
        description:
          'We evaluate your business operations to determine if your activities in the UAE meet the criteria for Permanent Establishment under UAE tax law.',
        img: tax1.src,
      },
      {
        title: 'Compliance with UAE PE Regulations',
        description:
          'Our experts ensure that your business complies with all UAE regulations related to Permanent Establishment, avoiding legal risks and penalties.',
        img: vat2.src,
      },
      {
        title: 'Global Tax Risk Assessment',
        description:
          'We conduct a global tax risk assessment to identify any potential exposure from establishing a Permanent Establishment in the UAE.',
        img: vat3.src,
      },
      {
        title: 'PE Tax Planning & Strategy',
        description:
          'We provide tailored tax planning strategies to optimize your tax obligations while remaining compliant with UAE and international regulations.',
        img: tax4.src,
      },
      {
        title: 'Ongoing PE Compliance Monitoring',
        description:
          'Our team offers continuous monitoring of your PE activities to ensure ongoing compliance with UAE tax laws.',
        img: vat4.src,
      },
      {
        title: 'Advisory on Global Tax Structures',
        description:
          'We advise on structuring your business’s global operations to minimize Permanent Establishment risks and optimize tax efficiency.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'public-benefit-entity-advisory',
    title: 'Advisory Services for Qualifying Public Benefit Entities in UAE',
    subtitle:
      'We help public benefit entities navigate UAE’s tax regulations, ensuring compliance while optimizing their tax status for growth and sustainability.',
    img: hero.src,
    btnTxt: 'Consult with Our Public Benefit Entity Experts Today!',
    keyPoints: {
      title: 'Key Public Benefit Entity Advisory Solutions',
      description:
        'Our advisory services assist public benefit entities in the UAE with understanding their tax obligations, maintaining compliance, and ensuring that they qualify for tax exemptions.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Qualification Assessment',
          description:
            'We assess whether your organization qualifies as a public benefit entity under UAE tax law, ensuring eligibility for tax benefits.',
        },
        {
          icon: GoShieldCheck,
          title: 'Tax Exemption Compliance',
          description:
            'We ensure your public benefit entity complies with all necessary regulations to maintain tax-exempt status.',
        },
        {
          icon: FaRegChartBar,
          title: 'Advisory on Non-Profit Taxation',
          description:
            'Our team provides advice on structuring your operations to meet tax-exempt status while fulfilling your public benefit objectives.',
        },
      ],
    },
    services: [
      {
        title: 'Qualification Review',
        description:
          'We conduct a detailed review of your organization to determine whether it qualifies as a public benefit entity under UAE law.',
        img: tax1.src,
      },
      {
        title: 'Tax Exemption Application Assistance',
        description:
          'We assist with preparing and submitting the necessary documents to apply for tax-exempt status as a qualifying public benefit entity.',
        img: vat2.src,
      },
      {
        title: 'Regulatory Compliance Monitoring',
        description:
          'Our experts provide continuous monitoring to ensure your organization maintains compliance with the UAE regulations governing public benefit entities.',
        img: vat3.src,
      },
      {
        title: 'Strategic Tax Planning for Non-Profits',
        description:
          'We help public benefit entities develop tax-efficient strategies that align with their mission while optimizing their tax obligations.',
        img: tax4.src,
      },
      {
        title: 'Ongoing Advisory Support',
        description:
          'We offer ongoing advisory services to help public benefit entities navigate changes in tax laws and maintain their qualifying status.',
        img: vat4.src,
      },
      {
        title: 'Governance & Compliance Review',
        description:
          'We provide governance and compliance reviews to ensure that your organization’s operations meet the legal requirements for a public benefit entity.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'freezone-person-advisory',
    title: 'Qualifying Freezone Person Advisory Services for Tax Efficiency',
    subtitle:
      'Our Qualifying Freezone Person Advisory services help businesses operating in UAE freezones ensure compliance with tax regulations while optimizing tax benefits.',
    img: hero.src,
    btnTxt: 'Maximize Freezone Tax Benefits Today!',
    keyPoints: {
      title: 'Key Freezone Advisory Solutions',
      description:
        'We provide expert advisory services to help businesses qualify as freezone persons under UAE tax laws, ensuring they receive all available tax benefits while maintaining compliance.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Qualification for Freezone Benefits',
          description:
            'We assess your business’s eligibility to qualify as a freezone person and receive tax incentives under UAE law.',
        },
        {
          icon: GoShieldCheck,
          title: 'Regulatory Compliance',
          description:
            'Our team ensures that your business complies with the regulations required to maintain qualifying freezone person status.',
        },
        {
          icon: FaRegChartBar,
          title: 'Tax Optimization',
          description:
            'We provide strategies to help you optimize your tax position, ensuring that your freezone operations are as tax-efficient as possible.',
        },
      ],
    },
    services: [
      {
        title: 'Qualification Assessment',
        description:
          'We review your business’s operations and structure to determine if it qualifies for freezone person status under UAE tax laws.',
        img: tax1.src,
      },
      {
        title: 'Tax Incentive Application Assistance',
        description:
          'We assist with the application process for freezone tax incentives, ensuring that all documentation is properly prepared and submitted.',
        img: vat2.src,
      },
      {
        title: 'Compliance Monitoring',
        description:
          'We provide ongoing monitoring to ensure your business remains compliant with freezone regulations and continues to qualify for tax benefits.',
        img: vat3.src,
      },
      {
        title: 'Freezone Tax Planning',
        description:
          'Our experts offer tax planning services to help you maximize the benefits of operating as a freezone person, reducing your tax liability.',
        img: tax4.src,
      },
      {
        title: 'Ongoing Advisory Support',
        description:
          'We provide continuous advisory support to ensure your business remains eligible for freezone tax benefits while staying compliant with evolving regulations.',
        img: vat4.src,
      },
      {
        title: 'Annual Compliance Review',
        description:
          'We conduct an annual review of your operations to ensure ongoing compliance with UAE freezone regulations, minimizing the risk of losing tax benefits.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'cbcr-reporting',
    title: 'Country by Country Reporting (CBCR) Compliance Services',
    subtitle:
      'Our CBCR services ensure that your multinational enterprise remains compliant with UAE and international regulations for Country by Country Reporting, helping you avoid penalties and meet global tax transparency requirements.',
    img: hero.src,
    btnTxt: 'Ensure CBCR Compliance Today!',
    keyPoints: {
      title: 'Key CBCR Compliance Solutions',
      description:
        'We provide comprehensive advisory and reporting services to help multinational enterprises comply with the UAE’s Country by Country Reporting (CBCR) regulations, ensuring transparency and minimizing risks of non-compliance.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'CBCR Documentation Preparation',
          description:
            'We assist in preparing detailed CBCR documentation that meets UAE and international regulatory standards, ensuring accurate and timely submissions.',
        },
        {
          icon: GoShieldCheck,
          title: 'Global Compliance Management',
          description:
            'Our experts ensure that your multinational enterprise complies with both local and global CBCR regulations, avoiding penalties and legal issues.',
        },
        {
          icon: FaRegChartBar,
          title: 'Risk Mitigation Strategies',
          description:
            'We provide strategic advice to help you minimize risks associated with CBCR compliance, ensuring your business maintains a transparent and compliant reporting structure.',
        },
      ],
    },
    services: [
      {
        title: 'CBCR Documentation Preparation',
        description:
          'We help prepare your Country by Country Reporting (CBCR) documentation, ensuring it includes all necessary information about your global operations, including revenue, profits, and tax paid in each jurisdiction.',
        img: tax1.src,
      },
      {
        title: 'Compliance Monitoring & Advisory',
        description:
          'Our team provides ongoing monitoring of your compliance with CBCR regulations, ensuring that all reporting obligations are met and advising on potential risk areas.',
        img: vat2.src,
      },
      {
        title: 'CBCR Risk Assessment',
        description:
          'We assess the potential risks associated with your CBCR obligations and provide tailored solutions to minimize exposure to penalties and reputational damage.',
        img: vat3.src,
      },
      {
        title: 'Submission to Relevant Authorities',
        description:
          'We manage the submission of your CBCR reports to the relevant UAE authorities, ensuring that all requirements are fulfilled on time and in full compliance with regulations.',
        img: tax4.src,
      },
      {
        title: 'Global Tax Transparency Strategy',
        description:
          'Our advisory services help you develop a robust global tax transparency strategy, ensuring that your CBCR obligations align with international standards and best practices.',
        img: vat4.src,
      },
      {
        title: 'Ongoing Advisory Support',
        description:
          'We offer ongoing CBCR advisory support, helping you stay ahead of regulatory changes and ensuring continuous compliance with both local and global requirements.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'vat-uae',
    title: 'Comprehensive Value Added Tax (VAT) Services in UAE',
    subtitle:
      'Our VAT services in the UAE ensure that your business complies with all regulations while optimizing your tax obligations. From VAT registration to filing, we provide full support to help your business manage VAT efficiently.',
    img: hero.src,
    btnTxt: 'Manage Your VAT Obligations Today!',
    keyPoints: {
      title: 'Key VAT Services in UAE',
      description:
        'We provide a full range of VAT services to help businesses navigate UAE’s VAT regulations. Our expert team ensures compliance, accuracy, and efficiency in all aspects of VAT management.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'VAT Compliance',
          description:
            'We ensure that your business complies with UAE VAT laws, avoiding penalties and ensuring accurate VAT calculations.',
        },
        {
          icon: GoShieldCheck,
          title: 'Expert VAT Advisory',
          description:
            'Our experts provide guidance on how to optimize VAT payments while staying compliant with the latest VAT regulations.',
        },
        {
          icon: FaRegChartBar,
          title: 'VAT Filing & Documentation',
          description:
            'We handle all aspects of VAT documentation and filing, ensuring that your VAT returns are submitted on time and accurately.',
        },
      ],
    },
    services: [
      {
        title: 'VAT Compliance Management',
        description:
          'We provide comprehensive VAT compliance services to ensure that your business meets all VAT obligations in the UAE, including accurate tax calculations and timely submissions.',
        img: tax1.src,
      },
      {
        title: 'VAT Registration & Deregistration',
        description:
          'Our team assists with VAT registration and deregistration, ensuring a smooth process with the UAE Federal Tax Authority (FTA). We manage all documentation and compliance requirements.',
        img: vat2.src,
      },
      {
        title: 'VAT Return Filing',
        description:
          'We ensure that your VAT returns are filed accurately and on time, helping your business avoid penalties and comply with UAE tax regulations.',
        img: vat3.src,
      },
      {
        title: 'VAT Advisory & Strategy',
        description:
          'We provide tailored VAT advisory services to help your business optimize its VAT position, improving cash flow and minimizing tax liabilities.',
        img: tax4.src,
      },
      {
        title: 'VAT Audit Support',
        description:
          'Our team provides full support during VAT audits, ensuring that your business remains compliant with UAE tax authorities and mitigating any potential risks.',
        img: vat4.src,
      },
      {
        title: 'Ongoing VAT Advisory',
        description:
          'We offer ongoing advisory services to ensure that your business stays compliant with evolving VAT regulations in the UAE.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'vat-registration',
    title: 'Hassle-Free VAT Registration Services in UAE',
    subtitle:
      'Our VAT registration services ensure that your business complies with UAE VAT regulations. We handle the entire registration process, ensuring timely and accurate submission to the Federal Tax Authority (FTA).',
    img: hero.src,
    btnTxt: 'Register for VAT Today!',
    keyPoints: {
      title: 'Key VAT Registration Services',
      description:
        'We help businesses navigate the complex VAT registration process, ensuring compliance with UAE tax laws and minimizing any potential delays.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Complete Registration Assistance',
          description:
            'We guide you through the entire VAT registration process, ensuring that all documentation is prepared and submitted accurately.',
        },
        {
          icon: GoShieldCheck,
          title: 'Compliance with UAE VAT Laws',
          description:
            'Our team ensures that your business meets all UAE VAT registration requirements, avoiding penalties and legal issues.',
        },
        {
          icon: FaRegChartBar,
          title: 'Ongoing Support',
          description:
            'Once registered, we provide ongoing support to ensure your business remains compliant with VAT regulations.',
        },
      ],
    },
    services: [
      {
        title: 'Document Preparation & Submission',
        description:
          'We assist with preparing and submitting all necessary documents to the FTA for VAT registration, ensuring compliance with regulations.',
        img: tax1.src,
      },
      {
        title: 'VAT Eligibility Assessment',
        description:
          'We help determine if your business meets the criteria for mandatory VAT registration, ensuring you comply with UAE VAT laws.',
        img: vat2.src,
      },
      {
        title: 'Ongoing VAT Support',
        description:
          'After registration, we provide continued support to ensure your business remains compliant with all VAT obligations in the UAE.',
        img: vat3.src,
      },
      {
        title: 'Advisory on VAT Obligations',
        description:
          'Our VAT experts provide strategic advice on managing your VAT obligations efficiently, ensuring that your business remains compliant while optimizing VAT payments.',
        img: tax4.src,
      },
      {
        title: 'Timely Registration Process',
        description:
          'We ensure that your VAT registration is completed promptly, helping your business avoid delays and non-compliance penalties.',
        img: vat4.src,
      },
      {
        title: 'VAT Ongoing Compliance Monitoring',
        description:
          'We monitor your compliance with VAT regulations, ensuring your business stays up-to-date with evolving VAT laws.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'vat-deregistration',
    title: 'VAT Deregistration Services in UAE for Seamless Closure',
    subtitle:
      'Our VAT deregistration services help businesses smoothly exit the VAT system in full compliance with UAE regulations. We handle the entire process with the Federal Tax Authority (FTA), ensuring that all requirements are met.',
    img: hero.src,
    btnTxt: 'Deregister Your Business from VAT Today!',
    keyPoints: {
      title: 'Key VAT Deregistration Services',
      description:
        'We provide expert assistance with VAT deregistration, helping businesses complete the process smoothly and without penalties.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Complete Deregistration Assistance',
          description:
            'We guide you through the VAT deregistration process, ensuring that all documentation is prepared and submitted accurately to the FTA.',
        },
        {
          icon: GoShieldCheck,
          title: 'Compliance with VAT Deregistration Rules',
          description:
            'Our experts ensure that your business meets all the conditions for VAT deregistration, avoiding penalties for non-compliance.',
        },
        {
          icon: FaRegChartBar,
          title: 'Timely Deregistration Process',
          description:
            'We ensure that your VAT deregistration is completed promptly, helping you avoid any unnecessary delays or fines.',
        },
      ],
    },
    services: [
      {
        title: 'VAT Deregistration Eligibility Check',
        description:
          'We assess your business’s eligibility for VAT deregistration and advise you on the best course of action to ensure compliance with UAE tax regulations.',
        img: tax1.src,
      },
      {
        title: 'Document Preparation & Submission',
        description:
          'We prepare and submit all the required documentation for VAT deregistration, ensuring full compliance with the FTA’s requirements.',
        img: vat2.src,
      },
      {
        title: 'VAT Deregistration Support',
        description:
          'Our experts provide full support throughout the VAT deregistration process, ensuring that all obligations are met before deregistration.',
        img: vat3.src,
      },
      {
        title: 'Timely Processing & Updates',
        description:
          'We ensure that your VAT deregistration is processed on time, keeping you informed of all updates during the process.',
        img: tax4.src,
      },
      {
        title: 'Post-Deregistration Compliance',
        description:
          'We offer ongoing support after deregistration to ensure that any remaining VAT obligations are fulfilled.',
        img: vat4.src,
      },
      {
        title: 'Penalty Avoidance',
        description:
          'We help your business avoid penalties by ensuring all VAT obligations are settled before completing the deregistration process.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'vat-return-filing',
    title: 'Accurate VAT Return Filing Services in UAE',
    subtitle:
      'Our VAT return filing services ensure that your VAT returns are submitted accurately and on time, avoiding penalties and ensuring compliance with UAE tax regulations.',
    img: hero.src,
    btnTxt: 'File Your VAT Return Today!',
    keyPoints: {
      title: 'Key VAT Return Filing Solutions',
      description:
        'We handle your VAT return filing process from start to finish, ensuring that your business remains compliant with UAE VAT regulations.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Accurate Return Filing',
          description:
            'We ensure that your VAT returns are filed accurately, avoiding any discrepancies that could lead to penalties.',
        },
        {
          icon: GoShieldCheck,
          title: 'On-Time Submissions',
          description:
            'We ensure that your VAT returns are submitted on time, helping you avoid late filing penalties.',
        },
        {
          icon: FaRegChartBar,
          title: 'Detailed VAT Documentation',
          description:
            'Our team prepares detailed VAT documentation to support your VAT returns, ensuring full compliance with UAE tax laws.',
        },
      ],
    },
    services: [
      {
        title: 'VAT Return Filing Preparation',
        description:
          'We prepare your VAT returns with accurate calculations, ensuring all taxable supplies and VAT payable are reported correctly.',
        img: tax1.src,
      },
      {
        title: 'Timely VAT Return Submission',
        description:
          'We ensure that your VAT returns are submitted to the FTA within the required deadlines, avoiding penalties for late submissions.',
        img: vat2.src,
      },
      {
        title: 'Compliance with UAE VAT Regulations',
        description:
          'We ensure that your VAT return filings comply with UAE tax regulations, minimizing the risk of errors or penalties.',
        img: vat3.src,
      },
      {
        title: 'VAT Documentation Support',
        description:
          'Our experts prepare the necessary supporting documentation for your VAT returns, ensuring compliance and ease during audits.',
        img: tax4.src,
      },
      {
        title: 'Post-Filing Support',
        description:
          'We provide ongoing support after VAT returns are filed, addressing any issues or queries from the FTA and ensuring continued compliance.',
        img: vat4.src,
      },
      {
        title: 'Ongoing Advisory Services',
        description:
          'We offer ongoing VAT advisory services to ensure that your business remains compliant with evolving VAT regulations.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'vat-refund',
    title: 'VAT Refund Services in UAE for Optimized Cash Flow',
    subtitle:
      'Our VAT refund services ensure that your business receives timely and accurate VAT refunds from the UAE Federal Tax Authority (FTA). We handle the entire process, helping you recover overpaid VAT efficiently.',
    img: hero.src,
    btnTxt: 'Claim Your VAT Refund Today!',
    keyPoints: {
      title: 'Key VAT Refund Solutions',
      description:
        'We provide expert assistance to businesses seeking VAT refunds, ensuring compliance with UAE regulations and facilitating smooth, timely refund processes.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Accurate Refund Calculation',
          description:
            'We help calculate the exact amount of VAT refund due to your business, ensuring all eligible transactions are claimed.',
        },
        {
          icon: GoShieldCheck,
          title: 'FTA Compliance',
          description:
            'Our services ensure compliance with FTA requirements, reducing the risk of delays or rejections in the refund process.',
        },
        {
          icon: FaRegChartBar,
          title: 'Timely Refund Processing',
          description:
            'We handle the VAT refund process end-to-end, ensuring timely submission of claims and continuous follow-up with the FTA.',
        },
      ],
    },
    services: [
      {
        title: 'VAT Refund Eligibility Review',
        description:
          'We assess your business’s transactions to determine eligibility for VAT refunds, ensuring that you meet the criteria set by the UAE Federal Tax Authority.',
        img: tax1.src,
      },
      {
        title: 'Document Preparation & Submission',
        description:
          'Our team prepares and submits the necessary documents for VAT refund claims, ensuring full compliance with FTA requirements.',
        img: vat2.src,
      },
      {
        title: 'Timely VAT Refund Filing',
        description:
          'We ensure that your VAT refund claims are filed accurately and on time, helping your business recover VAT promptly.',
        img: vat3.src,
      },
      {
        title: 'Continuous Follow-Up',
        description:
          'We manage all communications with the FTA, providing continuous follow-up to expedite the VAT refund process.',
        img: tax4.src,
      },
      {
        title: 'Refund Dispute Resolution',
        description:
          'If any disputes arise regarding your VAT refund claim, we provide expert representation to resolve the issue efficiently.',
        img: vat4.src,
      },
      {
        title: 'Ongoing VAT Support',
        description:
          'Our ongoing advisory services ensure that your business continues to optimize VAT refunds while staying compliant with evolving regulations.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'vat-health-check',
    title: 'VAT Health Check Services in UAE for Compliance & Efficiency',
    subtitle:
      'Our VAT Health Check services provide a thorough review of your VAT processes, ensuring that your business is compliant with UAE VAT laws and optimizing your VAT management practices.',
    img: hero.src,
    btnTxt: 'Get Your VAT Health Check Today!',
    keyPoints: {
      title: 'Key VAT Health Check Solutions',
      description:
        'We conduct a comprehensive review of your business’s VAT procedures, identifying potential risks and areas for improvement to ensure full compliance and efficiency.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Complete VAT Compliance Review',
          description:
            'We review all aspects of your VAT operations to ensure full compliance with UAE tax laws and identify any areas of concern.',
        },
        {
          icon: GoShieldCheck,
          title: 'Risk Identification & Mitigation',
          description:
            'Our VAT Health Check services help identify potential risks or errors in your VAT processes and provide actionable solutions to mitigate these risks.',
        },
        {
          icon: FaRegChartBar,
          title: 'Optimized VAT Processes',
          description:
            'We offer recommendations to streamline your VAT processes, improving accuracy and efficiency while reducing the risk of non-compliance.',
        },
      ],
    },
    services: [
      {
        title: 'VAT Compliance Review',
        description:
          'We conduct a thorough review of your VAT processes and filings to ensure compliance with UAE regulations and minimize the risk of penalties.',
        img: tax1.src,
      },
      {
        title: 'Risk Identification & Process Improvement',
        description:
          'Our experts identify risks and inefficiencies in your VAT operations and provide tailored solutions to optimize processes and ensure compliance.',
        img: vat2.src,
      },
      {
        title: 'Document Review & Preparation',
        description:
          'We review all VAT-related documentation to ensure that it complies with FTA standards, reducing the risk of errors or penalties.',
        img: vat3.src,
      },
      {
        title: 'VAT Filing Accuracy Check',
        description:
          'We verify the accuracy of your VAT filings to ensure that they meet UAE tax regulations and prevent costly mistakes.',
        img: tax4.src,
      },
      {
        title: 'VAT Advisory & Ongoing Support',
        description:
          'Our ongoing VAT advisory services help you stay compliant and optimize your VAT management practices for long-term success.',
        img: vat4.src,
      },
      {
        title: 'Detailed Health Check Report',
        description:
          'We provide a detailed report with our findings and recommendations, helping your business take proactive steps to improve VAT processes.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'fta-tax-audit',
    title: 'FTA Tax Audit Assistance Services in UAE for Compliance & Support',
    subtitle:
      'Our FTA Tax Audit Assistance services help businesses prepare for and navigate through Federal Tax Authority (FTA) audits in UAE, ensuring compliance and minimizing risks of penalties.',
    img: hero.src,
    btnTxt: 'Get Tax Audit Assistance Today!',
    keyPoints: {
      title: 'Key FTA Tax Audit Assistance Solutions',
      description:
        'We provide expert support to businesses undergoing FTA tax audits, ensuring full compliance with UAE regulations and mitigating potential audit risks.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Pre-Audit Preparation',
          description:
            'We help your business prepare for FTA audits, ensuring that all VAT and tax records are accurate and compliant with UAE tax laws.',
        },
        {
          icon: GoShieldCheck,
          title: 'Audit Representation',
          description:
            'Our team provides expert representation during FTA audits, helping your business navigate the audit process smoothly and confidently.',
        },
        {
          icon: FaRegChartBar,
          title: 'Post-Audit Support',
          description:
            'We provide post-audit support, helping you address any findings from the audit and implement necessary improvements to stay compliant.',
        },
      ],
    },
    services: [
      {
        title: 'Pre-Audit Risk Assessment',
        description:
          'We conduct a thorough risk assessment to identify any areas of concern before the FTA audit, helping you address potential issues in advance.',
        img: tax1.src,
      },
      {
        title: 'Audit Documentation Preparation',
        description:
          'Our team helps prepare all necessary documentation for the audit, ensuring that your business is fully compliant with FTA requirements.',
        img: vat2.src,
      },
      {
        title: 'Audit Representation & Communication',
        description:
          'We act as your representative during the FTA audit, managing all communications with the tax authorities and ensuring that your interests are protected.',
        img: vat3.src,
      },
      {
        title: 'Post-Audit Support & Compliance',
        description:
          'After the audit, we assist with any corrective actions or compliance measures required to address the audit’s findings.',
        img: tax4.src,
      },
      {
        title: 'Ongoing Audit Risk Monitoring',
        description:
          'We provide ongoing monitoring of your tax processes to reduce the risk of future audits and ensure continuous compliance.',
        img: vat4.src,
      },
      {
        title: 'FTA Audit Strategy',
        description:
          'We help you develop a comprehensive strategy to manage and mitigate risks related to FTA audits, ensuring long-term compliance and audit readiness.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'excise-tax-uae',
    title: 'Excise Tax Services in UAE for Compliance & Efficiency',
    subtitle:
      'Our excise tax services ensure that your business complies with UAE excise tax regulations, helping you manage excise obligations for excise goods and avoid penalties.',
    img: hero.src,
    btnTxt: 'Manage Your Excise Tax Today!',
    keyPoints: {
      title: 'Key Excise Tax Solutions',
      description:
        'We provide comprehensive excise tax services to help businesses understand and comply with UAE excise tax laws, ensuring accurate reporting and minimizing tax liability.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Excise Tax Compliance',
          description:
            'We help your business comply with all UAE excise tax regulations, ensuring accurate tax calculations and timely submissions.',
        },
        {
          icon: GoShieldCheck,
          title: 'Excise Tax Advisory',
          description:
            'Our expert advisory services ensure that your business remains compliant while minimizing excise tax obligations.',
        },
        {
          icon: FaRegChartBar,
          title: 'Excise Tax Reporting & Filing',
          description:
            'We manage excise tax reporting and filing, ensuring your business meets all regulatory requirements and avoids penalties.',
        },
      ],
    },
    services: [
      {
        title: 'Excise Tax Registration',
        description:
          'We assist businesses with excise tax registration in the UAE, ensuring that all required documentation is submitted to the Federal Tax Authority (FTA) and that your business remains compliant.',
        img: tax1.src,
      },
      {
        title: 'Excise Tax Filing & Compliance',
        description:
          'Our team ensures that your excise tax filings are accurate and submitted on time, avoiding penalties and ensuring full compliance with UAE regulations.',
        img: vat2.src,
      },
      {
        title: 'Excise Tax Strategy & Advisory',
        description:
          'We help businesses develop effective excise tax strategies, ensuring optimal tax management while remaining compliant with UAE excise laws.',
        img: vat3.src,
      },
      {
        title: 'Excise Goods Reporting',
        description:
          'We provide comprehensive reporting on excise goods, ensuring that all transactions are recorded in accordance with UAE excise tax laws.',
        img: tax4.src,
      },
      {
        title: 'Audit Support for Excise Tax',
        description:
          'Our team provides full support during excise tax audits, ensuring your records are accurate and compliant with UAE excise tax regulations.',
        img: vat4.src,
      },
      {
        title: 'Ongoing Excise Tax Compliance Monitoring',
        description:
          'We offer ongoing monitoring of your excise tax obligations to ensure continuous compliance with UAE regulations.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'excise-business-setup-advisory',
    title: 'Excise Goods Business Setup Advisory in UAE',
    subtitle:
      'Our excise goods business setup advisory services help businesses establish operations in the UAE for excise goods, ensuring compliance with excise tax regulations from day one.',
    img: hero.src,
    btnTxt: 'Set Up Your Excise Goods Business Today!',
    keyPoints: {
      title: 'Key Excise Goods Business Setup Advisory Solutions',
      description:
        'We provide expert guidance to businesses in the excise goods industry, ensuring that all necessary steps are taken to comply with UAE excise tax laws from the start.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Business Setup Compliance',
          description:
            'We ensure that your excise goods business complies with all UAE regulations, including excise tax obligations, to avoid penalties and ensure a smooth setup.',
        },
        {
          icon: GoShieldCheck,
          title: 'Excise Tax Registration',
          description:
            'We assist with the excise tax registration process, ensuring that your business is registered with the Federal Tax Authority for excise tax compliance.',
        },
        {
          icon: FaRegChartBar,
          title: 'Ongoing Advisory Support',
          description:
            'We provide ongoing advisory support to help your excise goods business remain compliant with evolving UAE regulations.',
        },
      ],
    },
    services: [
      {
        title: 'Excise Goods Business Setup',
        description:
          'We assist with the complete setup of your excise goods business in the UAE, ensuring compliance with excise tax regulations and helping you navigate the necessary legal requirements.',
        img: tax1.src,
      },
      {
        title: 'Excise Tax Registration Assistance',
        description:
          'We provide support with excise tax registration, ensuring your business is properly registered with the Federal Tax Authority to avoid penalties.',
        img: vat2.src,
      },
      {
        title: 'Business Strategy & Advisory',
        description:
          'Our team offers strategic advice on how to structure your excise goods business to optimize tax efficiency and ensure compliance with UAE laws.',
        img: vat3.src,
      },
      {
        title: 'Compliance Monitoring & Reporting',
        description:
          'We provide ongoing monitoring of your excise goods business to ensure compliance with UAE regulations, including excise tax filing and reporting.',
        img: tax4.src,
      },
      {
        title: 'Post-Setup Compliance Support',
        description:
          'Our experts offer continuous support after your business is established, ensuring ongoing compliance with UAE excise goods regulations.',
        img: vat4.src,
      },
      {
        title: 'Advisory on Excise Goods Regulations',
        description:
          'We offer advisory services to help your business understand and comply with all regulations related to excise goods in the UAE.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'excise-registration',
    title: 'Excise Tax Registration Services in UAE',
    subtitle:
      'Our excise tax registration services help businesses register with the Federal Tax Authority (FTA) for excise tax compliance in the UAE, ensuring smooth and timely registration.',
    img: hero.src,
    btnTxt: 'Register for Excise Tax Today!',
    keyPoints: {
      title: 'Key Excise Tax Registration Solutions',
      description:
        'We assist businesses with the complete excise tax registration process, ensuring compliance with UAE regulations and avoiding penalties.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Complete Registration Support',
          description:
            'We guide your business through the excise tax registration process, ensuring all documentation is submitted accurately and on time.',
        },
        {
          icon: GoShieldCheck,
          title: 'Compliance with UAE Excise Laws',
          description:
            'Our experts ensure that your business meets all the necessary requirements for excise tax registration, ensuring compliance with UAE excise laws.',
        },
        {
          icon: FaRegChartBar,
          title: 'Ongoing Compliance Monitoring',
          description:
            'Once registered, we provide ongoing support to ensure your business remains compliant with all excise tax regulations.',
        },
      ],
    },
    services: [
      {
        title: 'Excise Tax Registration Preparation',
        description:
          'We assist with preparing the necessary documents and information required for excise tax registration, ensuring compliance with the FTA’s requirements.',
        img: tax1.src,
      },
      {
        title: 'Submission & Follow-Up',
        description:
          'We handle the submission of your excise tax registration documents and follow up with the FTA to ensure a smooth process.',
        img: vat2.src,
      },
      {
        title: 'Ongoing Compliance Support',
        description:
          'After registration, we offer continuous support to ensure your business stays compliant with excise tax regulations and avoids penalties.',
        img: vat3.src,
      },
      {
        title: 'Audit-Ready Documentation',
        description:
          'We help prepare your business for potential excise tax audits, ensuring that all documentation is accurate and audit-ready.',
        img: tax4.src,
      },
      {
        title: 'Post-Registration Advisory',
        description:
          'Our team provides ongoing advisory services to help your business navigate any changes in excise tax regulations and remain compliant.',
        img: vat4.src,
      },
      {
        title: 'FTA Communication Management',
        description:
          'We manage all communication with the FTA on your behalf, ensuring that any queries or issues regarding your excise tax registration are addressed promptly.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'excise-product-registration',
    title: 'Excise Product Registration Services in UAE',
    subtitle:
      'Our excise product registration services ensure that your excise goods are registered with the Federal Tax Authority (FTA) for compliance with UAE excise tax regulations.',
    img: hero.src,
    btnTxt: 'Register Your Excise Products Today!',
    keyPoints: {
      title: 'Key Excise Product Registration Solutions',
      description:
        'We assist businesses in registering their excise products with the FTA, ensuring compliance with UAE regulations and timely product registration.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Excise Product Eligibility Review',
          description:
            'We review your excise products to determine their eligibility for registration under UAE excise tax laws, ensuring compliance from the start.',
        },
        {
          icon: GoShieldCheck,
          title: 'Complete Product Registration',
          description:
            'We guide your business through the excise product registration process, ensuring that all required documents are submitted to the FTA.',
        },
        {
          icon: FaRegChartBar,
          title: 'Ongoing Product Compliance',
          description:
            'Once registered, we provide ongoing support to ensure your products remain compliant with UAE excise tax regulations.',
        },
      ],
    },
    services: [
      {
        title: 'Excise Product Registration Preparation',
        description:
          'We assist with preparing and submitting the necessary documents for excise product registration, ensuring compliance with UAE regulations.',
        img: tax1.src,
      },
      {
        title: 'FTA Submission & Approval',
        description:
          'We manage the submission of excise product registration documents and ensure timely approval from the Federal Tax Authority (FTA).',
        img: vat2.src,
      },
      {
        title: 'Ongoing Compliance Support',
        description:
          'We provide continuous support after product registration to ensure ongoing compliance with UAE excise tax regulations.',
        img: vat3.src,
      },
      {
        title: 'Excise Product Reporting',
        description:
          'We assist with maintaining accurate reporting for excise products, ensuring that all transactions are properly documented for FTA audits.',
        img: tax4.src,
      },
      {
        title: 'Post-Registration Advisory',
        description:
          'Our team provides ongoing advisory services to ensure your business stays compliant with any changes in excise product regulations.',
        img: vat4.src,
      },
      {
        title: 'FTA Communication & Support',
        description:
          'We manage all communication with the FTA regarding your excise product registration, ensuring that any issues are resolved promptly.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'warehouse-registration',
    title: 'Designated Zone & Warehouse Keeper Registration Services in UAE',
    subtitle:
      'Our Designated Zone and Warehouse Keeper Registration services help businesses involved in the storage of excise goods register with the Federal Tax Authority (FTA), ensuring compliance with UAE excise tax regulations.',
    img: hero.src,
    btnTxt: 'Register Your Warehouse Today!',
    keyPoints: {
      title: 'Key Warehouse Keeper Registration Solutions',
      description:
        'We provide complete registration services for businesses operating warehouses that store excise goods, ensuring compliance with the FTA’s requirements for designated zones and warehouse keepers.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Warehouse Eligibility Review',
          description:
            'We assess your warehouse to ensure it meets the criteria for registration as a designated zone under UAE excise tax laws.',
        },
        {
          icon: GoShieldCheck,
          title: 'FTA Registration Assistance',
          description:
            'We assist with the submission of all necessary documents for Designated Zone or Warehouse Keeper registration, ensuring full compliance with the FTA’s regulations.',
        },
        {
          icon: FaRegChartBar,
          title: 'Ongoing Compliance Support',
          description:
            'Once registered, we provide ongoing support to ensure that your warehouse complies with all excise tax regulations and remains audit-ready.',
        },
      ],
    },
    services: [
      {
        title: 'Warehouse Keeper Registration Preparation',
        description:
          'We assist with the preparation of all necessary documentation required for the registration of your warehouse as a designated zone, ensuring compliance with UAE excise tax regulations.',
        img: tax1.src,
      },
      {
        title: 'Submission & Follow-Up',
        description:
          'We handle the submission of your warehouse registration to the FTA, ensuring a smooth and timely process, with continuous follow-up until approval is granted.',
        img: vat2.src,
      },
      {
        title: 'Ongoing Compliance Monitoring',
        description:
          'After registration, we provide ongoing monitoring and support to ensure your warehouse remains compliant with all excise tax laws in the UAE.',
        img: vat3.src,
      },
      {
        title: 'Audit-Ready Documentation',
        description:
          'We ensure that your warehouse maintains accurate and audit-ready documentation in line with FTA requirements for designated zones and warehouse keepers.',
        img: tax4.src,
      },
      {
        title: 'Post-Registration Advisory',
        description:
          'Our advisory services help your business navigate any changes in excise tax laws and ensure your warehouse remains fully compliant with evolving regulations.',
        img: vat4.src,
      },
      {
        title: 'Excise Goods Management Advisory',
        description:
          'We provide expert guidance on managing excise goods in compliance with UAE excise tax laws, ensuring smooth operations and regulatory adherence.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'excise-tax-compliance',
    title: 'Excise Tax Compliance Review Services in UAE',
    subtitle:
      'Our Excise Tax Compliance Review services provide a thorough examination of your business’s excise tax processes, ensuring compliance with UAE regulations and minimizing risks of penalties.',
    img: hero.src,
    btnTxt: 'Ensure Excise Compliance Today!',
    keyPoints: {
      title: 'Key Excise Tax Compliance Solutions',
      description:
        'We conduct comprehensive compliance reviews to ensure your excise tax processes adhere to UAE regulations, identifying any potential risks and providing actionable recommendations.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Complete Excise Tax Compliance Review',
          description:
            'We conduct a detailed review of your excise tax procedures to ensure full compliance with UAE excise tax regulations.',
        },
        {
          icon: GoShieldCheck,
          title: 'Risk Identification & Mitigation',
          description:
            'Our experts identify potential risks in your excise tax processes and provide tailored solutions to mitigate those risks.',
        },
        {
          icon: FaRegChartBar,
          title: 'Optimized Excise Tax Processes',
          description:
            'We provide recommendations to streamline your excise tax processes, improving efficiency and reducing the risk of non-compliance.',
        },
      ],
    },
    services: [
      {
        title: 'Excise Tax Compliance Review',
        description:
          'We conduct a thorough review of your excise tax processes to ensure compliance with UAE regulations, identifying any gaps and providing corrective recommendations.',
        img: tax1.src,
      },
      {
        title: 'Risk Assessment & Process Improvement',
        description:
          'Our team identifies risks in your excise tax operations and offers practical solutions to improve your processes and maintain compliance.',
        img: vat2.src,
      },
      {
        title: 'Excise Tax Filing Accuracy Check',
        description:
          'We verify the accuracy of your excise tax filings, ensuring that they comply with UAE tax laws and avoid costly mistakes or penalties.',
        img: vat3.src,
      },
      {
        title: 'Document Review & Preparation',
        description:
          'We review all excise tax-related documentation to ensure that it meets FTA standards and is ready for audit if required.',
        img: tax4.src,
      },
      {
        title: 'Post-Review Advisory',
        description:
          'After the compliance review, we provide detailed reports and ongoing advisory services to ensure your excise tax processes remain compliant and optimized.',
        img: vat4.src,
      },
      {
        title: 'Ongoing Compliance Monitoring',
        description:
          'We offer continuous monitoring and support to ensure your excise tax processes stay compliant with UAE excise tax regulations over time.',
        img: img6.src,
      },
    ],
  },
  {
    id: 'voluntary-disclosure',
    title: 'Voluntary Disclosure Services in UAE for Tax Compliance',
    subtitle:
      'Our Voluntary Disclosure services allow businesses to proactively correct any past tax filing errors or omissions, ensuring compliance with UAE tax regulations and avoiding penalties.',
    img: hero.src,
    btnTxt: 'Submit a Voluntary Disclosure Today!',
    keyPoints: {
      title: 'Key Voluntary Disclosure Solutions',
      description:
        'We provide expert assistance with the Voluntary Disclosure process, helping businesses rectify any errors in their previous tax filings, ensuring full compliance with UAE tax laws.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Error Identification & Correction',
          description:
            'We help identify any errors or omissions in your past tax filings and assist in correcting them through the Voluntary Disclosure process.',
        },
        {
          icon: GoShieldCheck,
          title: 'FTA Voluntary Disclosure Submission',
          description:
            'We guide your business through the entire Voluntary Disclosure submission process, ensuring all required information is accurately reported to the FTA.',
        },
        {
          icon: FaRegChartBar,
          title: 'Compliance Risk Mitigation',
          description:
            'Our experts help mitigate compliance risks associated with past tax filing errors, ensuring that your business avoids penalties and legal issues.',
        },
      ],
    },
    services: [
      {
        title: 'Voluntary Disclosure Eligibility Assessment',
        description:
          'We assess your business’s eligibility for submitting a Voluntary Disclosure to the FTA, ensuring that all requirements are met before proceeding.',
        img: tax1.src,
      },
      {
        title: 'Document Preparation & Filing',
        description:
          'Our team assists with preparing and submitting the necessary documents for Voluntary Disclosure, ensuring compliance with FTA regulations.',
        img: vat2.src,
      },
      {
        title: 'Error Correction & Advisory',
        description:
          'We help your business identify and correct any errors or omissions in your past tax filings, ensuring accurate reporting and compliance.',
        img: vat3.src,
      },
      {
        title: 'Risk Assessment & Compliance Advisory',
        description:
          'We provide a detailed risk assessment of your previous filings and offer strategic advisory to ensure future compliance with UAE tax laws.',
        img: tax4.src,
      },
      {
        title: 'Post-Submission Support',
        description:
          'After submitting your Voluntary Disclosure, we offer ongoing support to ensure any issues or queries from the FTA are resolved quickly and efficiently.',
        img: vat4.src,
      },
      {
        title: 'Ongoing Compliance Monitoring',
        description:
          'We provide continuous monitoring of your tax filings to ensure ongoing compliance with UAE tax regulations and reduce the risk of future errors.',
        img: img6.src,
      },
    ],
  },
];
