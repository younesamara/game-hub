import {useQuery} from "@tanstack/react-query";
import genres from "../data/Genres.ts";
import ApiClient from "../core/services/api-client.ts";
import ms from "ms";
import Genre from "../entities/Genre.ts";

const apiClient = new ApiClient<Genre>("/genres");



const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres
})

export default useGenres;
