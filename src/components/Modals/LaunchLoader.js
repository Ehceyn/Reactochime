//For Alerts, on success, error etc.

// Props:
// heading: string
// message: string
// status: string is "success" or "error"
// ButtonText: string
// onCallLaunchLoader: function
// onClickButton: function
// display: boolean

import React, { useState } from "react";
import { authLeft } from "../../animations/animations";
import { scaleUp } from "../../animations/animations";
import { motion } from "framer-motion";
import AnimatedLogo from "../AnimatedLogo";

const LaunchLoader = (props) => {
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
      className={`w-full h-screen bg-backgroundDark shadow-sm text-textGrey flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
    >
      <motion.div
        variants={scaleUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <AnimatedLogo className="w-72" />
      </motion.div>
    </motion.section>
  );
};

export default LaunchLoader;
