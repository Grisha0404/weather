import React from 'react';
import './App.css';
import {TitleForm} from "./components/TitleForm";
import {WeatherContainer} from "./components/WetherContainer";
import {SelectedContainer} from "./components/SelectedContainer";

function App() {
    return (
        <div className="App">
            <TitleForm/>
            <SelectedContainer/>
            <WeatherContainer/>
        </div>
    );
}

export default App;
