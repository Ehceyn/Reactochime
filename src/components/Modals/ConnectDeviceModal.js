//For Connecting a Device.

// Props:
// heading: string
// message: string
// status: string is "success" or "error"
// ButtonText: string
// onCallAddDeviceModal: function
// onClickButton: function
// display: boolean
// deviceName:string

import React, { useState } from "react";
import { authLeft } from "../../animations/animations";
import { scaleUp } from "../../animations/animations";
import { motion } from "framer-motion";
import Loader from "../Auth/Loader/Loader";
import { useFormik } from "formik";
import * as Yup from "yup";

const ConnectDeviceModal = (props) => {
  const [loader, setLoader] = useState(false);
  // Formik initial values ... this is the initial form state
  let initialValues = {
    name: "",
    location: "",
  };

  // Yup validation schema... this is for form validation
  const validationSchema = Yup.object({});

  //The useFormik hook... takes all variables for handling the form
  const formik = useFormik({
    initialValues,
    // onSubmit,
    validationSchema,
  });

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
      className={`w-full h-screen shadow-sm text-textGrey fixed inset-0 z-[300000] flex items-center  justify-center `}
      onClick={props.onCallAddDeviceModal}
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
        <article className="w-full  mb-7 text-center">
          {/* <button
            className="border border-[#686868] mb-5 p-2 text-xs font-semibold rounded-md"
            onClick={() => {
              props.onGoBack();
            }}
          >
            BACK
          </button> */}
          <h4 className="text-white">Get Started</h4>
          <h2 className="font-semibold text-center font-raleway  text-textGreyLight text-xl mt-9">
            Connect to network
          </h2>
          <p className="mt-4">
            Kindly connect your device to the {props.deviceName} network.
          </p>
        </article>
        {/* Heading end */}

        <div className="w-full flex gap-3">
          <button
            className="w-full p-3 border border-white bg-white text-black border-solid rounded-md text-xs font-semibold uppercase"
            onClick={() => {
              props.onGoBack();
            }}
          >
            back
          </button>
          <button className="w-full p-3 border border-backgroundRed bg-backgroundRed text-white border-solid rounded-md text-xs font-semibold uppercase">
            connect
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ConnectDeviceModal;
