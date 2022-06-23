import {WeatherDataType} from "../api/WeatherAPI";

export type InitialStateType = {
    weather: WeatherDataType,
    error: string | null,
}

export const initialState: InitialStateType = {
    error: null
} as InitialStateType