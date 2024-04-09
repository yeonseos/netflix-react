import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const language = "?language=ko-KR";

const fetchPopularMovies = () => {
  return api.get(`/movie/popular${language}`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    select: (result) => {
      return result.data;
    },
  });
};
