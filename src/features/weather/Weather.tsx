import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
            
        </React.Fragment>
    )
}
