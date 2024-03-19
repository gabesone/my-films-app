import { RatingProps } from "../types";

const Rating = ({ vote_average, containerStyles }: RatingProps) => {
  return (
    <p className={containerStyles ? containerStyles : "text-sm text-[#6C7C85]"}>
      Rating:{" "}
      {vote_average?.toFixed(1).split(".")[1][0] == "0"
        ? vote_average?.toFixed(0)
        : vote_average?.toFixed(1)}
      /10
    </p>
  );
};

export default Rating;
