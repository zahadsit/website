import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // ⚠️ Skipping MongoDB – demo mode
    console.log("Skipping MongoDB save - demo mode active");
    console.log("Received registration data:", { name, email });

    // Simulate logic (normally would check for existing users, etc.)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simulate admin creation logic
    const role = 'demo'; // since no DB, we just mark it as demo user

    const message = 'User registered successfully (MongoDB disabled)';

    return NextResponse.json(
      { message, role, hashedPassword },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Error registering user:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Internal Server Error' 
      },
      { status: 500 }
    );
  }
}
