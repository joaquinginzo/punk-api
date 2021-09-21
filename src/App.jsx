import {useState} from 'react';
import { useEffect } from 'react';
import './App.scss';
import beers from './data/beers';
import Main from './components/Main/Main';

const App = () => {

    
    
    const [beersToDisplay, setBeersToDisplay] = useState([])


    const allBeers = () => {
        fetch("https://api.punkapi.com/v2/beers")
        .then(response => response.json())
        .then(jsonResponse => setBeersToDisplay(jsonResponse))
        .catch(err => console.log("err"));
      }
    
    useEffect(allBeers,[]) 
    
    const filterBeersByIbu = (e) => {e.target.checked? setBeersToDisplay(beersToDisplay.filter((beer)=>beer.ibu<50)) : allBeers()}
    const filterBeersByAbv = (e) => {e.target.checked? setBeersToDisplay(beersToDisplay.filter((beer)=>beer.abv<4.5)) : allBeers()}
    const filterBeersByRandom = (e) => {e.target.checked? setBeersToDisplay(beersToDisplay.filter((beer)=>beer.id===5)) : allBeers()}
  

return (
    <div className="App">
        <div className="NavBar">
            <h4 className="NavBar__item">Don't know what to have?</h4>
            <h4 className="NavBar__item">Find your match!</h4>
            <input className="NavBar__item" placeholder="Search..."></input>
            <div className="NavBar__container">
                <label htmlFor="">Lower IBU</label>
                <input type="checkbox" onChange={filterBeersByIbu}/>
            </div>
            <div className="NavBar__container">
                <label htmlFor="">Lower ABV</label>
                <input type="checkbox" onChange={filterBeersByAbv} />
            </div>
            <div>
                <label htmlFor="">Find our week's favourite!</label>
                <input type="checkbox" onChange={filterBeersByRandom}/>
            </div>
            
        </div>
        <Main title="Welcome to BrewDog!" beerData={beersToDisplay} /> 
    </div>
 )
}
export default App;
