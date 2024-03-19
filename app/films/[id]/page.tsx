import React from "react";

type movie_id = {
  id: number;
  title: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
};

const page = ({ id }: movie_id) => {
  return <div>page</div>;
};

export default page;
