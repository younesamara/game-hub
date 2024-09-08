import usePlatforms from "./usePlatforms.ts";

const UsePlatform = (id?: number | undefined) => {

    const {data: platforms} = usePlatforms();
    return platforms?.results.find(g => g.id === id);

};

export default UsePlatform;