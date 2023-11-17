import loginbg from "../../assets/others/authentication.png"
import logininimage from "../../assets/others/authentication2.png"
import fb from "../../assets/icon/fb.svg"
import google from "../../assets/icon/google.svg"
import github from "../../assets/icon/git.svg"
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef } from "react"
import { AuthContext } from "../../Providers/AuthProvider"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import useAxiosPublic from "../../Hooks/useAxiosPublic"


const Login = () => {

    // const captchaRef = useRef(null)
    const {signIn, googleSignIn} =useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()

    const from = location.state?.form?.pathname || "/";

    // useEffect(()=>{
    //     loadCaptchaEnginge(6);
    // }, [])

    const handleSubmit = (e)=>{
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        // const user_captcha_value  = captchaRef.current.value;
        // if (validateCaptcha(user_captcha_value)==true) {
            signIn(email, password)
            .then(result=>{console.log(result.user)
                Swal.fire({
                    title: "Logged in Successfully",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                navigate(from, {replace: true})

            })
        // }
   
        // else {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "Captcha Don't Match",
                
        //       });
        // }
        

        console.log(email, password)
        // console.log(email, password, user_captcha_value)

    }

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName

            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res)
                navigate('/')
            })
        })
    }




    return (
        <div style={{ backgroundImage: `url(${loginbg})` }} className="w-[100vw] py-[5vh] h-[100vh]">

            <div style={{ backgroundImage: `url(${loginbg})`, boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }} className="max-w-screen-2xl h-[90vh] mx-auto flex justify-around items-center">

                {/* image  */}
                <div>
                    <img src={logininimage} alt="" />

                </div>


                {/* form  */}
                <div className="w-[28rem]">
                    <h1 className="text-black text-center text-[2.5rem] font-semibold">Login</h1>

                    <form onSubmit={handleSubmit}>
                        <p className="text-[#444] mt-5 text-xl font-semibold">Email</p>

                        <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="email" name="email" id="" placeholder="Type here" />

                        <p className="text-[#444]  text-xl mt-4 font-semibold">Password</p>

                        <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="password" name="password" id="" placeholder="Enter your password" />


                       
                        {/* <div className="flex justify-between items-center gap-3">

                        <div className="w-full mt-6 bg-white pl-3 h-[3.5rem] rounded-lg border-2 border-[#D0D0D0]">
                        <LoadCanvasTemplate />
                        </div>

                        <input className="w-full mt-6 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="capctha" placeholder="Type the captcha" />


                        </div> */}

                        
                        <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#D1A054B3] text-white text-xl font-bold" type="submit"  id="" value="Sign In" />

                        <p className="text-[#D1A054] mt-5 text-center text-xl font-medium">New here? <Link to='/signup'><span className="font-bold">Create a New Account</span></Link></p>

                        <p className="text-[#444] mt-5 text-xl font-medium text-center">Or sign in with</p>

                        <div className="flex items-center justify-center gap-14 mt-5">
                            <div className="w-[3.25rem] hover:bg-white cursor-pointer btn-neutral h-[3.25rem] bg-[#F1F2F4] border-2 flex justify-center items-center border-black rounded-[50%] ">
                                <img src={fb} alt="" />
                            </div>
                            <div onClick={handleGoogleSignIn} className="w-[3.25rem] hover:bg-white cursor-pointer btn-neutral h-[3.25rem] bg-[#F1F2F4] border-2 flex justify-center items-center border-black rounded-[50%] ">
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