import {AxiosResponse} from "axios";
import {instance} from "./instance";

//api
export const weatherAPI = {
    getWeather(city: string) {
        return instance.get<{}, AxiosResponse<WeatherDataType>>(`weather?q=${city}&lang=ru&units=metric&appid=2e9ba06124d139023be9419f3f53805d`)
    }
}

export type WeatherDataType = {
    weather: [
        {
            description: string,
            icon: string
        }
    ],
    main: {
        temp: number,
        humidity: number,
    },
    wind: {
        speed: number,
        deg: number
    },
    sys: {
        country: string,
    },
    name: string,

}