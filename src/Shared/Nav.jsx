import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { PiHandbagSimpleBold } from "react-icons/pi";
import avater from "../assets/avater.png";

function Nav() {
  const link = (
    <>
      <div className="flex items-center justify-center">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "bg-[#F8F8F8] py-2 px-4 rounded-md" : " mx-3"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-[#F8F8F8] py-2 px-4 rounded-md" : " mx-3"
          }
        >
          Product
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive ? "bg-[#F8F8F8] py-2 px-4 rounded-md" : " mx-3"
          }
        >
          Categories
        </NavLink>
        <NavLink
          to="/custom"
          className={({ isActive }) =>
            isActive ? "bg-[#F8F8F8] py-2 px-4 rounded-md" : " mx-3"
          }
        >
          Custom
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "bg-[#F8F8F8] py-2 px-4 rounded-md" : " mx-3"
          }
        >
          Blog
        </NavLink>
      </div>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 max-w-7xl mx-auto py-6">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <img className="w-40" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <div className=" flex items-center gap-3">
            <div className="">
              <PiHandbagSimpleBold className="text-3xl" />
            </div>
            <div className="">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={avater} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
