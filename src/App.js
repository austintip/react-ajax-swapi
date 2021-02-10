import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [ships, setShips] = useState([])
  let list
  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
    .then(response => response.json())
    .then(jsonData => {
      setShips(Object.values(jsonData))
      // console.log(jsonData)
    }).catch(err =>{
      console.log('api err?', err)
    }
    )
  }, [])

  // console.log(ships[3])
  if (ships.length > 0) {
    list = ships[3].map((ship, i) => {
      return(
        <li className="ships-list" key={i}>
          {ship.name}
        </li>
      )
    })
  }


  return (
    <div className="list-holder">
      {list}
    </div>
  )
};


export default App;
