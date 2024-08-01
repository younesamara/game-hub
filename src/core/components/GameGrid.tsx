import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import useGames from "../../hooks/useGames.ts";
import {Genre} from "../../hooks/useGenres.ts";

interface Props {
    selectedGenre: Genre | null;
}

export function GameGrid({selectedGenre}: Props) {

    const {data, error, isLoading} = useGames(selectedGenre);

    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} padding='10px' spacing={3}>
                {isLoading && skeletons.map((skeleton) =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                )}
                {data.map(game =>
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </>
    )
}

