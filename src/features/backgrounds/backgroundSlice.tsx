import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 

export const getAsyncBackgrounds = createAsyncThunk(
    'background/getAsync',
    async () => {
        const response = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&orientation=landscape&count=5`);
        return response.data;
    }
);

const backgroundSlice = createSlice({
    name: 'background',
    initialState: {
        backgrounds: [] as string[],
        isLoading: false,
        hasError: false
    },
    reducers: {
        addBackground: (state, action) => {
            state.backgrounds.push(action.payload);
        }
    },
    extraReducers: {
        ['background/getAsync/pending']: (state,action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        ['background/getAsync/fulfilled']: (state,action) => {
            state.isLoading = false;
            state.hasError = false;
            state.backgrounds.push(action.payload);
        },
        ['background/getAsync/rejected']: (state,action) => {
            state.isLoading = false;
            state.hasError = true;
        }

    }
});

interface State {
    background: {
        backgrounds: string[],
        isLoading: boolean,
        hasError: boolean
    }
}

export const selectBackgrounds = (state: State) => state.background;
export const { addBackground } = backgroundSlice.actions;
export default backgroundSlice.reducer;