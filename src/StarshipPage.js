import React from 'react'

const StarshipPage = (props) => {
    return(
        <div>
            <h1>{props.starships[3].name}</h1>
            <h1>{props.starships[3].model}</h1>
        </div>
    )
}

export default StarshipPage