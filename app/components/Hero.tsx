import React from "react";
import { getTrendings } from "../api/fetchFunctions";
import Image from "next/image";
import { Movie } from "../types";

const getPopularMovies = async () => {
  const popularMovies = await getTrendings();
  const randomBackDrop = Math.floor(Math.random() * popularMovies.length);
  return popularMovies[randomBackDrop];
};

const Hero = async () => {
  const randomMovieBackdrop: Movie = await getPopularMovies();
  console.log(randomMovieBackdrop);
  return (
    <div className="flex h-[720px] w-full">
      <div className="absolute h-[720px] w-[50%] top-0 left-0 bg-gradient-to-r from-black via-current to-transparent z-10"></div>
      <div className="relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${randomMovieBackdrop.backdrop_path}`}
          alt={randomMovieBackdrop.title}
          priority
          width={1280}
          height={720}
        />
      </div>
    </div>
  );
};

export default Hero;
