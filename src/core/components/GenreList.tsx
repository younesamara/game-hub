import React from 'react';
import useGenres from "../../hooks/useGenres.ts";

const GenreList = () => {

    const {genres, error, isLoading} = useGenres();


    return (
        <div>

        </div>
    );
};

export default GenreList;
