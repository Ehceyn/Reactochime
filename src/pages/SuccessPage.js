import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Auth/Loader/Loader";
import SuccessIcon from "../components/icons/SuccessIcon";
import FilterUsersModal from "../components/Modals/FilterUsersModal";

const SuccessPage = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-backgroundDark overflow-y-auto flex h-screen w-full text-textAuthGrey font-raleway items-center justify-center py-7">
        <div className="flex flex-col items-center space-y-7 w-[450px]  rounded-md  px-5 scrollbar-hide">
          {/*Start of Header */}
          <h2 className="text-2xl font-bold text-center font-raleway">
            Success!
          </h2>
          {/* End of header */}
          {/* Alert status icon start */}
          <div className="w-full flex justify-center items-center mb-4">
            <SuccessIcon />
          </div>
          {/* Alert message start */}
          {/* Verification message */}
          <div>
            <p className="text-center text-textGrey">
              {/* email verified successfully message */}
              Your email address has been verified successfully.
            </p>
          </div>
          {/* Verification message ends */}

          {/* Start of button block */}
          <article className="flex items-center justify-between w-full mt-7">
            <button
              type="submit"
              className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-white rounded-md bg-backgroundRed hover:brightness-90 tracking-wider font-poppins`}
              onClick={() => navigate("/auth/login", { replace: true })}
            >
              {loader ? <Loader /> : "click to Login"}
            </button>
          </article>
          {/* End of button block */}
        </div>
      </section>

      {/* Confirmation modal starts */}
      <FilterUsersModal display={false} />
      {/* Confirmation modal ends */}
    </>
  );
};

export default SuccessPage;
