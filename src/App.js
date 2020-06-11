import React, { useState } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import axios from 'axios'

import './App.css';

function App() {
  const [weather, setWeather] = useState([]);
  const APIKEY = '96eecc6536312fdd4744199680e7e198';

  async function fetchData(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
      .then(res => res.json())
      .then(data => data)
    if (city && country) {
      setWeather({
        data: apiData,
        city: apiData.name,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp - 273.15),
        error: ''
      })
    }
    else {
      setWeather({
        data: '',
        city: '',
        country: '',
        description: '',
        temperature: '',
        error: 'Please enter A City and Country'
      })
    }
  }
  console.log(weather)
  return (
    <div className="App">
      <h3> Weather App</h3>
      <Form getWeather={fetchData} />

      <Weather
        city={weather.city}
        country={weather.country}
        description={weather.description}
        temperature={weather.temperature}
        error={weather.error}
      />
    </div>
  );
}

export default App;
