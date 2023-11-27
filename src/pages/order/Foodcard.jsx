import { useContext } from "react";
import { authcontext } from "../../provider/Authprovider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiossecure from "../../hooks/useAxiossecure";
import usecart from "../../hooks/usecart";


const Foodcard = ({items}) => {
    const{image,price,recipe,name,_id}=items
    const {user}=useContext(authcontext)
    const location=useLocation()
    const axiosSecure=useAxiossecure()
    const [,refetch]=usecart()

    const Navigate=useNavigate()
   const  handleaddcart=(food)=>{
    if(user && user.email){

const cartitem={
  menuId:_id,
  email:user.email,name,image,price
}
axiosSecure.post('/cart',cartitem)
.then(res=>{
  console.log(res.data)
  if(res.data.insertedId){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${name} added to your cart`,
      showConfirmButton: false,
      timer: 1500
    });
    refetch()
  }
})

      // df
    }
    else{
      Swal.fire({
        title: "you are not logged in",
        text: "You won't be able to add product please login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "login"
      }).then((result) => {
        if (result.isConfirmed) {
        Navigate('/login')
       
        }
      });
    }
   }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
    <p className="font-semibold text-lg absolute bg-gray-900 rounded-md p-px mr-16 mt-4 top-11 text-white right-0">${price}</p>
  </figure>
  
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={()=>handleaddcart(items)} className="btn btn-outline border-b-4 ">add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Foodcard;