import { Link, NavLink } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";

import avatar from "../../assets/icon/avatar.svg"
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import usecart from "../../Hooks/usecart";
import useAdmin from "../../Hooks/useAdmin";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false)
  const [isAdmin] = useAdmin();
  const [cart] = usecart();
  const handleLogout = () => {
    logOut()
      .then()
  }
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div style={{ background: "rgba(21, 21, 21, 0.50)" }} className="navbar fixed z-10 max-w-screen-2xl mx-auto bg-black bg-opacity-100 rounded-b-3xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label onClick={()=>setOpen(!open)} tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${open ? '' : 'hidden'}`}>



              <li><NavLink className={({ isActive }) =>
                isActive ? 'text-black  cursor-pointer text-base font-extrabold uppercase hover:text-white' : 'text-black cursor-pointer text-base font-bold uppercase hover:text-white'} to='/'>Home</NavLink></li>

              <li><NavLink className={({ isActive }) =>
                isActive ? 'text-black  cursor-pointer text-base font-extrabold uppercase hover:text-white' : 'text-black cursor-pointer text-base font-bold uppercase hover:text-white'} to='/contact'>Contact us</NavLink></li>


              <li><NavLink className={({ isActive }) =>
                isActive ? 'text-black  cursor-pointer text-base font-extrabold uppercase hover:text-white' : 'text-black cursor-pointer text-base font-bold uppercase hover:text-white'} to='/dashboard'>Dashboard </NavLink></li>

              <li><NavLink className={({ isActive }) =>
                isActive ? 'text-black  cursor-pointer text-base font-extrabold uppercase hover:text-white' : 'text-black  cursor-pointer text-base font-bold uppercase hover:text-white'} to='/menu'>Our  Menu</NavLink></li>

              <li><NavLink className={({ isActive }) =>
                isActive ? 'text-black  cursor-pointer text-base font-extrabold uppercase hover:text-white' : 'text-black  cursor-pointer text-base font-bold uppercase hover:text-white'} to="/order/salad">Our shop</NavLink></li>


            </ul>
          </div>
          <Link className="ml-12 hidden lg:block">
            <p className="text-white cin text-[2rem] font-extrabold">BISTRO BOSS</p>
            <p className="text-white text-2xl cin font-semibold">Restaurant</p>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className=" flex gap-4 menu-horizontal px-1">


            <li><NavLink className={({ isActive }) =>
              isActive ? 'text-[#EEFF25] cursor-pointer text-base font-extrabold uppercase hover:text-white' : 'text-white cursor-pointer text-base font-bold uppercase hover:text-white'} to='/'>Home</NavLink></li>

            <li><NavLink className={({ isActive }) =>
              isActive ? 'text-[#EEFF25] cursor-pointer text-base font-extrabold uppercase hover:text-white' : 'text-white cursor-pointer text-base font-bold uppercase hover:text-white'} to='/contact'>Contact us</NavLink></li>


            {
              user && isAdmin && <li><NavLink className={({ isActive }) =>
              isActive ? 'text-[#EEFF25] cursor-pointer text-base font-extrabold uppercase hover:text-white' : 'text-white cursor-pointer text-base font-bold uppercase hover:text-white'} to='/dashboard/adminhome'>Dashboard </NavLink></li>
            }
            {
              user && !isAdmin && <li><NavLink className={({ isActive }) =>
              isActive ? 'text-[#EEFF25] cursor-pointer text-base font-extrabold uppercase hover:text-white' : 'text-white cursor-pointer text-base font-bold uppercase hover:text-white'} to='/dashboard/userhome'>Dashboard </NavLink></li>
            }

            <li><NavLink className={({ isActive }) =>
              isActive ? 'text-[#EEFF25] cursor-pointer text-base font-extrabold uppercase hover:text-white' : 'text-white cursor-pointer text-base font-bold uppercase hover:text-white'} to='/menu'>Our  Menu</NavLink></li>

            <li><NavLink className={({ isActive }) =>
              isActive ? 'text-[#EEFF25] cursor-pointer text-base font-extrabold uppercase hover:text-white' : 'text-white cursor-pointer text-base font-bold uppercase hover:text-white'} to='/order/salad'>Our shop</NavLink></li>


          </ul>
        </div>
        <div className="w-[380px] space-x-3">
          <Link to='/dashboard/cart'><button className="flex px-2 text-xl text-white">
            <PiShoppingCartBold/>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button></Link>

          {
            user ? <NavLink onClick={handleLogout} className={({ isActive }) =>
              isActive ? 'text-[#EEFF25] cursor-pointer text-base font-extrabold uppercase hover:text-white' : 'text-white cursor-pointer text-base font-bold uppercase hover:text-white'} to='/login'>sign out</NavLink>

              :
              <NavLink className={({ isActive }) =>
                isActive ? 'text-[#EEFF25] cursor-pointer text-base font-extrabold uppercase hover:text-white' : 'text-white cursor-pointer text-base font-bold uppercase hover:text-white'} to='/login'>Sign in</NavLink>
          }



          {
            user?.photoURL ? <img className="w-[3.5rem] h-[3.2rem] rounded-[50%] cursor-pointer" src={user.photoURL} alt="" />
              :
              <img className="w-[3.5rem] h-[3.2rem] cursor-pointer" src={avatar} alt="" />
          }


        </div>
      </div>

    </div>
  );
};

export default Navbar;