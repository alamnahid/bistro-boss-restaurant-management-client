import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order Food/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Dashboard/Cart/Cart";
import AllUsers from "../Dashboard/All Users/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Dashboard/Manage Items/ManageItems";
import UpdateItems from "../Dashboard/Update Items/UpdateItems";
import Contact from "../Pages/Contact Page/Contact";
import AdminHome from "../Dashboard/Admin Home/AdminHome";
import ErrorElement from "../Pages/ErrroPage/ErrorElement";
import UserHome from "../Dashboard/UserHome/UserHome";
import Dashboardd from "../Dashboard/Dashboardd";
import Payment from "../Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/Payment History/PaymentHistory";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        
        

      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    },
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,

      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
          path: 'cart',
          element: <PrivateRoutes><Cart></Cart></PrivateRoutes>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'userhome',
          element: <PrivateRoutes><UserHome></UserHome></PrivateRoutes>
        },
        {
          path: 'paymenthistory',
          element: <PaymentHistory></PaymentHistory>
        },
        //admin routes
        {
          path: 'users',
          element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path: 'adminhome',
          element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
          path: 'additems',
          element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
          path: 'manageitems',
          element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        },
        {
          path: 'updateitem/:id',
          element: <AdminRoutes><UpdateItems></UpdateItems></AdminRoutes>,
          // loader: ({params})=>fetch(`https://bistro-boss-server-three-sigma.vercel.app/menu/${params.id}`)
          loader: ()=>fetch('https://bistro-boss-server-three-sigma.vercel.app/menu')

        }
      ]
    }
  ]);

  export default router;