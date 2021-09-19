import React from 'react'
import "./NavBar.scss"

const NavBar = () => {

    return (
        <div className="NavBar">
            <input className="NavBar__item" placeholder="Search..."></input>
            <p className="NavBar__item">High ABV</p>
            <p className="NavBar__item">Classic Range</p>
            <p className="NavBar__item"> Acidic</p>
        </div>
    )
}

export default NavBar
