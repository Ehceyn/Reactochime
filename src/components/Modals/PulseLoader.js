import React from "react";

const PulseLoader = () => {
  return (
    <div
      className="snippet bg-transparent h-[100px] flex items-center justify-center"
      dataTitle=".dot-pulse"
    >
      <div className="stage">
        <div className="dot-pulse"></div>
      </div>
    </div>
  );
};

export default PulseLoader;
