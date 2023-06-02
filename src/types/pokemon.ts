export type Pokemon = {
    name: string,
    weight: number, // измеряется в hectograms гектограммы
    height: number,
}

export type PokemonResource = {
    name: string,
    url: string
}

export type PokemonsPagination = {
    results: PokemonResource[],
    count: number,
}