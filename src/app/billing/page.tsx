import React from "react";
import Image from "next/image";
import Link from "next/link";
import visa from "@/app/assets/billing/Visa.png";
import security from "@/app/assets/billing/ic-security-safety.png";
import I1 from "@/app/assets/dashboard/Look.png";
import I2 from "@/app/assets/billing/Review.png";

const page = () => {
  return (
    // this is for billing page
    <>
      <div className="bg-[#F6F7F9] p-4 lg:flex justify-between ">
        {/* rental summary div */}

        <div className="bg-white lg:w-[30%] mx-auto lg:mx-0 p-4 rounded-lg h-fit order-1 lg:order-2">
          <div>
            <h1 className="text-[rgba(26,32,44,100)] font-bold">
              Rental Summary
            </h1>
            <p>
              Prices may change depending on the length of the rental and the
              price of your rental car
            </p>
          </div>

          <div className="flex justify-between mt-3">
            <div className="flex gap-3">
              <div>
                <Image src={I1} alt="loading" width={150} height={150}></Image>
              </div>
              <div>
                <h1 className="text-[rgba(26,32,44,100%)] font-bold text-[24px]">
                  Nissan GT - R
                </h1>
                <Image src={I2} alt="loading" width={150} height={150}></Image>
              </div>
            </div>
          </div>

          <hr className="mt-2" />

          <div className="flex justify-between mt-3">
            <h1>Subtotal</h1>
            <h1>$80.00</h1>
          </div>

          <div className="flex justify-between mt-3">
            <h1>Tax</h1>
            <h1>$0</h1>
          </div>

          <div className="flex justify-between mt-3 items-end">
            <div>
              <h1 className="text-[rgba(26,32,44,100%)] text-[18px] font-bold">
                Total Rental Price
              </h1>
              <p className="text-[rgba(144,163,191,100%)] text-[14px] ">
                Overall price and includes rental discount
              </p>
            </div>
            <div>
              <h1 className="text-[rgba(26,32,44,100%)] font-bold text-[32px]">
                $80.00
              </h1>
            </div>
          </div>
        </div>

        {/* billing info div */}
        <div className="order-2 lg:order-1">
          <div className="w-full bg-white p-2 rounded-lg mt-3 lg:mt-0 mx-auto lg:mx-0">
            <div>
              <h1 className="text-[rgba(26,32,44,100)] font-bold">
                Billing Info
              </h1>
            </div>
            <div className="flex justify-between ">
              <h1 className="text-[rgba(144,163,191,100)] text-[14px]">
                Please enter your billing info
              </h1>
              <h1 className="text-[rgba(144,163,191,100)] text-[14px]">
                Step 1 to 4
              </h1>
            </div>

            <form action="" className="my-3">
              <div className="md:flex justify-between gap-3">
                <div className="md:w-[50%]">
                  <h1 className="text-[rgba(26,32,44,100)] font-bold text-[16px]">
                    Name
                  </h1>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-[#F6F7F9] rounded-lg mt-1"
                  />
                </div>
                <div className="mt-2 md:mt-0 md:w-[50%]">
                  <h1 className="text-[rgba(26,32,44,100)] font-bold text-[16px]">
                    Phone Number
                  </h1>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="w-full p-3 bg-[#F6F7F9] rounded-lg mt-1"
                  />
                </div>
              </div>

              <div className="md:flex justify-between gap-3 mt-2">
                <div className="md:w-[50%]">
                  <h1 className="text-[rgba(26,32,44,100)] font-bold text-[16px]">
                    Address
                  </h1>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-3 bg-[#F6F7F9] rounded-lg mt-1"
                  />
                </div>
                <div className="mt-2 md:mt-0  md:w-[50%]">
                  <h1 className="text-[rgba(26,32,44,100)] font-bold text-[16px]">
                    Town/City
                  </h1>
                  <input
                    type="text"
                    placeholder="Town or City"
                    className="w-full p-3 bg-[#F6F7F9] rounded-lg mt-1"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* rental info div */}
          <div className="w-full bg-white p-2 mt-2 rounded-lg mx-auto lg:mx-0">
            <div>
              <h1 className="text-[rgba(26,32,44,100)] font-bold">
                Rental Info
              </h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-[rgba(144,163,191,100)] text-[14px]">
                Please select your Rental Date
              </h1>
              <h1 className="text-[rgba(144,163,191,100)] text-[14px]">
                Step 2 to 4
              </h1>
            </div>

            <form action="" className="my-3">
              <div className="">
                <div className="flex gap-2">
                  <input type="radio" checked />
                  <h1 className="font-[PlusJakartaSan] font-semibold text-[16px]">
                    Pick - Up
                  </h1>
                </div>

                <div className="md:flex justify-between gap-3 mt-2">
                  <div className="md:w-[50%]">
                    <h1 className="text-[rgba(26,32,44,100)] font-bold text-[16px]">
                      Location
                    </h1>
                    <input
                      type="text"
                      placeholder="Select your City"
                      className="w-full p-3 bg-[#F6F7F9] rounded-lg mt-1"
                    />
                  </div>

                  <div className="mt-2 md:mt-0  md:w-[50%]">
                    <h1 className="text-[rgba(26,32,44,100)] font-bold text-[16px]">
                      Date
                    </h1>
                    <input
                      type="date"
                      className="w-full p-3 bg-[#F6F7F9] rounded-lg mt-1"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <div className="mt-2 md:mt-0 md:w-[50%]">
                    <h1 className="text-[rgba(26,32,44,100)] font-bold text-[16px]">
                      Time
                    </h1>
                    <input
                      type="time"
                      className="w-full p-3 bg-[#F6F7F9] rounded-lg mt-1"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Payment Method */}
          <div className="w-full  bg-white p-2 mt-2 rounded-lg mx-auto lg:mx-0">
            <div>
              <h1 className="text-[rgba(26,32,44,100)] font-bold">
                Payment Method
              </h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-[rgba(144,163,191,100)] text-[14px]">
                Please enter your payment method
              </h1>
              <h1 className="text-[rgba(144,163,191,100)] text-[14px]">
                Step 3 to 4
              </h1>
            </div>

            <form action="" className="my-3 rounded-lg bg-[#F6F7F9] p-3">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <input type="radio" checked />
                  <h1 className="font-[PlusJakartaSan] font-semibold text-[16px]">
                    Credit Card
                  </h1>
                </div>
                <div>
                  <Image
                    src={visa}
                    alt="loading"
                    width={100}
                    height={100}
                  ></Image>
                </div>
              </div>

              <div className="md:flex justify-between gap-3 mt-2">
                <div className="md:w-[50%]">
                  <h1 className="text-[rgba(26,32,44,100)] font-bold text-[16px]">
                    Card Number
                  </h1>
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full p-3 bg-white rounded-lg mt-1"
                  />
                </div>

                <div className="mt-2 md:mt-0  md:w-[50%]">
                  <h1 className="text-[rgba(26,32,44,100)] font-bold text-[16px]">
                    Expiration Date
                  </h1>
                  <input
                    type="date"
                    className="w-full p-3 bg-white rounded-lg mt-1"
                  />
                </div>
              </div>
              <div className="md:flex justify-between gap-3 mt-2">
                <div className="md:w-[50%]">
                  <h1 className="text-[rgba(26,32,44,100)] font-bold text-[16px]">
                    Card Holder
                  </h1>
                  <input
                    type="text"
                    placeholder="Card holder"
                    className="w-full p-3 bg-white rounded-lg mt-1"
                  />
                </div>
                <div className="mt-2 md:mt-0  md:w-[50%]">
                  <h1 className="text-[rgba(26,32,44,100)] font-bold text-[16px]">
                    CVC
                  </h1>
                  <input
                    type="number"
                    placeholder="CVC"
                    className="w-full p-3 bg-white rounded-lg mt-1"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Confirmation Method */}
          <div className="w-full bg-white p-2 mt-2 rounded-lg mx-auto lg:mx-0">
            <div>
              <h1 className="text-[rgba(26,32,44,100)] font-bold">
                Confirmation
              </h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-[rgba(144,163,191,100)] text-[14px]">
                We are getting to the end. Just few clicks and your rental is
                ready.
              </h1>
              <h1 className="text-[rgba(144,163,191,100)] text-[14px]">
                Step 4 to 4
              </h1>
            </div>

            <div className="my-4">
              <div className="flex gap-2 p-3 bg-[#F6F7F9] mt-2">
                <input type="checkbox" />
                <p>
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promised!
                </p>
              </div>
              <div className="flex gap-2 p-3 bg-[#F6F7F9] mt-2">
                <input type="checkbox" />
                <p>I agree with our terms and consitions and privacy policy.</p>
              </div>
            </div>

            <div className="w-fit mt-4">
              <button className="bg-[rgba(53,99,233,100%)] text-white px-6 py-3 rounded-lg">
              <Link href={"/CheckoutPage"}>Rent Now</Link>
              </button>
            </div>

            <div className="mt-3">
              <Image
                src={security}
                alt="loading"
                width={30}
                height={30}
              ></Image>
              <h1 className="text-[rgba(26,32,44,100%)] text-[14px]">
                All your data are safe
              </h1>
              <p className="text-[12px] text-[rgba(144,163,191,100%)]">
                We are using the most advanced security to provide you the best
                experience ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
