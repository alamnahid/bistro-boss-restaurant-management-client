import { FaTrash } from "react-icons/fa";
import usecart from "../../Hooks/usecart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Cart = () => {
    const [cart, refetch] = usecart();
    const axiosSecure = useAxiosSecure();
    const totalPrice = cart.reduce((total, item)=>total+item.price, 0);

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res=>{
                    console.log(res)
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }

                })
            
            }
          });
    }
    return (
        <div>
           <div className="flex justify-between items-center">
            <h1>Items: {cart.length}</h1>
            <h1>Total Price: {totalPrice}</h1>
            <button>Pay</button>
           </div>


           {/* table  */}

           <div>

           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price Color</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item, index)=><tr key={item._id}>
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
             {item.name}
            </td>
            <td>${item.price}</td>
            <th>
              <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button>
            </th>
          </tr>)
      }
      
     
     
    </tbody>
    
    
  </table>
</div>

           </div>
            
        </div>
    );
};

export default Cart;