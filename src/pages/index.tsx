import PokemonSection from "@/components/PokemonSection";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <Container fixed>
      <Box sx={{ height: "100vh" }}>
        <PokemonSection />
      </Box>
    </Container>
  );
}
