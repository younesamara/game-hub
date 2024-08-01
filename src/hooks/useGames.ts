import {useEffect, useState} from "react";
import {apiClient} from "@core/services";
import {CanceledError} from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGamesResponse {
    count: number;
    result: Game[];
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

        return () => controller.abort();

    }, [])

    return {games, error};
}

export default useGames;
