import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const language = "?language=ko-KR";

const fetchTopRatedMovies = () => {
  return api.get(`/movie/top_rated${language}`);
};

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-topRated"],
    queryFn: fetchTopRatedMovies,
    select: (result) => {
      return result.data;
    },
  });
};
