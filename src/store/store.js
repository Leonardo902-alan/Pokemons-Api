import { create } from "zustand";

export const usePokemonStore = create((set) => ({
    pokemons: [],
    page: 1,
    fetchPokemons: async () => {
        const limit = 6;
        const offset = (get().page - 1) * limit;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();
        const detailed = await Promise.all(
            data.results.map(async (p) => {
                const r = await fetch(p.url);
                return await r.json();
            })
        );
        set({ pokemons: detailed });
    },
    nextPage: () => set((state) => ({ page: state.page + 1 })),
    prevPage: () => set((state) => ({ page: Math.max(1, state.page - 1) })),
}));
