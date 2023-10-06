import { createBrowserRouter, Outlet } from 'react-router-dom'
import React from 'react'
import Me from '../pages/Me'
import Error404 from '../components/Error404';
import Login from '../pages/Login';
import Reading from '../pages/Reading';
import Activities from '../pages/Activities';
import Audio from '../pages/Audio';

const pages = [
    {
        path: "/",
        element: <Me />,
    },
    {
        path: "/login",
        element: <Login />,

    },
    {
        path: "/reading",
        element: <Reading />,

    },
    {
        path: "audio",
        element: <Audio />
    },
    {
        path: "activities",
        element: <Activities />,
    }
];


const Route = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        errorElement: <Error404 />,
        children: pages,
    },
]);

export default Route