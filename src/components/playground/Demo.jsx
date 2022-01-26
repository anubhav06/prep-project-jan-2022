import React from 'react';
import WeatherComponent from './WeatherComponent';
import MapComponent from './MapComponent';

function Demo() {

  const weather = 'Snow'; 

  return <div> 

    <h1>Hello World</h1> 

    <div className='row'>
      <WeatherComponent 
        weather={weather}
      />
      <MapComponent/>
    </div>

  </div>;
}

export default Demo;
