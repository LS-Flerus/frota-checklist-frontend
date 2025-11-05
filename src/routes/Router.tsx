import { type RouteObject } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "./Layout";
import Home from "../pages/Home";


export const PublicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            { path: '/login/', element: <Login/> },
            { path: '/home/', element: <Home/>}
        ]
    }
];