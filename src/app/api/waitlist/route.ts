import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Send email notification to you
    const msg = {
      to: process.env.WAITLIST_EMAIL_TO!,
      from: process.env.WAITLIST_EMAIL_FROM!, // must be verified sender
      subject: "New Scheddy Waitlist Signup",
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>They want early beta access.</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("SendGrid error:", error?.response?.body || error);
    return NextResponse.json(
      { error: "Email could not be sent" },
      { status: 500 }
    );
  }
}
