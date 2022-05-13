import React from 'react';
import style from "./weather.module.css";
import {DataBlock} from "./DataBlock";

type CityBlockType = {
    cityName: string,
    country: string,
    icon: string,
}

export const CityBlock: React.FC<CityBlockType> = ({cityName, country, icon}) => {

    return (
        <div className={style.cityBox}>
            <span>{cityName || ''}, {country || ''}</span>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
            <DataBlock/>
        </div>
    );
};