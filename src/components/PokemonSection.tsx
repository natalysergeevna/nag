import useSWR from "swr";
import type { PokemonsPagination } from "@/types";
import { fetcherPagination } from "@/entities";
import { Box, Pagination, PaginationItem, Stack } from "@mui/material";

import { useState, useEffect, useRef } from "react";
import PokemonTable from "./PokemonTable";

function PokemonSection() {
  const paginatorStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "24px 0px",
  };

  const limit = 12;
  const [pageIndex, setPageIndex] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const loading = useRef(true);
  const pokemonsPagination = useRef<PokemonsPagination>({
    results: [],
    count: 0,
  });
  const { data } = useSWR<PokemonsPagination>(
    { offset: (pageIndex - 1) * limit, limit: limit },
    fetcherPagination
  );

  if (data !== undefined && pokemonsPagination) {
    pokemonsPagination.current = data;
    loading.current = false;
  } else {
    loading.current = true;
  }

  useEffect(() => {
    setPageCount(Math.floor(pokemonsPagination.current.count / limit));
  }, [pokemonsPagination.current.count]);

  return (
    <Box>
      <PokemonTable
        pokemons={pokemonsPagination.current.results}
        loading={loading.current}
      />
      <Stack spacing={2}>
        <Pagination
          style={paginatorStyle}
          count={pageCount}
          page={pageIndex}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              onClick={() => setPageIndex(item.page || 1)}
            />
          )}
        />
      </Stack>
    </Box>
  );
}

export default PokemonSection;
