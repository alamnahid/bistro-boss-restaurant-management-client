import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUsers, FaShopify, FaPhoneAlt, FaMoneyBill, FaStar, FaBook } from "react-icons/fa";
import { IoFastFood, IoMenu, IoCalendarClear } from "react-icons/io5";
import usecart from "../Hooks/usecart";
import useAdmin from "../Hooks/useAdmin";
import { useState } from "react";



const Dashboard = () => {
    const [cart] = usecart();

    const [isAdmin] = useAdmin();


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn bg-[#D1A054] text-white font-semibold text-lg w-full drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side min-h-screen">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
                    {/* Sidebar content here */}
                   <li> <h1 className="text-black cin font-extrabold text-2xl uppercase">BISTRO BOSS</h1></li>
                   <li> <h1 className="text-black mb-16 cin tracking-[0.4rem] text-lg font-bold  uppercase">Restaurant</h1></li>
                    {
                        isAdmin ? <>
                            <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base" to="/dashboard/adminhome"><FaHome className="text-2xl" /> Admin Home</NavLink></li>
                            <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/dashboard/additems"><IoFastFood className="text-2xl" /> Add Items</NavLink></li>
                            <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/dashboard/manageitems"><IoMenu className="text-2xl" /> manage items</NavLink></li>
                            <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/dashboard/users"><FaUsers className="text-2xl" /> all users</NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base hover:bg-white " to="/dashboard/userhome"><FaHome className="text-2xl" />User Home</NavLink></li>
                                <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/dashboard/paymenthistory"><FaMoneyBill className="text-2xl" /> Payment History</NavLink></li>
                                <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/dashboard/cart"><IoMenu className="text-2xl" /> Cart ({cart.length})</NavLink></li>
                                <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/dashboard/review"><FaStar className="text-2xl" /> Review</NavLink></li>
                            </>
                    }

                    <div className="divider"></div>

                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/"><FaHome className="text-2xl" /> Home</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/menu"><IoMenu className="text-2xl" /> Menu</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/order/salad"><FaShopify className="text-2xl" /> Shop</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/contact"><FaPhoneAlt className="text-2xl" /> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;