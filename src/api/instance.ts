import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    // headers: {
    //     'API_KEY': '2e9ba06124d139023be9419f3f53805d'
    // }
})
