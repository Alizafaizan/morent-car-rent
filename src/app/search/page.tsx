"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Product = {
  _id: string;
  name: string;
  type: string;
  brand?: string;
  originalPrice?: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  image: {
    asset: {
      url: string;
    }
  };
  tags: string[];
};

const ProductSearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setIsLoading(true);
        // Sanity query to search for cars
        const searchQuery = `*[_type == "car" && (
          name match "*${query}*" || 
          brand match "*${query}*" || 
          type match "*${query}*"
        )] {
          _id,
          name,
          brand,
          type,
          seatingCapacity,
          originalPrice,
          pricePerDay,
          fuelCapacity,
          transmission,
          tags,
          image {
            asset-> {
              url
            }
          }
        }`;

        const results = await client.fetch(searchQuery);
        setSearchResults(results);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
      setIsLoading(false);
    }
  }, [query]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!query) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Please enter a search term</div>
      </div>
    );
  }

  if (searchResults.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">No results found for "{query}"</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      <div
        className="bg-white shadow-lg rounded-lg overflow-hidden"
      >
        {searchResults.map((product) => (
          <motion.div
            key={product._id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center p-4 border-b last:border-b-0 hover:bg-gray-50"
          >
            <Image
              src={product.image.asset.url}
              alt={product.name}
              width={100}
              height={100}
              className="object-cover rounded-lg"
            />
            <div className="ml-4">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.brand}</p>
              <p className="text-sm text-gray-500">{product.type}</p>
              <p className="text-sm font-semibold">{product.pricePerDay}</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {product.transmission}
                </span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  {product.seatingCapacity}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearchResults;