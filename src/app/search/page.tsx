'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';

// Sanity client configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: true
});

// Image URL builder
const builder = imageUrlBuilder(client);

function urlFor(source:any) {
  return builder.image(source);
}

const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query')?.toLowerCase() || '';
  
  interface Car {
    _id: string;
    name: string;
    brand: string;
    type: string;
    transmission: string;
    seatingCapacity: number;
    pricePerDay: number;
    image: any;
  }

  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [sortOption, setSortOption] = useState('relevance');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      try {
        const carQuery = `*[_type == "car" && (
          lower(name) match "${query}*" || 
          lower(brand) match "${query}*" || 
          lower(type) match "${query}*"
        )]`;
        
        const fetchedCars = await client.fetch(carQuery);
        setCars(fetchedCars);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching cars:', error);
        setIsLoading(false);
      }
    };

    if (query) {
      fetchCars();
    }
  }, [query]);

  useEffect(() => {
    // Sorting logic
    const sortedCars = [...cars].sort((a, b) => {
      switch(sortOption) {
        case 'price-low':
          return (a.pricePerDay || 0) - (b.pricePerDay || 0);
        case 'price-high':
          return (b.pricePerDay || 0) - (a.pricePerDay || 0);
        default:
          return 0;
      }
    });

    setFilteredCars(sortedCars);
  }, [cars, sortOption]);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Search Results for "{query}"
        </h1>
        
        <select 
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded p-2"
        >
          <option value="relevance">Sort by Relevance</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {filteredCars.length === 0 ? (
        <div className="text-center text-gray-500">
          No results found for "{query}"
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <div 
              key={car._id} 
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              {car.image && (
                <img 
                  src={urlFor(car.image).url()} 
                  alt={car.name} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold">{car.name}</h2>
                <div className="text-gray-600 mb-2">
                  <p>{car.brand} · {car.type}</p>
                  <p>{car.transmission} · {car.seatingCapacity} Seats</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">
                    ${car.pricePerDay}/day
                  </span>
                  <Link href={`/detailcars/${car._id}`}>
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Rent Now
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;