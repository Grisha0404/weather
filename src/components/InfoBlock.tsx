import React from 'react';

type InfoBlockType ={
    speed: number,
    humidity:number
}

 export const InfoBlock:React.FC<InfoBlockType>= ({speed,humidity}) => {
    return (

        <div style={{color:'grey'}}>
            <div>Влажность: {humidity}%</div>
            <div>Ветер: {speed}км/час</div>
        </div>
    );
};
