import'./WeatherComponent.css'
import rain from '../../assets/cs-bg.png'
import snow from '../../assets/snow.jpg'
import mist from '../../assets/mist.jpg'

export default function WeatherComponent ({weather}) {
    
    let backgroundImg = null;

    if(weather === 'Snow')
        backgroundImg = snow;
    else if(weather === 'Rain')
        backgroundImg = rain;
    else if(weather === 'Mist')
        backgroundImg = mist;

    
    return(
        <div className="column-left">
            <div className='content' style={{backgroundImage: `url(${backgroundImg})`}}>  
                TODO Add weather component here 
            </div>
        </div>
    )
}
