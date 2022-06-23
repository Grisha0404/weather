import React from 'react';

type InfoBlockType = {
    speed: number,
    humidity: number,
    description: string,
}

export const InfoBlock: React.FC<InfoBlockType> = ({speed, humidity, description}) => {
    return (

        <div style={{color: 'grey'}}>
            <div>{description}</div>
            <div>Влажность: {humidity}%</div>
            <div>Ветер: {speed}км/час</div>
        </div>
    );
};
