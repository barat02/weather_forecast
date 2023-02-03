import React from 'react';
import './WeatherCard.css';
import snow from '../assets/snow.png';
import dawn from '../assets/dawn.png'
import sunset from '../assets/sunset.png'
import proc from '../assets/proc.svg'
function WeatherCard(props) {
    const currentDate = new Date().toLocaleString("ru", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    });


    const currentDay = new Date().toLocaleString("ru",{
        weekday: 'long'
    })
    console.log(props.weatherState)
    return (
        <div>
            <div className='box_temp'>
                <div className='box'>
                    <h1>{props.weatherState? props.weatherState.name : 'Karakol,KG'}</h1>
                    <h2>Friday 3 February</h2>
                    <h3>Population: 100 000</h3>
                </div>
                <div>
                    <div className='box_2'>
                        <div className='box_2_temp'>
                            <div>
                            <img src={snow} alt="" width={80} />
                            </div>
                            <div>
                                {props.weatherState? props.weatherState.main.temp: 0}
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