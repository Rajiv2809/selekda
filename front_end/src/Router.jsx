import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./views/GuestLayout";
import Login from './pages/Login';
import DefaultLayout from "./views/DefaultLayout";
import Home from "./pages/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element:<GuestLayout/>,
        children: [
            {
                path:'/login',
                element: <Login/>
            }
        ]
    },
    {
        path:'/',
        element: <DefaultLayout/>,
        children: [
            {
                path:'/home',
                element:<Home/>
            },
        ]
    }
]);

export default router;