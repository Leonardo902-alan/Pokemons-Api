function Card({ pokemon }) {
    return (
        <div className="border p-4 text-center">
            <img src={pokemon.sprites.front_default} alt="" />
            <h3>{pokemon.name}</h3>
            <p>{pokemon.types[0].type.name}</p>
        </div>
    );
}

export default Card;
