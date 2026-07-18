import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ success: false, error: "No token provided" }, { status: 400 });
    }

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await res.json();

    // score ranges 0.0 (bot) to 1.0 (human) — 0.5 is a common threshold
    if (!data.success || data.score < 0.5) {
      return NextResponse.json({ success: false, score: data.score }, { status: 200 });
    }

    return NextResponse.json({ success: true, score: data.score }, { status: 200 });
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return NextResponse.json({ success: false, error: "Verification failed" }, { status: 500 });
  }
}