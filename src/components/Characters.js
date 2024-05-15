export default function characters(props)
{ 
    const {characters} = props;
    
    return(
        <div className="characters">
            <h1 className="back-home">Volver a la Home</h1>            
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}> 
                        <div>
                            <img src={character.image} alt={character.name}/>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive"?(
                                    <>
                                    <span className="alive"/>
                                    Alive
                                    </>
                                    ):(
                                    <>
                                    <span className="dead"/>
                                    Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span  className="text-grey"> Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>

                        </div>

                    </div>
                ))}                  
            </div>
            
        </div>
    );
}