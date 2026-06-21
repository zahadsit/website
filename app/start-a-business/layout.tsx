import { getPageMetadata } from '@/utils/metadata';
import { ReactNode } from 'react';

// generateMetadata will be handled here, as this file runs server-side
export async function generateMetadata() {
    return getPageMetadata("/start-a-business");
  }
  
export default function StartaBusinessLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
