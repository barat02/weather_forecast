import React from 'react';
import Search from './Search'; 
import Card from './WeatherCard'

function Content(props) {
    return (
        <main>
            <Search />
            <Card />
        </main>
    );
}

export default Content;