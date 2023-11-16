import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import loginbg from "../../assets/others/authentication.png"
import logininimage from "../../assets/others/authentication2.png"
import fb from "../../assets/icon/fb.svg"
import google from "../../assets/icon/google.svg"
import github from "../../assets/icon/git.svg"
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const SignUp = () => {

    const {createUser, updateUserProfile, googleSignIn} =useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()

    const from = location.state?.form?.pathname || "/";

    const {
        register,
        handleSubmit,  
        reset,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{console.log(result.user)
       
            updateUserProfile(data.name, data.photo)
        .then((()=>{
            const userInfo = {
                name: data.name,
                email: data.email
            }
            axiosPublic.post('/users', userInfo )
            .then(res=>{
                console.log('fgfgfgfg')
                if(res.data.insertedId){
                    reset();
                    alert('signup succesfully');
                    navigate('/')
                }
            })
            
            
            //   navigate(from, {replace: true})
        }))
        })
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

            <div style={{ backgroundImage: `url(${loginbg})`, boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }} className="max-w-screen-2xl h-[90vh] mx-auto flex flex-row-reverse justify-around items-center">

                {/* image  */}
                <div>
                    <img src={logininimage} alt="" />

                </div>


                {/* form  */}
                <div className="w-[28rem]">
                    <h1 className="text-black text-center text-[2.5rem] font-semibold">Sign Up</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>

                    <p className="text-[#444] mt-5 text-xl font-semibold">Name</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="name" id="" placeholder="Your name" {...register("name", { required: true })} />

                    {errors.name && <span>This field is required</span>}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Photo</p>

<input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="photo" id="" placeholder="Your Photo URL" {...register("photo", { required: true })} />

{errors.name && <span>This field is required</span>}



                        <p className="text-[#444] mt-5 text-xl font-semibold">Email</p>

                        <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="email" name="email" id="" placeholder="Type here" {...register("email" , { required: true })} />

                        <p className="text-[#444]  text-xl mt-4 font-semibold">Password</p>

                        <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="password" name="password" id="" placeholder="Enter your password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} />

                        {errors.password?.type==='minLength' && <span>Password must be 6 character</span>}


                       
                        <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#D1A054B3] text-white text-xl font-bold" type="submit"  id="" value="Sign Up" />

                        <p className="text-[#D1A054] mt-5 text-center text-xl font-medium">Already have an account? <Link to='/login'><span className="font-bold">Log in</span></Link></p>

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

export default SignUp;