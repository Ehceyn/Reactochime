import { useContext } from "react";
import { DisplaySidebarContext } from "../../state/contexts/DisplaySidebarContext";
import AnimatedLogo from "../AnimatedLogo";

const MobileSideNav = () => {
  const { sideNav, toggleSideNav } = useContext(DisplaySidebarContext);

  console.log(sideNav, "this is the sidenace");
  return (
    <div
      style={{ background: "rgba(0,0,0,0.700)" }}
      className={`bg-green-900 w-full absolute h-full top-0 z-[12000] transition-all
        ${sideNav ? "flex" : "hidden"}`}
      onClick={toggleSideNav}
    >
      <div className="fixed w-[15rem] h-[100vh] shadow-md bg-backgroundDark px-1 py-6 flex flex-col justify-start z-10">
        {/* start Reactochime logo */}
        <ul className="px-6">
          <li>
            <AnimatedLogo className="w-[7rem]" />
          </li>
        </ul>
        {/* end Reactochime logo */}

        {/* start first list section of the route links */}
        <ul className="relative font-poppins mt-[4rem]">
          {/* start settings */}
          <li className="relative">
            <span
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-textGrey text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-backgroundDarkRed transition duration-300 ease-in-out"
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
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Settings</span>
            </span>
          </li>
          {/* end settings */}

          {/* start help */}
          <li className="relative">
            <span
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-textGrey text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-backgroundDarkRed transition duration-300 ease-in-out"
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
            </span>
          </li>
          {/* end help */}
        </ul>
        {/* end first list section of the route links */}
      </div>
    </div>
  );
};

export default MobileSideNav;
