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
    
  },[dispatch,backgrounds.backgrounds,quote.quote,weather.weather]);

  return (
    <div className="App">

      {backgrounds.backgrounds[0] ? (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
          <div className="carousel-inner vh-100 mw-100">
            <div className="carousel-item">
              <img src={backgrounds.backgrounds[0].urls.regular} className="d-block w-100" alt={backgrounds.backgrounds[0].alt_description} />
            </div>
            <div className="carousel-item active">
              <img src={backgrounds.backgrounds[1].urls.regular} className="d-block w-100" alt={backgrounds.backgrounds[1].alt_description} />
            </div>
            <div className="carousel-item">
              <img src={backgrounds.backgrounds[2].urls.regular} className="d-block w-100" alt={backgrounds.backgrounds[2].alt_description} />
            </div>
            <div className="carousel-item">
              <img src={backgrounds.backgrounds[3].urls.regular} className="d-block w-100" alt={backgrounds.backgrounds[3].alt_description} />
            </div>
            <div className="carousel-item">
              <img src={backgrounds.backgrounds[4].urls.regular} className="d-block w-100" alt={backgrounds.backgrounds[4].alt_description} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : null}

    </div>
  );
}

export default App;
