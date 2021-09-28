import {useState} from 'react';
import { useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';

const App = () => {

    // Beers to be displayed. Api to get data from brewdog.

    const [beersToDisplay, setBeersToDisplay] = useState([])
    
    const allBeers = () => {
        fetch("https://api.punkapi.com/v2/beers/")
        .then(response => response.json())
        .then(jsonResponse => setBeersToDisplay(jsonResponse))
        .catch(err => console.log("err"));
    };
    
    // Inputs and filters handlers.


    const handleSearchBeer = (e) => {e.target.value? setBeersToDisplay(beersToDisplay.filter((beer)=>beer.name.includes(e.target.value))) : allBeers()};
    const filterBeersByIbu = (e) => {e.target.checked? setBeersToDisplay(beersToDisplay.filter((beer)=>beer.ibu<50)) : allBeers()};
    const filterBeersByAbv = (e) => {e.target.checked? setBeersToDisplay(beersToDisplay.filter((beer)=>beer.abv<4.5)) : allBeers()};
    const filterBeersByRandom = (e) => {e.target.checked? setBeersToDisplay(beersToDisplay.filter((beer)=>beer.id===5)) : allBeers()};

    // Use effect to have all the beers available.

    useEffect(allBeers,[]);
  

    return (
        <div className="App">
            <Header/>
            <NavBar filterBeersByAbv={filterBeersByAbv} filterBeersByIbu={filterBeersByIbu} filterBeersByRandom={filterBeersByRandom} handleSearchBeer={handleSearchBeer} />
            <Main title="Welcome to BrewDog!" beerData={beersToDisplay} /> 
        </div>
    )
}

export default App;
