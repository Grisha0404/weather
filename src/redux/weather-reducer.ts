import {initialState, InitialStateType} from "./initialState";
import {WeatherActionType} from "./actions";


export const weatherReducer = (state = initialState, action: WeatherActionType): InitialStateType => {
    switch (action.type) {
        case "SET-ERROR":
            return {...state, error: action.err}
        case "SET-WEATHER":
            return {...state, weather: action.weather}
        default:
            return state
    }
}



