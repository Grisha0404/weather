import {AppThunk} from "./redux-store";
import {weatherAPI} from "../api/WeatherAPI";
import {setErrorAC, setWeatherAC} from "./actions";

export const getWeatherTC = (city: string): AppThunk => async dispatch => {
    try {
        const res = await weatherAPI.getWeather(city)
        dispatch(setWeatherAC(res.data))
    } catch (err) {
        dispatch(setErrorAC('No results were found for this query, please enter a valid city name!'))
    }
}