import { configureStore } from '@reduxjs/toolkit';
import backgroundReducer from '../features/backgrounds/backgroundSlice';
import quoteReducer from '../features/quote/quoteSlice';
import weatherReducer from '../features/weather/weatherSlice';

export default configureStore({
  reducer: {
    background: backgroundReducer,
    quote: quoteReducer,
    weather: weatherReducer
  },
});
