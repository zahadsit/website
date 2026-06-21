import { getPageMetadata } from '@/utils/metadata';
import { ReactNode } from 'react';

// generateMetadata will be handled here, as this file runs server-side
export async function generateMetadata() {
    return getPageMetadata("/trade-license");
  }
  
export default function TaxationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
