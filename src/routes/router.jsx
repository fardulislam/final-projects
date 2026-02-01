import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layout/Rootlayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";


export const router = createBrowserRouter([
  {
    path: "/",
   Component:Rootlayout,
   children:[
    {
        index:true,
        element:<Home></Home>
    },
    {
        path:'/coverage',
      element:<Coverage></Coverage>,
      loader:()=>fetch('/servicecenter.json').then(res=>res.json())
    }
   ]
  },
]);