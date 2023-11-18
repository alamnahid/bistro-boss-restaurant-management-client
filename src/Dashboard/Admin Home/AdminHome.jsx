
import wallet from "../../assets/icon/wallet.svg"
import customer from "../../assets/icon/customer.svg"
import chef from "../../assets/icon/chef.svg"
import truck from "../../assets/icon/truck.svg"
import AdminHomeBarChart from "./AdminHomeBarChart";
const AdminHome = () => {
    return (
        <div className="mx-[5%]">
            <h1 className="text-black mt-8 font-semibold text-[2rem]">Hi, Welcome Back!</h1>
            

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                <div style={{background: "linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)"}} className="w-[18rem] h-[9.3rem] rounded-xl flex justify-center items-center gap-4">
                    <img src={wallet} alt="" />
                    <div className="flex flex-col ">
                        <p className="text-white text-[2.5rem] font-bold">1000</p>
                        <p className="text-[1.5rem] text-white">Revenue</p>
                    </div>

                </div>

{/* 2  */}

                <div style={{background: "linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)"}} className="w-[18rem] h-[9.3rem] rounded-xl flex justify-center items-center gap-4">
                    <img src={customer} alt="" />
                    <div className="flex flex-col ">
                        <p className="text-white text-[2.5rem] font-bold">1500</p>
                        <p className="text-[1.5rem] text-white">Customers</p>
                    </div>

                </div>

                {/* 3  */}

                <div style={{background: "linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)"}} className="w-[18rem] h-[9.3rem] rounded-xl flex justify-center items-center gap-4">
                    <img src={chef} alt="" />
                    <div className="flex flex-col ">
                        <p className="text-white text-[2.5rem] font-bold">103</p>
                        <p className="text-[1.5rem] text-white">Products</p>
                    </div>

                </div>


                {/* 4  */}

                <div style={{background: "linear-gradient(90deg, #6AAEFF 0%, #B6F7FF 100%)"}} className="w-[18rem] h-[9.3rem] rounded-xl flex justify-center items-center gap-4">
                    <img src={truck} alt="" />
                    <div className="flex flex-col ">
                        <p className="text-white text-[2.5rem] font-bold">500</p>
                        <p className="text-[1.5rem] text-white">Order</p>
                    </div>

                </div>
            </div>

            <div>
                <AdminHomeBarChart></AdminHomeBarChart>
            </div>
        </div>
    );
};

export default AdminHome;