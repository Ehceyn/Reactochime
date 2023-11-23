import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../state/contexts/AuthContext";
import { DisplaySidebarContext } from "../../state/contexts/DisplaySidebarContext";
import { HeaderContext } from "../../state/contexts/HeaderContext";

const Header = () => {
  // Header context state for the header
  const { pageTitle } = useContext(HeaderContext);
  const { userProfile } = useContext(AuthContext);
  // Dashboard context state for the sidebar
  // dashboard page title state
  const [dashboardPageTitle, setdashboardPageTitle] = useState(true);

  const { toggleSideNav } = useContext(DisplaySidebarContext);

  const navigate = useNavigate();

  // observe the pageTitle state for the dashboard
  useEffect(() => {
    if (pageTitle === "Welcome, user-") {
      setdashboardPageTitle(true);
    } else {
      setdashboardPageTitle(false);
    }
  }, [pageTitle]);

  // toggle sidebar
  // const toggleSidebar = () => {
  //     console.log('open the sidebar')
  // }

  return (
    <div
      className={`sticky top-0 border-b px-4 sm:px-6 pt-[1rem] pb-0  mb-[0.2rem] h-[6rem] sm:h-[4rem] bg-backgroundGrey flex sm:flex-row flex-col-reverse justify-end sm:justify-between sm:items-center transition-all z-[10000]`}
    >
      {/* start page title */}
      <div className="h-full flex items-center overflow-hidden text-ellipsis whitespace-nowrap">
        <div className="text-textGreyLighter font-poppins pb-0 text-[17px] sm:text-[23px] capitalize">
          {pageTitle} {dashboardPageTitle ? userProfile?.account?.userId : null}
        </div>
      </div>
      {/* end page title */}

      {/* start hamburger menu, profile image and notification */}
      <div className="flex sm:block items-center justify-between w-full sm:w-auto">
        {/* start hamburger menu */}
        <div className="flex sm:hidden" onClick={() => toggleSideNav()}>
          <svg
            className="w-6 h-6 text-textGreyLighter"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        {/* end hamburger menu */}

        {/* end notification icon and profile image */}
      </div>
      {/* end hamburger menu, profile image and notification */}
    </div>
  );
};

export default Header;
