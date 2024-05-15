import './App.css';
import imagenRickMorty from './img/rick-morty.png';



function App() {

  const reqApi = ()=>{
    console.log('Click en el boton');
  };

  return (
    <div className="App">
      <header className="App-header">
       <h1 classNam="title"> Rick & Morty </h1>
       <img src = {imagenRickMorty} alt="Rick & Morty" className='imgRickMorty'/>
       <button onClick={reqApi} className="btn-search">Buscar Personaje</button>
      </header>
    </div>
  );
}

export default App;
