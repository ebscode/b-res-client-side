/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";
import { useContext } from "react";
import { authcontext } from "../provider/Authprovider";


const usecart = () => {
    const axiosSecure=useAxiossecure();
// eslint-disable-next-line react-hooks/rules-of-hooks
const {user}=useContext(authcontext)
const {refetch ,data: cart=[]}=useQuery({
    queryKey:['cart',user?.email],
    queryFn:async ()=>{
        const res=await axiosSecure.get(`/cart?email=${user.email}`)
        return res.data
    }
})
return [cart,refetch]
};

export default usecart;