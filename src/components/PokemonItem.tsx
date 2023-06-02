import useSWR from "swr";
import type { Pokemon } from "@/types";
import { fetcherPokemon } from "@/entities";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Skeleton } from "@mui/material";
import { useRef } from "react";

type Props = {
  url: string;
  name: string;
  loading: boolean;
};

function Pokemon({ url, name, loading }: Props) {
  const { data } = useSWR<Pokemon>(url, fetcherPokemon);
  const pokemon = useRef<Pokemon>({
    name: "",
    weight: 0,
    height: 0,
  });

  if (data !== undefined && pokemon) {
    pokemon.current = data;
  }
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          height={"6rem"}
          marginBottom={8}
        >
          {loading ? <Skeleton variant="rectangular" height={"100%"} /> : name}
        </Typography>
        <Typography variant="body2">
          {loading ? (
            <Skeleton variant="text" sx={{ fontSize: "0.875rem" }} />
          ) : (
            `Вес: ${pokemon.current.weight} ед. `
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Pokemon;
