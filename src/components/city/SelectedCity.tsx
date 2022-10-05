import React, {KeyboardEvent, useState} from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import style from "../../pages/weather/weather.module.css";

type SelectedCityType = {
    callBack: (title: string) => void
}

export const SelectedCity = (props: SelectedCityType) => {
    const [title, setTitle] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const clickHandler = () => {
        props.callBack(title)
        setTitle('')
    }

    const keyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Enter'){
            props.callBack(title)
        }
    }

    return (
        <div className={style.selectedContainer}>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField value={title} id="outlined-basic" label="Введите город.." variant="outlined"
                               onChange={changeHandler} onKeyPress={keyPress}/>
                </Box>
            </div>
            <div>
                <Button variant="outlined" onClick={clickHandler} style={{width: '10ch'}}>Найти</Button>
            </div>
        </div>
    );
};
