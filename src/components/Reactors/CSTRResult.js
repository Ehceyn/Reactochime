import React, { useState } from "react";

const CSTRResult = ({ result }) => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleInputs = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <div className="bg-backgroundDark space-y-5 px-5 py-5 border border-backgroundRed rounded-lg">
      <div className="flex items-center justify-between">
        <h4 className="font-raleway font-bold sm:text-lg capitalize">
          Results
        </h4>
        <button
          type="button"
          className={`flex uppercase space-x-2 justify-center w-fit items-center px-3 py-2  font-bold rounded-md border  text-backgroundRed border-borderColor
           hover:brightness-90 tracking-widest font-poppins`}
          onClick={toggleInputs}
        >
          <span>{isHidden ? "show" : "Hide"}</span>
        </button>
      </div>
      {result.map((result, index) => (
        <div
          className={`${
            isHidden ? "hidden" : "flex"
          } space-x-5 items-start w-full border-b pb-5`}
          key={index}
        >
          <div className="space-y-3">
            <button className="border rounded-md cursor-default flex items-center font-semibold min-h-[20px] min-w-[35px] justify-center p-2 text-backgroundRed">
              {index + 1}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {/* space time */}
            <div className="space-y-2">
              <p className="font-semibold text-sm capitalize">conversion</p>
              <div className="w-full sm:min-w-[256px] flex font-poppins items-center bg-backgroundGrey min-h-[46px] border py-2 border-borderColor rounded-md px-3">
                {result?.conversion || ""}
              </div>
              <p className="font-semibold text-xs capitalize">*Unit: None</p>
            </div>
            {/* space time */}
            <div className="space-y-2">
              <p className="font-semibold text-sm capitalize">Space Time</p>
              <div className="w-full sm:min-w-[256px] flex font-poppins items-center bg-backgroundGrey min-h-[46px] border py-2 border-borderColor rounded-md px-3">
                {result?.space_time || ""}
              </div>
              <p className="font-semibold text-xs capitalize">*Unit: hour</p>
            </div>
            {/* space velocity */}
            <div className="space-y-2">
              <p className="font-semibold text-sm capitalize">Space Velocity</p>
              <div className="w-full sm:min-w-[256px] flex font-poppins items-center bg-backgroundGrey min-h-[46px] border py-2 border-borderColor rounded-md px-3">
                {result?.space_velocity || ""}
              </div>
              <p className="font-semibold text-xs capitalize">
                *Unit: per hour
              </p>
            </div>
            {/* reactor height */}
            <div className="space-y-2">
              <p className="font-semibold text-sm capitalize">Reactor Height</p>
              <div className="w-full sm:min-w-[256px] flex font-poppins items-center bg-backgroundGrey min-h-[46px] border py-2 border-borderColor rounded-md px-3">
                {result?.reactor_height || ""}
              </div>
              <p className="font-semibold text-xs capitalize">*Unit: meters</p>
            </div>
            {/* reactor volume */}
            <div className="space-y-2">
              <p className="font-semibold text-sm capitalize">Reactor Volume</p>
              <div className="w-full sm:min-w-[256px] flex font-poppins items-center bg-backgroundGrey min-h-[46px] border py-2 border-borderColor rounded-md px-3">
                {result?.reactor_volume || ""}
              </div>
              <p className="font-semibold text-xs capitalize">*Unit: m³</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CSTRResult;
