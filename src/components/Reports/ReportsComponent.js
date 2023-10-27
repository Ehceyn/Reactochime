import React, { useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TimeIntervalCard } from "./TimeIntervalCard";

const ReportsComponent = () => {
  const toDateRef = useRef();
  const fromDateRef = useRef();
  const [focusTo, setFocusTo] = useState(false);
  const [focusFrom, setFocusFrom] = useState(false);
  return (
    <div className="bg-backgroundGrey w-full flex-row sm:flex h-full pb-10 ">
      {/* TIME FRAME + POLLUTANT CONTAINER STARTS HERE */}
      <div className="bg-backgroundGrey flex flex-col mb-0 justify-between h-[90%] w-full sm:w-[69%]">
        {/* TIME FRAME DIV STARTS HERE */}
        <div className="bg-backgroundDark border border-borderColor rounded-lg flex flex-col justify-between  w-full sm:w-full font-poppins space-y-5 text-base p-3 pt-5 sm:pt-[1rem] sm:p-[1rem]">
          <h1 className=" flex items-center bg-backgroundDark font-raleway font-bold sm:text-lg uppercase sticky-top  ">
            Time Frame
          </h1>{" "}
          <div className="bg-backgroundDark space-x-5 flex flex-row justify-between">
            <div className="w-full relative">
              <p>From</p>
              <input
                ref={fromDateRef}
                id="from"
                min="2021-01-01"
                max="2099-12-31"
                name="from"
                className="bg-backgroundGrey rounded-md p-3 h-16 cursor-pointer w-full focus:border focus:border-backgroundRed focus:outline-none mt-2 font-poppins "
                onBlur={() => {
                  fromDateRef.current.type = "text";
                  setFocusFrom(false);
                }}
                onFocus={() => {
                  fromDateRef.current.type = "date";
                  setFocusFrom(true);
                }}
                placeholder="Select Date"
              />
              <p
                className={`absolute ${
                  focusFrom && "hidden"
                } right-3 top-[53px] cursor-pointer`}
              >
                <MdKeyboardArrowDown fontSize="25px" className="" />
              </p>
            </div>
            <div className="w-full relative">
              <p>To</p>
              <input
                ref={toDateRef}
                id="to"
                min="2021-01-01"
                max="2099-12-31"
                name="to"
                className="bg-backgroundGrey rounded-md p-3 h-16 cursor-pointer w-full focus:border focus:border-backgroundRed focus:outline-none mt-2 font-poppins "
                onBlur={() => {
                  toDateRef.current.type = "text";
                  setFocusTo(false);
                }}
                onFocus={() => {
                  toDateRef.current.type = "date";
                  setFocusTo(true);
                }}
                placeholder="Select Date"
              />
              <p
                className={`absolute ${
                  focusTo && "hidden"
                } right-3 top-[53px] cursor-pointer`}
              >
                <MdKeyboardArrowDown fontSize="25px" className="" />
              </p>
            </div>
          </div>
        </div>
        {/* TIME FRAME DIV ENDS HERE */}
        <div className="w-full mt-5 sm:hidden">
          <TimeIntervalCard />
        </div>
        {/* POLLUTATNTS DIV STARTS HERE */}
        <div className=" bg-backgroundDark border border-borderColor mt-5 rounded-lg flex flex-col h-[28rem] w-full font-poppins overflow-auto scroll ">
          <h1 className="border-b-2 border-borderColor flex items-center bg-backgroundDark font-raleway font-bold sm:text-lg uppercase sticky-top  p-5 px-3 sm:px-[1rem] sm:p-[1rem] h-16  ">
            Pollutants
          </h1>
          <div className="border-borderColor border-b transition ease-in-out duration-300 hover:bg-backgroundDarkRed">
            <p className="font-poppins  p-3 sm:p-5 flex flex-row items-center">
              CO<sub>2</sub>
            </p>
          </div>
          <div className="border-borderColor border-b transition ease-in-out duration-300 hover:bg-backgroundDarkRed">
            <p className="font-poppins  p-3 sm:p-5 flex flex-row items-center">
              CO
            </p>
          </div>
          <div className="border-borderColor border-b transition ease-in-out duration-300 hover:bg-backgroundDarkRed">
            <p className="font-poppins  p-3 sm:p-5 flex flex-row items-center">
              CO
            </p>
          </div>
          <div className="border-borderColor border-b transition ease-in-out duration-300 hover:bg-backgroundDarkRed">
            <p className="font-poppins  p-3 sm:p-5 flex flex-row items-center">
              CO
            </p>
          </div>
          <div className="border-borderColor border-b transition ease-in-out duration-300 hover:bg-backgroundDarkRed">
            <p className="font-poppins  p-3 sm:p-5 flex flex-row items-center">
              CO
            </p>
          </div>
          <div className="border-borderColor border-b transition ease-in-out duration-300 hover:bg-backgroundDarkRed">
            <p className="font-poppins  p-3 sm:p-5 flex flex-row items-center">
              CO
            </p>
          </div>
          <div className="border-borderColor border-b flex flex-row items-center transition ease-in-out duration-300 hover:bg-backgroundDarkRed hover:rounded-b-lg">
            <p className="font-poppins  p-3 sm:p-5 flex flex-row items-center">
              PM1
            </p>
          </div>
        </div>
        {/* POLLUTATNTS DIV ENDS HERE */}
        <article className="flex items-center justify-between w-full mt-5">
          <button
            type="submit"
            className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-white rounded-md bg-backgroundRed hover:brightness-90 tracking-widest font-poppins`}
          >
            download report
          </button>
        </article>
      </div>
      {/* time frame + POLLUTANT CONTAINER ends HERE */}
      {/* TIME INTERVAL DIV STARTS HERE */}
      <div className="hidden sm:flex w-[31%]">
        <TimeIntervalCard />
      </div>
      {/* TIME INTERVAL DIV ENDS HERE */}
    </div>
  );
};

export default ReportsComponent;
