import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const WifiCardList = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="mt-4">
        <p className="font-semibold">SSID</p>
        <div className="border border-[#686868] w-full p-3 mt-3 flex items-center justify-between">
          <p>Select Device Group</p>
          <p>
            <IoMdArrowDropdown fontSize="20px" />
          </p>
        </div>
      </div>
      <div>
        <p className="font-semibold">Password</p>
        <div className="flex items-center border px-4 border-[#686868] w-full mt-3">
          <input
            className=" w-full p-3 bg-transparent"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="************"
          />
          <p
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiOutlineEye fontSize="20px" />
            ) : (
              <AiOutlineEyeInvisible fontSize="20px" />
            )}
          </p>
        </div>
        {/* <p className="text-center mt-5">Wireless Access Point</p> */}
      </div>
      <div className="mt-4">
        <p className="font-semibold">Security</p>
        <div className="border border-[#686868] w-full p-3 mt-3 flex items-center justify-between">
          <p>WPA2 PSK</p>
          <p>
            <IoMdArrowDropdown fontSize="20px" />
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="font-semibold">Device Identification</p>
        <div className="border border-[#686868] w-full p-3 mt-3 flex items-center justify-between">
          <p>Portable hotspot</p>
          <p>
            <IoMdArrowDropdown fontSize="20px" />
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="font-semibold">Select AP band</p>
        <div className="border border-[#686868] w-full p-3 mt-3 flex items-center justify-between">
          <p>2.4 GHz band</p>
          <p>
            <IoMdArrowDropdown fontSize="20px" />
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold flex-1">Connected devices</p>
        <p className="flex-1 text-end">5 devices</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold flex-1">Limit of connected devices</p>
        <p className="flex-1 text-end">5 devices</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold flex-1">Blocklist</p>
        <p className="flex-1 text-end">0 device(s)</p>
      </div>
    </>
  );
};

export default WifiCardList;
