/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authcontext } from "../provider/Authprovider";
import useAxiossecure from "./useAxiossecure";

const useAdmin = () => {
  const axiosSecure = useAxiossecure();
  const { user ,loading} = useContext(authcontext);
  const { data: isAdmin ,isLoading:isAdminloadin} = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin,isAdminloadin];
};

export default useAdmin;
