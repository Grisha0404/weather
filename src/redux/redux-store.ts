import {applyMiddleware, combineReducers, createStore} from "redux";
import { weatherReducer} from "./weather-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {WeatherActionType} from "./actions";

const rootReducer = combineReducers({
    weather: weatherReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
export  type ActionType = WeatherActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, ActionType>

//@ts-ignore
window.store = store