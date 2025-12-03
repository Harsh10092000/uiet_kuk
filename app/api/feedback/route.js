import { NextResponse } from "next/server";
import { z } from "zod";
import pool from "@/app/libs/mysql";

const feedbackSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(150),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(255),
  program: z.string().trim().min(2, "Program name is required").max(150),
  rating: z.coerce.number().min(1).max(5),
  comments: z
    .string()
    .trim()
    .min(10, "Comments should be at least 10 characters")
    .max(2000),
  location: z.string().trim().max(255).optional().or(z.literal("").transform(() => undefined)),
});

export async function POST(request) {
  try {
    const payload = await request.json();
    const data = feedbackSchema.parse(payload);

    const ipHeader = request.headers.get("x-forwarded-for");
    const ipAddress =
      ipHeader?.split(",")[0]?.trim() || request.ip || null;
    const userAgent = request.headers.get("user-agent") || null;
    const referrer = request.headers.get("referer") || null;

    const db = await pool;
    const query = `
      INSERT INTO feedback_entries
        (full_name, email, program, rating, comments, ip_address, user_agent, referrer, location)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await db.execute(query, [
      data.fullName,
      data.email,
      data.program,
      data.rating,
      data.comments,
      ipAddress,
      userAgent,
      referrer,
      data.location || null,
    ]);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const messages = error.errors?.map((e) => e.message).filter(Boolean) || [];
      return NextResponse.json(
        {
          error:
            messages.join(" ") ||
            "Please check the form fields and try again.",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    console.error("Feedback form error:", error);
    return NextResponse.json(
      {
        error:
          "We couldn't submit your feedback due to a server issue. Please try again after some time.",
      },
      { status: 500 }
    );
  }
}

