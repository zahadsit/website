import { getPageMetadata } from '@/utils/metadata';
import { ReactNode } from 'react';

// generateMetadata will be handled here, as this file runs server-side
export async function generateMetadata({ params }: { params: { service: string } }) {
  return getPageMetadata(`/services/${params.service}`);
}

export default function ServiceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
