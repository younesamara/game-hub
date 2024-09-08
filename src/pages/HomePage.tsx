import {Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import GenreList from "../core/components/GenreList.tsx";
import GameHeading from "../core/components/GameHeading.tsx";
import PlatformSelector from "../core/components/PlatformSelector.tsx";
import SortSelector from "../core/components/SortSelector.tsx";
import {GameGrid} from "../core";

const HomePage = () => {
    return (
        <Grid templateAreas={{
            base: `"main"`,
            lg: `"aside main"`,
        }}
              templateColumns={{
                  base: '1fr',
                  lg: "200px 1fr"
              }}
        >
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList/>
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={2}>
                    <GameHeading/>
                    <Flex paddingLeft={2} marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformSelector/>
                        </Box>
                        <SortSelector/>
                    </Flex>
                </Box>
                <GameGrid/>
            </GridItem>
        </Grid>
    );
};

export default HomePage;