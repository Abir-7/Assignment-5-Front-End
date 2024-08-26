import { Link, Outlet } from "react-router-dom";
import { sideNavLinkGenerator } from "../../utils/sideNavLinkGenerator";
import { userOption } from "../../router/userRouter";

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  USER: "user",
};

const DashboardLayout = () => {
  const role = "user";
  let sideBarItems;
  switch (role) {
    // case userRole.ADMIN:
    //   sideBarItems =sideNavLinkGenerator(adminOption, userRole.ADMIN);
    //   break;
    // case userRole.FACULTY:
    //   sideBarItems = sideNavLinkGenerator(facultyOption, userRole.FACULTY);
    //   break;
    case userRole.USER:
      sideBarItems = sideNavLinkGenerator(userOption, userRole.USER);
      break;

    default:
      break;
  }
  console.log(sideBarItems, "gg");

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content   ">
        <label
          htmlFor="my-drawer-2"
          className=" absolute flex justify-center items-center h-10 w-10 rounded-md bg-red-300 left-0 me-auto lg:hidden"
        >
          {">"}
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
          <Link
            className="text-black rounded-md font-medium p-2 bg-white"
            to="/"
          >
            Home
          </Link>
          {sideBarItems?.map((item) => (
            <Link
              key={item?.label}
              className="text-black p-2 font-medium rounded-md bg-white"
              to={item?.label as string}
            >
              {item?.key}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
