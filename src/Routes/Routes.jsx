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
          element: <PrivateRoutes><Menu></Menu></PrivateRoutes>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
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
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        }
      ]
    }
  ]);

  export default router;