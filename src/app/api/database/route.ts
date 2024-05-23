import connectMongoDB from "@/src/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Newsletter from "@/src/models/mongodb";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { email } = (await request.json()) as { email: string };
  await connectMongoDB();
  await Newsletter.create({ email });
  return new NextResponse(null, { status: 201 });
}

export async function GET(): Promise<NextResponse> {
  await connectMongoDB();
  const emails = await Newsletter.find().select("email -_id");
  return NextResponse.json({ emails });
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const email = request.nextUrl.searchParams.get("email");
  if (!email) {
    return new NextResponse(JSON.stringify({ error: "Email not present" }), {
      status: 409,
    });
  }
  await connectMongoDB();
  await Newsletter.findOneAndDelete({ email });
  return NextResponse.json(
    { message: "Email removed from newsletter" },
    { status: 200 }
  );
}
