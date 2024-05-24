import connectMongoDB from "@/src/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Newsletter from "@/src/models/mongodb/newsletter";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { email } = (await request.json()) as { email: string };
  await connectMongoDB();
  await Newsletter.create({ email });
  return new NextResponse(null, { status: 201 });
}
