import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./views/GuestLayout";
import Login from './pages/Login';
import DefaultLayout from "./views/DefaultLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Blogs from "./pages/Blogs";
import Portofolios from "./pages/Portofolios";
import Register from "./pages/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element:<GuestLayout/>,
        children: [
            {
                path:'/',
                element: <Navigate to='/home'/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/register',
                element: <Register/>
            },
        ]
    },
    {
        path:'/',
        element: <DefaultLayout/>,
        children: [
            {
                path:'/',
                element: <Navigate to='/home'/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'blogs',
                element:<Blogs/>
            },
            {
                path:'/portofolios',
                element:<Portofolios/>
            }
        ]
    }
]);

export default router;