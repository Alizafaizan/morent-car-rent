"use client"
import { Suspense } from 'react';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import redheart from "@/app/assets/section1/red heart.png";
import fuel from "@/app/assets/section1/fuel.png";
import stering from "@/app/assets/section1/Stering wheel.png";
import user from "@/app/assets/section1/profile.png";
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import ReviewsClient from '@/app/actions/reviews/reviews-client';

// Helper functions remain the same
function getImageUrl(image: any) {  if (!image?.asset?._ref) {
    return null;
  }
  
  try {
    // If we have a direct URL, use it
    if (image.asset.url) {
      return image.asset.url;
    }
    
    const ref = image.asset._ref;
    
    // Extract the dimensions and format from the asset reference
    const [ id, dimensions, format] = ref.split('-');
    
    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
  } catch (error) {
    console.error("Error generating image URL:", error);
    return null;
  }
}

async function getCarById(id: string) {try {
    const query = `*[_type == "car" && _id == $id][0]{
      _id,
      _type,
      _rev,
      _createdAt,
      _updatedAt,
      name,
      brand,
      seatingCapacity,
      originalPrice,
      type,
      pricePerDay,
      tags,
      transmission,
      fuelCapacity,
      image {
        asset-> {
          _id,
          _ref,
          _type,
          url
        }
      }
    }`;

    const car = await client.fetch(query, { id });
    return car;
  } catch (error) {
    console.error("Error fetching car:", error);
    return null;
  }
}

async function getRelatedCars(type: any, currentCarId: any) {  try {
    const query = `*[_type == "car" && type == $type && _id != $currentCarId]{
      _id,
      name,
      type,
      pricePerDay,
      seatingCapacity,
      transmission,
      fuelCapacity,
      image {
        asset-> {
          _id,
          _ref,
          _type,
          url
        }
      }
    }`;

    return await client.fetch(query, { type, currentCarId });
  } catch (error) {
    console.error("Error fetching related cars:", error);
    return [];
  }
}

function LoadingComponent() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  );
}

export default async function CarDetailsPage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <CarDetailsContent params={params} />
    </Suspense>
  );
}

async function CarDetailsContent({ params }: { params: Params }) {
  const car = await getCarById(params.id);
  
  if (!car) {
    notFound();
  }

  const relatedCars = await getRelatedCars(car.type, car._id);
  const carImageUrl = car.image?.asset?.url || getImageUrl(car.image);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Car Details Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 transition-all hover:shadow-md">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Car Image */}
            <div className="relative group">
              {carImageUrl ? (
                <div className="relative w-full h-[300px] lg:h-[400px]">
                  <Image
                    src={carImageUrl}
                    alt={car.name || "Car image"}
                    fill
                    className="rounded-xl object-contain transition-transform group-hover:scale-[1.02]"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-full h-[300px] lg:h-[400px] bg-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500">Image not available</span>
                </div>
              )}
            </div>

            {/* Car Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{car.name}</h1>
                {car.brand && <p className="text-gray-600 mb-2">{car.brand}</p>}
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-6">
                  {car.type}
                </p>
                
                {/* Specifications Grid */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Image src={fuel} alt="fuel" width={24} height={24} className="opacity-75" />
                    <span className="font-medium">{car.fuelCapacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Image src={stering} alt="transmission" width={24} height={24} className="opacity-75" />
                    <span className="font-medium">{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Image src={user} alt="capacity" width={24} height={24} className="opacity-75" />
                    <span className="font-medium">{car.seatingCapacity}</span>
                  </div>
                </div>
              </div>

              {/* Price and Rent Button */}
              <div className="mt-auto">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-gray-800">
                    ${car.pricePerDay}
                    <span className="text-sm text-gray-500 ml-1"></span>
                  </h3>
                  {car.originalPrice && (
                    <p className="text-gray-400 line-through text-sm">
                      ${car.originalPrice}
                    </p>
                  )}
                </div>

                <Link href={`/rentalSummery/${car._id}`}>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 font-medium transition-colors">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          <ReviewsClient initialReviews={[]} />
        </div>

        {/* Related Cars Section */}
        {relatedCars.length > 0 && (
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Similar Cars</h2>
              <Link href="/category" className="text-blue-600 hover:text-blue-700 font-medium">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedCars.map((relatedCar:any) => {
                const relatedCarImageUrl = relatedCar.image?.asset?.url || getImageUrl(relatedCar.image);
                
                return (
                  <div
                    key={relatedCar._id}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {relatedCar.name}
                      </h3>
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Image
                          src={redheart}
                          alt="favorite"
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{relatedCar.type}</p>

                    <div className="relative w-full h-[200px] mb-4">
                      {relatedCarImageUrl ? (
                        <Image
                          src={relatedCarImageUrl}
                          alt={relatedCar.name}
                          fill
                          className="rounded-lg object-contain transition-transform group-hover:scale-[1.02]"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-gray-500">Image not available</span>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-3 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Image src={fuel} alt="fuel" width={14} height={14} />
                        <span className='text-sm'>{relatedCar.fuelCapacity}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Image src={stering} alt="transmission" width={14} height={14} />
                        <span className='text-sm'>{relatedCar.transmission}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Image src={user} alt="capacity" width={14} height={14} />
                        <span className='text-sm'>{relatedCar.seatingCapacity}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-bold text-gray-800">
                        ${relatedCar.pricePerDay}
                        <span className="text-sm text-gray-500"></span>
                      </h4>
                      <Link href={`/rentalSummery/${car._id}`}>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors">
                          Rent Now
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

