import React from 'react';
import style from './weather.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ErrorSnackbar} from "../../components/error/ErrorSnackbar";
import {InfoBlock} from "../../components/info/InfoBlock";
import {CityBlock} from "../../components/city/CityBlock";
import {WeatherDataType} from "../../api/WeatherAPI";

export const WeatherContainer = () => {
    const weathers = useSelector<AppRootStateType, WeatherDataType>(state => state.weather.weather)
    const error = useSelector<AppRootStateType, string | null>(state => state.weather.error)

    let weatherTemp
    if (weathers) {
        weatherTemp = Math.ceil(weathers.main.temp)
    }

    return (
        <div>
            {weathers &&
            <div className={style.weatherContainer}>
                <div className={style.infoBlock}>
                    <CityBlock cityName={weathers.name} country={weathers.sys.country}
                               icon={weathers.weather[0].icon}/>
                    <div className={style.temp}>{weatherTemp}°C</div>
                    <InfoBlock speed={weathers.wind.speed} humidity={weathers.main.humidity}
                               description={weathers.weather[0].description}/>
                </div>
            </div>
            }
            <ErrorSnackbar error={error}/>
        </div>
    );
};
