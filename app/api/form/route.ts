import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("Skipping MongoDB save - demo mode active");
    console.log("Form data received:", data);

    // Simulate success
    return NextResponse.json(
      { success: true, data, message: "Form received (MongoDB disabled)" },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : String(error) 
      },
      { status: 400 }
    );
  }
}
