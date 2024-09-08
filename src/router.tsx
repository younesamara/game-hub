import {createBrowserRouter} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import GameDetailsPage from "./pages/GameDetailsPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: "games/:slug", element: <GameDetailsPage/>}
        ]
    }
])

export default router;