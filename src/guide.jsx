const App = () => {
    // fetch - promises - then/catch
    // 1. Setup some state for the fetch - x
    // 2. Write a fetch function - x
    // 3. Decide when to call the function
  
    // anyNumber. Probably use the data or something idk...
    const [yeQuote, setYeQuote] = useState("");
    
    const [searchText, setSearchText] = useState("");
    const [pokemon, setPokemon] = useState({});
  
    const getYeQuote = () => {
      fetch("https://api.kanye.rest/")
        .then((response) => response.json()) // returning response turned to json - also returns a promise
        .then((jsonResponse) => setYeQuote(jsonResponse)) // Taking the jsonified response from last .then() and setting it to local state
        .catch((err) => console.log(err)); // some awful error handling
    };
  
    const getPokemon = (pokemon) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((pokemonData) => setPokemon(pokemonData))
        .catch((err) => console.log(err));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      getPokemon(searchText);
    };
  
    // useEffect(() => {
    //   getYeQuote();
    // }, []);
  
    return (
      <div className="App">
        <div className="ye">
          <p>App works</p>
          <button onClick={getYeQuote}>Get some Ye!</button>
          {/* Conditionally rendering response */}
          <p>{yeQuote.quote ? yeQuote.quote : ""}</p>
        </div>
  
        <div className="pokemon">
          <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search</label>
            <input
              type="text"
              id="search"
              placeholder="pikachu"
              value={searchText}
              onInput={(e) => setSearchText(e.target.value)}
            />
            <input className="submit" type="submit" value="Submit" />
          </form>
  
          {pokemon?.name && <article className="pokemonCard">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              {pokemon.types.map(type => <p>{type.type.name}</p>)}
          </article>}
        </div>
      </div>
    );
  };
  
  export default App;
  