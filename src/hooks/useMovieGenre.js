import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const language = "?language=ko-KR";

const fetchMovieGenre = () => {
  return api.get(`/genre/movie/list${language}`);
};

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchMovieGenre,
    select: (result) => result.data.genres,
    staleTime: 300000, // 5분
  });
};
