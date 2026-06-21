'use client';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { Mail, LogOut } from 'lucide-react'; // Import Lucide icons

import { MdDashboard } from 'react-icons/md';

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 h-[450px]  text-gray-200 shadow-lg">
      <div className="flex items-center justify-center h-20 bg-gray-800">
        <h1 className="text-lg font-semibold text-gray-100">Admin Panel</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col flex-1 px-4 py-6 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-blue-600 hover:text-white"
        >
          <MdDashboard className="w-5 h-5 mr-3" />
          Dashboard
        </Link>
        <Link
          href="/enquiries"
          className="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-blue-600 hover:text-white"
        >
          <Mail className="w-5 h-5 mr-3" />
          Enquiries
        </Link>
        <button
          onClick={() => signOut()}
          className="flex items-center px-4 py-2 mt-2 text-sm font-medium text-red-400 rounded-lg transition-colors hover:bg-red-500 hover:text-white"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </nav>
    </div>
  );
}
