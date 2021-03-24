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
        backgrounds: {},
        isLoading: false,
        hasError: false
    },
    reducers: {
        addBackground: (state, action) => {
            state.backgrounds = action.payload;
        }
    },
    extraReducers: {
        // eslint-disable-next-line
        ['background/getAsync/pending']: (state,action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        // eslint-disable-next-line
        ['background/getAsync/fulfilled']: (state,action) => {
            state.isLoading = false;
            state.hasError = false;
            state.backgrounds = action.payload;
        },
        // eslint-disable-next-line
        ['background/getAsync/rejected']: (state,action) => {
            state.isLoading = false;
            state.hasError = true;
        }

    }
});

interface State {
    background: {
        backgrounds: {
            [x : number]: {
                urls: {
                    regular: string
                },
                alt_description: string
            }
        },
        isLoading: boolean,
        hasError: boolean
    }
}

export const selectBackgrounds = (state: State) => state.background;
export const { addBackground } = backgroundSlice.actions;
export default backgroundSlice.reducer;