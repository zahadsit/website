import { getPageMetadata } from '@/utils/metadata';
import { ReactNode } from 'react';

// generateMetadata will be handled here, as this file runs server-side
export async function generateMetadata({ params }: { params: { id: string } }) {
    const path = `/partners/${params.id}`; // or a prefixed path like `/blog/${params.id}`, depending on the structure
    return getPageMetadata(path);
  }
export default function PartnersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
