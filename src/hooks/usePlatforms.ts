import useData from "./useData.ts";
import platforms from "../data/Platforms.ts";


export interface Platfrom {
    id: number;
    name: string;
    slug: string;

}

const UsePlatforms = () => ({data: platforms, isLoading: false, error: null});


export default UsePlatforms;
