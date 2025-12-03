import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])


export default Router
