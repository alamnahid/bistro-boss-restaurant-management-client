
import wallet from "../../assets/icon/wallet.svg"
import store from "../../assets/icon/store.svg"
import telephone from "../../assets/icon/telephone.svg"
import ProfileSection from "./ProfileSection";
const UserHome = () => {
    return (
        <div className="mx-[5%]">
            <h1 className="text-black mt-8 font-semibold text-[2rem]">Hi, Welcome Back!</h1>


            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <div style={{ background: "linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)" }} className="w-[22rem] h-[9.3rem] rounded-xl flex justify-center items-center gap-4">
                    <img src={wallet} alt="" />
                    <div className="flex flex-col ">
                        <p className="text-white text-[2.5rem] font-bold">205</p>
                        <p className="text-[1.5rem] text-white">Menu</p>
                    </div>

                </div>

                {/* 2  */}

                <div style={{ background: "linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)" }} className="w-[22rem] h-[9.3rem] rounded-xl flex justify-center items-center gap-4">
                    <img src={store} alt="" />
                    <div className="flex flex-col ">
                        <p className="text-white text-[2.5rem] font-bold">103</p>
                        <p className="text-[1.5rem] text-white">Shop</p>
                    </div>

                </div>

                {/* 3  */}

                <div style={{ background: "linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)" }} className="w-[22rem] h-[9.3rem] rounded-xl flex justify-center items-center gap-4">
                    <img src={telephone} alt="" />
                    <div className="flex flex-col ">
                        <p className="text-white text-[2.5rem] font-bold">03</p>
                        <p className="text-[1.5rem] text-white">Contact</p>
                    </div>

                </div>


            </div>


            <div className="flex justify-center items-center mt-20">
                <ProfileSection></ProfileSection>
            </div>



        </div>
    );
};

export default UserHome;