import { getPageMetadata } from '@/utils/metadata';
import { ReactNode } from 'react';

// generateMetadata will be handled here, as this file runs server-side
export async function generateMetadata({ params }: { params: { slug: string } }) {
    // Check if the slug exists and is valid
    if (!params.slug || params.slug === 'undefined') {
      console.warn('Invalid slug:', params.slug);
      return getPageMetadata('/taxation'); // Fallback to default metadata if slug is invalid
    }
  
    // If the slug is valid, get the metadata for the specific taxation page
    return getPageMetadata(`/taxation/${params.slug}`);
  }
export default function TaxationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
