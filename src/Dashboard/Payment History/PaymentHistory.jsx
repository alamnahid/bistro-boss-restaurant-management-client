import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div className="bg-[#F6F6F6] w-full h-full px-[10%] flex justify-center items-center">
           

            <div className="rounded-tl-2xl rounded-tr-2xl bg-white p-12 w-full h-fit">
            <h2 className="text-black text-[2rem] cin font-bold">Total Payments {payments.length}</h2>

<div className="overflow-x-auto rounded-tl-2xl rounded-tr-2xl">
  <table className="table mt-10 rounded-tl-2xl rounded-tr-2xl">
    {/* head */}
    <thead className="bg-[#D1A054] h-[4.5rem] rounded-tl-2xl rounded-tr-2xl text-white font-semibold text-lg">
      <tr>
        <th>
          
        </th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payments.map((item, index) => <tr className="p-6" key={item._id}>
          <th>
            {index + 1}
          </th>
          <td>
          <p className="text-[#444444]">{item.price}</p>
          </td>
          <td>
            {item.transactionId}
          </td>
          <td>{item.status}</td>
         
        </tr>)
      }



    </tbody>


  </table>
</div>

</div>

            
        </div>
    );
};

export default PaymentHistory;