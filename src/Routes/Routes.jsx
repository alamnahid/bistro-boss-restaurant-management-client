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


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
        
        

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
      children: [
        {
          path: 'cart',
          element: <PrivateRoutes><Cart></Cart></PrivateRoutes>
        },
        //admin routes
        {
          path: 'users',
          element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
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
          // loader: ({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
          loader: ()=>fetch('http://localhost:5000/menu')

        }
      ]
    }
  ]);

  export default router;