import React, { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Loader from "../components/Auth/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
import GoToTop from "../components/GoToTop/GoToTop";
import { AuthContext } from "../state/contexts/AuthContext";
import AlertModal from "../components/Modals/AlertModal";

const LogIn = () => {
  const [loader, setLoader] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertHeading, setAlertHeading] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //   Initialize the navigate hook
  const navigate = useNavigate();

  // Auth context
  const { state, authSuccess, signIn, updateState, error } =
    useContext(AuthContext);

  // Listen for error
  useEffect(() => {
    if (error.isError) {
      setDisplayAlert(true);
      setAlertHeading("Error");
      setAlertMessage(error.errorMsg);
      setAlertStatus("error");
    }
  }, [error.isError]);

  // Console log context
  // console.log(state);
  // console.log(error);
  // console.log(authSuccess);

  // handle Sign up
  const handleSignIn = (email, password) => {
    signIn(email, password);
  };

  // Formik initial values ... this is the initial form state
  let initialValues = {
    email: "itzmeruz31@gmail.com",
    password: "Password1#",
  };

  // Yup validation schema... this is for form validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must contain at least one uppercase, one lowercase, one number and one special character e.g (!@#$%^&*)"
      )
      .required("This field is required"),
  });

  //The useFormik hook... takes all variables for handling the form
  const formik = useFormik({
    initialValues,
    // onSubmit,
    validationSchema,
  });

  return (
    <>
      {/* Start of login page */}
      <section className="bg-backgroundDark overflow-y-auto w-full flex h-full items-center justify-center py-7 scroll">
        <div className="w-[450px] h-full rounded-md  px-5 scrollbar-hide">
          {/*Start of Header */}
          <h2 className="text-2xl font-bold text-center font-raleway mb-7">
            Log In
          </h2>
          {/* End of header */}
          {/* Form starts */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
              handleSignIn(formik.values.email, formik.values.password);
            }}
          >
            <article className="mb-4 ">
              {/* Email inputt  block starts */}
              <article className="block mb-4">
                {/* Email input start */}
                <div className={``}>
                  <input
                    type="password"
                    name="email"
                    className=" block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border-[2px] border-solid border-backgroundGrey rounded-md transition ease-in-out m-0 placeholder:text-[#343535] placeholder: focus:bg-transparent focus:border-textGrey focus:outline-none"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                      formik.handleBlur(e);
                    }}
                  />
                </div>
                {/* Email input end */}
                {/* Email Input Error Message start */}
                {formik.touched.email && formik.errors.email && (
                  <p className="text-xs text-[#06CD3BC2] mt-1">
                    {formik.errors.email}
                  </p>
                )}
                {/* Email Input Error Message end */}
              </article>
              {/* Email input  block ends */}
              {/* Password input  block starts */}
              <article className="block mb-4">
                {/* Password input start */}
                <div className={`relative`}>
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    id="password"
                    className=" block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border-[2px] border-solid border-backgroundGrey rounded-md transition ease-in-out m-0 placeholder:text-[#343535] placeholder: focus:bg-transparent focus:border-textGrey focus:outline-none"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                      formik.handleBlur(e);
                    }}
                  />
                  <p
                    className="absolute right-3 top-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiOutlineEye fontSize="20px" />
                    ) : (
                      <AiOutlineEyeInvisible fontSize="20px" />
                    )}
                  </p>
                </div>
                {/* Password input end */}

                {/*Password Input Error Message */}
                {formik.touched.password && formik.errors.password && (
                  <p className="text-xs mt-1 text-[#06CD3BC2]">
                    {formik.errors.password}
                  </p>
                )}
                {/* Password input block ends */}
              </article>
              {/* Password input block ends */}
            </article>

            <article className="flex items-center justify-between mb-4">
              <div className="text-sm">
                <button
                  type="button"
                  className="font-[400] text-sm hover:underline hover:underline-offset-1"
                  //   onClick={resetPassword}
                >
                  {" "}
                  Forgot your password?{" "}
                </button>
              </div>
            </article>

            {/* OR Divider starts*/}
            <article className="flex items-center  w-full mt-5">
              <div className="border-t border-backgroundGrey w-full"></div>
              <p className="mx-3 font-poppins">OR</p>
              <div className="border-t border-backgroundGrey w-full"></div>
            </article>
            {/* OR Divider ends*/}

            {/*Sign in With google starts*/}
            <article className="flex items-center justify-between w-full mt-5">
              <button
                type="button"
                className={`flex justify-center items-center px-4 h-12 w-24 grow text-white rounded-md bg-backgroundGrey border border-solid border-[#dadada26] hover:brightness-90`}
              >
                <FcGoogle fontSize="25px" className="mr-1 ml-2" />
                Google
              </button>
            </article>
            {/*Sign in With google ends*/}
            {/* Login button starts */}
            <article className="flex items-center justify-between w-full mt-7">
              <button
                type="submit"
                className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-white rounded-md bg-backgroundRed hover:brightness-90 tracking-widest font-poppins`}
              >
                {authSuccess ? <Loader /> : "log In"}
              </button>
            </article>
            {/* Login button ends */}
          </form>
          {/* Form ends */}

          {/* Sign up redirect button starts */}
          <div className="mt-7">
            <article className="flex transition-[border] duration-300 w-full  justify-center">
              <p className="">First time?</p>
              <p
                className="pl-2 transition-[border] text-backgroundRed duration-300 cursor-pointer hover:underline hover:underline-offset-1"
                onClick={() => {
                  navigate("/auth/signup");
                }}
              >
                Create an account
              </p>
            </article>
          </div>
          {/* Sign up redirect button ends */}
        </div>
      </section>
      {/* End  of login page */}
      {displayAlert && (
        <AlertModal
          display={displayAlert}
          heading={alertHeading}
          message={alertMessage}
          status={alertStatus}
          onClickButton={() => {
            setDisplayAlert(false);
          }}
          onCallAlertModal={() => setDisplayAlert(false)}
          ButtonText="OK, I got it"
        />
      )}{" "}
    </>
  );
};

export default LogIn;
