import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../src/App.css";
import { HeaderContext } from "../../state/contexts/HeaderContext";
import ConfirmationModal from "../Modals/ConfirmationModal";

const DeviceCardComp = ({ device }) => {
  const [onDisplay, setOnDisplay] = useState(false);
  const { dipsatchPageTitle } = useContext(HeaderContext);

  // instance of Navigate hook
  const navigate = useNavigate();

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
    <div className="flex items-center text-textGrey justify-between py-4 border-b border-borderColor border-solid hover:bg-backgroundDarkRed font-poppins hover:text-white hover:border-none text-sm">
      {onDisplay && (
        <ConfirmationModal
          display={onDisplay}
          onCallConfirmationModal={() => setOnDisplay(false)}
          heading="Remove Devices"
          message="Are you sure you want to remove this device?"
          leftButtonText="cancel"
          rightButtonText="remove"
          onClickLeftButton={() => setOnDisplay(false)}
        />
      )}

      {/* Start of List of Devices Card */}
      {/* <Link to="/singledevice"> */}
      <p
        className="cursor-pointer flex-1 capitalize font-poppins"
        onClick={() => {
          device?.deviceType === "proxie"
            ? handleRoute(
                `/proxydevice/${device.deviceName}`,
                "DISPLAY_DEVICE_NAME",
                `${device?.deviceName}`
              )
            : handleRoute(
                `/singledevice/${device.deviceName}`,
                "DISPLAY_DEVICE_NAME",
                `${device?.deviceName}`
              );
        }}
      >
        {device?.deviceName}
      </p>
      {/* </Link> */}
      <p
        className="cursor-pointer flex-1 capitalize font-poppins"
        onClick={() => {
          device?.deviceType === "proxie"
            ? handleRoute(
                `/proxydevice/${device.deviceName}`,
                "DISPLAY_DEVICE_NAME",
                `${device?.deviceName}`
              )
            : handleRoute(
                `/singledevice/${device.deviceName}`,
                "DISPLAY_DEVICE_NAME",
                `${device?.deviceName}`
              );
        }}
      >
        {device?.deviceLocation}
      </p>
      {/* <Link to="/proxydevice"> */}
      <p
        className="cursor-pointer flex-1 capitalize font-poppins"
        onClick={() => {
          device?.deviceType === "proxie"
            ? handleRoute(
                `/proxydevice/${device.deviceName}`,
                "DISPLAY_DEVICE_NAME",
                `${device?.deviceName}`
              )
            : handleRoute(
                `/singledevice/${device.deviceName}`,
                "DISPLAY_DEVICE_NAME",
                `${device?.deviceName}`
              );
        }}
      >
        {device?.deviceType}
      </p>
      {/* </Link> */}
      <p
        className={`cursor-pointer flex-1 capitalize ${
          device?.deviceState === "on" ? "text-[#059D1D]" : "text-textGrey"
        } `}
        onClick={() => {
          device?.deviceType === "proxie"
            ? handleRoute(
                `/proxydevice/${device.deviceName}`,
                "DISPLAY_DEVICE_NAME",
                `${device?.deviceName}`
              )
            : handleRoute(
                `/singledevice/${device.deviceName}`,
                "DISPLAY_DEVICE_NAME",
                `${device?.deviceName}`
              );
        }}
      >
        {device?.deviceState}
      </p>
      <p
        className="mr-4 cursor-pointer font-poppins"
        onClick={() => setOnDisplay(true)}
      >
        <svg
          style={{ width: "1.5rem", height: "1.5rem" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </p>
      {/* End of List of Devices Card */}
    </div>
  );
};

export default DeviceCardComp;
