import { PokemonResource } from "@/types";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import PokemonItem from "./PokemonItem";

type Props = {
  pokemons: PokemonResource[];
  loading: boolean;
};

function PokemonTable({ pokemons, loading }: Props) {
  const [pokemonList, setPokemonList] = useState([] as PokemonResource[]);
  useEffect(() => {
    setPokemonList(pokemons);
  }, [pokemons]);
  return (
    <Grid container rowSpacing={1} spacing={1} marginTop={8}>
      {pokemonList.map((pokemon: PokemonResource) => (
        <Grid item key={pokemon.name} xl={2} lg={3} sm={4} xs={12}>
          <PokemonItem
            url={pokemon.url}
            name={pokemon.name}
            loading={loading}
          />
        </Grid>
      ))}
    </Grid>
  );
}
export default PokemonTable;
