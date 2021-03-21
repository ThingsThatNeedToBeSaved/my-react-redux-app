import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAsyncQuote, selectQuote } from './quoteSlice';

export default function Quote() {
    const quote = useSelector(selectQuote);
    const dispatch = useDispatch();

    useEffect(()=> {
        if(!quote.quote.contents) {
            dispatch(getAsyncQuote());
        }
    },[dispatch, quote.quote.contents]);

    return (
        <React.Fragment>
            {quote.quote.contents ? (
                <div className="quote fixed-bottom mb-5" style={{zIndex: 110}}>
                    <p className="text-center text-white mb-1 fs-1">{quote.quote.contents.quotes[0].quote}</p>
                    <p className="text-center text-white fs-3">{quote.quote.contents.quotes[0].author}</p>
                </div>
            ) : null}
        </React.Fragment>
    )
}
