export default function characters(props)
{ 
    const {characters} = props;
    
    return(
        <div className="characters">
            <h1 className="back-home">Volver a la Home</h1>            
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}> 
                        <p>{character.name}</p>
                    </div>
                ))}                  
            </div>
            
        </div>
    );
}