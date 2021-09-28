import React from 'react'
import "./NavBar.scss"
import FilterList from '../FilterList/FilterList'

const NavBar = ({filterBeersByAbv,filterBeersByIbu,filterBeersByRandom,handleSearchBeer}) => {
    
    return(
        <div className="NavBar">
            <h4 className="NavBar__item">Don't know what to have?</h4>
            <h4 className="NavBar__item">Find your match!</h4>
            <FilterList filterBeersByAbv={filterBeersByAbv} filterBeersByIbu={filterBeersByIbu} filterBeersByRandom={filterBeersByRandom} handleSearchBeer={handleSearchBeer}/>
        </div>
    )
}

export default NavBar
