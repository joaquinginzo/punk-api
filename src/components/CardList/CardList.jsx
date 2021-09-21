import React from 'react'
import Card from '../Card/Card'
import beers from '../../data/beers'
import { useState } from 'react'
import "./CardList.scss"


const CardList = ({beersToDisplay}) => {

   
    return (
        <div>
            <div className="card-list">
                {beersToDisplay.map((beer)=>(<Card beer={beer}/>))}
            </div>
        </div>
    )
}

export default CardList
