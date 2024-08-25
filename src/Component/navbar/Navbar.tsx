import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const role = "user";
  const navLinks = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <details>
          <summary>Parents</summary>
          <ul className="p-2 z-20 bg-slate-950">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to={`/${role}/dashboard`}>Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-slate-950 text-white">
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
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-slate-950 lg:hidden"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/login"} className="btn btn-sm">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
