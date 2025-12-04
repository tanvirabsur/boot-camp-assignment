import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CollegeDetails from "../Components/CollegeDetails";
import NotFoundPage from "../Pages/NotFoundPage";
import AllCollegesPage from "../Pages/AllCollegesPage";
import MyCollegePage from "../Pages/MyCollegePage";
import AdmissionPage from "../Pages/AdmissionPage";
import PrivateRoute from "../Hooks/PrivateRoute";
import ProfilePage from "../Pages/ProfilePage";

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
                path: '/colleges/:id',
                Component: CollegeDetails
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/colleges',
                Component: AllCollegesPage
            },
            {
                path: '/admission',
                Component: AdmissionPage
            },
            {
                path: '/profile',
                element: <ProfilePage />
            },
            {
                path: '/my-college',
                element: <PrivateRoute>
                    <MyCollegePage></MyCollegePage>
                </PrivateRoute>
                
            },
            {
                path: '*',
                Component: NotFoundPage
            }
        ]
    }
])


export default Router
