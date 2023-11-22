/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
//For Choosing a Device.

// Props:
// heading: string
// message: string
// status: string is "success" or "error"
// ButtonText: string
// onCallAddDeviceModal: function
// onClickButton: function
// display: boolean

import React from "react";
import ReactDOM from "react-dom";
import { authLeft } from "../../animations/animations";
import { scaleUp } from "../../animations/animations";
import { motion } from "framer-motion";
import Loader from "../Auth/Loader/Loader";
import Welcome from "../icons/Welcome";

const DeviceTypeModal = (props) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;
  const modalComponent = (
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
      className={`w-full h-screen font-raleway bg-[#121212B2] shadow-sm text-textGrey fixed inset-0 z-[500000] flex items-center  justify-center `}
      onClick={props.toggleDevice}
    >
      <motion.div
        variants={scaleUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-between w-[320px] min-h-[200px] sm:w-[450px] sm:min-h-[300px] border rounded-lg bg-backgroundDark border-borderColor p-5 sm:p-7 shadow-[0px_0px_20px_15px_#8705051f]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading start */}
        <div>
          <Welcome width="301" height="60" />
        </div>
        <div className="w-full text-center ">
          <p className="font-bold text-lg font-poppins">About Reactochime</p>
          <p className="mt-2">
            Let's help you setup your device Let's help you setup your device
            Let's help you setup your device Let's help you setup your device
            Let's help you setup your device Let's help you setup your device
            Let's help you setup your device
          </p>
        </div>
        {/* Heading end */}
        {/* Add device redirect buttons start */}
        <article className="flex items-center justify-between w-full mt-7">
          <button
            onClick={props.onClickButton}
            type="button"
            className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-textGreyLight rounded-md bg-backgroundRed hover:brightness-90 tracking-widest font-poppins`}
          >
            ok
          </button>
        </article>
        {/* Add device redirect buttons end */}
      </motion.div>
    </motion.section>
  );
  return ReactDOM.createPortal(modalComponent, modalRoot);
};

export default DeviceTypeModal;
