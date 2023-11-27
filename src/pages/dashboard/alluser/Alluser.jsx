import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiossecure, { axiosSecure } from "../../../hooks/useAxiossecure";
import { IoPerson, IoTrash } from "react-icons/io5";
import Swal from "sweetalert2";

const Alluser = () => {
  const axiousecure = useAxiossecure();
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiousecure.get("/users",);
      return res.data;
    },
  });
  const handledelete = (id) => {
    axiousecure.delete(`/users/${id}`).then((res) => console.log(res));
    Swal.fire({
      icon: "success",
      text: "product deleted ",
    });
    refetch();
  };
  const handlerole = (role) => {
    axiosSecure.patch(`/users/admin/${role._id}`).then((res) => {
      console.log(res.data);
refetch()
      Swal.fire({
        icon: "success",
        title: `${role.name} `,
        text: "updated successfully",
      });
    });
  };
  return (
    <div>
      <div className="flex justify-evenly my-5">
        <div className="text-3xl">all users</div>
        <div className="text-3xl">total users : {data?.length}</div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>email</th>
                <th>role</th>
                <th>acion</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((value, index) => (
                <tr key={value._id}>
                  <th>{index + 1}</th>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>
                    { value.role ==='admin'? 'admin' : <button onClick={() => handlerole(value)}>
                      <IoPerson className="text-amber-600"></IoPerson>
                    </button>}
                  </td>
                  <button onClick={() => handledelete(value._id)}>
                    {" "}
                    <td>
                      <IoTrash className="text-red-600"></IoTrash>
                    </td>
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alluser;
