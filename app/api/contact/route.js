import { NextResponse } from "next/server";
import { z } from "zod";
import pool from "@/app/libs/mysql";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(150),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(255),
  phone: z
    .string()
    .trim()
    .regex(
      /^[0-9+\-\s()]{7,20}$/,
      "Phone number should be 7-20 characters (digits, spaces, +, -, parentheses)"
    ),
  subject: z.string().trim().min(3, "Subject is required").max(150),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(2000),
  location: z.string().trim().max(255).optional().or(z.literal("").transform(() => undefined)),
});

export async function POST(request) {
  try {
    const payload = await request.json();
    const data = contactSchema.parse(payload);

    const ipHeader = request.headers.get("x-forwarded-for");
    const ipAddress =
      ipHeader?.split(",")[0]?.trim() || request.ip || null;
    const userAgent = request.headers.get("user-agent") || null;
    const referrer = request.headers.get("referer") || null;

    const db = await pool;
    const query = `
      INSERT INTO contact_messages
        (full_name, email, phone, subject, message, ip_address, user_agent, referrer, location)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await db.execute(query, [
      data.fullName,
      data.email,
      data.phone,
      data.subject,
      data.message,
      ipAddress,
      userAgent,
      referrer,
      data.location || null,
    ]);


    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const messages = error.issues?.map((e) => e.message).filter(Boolean) || [];
      return NextResponse.json(
        {
          error:
            messages.join(" ") ||
            "Please check the form fields and try again.",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          "We couldn't submit your request due to a server issue. Please try again after some time.",
      },
      { status: 500 }
    );
  }
}

