import { METADATA_DATABASE } from "./generated-metadata";

// Extend your existing Metadata interface
interface EnhancedMetadata {
  title: string;
  description: string;
  alternates?: {
    canonical?: string;
  };
  openGraph: {
    title: string;
    description: string;
    images: { url: string }[];
    url?: string;
    siteName?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[];
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    nocache?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
      noimageindex?: boolean;
      "max-video-preview"?: number | string;
      "max-image-preview"?: string;
      "max-snippet"?: number;
    };
  };
}

export function getPageMetadata(path: string): EnhancedMetadata {
  const metadata = METADATA_DATABASE[path];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.zahads.com";

  // Create base metadata with required fields
  const baseMetadata = {
    title: metadata?.title || "Zahads Chartered Accountants",
    description: metadata?.description || "Expert chartered accountants in UAE offering audit, tax, VAT & accounting services. Ensure compliance & business growth. Get tailored solutions today.",
    openGraph: {
      title: metadata?.openGraph?.title || metadata?.title || "Zahads Chartered Accountants",
      description:
        metadata?.openGraph?.description ||
        metadata?.description ||
        "Expert chartered accountants in UAE offering audit, tax, VAT & accounting services. Ensure compliance & business growth. Get tailored solutions today.",
      images: metadata?.openGraph?.images || [
        { url: `${siteUrl}/default-image.png` },
      ],
    },
  };

  // Enhance with SEO properties
  const enhancedMetadata: EnhancedMetadata = {
    ...baseMetadata,
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      url: `${siteUrl}${path}`,
      siteName: "Zahads - Tax, Accounting and Business Advisory Services", // Default site name
      type: "website", // Default type
      images: baseMetadata.openGraph.images.map((image) => ({
        url: image.url.startsWith("http")
          ? image.url
          : `${siteUrl}${image.url}`,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: baseMetadata.title,
      description: baseMetadata.description,
      images: baseMetadata.openGraph.images.map((image) =>
        image.url.startsWith("http") ? image.url : `${siteUrl}${image.url}`
      ),
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  return enhancedMetadata;
}
