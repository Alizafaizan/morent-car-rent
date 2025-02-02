"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

type Product = {
  id: number
  name: string
  type: string
  brand?: string
  original_price?: string
  fuel_capacity: string
  transmission: string
  seating_capacity: string
  price_per_day: string
  image_url: string
  tags: string[]
}

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const searchParams = useSearchParams()
  const query = searchParams.get("query")

  useEffect(() => {
    // This is where you would normally fetch data from an API
    // For this example, we'll use the mock data
    const mockProducts: Product[] = [
      {
        id: 1,
        name: "Koenigsegg",
        type: "Sport",
        fuel_capacity: "90L",
        transmission: "Manual",
        seating_capacity: "2 People",
        price_per_day: "$99.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar.11698147.jpg&w=640&q=75",
        tags: ["popular"],
      },
      {
        id: 2,
        name: "Nissan GT-R",
        type: "Sport",
        fuel_capacity: "80L",
        transmission: "Manual",
        seating_capacity: "2 People",
        price_per_day: "$80.00",
        original_price: "$100.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar(1).cab606a9.jpg&w=640&q=75",
        tags: ["popular"],
      },
      {
        id: 3,
        name: "Rolls-Royce",
        type: "Sedan",
        fuel_capacity: "70L",
        transmission: "Manual",
        seating_capacity: "4 People",
        price_per_day: "$96.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(2).bd07489a.jpg&w=1200&q=75",
        tags: ["popular"],
      },
      {
        id: 4,
        name: "Nissan GT-R",
        type: "Sport",
        fuel_capacity: "80L",
        transmission: "Manual",
        seating_capacity: "2 People",
        price_per_day: "$80.00",
        original_price: "$100.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar(1).cab606a9.jpg&w=1200&q=75",
        tags: ["popular"],
      },
      {
        id: 5,
        name: "Tesla Model 3",
        type: "Electric",
        fuel_capacity: "100kWh",
        transmission: "Manual",
        seating_capacity: "5 seats",
        price_per_day: "$100.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(13).37182fc4.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 6,
        name: "Ford Mustang",
        type: "Gasoline",
        fuel_capacity: "60L",
        transmission: "Manual",
        seating_capacity: "4 seats",
        price_per_day: "$80.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(14).5f4e5799.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 7,
        name: "BMW X5",
        type: "Diesel",
        fuel_capacity: "70L",
        transmission: "Manual",
        seating_capacity: "7 seats",
        price_per_day: "$150.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(15).5f4e5799.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 8,
        name: "Audi A6",
        type: "Hybrid",
        fuel_capacity: "50L",
        transmission: "Manual",
        seating_capacity: "5 seats",
        price_per_day: "$120.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(16).fc285c8d.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 9,
        name: "Mercedes-Benz C-Class",
        brand: "Mercedes",
        type: "Gasoline",
        fuel_capacity: "65L",
        transmission: "Manual",
        seating_capacity: "5 seats",
        price_per_day: "$140.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(17).574834dc.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 10,
        name: "Porsche 911",
        brand: "Porsche",
        type: "Gasoline",
        fuel_capacity: "60L",
        transmission: "Manual",
        seating_capacity: "4 seats",
        price_per_day: "$200.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(18).1b97b4cf.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 11,
        name: "Chevrolet Camaro",
        brand: "Chevrolet",
        type: "Gasoline",
        fuel_capacity: "70L",
        transmission: "Manual",
        seating_capacity: "4 seats",
        price_per_day: "$110.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(19).547db9f7.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 12,
        name: "Nissan Altima",
        brand: "Nissan",
        type: "Hybrid",
        fuel_capacity: "50L",
        transmission: "Manual",
        seating_capacity: "5 seats",
        price_per_day: "$90.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(20).1b97b4cf.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 13,
        name: "Rolls-Royce",
        type: "SUV",
        fuel_capacity: "70L",
        transmission: "Manual",
        seating_capacity: "6 People",
        price_per_day: "$72.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(17).574834dc.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 14,
        name: "CR-V",
        type: "SUV",
        fuel_capacity: "80L",
        transmission: "Manual",
        seating_capacity: "6 People",
        price_per_day: "$80.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(15).5f4e5799.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 15,
        name: "All New Terlos",
        type: "SUV",
        fuel_capacity: "90L",
        transmission: "Manual",
        seating_capacity: "6 People",
        price_per_day: "$74.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(16).fc285c8d.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 16,
        name: "MG ZX Exclusive",
        type: "Hatchback",
        fuel_capacity: "90L",
        transmission: "Manual",
        seating_capacity: "2 People",
        price_per_day: "$99.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(15).5f4e5799.jpg&w=1200&q=75",
        tags: ["recommended"],
      },    ]

    const filteredResults = mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query?.toLowerCase() || "") ||
        product.type.toLowerCase().includes(query?.toLowerCase() || "") ||
        product.brand?.toLowerCase().includes(query?.toLowerCase() || "") ||
        product.tags.some((tag) => tag.toLowerCase().includes(query?.toLowerCase() || "")),
    )

    setSearchResults(filteredResults)
  }, [query])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map((product) => (
          <Link href={`/detailcars/${product.id}`} key={product.id} className="block">
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={product.image_url || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.type}</p>
                <p className="text-gray-800 font-semibold">{product.price_per_day}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

