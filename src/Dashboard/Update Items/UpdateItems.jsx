import { useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../Pages/Shared/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItems = () => {
    const item = useLoaderData();
    const {id} = useParams();
    const food = item.find(foodItem => foodItem._id===id)
    const {name, category, recipe, price, _id} = food;
    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()


    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type' : 'multipart/form-data'
            }
        })
        if(res.data.success){
            // now send the data to the server
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.display_url
            }

            // send the data
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                //
                alert('updated')
            }
        }
        console.log(res.data)
    }
    
    return (
        <div>
            <SectionTitle heading={'UPDATE ITEM'}></SectionTitle>
            

            <div className="px-[10%]">

                <form className="bg-[#F3F3F3] px-12" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-8  pt-12 ">
                        <label className="label">
                            <span className="label-text text-[#444444] text-xl font-semibold">Recipe name*</span>

                        </label>
                        <input {...register("name", {required: true})} type="text" placeholder="Recipe name" className="input input-bordered w-full mt-3 h-[4.5rem] bg-white rounded-lg placeholder:text-xl text-xl" defaultValue={name} />

                        <div className="flex w-full gap-6 mt-5">

                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-[#444444] text-xl font-semibold">Category*</span>

                                </label>
                                <select defaultValue={category} {...register("category", {required: true})} className="select select-warning w-full mt-3 h-[4.5rem] bg-white rounded-lg placeholder:text-xl text-xl">
                                    <option disabled value="default">Select a Category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>

                                </select>
                            </div>


                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-[#444444] text-xl font-semibold">Price*</span>

                                </label>
                                <input {...register("price", {required: true})} type="number" placeholder="Enter Price" className="input input-bordered w-full mt-3 h-[4.5rem] bg-white rounded-lg placeholder:text-xl text-xl"  defaultValue={price}/>
                            </div>

                        </div>

                        <div className="w-full mt-5">
                            <label className="label">
                                <span className="label-text text-[#444444] text-xl font-semibold">Recipe Details*</span>

                            </label>
                            <textarea defaultValue={recipe} {...register("recipe", {required: true})} className="textarea textarea-warning w-full mt-3 h-[15.5rem] bg-white rounded-lg placeholder:text-xl text-xl pt-5 pl-5" placeholder="Recipe Details"></textarea>
                        </div>


                        <div>
                        <input type="file" {...register("image", {required: true})} className="file-input file-input-bordered file-input-warning w-full max-w-xs mt-5" />
                        </div>

                    </div>





                    <button type="submit" style={{background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)"}} className="btn capitalize text-white text-xl font-bold w-[12rem] h-[3.5rem] mb-12">Update Item<FaUtensils/></button>
                </form>

            </div>


        </div>
    );
};

export default UpdateItems;