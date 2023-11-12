import loginbg from "../../assets/others/authentication.png"
import logininimage from "../../assets/others/authentication2.png"
import fb from "../../assets/icon/fb.svg"
import google from "../../assets/icon/google.svg"
import github from "../../assets/icon/git.svg"

const Login = () => {
    return (
        <div style={{ backgroundImage: `url(${loginbg})` }} className="w-[100vw] py-[10vh] h-[100vh]">

            <div style={{ backgroundImage: `url(${loginbg})`, boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }} className="max-w-screen-2xl h-[80vh] mx-auto flex justify-around items-center">

                {/* image  */}
                <div>
                    <img src={logininimage} alt="" />

                </div>


                {/* form  */}
                <div className="w-[34rem]">
                    <h1 className="text-black text-center text-[2.5rem] font-semibold">Login</h1>

                    <form>
                        <p className="text-[#444] mt-8 text-xl font-semibold">Email</p>

                        <input className="w-full mt-4 h-[4.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-xl outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="email" name="email" id="" placeholder="Type here" />

                        <p className="text-[#444]  text-xl font-semibold">Password</p>

                        <input className="w-full mt-4 h-[4.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-xl outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="password" name="password" id="" placeholder="Enter your password" />


                       

                        <input className="w-full mt-10 h-[4.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-xl outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="password" name="password" id="" placeholder="Enter your password" />

                        <p className="text-[#5D5FEF] text-xl font-semibold">Reload Captcha</p>


                        

                        <input className="w-full mt-6 h-[4.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-xl outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="password" name="password" id="" placeholder="Type here" />

                        <input className="w-full mt-8 h-[4.5rem] btn btn-neutral border-none bg-[#D1A054B3] text-white text-xl font-bold" type="submit" name="password" id="" value="Sign In" />

                        <p className="text-[#D1A054] mt-8 text-center text-xl font-medium">New here? <span className="font-bold">Create a New Account</span></p>

                        <p className="text-[#444] mt-6 text-xl font-medium text-center">Or sign in with</p>

                        <div className="flex items-center justify-center gap-14 mt-5">
                            <div className="w-[3.25rem] hover:bg-white cursor-pointer btn-neutral h-[3.25rem] bg-[#F1F2F4] border-2 flex justify-center items-center border-black rounded-[50%] ">
                                <img src={fb} alt="" />
                            </div>
                            <div className="w-[3.25rem] hover:bg-white cursor-pointer btn-neutral h-[3.25rem] bg-[#F1F2F4] border-2 flex justify-center items-center border-black rounded-[50%] ">
                                <img src={google} alt="" />
                            </div>
                            <div className="w-[3.25rem] hover:bg-white cursor-pointer btn-neutral h-[3.25rem] bg-[#F1F2F4] border-2 flex justify-center items-center border-black rounded-[50%] ">
                                <img src={github} alt="" />
                            </div>
                        </div>
                    </form>


                </div>


            </div>

        </div>
    );
};

export default Login;