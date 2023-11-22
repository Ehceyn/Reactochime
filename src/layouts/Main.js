import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import SideNav from "../components/Navbar/SideNav";
import "../App.css";
import MobileSideNav from "../components/Navbar/MobileSideNav";
import { AuthContext } from "../state/contexts/AuthContext";
import { useContext, useEffect, useReducer, useState } from "react";
import LaunchLoader from "../components/Modals/LaunchLoader";
import UserAccountProfileReducer, {
  initialProfileState,
} from "../state/reducers/UserAccountProfileReducer";

const Main = () => {
  // launch loader state
  const [launchLoaderState, setLaunchLoaderState] = useState(true);
  const { userProfile, authState, fetchProfileAndUpdateState } =
    useContext(AuthContext);
  const [_, dipsatchUserProfile] = useReducer(
    UserAccountProfileReducer,
    initialProfileState
  );
  const navigate = useNavigate();

  // Set launch loader state time out
  useEffect(() => {
    setTimeout(() => {
      userProfile && setLaunchLoaderState(false);
    }, 2000);
  }, [launchLoaderState]);
  useEffect(() => {
    setLaunchLoaderState(true);
  }, []);

  // Check if user is authenticated
  useEffect(() => {
    if (authState) {
      fetchProfileAndUpdateState(authState.displayName);
    }
  }, [authState]);

  return (
    <>
      {!launchLoaderState ? (
        <div className="flex min-h-[100vh] relative">
          {/* start desktop sidenav */}
          <SideNav />
          {/* end desktop sidenav */}

          <MobileSideNav />

          {/* start header and page route content */}
          <div className="sm:ml-[15rem] w-full relative bg-backgroundGrey">
            {/* start header */}
            <Header />
            {/* end header */}

            {/* start page route content */}
            <div className="h-full bg-backgroundGrey px-4 sm:px-6">
              <Outlet />
            </div>
            {/* end page route content */}
          </div>
          {/* end header and page route content */}
        </div>
      ) : (
        <LaunchLoader display={launchLoaderState} />
      )}
    </>
  );
};

export default Main;
