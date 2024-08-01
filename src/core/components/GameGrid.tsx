import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import useGames from "../../hooks/useGames.ts";


export function GameGrid() {

    const {data, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} padding='10px' spacing={10}>
                    {isLoading && skeletons.map((skeleton) =>
                        <GameCardContainer>
                            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
                        </GameCardContainer>
                    )}
                    {data.map(game =>
                        <GameCardContainer>
                            <GameCard key={game.id} game={game}/>
                        </GameCardContainer>
                    )}
                </SimpleGrid>
        </>
    )
}

