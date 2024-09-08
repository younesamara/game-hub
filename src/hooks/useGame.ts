import {useQuery} from "@tanstack/react-query";
import ApiClient from "../core/services/api-client.ts";
import ms from "ms";
import Game from "../entities/Game.ts";


const apiClient = new ApiClient<Game>("/games");


const UseGame = (id: number | string) => {

    return useQuery({
        queryKey: ['game'],
        queryFn: () => apiClient.get(id),
        staleTime: ms('24h'),
    })

};

export default UseGame;