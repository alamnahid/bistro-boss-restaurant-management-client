import { FaMoneyBill, FaShoppingCart, FaStreetView } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import usecart from "../../Hooks/usecart";


const ProfileSection = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    const [cart] = usecart();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    // console.log(user)
    return (
        <div className="flex">
            <div className="w-[38rem] h-[30rem] bg-[#FFEDD5] border-r-4 border-[#D1A054] flex justify-center items-center flex-col">

                    <div className="w-[12rem] h-[12rem] rounded-[50%] border-4 border-[#D1A054]">
                        <img className="w-[12rem] h-[12rem] rounded-[50%]" src={user?.photoURL} alt="" />

                       

                    </div>
                    <h1 className="text-black mt-10 text-[2rem] cin font-semibold">{user?.displayName}</h1>
            </div>


            <div className="w-[38rem] h-[30rem] bg-[#FEF9C3]  flex justify-center items-center flex-col">

                   <h1 className="text-black mb-8 cin text-[2.5rem] font-semibold">Your Activities</h1>
                    <p className="flex items-center justify-start text-[1.5rem] font-semibold text-[#0088FE] gap-2"><FaShoppingCart/> Orders: {cart.length}</p>

                    <p className="flex mt-2 items-center justify-start text-[1.5rem] font-semibold text-[#00C4A1] gap-2"><FaStreetView/> Reviews: 0</p>

                    <p className="flex items-center text-[1.5rem] font-semibold text-[#0088FE] gap-2"><FaMoneyBill/> Payment: {payments.length}</p>
            </div>


            
        </div>
    );
};

export default ProfileSection;