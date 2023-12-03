import Swal from "sweetalert2";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Pages/Shared/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import edit from "../../assets/icon/edit.svg"
import deletedicon from "../../assets/icon/delete.svg"


const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure()

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`)
        // console.log(res.data)
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Food has been deleted.",
            icon: "success"
          });
        }



      }
    });
  }
  return (
    <div className="lg:px-[10%] pt-12 bg-[#F6F6F6] w-full">
      <SectionTitle subHeading={'---Hurry Up!---'} heading={'MANAGE ALL ITEMS'}></SectionTitle>

      <div className="bg-white p-12 rounded-xl">
        <div>
          <h2 className="text-black text-[2rem] font-bold cin">Total Items {menu.length}</h2>
        </div>

        <div className="overflow-x-auto mt-8 rounded-tl-2xl rounded-tr-2xl">
          <table className="table w-full rounded-tl-2xl rounded-tr-2xl">
            {/* head */}
            <thead className="bg-[#D1A054] h-[4.5rem] rounded-tl-2xl rounded-tr-2xl text-white font-semibold">
              <tr>
                <th>

                </th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>

              {
                menu.map((item, index) => <tr key={item._id}>
                  <td>
                    {index + 1}
                  </td>
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
                  <td>{item?.price}</td>
                  <td>
                    <Link to={`/dashboard/updateitem/${item._id}`}> <button className="btn w-[3.1rem] h-[3.1rem] rounded-md bg-[#D1A054] btn-neutral border-none btn-xs"><img src={edit} alt="" /></button></Link>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteItem(item)} className="btn w-[3.1rem] text-red-800 h-[3.1rem] rounded-md bg-[#D1A054] btn-neutral border-none btn-xs"><img src={deletedicon} alt="" /></button>
                  </td>
                </tr>)
              }





            </tbody>


          </table>
        </div>

      </div>

    </div>
  );
};

export default ManageItems;