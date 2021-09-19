import {useState} from 'react';
import './App.scss';
import beers from './data/beers';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList';

const App = () => {

   

return (
    <div className="App">
        <NavBar/>
        <CardList/>
    </div>
 )
}
export default App;
