import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI
if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local")
}
const client = new MongoClient(uri)

export async function connectToDatabase() {
  if (!uri) {
    throw new Error("Please add your MongoDB URI to .env.local")
  }
  try {
    await client.connect()
    console.log("Connected to MongoDB")
    return client.db("Morent-rental-ecom") // Replace with your database name
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
    throw error
  }
}

