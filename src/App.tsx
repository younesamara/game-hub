import {Grid, GridItem, Show} from "@chakra-ui/react";
import {NavBar} from "@core";
import {GameGrid} from "./core";
import GenreList from "./core/components/GenreList.tsx";

function App() {

    return (
        <Grid templateAreas={{
                base: '"nav nav" "main"',
                lg: '"nav nav" "aside main"',
            }}
            templateColumns={{
                base:'1fr',
                lg:"200px 1fr"
            }}
        >
            <GridItem area="nav">
                <NavBar/>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingY={5}>
                    <GenreList/>
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameGrid/>
            </GridItem>

        </Grid>

    )
}

export default App
