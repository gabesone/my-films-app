import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const movie_id = searchParams.get("search");

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}`
  );

  return NextResponse.json(data);
}
