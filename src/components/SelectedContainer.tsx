import React from 'react';
import {SelectedCity} from "./SelectedCity";
import {getWeatherTC, setErrorAC} from "../redux/weather-reducer";
import {useDispatch} from "react-redux";

export const SelectedContainer = () => {
    const dispatch = useDispatch()

    const clickHandler = (title: string) => {
        if (title.trim() === '') {
            dispatch(setErrorAC(true))
        } else {
            dispatch(getWeatherTC(title))
        }
    }
    return (
        <div>
            <SelectedCity callBack={clickHandler}/>
        </div>
    );
};
