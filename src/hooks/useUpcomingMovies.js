import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const language = "?language=ko-KR";

const fetchUpComingMovies = () => {
  return api.get(`/movie/upcoming${language}`);
};

export const useUpComingdMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchUpComingMovies,
    select: (result) => {
      return result.data;
    },
  });
};
