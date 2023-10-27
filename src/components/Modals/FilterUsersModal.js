//For Adding a User.

// Props:
// heading: string
// message: string
// status: string is "success" or "error"
// ButtonText: string
// onCallFilterUsersModal: function
// onClickButton: function
// display: boolean

import React, { useState } from "react";
import { authLeft } from "../../animations/animations";
import { scaleUp } from "../../animations/animations";
import { motion } from "framer-motion";
import Loader from "../Auth/Loader/Loader";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const FilterUsersModal = (props) => {
  const [loader, setLoader] = useState(false);
  const [showList1, setShowList1] = useState(false); //Handles the show/hide of the list oft input1
  const [showList2, setShowList2] = useState(false); //Handles the show/hide of the list oft input2
  const [showList3, setShowList3] = useState(false); //Handles the show/hide of the list oft input3

  // Formik initial values ... this is the initial form state
  let initialValues = {
    name: "",
    email: "",
  };

  // Yup validation schema... this is for form validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email")
      .required("This field is required"),
  });

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
      className={`w-full h-screen bg-[#121212B2] shadow-sm text-textGrey fixed inset-0 z-[30000] flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallFilterUsersModal}
    >
      {/* Modal box starts */}
      <motion.div
        // variants={scaleUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col justify-between w-[320px] min-h-[200px] sm:w-[450px] sm:min-h-[300px] border rounded-lg bg-backgroundDark border-[#686868] p-5 sm:p-7 shadow-[0px_0px_20px_15px_#8705051f]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading start */}
        <article className="w-full flex justify-center  mb-7">
          <p className="font-bold font-raleway  text-textGreyLight text-xl">
            Add User{" "}
          </p>
        </article>
        {/* Heading end */}
        <article className=" ">
          {/* name inputt  block starts */}
          <article className="block mb-4">
            {/* name input start */}
            <div
              className={`relative`}
              onClick={() => {
                setShowList1(!showList1);
                setShowList2(false);
                setShowList3(false);
              }}
            >
              <input
                type="text"
                name="name"
                className=" block w-full px-4 py-2 h-[50px] font-normal bg-backgroundGrey bg-clip-padding rounded-md transition ease-in-out m-0 placeholder:text-textGreyLighter focus:bg-bg-backgroundGrey focus:outline-none"
                placeholder="Order By"
                value={formik.values.name}
                onChange={formik.handleChange}
                autoComplete="off"
                disabled
                onBlur={(e) => {
                  formik.handleBlur(e);
                }}
              />
              <p className="absolute right-3 top-3 cursor-pointer">
                {showList1 ? (
                  <MdOutlineKeyboardArrowUp fontSize="30px" />
                ) : (
                  <MdOutlineKeyboardArrowDown fontSize="30px" />
                )}
              </p>
            </div>{" "}
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
          {/* email input block starts */}
          <article className="block mb-4">
            {/* email input start */}
            <div
              className={`relative`}
              onClick={() => {
                setShowList2(!showList2);
                setShowList1(false);
                setShowList3(false);
              }}
            >
              <input
                type="email"
                name="email"
                className=" block w-full px-4 py-2 h-[50px] font-normal bg-backgroundGrey bg-clip-padding rounded-md transition ease-in-out m-0 placeholder:text-textGreyLighter focus:bg-bg-backgroundGrey focus:outline-none"
                placeholder="Enter email"
                value={formik.values.email}
                onChange={formik.handleChange}
                autoComplete="off"
                disabled
                onBlur={(e) => {
                  formik.handleBlur(e);
                }}
              />

              <p className="absolute right-3 top-3 cursor-pointer">
                {showList2 ? (
                  <MdOutlineKeyboardArrowUp fontSize="30px" />
                ) : (
                  <MdOutlineKeyboardArrowDown fontSize="30px" />
                )}
              </p>
            </div>{" "}
            {/* email input end */}
            {/* email Input Error Message start */}
            {formik.touched.email && formik.errors.email && (
              <p className="text-xs text-[#06CD3BC2] mt-1">
                {formik.errors.email}
              </p>
            )}
            {/* email Input Error Message end */}
          </article>
          {/* email input block ends */}
          {/* email input block starts */}
          <article className="block mb-4">
            {/* email input start */}
            <div
              className={`relative`}
              onClick={() => {
                setShowList3(!showList3);
                setShowList1(false);
                setShowList2(false);
              }}
            >
              <input
                type="email"
                name="email"
                className=" block w-full px-4 py-2 h-[50px] font-normal bg-backgroundGrey bg-clip-padding rounded-md transition ease-in-out m-0 placeholder:text-textGreyLighter focus:bg-bg-backgroundGrey focus:outline-none"
                placeholder="Enter email"
                value={formik.values.email}
                onChange={formik.handleChange}
                autoComplete="off"
                disabled
                onBlur={(e) => {
                  formik.handleBlur(e);
                }}
              />

              <p className="absolute right-3 top-3 cursor-pointer">
                {showList3 ? (
                  <MdOutlineKeyboardArrowUp fontSize="30px" />
                ) : (
                  <MdOutlineKeyboardArrowDown fontSize="30px" />
                )}
              </p>
            </div>{" "}
            {/* email input end */}
            {/* email Input Error Message start */}
            {formik.touched.email && formik.errors.email && (
              <p className="text-xs text-[#06CD3BC2] mt-1">
                {formik.errors.email}
              </p>
            )}
            {/* email Input Error Message end */}
          </article>
          {/* email input block ends */}
        </article>
        {/* FilterUsers buttons start */}
        <article className="flex items-center justify-between w-full mt-7">
          <button
            type="button"
            className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-textGreyLight rounded-md bg-backgroundRed hover:brightness-90 tracking-widest font-poppins`}
            onClick={() => {
              props.onClickButton();
            }}
          >
            {loader ? <Loader /> : `Add User`}
          </button>
        </article>
        {/* FilterUsers buttons end */}
      </motion.div>
      {/* FilterUsers block end */}
    </motion.section>
  );
};

export default FilterUsersModal;
