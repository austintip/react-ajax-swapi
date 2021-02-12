import React from 'react'

const StarshipPage = (props) => {
    // console.log(props.starship.name)
    return(
        <div>
            <h1>{props.location.state.name}</h1>
            <h1>{props.location.state.model}</h1>
        </div>
    )
}

export default StarshipPage