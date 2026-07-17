import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const contact = await prisma.contact.create({
      data: { name, email, subject, message },
    });

    // Send email alert — wrapped so email failure doesn't break the saved submission
    try {
      await resend.emails.send({
        from: "Portfolio Contact <<anything>@veloorexap.resend.app>",
        to: "rabbiyazaheer8@gmail.com",
        subject: `New Contact Form Submission: ${subject || "No subject"}`,
        html: `
          <h2>New message from your portfolio site</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Subject:</b> ${subject || "N/A"}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
        `,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    return NextResponse.json(
      { success: true, message: "Message saved successfully.", contact },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}