// "use client"

// import React, { useState } from "react";

// type Product = {
//   id: number;
//   name: string;
//   type: string;
//   brand?: string;
//   original_price?: string;
//   fuel_capacity: string;
//   transmission: string;
//   seating_capacity: string;
//   price_per_day: string;
//   image_url: string;
//   tags: string[]

// };

// const SimpleSearchBar = () => {
//   const [query, setQuery] = useState(""); // Search query
//   const [result, setResult] = useState<Product | null>(null); // Filtered product

//   // Dummy product data
//   const products: Product[] = [
//     {
//         "id": 1,
//         "name": "Koenigsegg",
//         "type": "Sport",
//         "fuel_capacity": "90L",
//         "transmission": "Manual",
//         "seating_capacity": "2 People",
//         "price_per_day": "$99.00",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar.11698147.jpg&w=640&q=75",
//         "tags": ["popular"]
//       },
//       {
//         "id": 2,
//         "name": "Nissan GT-R",
//         "type": "Sport",
//         "fuel_capacity": "80L",
//         "transmission": "Manual",
//         "seating_capacity": "2 People",
//         "price_per_day": "$80.00",
//         "original_price": "$100.00",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar(1).cab606a9.jpg&w=640&q=75",
//         "tags": ["popular"]
//       },
//       {
//         "id": 3,
//         "name": "Rolls-Royce",
//         "type": "Sedan",
//         "fuel_capacity": "70L",
//         "transmission": "Manual",
//         "seating_capacity": "4 People",
//         "price_per_day": "$96.00",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(2).bd07489a.jpg&w=1200&q=75",
//         "tags": ["popular"]
//       },
//       {
//         "id": 4,
//         "name": "Nissan GT-R",
//         "type": "Sport",
//         "fuel_capacity": "80L",
//         "transmission": "Manual",
//         "seating_capacity": "2 People",
//         "price_per_day": "$80.00",
//         "original_price": "$100.00",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar(1).cab606a9.jpg&w=1200&q=75",
//         "tags": ["popular"]
//       },
//       {
//         "id": 5,
//         "name": "Tesla Model 3",
//         "type": "Electric",
//         "fuel_capacity": "100kWh",
//         "transmission": "Manual",
//         "seating_capacity": "5 seats",
//         "price_per_day": "$100.00/day",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(13).37182fc4.jpg&w=1200&q=75",
//         "tags": ["recommended"]
//       },
//       {
//         "id": 6,
//         "name": "Ford Mustang",
//         "type": "Gasoline",
//         "fuel_capacity": "60L",
//         "transmission": "Manual",
//         "seating_capacity": "4 seats",
//         "price_per_day": "$80.00/day",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(14).5f4e5799.jpg&w=1200&q=75",
//         "tags": ["recommended"]
//       },
//       {
//         "id": 7,
//         "name": "BMW X5",
//         "type": "Diesel",
//         "fuel_capacity": "70L",
//         "transmission": "Manual",
//         "seating_capacity": "7 seats",
//         "price_per_day": "$150.00/day",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(15).5f4e5799.jpg&w=1200&q=75",
//         "tags": ["recommended"]
//       },
//       {
//         "id": 8,
//         "name": "Audi A6",
//         "type": "Hybrid",
//         "fuel_capacity": "50L",
//         "transmission": "Manual",
//         "seating_capacity": "5 seats",
//         "price_per_day": "$120.00/day",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(16).fc285c8d.jpg&w=1200&q=75",
//         "tags": ["recommended"]
//       },
//       {
//         "id": 9,
//         "name": "Mercedes-Benz C-Class",
//         "brand": "Mercedes",
//         "type": "Gasoline",
//         "fuel_capacity": "65L",
//         "transmission": "Manual",
//         "seating_capacity": "5 seats",
//         "price_per_day": "$140.00/day",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(17).574834dc.jpg&w=1200&q=75",
//         "tags": ["recommended"]
//       },
//       {
//         "id": 10,
//         "name": "Porsche 911",
//         "brand": "Porsche",
//         "type": "Gasoline",
//         "fuel_capacity": "60L",
//         "transmission": "Manual",
//         "seating_capacity": "4 seats",
//         "price_per_day": "$200.00/day",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(18).1b97b4cf.jpg&w=1200&q=75",
//         "tags": ["recommended"]
//       },
//       {
//         "id": 11,
//         "name": "Chevrolet Camaro",
//         "brand": "Chevrolet",
//         "type": "Gasoline",
//         "fuel_capacity": "70L",
//         "transmission": "Manual",
//         "seating_capacity": "4 seats",
//         "price_per_day": "$110.00/day",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(19).547db9f7.jpg&w=1200&q=75",
//         "tags": ["recommended"]
//       },
//       {
//         "id": 12,
//         "name": "Nissan Altima",
//         "brand": "Nissan",
//         "type": "Hybrid",
//         "fuel_capacity": "50L",
//         "transmission": "Manual",
//         "seating_capacity": "5 seats",
//         "price_per_day": "$90.00/day",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(20).1b97b4cf.jpg&w=1200&q=75",
//         "tags": ["recommended"]
//       },
//       {
//         "id": 13,
//         "name": "Rolls-Royce",
//         "type": "SUV",
//         "fuel_capacity": "70L",
//         "transmission": "Manual",
//         "seating_capacity": "6 People",
//         "price_per_day": "$72.00",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(17).574834dc.jpg&w=1200&q=75",
//         "tags": ["recommended"]
//       },
//       {
//         "id": 14,
//         "name": "CR-V",
//         "type": "SUV",
//         "fuel_capacity": "80L",
//         "transmission": "Manual",
//         "seating_capacity": "6 People",
//         "price_per_day": "$80.00",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(15).5f4e5799.jpg&w=1200&q=75",
//         "tags": ["recommended"]
//       },
//       {
//         "id": 15,
//         "name": "All New Terlos",
//         "type": "SUV",
//         "fuel_capacity": "90L",
//         "transmission": "Manual",
//         "seating_capacity": "6 People",
//         "price_per_day": "$74.00",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(16).fc285c8d.jpg&w=1200&q=75",
//         "tags": ["recommended"]
//       },
//       {
//         "id": 16,
//         "name": "MG ZX Exclusive",
//         "type": "Hatchback",
//         "fuel_capacity": "90L",
//         "transmission": "Manual",
//         "seating_capacity": "2 People",
//         "price_per_day": "$99.00",
//         "image_url": "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(15).5f4e5799.jpg&w=1200&q=75",
//         "tags": ["recommended"]
//       }

//   ];

//   // Handle search
//   const handleSearch = () => {
//     const searchQuery = query.trim().toLowerCase();
//     const foundProduct = products.find(
//       (product) => product.name.toLowerCase() === searchQuery
//     );
//     setResult(foundProduct || null); // Update result
//   };

//   return (
//     <div className="p-4 max-w-2xl mx-auto">
//       {/* Search Bar */}
//       <div className="flex flex-col sm:flex-row items-center gap-2">
//         <input
//           type="text"
//           placeholder="Search for a product..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//         />
//         <button
//           onClick={handleSearch}
//           className="max-md:w-17 sm:min-w-1 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
//         >
//           Search
//         </button>
//       </div>

//       {/* Display Result */}
//       <div className="mt-4">
//         {result ? (
//           <div className="p-4 border rounded-md bg-gray-100">
//             <h3 className="text-lg font-bold">{result.name}</h3>
//             <p className="text-gray-700">{result.type}</p>
//           </div>
//         ) : (
//           query && <p className="text-red-500 text-center">No product found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SimpleSearchBar;