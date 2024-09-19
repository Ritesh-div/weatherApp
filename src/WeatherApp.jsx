import Searchbox from './Searchbox';
import Infobox from './Infobox';
import { useState } from 'react';
import "./Weather.css";

export default function weatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
    //     City:"Delhi",
    //     feelslike:26.32,
    //     temp:34.33,
    //     tempMin:66.31,
    //     tempMax:67.22,
    //     humidity:47,
    //     weather:"Cloudy",
    // 
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
   
    return(
        <div className='weather'>
            <h2><u>Weather App</u></h2>
            <Searchbox updateInfo={updateInfo}/>
            <br />
            <Infobox info={weatherInfo}/>
        </div>
    );
}