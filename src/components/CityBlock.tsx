import React from 'react';
import style from "./weather.module.css";
import {DataBlock} from "./DataBlock";

type CityBlockType={
    cityName:string,
    country:string
}

export const CityBlock:React.FC<CityBlockType> = ({cityName,country}) => {

    return (
        <div className={style.cityBox}>
            <span>{cityName}, {country}</span>
            <DataBlock/>
        </div>
    );
};