import { useEffect, useState } from "react";
import './App.css';
import logo from './mlh-prep.png'
import changeBackgroundImage from "./data/changeBackgroundImage";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City")
  const [results, setResults] = useState(null);

  // To access and store the style properties of the weather image that needs to be displayed
  const [bgStyle, setBgStyle] = useState({})

  useEffect(() => {
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APIKEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result['cod'] !== 200) {
            setIsLoaded(false)
          } else {
            setIsLoaded(true);
            setResults(result);

            // To set the style property of the image based on the weather type. Gets the corresponding image from changeBackgroundImage(..)
            setBgStyle( changeBackgroundImage(result) );
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [city])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return <>
      <img className="logo" src={logo} alt="MLH Prep Logo"></img>
      
      <div>
        <div style={bgStyle}>
          
          <h2>Enter a city below 👇</h2>
          <input
            type="text"
            value={city}
            onChange={event => setCity(event.target.value)} />
          <div className="Results">
            {!isLoaded && <h2>Loading...</h2>}
            {console.log(results)}
            {isLoaded && results && <>
              <h3>{results.weather[0].main}</h3>
              <p>Feels like {results.main.feels_like}°C</p>
              <i><p>{results.name}, {results.sys.country}</p></i>
            </>}
          </div>

          <div>
            TODO <br/>
            TODO <br/>TODO <br/>TODO <br/>TODO <br/>TODO <br/>TODO <br/>TODO <br/>TODO <br/>TODO <br/>TODO <br/>TODO <br/>TODO
          </div>
        </div>
      </div>
    </>
  }
}

export default App;
