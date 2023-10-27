import React from "react";

export const TimeIntervalCard = () => {
  return (
    <>
      <div className="bg-backgroundDark w-full border border-borderColor rounded-lg sm:h-fit sm:ml-5 sm:w-full font-poppins text-base">
        <div className="flex flex-col justify-between h-fit">
          <h1 className="flex items-center font-raleway font-bold text-lg uppercase p-5 px-3 sm:px-[1rem] sm:p-[1rem] h-16 ">
            Time Interval
          </h1>

          <div className="border-borderColor border-t-2 transition ease-in-out duration-300 hover:bg-backgroundDarkRed">
            <p className="font-poppins p-3 sm:p-5 flex flex-row items-center">
              Minutes
            </p>
          </div>
          <div className="border-borderColor border-t transition ease-in-out duration-300 hover:bg-backgroundDarkRed">
            <p className="font-poppins p-3 sm:p-5 flex flex-row items-center">
              Hours
            </p>
          </div>
          <div className="border-borderColor border-t transition ease-in-out duration-300 hover:bg-backgroundDarkRed">
            <p className="font-poppins p-3 sm:p-5 flex flex-row items-center">
              Days
            </p>
          </div>
          <div className="border-borderColor border-t transition ease-in-out duration-300 hover:bg-backgroundDarkRed">
            <p className="font-poppins p-3 sm:p-5 flex flex-row items-center">
              Week
            </p>
          </div>
          <div className="border-borderColor border-t transition ease-in-out duration-300 hover:bg-backgroundDarkRed">
            <p className="font-poppins p-3 sm:p-5 flex flex-row items-center">
              Month
            </p>
          </div>
          <div className="border-borderColor border-t transition ease-in-out duration-300 hover:bg-backgroundDarkRed hover:rounded-b-lg">
            <p className="font-poppins p-3 sm:p-5 flex flex-row items-center">
              Year
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
