import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layout/Rootlayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Priviteroute from "./Priviteroute";
import Rider from "../Pages/Rider/Rider";


export const router = createBrowserRouter([
  {
    path: "/",
   Component:Rootlayout,
   children:[
    {
        index:true,
       Component:Home,
    },
    {
      path:'rider',
      element:<Priviteroute><Rider></Rider></Priviteroute>
    },
    {
        path:'coverage',
     Component:Coverage,
      loader:()=>fetch('/servicecenter.json').then(res=>res.json())
    }
   ]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'login',
        Component:Login,

      },
      {
        path:'register',
        Component:Register,
      },
    ]
  }
]);