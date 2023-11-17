import Swal from "sweetalert2";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Pages/Shared/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = (item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                // console.log(res.data)
                if(res.data.deletedCount>0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }


            
            }
          });
    }
    return (
        <div>
            <SectionTitle subHeading={'---Hurry Up!---'} heading={'MANAGE ALL ITEMS'}></SectionTitle>

            <div>

            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
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
            menu.map((item, index)=>     <tr key={item._id}>
            <td>
                {index+1}
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
              <button className="btn btn-ghost btn-xs">details</button>
            </td>
            <td>
              <button onClick={()=> handleDeleteItem(item)} className="btn btn-ghost btn-xs">Delete</button>
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