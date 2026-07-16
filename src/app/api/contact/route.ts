import { NextRequest, NextResponse } from "next/server";

// Phase 2 TODO: connect this route to an email service (Resend, Nodemailer, etc.)
// or persist submissions to a database. The contact form already POSTs here
// with { name, email, subject, message }, so no frontend changes are required
// once real backend logic is added.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Placeholder response until backend integration ships.
    return NextResponse.json(
      {
        success: true,
        message: "Backend integration coming soon.",
        received: { name, email, subject, message },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
