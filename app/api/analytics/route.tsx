import { NextResponse } from "next/server";

export async function GET() {
  try {
    const analytics = {
      visitors: 15240,
      pageViews: 48721,
      projects: 25,
      clients: 18,
      messages: 67,
      githubStars: 124,
      downloads: 932,
      countries: 42,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        data: analytics,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Analytics API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch analytics.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("Analytics Event:", body);

    return NextResponse.json(
      {
        success: true,
        message: "Analytics event received.",
        event: body,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Analytics POST Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Invalid request.",
      },
      {
        status: 400,
      }
    );
  }
}