import { NextResponse } from "next/server";
import { z } from "zod";
import pool from "@/app/libs/mysql";

const ideasSchema = z.object({
    rollNo: z.string().trim().optional(),
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
    idea: z
        .string()
        .trim()
        .min(10, "Idea description should be at least 10 characters")
        .max(2000),
});

export async function POST(request) {
    try {
        const payload = await request.json();
        const data = ideasSchema.parse(payload);

        const ipHeader = request.headers.get("x-forwarded-for");
        const ipAddress =
            ipHeader?.split(",")[0]?.trim() || request.ip || null;
        const userAgent = request.headers.get("user-agent") || null;
        const referrer = request.headers.get("referer") || null;

        const db = await pool;

        // Ensure the table exists
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS ideas_entries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        roll_no VARCHAR(50),
        full_name VARCHAR(150) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        idea TEXT NOT NULL,
        ip_address VARCHAR(45),
        user_agent TEXT,
        referrer TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
        await db.execute(createTableQuery);

        const query = `
      INSERT INTO ideas_entries
        (roll_no, full_name, email, phone, idea, ip_address, user_agent, referrer)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

        await db.execute(query, [
            data.rollNo || null,
            data.fullName,
            data.email,
            data.phone,
            data.idea,
            ipAddress,
            userAgent,
            referrer,
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

        console.error("Ideas form error:", error);
        return NextResponse.json(
            {
                error:
                    "We couldn't submit your idea due to a server issue. Please try again after some time.",
            },
            { status: 500 }
        );
    }
}
