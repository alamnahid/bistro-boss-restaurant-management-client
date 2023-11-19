import { NavLink, Outlet } from "react-router-dom";
import { FaHome,FaUsers,FaShopify ,FaPhoneAlt, FaMoneyBill, FaStar, FaBook   } from "react-icons/fa";
import { IoFastFood, IoMenu, IoCalendarClear   } from "react-icons/io5";
import usecart from "../Hooks/usecart";
import useAdmin from "../Hooks/useAdmin";



const Dashboard = () => {
        const [cart] = usecart();

        const [isAdmin] = useAdmin();
        
    return (
        <div className="flex">
            <div className="w-[20rem] min-h-screen bg-[#D1A054] pt-12 px-8">
               
               
                <h1 className="text-black cin font-extrabold text-2xl uppercase">BISTRO BOSS</h1>
                <h1 className="text-black cin tracking-[0.4rem] text-lg font-bold  uppercase">Restaurant</h1>
            
            
                <ul className="menu w-full px-0 mt-16">
                    {
                        isAdmin ? <>
                        <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base" to="/dashboard/adminhome"><FaHome className="text-2xl"/> Admin Home</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/dashboard/additems"><IoFastFood className="text-2xl"/> Add Items</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/dashboard/manageitems"><IoMenu className="text-2xl"/> manage items</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/dashboard/users"><FaUsers className="text-2xl"/> all users</NavLink></li>
                        </>
                        :
                        <>
                        <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base hover:bg-white " to="/dashboard/userhome"><FaHome className="text-2xl"/>User Home</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/dashboard/payment"><FaMoneyBill className="text-2xl"/> Payment History</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/dashboard/cart"><IoMenu className="text-2xl"/> Cart ({cart.length})</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/dashboard/review"><FaStar className="text-2xl"/> Review</NavLink></li>
                        </>
                    }
                    
                    <div className="divider"></div> 
                    
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/"><FaHome className="text-2xl"/> Home</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/menu"><IoMenu className="text-2xl"/> Menu</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/order/salad"><FaShopify className="text-2xl"/> Shop</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/contact"><FaPhoneAlt className="text-2xl"/> Contact</NavLink></li>

                </ul>
            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;