import platforms from "../data/Platforms.ts";
import {useQuery} from "@tanstack/react-query";
import ApiClient from "../core/services/api-client.ts";
import ms from "ms";
import Platform from "../entities/Platform.ts";


const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const UsePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
});


export default UsePlatforms;
