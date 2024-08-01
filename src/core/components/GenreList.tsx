import useGenres, {Genre} from "../../hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";


interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {

    const {data, error, isLoading} = useGenres();


    if (isLoading) return <Spinner/>;
    if (error) return null;

    return (
        <List>
            {data.map(genre =>
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                        <Button onClick={() => onSelectGenre(genre)} fontWeight={genre.id === selectedGenre?.id?"bold":"normal"}
                                fontSize="lg" variant="link">{genre.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
    );
};

export default GenreList;
