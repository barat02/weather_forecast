import React from 'react';
import Search from './Search'; 
import Card from './WeatherCard'

function Content(props) {
    const [weatherState, setWeatherState] = React.useState({
        name: 'Karakol',
        main: {
            temp: '0'
        }
    }) 
    return (
        <main>
            <h6>Просмотр погоды</h6>
            <Search weatherState={weatherState} setWeatherState={setWeatherState} />
            <Card weatherState={weatherState} setWeatherState={setWeatherState} />
        </main>
    );
}

export default Content;