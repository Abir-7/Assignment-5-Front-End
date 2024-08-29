import { NavLink, Outlet } from "react-router-dom";
import { sideNavLinkGenerator } from "../../utils/sideNavLinkGenerator";
import { userOption } from "../../router/userRouter";

import { useAppSelector } from "../../redux/hooks";
import { adminOption } from "../../router/adminRoute";

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  USER: "user",
};

const DashboardLayout = () => {
  const { user } = useAppSelector((state) => state.authData);

  let sideBarItems;

  switch (user?.role) {
    case userRole.ADMIN:
      sideBarItems = sideNavLinkGenerator(adminOption, userRole.ADMIN);
      break;
    // case userRole.FACULTY:
    //   sideBarItems = sideNavLinkGenerator(facultyOption, userRole.FACULTY);
    //   break;
    case userRole.USER:
      sideBarItems = sideNavLinkGenerator(userOption, userRole.USER);
      break;

    default:
      break;
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content   ">
        <label
          htmlFor="my-drawer-2"
          className=" absolute flex justify-center items-center h-8 w-8 rounded-md bg-slate-950 border top-2 left-2 me-auto lg:hidden text-white font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </label>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side pe-0 lg:pe-1">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className=" menu gap-5 text-white bg-gray-950  min-h-full w-80 p-4">
          {" "}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-slate-100 text-black px-3 py-2 rounded"
                : "px-3 py-2 bg-slate-700 rounded"
            } // Apply styles based on active state
            to="/"
          >
            Home
          </NavLink>
          {sideBarItems?.map((item, i) => {
            if (!item?.children) {
              return (
                <NavLink
                  key={i}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-slate-100 text-black px-3 py-2 rounded"
                      : "px-3 py-2 bg-slate-700 rounded"
                  }
                  to={item?.label as string}
                >
                  {item?.key}
                </NavLink>
              );
            }
            if (item?.children) {
              return (
                <details>
                  <summary className="px-3 py-2 bg-slate-700 rounded">
                    {item.label}
                  </summary>
                  <ul className="mt-4 grid gap-3 w-2/3">
                    {item.children.map((item, i) => (
                      <NavLink
                        key={i}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-slate-100  text-black px-3 py-2 rounded"
                            : "px-3  py-2 bg-slate-700 rounded"
                        }
                        to={item?.label as string}
                      >
                        {item?.key}
                      </NavLink>
                    ))}
                  </ul>
                </details>
              );
            }
            return "";
          })}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
