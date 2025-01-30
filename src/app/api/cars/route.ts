import { NextResponse } from "next/server"
import { connectToDatabase } from "@/app/db/connection"

export async function GET() {
  try {
    const db = await connectToDatabase()
    const cars = await db.collection("cars").find({}).toArray()
    return NextResponse.json(cars)
  } catch (error) {
    console.error("Error fetching cars:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
