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
export const assurance = [
  {
    id: 'external-audit',
    title:
      'Comprehensive External Audit Services for Transparent Financial Reporting.',
    subtitle:
      'Our External Audit Services provide an independent and thorough examination of your financial records, ensuring transparency, accuracy, and compliance with local and international accounting standards. We help businesses build trust with stakeholders through reliable and unbiased audit reports.',
    img: hero.src,
    btnTxt: 'Get Started Today',
    keyPoints: {
      title: 'Key External Audit Solutions',
      description:
        'Our independent external audits ensure that your financial statements are accurate, compliant with regulations, and free of material misstatements. We provide detailed insights to improve financial processes and reporting.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Independent Financial Review',
          description:
            'Our external audits provide an unbiased review of your financial statements, ensuring compliance with accounting standards and regulations.',
        },
        {
          icon: GoShieldCheck,
          title: 'Compliance Assurance',
          description:
            'We help you ensure that your business complies with UAE regulations and international accounting standards, reducing the risk of non-compliance penalties.',
        },
        {
          icon: FaRegChartBar,
          title: 'Stakeholder Confidence',
          description:
            'Our thorough audits provide stakeholders, investors, and partners with the confidence that your financial reports are accurate and reliable.',
        },
      ],
    },
    services: [
      {
        title: 'Financial Statement Auditing',
        description:
          'We perform a detailed examination of your financial statements, ensuring compliance with local and international standards. Our external audits provide an accurate reflection of your business’s financial position, enabling you to build trust with stakeholders.',
        img: img1.src,
      },
      {
        title: 'Compliance Audits',
        description:
          'Our team ensures that your business meets all necessary regulatory requirements. We conduct compliance audits that assess whether your financial reporting adheres to the laws and standards governing your industry.',
        img: img2.src,
      },
      {
        title: 'Audit Report Preparation',
        description:
          'We prepare clear and comprehensive audit reports that reflect your business’s financial health and performance, providing valuable insights and recommendations for improvement.',
        img: img3.src,
      },
      {
        title: 'Risk Assessment',
        description:
          'We help identify financial risks within your organization and offer recommendations to improve your internal controls, minimizing potential threats to your business.',
        img: img4.src,
      },
    ],
  },
  {
    id: 'internal-audit',
    title: 'Internal Audit Services for Enhanced Operational Efficiency.',
    subtitle:
      'Our Internal Audit Services focus on improving the effectiveness of your internal processes, risk management, and governance. We work with your management team to identify and mitigate risks, strengthen internal controls, and optimize operational efficiency.',
    img: taxHero.src,
    btnTxt: 'Get Started Today',
    keyPoints: {
      title: 'Key Internal Audit Solutions',
      description:
        'Our internal audits provide valuable insights into your business operations, helping you identify potential risks and inefficiencies. We offer tailored audit services that align with your business’s strategic goals.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Process Improvement',
          description:
            'We evaluate and improve your internal processes, ensuring operational efficiency and alignment with your business objectives.',
        },
        {
          icon: GoShieldCheck,
          title: 'Risk Identification',
          description:
            'Our internal audits help you identify potential risks, providing recommendations to strengthen your internal controls and mitigate vulnerabilities.',
        },
        {
          icon: FaRegChartBar,
          title: 'Enhanced Governance',
          description:
            'We assess your governance frameworks to ensure that they support effective decision-making and regulatory compliance.',
        },
      ],
    },
    services: [
      {
        title: 'Internal Control Audits',
        description:
          'We evaluate the effectiveness of your internal control systems and provide actionable insights to strengthen your processes and mitigate risks.',
        img: vat1.src,
      },
      {
        title: 'Operational Audits',
        description:
          'Our operational audits focus on enhancing your business’s efficiency, identifying areas for process improvement and cost optimization.',
        img: vat2.src,
      },
      {
        title: 'Governance Reviews',
        description:
          'We assess the robustness of your corporate governance structure, ensuring that it supports effective decision-making and regulatory compliance.',
        img: vat3.src,
      },
      {
        title: 'Risk Management Audits',
        description:
          'We conduct detailed risk assessments to identify vulnerabilities in your operations and offer recommendations to mitigate potential threats.',
        img: vat4.src,
      },
    ],
  },
  {
    id: 'forensic-audit',
    title:
      'Comprehensive Forensic Audit Services for Fraud Detection and Prevention.',
    subtitle:
      'Our Forensic Audit Services focus on identifying and investigating fraud, financial misconduct, or irregularities within your business. We offer a thorough examination of your financial records and provide expert support in legal disputes and fraud prevention.',
    img: vatHero.src,
    btnTxt: 'Get Started Today',
    keyPoints: {
      title: 'Key Forensic Audit Solutions',
      description:
        'Our forensic audits are designed to uncover financial fraud, mismanagement, or discrepancies. We provide detailed investigations that can support legal proceedings and help implement preventive measures.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Fraud Investigation',
          description:
            'We investigate suspicious transactions and financial activities to uncover fraud or financial misconduct within your organization.',
        },
        {
          icon: GoShieldCheck,
          title: 'Evidence Collection',
          description:
            'Our forensic audit reports provide detailed evidence of financial irregularities, supporting legal action and decision-making.',
        },
        {
          icon: FaRegChartBar,
          title: 'Preventive Recommendations',
          description:
            'We offer recommendations to improve your internal controls and prevent future instances of fraud or financial misconduct.',
        },
      ],
    },
    services: [
      {
        title: 'Fraud Investigation Audits',
        description:
          'We conduct thorough investigations into financial discrepancies, providing detailed reports on fraud or misconduct within your organization.',
        img: tax1.src,
      },
      {
        title: 'Dispute Resolution Support',
        description:
          'Our forensic audits offer evidence-based insights to support your business in resolving financial disputes or legal matters.',
        img: tax2.src,
      },
      {
        title: 'Regulatory Compliance Audits',
        description:
          'We ensure that your business adheres to regulatory requirements, minimizing the risk of financial misconduct or fraud.',
        img: tax3.src,
      },
      {
        title: 'Risk Management & Fraud Prevention',
        description:
          'We provide recommendations to strengthen your internal controls, helping you detect and prevent fraud before it impacts your business.',
        img: tax4.src,
      },
    ],
  },
  {
    id: 'inventory-audit',
    title: 'Thorough Inventory Audit Services for Accurate Stock Management.',
    subtitle:
      'Our Inventory Audit Services help businesses maintain accurate inventory records, identify discrepancies, and improve stock management. We ensure that your inventory records reflect actual stock levels, helping you reduce losses and improve operational efficiency.',
    img: hero.src,
    btnTxt: 'Get Started Today',
    keyPoints: {
      title: 'Key Inventory Audit Solutions',
      description:
        'We provide comprehensive inventory audits to ensure that your stock levels are accurately recorded and managed. Our audits help identify discrepancies, prevent losses, and optimize your inventory control systems.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Accurate Stock Records',
          description:
            'We ensure that your inventory records accurately reflect the actual stock levels, reducing discrepancies and improving management.',
        },
        {
          icon: GoShieldCheck,
          title: 'Discrepancy Resolution',
          description:
            'We identify and resolve discrepancies between recorded inventory and actual stock, helping to minimize losses and inefficiencies.',
        },
        {
          icon: FaRegChartBar,
          title: 'Optimized Inventory Control',
          description:
            'We provide recommendations to improve your inventory management processes, helping you maintain optimal stock levels and reduce costs.',
        },
      ],
    },
    services: [
      {
        title: 'Inventory Count & Reconciliation',
        description:
          'We conduct a thorough count of your inventory and reconcile the actual stock levels with your records to ensure accuracy and prevent losses.',
        img: img1.src,
      },
      {
        title: 'Stock Discrepancy Analysis',
        description:
          'Our team identifies discrepancies between your recorded and actual stock levels and offers solutions to resolve any differences.',
        img: img2.src,
      },
      {
        title: 'Inventory Management System Audit',
        description:
          'We evaluate your inventory management systems, offering recommendations to improve efficiency, reduce waste, and optimize stock control.',
        img: img3.src,
      },
      {
        title: 'Inventory Loss Prevention',
        description:
          'We assess potential causes of inventory loss, offering recommendations to prevent stock shrinkage and improve your overall inventory management.',
        img: img4.src,
      },
    ],
  },
  {
    id: 'asset-verification',
    title:
      'Comprehensive Asset Verification Services for Accurate Recordkeeping.',
    subtitle:
      'Our Asset Verification Services ensure that your physical and intangible assets are accurately recorded, managed, and protected. We help businesses maintain up-to-date asset records, improving accountability and reducing the risk of asset loss or mismanagement.',
    img: taxHero.src,
    btnTxt: 'Get Started Today',
    keyPoints: {
      title: 'Key Asset Verification Solutions',
      description:
        'We provide detailed asset verification services to help businesses maintain accurate records of their assets. Our services ensure that your asset records are reliable, reducing the risk of loss or mismanagement.',
      points: [
        {
          icon: MdOutlineAccountBalanceWallet,
          title: 'Accurate Asset Records',
          description:
            'We ensure that your asset records accurately reflect the current status of your physical and intangible assets, improving accountability.',
        },
        {
          icon: GoShieldCheck,
          title: 'Physical Asset Verification',
          description:
            'Our team conducts on-site verification of your physical assets, ensuring that they are accounted for and properly recorded in your financial statements.',
        },
        {
          icon: FaRegChartBar,
          title: 'Improved Asset Management',
          description:
            'We provide recommendations to enhance your asset management practices, ensuring that assets are utilized effectively and protected against loss.',
        },
      ],
    },
    services: [
      {
        title: 'On-Site Physical Asset Verification',
        description:
          'We conduct on-site verification of your physical assets, ensuring that all assets are accounted for and properly recorded in your asset management system.',
        img: vat1.src,
      },
      {
        title: 'Intangible Asset Verification',
        description:
          'Our team verifies the ownership and status of your intangible assets, such as intellectual property, ensuring that they are correctly valued and recorded.',
        img: vat2.src,
      },
      {
        title: 'Asset Tagging and Tracking',
        description:
          'We offer asset tagging and tracking services to help businesses maintain up-to-date records and improve asset accountability.',
        img: vat3.src,
      },
      {
        title: 'Asset Loss Prevention',
        description:
          'We assess your asset management systems and provide recommendations to prevent asset loss or mismanagement, helping protect your business’s valuable resources.',
        img: vat4.src,
      },
    ],
  },
];
