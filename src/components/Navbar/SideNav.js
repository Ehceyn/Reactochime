import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderContext } from "../../state/contexts/HeaderContext";
import AnimatedLogo from "../AnimatedLogo";

const SideNav = () => {
  const { dipsatchPageTitle } = useContext(HeaderContext);

  // instance of Navigate hook
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // routing to other routes
  const handleRoute = (route, action, title) => {
    // routing to the desired route
    navigate(route);

    // dispatching the title of the header,
    // depending on the route
    dipsatchPageTitle({
      type: action,
      pageTitle: title,
    });
  };

  return (
    <div className="fixed w-[15rem] h-[100vh] shadow-md bg-backgroundDark px-1 py-6 sm:flex flex-col justify-between hidden">
      {/* start Reactochime logo */}
      <ul className="px-6">
        <li>
          <AnimatedLogo className="w-[10rem]" />
        </li>
      </ul>
      {/* end Reactochime logo */}

      {/* start first list section of the route links */}
      <ul className="relative font-poppins -mt-[3rem]">
        {/* start dashboard */}
        <li
          className="relative"
          onClick={() =>
            handleRoute("/dashboard", "DISPLAY_DASHBOARD", "Welcome Onboard")
          }
        >
          <span
            className={`flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded ${
              pathname === "/dashboard"
                ? "text-backgroundRed font-bold"
                : "hover:bg-backgroundDarkRed  text-textGrey  hover:text-white cursor-pointer"
            } transition-all duration-150 ease-linear `}
            data-mdb-ripple-color="dark"
          >
            <svg
              className="w-4 h-4 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
            </svg>
            <span>Dashboard</span>
          </span>
        </li>
        {/* end dashboard */}

        {/* start reports */}
        <li
          className="relative cursor-pointer"
          onClick={() =>
            handleRoute("/reports", "DISPLAY_REPORTS", "Generate Reports")
          }
        >
          <span
            className={`flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded ${
              pathname === "/reports"
                ? "text-backgroundRed font-bold"
                : "hover:bg-backgroundDarkRed  text-textGrey  hover:text-white cursor-pointer"
            } transition-all duration-150 ease-linear `}
            data-mdb-ripple-color="dark"
          >
            <svg
              className="w-4 h-4 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Cases</span>
          </span>
        </li>
        {/* end reports */}
      </ul>
      {/* end first list section of the route links */}

      {/* start first list section of the route links */}
      <ul className="relative font-poppins">
        {/* start help */}
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-textGrey text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-backgroundDarkRed transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple-color="dark"
          >
            <svg
              className="w-4 h-4 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Help</span>
          </a>
        </li>
        {/* end help */}
      </ul>
      {/* end first list section of the route links */}
    </div>
  );
};

export default SideNav;
