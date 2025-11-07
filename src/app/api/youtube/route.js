import { NextResponse } from "next/server";

export async function GET() {
//   const API_KEY = process.env.YOUTUBE_API_KEY;
//   const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  const API_KEY = "AIzaSyBFiZz9evXl91BLg0kDaJs0L34k5nJ6A6E";
  const CHANNEL_ID = "UCNuDKbHMm-svm2XYQ7ur_OQ";

  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=3`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data.items);
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
  }
}
