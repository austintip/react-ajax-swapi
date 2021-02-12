import { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import StarshipPage from './StarshipPage'

function App() {
  const [starships, setStarships] = useState([])

  let list

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(jsonData => {
        setStarships(jsonData.results)
        // console.log(jsonData)
      }).catch(err => {
        console.log('api err?', err)
      })
  }, [])

  if (starships.length > 0) {
    list = starships.map((starship, i) =>
      <Link
        to={{
          pathname: '/starship',
          state: starship
        }}
        key={i}>
        {starship.name}
      </Link>
    )
  }


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/starship" render={({ location }) =>
            <StarshipPage location={location}
            />
          } />
        </Switch>
        <div className="list-holder">
          <div className="ships-list">
            {list}
          </div>
        </div>


      </BrowserRouter>
    </div>
  );
}
// console.log(ships[3])



//     let list = starships.map((starship, i) => {
//       return(
//         <li className="ships-list" key={i}>
//           {starship.name}
//         </li>
//       )
//     })


//     let starshipsInfo = starships[3].map((starship, i) => {
//       return (
//         <StarshipPage key={i}
//         starshipName={starship.name}
//         starshipInfo={starship.model}
//         />
//       )
//     })
//   }


//   return (
//     <div className="list-holder">
//       {list}
//     </div>
//   )
// ;


export default App;
