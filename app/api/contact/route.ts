import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      message,
    } = body;

    await resend.emails.send({
      from: "Gallery Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New message from ${name}`,
      replyTo: email,

      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <hr/>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

 } catch (error) {
  console.error("RESEND ERROR:", error);

  return NextResponse.json(
    {
      success: false,
      error: String(error),
    },
    {
      status: 500,
    }
  );
}
}