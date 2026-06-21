import { getPageMetadata } from '@/utils/metadata';
import { ReactNode } from 'react';

// generateMetadata will be handled here, as this file runs server-side
export async function generateMetadata({ params }: { params: { id: string } }) {
 
    return getPageMetadata("/faq");
  }
export default function FAQLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
