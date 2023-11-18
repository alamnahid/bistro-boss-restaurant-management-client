import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaTelegram, FaUtensils } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const ContactForm = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth();
    console.log(user)
    
    const onSubmit = async (data) => {
        // console.log(data)
        const message = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
        }
        console.log(message)
        const messagepost = await axiosPublic.post('/contact', message)
        console.log(messagepost.data)
        if(messagepost.data.insertedId){
            Swal.fire({
                title: `Dear ${user.displayName}`,
                text: "Thank you for contacting with us",
                imageUrl: "https://i.ibb.co/GCb49mH/Thanksgiving-Blog-Cover-Image.webp",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
              });
        }
        
        
        // if(res.data.success){
        //     // now send the data to the server
        //     const menuItem = {
        //         name: data.name,
        //         category: data.category,
        //         price: parseFloat(data.price),
        //         recipe: data.recipe,
        //         image: res.data.display_url
        //     }

            // send the data
        //     const menuRes = await axiosSecure.post('/menu', menuItem);
        //     console.log(menuRes.data)
        //     if(menuRes.data.insertedId){
        //         //
        //         alert('added')
        //     }
        // }
        // console.log(res.data)
    }
    return (
        <div>
            <div className="px-[10%]">

                <form className="bg-[#F3F3F3] px-12" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-8  pt-12 ">
                        <label className="label">
                            <span className="label-text text-[#444444] text-xl font-semibold">Recipe name*</span>

                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Your name" className="input input-bordered w-full mt-3 h-[4.5rem] bg-white rounded-lg placeholder:text-xl text-xl" defaultValue={user?.displayName} />

                        <div className="flex w-full gap-6 mt-5">

                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-[#444444] text-xl font-semibold">Email*</span>

                                </label>

                                <input {...register("email", { required: true })} type="email" placeholder="Your email" className="input input-bordered w-full mt-3 h-[4.5rem] bg-white rounded-lg placeholder:text-xl text-xl" defaultValue={user?.email} />
                               
                            </div>


                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-[#444444] text-xl font-semibold">Phone*</span>

                                </label>
                                <input {...register("phone", { required: true })} type="number" placeholder="Enter Number" className="input input-bordered w-full mt-3 h-[4.5rem] bg-white rounded-lg placeholder:text-xl text-xl" />
                            </div>

                        </div>

                        <div className="w-full mt-5">
                            <label className="label">
                                <span className="label-text text-[#444444] text-xl font-semibold">Message*</span>

                            </label>
                            <textarea {...register("message", { required: true })} className="textarea textarea-warning w-full mt-3 h-[15.5rem] bg-white rounded-lg placeholder:text-xl text-xl pt-5 pl-5" placeholder="Comment Here"></textarea>
                        </div>


                        
                    </div>





                    <button type="submit" style={{ background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)" }} className="btn capitalize text-white text-xl font-bold w-[15rem] h-[3.5rem] mb-12">Send Message<FaTelegram /></button>
                </form>

            </div>

        </div>
    );
};

export default ContactForm;