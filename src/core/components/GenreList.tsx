import useGenres from "../../hooks/useGenres.ts";

const GenreList = () => {

    const {data, error, isLoading} = useGenres();

    return (
        <>
            {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </>
    );
};

export default GenreList;
