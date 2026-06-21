'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {
  Mail,
  User,
  Building2,
  Phone,
  Globe,
  ClipboardList,
} from 'lucide-react';

type Enquiry = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  nationality?: string;
  company?: string;
  phone?: string;
  category?: string;
  message: string;
  createdAt: string;
};

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [filteredEnquiries, setFilteredEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/contact');
        const fetchedEnquiries = response.data.enquiries;
        setEnquiries(fetchedEnquiries);
        setFilteredEnquiries(fetchedEnquiries);
      } catch (error) {
        console.error('Failed to fetch enquiries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = enquiries.filter(
      (enquiry) =>
        enquiry.firstName.toLowerCase().includes(lowerCaseSearchTerm) ||
        enquiry.lastName.toLowerCase().includes(lowerCaseSearchTerm) ||
        enquiry.email.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredEnquiries(filtered);
  }, [searchTerm, enquiries]);

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
        <div className="mb-6">
          <h1 className="text-4xl font-light text-gray-800">Enquiries</h1>
          <p className="text-sm text-gray-500">
            View and manage all incoming enquiries
          </p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredEnquiries.length > 0 ? (
            filteredEnquiries.map((enquiry) => (
              <div
                key={enquiry._id}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-medium text-gray-700">
                    {enquiry.firstName} {enquiry.lastName}
                  </h2>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" /> {enquiry.email}
                  </p>
                  {enquiry.phone && (
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />{' '}
                      {enquiry.phone}
                    </p>
                  )}
                  {enquiry.nationality && (
                    <p className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-500" />{' '}
                      {enquiry.nationality}
                    </p>
                  )}
                  {enquiry.company && (
                    <p className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-gray-500" />{' '}
                      {enquiry.company}
                    </p>
                  )}
                  {enquiry.category && (
                    <p className="flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-gray-500" />{' '}
                      {enquiry.category}
                    </p>
                  )}
                </div>
                <div className="mt-4 text-sm text-gray-700">
                  <p>{enquiry.message}</p>
                  <p className="mt-2 text-xs text-gray-500">
                    Submitted on: {new Date(enquiry.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No enquiries found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
