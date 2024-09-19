
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Infobox({info}){
    // let info={
    //     City:"Kanpur",
    //     feelslike:26.32,
    //     temp:34.33,
    //     tempMin:66.31,
    //     tempMax:67.22,
    //     humidity:47,
    //     weather:"Cloudy",
    // };
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div>
            {/* <h2>Weather - {info.weather}</h2> */}
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL:(info.temp>15)?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.City}
          {/* {info.humidity>80? <ThunderstormIcon /> :(info.temp>15)?<WbSunnyIcon />:<AcUnitIcon /> } */}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>Temperature={info.temp}&deg;C</div>
            <div>Humidity={info.humidity}</div>
            {/* <div>FeelsLike={info.feelsLike}</div> */}
            <div>Min Temp={info.tempMin}&deg;C</div>
            <div>Max Temp={info.tempMax}&deg;C</div>
            <p>
                The weather can be describe as <i>{info.weather} </i> and feels like <i>{info.feelsLike}&deg;C</i> 
            </p>

        </Typography>
      </CardContent>

    </Card>
        </div>
    );
}