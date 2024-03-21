export interface MovieProps {
  backdrop_path: string;
  id: number;
  overview: string;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
}

export interface RatingProps {
  vote_average: number;
  containerStyles?: string;
}
