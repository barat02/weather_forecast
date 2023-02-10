import React from 'react';
import './Search.css'
import search from '../assets/search.svg'
function Search(props) {
    const API_KEY = 'd49a9acd41b8bcc680b4ac1978cbe25d'
    const URL = 'https://api.openweathermap.org/data/2.5/weather'

    let city = ''

    async function loadingData(){
        let responce = await fetch(`${URL}?q=${city}&units=metric&cnt=78&appid=${API_KEY}`)
        let data = await responce.json()
        let message = ''
        console.log(data)
      
        if(data.cod == '200'){
            return props.setWeatherState(data)
        } else{
            alert('Введите существующий город')
        }
    }
    

    function setCity(event){
        city = event.target.value
    }
    



    
    return (
        <div>
            <form>
            <input type="text" onChange={setCity} placeholder='e.g. New-York, Dublin'/> 
            </form>
            <button onClick={loadingData}>Search</button>
        </div>
    );
}

export default Search;