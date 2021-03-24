import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../helpers/Spinner';
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
                <div className="quote position-absolute start-50 bottom-0 translate-middle bg-secondary w-50 overflow-auto text-center rounded px-3" style={{zIndex: 110, opacity: 0.8, maxHeight: '7rem'}}>
                    <p className="text-center text-white mb-1 mt-1 fs-4">{quote.quote.contents.quotes[0].quote}</p>
                    <p className="text-center text-white">{quote.quote.contents.quotes[0].author}</p>
                </div>
            ) : (
                <Spinner />
            )}
        </React.Fragment>
    )
}
