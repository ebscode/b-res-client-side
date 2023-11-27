import {
  IoAddCircleSharp,
  IoCloudUpload,
  IoMedkit,
  IoPencil,
  IoTrash,
} from "react-icons/io5";
import useMenu from "../../../hooks/useMenu";
import useAxiossecure from "../../../hooks/useAxiossecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Manageitem = () => {
  const [menu, , refetch] = useMenu();

  const axiousecure = useAxiossecure();

  const handledelete = async (item) => {
    const res = await axiousecure.delete(`/menu/${item._id}`);
    console.log(res.data);
    Swal.fire({
      icon: "success",
      title: "deleted successfully",
    });
    refetch();
  };
  return (
    <div>
      <div>
        <h1 className=" mt-4 text-2xl text-center font-medium">manage item</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>category</th>
                <th>price</th>
                <th>update</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td>
                   
                    <Link to={`/dashboard/updateitem/${item._id}`}>
                      <button>
                        
                        <IoAddCircleSharp className="text-orange-500 text-xl"></IoAddCircleSharp>{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handledelete(item)}
                      className="btn btn-ghost "
                    >
                      <IoTrash className="text-red-700 text-xl"></IoTrash>{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manageitem;
