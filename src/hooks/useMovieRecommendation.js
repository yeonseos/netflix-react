import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const language = "?language=ko-KR";

const MovieRecommendation = ({ id }) => {
  return api.get(`/movie/${id}/recommendations${language}`);
};

export const useMovieRecommendationQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-recommendation", id],
    queryFn: () => MovieRecommendation({ id }),
    select: (result) => result.data.results,
  });
};
