import React from 'react';
import { client } from "@/sanity/lib/client";
import Left from "@/app/payments/left"
import RentalDetails from "./rentalDetails";

async function getCarById(id: string) {
  try {
    const query = `*[_type == "car" && _id == $id][0]{
      _id,
      name,
      brand,
      pricePerDay,
      type,
      seatingCapacity,
      transmission,
      fuelCapacity,
      image {
        asset-> {
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

export default async function RentalSummaryPage({ params }: { params: { id: string } }) {
  const car = await getCarById(params.id);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Car not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* <h1 className="text-2xl font-bold mb-8">Complete Your Booking</h1>
      <div className="grid md:grid-cols-2 gap-8"> */}
        {/* <Left /> */}
        <RentalDetails car={car} />
      </div>
    // </div>
  );
}