import { useState } from 'react';
import './App.css';
import imagenRickMorty from './img/rick-morty.png';



function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async()=>{


    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

    return (
    <div className="App">
      <header className="App-header">
       <h1 className="title"> Rick & Morty </h1>
       <img src = {imagenRickMorty} alt="Rick & Morty" className='imgRickMorty'/>
       <button onClick={reqApi} className="btn-search">Buscar Personaje</button>
      </header>
    </div>
  );
}

export default App;
