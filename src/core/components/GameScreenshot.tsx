import useScreenshots from "../../hooks/useScreenshots.ts";
import {SimpleGrid} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";

interface Props {
    gameId: number
}

const GameScreenshot = ({gameId}: Props) => {

    const {data, error, isLoading} = useScreenshots(gameId);

    if (isLoading) return null;
    if (error) throw error;

    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
            {
                data?.results.map(file =>
                    <Image key={file.id} src={file.image}></Image>
                )
            }
        </SimpleGrid>
    )

};

export default GameScreenshot;