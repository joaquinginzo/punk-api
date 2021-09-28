import React from 'react'
import Filter from '../Filter/Filter'
import "./FilterList.scss"

const FilterList = ({filterBeersByAbv,filterBeersByRandom,filterBeersByIbu,handleSearchBeer}) => {
    
    return(
        <div className="FilterList">
            <input className="FilterList__item" placeholder="Search..." onChange={handleSearchBeer}></input>
            <Filter className="FilterList__item" label="Lower IBU" filterFunction={filterBeersByIbu}/>
            <Filter className="FilterList__item" label="Lower ABV" filterFunction={filterBeersByAbv}/>
            <Filter className="FilterList__item" label="Week's Favourite" filterFunction={filterBeersByRandom}/>
        </div>
    )
}

export default FilterList
