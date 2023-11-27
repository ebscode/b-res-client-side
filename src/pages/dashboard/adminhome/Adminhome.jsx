import { useContext } from "react";
import { authcontext } from "../../../provider/Authprovider";
import useAxiossecure from "../../../hooks/useAxiossecure";
import { useQuery } from "@tanstack/react-query";
import { IoLogoEuro, IoPerson } from "react-icons/io5";


const Adminhome = () => {
    const{user}=useContext(authcontext)
    const axiosSecure=useAxiossecure()
    const {data:stats}=useQuery({
        queryKey:['admin-stats'],
        queryFn: async()=>{
            const res=await axiosSecure.get('/admin-stats')
           return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-3xl">welcome</h2>
          <div className="">
          {
                user?.displayName?user.displayName :'back'
            }

          </div>



<div className="stats w-full shadow mt-6">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <IoLogoEuro></IoLogoEuro>
    </div>
    <div className="stat-title">revenue</div>
    <div className="stat-value">{stats?.revenue}</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
   <IoPerson></IoPerson>
    </div>
    <div className="stat-title">Users</div>
    <div className="stat-value">{stats?.users}</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      
    </div>
    <div className="stat-title">orders</div>
    <div className="stat-value">{stats.orders}</div>

  </div>


  <div className="stat">
    <div className="stat-figure text-secondary">
      
    </div>
    <div className="stat-title">manuitems</div>
    <div className="stat-value">{stats.manuitems}</div>

  </div>
  
</div>
        </div>
    );
};

export default Adminhome;