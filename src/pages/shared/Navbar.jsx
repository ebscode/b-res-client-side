import { useContext, useEffect, useState } from "react";
import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";
import { authcontext } from "../../provider/Authprovider";
import { IoCartOutline } from "react-icons/io5";
import usecart from "../../hooks/usecart";
import useAdmin from "../../hooks/useadmin";

const Navbar = () => {
  const { user, logout } = useContext(authcontext);
  const [cart] = usecart();
  const [isadmin] = useAdmin();

  const handlelogout = () => {
    logout()
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error));
  };
  const navlink = (
    <>
      <NavLink to={"/"}>
        {" "}
        <li>
          <a> home</a>
        </li>
      </NavLink>
      <NavLink to={"/menu"}>
        {" "}
        <li>
          <a>menu</a>
        </li>
      </NavLink>
      <NavLink to={"/ourshop"}>
        {" "}
        <li>
          <a>our shop</a>
        </li>
      </NavLink>
      <NavLink>
        {" "}
        <li>
          <a>Item 1</a>
        </li>
      </NavLink>
      {user && isadmin && (
        <NavLink to={'/dashboard/adminhome'}>
          {" "}
          <li>
            <a>dashboard</a>
          </li>
        </NavLink>
      )}
      {
        user && !isadmin && <NavLink to={'/dashboard/userhome'}>
        {" "}
        <li>
          <a>dashboard</a>
        </li>
      </NavLink>
      }
    </>
  );
  return (
    <div>
      <Headroom>
        <div className="navbar fixed z-10 bg-opacity-25 max-w-7xl bg-gray-800 text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52"
              >
                {navlink}
              </ul>
            </div>

            <a className="btn btn-ghost normal-case text-xl">bistro boss</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlink}</ul>
          </div>
          <div className="navbar-end">
            <Link to={"/dashboard/cart"}>
              <button className=" mr-6 btn bg-none  ">
                <IoCartOutline />
                <div className="badge   ">{cart.length}</div>
              </button>
            </Link>
            {user ? (
              <button onClick={handlelogout}>logout</button>
            ) : (
              <Link to={"/login"}>
                <a className="text-lg font-semibold">log in</a>
              </Link>
            )}
          </div>
        </div>
      </Headroom>
    </div>
  );
};

export default Navbar;
