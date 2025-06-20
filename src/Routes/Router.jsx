
import {
  createBrowserRouter,

} from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    errorElement : <ErrorPage></ErrorPage>,
    element  : <MainLayout></MainLayout>,
    children : [
       {
         path :"/",
         element : <Home></Home>
       }
    ]
  },
]);