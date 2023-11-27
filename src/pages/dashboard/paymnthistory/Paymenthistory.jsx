import { useContext } from "react";
import { authcontext } from "../../../provider/Authprovider";
import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../../../hooks/useAxiossecure";


const Paymenthistory = () => {
    const axiousecure=useAxiossecure()
    const {user}=useContext(authcontext)
    const {data:payments}=useQuery({
        queryKey:['payments',user?.email],
        queryFn:async()=>{
            const res=await axiousecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })
    return (
        <div>
            <h2 className="text-3xl">total payments: {payments?.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>price </th>
        <th>transection id</th> 
        <th>date</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      {payments.map((item,index)=>     <tr key={item._id}>
        <th>{index+1}</th>
        <td>${item.price}</td>
        <td>{item.transectionid}</td>
        <td>{item.date}</td>
        <td>{item.status}</td>
      </tr>)}
 
  
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Paymenthistory;