import {useEffect, useState} from "react";
import {apiClient} from "@core/services";
import {CanceledError} from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
}

interface FetchGamesResponse {
    count: number;
    result: Game[];
}

export interface Platform {

    id: number;
    name: string;
    slug: string;
}

function useGames() {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const controller = new AbortController();

    useEffect(() => {

        apiClient
            .get<FetchGamesResponse>("/games", {signal: controller.signal})
            .then(res => setGames(res.data.results))
            .catch(err => {

                    if (err instanceof CanceledError)
                        return;

                    setError(err.message)
                }
            );


    }, [])

    return {games, error};
}

export default useGames;
