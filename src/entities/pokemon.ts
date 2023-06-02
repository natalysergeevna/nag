import type { Pokemon, PokemonsPagination } from '@/types' 
 
type Params = {
    limit: number,
    offset: number
}

function getPokemosPagination(params: Params) {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${params.limit}&offset=${params.offset}`)
      .then(response => response.json())
      .then((data) => { return data as PokemonsPagination })
}

function getPokemon(url: string) {    
    return fetch(url)
      .then(response => response.json())
      .then((data) => { return data as Pokemon })
}

export const fetcherPagination = (params: Params) => getPokemosPagination(params)
export const fetcherPokemon = (url: string) => getPokemon(url)