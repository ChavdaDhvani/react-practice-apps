import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeathrApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.10,
        tempMax: 25.50,
        humidity: 47,
        weather: "haze",

    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return (
        <div className="SearchBox" style={{textAlign: "center"}}>
            <h2>Weather app by Dhvani</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}