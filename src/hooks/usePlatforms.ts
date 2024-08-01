import useData from "./useData.ts";


export interface Platfrom {
    id: number;
    name: string;
    slug: string;

}

const UsePlatforms = () => useData<Platfrom>("/platforms/lists/parents");


export default UsePlatforms;
