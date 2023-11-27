import { useEffect, useState } from "react";
import Popularcard from "./Popularcard";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
  const[menu]=useMenu()
  const popular=menu?.filter(item=>item.category =='popular')
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const polularitem=data.filter(item=>item.category =='popular')
    //     setmenu(polularitem)})
    // },[])
    return (
        <div>
            <div className="text-center mb-3 mx-auto">
                <h1 className=" text-orange-500 mb-2">---popular menu---</h1>
                <h1 className="text-4xl uppercase mx-auto p-2 border-y-2 w-4/12 text-center">from our menu</h1>
            </div>
            <div className="md:grid grid-cols-2 gap-4 mb-8">
{
    popular?.map(item=><Popularcard key={item._id} item={item}></Popularcard>)
}
            </div>
        </div>
    );
};

export default PopularMenu;