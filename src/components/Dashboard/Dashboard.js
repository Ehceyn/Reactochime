import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../state/contexts/AuthContext";
import { HeaderContext } from "../../state/contexts/HeaderContext";
import RoundWithPlus from "../icons/RoundWithPlus";
import AlertModal from "../Modals/AlertModal";
import ComingSoonModal from "../Modals/ComingSoonModal";
import ConfirmationModal from "../Modals/ConfirmationModal";
import DeviceTypeModal from "../Modals/DeviceTypeModal";
import SearchBox from "../SearchBox/SearchBox";

const DashboardComponent = () => {
  const [onDisplay, setOnDisplay] = useState(false);
  const [onAddDevice, setOnAddDevice] = useState(false);
  const [onComingSoon, setOnComingSoon] = useState(false);
  const [alertDisplay, setAlertDisplay] = useState(false);
  const { userProfile } = useContext(AuthContext);
  const { dipsatchPageTitle } = useContext(HeaderContext);
  const [activeTabs, setActiveTabs] = useState("1");
  const [val, setVal] = useState("");

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
  console.log(userProfile?.device, "user devices");
  const devicesArr = [];
  const prx = userProfile?.device?.proxie || {};
  const asn = userProfile?.device?.airsyn || {};

  // Check if object is null or undefined

  Object.values(prx).map((item, index) => {
    console.log(item, "item sss");
    return devicesArr.push(item);
  });
  Object.values(asn).map((item, index) => {
    console.log(item, "item sss");
    return devicesArr.push(item);
  });
  console.log(devicesArr, "deviceArrrtt");

  const toggleDevice = () => {
    setOnAddDevice(!onAddDevice);
  };

  const deleteNotification = () => {};
  return (
    <div>
      {onDisplay && (
        <ConfirmationModal
          display={onDisplay}
          onCallConfirmationModal={() => setOnDisplay(false)}
          heading="Notification Details"
          message="A new device Razor drill was added by James Charles 20 minutes ago."
          leftButtonText="cancel"
          rightButtonText="delete"
          onClickLeftButton={() => setOnDisplay(false)}
          onClickRightButton={() => setAlertDisplay(deleteNotification)}
        />
      )}
      <AlertModal display={alertDisplay} />
      {onAddDevice && (
        <DeviceTypeModal display={onAddDevice} toggleDevice={toggleDevice} />
      )}
      {/* <AddDeviceModal
        display={onAddDevice}
        onCallAddDeviceModal={() => setOnAddDevice(false)}
      /> */}
      {onComingSoon && (
        <ComingSoonModal
          display={onComingSoon}
          onCallComingSoonModal={() => setOnComingSoon(false)}
          onClickButton={() => setOnComingSoon(false)}
        />
      )}
      {/* START OF TAILWIND DIV */}
      <div className="bg-backgroundGrey p-0 m-0 box-border h-[80%] w-full flex flex-row justify-between">
        <div className="h-full w-[100%] bg-backgroundGrey flex flex-row justify-between">
          {/* DIV HOLDING CARDS DIV AND DEVICES+USERS DIV */}
          <div className="flex flex-col  sm:w-[69%] w-full">
            {/* cstr + pfr CARDS DIV */}
            <div className="flex h-[15%] sm:h-[20%] overflow-y-scroll scroll sm:overflow-hidden flex-row justify-between">
              <ul
                class="nav nav-tabs w-full grid grid-cols-1 gap-5 md:grid-cols-2 list-none border-b-0 pl-0"
                id="tabs-tab"
                role="tablist"
              >
                <li
                  onClick={() => setActiveTabs("1")}
                  class="nav-item w-full"
                  role="presentation"
                >
                  <span
                    class={`nav-link block font-medium text-xs leading-tight uppercase rounded-lg border  ${
                      activeTabs === "1"
                        ? "bg-backgroundRed border-backgroundRed"
                        : "bg-backgroundDark border-borderColor"
                    } `}
                    id="tabs-home-tab"
                    role="tab"
                  >
                    <div className="h-full transition ease-in-out duration-300 space-y-1 bg-transparent w-[100%] min-w-[16rem] py-[2rem] px-[1.6rem] cursor-pointer rounded-lg ">
                      <div className="flex flex-row justify-between">
                        <h1 className="font-[Orbitron] uppercase tracking-widest text-base text-textGreyLighter font-bold">
                          cstr
                        </h1>
                        <p onClick={toggleDevice}>{<RoundWithPlus />}</p>
                      </div>
                    </div>
                  </span>
                </li>
                <li
                  onClick={() => setActiveTabs("2")}
                  class="nav-item w-full"
                  role="presentation"
                >
                  <span
                    class={`nav-link block font-medium text-xs leading-tight uppercase border rounded-lg ${
                      activeTabs === "2"
                        ? "bg-backgroundRed border-backgroundRed"
                        : "bg-backgroundDark border-borderColor"
                    }`}
                    id="tabs-profile-tab"
                    role="tab"
                  >
                    <div className="h-full transition ease-in-out space-y-1 duration-300 bg-transparent w-[100%] min-w-[16rem] py-[2rem] px-[1.6rem] cursor-pointer rounded-lg ">
                      <div className="flex flex-row justify-between">
                        <h1 className="font-[Orbitron] uppercase tracking-widest text-base text-textGreyLighter font-bold">
                          pfr
                        </h1>
                        <p onClick={() => setOnComingSoon(true)}>
                          {<RoundWithPlus />}
                        </p>
                      </div>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
            {/* END OF cstr + pfr CARDS DIV */}
            {/* DEVICES+USERS DIV */}
            <div className="">
              {/* DEVICES DIV */}
              <div className={`${activeTabs ? "block" : "hidden"}`}>
                <div className="bg-backgroundDark h-[32rem] mt-[4%] sm:p-[1rem] pt-0 border border-borderColor rounded-lg">
                  <div className="p-3 pt-0 overflow-auto scroll h-[28rem]">
                    <div className="flex items-center justify-between  sticky-top border-b-2 border-borderColor ">
                      <h1 className=" uppercase bg-backgroundDark font-raleway font-bold sm:text-lg pl-[8px]">
                        cases
                      </h1>
                      <SearchBox value={val} onChange={setVal} />
                    </div>
                    {devicesArr
                      .sort((a, b) =>
                        a.deviceLocation > b.deviceLocation ? 1 : -1
                      )
                      .map((device) => (
                        <div
                          className="border-b border-borderColor flex items-center justify-between p-[10px] transition ease-in-out duration-300 hover:border-none hover:bg-backgroundDarkRed bg-backgroundDark cursor-pointer capitalize"
                          key={device.deviceName}
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
                          <div className="flex-1">
                            <h1 className="font-poppins capitalize  flex-col ">
                              {device?.deviceName}
                            </h1>
                            <p className=" text-textGrey text-xs">
                              {device?.deviceLocation}
                            </p>
                            <p className=" text-textGrey text-xs">
                              {device?.deviceType}
                            </p>
                          </div>
                          <div className="flex-1 text-end">
                            <h1
                              className={` ${
                                device?.deviceState === "on"
                                  ? "text-[#059D1D]"
                                  : "text-textGrey"
                              } `}
                            >
                              {device?.deviceState}
                            </h1>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/* END OF DEVICES DIV */}
            </div>
            {/* END OF DEVICES+USERS DIV */}
          </div>
          {/* END OF DIV HOLDING CARDS DIV AND DEVICES+USERS DIV */}
          {/* START OF NOTIFICATIONS DIV */}
          <div className="bg-backgroundDark h-[40rem] w-[29%] sm:p-[1rem] pt-0 hidden sm:block border border-borderColor rounded-lg">
            <div className="p-2 pt-0 overflow-auto scroll h-[100%] text-textGreyLighter">
              <h1 className="border-b-2 border-borderColor flex items-center bg-backgroundDark font-raleway uppercase font-bold text-lg sticky-top w-full inset-x-0 text-textGreyLighter h-16 pl-[8px]">
                recent cases
              </h1>
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ].map((i) => (
                <div className="border-b border-borderColor flex items-center justify-between p-[10px] transition ease-in-out duration-300 hover:bg-backgroundDarkRed bg-backgroundDark">
                  <div
                    className="cursor-pointer space-y-2"
                    onClick={() => setOnDisplay(true)}
                  >
                    <p className="text-xs font-medium">
                      High level of co2 detected
                    </p>
                    <p className=" text-xs text-textGrey">5mins ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* END OF NOTIFICATIONS DIV */}
        </div>
      </div>
      {/* END OF TAILWIND DIV */}
    </div>
  );
};

export default DashboardComponent;
