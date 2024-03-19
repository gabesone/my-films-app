export interface MovieProps {
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
}

export interface RatingProps {
  vote_average: number;
  containerStyles?: string;
}
