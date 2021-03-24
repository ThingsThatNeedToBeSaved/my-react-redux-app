import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 

export const getAsyncQuote = createAsyncThunk(
    'quote/getAsync',
    async () => {
        const response = await axios.get(`https://quotes.rest/qod`);
        return response.data;
    }
);

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: {},
        isLoading: false,
        hasError: false
    },
    reducers: {
        addQuote: (state, action) => {
            state.quote = action.payload;
        }
    },
    extraReducers: {
        // eslint-disable-next-line
        ['quote/getAsync/pending']: (state,action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        // eslint-disable-next-line
        ['quote/getAsync/fulfilled']: (state,action) => {
            state.isLoading = false;
            state.hasError = false;
            state.quote = action.payload;
        },
        // eslint-disable-next-line
        ['quote/getAsync/rejected']: (state,action) => {
            state.isLoading = false;
            state.hasError = true;
        }

    }
});

interface State {
    quote: {
        quote: {
            contents: {
                quotes: {
                    [y : number]: {
                        quote: string,
                        author: string
                    }
                }
            }
        },
        isLoading: boolean,
        hasError: boolean
    }
}

export const selectQuote = (state: State) => state.quote;
export const { addQuote } = quoteSlice.actions;
export default quoteSlice.reducer;