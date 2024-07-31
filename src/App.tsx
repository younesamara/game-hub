import {Grid, GridItem, Show} from "@chakra-ui/react";
import React from "react";
import {NavBar} from "@core/components";

function App() {

    return (
        <Grid templateAreas={
            {
                base: '"nav nav" "main"',
                lg: '"nav nav" "aside main"',
            }
        }>
            <GridItem area="nav">
                <NavBar/>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" >
                    Aside
                </GridItem>
            </Show>
            <GridItem area="main">
                Main
            </GridItem>

        </Grid>

    )
}

export default App
