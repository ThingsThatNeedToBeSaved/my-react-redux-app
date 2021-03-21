import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAsyncBackgrounds, selectBackgrounds } from './backgroundSlice';

export default function Background() {
    const backgrounds = useSelector(selectBackgrounds);
    const dispatch = useDispatch();

    useEffect(()=> {
        if(!backgrounds.backgrounds[0]) {
            dispatch(getAsyncBackgrounds());
        }
    },[dispatch,backgrounds.backgrounds]);

    return (
        <React.Fragment>
            {backgrounds.backgrounds[0] ? (
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{zIndex: 100}}>
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
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            ) : null}
        </React.Fragment>
    )
}
