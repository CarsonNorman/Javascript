
function Pokemon(props) {
    
    const { abilities, name, sprites } = props.props
    const { front_default, front_shiny } = sprites
   
   
  
    return (
        <div className="card">
            <div className="card-img-top">
            <img src={front_default} alt={`default front sprite for ${name}`}></img>
            <img src={front_shiny} alt={`shiny front sprite for ${name}`} ></img>
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {abilities.map((ability) => <p>{ability.ability.name}  </p>)}
            </div>

            <button onClick={props.handleBack}>Back to list</button>
        </div>
    );
}

export default Pokemon;