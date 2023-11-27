import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Privateroute from "./Privateroute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import Alluser from "../pages/dashboard/alluser/Alluser";
import Additem from "../pages/dashboard/additem/Additem";
import Adminroute from "./Adminroute";
import Manageitem from "../pages/dashboard/manageitem/Manageitem";
import Updateitem from "../pages/dashboard/updateitem/Updateitem";
import Payment from "../pages/dashboard/payment/Payment";
import Adminhome from "../pages/dashboard/adminhome/Adminhome";
import Userhome from "../pages/dashboard/userhome/Userhome";
import Paymenthistory from "../pages/dashboard/paymnthistory/Paymenthistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/ourshop/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      { path: "payment", element: <Payment></Payment> },
      { path: "paymenthistory", element: <Paymenthistory></Paymenthistory> },
      {
        path: "alluser",
        element: (
          <Adminroute>
            <Alluser></Alluser>
          </Adminroute>
        ),
      },
      {
        path: "additem",
        element: (
          <Adminroute>
            <Additem></Additem>
          </Adminroute>
        ),
      },
      {
        path: "manageitem",
        element: (
          <Adminroute>
            <Manageitem></Manageitem>
          </Adminroute>
        ),
      },
      {
        path: "updateitem/:id",
        element: (
          <Adminroute>
            <Updateitem></Updateitem>
          </Adminroute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "adminhome",
        element: (
          <Adminhome>
            <Adminhome></Adminhome>
          </Adminhome>
        ),
      },
      {
        path: "userhome",
        element: <Userhome></Userhome>,
      },
    ],
  },
]);
