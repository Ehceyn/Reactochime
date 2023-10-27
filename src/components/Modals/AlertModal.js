//For Alerts, on success, error etc.

// Props:
// heading: string
// message: string
// status: string is "success" or "error"
// ButtonText: string
// onCallAlertModal: function
// onClickButton: function
// display: boolean

import React, { useState } from "react";
import { authLeft } from "../../animations/animations";
import { scaleUp } from "../../animations/animations";
import { motion } from "framer-motion";
import Loader from "../Auth/Loader/Loader";
import ErrorIcon from "../icons/ErrorIcon";
import SuccessIcon from "../icons/SuccessIcon";

const AlertModal = (props) => {
  const [loader, setLoader] = useState(false);

  return (
    <motion.section
      variants={authLeft}
      initial="initial"
      animate="animate"
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          delay: 2,
        },
      }}
      className={`w-full h-screen bg-[#121212B2] shadow-sm text-textGrey fixed inset-0 z-[30000] flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallAlertModal}
    >
      <motion.div
        variants={scaleUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col justify-between w-[320px] min-h-[200px] sm:w-[450px] sm:min-h-[300px] border rounded-lg bg-backgroundDark border-[#686868] p-5 sm:p-7 shadow-[0px_0px_20px_15px_#8705051f]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading start */}
        <article className="w-full flex justify-center  mb-4">
          <p className="font-bold font-raleway  text-textGreyLight text-xl">
            {props.heading}
          </p>
        </article>
        {/* Heading end */}
        {/* Alert status icon start */}
        <div className="w-full flex justify-center items-center mb-4">
          {/* conditional rendering of icons based on props.status */}
          {props.status === "success" ? <SuccessIcon /> : <ErrorIcon />}
        </div>
        {/* Alert message start */}
        <div className="flex justify-center max-h-28 overflow-y-auto">
          <p className="text-center text-textGrey w-[350px]">{props.message}</p>
        </div>
        {/* Alert message end */}
        {/* Alert buttons start */}
        <article className="flex items-center justify-between w-full mt-7">
          <button
            type="button"
            className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-textGreyLight rounded-md bg-backgroundRed hover:brightness-90 tracking-widest font-poppins`}
            onClick={props.onClickButton}
          >
            {loader ? <Loader /> : `${props.ButtonText}`}
          </button>
        </article>
        {/* Alert buttons end */}
      </motion.div>
    </motion.section>
  );
};

export default AlertModal;
