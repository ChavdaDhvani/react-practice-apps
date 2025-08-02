import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){

    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = Add_your_key;

    let getWeatherInfo = async () =>{
     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonRespo = await response.json();
     console.log(jsonRespo);
     let result = {
        city: city,
        temp: jsonRespo.main.temp,
        tempMin: jsonRespo.main.temp_min,
        tempMax: jsonRespo.main.temp_max,
        humidity: jsonRespo.main.humidity,
        feelsLike: jsonRespo.main.feels_like,
        weather: jsonRespo.weather[0].description,
     };
     console.log(result);
     return result;
    };


    let handleChange = (event) =>{
        setCity( event.target.value);
    };
    
    let handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(city);
        setCity("");
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo);

    };
 
    return(
        <div className='SearchBox'>

            <form onSubmit={handleSubmit}>
              <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
              <br></br><br></br>
              <Button type="submit" size='small' variant="contained">Search</Button>
            </form>
              
        </div>
    )

}
