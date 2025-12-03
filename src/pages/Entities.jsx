import { useEffect, useState } from "react";

export default function Entities() {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);

    const limit = 6;
    const offset = (page - 1) * limit;

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            .then(res => res.json())
            .then(async data => {
                const detailed = await Promise.all(
                    data.results.map(async (p) => {
                        const res = await fetch(p.url);
                        const details = await res.json();
                        return {
                            id: details.id,
                            name: details.name,
                            img: details.sprites.front_default
                        };
                    })
                );
                setPokemons(detailed);
            });
    }, [page]);

    const nextPage = () => setPage(page + 1);
    const prevPage = () => page > 1 && setPage(page - 1);

    return (
        <div>
            <h2 className="mb-4">Pokémon List</h2>

            <div className="row g-3">
                {pokemons.map((p) => (
                    <div key={p.id} className="col-12 col-sm-6 col-md-4">
                        <div className="card shadow-sm">
                            <img
                                src={p.img}
                                className="card-img-top"
                                alt={p.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-capitalize">
                                    #{p.id} {p.name}
                                </h5>
                                <p className="card-text">Pokémon de PokeAPI.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center gap-3 mt-4">
                <button
                    className="btn btn-primary"
                    onClick={prevPage}
                    disabled={page === 1}
                >
                    Prev
                </button>


                <span className="fw-bold">Página {page}</span>

                <button className="btn btn-primary" onClick={nextPage}>
                    Next
                </button>
            </div>
        </div>
    );
}

