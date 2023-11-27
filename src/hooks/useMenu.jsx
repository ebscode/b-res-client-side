import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import useaxiospublic from "./useaxiospublic";

const useMenu=()=>{
    const axiouspublic=useaxiospublic()
    // const [menu,setmenu]=useState([])
    // const [loading,setloading]=useState(true)
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
           
    //     setmenu(data)
    //     setloading(false)
    // })
    // },[])
  

    const{data:menu ,isPending:loading,refetch}=useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
const res=await axiouspublic.get('/menu')
return res.data
        }
    })
  return [menu,loading,refetch]
}

export default useMenu;