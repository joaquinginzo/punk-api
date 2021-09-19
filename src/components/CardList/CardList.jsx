import React from 'react'
import Card from '../Card/Card'
import beers from '../../data/beers'
import "./CardList.scss"

const CardList = () => {
    
    return (
        <div className="card-list">
            {beers.map((beer)=>(<Card beer={beer}/>))}
        </div>
    )
}

export default CardList
