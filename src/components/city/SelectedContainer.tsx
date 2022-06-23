import React from 'react';
import {SelectedCity} from "./SelectedCity";
import {useDispatch} from "react-redux";
import {getWeatherTC} from "../../redux/thunk";
import {setErrorAC} from "../../redux/actions";

export const SelectedContainer = () => {
    const dispatch = useDispatch()

    const clickHandler = (title: string) => {
        if (title.trim() === '') {
            dispatch(setErrorAC('Please, enter a city name!'))
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
