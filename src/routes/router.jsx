import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layout/Rootlayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Priviteroute from "./Priviteroute";
import Rider from "../Pages/Rider/Rider";

import Sentparsel from "../Pages/Sentparsel/Sentparsel";
import About from "../Pages/About-us/About";
import DashbordLayout from "../Layout/DashbordLayout";
import Myparcels from "../Pages/Dashboard/Myparcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory/PaymentHistory";
import ApproveRider from "../Pages/Dashboard/ApproveRiders/ApproveRider";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "rider",
        element: (
          <Priviteroute>
            <Rider></Rider>
          </Priviteroute>
        ),
        loader: () => fetch("/servicecenter.json").then((res) => res.json()),
      },
      {
        path: "/sent-parsel",
        element: (
          <Priviteroute>
            <Sentparsel></Sentparsel>
          </Priviteroute>
        ),
        loader: () => fetch("/servicecenter.json").then((res) => res.json()),
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/servicecenter.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: 
      <Priviteroute>
        <DashbordLayout></DashbordLayout>
      </Priviteroute>,
    children:[
      {
        path: 'my-parcels',
        element:<Myparcels></Myparcels>
      },
      {
        path:'payment/:parcelId',
        Component:Payment,
      },
      {
        path:'payment-success',
        Component:PaymentSuccess,
      },
      {
        path:'payment-history',
        Component:PaymentHistory,
      },
      {
        path:'payment-cancelled',
        Component:PaymentCancelled,
      },
      {
        path:'approve-riders',
        Component:ApproveRider,
      },
    ]
  
  },
]);
