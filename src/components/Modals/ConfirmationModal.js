//For confirmation before proceeding with an action, e.g deleting a user, device etc.

// Props:
// heading: string
// message: string
// leftButtonText: string
// rightButtonText: string
// onClickLeftButton: function
// onClickRightButton: function
// display: boolean

import React, { useState } from "react";
import { authLeft } from "../../animations/animations";
import { scaleUp } from "../../animations/animations";
import { motion } from "framer-motion";
import Loader from "../Auth/Loader/Loader";

const ConfirmationModal = (props) => {
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
      onClick={props.onCallConfirmationModal}
    >
      <motion.div
        variants={scaleUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col justify-between w-[320px] h-[200px] sm:w-[450px] sm:h-[300px] border rounded-lg bg-backgroundDark border-[#686868] p-5 sm:p-7 shadow-[0px_0px_20px_15px_#8705051f]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading start */}
        <article className="w-full flex justify-center  mb-4">
          <p className="font-bold font-raleway  text-textGreyLight text-xl">
            {props.heading}
          </p>
        </article>
        {/* Heading end */}
        {/* Confirmation message start */}
        <div className="flex justify-center max-h-28 scroll overflow-y-auto">
          <p className="text-center text-textGrey w-[350px]">{props.message}</p>
        </div>
        {/* Confirmation message end */}
        {/* Confirmation buttons start */}
        <div className="flex space-x-5">
          {/* left button starts */}
          <article className="flex items-center justify-between w-full mt-7">
            <button
              type="button"
              className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-black rounded-md bg-textGreyLight hover:brightness-90 tracking-widest font-poppins`}
              onClick={() => {
                props.onClickLeftButton();
              }}
            >
              {loader ? <Loader /> : `${props.leftButtonText}`}
            </button>
          </article>
          {/* left button ends */}
          {/* right button starts */}
          <article className="flex items-center justify-between w-full mt-7">
            <button
              type="button"
              className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-textGreyLight rounded-md bg-backgroundRed hover:brightness-90 tracking-widest font-poppins`}
              onClick={() => {
                props.onClickRightButton();
              }}
            >
              {loader ? <Loader /> : `${props.rightButtonText}`}
            </button>
          </article>
          {/* right button ends */}
        </div>
        {/* Confirmation buttons end */}
      </motion.div>
    </motion.section>
  );
};

export default ConfirmationModal;
