export default function Home() {
    return (
        <div className="text-center">
            <h1 className="mb-4">Bienvenido a la Pokémon App</h1>

            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="Pikachu"
                style={{ width: "120px" }}
            />

            <p className="lead mt-3">
                Explora información de tus Pokémon favoritos.
            </p>
        </div>
    );
}
