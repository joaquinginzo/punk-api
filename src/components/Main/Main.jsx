import CardList from "../CardList/CardList";
import React from 'react'
import "./Main.scss"



const Main = ({beerData}) => {
    return (
        <div className="main">
            <img src="/Users/joaco/Desktop/development/punk-api/public/brew.png" alt=""/>
            <h1>Welcome to Brewdog!</h1>
            <h2>Check out our beers!</h2>
            <CardList beersToDisplay={beerData}/>
        </div>
    )
}

export default Main
