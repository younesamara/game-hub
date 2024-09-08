import ApiClient, {FetchResponse} from "../core/services/api-client.ts";
import {useInfiniteQuery} from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "../store.ts";
import Game from "../entities/Game.ts";

const apiClient = new ApiClient<Game>("/games");


const useGames = () => {

    const gameQuery = useGameQueryStore(s => s.gameQuery);

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({pageParam = 1}) => apiClient.getAll({
            params: {
                genres: gameQuery.genreId,
                platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms('24h')
    });
}

export default useGames;
