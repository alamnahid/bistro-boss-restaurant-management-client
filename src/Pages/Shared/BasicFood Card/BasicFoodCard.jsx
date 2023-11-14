import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const BasicFoodCard = ({item}) => {
    const { name, image, recipe, price } = item;
    const {user} = useAuth();
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddtoCart = (food)=>{
        if(user && user.email){
            //
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
                   navigate('/login')
                }
                });
        }

    }
    return (
        <div>
            <div className="card relative card-compact w-[26.5rem] h-[34rem] bg-[#F3F3F3]">
                <figure><img className="w-[26.5rem] h-[18.75rem]" src={image} alt="image" /></figure>
                
                <div className="absolute top-5 right-5 w-[5.6rem] h-[3rem] flex justify-center items-center rounded-xl bg-black">
                <p className="text-white font-medium">${price}</p>
                </div>
                

                <div className="card-body">
                    <h2 className="text-black text-center text-2xl font-semibold mt-8">{name}</h2>
                    <p className="text-left text-[#737373] text-base w-[21.5rem]">{recipe}</p>
                    <div className="card-actions pb-3 mt-5 justify-center">
                    <button onClick={()=>handleAddtoCart(item)} className="btn btn-outline border-t-0 border-l-0 border-r-0 bg-[#E8E8E8] border-[#BB8506] hover:text-[#BB8506] text-[#BB8506] text-xl font-medium">ADD TO CART</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BasicFoodCard;