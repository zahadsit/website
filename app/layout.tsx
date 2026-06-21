export const dynamic = "force-dynamic";

import ReactGA from "react-ga4";
import Script from "next/script";
import Navbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/Whatsapp/Whatsapp";
import { Toaster } from "react-hot-toast";
import { Lato, Lora } from "next/font/google";
import "./globals.css";
import MicrosoftClarity from "@/components/MicrosoftClarity";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lato",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lora",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  ReactGA.initialize("G-JH618P3CGT");

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Zahads Chartered Accountants",
    // telephone: "+971 56 7517147",
    telephone: "+971 58 588 7546",
    description:
      "Zahads: Dubai's leading business consultancy. 8+ years of expertise in helping businesses succeed.",
    address: {
      "@type": "PostalAddress",
      // streetAddress: "Office 751, Tamani Arts Offices, Business Bay, Dubai",
      streetAddress: "Office 1834, Tamani Arts Offices, Al Asayel Street, Business Bay, Dubai",
      addressLocality: "Dubai",
      addressRegion: "United Arab Emirates",
      postalCode: "00000",
      addressCountry: "AE",
    },
  };

  return (
    <html
      lang="en"
      className={`${lato.variable} ${lora.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta
          name="google-site-verification"
          content="gCB0EWL7BiI8_XGQZddtU3cQ0tWzsnv9ZtOvH_4ASq8"
        />
        <Script
          async
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-JH618P3CGT"
        />
        <Script strategy="lazyOnload">
          {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JH618P3CGT');`}
        </Script>
        <Script
          async
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18171808420"
        />
        <Script strategy="lazyOnload">
          {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18171808420');`}
        </Script>
        <Script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </Script>
        <Script
          async
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-714Y7CD9EE"
        />
        <Script strategy="lazyOnload">
          {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-714Y7CD9EE');`}
        </Script>
      </head>
      {/* ✅ Apply Lato as default body font, override with Lora in CSS where needed */}
      <body className={`${lato.className}`}>
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        {children}
        <MicrosoftClarity />
        <Footer />
        <Toaster />
        <WhatsApp />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/663229c3a0c6737bd1333c4a/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
