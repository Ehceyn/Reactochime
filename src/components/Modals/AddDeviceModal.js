//For Adding a Device.

// Props:
// heading: string
// message: string
// status: string is "success" or "error"
// ButtonText: string
// onCallAddDeviceModal: function
// onClickButton: function
// display: boolean

import React, { useState } from "react";
import { authLeft } from "../../animations/animations";
import { scaleUp } from "../../animations/animations";
import { motion } from "framer-motion";
import Loader from "../Auth/Loader/Loader";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddDeviceModal = (props) => {
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
      className={`w-full h-screen bg-[#121212B2] shadow-sm text-textGrey fixed inset-0 z-[300000] flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
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
        <article className="w-full flex justify-center  mb-7">
          <p className="font-bold font-raleway  text-textGreyLight text-xl">
            Add Device{" "}
          </p>
        </article>
        {/* Heading end */}
        <article className=" ">
          {/* name inputt  block starts */}
          <article className="block mb-4">
            {/* label for device name start */}
            <label
              htmlFor="name"
              className="block text-textGreyLight font-poppins font-bold mb-2"
            >
              Device Name
            </label>
            {/* label for device name end */}
            {/* name input start */}
            <div className={``}>
              <input
                type="text"
                name="name"
                className=" block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border border-solid border-backgroundGrey rounded-md transition ease-in-out m-0 placeholder:text-backgroundGrey placeholder: focus:bg-transparent focus:border-textGrey focus:outline-none"
                placeholder="Enter Device Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={(e) => {
                  formik.handleBlur(e);
                }}
              />
            </div>
            {/* name input end */}
            {/* name Input Error Message start */}
            {formik.touched.name && formik.errors.name && (
              <p className="text-xs text-[#06CD3BC2] mt-1">
                {formik.errors.name}
              </p>
            )}
            {/* name Input Error Message end */}
          </article>
          {/* name input  block ends */}
          {/* location input block starts */}
          <article className="block mb-4">
            {/* label for location start */}
            <label
              htmlFor="location"
              className="block text-textGreyLight font-poppins font-bold mb-2"
            >
              Location
            </label>
            {/* label for location end */}
            {/* location input start */}
            <div className={``}>
              <input
                type="text"
                name="location"
                className=" block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border border-solid border-backgroundGrey rounded-md transition ease-in-out m-0 placeholder:text-backgroundGrey placeholder: focus:bg-transparent focus:border-textGrey focus:outline-none"
                placeholder="Enter Location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={(e) => {
                  formik.handleBlur(e);
                }}
              />
            </div>
            {/* location input end */}
            {/* location Input Error Message start */}
            {formik.touched.location && formik.errors.location && (
              <p className="text-xs text-[#06CD3BC2] mt-1">
                {formik.errors.location}
              </p>
            )}
            {/* location Input Error Message end */}
          </article>
          {/* location input block ends */}
        </article>
        {/* AddDevice buttons start */}
        <article className="flex items-center justify-between w-full mt-7">
          <button
            type="button"
            className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-textGreyLight rounded-md bg-backgroundRed hover:brightness-90 tracking-widest font-poppins`}
            onClick={() => {
              props.onClickButton();
            }}
          >
            {loader ? <Loader /> : `Add Device`}
          </button>
        </article>
        {/* AddDevice buttons end */}
      </motion.div>
    </motion.section>
  );
};

export default AddDeviceModal;
