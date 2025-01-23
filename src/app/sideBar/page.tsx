"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { client } from "@/sanity/lib/client"

interface Car {
  favorite: any
  title: string
  _id: string
  name: string
  type: string
  fuelCapacity: number
  transmission: string
  seatingCapacity: number
  pricePerDay: number
  originalPrice?: number
  image: {
    asset: {
      _ref: string
      url: string
    }
  }
}

interface SidebarData {
  types: { name: string; count: number }[]
  capacities: { name: string; count: number }[]
  maxPrice: number
}

export default function CarListingPage() {
  const [cars, setCars] = useState<Car[]>([])
  const [sidebarData, setSidebarData] = useState<SidebarData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carQuery = `*[_type == "car"]{
          _id,
          name,
          type,
          fuelCapacity,
          transmission,
          seatingCapacity,
          pricePerDay,
          originalPrice,
          image{
            asset->{
              _ref,
              url
            }
          }
        }`

        const sidebarQuery = `{
          "types": *[_type == "car"] | group(type) { "name": type, "count": count() },
          "capacities": *[_type == "car"] | group(seatingCapacity) { "name": string(seatingCapacity) + " Person", "count": count() },
          "maxPrice": max(*[_type == "car"].pricePerDay)
        }`

        const [carData, sidebarData] = await Promise.all([client.fetch(carQuery), client.fetch(sidebarQuery)])

        setCars(carData)
        setSidebarData(sidebarData)
        setPriceRange(sidebarData.maxPrice)
        setLoading(false)
      } catch (error: any) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredCars = cars.filter(
    (car) =>
      (selectedTypes.length === 0 || selectedTypes.includes(car.type)) &&
      (selectedCapacities.length === 0 || selectedCapacities.includes(`${car.seatingCapacity} Person`)) &&
      car.pricePerDay <= priceRange,
  )

  const Sidebar = () => {
    if (!sidebarData) return null

    return (
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div>
          <h2 className="text-[rgba(144,163,191,100%)] text-sm font-semibold uppercase tracking-wide">Type</h2>
          <ul className="my-4 space-y-3">
            {sidebarData.types.map((type) => (
              <li key={type.name} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`type-${type.name}`}
                  checked={selectedTypes.includes(type.name)}
                  onChange={(e) => {
                    setSelectedTypes((prev) =>
                      e.target.checked ? [...prev, type.name] : prev.filter((t) => t !== type.name),
                    )
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={`type-${type.name}`} className="text-sm font-medium text-gray-700">
                  {type.name}
                </label>
                <span className="text-xs text-gray-400">({type.count})</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-[rgba(144,163,191,100%)] text-sm font-semibold uppercase tracking-wide">Capacity</h2>
          <ul className="my-4 space-y-3">
            {sidebarData.capacities.map((capacity) => (
              <li key={capacity.name} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`capacity-${capacity.name}`}
                  checked={selectedCapacities.includes(capacity.name)}
                  onChange={(e) => {
                    setSelectedCapacities((prev) =>
                      e.target.checked ? [...prev, capacity.name] : prev.filter((c) => c !== capacity.name),
                    )
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={`capacity-${capacity.name}`} className="text-sm font-medium text-gray-700">
                  {capacity.name}
                </label>
                <span className="text-xs text-gray-400">({capacity.count})</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-[rgba(144,163,191,100%)] text-sm font-semibold uppercase tracking-wide mb-4">
            Price Range
          </h2>
          <input
            type="range"
            min="0"
            max={sidebarData.maxPrice}
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <p className="mt-2 text-sm font-medium text-gray-700">Max. ${priceRange.toFixed(2)}</p>
        </div>
      </div>
    )
  }

  const CarGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCars.map((car) => (
        <div key={car._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <Image src={car.image.asset.url || "/placeholder.svg"} alt={car.name} layout="fill" objectFit="cover" />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <button className="text-gray-500 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-2">{car.type}</p>
            <div className="flex justify-between text-sm mb-2">
              <span>{car.seatingCapacity} People</span>
              <span>{car.transmission}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>{car.fuelCapacity}L</span>
              <span>{car.type}</span>
            </div>
          </div>
          <div className="p-4 bg-gray-50 flex justify-between items-center">
            <div>
              <p className="text-lg font-bold">${car.pricePerDay}/day</p>
              {car.originalPrice && <p className="text-sm text-gray-500 line-through">${car.originalPrice}/day</p>}
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Rent Now</button>
          </div>
        </div>
      ))}
    </div>
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <svg
          className="animate-spin h-8 w-8 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    )
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error loading cars: {error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Car Rental</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="lg:w-3/4">
          <CarGrid />
        </div>
      </div>
    </div>
  )
}

