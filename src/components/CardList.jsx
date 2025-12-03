import Card from "./Card";

function CardList({ pokemons }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {pokemons.map((p) => (
                <Card key={p.id} pokemon={p} />
            ))}
        </div>
    );
}

export default CardList;
