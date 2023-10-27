import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../Modals/ConfirmationModal";

const MobDeviceCard = ({ device }) => {
  const [onDisplay, setOnDisplay] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="border font-poppins border-solid border-[#717171] mt-4 mr-2 rounded-lg bg-backgroundDark  text-sm cursor-pointer mb-0"
      onClick={() => {
        device?.deviceType === "proxie"
          ? navigate(`/proxydevice/${device?.deviceName}`)
          : navigate(`/singledevice/${device?.deviceName}`);
      }}
    >
      {onDisplay && (
        <ConfirmationModal
          display={onDisplay}
          onCallConfirmationModal={(e) => {
            setOnDisplay(false);
            e.stopPropagation();
          }}
          heading="Remove Devices"
          message="Are you sure you want to remove Razor dfgdgergegdfg from your devices?"
          leftButtonText="cancel"
          rightButtonText="remove"
          onClickLeftButton={() => setOnDisplay(false)}
        />
      )}
      <div className="flex items-center justify-between border-b border-solid border-[#717171] p-3">
        <p className="flex-1 font-bold">Name Of Device</p>
        <p className="flex-1 text-end capitalize">{device?.deviceName}</p>
      </div>
      <div className="flex items-center justify-between p-3 border-b border-solid border-[#717171]">
        <p className="flex-1 font-bold">Location</p>
        <p className="flex-1 text-end capitalize">{device?.deviceLocation}</p>
      </div>
      <div className="flex items-center justify-between font-poppins p-3 border-b border-solid border-[#717171]">
        <p className="flex-1 font-bold">Device Type</p>
        <p className="capitalize">{device?.deviceType}</p>
      </div>
      <div className="flex items-center font-poppins justify-between p-3 border-b border-solid border-[#717171]">
        <p className="flex-1 font-bold">Status</p>
        <p
          className={`font-poppins capitalize ${
            device?.deviceState === "on" ? "text-[#059D1D]" : "text-[#717171]"
          } `}
        >
          {device?.deviceState}
        </p>
      </div>
      <div className="flex items-center justify-between p-3 font-poppins border-solid border-[#717171]">
        <p className="flex-1 font-bold">Remove Device</p>
        <p
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setOnDisplay(true);
          }}
        >
          <svg
            style={{ width: "1.5rem", height: "1.5rem", color: "#717171" }}
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
      </div>
    </div>
  );
};

export default MobDeviceCard;
