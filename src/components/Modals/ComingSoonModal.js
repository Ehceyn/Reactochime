/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
//Coming soon.

// Props:
// heading: string
// message: string
// status: string is "success" or "error"
// ButtonText: string
// onCallAddDeviceModal: function
// onClickButton: function
// display: boolean

import React from "react";
import { authLeft } from "../../animations/animations";
import { scaleUp } from "../../animations/animations";
import { motion } from "framer-motion";
import Welcome from "../icons/Welcome";
import ComingSoon from "../icons/ComingSoon";

const ComingSoonModal = (props) => {
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
      className={`w-full h-screen font-raleway bg-[#121212B2] shadow-sm text-textGrey fixed inset-0 z-[300000] flex items-center  justify-center `}
      onClick={props.onCallComingSoonModal}
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
          <ComingSoon />
        </div>
        <div className="w-full text-center ">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "easeInOut",
                delay: 0.8,
                type: "spring",
                stiffness: 300,
              },
            }}
            className="font-bold text-textGreyLight text-xl font-poppins"
          >
            Coming Soon...
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,

              transition: {
                ease: "easeInOut",
                delay: 0.95,
                duration: 0.5,
              },
            }}
            className="mt-2"
          >
            You'll soon be able to add multiple users
          </motion.p>
        </div>
        {/* Heading end */}
        {/* Add device redirect buttons start */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,

            transition: {
              ease: "easeInOut",
              delay: 1.05,
              duration: 0.5,
            },
          }}
          className="flex items-center justify-between w-full mt-7"
        >
          <button
            type="button"
            className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-textGreyLight rounded-md bg-backgroundRed hover:brightness-90 tracking-widest font-poppins
            `}
            onClick={props.onClickButton}
          >
            ok, i got it
          </button>
        </motion.article>
        {/* Add device redirect buttons end */}
      </motion.div>
    </motion.section>
  );
};

export default ComingSoonModal;
