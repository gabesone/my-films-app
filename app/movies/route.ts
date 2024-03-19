// import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

const API_KEY = process.env.API_KEY;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const movie_id = searchParams.get("id");

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`
  );

  return NextResponse.json(data);
}
