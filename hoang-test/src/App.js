import React, { useState } from 'react';
import './App.css';
import { icon } from './icon';

const api = {
  key: '85b0a0f1634458d118f79694d790c493',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [data, setData] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === 'Enter') {
      fetch(`${api.base}weather?q=${data}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setData('');
        });
    }
  }

  return (
    <div className='container'>
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Nhập tên thành phố"
            onChange={e => setData(e.target.value)}
            value={data}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div className='weather-info'>
          <div className="location-box">
            <div className="location size">{weather.name}, {weather.sys.country}</div>
          </div>
          <div className="weather-box">
            <div className="temp size">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather size">
              {weather.weather[0].main}
            </div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
    </div>
  );
}

export default App;
