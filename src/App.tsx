import React from 'react';
import './App.css';
import {TitleForm} from "./components/TitleForm";
import {SelectedCity} from "./components/SelectedCity";
import {WeatherContainer} from "./components/WetherContainer";

function App() {
    return (
        <div className="App">
            <TitleForm/>
            <SelectedCity/>
            <WeatherContainer/>
        </div>
    );
}

export default App;
