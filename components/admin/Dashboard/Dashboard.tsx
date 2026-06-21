'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MessageCircle, Tag, Layers } from 'lucide-react';
import ReactLoading from 'react-loading';

type Enquiry = {
  _id: string;
  category?: string;
};

type Stats = {
  totalEnquiries: number;
  uniqueCategories: number;
};

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    totalEnquiries: 0,
    uniqueCategories: 0,
  });

  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/contact');
        const { enquiries } = response.data;

        const uniqueCategories = new Set(
          enquiries.map(
            (enquiry: Enquiry) => enquiry.category || 'Uncategorized'
          )
        ).size;

        setStats({
          totalEnquiries: enquiries.length,
          uniqueCategories,
        });
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (status === 'loading' || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <ReactLoading
          type="spinningBubbles"
          color="#3B82F6"
          height={80}
          width={80}
        />
      </div>
    );
  }

  //@ts-ignore
  if (!session || session.user.role !== 'admin') {
    return <div className="text-center text-red-500">Access Denied</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Overview of your platform activity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-medium text-gray-700">
                Total Enquiries
              </h2>
            </div>
            <p className="mt-4 text-4xl font-semibold text-blue-600">
              {stats.totalEnquiries || '0'}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Total number of enquiries received
            </p>
          </div>
          {/* <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <Tag className="w-6 h-6 text-green-600" />
              <h2 className="text-lg font-medium text-gray-700">
                Unique Categories
              </h2>
            </div>
            <p className="mt-4 text-4xl font-semibold text-green-600">
              {stats.uniqueCategories || '0'}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Unique enquiry categories
            </p>
          </div> */}
          {/* <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-yellow-600" />
              <h2 className="text-lg font-medium text-gray-700">
                Placeholder Stat
              </h2>
            </div>
            <p className="mt-4 text-4xl font-semibold text-yellow-600">0</p>
            <p className="mt-1 text-sm text-gray-500">
              Description for the third stat
            </p>
          </div> */}
        </div>

        {/* Additional Content Placeholder */}
        {/* <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-700">
            Additional Insights
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Add more data visualization or insights here as your dashboard
            evolves.
          </p>
        </div> */}
      </div>
    </div>
  );
}
