import { NextResponse } from "next/server";
import { productMock } from "@/server/mocks/product";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(productMock);
}