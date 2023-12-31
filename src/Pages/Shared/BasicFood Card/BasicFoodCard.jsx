import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import usecart from "../../../Hooks/usecart";


const BasicFoodCard = ({item}) => {
    const { name, image, recipe, price, _id } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = usecart();

    const handleAddtoCart = (food)=>{
        if(user && user.email){
            
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price

            }
            axiosSecure.post('/carts', cartItem)
            // axios.post('https://bistro-boss-server-three-sigma.vercel.app/carts', cartItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product added to cart",
                        showConfirmButton: false,
                        timer: 1000
                      });
                      refetch()
                }
            })
        }
        else{
                Swal.fire({
                title: "You are not login",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
                }).then((result) => {
                if (result.isConfirmed) {
                   //send
                   navigate('/login', {state: {from: location}})
                }
                });
        }

    }
    return (
        <div>
            <div className="card px-4 relative card-compact w-[26.5rem] h-[34rem] bg-[#ffffffd5]">
            <img className="w-[26.5rem] h-[18rem]" src={image} alt="image" />
                
                <div className="absolute top-5 right-5 w-[5.6rem] h-[3rem] flex justify-center items-center rounded-xl bg-black">
                <p className="text-white font-medium">${price}</p>
                </div>
                

                <div className="card-body">
                    <h2 className="text-black text-center text-2xl font-semibold mt-4">{name}</h2>
                    <p className="text-center text-[#737373] text-base ">{recipe}</p>
                    <div className="card-actions pb-3 mt-5 justify-center">
                    <button onClick={()=>handleAddtoCart(item)} className="btn btn-outline border-t-0 border-l-0 border-r-0 bg-[#E8E8E8] border-[#BB8506] hover:text-[#BB8506] text-[#BB8506] text-xl font-medium">ADD TO CART</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BasicFoodCard;