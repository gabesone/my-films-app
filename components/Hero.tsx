import React, { Suspense } from "react";
import Image from "next/image";
import Rating from "./Rating";
import { IoMdPlay } from "react-icons/io";
import { MdOutlinePlayCircle } from "react-icons/md";
import { PiPlayCircleLight } from "react-icons/pi";
import { MovieProps } from "@/models/tmdb-movies";
import Link from "next/link";

const getTrendingsMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
      process.env.API_KEY,
    {
      cache: "no-cache",
    }
  );

  const data = await res.json();

  return data.results;
};

const randomMovieHero = async () => {
  const data = await getTrendingsMovies();
  const randomArrayIndex = Math.floor(Math.random() * data.length);
  const randomMovie: MovieProps = data[randomArrayIndex];
  return randomMovie;
};

const Hero = async () => {
  const { backdrop_path, title, overview, vote_average, id } =
    await randomMovieHero();

  return (
    <div className="relative flex max-h-[720px]">
      <div className="flex absolute h-[50%] xl:h-full xl:w-[65%] w-full bottom-0 xl:bg-gradient-to-r bg-gradient-to-t from-black via-current to-transparent z-10 justify-start max-xl:items-end pt-4">
        {/* Movie or TV show details */}
        <div className="text-white flex flex-col px-4 xl:px-8 py-4 xl:py-32 space-y-2 items-baseline xl:w-[65%] xl:space-y-8">
          <Link href={`/films/${id}`}>
            <h2 className="text-2xl xl:text-4xl">{title}</h2>
          </Link>
          <p className="text-white max-sm:hidden">
            {overview.slice(0, 150)}...
          </p>
          <Rating vote_average={vote_average} />
          <div className="max-lg:hidden">
            <button className="bg-gray-500/60 p-2 flex items-center px-4 hover:bg-gray-300/40">
              <IoMdPlay className="mr-2" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        {
          // <Suspense fallback={<Loading />}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title}
            priority
            width={1280}
            height={720}
            className="object-contain"
          />
          // </Suspense>
        }
      </div>
      {/* Watch Trailer Button*/}
      <div>
        <PiPlayCircleLight
          className="flex absolute left-[40%] sm:left-[45%] top-[10%] text-gray-200 lg:hidden cursor-pointer"
          size={72}
        />
      </div>
    </div>
  );
};

export default Hero;
