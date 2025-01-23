import { NextResponse } from 'next/server';
import Data from "../../../Data/rental-car-data.json";

export async function GET() {
  return NextResponse.json(Data);
}