import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAsyncBackgrounds, selectBackgrounds } from './features/backgrounds/backgroundSlice';
import { getAsyncQuote, selectQuote } from './features/quote/quoteSlice';
import { getAsyncWeather, selectWeather } from './features/weather/weatherSlice';

function App() {
  const backgrounds = useSelector(selectBackgrounds);
  const quote = useSelector(selectQuote);
  const weather = useSelector(selectWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!backgrounds.backgrounds[0]) {
      dispatch(getAsyncBackgrounds());
    }
    if(!quote.quote.contents) {
      dispatch(getAsyncQuote());
    }
    if (!weather.weather.base) {
      dispatch(getAsyncWeather());
    }
    
  },[]);

  console.log(backgrounds);
  console.log(quote);
  console.log(weather);

  return (
    <div className="App">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="background 1" />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="background 2" />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="background 3" />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="background 4" />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="background 5" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default App;
