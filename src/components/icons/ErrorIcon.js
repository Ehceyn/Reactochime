import React from "react";

const ErrorIcon = () => {
  return (
    <svg
      height="60px"
      style={{ overflow: "visible", enableBackground: "new 0 0 32 32" }}
      viewBox="0 0 32 32"
      width="60px"
    >
      <g>
        <g id="Error_1_">
          <g id="Error">
            <circle
              cx="16"
              cy="16"
              id="BG"
              r="16"
              style={{ fill: "#D20202" }}
            />
            <path
              d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z"
              id="Exclamatory_x5F_Sign"
              style={{ fill: "#E6E6E6" }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ErrorIcon;
