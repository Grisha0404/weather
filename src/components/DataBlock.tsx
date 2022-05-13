import React, {useEffect, useState} from 'react';
import style from './weather.module.css'

export const DataBlock = () => {
    const [data, setData] = useState(new Date())

    const nullClock = (num: number) => num < 10 ? '0' + num : num;
    useEffect(() => {
        const intervalClock = setTimeout(() => {
            setData(new Date)
        }, 1000)
        return () => {
            clearInterval(intervalClock)
        }
    })
    return (
        <div className={style.time}>
            <div>
                <span>{nullClock(data.getHours())}</span>:
                <span>{nullClock(data.getMinutes())}</span>:
                <span>{nullClock(data.getSeconds())}</span>
            </div>
        </div>
    );
};
