"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useRentalStore } from "@/store/rentalStore";
import Image from "next/image";
import Link from "next/link";
import visa from "@/public/visa.png";
import security from "@/public/security.png";

export default function RentalPaymentPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const carId = params.id;
  const details = searchParams.get("details");

  const {
    name,
    phone,
    address,
    city,
    cardNumber,
    expirationDate,
    cardHolder,
    cvc,
    marketingConsent,
    termsAccepted,
    setRentalInfo,
  } = useRentalStore();

  const [carDetails, setCarDetails] = useState<any>(null);

  // Parse URL details (JSON format)
  useEffect(() => {
    if (details) {
      try {
        setCarDetails(JSON.parse(decodeURIComponent(details)));
      } catch (error) {
        console.error("Error parsing details:", error);
      }
    }
  }, [details]);

  return (
    <div className="order-2 lg:order-1">
      {/* Billing Info */}
      <div className="w-full bg-white p-2 rounded-lg mt-3 lg:mt-0">
        <h1 className="text-[rgba(26,32,44,100)] font-bold">Billing Info</h1>
        <div className="flex justify-between">
          <h1 className="text-[14px] text-gray-500">Please enter your billing info</h1>
          <h1 className="text-[14px] text-gray-500">Step 1 of 4</h1>
        </div>

        <form className="my-3">
          <div className="md:flex justify-between gap-3">
            <div className="md:w-[50%]">
              <h1 className="text-[16px] font-bold">Name</h1>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setRentalInfo("name", e.target.value)}
                className="w-full p-3 bg-gray-100 rounded-lg mt-1"
              />
            </div>
            <div className="mt-2 md:mt-0 md:w-[50%]">
              <h1 className="text-[16px] font-bold">Phone Number</h1>
              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setRentalInfo("phone", e.target.value)}
                className="w-full p-3 bg-gray-100 rounded-lg mt-1"
              />
            </div>
          </div>

          <div className="md:flex justify-between gap-3 mt-2">
            <div className="md:w-[50%]">
              <h1 className="text-[16px] font-bold">Address</h1>
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setRentalInfo("address", e.target.value)}
                className="w-full p-3 bg-gray-100 rounded-lg mt-1"
              />
            </div>
            <div className="mt-2 md:mt-0 md:w-[50%]">
              <h1 className="text-[16px] font-bold">Town/City</h1>
              <input
                type="text"
                placeholder="Town or City"
                value={city}
                onChange={(e) => setRentalInfo("city", e.target.value)}
                className="w-full p-3 bg-gray-100 rounded-lg mt-1"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Payment Method */}
      <div className="w-full bg-white p-2 mt-2 rounded-lg">
        <h1 className="text-[16px] font-bold">Payment Method</h1>
        <div className="flex justify-between">
          <h1 className="text-[14px] text-gray-500">Please enter your payment method</h1>
          <h1 className="text-[14px] text-gray-500">Step 3 of 4</h1>
        </div>

        <form className="my-3 bg-gray-100 p-3 rounded-lg">
          <div className="md:flex justify-between gap-3">
            <div className="md:w-[50%]">
              <h1 className="text-[16px] font-bold">Card Number</h1>
              <input
                type="text"
                placeholder="Card number"
                value={cardNumber}
                onChange={(e) => setRentalInfo("cardNumber", e.target.value)}
                className="w-full p-3 bg-white rounded-lg mt-1"
              />
            </div>
            <div className="mt-2 md:mt-0 md:w-[50%]">
              <h1 className="text-[16px] font-bold">Expiration Date</h1>
              <input
                type="date"
                value={expirationDate}
                onChange={(e) => setRentalInfo("expirationDate", e.target.value)}
                className="w-full p-3 bg-white rounded-lg mt-1"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Confirmation */}
      <div className="w-full bg-white p-2 mt-2 rounded-lg">
        <h1 className="text-[16px] font-bold">Confirmation</h1>
        <div className="my-4">
          <div className="flex gap-2 p-3 bg-gray-100">
            <input
              type="checkbox"
              checked={marketingConsent}
              onChange={() => setRentalInfo("marketingConsent", !marketingConsent)}
            />
            <p>I agree to receive marketing and newsletter emails.</p>
          </div>
          <div className="flex gap-2 p-3 bg-gray-100">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setRentalInfo("termsAccepted", !termsAccepted)}
            />
            <p>I agree to the terms and conditions.</p>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          <Link href={`/rentalSummery/${carId}`}>Rent Now</Link>
        </button>
      </div>
    </div>
  );
}
