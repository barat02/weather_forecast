import React from 'react';
import './WeatherCard.css';
import snow from '../assets/snow.png';
import dawn from '../assets/dawn.png'
import sunset from '../assets/sunset.png'
import proc from '../assets/proc.svg'
function WeatherCard(props) {
    return (
        <div>
            <div className='geo_temperature'>
                <div className='geo'>
                    <h1>Karakol, KG</h1>
                    <h2>Friday 3 February</h2>
                    <h3>Population: 100 000</h3>
                </div>
                <div>
                    <div className='temperature_time'>
                        <div className='temperature'>
                            <div>
                            <img src={snow} alt="" width={80} />
                            </div>
                            <div>
                                <h1>-2°C</h1>
                            </div>
                            <div>
                          
                            </div>
                        </div>
                        <div className='time'>
                            <div className='dawn'>
                                <img src={dawn} alt=""width={70} />
                                <h4>07:00  A.M.</h4>
                            </div>
                            <div className='sunset'>
                                <img src={sunset} alt="" width={70} />
                                <h4>19:00  P.M.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                    
            </div>
        </div>
    );
}

export default WeatherCard;