import Background from "./backgroundImage";


function changeBackgroundImage(result){
    
    let weather = result.weather[0].main;
    let styles;

    if(weather === 'Clouds')
        styles = Background.Clouds
    else if(weather === 'Clear')
        styles = Background.Clear
    else if(weather === 'Dust')
        styles = Background.Dust
    else if(weather === 'Fog')
        styles = Background.Fog
    else if(weather === 'Haze')
        styles = Background.Haze
    else if(weather === 'Mist')
        styles = Background.Mist
    else if(weather === 'Rain')
        styles = Background.Rain
    else if(weather === 'Shower')
        styles = Background.Shower
    else if(weather === 'Smoke')
        styles = Background.Smoke
    else if(weather === 'Snow')
        styles = Background.Snow
    else if(weather === 'Squall')
        styles = Background.Squall
    else if(weather === 'Thunderstorm')
        styles = Background.Thunderstorm
    else if(weather === 'Tornado')
        styles = Background.Tornado


    return styles
}

export default changeBackgroundImage;