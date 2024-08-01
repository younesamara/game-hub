import axios from "axios";


const apiClient = axios.create({

    baseURL: "https://api.rawg.io/api",
    params: {
        key: '745fd4f0216743ccb7d4fbff078b07ba'
    }
})

export default apiClient;
