import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../Pages/Shared/SectionTitle";
import avatar from "../../assets/icon/avatar2.svg"


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

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
                axiosSecure.delete(`/users/${id}`)
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

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                alert('he is admin now')
                
            }
        })
    }


    return (
        <div className="mx-[10%]">

            <div className="mt-12">
                <SectionTitle subHeading={'---How many??---'} heading={'MANAGE ALL USERS'}></SectionTitle>
            </div>

            <div className="flex justify-start mt-12">
                <h2 className="text-black text-[2rem] font-bold cin">Total Users {users.length}</h2>

                <div>

                    

                </div>
            </div>

            <div className="overflow-x-auto rounded-tl-2xl rounded-tr-2xl mt-8">
                        <table className="table table-zebra rounded-tl-2xl rounded-tr-2xl">
                            {/* head */}
                            <thead className="bg-[#D1A054] h-[4.5rem] rounded-tl-2xl rounded-tr-2xl">
                                <tr>
                                    <th className="text-white font-semibold"></th>
                                    <th className="text-white font-semibold">Name</th>
                                    <th className="text-white font-semibold">Email</th>
                                    <th className="text-white font-semibold">Role</th>
                                    <th className="text-white font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users.map((user, index)=><tr key={user._id}>
                                        <th>{index+1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                       
                                       
                                        <td className="">
                                           {
                                            user.role==='admin' ? 'Admin' :  <button onClick={()=>handleMakeAdmin(user)} className="btn w-[3.1rem] h-[3.1rem] rounded-md bg-[#D1A054] btn-neutral border-none btn-xs"><img src={avatar} alt="" /></button>
                                           }
                                        
                                        </td>
                                       
                                        <td><button onClick={()=>handleDelete(user._id)} className="btn w-[3.1rem] h-[3.1rem] rounded-md bg-[#B91C1C] btn-neutral border-none btn-xs text-white"><FaTrash></FaTrash></button></td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>

        </div>
    );
};

export default AllUsers;