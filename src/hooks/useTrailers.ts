import {useQuery} from "@tanstack/react-query";
import ApiClient from "../core/services/api-client.ts";
import Trailer from "../entities/Trailer.ts";


const useTrailers = (gameId: number) => {

    const apiClient = new ApiClient<Trailer>("/games/" + gameId + "/movies");

    return useQuery({
        queryKey: ['tailers', gameId],
        queryFn: apiClient.getAll
    });
}

export default useTrailers;