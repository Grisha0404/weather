import {WeatherDataType} from "../api/WeatherAPI";

export const setWeatherAC = (weather: WeatherDataType) => ({type: 'SET-WEATHER', weather} as const)
export const setErrorAC = (err: string | null) => ({type: 'SET-ERROR', err} as const)


//Type
type SetErrorACACType = ReturnType<typeof setErrorAC>
type SetWeatherACType = ReturnType<typeof setWeatherAC>
export type WeatherActionType = SetWeatherACType | SetErrorACACType