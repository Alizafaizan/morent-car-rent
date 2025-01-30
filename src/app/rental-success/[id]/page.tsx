"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';

interface CarDetails {
  _id: string;
  name: string;
  brand: string;
  image: {
    asset: {
      url: string;
    };
  };
  pricePerDay: number;
}

export default function RentalSuccessPage() {
  const params = useParams();
  const [carDetails, setCarDetails] = useState<CarDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const car = await client.fetch(`
          *[_type == "car" && _id == $id][0]{
            _id,
            name,
            brand,
            pricePerDay,
            image {
              asset-> {
                url
              }
            }
          }
        `, { id: params.id });
        setCarDetails(car);
      } catch (error) {
        console.error('Error fetching car details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchCarDetails();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-green-100 rounded-full p-3">
                <svg
                  className="h-12 w-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
              Booking Confirmed!
            </h2>

            {carDetails && (
              <div className="border rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative w-full md:w-64 h-48 flex-shrink-0">
                    <Image
                      src={carDetails.image.asset.url}
                      alt={carDetails.name}
                      fill
                      className="rounded-lg object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-900">
                      {carDetails.brand} {carDetails.name}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Price per day: ${carDetails.pricePerDay}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center">
              <p className="text-gray-600 mb-8">
                Thank you for your booking! We have sent the confirmation details to your email.
              </p>

              <div className="space-y-4">
                <Link
                  href="/dashboard"
                  className="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-150"
                >
                  View Booking Details
                </Link>
                <Link
                  href="http://localhost:3000"
                  className="block w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition duration-150"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}