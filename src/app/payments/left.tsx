// import React from "react";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";

// const Left = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-6">Rental Summary</h2>
//       <div className="flex items-center mb-6">
//         {/* Car Image */}
//         <Image
//           src="/rolls2.png"
//           alt="Car"
//           width={100}
//           height={60}
//           className="rounded-md"
//         />
//         <div className="ml-4">
//           {/* Car Name */}
//           <h3 className="font-bold text-lg">Nissan GT - R</h3>
//           {/* Star Rating */}
//           <div className="flex items-center">
//             {[1, 2, 3, 4, 5].map((star, index) => (
//               <FaStar
//                 key={index}
//                 className={`text-yellow-500 transition-transform duration-200 hover:scale-125 ${
//                   star <= 4 ? "hover:text-yellow-600" : "text-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Rental Price */}
//       <div className="text-right border-t pt-4">
//         <p className="text-gray-600">Total Rental Price:</p>
//         <p className="text-2xl font-bold text-gray-800">$80.00</p>
//       </div>
//     </div>
//   );
// };

// export default Left;
"use client"
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CarData {
  _id: string;
  name: string;
  pricePerDay: number;
  image?: {
    asset?: {
      url: string;
    };
  };
}

const Left = () => {
  const [car, setCar] = useState<CarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/detailcars/${params.id}`); // Updated endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch car data');
        }
        const data = await response.json();
        setCar(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchCar();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="flex items-center mb-6">
          <div className="w-[100px] h-[60px] bg-gray-200 rounded-md"></div>
          <div className="ml-4 flex-1">
            <div className="h-6 bg-gray-200 rounded w-2/3 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
        <div className="text-right border-t pt-4">
          <div className="h-4 bg-gray-200 rounded w-1/4 ml-auto mb-2"></div>
          <div className="h-8 bg-gray-200 rounded w-1/3 ml-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>No car data found</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Rental Summary</h2>
      <div className="flex items-center mb-6">
        {car.image?.asset?.url ? (
          <Image
            src={car.image.asset.url}
            alt={car.name}
            width={100}
            height={60}
            className="rounded-md object-cover"
          />
        ) : (
          <div className="w-[100px] h-[60px] bg-gray-200 rounded-md"></div>
        )}
        <div className="ml-4">
          <h3 className="font-bold text-lg">{car.name}</h3>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <FaStar
                key={index}
                className={`text-yellow-500 transition-transform duration-200 hover:scale-125 ${
                  star <= 4 ? "hover:text-yellow-600" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-right border-t pt-4">
        <p className="text-gray-600">Total Rental Price:</p>
        <p className="text-2xl font-bold text-gray-800">
          ${car.pricePerDay?.toFixed(2) || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Left;