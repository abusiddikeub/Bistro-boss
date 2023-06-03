import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/Register/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivateRouters from "./PrivateRouters";
import DashBoard from "../LayOut/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../Pages/DashBoard/AddAnItem/AddItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
               {
         path:'/',
         element:<Home></Home>
               },
               {
                path:'menu',
                element:<Menu></Menu>
               },
               {
                 //  name title k dynamic korer jonno order(/:category)dia dite hba 
                path:'order/:category',
                element:<Order></Order>
               },
               {
                path:'login',
                element:<Login></Login>
               },
               {
                path:'signup',
                element:<SignUp></SignUp>
               },
               {
                path:'secret',
                element:<PrivateRouters><Secret></Secret></PrivateRouters>
               }
               

    ]
  },
  {
    path:'dashboard',
    element:<PrivateRouters><DashBoard></DashBoard></PrivateRouters>,
    children:[
      {
        path:'mycart',
        element:<MyCart></MyCart>
      },
      {
        path:'allUsers',
        element:<AllUsers></AllUsers>
      },
      {
        path:'addItem',
        element:<AddItem></AddItem>
      }

    ]
  }

]);


export default router;