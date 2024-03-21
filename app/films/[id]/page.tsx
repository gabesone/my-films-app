import { MovieProps } from "@/models/tmdb-movies";

interface PageProps {
  params: { id: number };
}

export default async function Page({ params: { id } }: PageProps) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const movieDetails: MovieProps = await res.json();

  return (
    <div>
      <div>{movieDetails.title}</div>
    </div>
  );
}
