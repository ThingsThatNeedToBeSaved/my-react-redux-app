import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 

export const getAsyncQuote = createAsyncThunk(
    'quotes/getAsync',
    async () => {
        const response = await axios.get(`https://quotes.rest/qod`);
        return response.data;
    }
);

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: '',
        isLoading: false,
        hasError: false
    },
    reducers: {
        addQuote: (state, action) => {
            state.quote = action.payload;
        }
    },
    extraReducers: {
        ['quote/getAsync/pending']: (state,action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        ['quote/getAsync/fulfilled']: (state,action) => {
            state.isLoading = false;
            state.hasError = false;
            state.quote = action.payload;
        },
        ['quote/getAsync/rejected']: (state,action) => {
            state.isLoading = false;
            state.hasError = true;
        }

    }
});

interface State {
    quotes: string,
    isLoading: boolean,
    hasError: boolean
}

export const selectQuote = (state: State) => state;
export const { addQuote } = quoteSlice.actions;
export default quoteSlice.reducer;