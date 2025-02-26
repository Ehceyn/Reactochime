import { motion } from "framer-motion";
import React from "react";

const ComingSoon = () => {
  return (
    <div>
      <motion.svg
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            ease: "easeInOut",
            delay: 0.5,
            type: "spring",
            stiffness: 200,
          },
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="sm:h-[75px] h-[60px] sm:w-[75px] w-[60px] stroke-backgroundRed fill-backgroundRed"
      >
        <path d="M87.6 34.58c0-.01 0-.03-.01-.04a.138.138 0 0 1-.03-.04 40.77 40.77 0 0 0-5.22-7.51l2.58-2.58c.78.37 1.66.59 2.58.59 3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6c0 .92.22 1.8.59 2.58l-2.54 2.54c-2.23-2.09-4.65-3.9-7.21-5.42-.03-.02-.05-.04-.08-.05-.02-.02-.05-.02-.07-.04a40.655 40.655 0 0 0-18.69-5.56V9h6c1.1 0 2-.9 2-2s-.9-2-2-2h-16c-1.1 0-2 .9-2 2s.9 2 2 2h6v4.06c-2.13.11-4.28.36-6.41.81a1.997 1.997 0 0 0-1.55 2.36 2.005 2.005 0 0 0 2.37 1.55c1.86-.39 3.73-.61 5.59-.71V21c0 1.1.9 2 2 2s2-.9 2-2v-3.94c5.24.27 10.35 1.66 14.99 4.06l-2 3.41a2.005 2.005 0 0 0 1.72 3.02c.69 0 1.36-.36 1.73-.99l1.99-3.4a36.87 36.87 0 0 1 5.73 4.68c2.12 2.11 3.91 4.42 5.41 6.87l-3.47 1.87c-.97.52-1.34 1.74-.81 2.71a1.996 1.996 0 0 0 2.71.81l3.47-1.87c2.05 4.36 3.2 9.05 3.45 13.77H84.5c-1.1 0-2 .9-2 2s.9 2 2 2h3.92c-.25 4.72-1.4 9.41-3.45 13.77L81.5 67.9c-.98-.52-2.19-.16-2.71.81-.53.97-.17 2.19.81 2.71l3.47 1.87c-1.5 2.45-3.29 4.76-5.41 6.87a36.87 36.87 0 0 1-5.73 4.68l-1.99-3.4a2.003 2.003 0 0 0-3.45 2.03l2 3.41c-4.64 2.4-9.75 3.79-14.99 4.07V87c0-1.1-.9-2-2-2s-2 .9-2 2v3.93c-1.86-.1-3.73-.32-5.59-.71-1.08-.22-2.14.47-2.37 1.55-.22 1.08.47 2.14 1.55 2.36 2.81.59 5.64.88 8.45.88 10.76 0 21.17-4.23 28.95-12.02 2.88-2.88 5.24-6.09 7.08-9.5 0-.01.01-.02.02-.03.01-.01.01-.03.01-.04a40.987 40.987 0 0 0 4.88-19.17c.01-.08.02-.17.02-.25 0-.08-.01-.17-.02-.25-.04-6.61-1.67-13.2-4.88-19.17zM87.5 17c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM50.99 60.04c.41.08.82.12 1.23.12 2.41 0 4.72-1.33 6.02-3.55l9.25-15.87c.46-.78.33-1.78-.31-2.42-.64-.64-1.64-.77-2.42-.31l-15.87 9.25c-2.6 1.52-3.98 4.43-3.43 7.25.26 1.37.93 2.62 1.92 3.61s2.24 1.66 3.61 1.92zm-.08-9.32 9.3-5.43-5.43 9.3c-.65 1.12-1.9 1.75-3.03 1.53a2.99 2.99 0 0 1-1.54-.83 2.99 2.99 0 0 1-.83-1.54c-.22-1.14.41-2.38 1.53-3.03zM38.5 29c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2s.9-2 2-2h4c1.1 0 2 .9 2 2zm0 10c0 1.1-.9 2-2 2h-12c-1.1 0-2-.9-2-2s.9-2 2-2h12c1.1 0 2 .9 2 2zm0 10c0 1.1-.9 2-2 2h-20c-1.1 0-2-.9-2-2s.9-2 2-2h20c1.1 0 2 .9 2 2zm0 10c0 1.1-.9 2-2 2h-28c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2zm0 10c0 1.1-.9 2-2 2h-20c-1.1 0-2-.9-2-2s.9-2 2-2h20c1.1 0 2 .9 2 2zm0 10c0 1.1-.9 2-2 2h-12c-1.1 0-2-.9-2-2s.9-2 2-2h12c1.1 0 2 .9 2 2z" />
      </motion.svg>
    </div>
  );
};

export default ComingSoon;
