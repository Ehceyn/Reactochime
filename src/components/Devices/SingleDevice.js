import React from "react";
import { useParams } from "react-router-dom";
import GoToTop from "../GoToTop/GoToTop";
import AirQualityCard from "./AirQualityCard";
import WifiCard from "./WifiCard";

const SingleDevice = () => {
  const { deviceName } = useParams();
  console.log(deviceName, "deviceName");
  return (
    <>
      {/* Start of Single Device */}
      <ul
        className="nav nav-tabs flex sm:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-home"
            className=" w-28 block font-medium font-poppins text-textGrey text-sm leading-tight border border-borderColor transition ease-in-out bg-backgroundDark hover:bg-backgroundRed focus:bg-backgroundRed rounded-tl-md rounded-bl-md text-center p-2 my-2 active
    "
            id="tabs-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-home"
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >
            Air Quality
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-profile"
            className=" w-28 block font-medium font-poppins text-sm text-textGrey leading-tight border border-borderColor transition ease-in-out bg-backgroundDark hover:bg-backgroundRed focus:bg-backgroundRed rounded-tr-md rounded-br-md text-center p-2 my-2
    "
            id="tabs-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >
            Wifi
          </a>
        </li>
      </ul>

      <div className="tab-content" id="tabs-tabContent">
        <div
          className="tab-pane fade show active"
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
        >
          {/* Air Quality Tab */}
          <AirQualityCard deviceName={deviceName} />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          {/* Wifi Tab */}
          <WifiCard />
        </div>
      </div>
      {/* End of Single Device */}
      <GoToTop />
    </>
  );
};

export default SingleDevice;
