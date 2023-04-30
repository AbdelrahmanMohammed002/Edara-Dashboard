import {   createBrowserRouter, Navigate,} from "react-router-dom";
import App from "./App";
import Home from "./Pages/home/home"
import Login from "./Pages/Auth/login"
import Register from "./Pages/Auth/register"


export const routes = createBrowserRouter([
    {
      path: '',
      element:<App/>,
      children:[
        {
          path: "/",
          element:<Home/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
    {
      path: "*", 
      element: <Navigate to= {"/"}/>
    }
  ]);