import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 

export const getAsyncWeather = createAsyncThunk(
    'weather/getAsync',
    async () => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=${process.env.REACT_APP_OPEN_WEATHER_ACCESS_KEY}`);
        return response.data;
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {},
        isLoading: false,
        hasError: false
    },
    reducers: {
        addWeather: (state, action) => {
            state.weather = action.payload;
        }
    },
    extraReducers: {
        ['weather/getAsync/pending']: (state,action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        ['weather/getAsync/fulfilled']: (state,action) => {
            state.isLoading = false;
            state.hasError = false;
            state.weather = action.payload;
        },
        ['weather/getAsync/rejected']: (state,action) => {
            state.isLoading = false;
            state.hasError = true;
        }

    }
});

interface State {
    weather: {
        weather: {
            base?: string
        },
        isLoading: boolean,
        hasError: boolean 
    }
}

export const selectWeather = (state: State) => state.weather;
export const { addWeather } = weatherSlice.actions;
export default weatherSlice.reducer;