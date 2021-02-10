import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [ships, setShips] = useState([])
  
  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
    .then(response => response.json())
    .then(jsonData => {
      setShips(Object.values(jsonData))
      // console.log(jsonData)
    });
  }, [])

  // console.log(ships[3])

  let list = ships[3].map((ship, i) => {
    return(
      <li key={i}>
        {ship.name}
      </li>
    )
  })


  return (
    <div>
      {list}
    </div>
  )
};


export default App;
