"use client"

import React from "react"
import { useState, useCallback } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, Repeat, ArrowUpDown } from "lucide-react"
import { format } from "date-fns"

type RentalType = "pickup" | "dropoff"

interface LocationData {
  [key: string]: string[]
}

const locationData: LocationData = {
  "Karachi": ["TariqRoad", "ShahFaisal", "Numaish"],
  "Lahore": ["Downtown", "Hollywood", "Santa Monica"],
  "Multan": ["The Loop", "River North", "Wicker Park"],
}

const PickDropSection: React.FC = () => {
  const [rentalType, setRentalType] = useState<RentalType>("pickup")
  const [pickupCity, setPickupCity] = useState<string>("")
  const [pickupLocation, setPickupLocation] = useState<string>("")
  const [pickupDate, setPickupDate] = useState<Date>()
  const [pickupTime, setPickupTime] = useState<string>("")
  const [dropoffCity, setDropoffCity] = useState<string>("")
  const [dropoffLocation, setDropoffLocation] = useState<string>("")
  const [dropoffDate, setDropoffDate] = useState<Date>()
  const [dropoffTime, setDropoffTime] = useState<string>("")
  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== "undefined" ? window.innerWidth <= 1024 : false)

  // Handle responsive design
  const checkMobileView = useCallback(() => {
    setIsMobile(window.innerWidth <= 1024)
  }, [])

  // Add event listener for window resize
  React.useEffect(() => {
    window.addEventListener('resize', checkMobileView)
    return () => window.removeEventListener('resize', checkMobileView)
  }, [checkMobileView])

  const handleSwap = () => {
    setPickupCity(dropoffCity)
    setPickupLocation(dropoffLocation)
    setPickupDate(dropoffDate)
    setPickupTime(dropoffTime)
    setDropoffCity(pickupCity)
    setDropoffLocation(pickupLocation)
    setDropoffDate(pickupDate)
    setDropoffTime(pickupTime)
  }

  const RentalSection: React.FC<{ type: RentalType }> = ({ type }) => {
    const isPickup = type === "pickup"
    const city = isPickup ? pickupCity : dropoffCity
    const setCity = isPickup ? setPickupCity : setDropoffCity
    const location = isPickup ? pickupLocation : dropoffLocation
    const setLocation = isPickup ? setPickupLocation : setDropoffLocation
    const date = isPickup ? pickupDate : dropoffDate
    const setDate = isPickup ? setPickupDate : setDropoffDate
    const time = isPickup ? pickupTime : dropoffTime
    const setTime = isPickup ? setPickupTime : setDropoffTime

    return (
      <div className={`
        ${isMobile ? 'w-full mb-4' : 'lg:w-[45%]'} 
        px-4 py-3 bg-white rounded-lg shadow-md
      `}>
        <RadioGroup 
          value={rentalType} 
          onValueChange={(value) => setRentalType(value as RentalType)}
          className="mb-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={type} id={type} />
            <Label htmlFor={type} className="font-bold capitalize">
              {type}
            </Label>
          </div>
        </RadioGroup>

        <div className={`
          ${isMobile ? 'flex-col' : 'flex'} 
          justify-between space-y-4 ${!isMobile && 'space-x-4'}
        `}>
          <div className="flex-1 space-y-2">
            <Label className="font-bold">Location</Label>
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(locationData).map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {city && (
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your location" />
                </SelectTrigger>
                <SelectContent>
                  {locationData[city].map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          {!isMobile && (
            <div className="w-[2px] h-10 bg-[#C3D4E9] self-center"></div>
          )}

          <div className="flex-1 space-y-2">
            <Label className="font-bold">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left font-normal"
                >
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                  <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          {!isMobile && (
            <div className="w-[2px] h-10 bg-[#C3D4E9] self-center"></div>
          )}

          <div className="flex-1 space-y-2">
            <Label className="font-bold">Time</Label>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your time" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                  <SelectItem key={hour} value={`${hour.toString().padStart(2, "0")}:00`}>
                    {`${hour.toString().padStart(2, "0")}:00`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`
      px-4 py-8 
      ${isMobile ? 'flex-col' : 'flex-row'} 
      flex justify-between items-center 
      bg-[#F6F7F9] 
      space-y-4 ${!isMobile && 'space-x-4'}
    `}>
      <RentalSection type="pickup" />
      <div className="flex items-center justify-center">
        <Button 
          onClick={handleSwap} 
          size="icon" 
          className={`
            ${isMobile ? 'mb-4' : 'mr-0'} 
            bg-[rgba(53,99,233,100%)] 
            hover:bg-[rgba(53,99,233,80%)]
          `}
        >
          {isMobile ? <ArrowUpDown className="h-6 w-6" /> : <Repeat className="h-6 w-6" />}
        </Button>
      </div>
      <RentalSection type="dropoff" />
    </div>
  )
}

export default PickDropSection;