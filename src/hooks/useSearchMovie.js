import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const language = "language=ko-KR";

const fetchSearchMovie = ({ keyword, page }) => {
  return keyword
    ? api.get(`/search/movie?query=${keyword}&${language}&page=${page}`)
    : api.get(`/movie/popular?${language}&page=${page}`);
};

export const useSearchMovieQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ["movie-search", { keyword, page }],
    queryFn: () => fetchSearchMovie({ keyword, page }),
    select: (result) => {
      return result.data;
    },
  });
};
