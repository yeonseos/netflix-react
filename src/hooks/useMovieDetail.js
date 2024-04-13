import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const language = "?language=ko-KR";

const fetchMovieDetail = ({ id }) => {
  return api.get(`/movie/${id}${language}`);
};

export const useMovieDetailQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: () => fetchMovieDetail({ id }),
    select: (result) => result.data,
  });
};
