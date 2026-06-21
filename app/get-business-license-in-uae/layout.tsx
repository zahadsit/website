import { getPageMetadata } from '@/utils/metadata';
import { ReactNode } from 'react';

// generateMetadata will be handled here, as this file runs server-side
export async function generateMetadata() {
    return getPageMetadata("/get-business-license-in-uae");
  }
  
export default function BusinessLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
