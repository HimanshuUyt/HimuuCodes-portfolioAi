import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const {
      name,
      email,
      subject,
      message,
    } = body;

    // Validation

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address.",
        },
        {
          status: 400,
        }
      );
    }

    // ----------------------------------------
    // Save to database
    // Send email
    // Send Discord webhook
    // Send Telegram message
    // Resend / Nodemailer
    // etc...
    // ----------------------------------------

    console.log({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Contact API is running.",
  });
}