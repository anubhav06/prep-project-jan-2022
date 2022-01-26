import'./WeatherComponent.css'
import snow from '../../assets/snow.jpg'
import mist from '../../assets/mist.jpg'

import '../CurrentStatus.css';
import bg from '../../assets/cs-bg.png';
import 'weather-icons/css/weather-icons.css';

export default function WeatherComponent ({weather}) {
    
    let backgroundImg = null;

    if(weather === 'Snow')
        backgroundImg = snow;
    else if(weather === 'Rain')
        backgroundImg = bg;
    else if(weather === 'Mist')
        backgroundImg = mist;

    
    return(  
        <div className="cs-container">
            <img className="cs-bg" src={bg} alt="" />
            <div className="cs-content">
                <div className="cs-main">
                <div className="cs-basics">
                    <span className="temp">21C</span>
                    <div className="cs-info">
                    <span className="weather">Cloudy</span>
                    <span className="stop">Stops around 2</span>
                    <span className="feels-like">FEELS LIKE 15C</span>
                    </div>
                    <i className="wi wi-day-lightning" />
                </div>
                </div>
                <div className="cs-more">
                <div className="cs-more-content">
                    <span className="cs-more-title">VISIBILITY</span>
                    <span className="cs-more-value">2 km</span>
                </div>
                <div className="cs-more-content">
                    <span className="cs-more-title">AIR QUALITY</span>
                    <span className="cs-more-value">45</span>
                </div>
                <div className="cs-more-content">
                    <span className="cs-more-title">WIND SPEED</span>
                    <span className="cs-more-value">45 Km/h</span>
                </div>
                <div className="cs-more-content">
                    <span className="cs-more-title">AIR QUALITY</span>
                    <span className="cs-more-value">45</span>
                </div>
                <div className="cs-more-content">
                    <span className="cs-more-title">HUMIDITY</span>
                    <span className="cs-more-value">15000</span>
                </div>
                </div>
            </div>
        </div>
    )
}
