
import usecart from "../../Hooks/usecart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../Pages/Shared/SectionTitle";
import deleteicon from "../../assets/icon/delete.svg"
import { Link } from "react-router-dom";


const Cart = () => {
  const [cart, refetch] = usecart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = id => {
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
          .then(res => {
            console.log(res)
            if (res.data.deletedCount > 0) {
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
    <div className="lg:px-[10%] w-full bg-[#F6F6F6] h-full">

      <div className="pt-12">
        <SectionTitle subHeading={'---My Cart---'} heading={'WANNA ADD MORE?'}></SectionTitle>
      </div>

      <div className="bg-white p-12 rounded-xl">


      <div className="flex justify-between items-center ">
        <h1 className="text-black lg:text-[2rem] cin font-bold">Items: {cart.length}</h1>
        <h1 className="text-black lg:text-[2rem] cin font-bold">Total Price: {totalPrice}</h1>
        {
          cart.length ? <Link to='/dashboard/payment'><button className="btn btn-neutral text-white text-xl bg-[#D1A054] border-none">Pay</button></Link> 
          :
          <button disabled className="btn btn-neutral text-white text-xl bg-[#D1A054] border-none">Pay</button>
        }
      </div>


      {/* table  */}

      <div className="rounded-tl-2xl rounded-tr-2xl">

        <div className="overflow-x-auto rounded-tl-2xl rounded-tr-2xl">
          <table className="table mt-10 rounded-tl-2xl rounded-tr-2xl">
            {/* head */}
            <thead className="bg-[#D1A054] h-[4.5rem] rounded-tl-2xl rounded-tr-2xl text-white font-semibold text-lg">
              <tr>
                <th>
                  
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
                cart.map((item, index) => <tr key={item._id}>
                  <th>
                    {index + 1}
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
                    <button onClick={() => handleDelete(item._id)} className="btn w-[3.1rem] h-[3.1rem] rounded-md bg-[#B91C1C] btn-neutral border-none btn-xs"><img src={deleteicon} alt="" /></button>
                  </th>
                </tr>)
              }



            </tbody>


          </table>
        </div>

      </div>




      </div>

    </div>
  );
};

export default Cart;