import { NextResponse } from "next/server"
import { connectToDatabase } from "@/app/db/connection"

export async function GET() {
  try {
    const db = await connectToDatabase()
    const users = await db.collection("users").find({}).toArray()
    return NextResponse.json(users)
  } catch (error) {
    console.error("Error fetching users:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
