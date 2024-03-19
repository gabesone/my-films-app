import React from "react";
import { getTrendings } from "../api/fetchFunctions";
import Image from "next/image";
import { MovieProps } from "../types";
import Rating from "./Rating";
import { IoMdPlay } from "react-icons/io";
import { MdOutlinePlayCircle } from "react-icons/md";
import { PiPlayCircleLight } from "react-icons/pi";

const getPopularMovies = async () => {
  const popularMovies = await getTrendings();
  const randomBackDrop = Math.floor(Math.random() * popularMovies.length);
  return popularMovies[randomBackDrop];
};

const Hero = async () => {
  const randomMovieBackdrop: MovieProps = await getPopularMovies();
  console.log(randomMovieBackdrop);
  return (
    <div className="relative flex max-h-[720px]">
      <div className="flex absolute h-[65%] xl:h-full xl:w-[65%] w-full bottom-0 xl:bg-gradient-to-r bg-gradient-to-t from-black via-current to-transparent z-10 justify-start max-xl:items-end pt-4">
        {/* Movie or TV show details */}
        <div className="text-white flex flex-col px-4 xl:px-8 py-4 xl:py-32 space-y-2 items-baseline xl:w-[65%] xl:space-y-8">
          <h2 className="text-2xl xl:text-4xl">{randomMovieBackdrop.title}</h2>
          <p className="text-white max-sm:hidden">
            {randomMovieBackdrop.overview.slice(0, 150)}...
          </p>
          <Rating vote_average={randomMovieBackdrop.vote_average} />
          <div className="max-lg:hidden">
            <button className="bg-gray-500/60 p-2 flex items-center px-4 hover:bg-gray-300/40">
              <IoMdPlay className="mr-2" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <Image
          src={`https://image.tmdb.org/t/p/original/${randomMovieBackdrop.backdrop_path}`}
          alt={randomMovieBackdrop.title}
          priority
          width={1280}
          height={720}
          className="object-contain w-auto h-auto"
        />
      </div>
      {/* Watch Trailer Button*/}
      <div>
        <PiPlayCircleLight
          className="flex absolute left-[40%] sm:left-[45%] top-[15%] text-white lg:hidden cursor-pointer"
          size={72}
        />
      </div>
    </div>
  );
};

export default Hero;
