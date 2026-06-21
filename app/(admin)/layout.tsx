'use client';
import { SessionProvider } from 'next-auth/react';
import Sidebar from '@/components/admin/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white pt-32">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">{children}</main>
      </div>
    </SessionProvider>
  );
}
