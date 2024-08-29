import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/feature/userSlice/authSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authData);
  // const { role } = decodeToken((token as string) || "") as JwtPayload & {
  //   role: string;
  // };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-slate-100 text-black px-3 py-2 rounded" : "px-3 py-2"
          } // Apply styles based on active state
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/facilities"
          className={({ isActive }) =>
            isActive ? "bg-slate-100 text-black px-3 py-2 rounded" : "px-3 py-2"
          } // Apply styles based on active state
        >
          Facilities
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={`/${user?.role}/dashboard`}
            className={({ isActive }) =>
              isActive
                ? "bg-slate-100 text-black px-3 py-2 rounded"
                : "px-3 py-2"
            } // Apply styles based on active state
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "bg-slate-100 text-black px-3 py-2 rounded" : "px-3 py-2"
          } // Apply styles based on active state
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? "bg-slate-100 text-black px-3 py-2 rounded" : "px-3 py-2"
          } // Apply styles based on active state
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-slate-950 text-white">
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
        <a className="btn btn-ghost text-xl">DreamSprots</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <button
            onClick={() => {
              dispatch(logout());
            }}
            className="btn btn-sm"
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"} className="btn btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
