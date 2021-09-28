import React from 'react'

const Filter = ({filterFunction,label}) => {
    return (
        <div className="NavBar__container">
                <label htmlFor="">{label}</label>
                <input type="checkbox" onChange={filterFunction}/>
            </div>
    )
}

export default Filter
