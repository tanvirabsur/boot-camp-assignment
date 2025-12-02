import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])


export default Router
