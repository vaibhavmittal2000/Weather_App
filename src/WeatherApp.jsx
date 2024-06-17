import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import {useState} from 'react';

function WeatherApp() {

    const [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 43.15,
        humidity: 15,
        temp: 44.05,
        tempMax: 44.05,
        tempMin: 44.05,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
};

export default WeatherApp;