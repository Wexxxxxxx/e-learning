import { createBrowserRouter, Outlet } from "react-router-dom";
import React from "react";
import Me from "../pages/Me";
import Error404 from "../components/Error404";
import Login from "../pages/Login";
import Reading from "../pages/Reading";
import Activities from "../pages/Activities";
import Audio from "../pages/Audio";
import Phonics from "../pages/Phonics";
import User from "../pages/User";
import Signupuser from "../pages/Signupuser";
import Temporary from "../database/Temporary";
import EasyShorta from "../easypage/EasyShorta";
import EasyLonga from "../easypage/EasyLonga";
import AddNewStudent from "../pages/AddNewStudent";

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
    path: "/user",
    element: <User />,
  },
  {
    path: "/signupuser",
    element: <Signupuser />,
  },
  {
    path: "/reading",
    element: <Reading />,
  },
  {
    path: "phonics",
    element: <Phonics />,
  },
  {
    path: "easyshorta",
    element: <EasyShorta />,
  },
  {
    path: "easylonga",
    element: <EasyLonga />,
  },

  {
    path: "audio",
    element: <Audio />,
  },
  {
    path: "activities",
    element: <Activities />,
  },
  {
    path: "/temporary",
    element: <Temporary />,
  },
  {
    path: "/addnewstudent",
    element: <AddNewStudent />,
  },
];

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <Error404 />,
    children: pages,
  },
]);

export default Route;
