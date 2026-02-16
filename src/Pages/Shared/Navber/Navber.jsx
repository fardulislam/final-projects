import React from "react";
import Logo from "../../../Component/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../Hook/UseAuth";

const Navber = () => {
  const { user, signout } = useAuth();

  const hendlesignout = () => {
    signout()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-primary  rounded-xl" : "text-gray-600"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/coverage"}
          className={({ isActive }) =>
            isActive ? "bg-primary  rounded-xl" : "text-gray-600"
          }
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/sent-parsel"}
          className={({ isActive }) =>
            isActive ? "bg-primary  rounded-xl" : "text-gray-600"
          }
        >
          Send parcel
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "bg-primary  rounded-xl" : "text-gray-600"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/rider"}
          className={({ isActive }) =>
            isActive ? "bg-primary  rounded-xl" : "text-gray-600"
          }
        >
          Be a Rider
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to={"/dashboard/my-parcels"}
              className={({ isActive }) =>
                isActive ? "bg-primary  rounded-xl" : "text-gray-600"
              }
            >
              My parcels
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <span className="btn btn-ghost text-xl">
          <Logo></Logo>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2 ">
        {user ? (
          <a onClick={hendlesignout} className="btn  text-black rounded-xl">
            sign out
          </a>
        ) : (
          <Link className="btn" to={"/login"}>
            sign in
          </Link>
        )}
        <Link className="btn btn-primary text-black rounded-lg " to={"/rider"}>
          Be a rider
        </Link>
      </div>
    </div>
  );
};

export default Navber;
