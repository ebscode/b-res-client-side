import {
  IoAdd,
  IoBook,
  IoCalendar,
  IoCartOutline,
  IoCreateOutline,
  IoFastFood,
  IoHome,
  IoList,
  IoPersonOutline,
  IoPulse,
} from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useadmin from "../hooks/useadmin";
import useAdmin from "../hooks/useadmin";

const Dashboard = () => {
  const [isAdmin] =useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-amber-400">
        <ul className="p-3 menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminhome"}>
                  {" "}
                  <IoHome></IoHome>admin home
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashboard/additem"}>
                  {" "}
                  <IoAdd></IoAdd> add item
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageitem"}>
                  {" "}
                  <IoList></IoList> manage item
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashboard/managebooking"}>
                  {" "}
                  <IoBook></IoBook> manage booking
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/alluser"}>
                  {" "}
                  <IoPersonOutline></IoPersonOutline> all user
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userhome"}>
                  {" "}
                  <IoHome></IoHome>user home
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashboard/paymenthistory"}>
                  {" "}
                  <IoCalendar></IoCalendar> payment history
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  {" "}
                  <IoCartOutline></IoCartOutline> my cart
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  {" "}
                  <IoCreateOutline></IoCreateOutline> review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/booking"}>
                  {" "}
                  <IoList></IoList> booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"> </div>
          <li>
            <NavLink to={"/"}>
              {" "}
              <IoHome></IoHome> home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              {" "}
              <IoFastFood></IoFastFood> menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
