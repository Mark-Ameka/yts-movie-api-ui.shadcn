// MovieMRCard.tsx
import { Link } from "react-router-dom";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Movie } from "./Home";

interface MovieMRCardProps {
  movie: Movie;
}

function MovieMRCard({ movie }: MovieMRCardProps) {
  return (
    <div className="col-span-1">
      <Link
        to={`/movie/${movie.id}`}
        target="_blank"
        className="hover:text-primary"
      >
        {movie.title_long && (
          <CardTitle className="my-2 truncate text-center">
            {movie.title_long}
          </CardTitle>
        )}
        {movie.medium_cover_image && (
          <div className="flex flex-col items-center overflow-hidden rounded-md">
            <img
              className="rounded-md object-cover transition-all hover:scale-105 aspect-[5/7]"
              src={movie.medium_cover_image}
              alt={movie.title_long}
            />
          </div>
        )}
      </Link>
      {movie.url && (
        <CardDescription className="truncate text-center">
          <Link
            to={movie.url}
            target="_blank"
            className="text-primary underline-offset-4 hover:underline"
          >
            {movie.url}
          </Link>
        </CardDescription>
      )}
      {movie.rating && (
        <CardDescription className="text-center">
          Rating: {movie.rating}
        </CardDescription>
      )}
    </div>
  );
}

export default MovieMRCard;
