import React from 'react';
import './WeatherCard.css';
import snow from '../assets/snow.png';
import dawn from '../assets/dawn.png'
import sunset from '../assets/sunset.png'
import proc from '../assets/proc.svg'
function WeatherCard(props) {

    console.log(props.weatherState)
    return (
        <div>
            <div className='box_temp'>
                <div className='box'>
                    <h1>{props.weatherState? props.weatherState.name : 'Karakol,KG'}</h1>
                    <h1>{props.weatherState? props.weatherState?.sys?.country: 'KG'}</h1>
                    <h2>Today</h2>
                    
                </div>
                <div>
                    <div className='box_2'>
                        <div className='box_2_temp'>
                         
                            <div className='tempe'>
                                {props.weatherState? props.weatherState.main.temp: 0} °C
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