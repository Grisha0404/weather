import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";

 export const InfoBlock= () => {
     const speedWind = useSelector<AppRootStateType, number>(state => state.weather.speed)
     const humidity = useSelector<AppRootStateType, number>(state => state.weather.humidity)
    return (

        <div style={{color:'grey'}}>
            <div>Влажность: {humidity}%</div>
            <div>Ветер: {speedWind}км/час</div>
        </div>
    );
};
