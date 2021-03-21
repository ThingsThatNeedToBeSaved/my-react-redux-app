import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../helpers/Spinner';
import { getAsyncWeather, selectWeather } from './weatherSlice';

export default function Weather() {
    const weather = useSelector(selectWeather);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!weather.weather.base) {
        dispatch(getAsyncWeather());
        }
    },[dispatch,weather.weather]);

    return (
        <React.Fragment>
            {weather.weather.base ? (
                <div className="weather position-absolute bg-secondary w-25 rounded d-flex" style={{opacity: 0.8, top: '3rem', right: '12rem', zIndex: 100}}>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather.weather[0].icon}@2x.png`} alt="Current Weather Icon" />
                    <div className="weather-info d-flex flex-column justify-content-center mb-2 ms-2">
                        <span className="text-white fs-3">{weather.weather.weather[0].main}</span>
                        <span className="text-white fs-5">{weather.weather.weather[0].description}</span>
                    </div>
                    <div className="weather-temp d-flex flex-column justify-content-center ms-auto me-3 mb-2">
                        <span className="text-center text-white fs-2">{weather.weather.main.temp} °C</span>
                        <span className="text-center text-white">humidity {weather.weather.main.humidity} %</span>
                    </div>
                </div>
            ) : (
                <Spinner />
            )}      
        </React.Fragment>
    )
}
