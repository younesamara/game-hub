import {Box, Heading, Text} from "@chakra-ui/react";
import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import {NavBar} from "../core";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <>
            <Box padding={5}>
                <NavBar/>
                <Heading>Oops</Heading>
                <Text>{
                    isRouteErrorResponse(error)
                        ? "This page does not exists"
                        : "An unexpected error occurred."}
                </Text>
            </Box>
        </>
    );
}

export default ErrorPage;