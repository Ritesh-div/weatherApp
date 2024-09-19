
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
// import Infobox from './Infobox';
// import "./Weather.css";


export default function Searchbox({updateInfo}){
    let [City,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="df44abea56a1617ad1a0a502ba13da83";
        let getWeaather=async()=>{
            try{
            let respone= await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
            let jesonRespone= await respone.json();
            console.log(jesonRespone);
            let result={
                City:City,
                temp:jesonRespone.main.temp,
                tempMin: jesonRespone.main.temp_min,
                tempMax: jesonRespone.main.temp_max,
                humidity: jesonRespone.main.humidity,
                feelsLike: jesonRespone.main.feels_like,
                weather: jesonRespone.weather[0].description,
            };
            console.log(result);
            return result;
            } catch(err){
                throw err;
            }
        };

    let handleChange=(event)=>{
        setCity(event.target.value);
    };

    let handleSubmit= async (event)=>{
        try{
            event.preventDefault();
            console.log(City);
            setCity("");
            let newInfo = await getWeaather();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
       
    };
    return(
        <div>
            {/* <h3>Search for the Weather:</h3> */}
            <form>
            <TextField id="City" onChange={handleChange} value={City} label="City Name" variant="outlined" required/>
            {/* <TextField id="City" onChange={handleChange} value={City} label="City Name" variant="standard" required/> */}
            <br /><br />
            <Button variant="contained" type='submit' onClick={handleSubmit}>Search</Button>
            {/* <Infobox /> */}
            {error&&<p style={{color:"red"}}>No such palce exists!</p>}
            </form>
        </div>
    );
}