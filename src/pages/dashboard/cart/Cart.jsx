import { IoRefreshCircle, IoTrash } from "react-icons/io5";
import usecart from "../../../hooks/usecart";
import useAxiossecure from "../../../hooks/useAxiossecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart,refetch]=usecart()
    const totalprice=cart.reduce((total,item)=>total+item.price,0)
    const axiosSecure=useAxiossecure()

    const handledelete=(id)=>{
         axiosSecure.delete(`/cart/${id}`)
         .then(res=>console.log(res))
         Swal.fire({
            icon:'success',
            text:'product deleted '
         })
         refetch()
    }

    return (
        <div>
        <div className="flex justify-evenly m-9">
            <h2 className="text-xl ">my cart : {cart.length}</h2>
            <p className="text-xl">total price : {totalprice}</p>
           <Link to={'/dashboard/payment'}> <button className="btn-primary text-white btn-sm rounded-md">pay</button></Link>
            
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>                                                                 
      <tr>
     <th>#</th>
        <th>image</th>
        <th>name</th>
        <th>price</th>
        <th>action</th>                                                                                                                                                        
      </tr>
    </thead>
    <tbody>
      {cart.map((item,index)=><tr key={item._id}>
       <th>{index+1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>
        <td className="font-semibold ">
          {item.name}
      
        </td>
        <td>${item.price}</td>
        <th>
          <button onClick={()=>handledelete(item._id)} className="btn btn-ghost "><IoTrash className="text-red-700 text-xl"></IoTrash> </button>
        </th>
      </tr>)}
      

    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default Cart;