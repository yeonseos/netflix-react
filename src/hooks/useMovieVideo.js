import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieVideo = ({ id }) => api.get(`/movie/${id}/videos`);

const useMovieVideoQuery = ({ id }) =>
  useQuery({
    queryKey: ["movie-reviews", { id }],
    queryFn: () => fetchMovieVideo({ id }),
    select: (result) => result.data,
  });

export default useMovieVideoQuery;
