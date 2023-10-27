import React, { useState } from "react";
import WifiCardList from "./WifiCardList";

const WifiCard = () => {
  const [onDisplay, setOnDisplay] = useState(false);

  return (
    <div className="flex items-center justify-center">
      {/* Start of Wifi Information Card */}
      <div className="border border-backgroundDark bg-backgroundDark w-full sm:w-[50%] h-full rounded-lg p-6  space-y-8">
        <div className="flex items-center justify-between">
          <div className="hidden sm:block"></div>
          <div className="text-center flex-2 sm:text-base text-[13px] font-semibold">
            Repeater Configuration
          </div>
          <div className="flex items-center justify-center">
            <button
              className="border border-borderColor p-1 px-4 rounded-tl-lg rounded-bl-lg text-sm font-semibold hover:bg-backgroundDark active:bg-backgroundDark focus:bg-backgroundDark cursor-pointer"
              onClick={() => setOnDisplay(true)}
            >
              On
            </button>
            <button
              className="border border-borderColor p-1 px-4 rounded-tr-lg rounded-br-lg text-sm font-semibold hover:bg-backgroundDark focus:bg-backgroundDark cursor-pointer active:bg-backgroundDark"
              onClick={() => setOnDisplay(false)}
            >
              Off
            </button>
          </div>
        </div>
        {onDisplay && <WifiCardList />}
      </div>
      {/* End of Wifi Information Card */}
    </div>
  );
};

export default WifiCard;
