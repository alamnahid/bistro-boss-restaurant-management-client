import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


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
        <div>

            <div className="flex justify-around">
                <h2 className="text-4xl">All users</h2>
                <h2 className="text-4xl">Total Users {users.length}</h2>

                <div>

                    

                </div>
            </div>

            <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users.map((user, index)=><tr key={user._id}>
                                        <th>{index+1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                       
                                       
                                        <td>
                                           {
                                            user.role==='admin' ? 'Admin' :  <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-xs"><FaUser/></button>
                                           }
                                        
                                        </td>
                                       
                                        <td><button onClick={()=>handleDelete(user._id)} className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button></td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>

        </div>
    );
};

export default AllUsers;