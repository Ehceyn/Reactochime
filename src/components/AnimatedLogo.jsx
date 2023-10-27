import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedLogo = ({ className }) => {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  const controls = useAnimation();

  useEffect(() => {
    console.log(controls);
    controls.start((i) => ({
      strokeDashoffset: 0,
      transition: {
        duration: 2,
        delay: i * 0.5, // Adjust the delay between animations
      },
    }));
  }, [controls]);

  return (
    <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
      //   xml:space="preserve"
      version="1.0"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      className={className}
      viewBox="4848 9232 19222 11719"
    >
      <motion.path
        animate={controls}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        className="fil0"
        fill={"#D20202"}
        d="M6193 14664l0 378c0,65 -24,122 -71,170 -48,48 -105,72 -172,72l-137 0 380 452 0 28 -239 0 -404 -480 -459 0c-10,0 -24,-1 -41,-3l0 483 -202 0 0 -1343 1102 0c67,0 124,24 172,72 47,48 71,105 71,171zm-1102 419l859 0c11,0 21,-4 29,-13 8,-8 12,-17 12,-28l0 -378c0,-11 -4,-21 -12,-29 -8,-8 -18,-12 -29,-12l-859 0c-11,0 -21,4 -29,12 -8,8 -12,18 -12,29l0 378c0,11 4,20 12,28 8,9 18,13 29,13z"
      />
      <motion.path
        animate={controls}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        class="fil0"
        fill={"#D20202"}
        d="M6193 14664l0 378c0,65 -24,122 -71,170 -48,48 -105,72 -172,72l-137 0 380 452 0 28 -239 0 -404 -480 -459 0c-10,0 -24,-1 -41,-3l0 483 -202 0 0 -1343 1102 0c67,0 124,24 172,72 47,48 71,105 71,171zm-1102 419l859 0c11,0 21,-4 29,-13 8,-8 12,-17 12,-28l0 -378c0,-11 -4,-21 -12,-29 -8,-8 -18,-12 -29,-12l-859 0c-11,0 -21,4 -29,12 -8,8 -12,18 -12,29l0 378c0,11 4,20 12,28 8,9 18,13 29,13z"
      />
      <motion.path
        animate={controls}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        id="1"
        class="fil0"
        fill={"#D20202"}
        d="M7627 14420l0 201 -1031 0 0 370 829 0 0 202 -829 0 0 370 1031 0 0 201 -1233 0 0 -1344 1233 0z"
      />
      <motion.path
        animate={controls}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        id="2"
        class="fil0"
        fill={"#D20202"}
        d="M8068 14420l859 0c67,0 124,23 171,71 48,47 71,104 71,171l0 1102 -201 0 0 -470 -941 0 0 470 -202 0 0 -1102c0,-67 23,-124 71,-171 47,-48 104,-71 172,-71zm-41 672l941 0 0 -430c0,-11 -4,-20 -12,-29 -8,-8 -18,-12 -29,-12l-859 0c-12,0 -21,4 -29,12 -8,9 -12,18 -12,29l0 430z"
      />
      <motion.path
        animate={controls}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        id="3"
        class="fil0"
        fill={"#D20202"}
        d="M10723 14621l-1098 0c-11,0 -21,4 -29,12 -8,9 -12,18 -12,29l0 859c0,12 4,21 12,29 8,9 18,13 29,13l1098 0 0 201 -1098 0c-67,0 -124,-23 -172,-71 -47,-47 -71,-104 -71,-172l0 -859c0,-67 24,-124 71,-171 48,-48 105,-71 172,-71l1098 0 0 201z"
      />
      <motion.path
        animate={controls}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        id="4"
        class="fil0"
        fill={"#D20202"}
        d="M10850 14420l1345 0 0 201 -572 0 0 1143 -201 0 0 -1143 -572 0 0 -201z"
      />
      <motion.path
        animate={controls}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        id="5"
        class="fil0"
        fill={"#D20202"}
        d="M12574 14420l859 0c67,0 125,23 172,71 47,47 71,104 71,171l0 859c0,68 -24,125 -71,172 -47,48 -105,71 -172,71l-859 0c-67,0 -124,-23 -172,-71 -47,-47 -71,-104 -71,-172l0 -859c0,-67 24,-124 71,-171 48,-48 105,-71 172,-71zm0 1143l859 0c11,0 21,-4 29,-13 8,-8 12,-17 12,-29l0 -859c0,-11 -4,-20 -12,-29 -8,-8 -18,-12 -29,-12l-859 0c-11,0 -21,4 -29,12 -8,9 -12,18 -12,29l0 859c0,12 4,21 12,29 8,9 18,13 29,13z"
      />
      <motion.path
        animate={controls}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        id="6"
        class="fil0"
        fill={"#D20202"}
        d="M15222 14621l-1098 0c-11,0 -21,4 -29,12 -8,9 -12,18 -12,29l0 859c0,12 4,21 12,29 8,9 18,13 29,13l1098 0 0 201 -1098 0c-67,0 -124,-23 -172,-71 -47,-47 -71,-104 -71,-172l0 -859c0,-67 24,-124 71,-171 48,-48 105,-71 172,-71l1098 0 0 201z"
      />
      <motion.path
        animate={controls}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        id="7"
        class="fil0"
        fill={"#D20202"}
        d="M16593 14420l202 0 0 1344 -202 0 0 -571 -973 0 0 571 -202 0 0 -1344 202 0 0 571 973 0 0 -571z"
      />
      <motion.path
        animate={controls}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        id="8"
        class="fil0"
        fill={"#D20202"}
        d="M17008 15764l0 -1344 201 0 0 1344 -201 0z"
      />
      <motion.path
        animate={controls}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        id="9"
        class="fil0"
        fill={"#D20202"}
        d="M18179 15042l521 -622 240 0 0 1344 -201 0 0 -1075 -560 666 -561 -666 0 1075 -201 0 0 -1344 239 0 523 622z"
      />
      <motion.path
        animate={controls}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        id="10"
        class="fil0"
        fill={"#D20202"}
        d="M20386 14420l0 201 -1031 0 0 370 829 0 0 202 -829 0 0 370 1031 0 0 201 -1233 0 0 -1344 1233 0z"
      />
      <motion.path
        animate={controls}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        class="fil1"
        fill={"#D20202"}
        d="M18210 9232c3236,0 5860,2624 5860,5860 0,3236 -2624,5859 -5860,5859 -2918,0 -5337,-2133 -5785,-4924l191 0c445,2687 2780,4737 5594,4737 3132,0 5672,-2540 5672,-5672 0,-3132 -2540,-5672 -5672,-5672 -2814,0 -5149,2050 -5594,4737l-191 0c448,-2792 2867,-4925 5785,-4925z"
      />{" "}
    </svg>
  );
};

export default AnimatedLogo;
