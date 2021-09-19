import React from 'react'
import "./Card.scss"

const Card = ({beer}) => {

        return (
            <div className="card">
                <img src={beer.img_url} alt="" />
                <h4>{beer.name}</h4>
                <p>{beer.description}</p>  
            </div>
        )
        
}

export default Card
