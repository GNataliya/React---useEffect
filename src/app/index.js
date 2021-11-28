import { useEffect, useState } from "react";
import axios from 'axios';

function App() {

  const [ planet, setPlanets ] = useState([]);

  
  useEffect( async() => {
    const { data } = await axios.get('https://swapi.dev/api/planets');
    const { results } = data;
    // console.log(results);

    setPlanets(results);
  }, []);

  
  const planets = planet.map( el => 
    <>
    <li>{el.name}</li>
    </>
  );
  
  

  return (
    <>
        <a>
          SWAPI PLANETS:
        </a>
        <ul>
          {planets}
        </ul>
    </>
  );
}

export default App;
