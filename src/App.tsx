import React from 'react';
import './App.css';
import {TitleForm} from "./components/title/TitleForm";
import {WeatherContainer} from "./pages/weather/WeatherContainer";
import {SelectedContainer} from "./components/city/SelectedContainer";

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
